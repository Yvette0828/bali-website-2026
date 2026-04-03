// ===========================
// Bali 2026 Travel App
// ===========================

const ITINERARY = {
  1: {
    date: "2026/04/11",
    title: "抵達峇里島",
    subtitle: "長途飛行 → Canggu 安頓",
    items: [
      { time: "06:50", name: "TPE 桃園機場出發", type: "transport", duration: "飛行 ~5.5h" },
      { time: "15:15", name: "DPS 伍拉賴機場抵達", type: "transport", duration: "入境 ~1h" },
      { time: "16:47", name: "峇里島水明漾海灘英迪格酒店", type: "hotel", duration: "check-in" },
      { time: "18:15", name: "L'Osteria Pizza e Cucina Canggu", type: "restaurant", duration: "晚餐 ~1h" },
      { time: "19:35", name: "Santanera", type: "activity", duration: "~1h" },
      { time: "21:08", name: "英迪格酒店", type: "hotel", duration: "就寢" },
    ]
  },
  2: {
    date: "2026/04/12",
    title: "Canggu 漫遊",
    subtitle: "早午餐、Spa、海灘夕陽",
    items: [
      { time: "08:00", name: "英迪格酒店", type: "hotel", duration: "出發" },
      { time: "08:37", name: "Milk & Madu Beach Road", type: "restaurant", duration: "早餐 ~1h" },
      { time: "09:40", name: "Gigi Susu", type: "activity", duration: "~1h" },
      { time: "10:35", name: "Sensatia – Batu Bolong Canggu", type: "activity", duration: "~1h" },
      { time: "11:38", name: "La Brisa Sunday Market", type: "activity", duration: "~2.5h" },
      { time: "14:15", name: "Udara Bali Yoga Detox & Spa", type: "activity", duration: "Spa ~3h" },
      { time: "17:42", name: "La Brisa Bali | Beach Club", type: "activity", duration: "夕陽 ~1.5h" },
      { time: "19:11", name: "Naughty Nuri's Warung Seminyak", type: "restaurant", duration: "晚餐 ~1h" },
      { time: "20:26", name: "英迪格酒店", type: "hotel", duration: "就寢" },
    ]
  },
  3: {
    date: "2026/04/13",
    title: "前往烏布",
    subtitle: "猴子森林、皇宮、聖河",
    items: [
      { time: "08:00", name: "英迪格酒店 Check-out", type: "hotel", duration: "出發烏布" },
      { time: "09:15", name: "Sisterfields", type: "restaurant", duration: "早午餐 ~1.5h" },
      { time: "11:00", name: "ULU SPA Club", type: "activity", duration: "Spa ~1.5h" },
      { time: "13:46", name: "Kurasu Ubud", type: "restaurant", duration: "咖啡 ~1h" },
      { time: "14:58", name: "Sacred Monkey Forest Sanctuary", type: "activity", duration: "~1h" },
      { time: "16:05", name: "烏布皇宮", type: "activity", duration: "~1h" },
      { time: "17:08", name: "烏布水皇宮", type: "activity", duration: "~1h" },
      { time: "18:18", name: "Sayan Point", type: "restaurant", duration: "晚餐" },
    ]
  },
  4: {
    date: "2026/04/14",
    title: "火山日出 & 梯田",
    subtitle: "凌晨出發、巴杜爾火山、德哥拉朗",
    items: [
      { time: "03:00", name: "巴杜爾火山日出健行", type: "activity", duration: "~5h" },
      { time: "08:56", name: "Tis Cafe", type: "restaurant", duration: "早餐 ~1.5h" },
      { time: "10:28", name: "德哥拉朗梯田", type: "activity", duration: "~1h" },
      { time: "12:02", name: "The Garcia Ubud", type: "hotel", duration: "check-in" },
      { time: "13:41", name: "聖泉寺", type: "activity", duration: "~1h" },
      { time: "15:21", name: "The Garcia Ubud", type: "hotel", duration: "休息" },
    ]
  },
  5: {
    date: "2026/04/15",
    title: "返回台灣",
    subtitle: "烏布 → 機場 → 台北",
    items: [
      { time: "07:00", name: "The Garcia Ubud Check-out", type: "hotel", duration: "最後早餐" },
      { time: "13:30", name: "DPS 伍拉賴機場", type: "transport", duration: "~3h 候機" },
      { time: "22:00", name: "TPE 桃園機場抵達", type: "transport", duration: "回到台灣 🎉" },
    ]
  },
  backup: {
    date: "",
    title: "備案景點",
    subtitle: "排不進去但想去的地方",
    items: [
      { name: "Tanjung Benoa Beach", type: "activity", desc: "海邊活動、水上運動" },
      { name: "Mudra Cafe", type: "restaurant", desc: "特色咖啡廳" },
    ]
  }
};

const TYPE_ICONS = {
  restaurant: "🍽️",
  activity: "🎯",
  hotel: "🏨",
  transport: "✈️",
  other: "📌"
};

let bookings = [];
let currentDay = "1";
let editingId = null;
let selectedType = "restaurant";

// === Init ===
document.addEventListener("DOMContentLoaded", async () => {
  await loadBookings();
  renderDay(currentDay);
  setupTabs();
  setupModal();
  hideLoading();
});

function hideLoading() {
  document.getElementById("loading").style.display = "none";
}

// === Data Layer (localStorage with Netlify Function sync) ===
async function loadBookings() {
  // Load from localStorage first (instant)
  const local = localStorage.getItem("bali_bookings");
  if (local) bookings = JSON.parse(local);

  // Then sync from server
  try {
    const res = await fetch("/api/bookings");
    if (res.ok) {
      const data = await res.json();
      if (data.bookings) {
        bookings = data.bookings;
        localStorage.setItem("bali_bookings", JSON.stringify(bookings));
      }
    }
  } catch (e) {
    // Offline: use localStorage
    console.log("Offline mode: using local data");
  }
}

async function saveBookings() {
  localStorage.setItem("bali_bookings", JSON.stringify(bookings));
  try {
    await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookings })
    });
  } catch (e) {
    console.log("Offline: saved locally only");
  }
}

// === Tabs ===
function setupTabs() {
  document.getElementById("day-tabs").addEventListener("click", e => {
    const tab = e.target.closest(".day-tab");
    if (!tab) return;
    const day = tab.dataset.day;
    document.querySelectorAll(".day-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentDay = day;
    renderDay(day);
  });
}

// === Render ===
function renderDay(day) {
  const main = document.getElementById("main-content");
  const loading = document.getElementById("loading");

  main.innerHTML = "";
  main.appendChild(loading);

  if (day === "backup") {
    renderBackup(main);
    return;
  }

  const data = ITINERARY[day];
  if (!data) return;

  const section = document.createElement("div");
  section.className = "day-section active";

  section.innerHTML = `
    <div class="day-header">
      <div class="day-label">Day ${day} · ${data.date}</div>
      <h2 class="day-title">${data.title}</h2>
      <p class="day-subtitle">${data.subtitle}</p>
    </div>
    <div class="section-label">行程</div>
    <div class="timeline" id="timeline-${day}"></div>
    <div class="section-label">預訂資訊</div>
    <div class="bookings-list" id="bookings-${day}"></div>
  `;

  main.appendChild(section);
  renderTimeline(day, data.items);
  renderBookings(day);
}

function renderTimeline(day, items) {
  const el = document.getElementById(`timeline-${day}`);
  if (!el) return;

  items.forEach((item, i) => {
    const wrapper = document.createElement("div");
    wrapper.className = "timeline-item";

    wrapper.innerHTML = `
      <div class="timeline-left">
        <div class="timeline-time">${item.time || ""}</div>
        <div class="timeline-dot"></div>
        ${i < items.length - 1 ? '<div class="timeline-line"></div>' : ""}
      </div>
      <div class="timeline-card type-${item.type}">
        <div class="card-name">
          <span class="card-type-dot"></span>
          ${item.name}
        </div>
        ${item.duration ? `<div class="card-duration">${item.duration}</div>` : ""}
      </div>
    `;
    el.appendChild(wrapper);
  });
}

function renderBookings(day) {
  const el = document.getElementById(`bookings-${day}`);
  if (!el) return;

  const dayBookings = bookings.filter(b => String(b.day) === String(day));

  if (dayBookings.length === 0) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <p>還沒有預訂資訊</p>
        <button class="btn-add-inline" onclick="openModal()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新增預訂
        </button>
      </div>
    `;
    return;
  }

  dayBookings.forEach(b => {
    const item = document.createElement("div");
    item.className = "booking-item";
    item.onclick = () => openModal(b);
    item.innerHTML = `
      <div class="booking-icon">${TYPE_ICONS[b.type] || "📌"}</div>
      <div class="booking-info">
        <div class="booking-name">${b.place}</div>
        <div class="booking-meta">
          ${b.time ? `<span class="booking-tag">${b.time}</span>` : ""}
          ${b.reservation ? `<span class="booking-tag confirmed">預約 ${b.reservation}</span>` : ""}
          ${b.confirmation ? `<span class="booking-tag">#${b.confirmation}</span>` : ""}
        </div>
        ${b.notes ? `<div class="booking-notes">${b.notes}</div>` : ""}
      </div>
    `;
    el.appendChild(item);
  });
}

function renderBackup(main) {
  const data = ITINERARY.backup;
  const section = document.createElement("div");
  section.className = "day-section active";

  section.innerHTML = `
    <div class="day-header">
      <div class="day-label">備案 & 候補</div>
      <h2 class="day-title">${data.title}</h2>
      <p class="day-subtitle">${data.subtitle}</p>
    </div>
    <div class="section-label">想去的地方</div>
    <div class="backup-grid">
      ${data.items.map(item => `
        <div class="backup-card">
          <div class="backup-card-icon">${TYPE_ICONS[item.type]}</div>
          <div class="backup-card-name">${item.name}</div>
          <div class="backup-card-desc">${item.desc}</div>
        </div>
      `).join("")}
    </div>
    <div class="section-label" style="margin-top: 24px">備案預訂</div>
    <div class="bookings-list" id="bookings-backup"></div>
  `;

  main.appendChild(section);
  renderBookings("backup");
}

// === Modal ===
function setupModal() {
  document.getElementById("btn-add").onclick = () => openModal();
  document.getElementById("modal-close").onclick = closeModal;
  document.getElementById("modal-overlay").onclick = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  // Type chips
  document.getElementById("type-chips").addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    selectedType = chip.dataset.type;
  });

  document.getElementById("booking-form").onsubmit = async e => {
    e.preventDefault();
    await saveBooking();
  };

  document.getElementById("btn-delete").onclick = async () => {
    if (!editingId) return;
    bookings = bookings.filter(b => b.id !== editingId);
    await saveBookings();
    closeModal();
    renderDay(currentDay);
    showToast("已刪除 🗑️");
  };
}

function openModal(booking = null) {
  editingId = booking?.id || null;
  const isEdit = !!booking;

  document.getElementById("modal-title").textContent = isEdit ? "編輯預訂" : "新增預訂";
  document.getElementById("btn-delete").style.display = isEdit ? "block" : "none";
  document.getElementById("form-id").value = booking?.id || "";
  document.getElementById("form-place").value = booking?.place || "";
  document.getElementById("form-day").value = booking?.day || currentDay;
  document.getElementById("form-time").value = booking?.time || "";
  document.getElementById("form-reservation").value = booking?.reservation || "";
  document.getElementById("form-confirmation").value = booking?.confirmation || "";
  document.getElementById("form-notes").value = booking?.notes || "";

  selectedType = booking?.type || "restaurant";
  document.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("active", c.dataset.type === selectedType);
  });

  document.getElementById("modal-overlay").classList.add("open");
  setTimeout(() => document.getElementById("form-place").focus(), 300);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  editingId = null;
}

async function saveBooking() {
  const booking = {
    id: editingId || Date.now().toString(),
    place: document.getElementById("form-place").value.trim(),
    day: document.getElementById("form-day").value,
    time: document.getElementById("form-time").value,
    type: selectedType,
    reservation: document.getElementById("form-reservation").value.trim(),
    confirmation: document.getElementById("form-confirmation").value.trim(),
    notes: document.getElementById("form-notes").value.trim(),
  };

  if (editingId) {
    const idx = bookings.findIndex(b => b.id === editingId);
    if (idx !== -1) bookings[idx] = booking;
  } else {
    bookings.push(booking);
  }

  await saveBookings();
  closeModal();

  // Switch to the day of the saved booking
  currentDay = booking.day;
  document.querySelectorAll(".day-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.day === String(currentDay));
  });
  renderDay(currentDay);
  showToast(editingId ? "已更新 ✓" : "已新增 ✓");
}

// === Toast ===
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}
