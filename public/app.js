// ===========================
// Bali 2026 Travel App
// ===========================

const ITINERARY = {
  1: {
    date: "2026/04/11",
    title: "抵達峇里島",
    subtitle: "長途飛行 → Canggu 安頓",
    items: [
      { time: "06:50", name: "TPE 桃園機場出發", type: "transport", duration: "飛行 ~5.5h", address: "臺灣桃園國際機場, 大園區, 桃園市, 台灣" },
      { time: "15:15", name: "DPS 伍拉賴機場抵達", type: "transport", duration: "入境 ~1h", address: "Ngurah Rai International Airport, Badung, Bali, Indonesia" },
      { time: "16:47", name: "峇里島水明漾海灘英迪格酒店", type: "hotel", duration: "check-in", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
      { time: "18:15", name: "L'Osteria Pizza e Cucina Canggu", type: "restaurant", duration: "晚餐 ~1h", address: "Jl. Pantai Berawa No.7, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { time: "19:35", name: "Santanera", type: "activity", duration: "~1h", address: "Jl. Pantai Berawa, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali" },
      { time: "21:08", name: "英迪格酒店", type: "hotel", duration: "就寢", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
    ]
  },
  2: {
    date: "2026/04/12",
    title: "Canggu 漫遊",
    subtitle: "早午餐、Spa、海灘夕陽",
    items: [
      { time: "08:00", name: "英迪格酒店", type: "hotel", duration: "出發", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
      { time: "08:37", name: "Milk & Madu Beach Road", type: "restaurant", duration: "早餐 ~1h", address: "Jl. Pantai Batu Mejan, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { time: "09:40", name: "Gigi Susu", type: "activity", duration: "~1h", address: "Canggu, Kuta Utara, Badung Regency, Bali, Indonesia" },
      { time: "10:35", name: "Sensatia – Batu Bolong Canggu", type: "activity", duration: "~1h", address: "Jl. Batu Bolong No.56, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { time: "11:38", name: "La Brisa Sunday Market", type: "activity", duration: "~2.5h", address: "Jl. Pantai Batu Mejan, Echo Beach, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { time: "14:15", name: "Udara Bali Yoga Detox & Spa", type: "activity", duration: "頌缽課程 ~3h", address: "Jl. Pantai Batu Bolong No.97, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { time: "17:42", name: "La Brisa Bali | Beach Club", type: "activity", duration: "夕陽 ~1.5h", address: "Jl. Pantai Batu Mejan, Echo Beach, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { time: "19:11", name: "Naughty Nuri's Warung Seminyak", type: "restaurant", duration: "晚餐 ~1h", address: "Jl. Raya Petitenget No.17, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { time: "20:26", name: "英迪格酒店", type: "hotel", duration: "就寢", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
    ]
  },
  3: {
    date: "2026/04/13",
    title: "前往烏布",
    subtitle: "猴子森林、皇宮、聖河",
    items: [
      { time: "08:00", name: "英迪格酒店 Check-out", type: "hotel", duration: "出發烏布", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
      { time: "09:15", name: "Sisterfields", type: "restaurant", duration: "早午餐 ~1.5h", address: "Jl. Subak Sari No.20, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { time: "11:00", name: "ULU SPA Club", type: "activity", duration: "Spa ~1.5h", address: "Jl. Raya Uluwatu, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali" },
      { time: "13:46", name: "Kurasu Ubud", type: "restaurant", duration: "咖啡 ~1h", address: "Jl. Raya Sanggingan, Lungsiakan, Kedewatan, Kecamatan Ubud, Kabupaten Gianyar, Bali" },
      { time: "14:58", name: "Sacred Monkey Forest Sanctuary", type: "activity", duration: "~1h", address: "Jl. Monkey Forest, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571" },
      { time: "16:05", name: "烏布皇宮", type: "activity", duration: "~1h", address: "Jl. Raya Ubud No.8, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571" },
      { time: "17:08", name: "烏布水皇宮", type: "activity", duration: "~1h", address: "Jl. Raya Ubud, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali" },
      { time: "18:18", name: "Sayan Point", type: "restaurant", duration: "晚餐", address: "Jl. Raya Sayan, Sayan, Ubud, Kabupaten Gianyar, Bali" },
      { time: "21:00", name: "Airbnb 烏布", type: "hotel", duration: "check-in", address: "Jalan Tirta Tawar Kutuh, 烏布德, 峇里島 80571, 印尼" },
    ]
  },
  4: {
    date: "2026/04/14",
    title: "火山日出 & 梯田",
    subtitle: "凌晨出發、巴杜爾火山、德哥拉朗",
    items: [
      { time: "03:00", name: "巴杜爾火山日出健行", type: "activity", duration: "~5h", address: "Mount Batur, Kintamani, Bangli Regency, Bali, Indonesia" },
      { time: "08:56", name: "Tis Cafe", type: "restaurant", duration: "早餐 ~1.5h", address: "Jl. Raya Penelokan, Batur, Kintamani, Bangli Regency, Bali" },
      { time: "10:28", name: "德哥拉朗梯田", type: "activity", duration: "~1h", address: "Tegallalang Rice Terrace, Tegallalang, Gianyar Regency, Bali" },
      { time: "12:02", name: "The Garcia Ubud", type: "hotel", duration: "check-in", address: "Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali" },
      { time: "13:41", name: "聖泉寺", type: "activity", duration: "~1h", address: "Pura Tirta Empul, Jl. Tirta, Manukaya, Kec. Tampaksiring, Kabupaten Gianyar, Bali" },
      { time: "15:21", name: "The Garcia Ubud", type: "hotel", duration: "休息", address: "Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali" },
      { time: "16:00", name: "Afternoon Yoga @ The Garcia Ubud", type: "activity", duration: "~1h · 16:00–17:00", address: "Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali", tentative: true },
    ]
  },
  5: {
    date: "2026/04/15",
    title: "返回台灣",
    subtitle: "烏布 → 機場 → 台北",
    items: [
      { time: "07:00", name: "Morning Yoga @ The Garcia Ubud", type: "activity", duration: "飯店晨間瑜伽", address: "Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali" },
      { time: "13:30", name: "DPS 伍拉賴機場", type: "transport", duration: "~3h 候機", address: "Ngurah Rai International Airport, Badung, Bali, Indonesia" },
      { time: "22:00", name: "TPE 桃園機場抵達", type: "transport", duration: "回到台灣 🎉", address: "臺灣桃園國際機場, 大園區, 桃園市, 台灣" },
    ]
  },
  backup: {
    date: "",
    title: "備案景點",
    subtitle: "排不進去但想去的地方",
    items: [
      { name: "Tanjung Benoa Beach", type: "activity", desc: "海邊活動、水上運動", address: "Tanjung Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali" },
      { name: "Mudra Cafe", type: "restaurant", desc: "特色咖啡廳", address: "Ubud, Kabupaten Gianyar, Bali, Indonesia" },
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
let placeNotes = {}; // { "day-index": { reservationTime, notes } }
let visited = {}; // { "day-index": true }
let selectedStatus = "confirmed";
let currentDay = "1";
let editingId = null;
let selectedType = "restaurant";
let currentPlaceDetail = null;

// === Init ===
document.addEventListener("DOMContentLoaded", async () => {
  // Read initial day from URL hash e.g. #day-3 or #day-backup
  const hashDay = getHashDay();
  if (hashDay) currentDay = hashDay;

  await loadBookings();
  renderDay(currentDay);
  setupTabs();
  setupModal();
  setupPlaceModal();
  hideLoading();

  // Set active tab to match
  document.querySelectorAll(".day-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.day === String(currentDay));
  });

  // Listen for hash changes (browser back/forward)
  window.addEventListener("hashchange", () => {
    const d = getHashDay();
    if (d && d !== currentDay) {
      currentDay = d;
      document.querySelectorAll(".day-tab").forEach(t => {
        t.classList.toggle("active", t.dataset.day === String(d));
      });
      renderDay(d);
    }
  });
});

function getHashDay() {
  const hash = window.location.hash; // e.g. "#day-3" or "#day-backup"
  if (!hash) return null;
  const match = hash.match(/^#day-(.+)$/);
  return match ? match[1] : null;
}

function hideLoading() {
  document.getElementById("loading").style.display = "none";
}

// === Data Layer ===
async function loadBookings() {
  const local = localStorage.getItem("bali_bookings");
  if (local) bookings = JSON.parse(local);
  const localNotes = localStorage.getItem("bali_place_notes");
  if (localNotes) placeNotes = JSON.parse(localNotes);
  const localVisited = localStorage.getItem("bali_visited");
  if (localVisited) visited = JSON.parse(localVisited);

  try {
    const res = await fetch("/api/bookings");
    if (res.ok) {
      const data = await res.json();
      if (data.bookings) {
        bookings = data.bookings;
        localStorage.setItem("bali_bookings", JSON.stringify(bookings));
      }
      if (data.placeNotes) {
        placeNotes = data.placeNotes;
        localStorage.setItem("bali_place_notes", JSON.stringify(placeNotes));
      }
      if (data.visited) {
        visited = data.visited;
        localStorage.setItem("bali_visited", JSON.stringify(visited));
      }
    }
  } catch (e) {
    console.log("Offline mode: using local data");
  }
}

async function saveBookings() {
  localStorage.setItem("bali_bookings", JSON.stringify(bookings));
  localStorage.setItem("bali_place_notes", JSON.stringify(placeNotes));
  localStorage.setItem("bali_visited", JSON.stringify(visited));
  try {
    await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookings, placeNotes, visited })
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
    history.replaceState(null, "", `#day-${day}`);
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
    if (item._removed) return; // skip removed tentative items
    const key = `${day}-${i}`;
    const saved = placeNotes[key] || {};
    const hasNote = saved.reservationTime || saved.notes;
    const isVisited = !!visited[key];
    const isTentative = item.tentative && !visited[key + '_confirmed'];

    const wrapper = document.createElement("div");
    wrapper.className = "timeline-item";

    wrapper.innerHTML = `
      <div class="timeline-left">
        <div class="timeline-time ${isTentative ? 'tentative-time' : ''}">${item.time || ""}</div>
        <div class="timeline-dot ${isVisited ? 'visited' : ''} ${isTentative ? 'tentative-dot' : ''}"></div>
        ${i < items.length - 1 ? `<div class="timeline-line ${isVisited ? 'visited' : ''}"></div>` : ""}
      </div>
      <div class="timeline-card type-${item.type} ${isVisited ? 'visited' : ''} ${isTentative ? 'tentative' : ''}" data-day="${day}" data-index="${i}">
        <div class="card-name">
          <span class="card-type-dot"></span>
          <span class="${isVisited ? 'card-name-visited' : ''}">${item.name}</span>
          ${isTentative ? '<span class="tentative-badge">❓ 待定</span>' : ''}
          ${isVisited ? '<span class="visited-badge">✓ 去過</span>' : ''}
          <span class="card-chevron">›</span>
        </div>
        ${item.duration ? `<div class="card-duration">${item.duration}</div>` : ""}
        ${saved.reservationTime ? `<div class="card-reservation-badge">🕐 ${saved.reservationTime}</div>` : ""}
        ${hasNote && saved.notes ? `<div class="card-duration" style="margin-top:4px;color:var(--text-tertiary)">📝 ${saved.notes.substring(0,40)}${saved.notes.length>40?'…':''}</div>` : ""}
      </div>
    `;

    el.appendChild(wrapper);
  });

  // Click on timeline cards
  el.addEventListener("click", e => {
    const card = e.target.closest(".timeline-card");
    if (!card) return;
    const d = card.dataset.day;
    const idx = parseInt(card.dataset.index);
    openPlaceModal(d, idx);
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
    const isTentativeBooking = b.status === "tentative";
    const item = document.createElement("div");
    item.className = `booking-item${isTentativeBooking ? " booking-tentative" : ""}`;
    item.onclick = () => openModal(b);
    item.innerHTML = `
      <div class="booking-icon">${TYPE_ICONS[b.type] || "📌"}</div>
      <div class="booking-info">
        <div class="booking-name">
          ${b.place}
          ${isTentativeBooking ? '<span class="tentative-badge">❓ 待定</span>' : ''}
        </div>
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
      ${data.items.map((item, i) => `
        <div class="backup-card" onclick="openBackupPlace(${i})">
          <div class="backup-card-icon">${TYPE_ICONS[item.type]}</div>
          <div class="backup-card-name">${item.name}</div>
          <div class="backup-card-desc">${item.desc}</div>
          ${item.address ? `<div class="backup-maps-hint">點擊開啟地圖</div>` : ""}
        </div>
      `).join("")}
    </div>
    <div class="section-label" style="margin-top: 24px">備案預訂</div>
    <div class="bookings-list" id="bookings-backup"></div>
  `;

  main.appendChild(section);
  renderBookings("backup");
}

// === Place Detail Modal ===
function setupPlaceModal() {
  // Inject place modal HTML
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "place-modal-overlay";
  overlay.innerHTML = `
    <div class="modal" id="place-modal">
      <div class="modal-header">
        <h2 id="place-modal-title">地點詳情</h2>
        <button class="btn-icon" id="place-modal-close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div id="place-modal-meta" class="place-meta"></div>
      <a id="place-maps-btn" href="#" target="_blank" rel="noopener" class="maps-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        在 Google Maps 開啟
      </a>
      <div class="place-divider"></div>
      <div class="form-group">
        <label>預約時間（可自行填寫）</label>
        <input type="text" id="place-reservation-time" placeholder="例：18:30 for 2 pax" />
      </div>
      <div class="form-group">
        <label>Google Maps 連結（可覆蓋預設搜尋）</label>
        <input type="url" id="place-maps-input" placeholder="貼入 Google Maps 分享連結" />
      </div>
      <div class="form-group">
        <label>備註</label>
        <textarea id="place-notes" placeholder="記錄任何注意事項..." rows="3"></textarea>
      </div>
      <div id="place-tentative-actions" style="display:none;margin-bottom:12px;">
        <p class="tentative-modal-label">❓ 這個行程還在待定中</p>
        <div class="tentative-btns">
          <button type="button" class="btn-confirm-plan" id="place-confirm-btn">✓ 正式加入</button>
          <button type="button" class="btn-remove-plan" id="place-remove-btn">× 移除行程</button>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn-visited" id="place-visited-btn">✓ 標記去過</button>
        <button type="button" class="btn-primary" id="place-save-btn">儲存</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById("place-modal-close").onclick = closePlaceModal;
  overlay.onclick = e => { if (e.target === overlay) closePlaceModal(); };

  document.getElementById("place-save-btn").onclick = async () => {
    if (!currentPlaceDetail) return;
    const { day, index } = currentPlaceDetail;
    const key = `${day}-${index}`;
    placeNotes[key] = {
      reservationTime: document.getElementById("place-reservation-time").value.trim(),
      mapsUrl: document.getElementById("place-maps-input").value.trim(),
      notes: document.getElementById("place-notes").value.trim(),
    };
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast("已儲存 ✓");
  };

  document.getElementById("place-confirm-btn").onclick = async () => {
    if (!currentPlaceDetail) return;
    const { day, index } = currentPlaceDetail;
    const item = ITINERARY[day]?.items[index];
    if (!item) return;
    // Mark as confirmed (remove tentative)
    item.tentative = false;
    visited[`${day}-${index}_confirmed`] = true;
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast("Already added to the itinerary ✓");
  };

  document.getElementById("place-remove-btn").onclick = async () => {
    if (!currentPlaceDetail) return;
    const { day, index } = currentPlaceDetail;
    const item = ITINERARY[day]?.items[index];
    if (!item) return;
    item.tentative = false;
    item._removed = true;
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast("Removed from itinerary 🗑️");
  };

  document.getElementById("place-visited-btn").onclick = async () => {
    if (!currentPlaceDetail) return;
    const { day, index } = currentPlaceDetail;
    const key = `${day}-${index}`;
    const wasVisited = !!visited[key];
    if (wasVisited) {
      delete visited[key];
    } else {
      visited[key] = true;
    }
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast(wasVisited ? "已取消標記" : "已打卡 ✓ 🌴");
  };
}

function openPlaceModal(day, index) {
  const item = ITINERARY[day]?.items[index];
  if (!item) return;
  currentPlaceDetail = { day, index };

  const key = `${day}-${index}`;
  const saved = placeNotes[key] || {};

  document.getElementById("place-modal-title").textContent = item.name;

  // Meta info
  const metaEl = document.getElementById("place-modal-meta");
  metaEl.innerHTML = `
    ${item.time ? `<span class="place-tag">${item.time}</span>` : ""}
    ${item.duration ? `<span class="place-tag">${item.duration}</span>` : ""}
    <span class="place-tag type-tag">${TYPE_ICONS[item.type]} ${labelForType(item.type)}</span>
    ${item.address ? `<div class="place-address">📍 ${item.address}</div>` : ""}
  `;

  // Google Maps link — prefer user-saved URL, then name search
  const mapsBtn = document.getElementById("place-maps-btn");
  const savedMapsUrl = saved.mapsUrl;
  if (savedMapsUrl) {
    mapsBtn.href = savedMapsUrl;
  } else {
    // Use name + Bali for search (more accurate than raw address)
    mapsBtn.href = `https://maps.google.com/?q=${encodeURIComponent(item.name + ", Bali")}`;
  }
  mapsBtn.style.display = "flex";

  document.getElementById("place-reservation-time").value = saved.reservationTime || "";
  document.getElementById("place-maps-input").value = saved.mapsUrl || "";
  document.getElementById("place-notes").value = saved.notes || "";

  const key2 = `${day}-${index}`;
  const isVisited = !!visited[key2];
  const isTentativeItem = !!item.tentative;
  const visitedBtn = document.getElementById("place-visited-btn");
  visitedBtn.textContent = isVisited ? "↩ Cancel visited" : "✓ Mark as visited";
  visitedBtn.classList.toggle("btn-visited-active", isVisited);
  visitedBtn.style.display = isTentativeItem ? "none" : "";

  const tentativeActions = document.getElementById("place-tentative-actions");
  tentativeActions.style.display = isTentativeItem ? "block" : "none";

  document.getElementById("place-modal-overlay").classList.add("open");
  setTimeout(() => document.getElementById("place-reservation-time").focus(), 350);
}

function closePlaceModal() {
  document.getElementById("place-modal-overlay").classList.remove("open");
  currentPlaceDetail = null;
}

function openBackupPlace(index) {
  const item = ITINERARY.backup.items[index];
  if (!item || !item.address) return;
  window.open(`https://maps.google.com/?q=${encodeURIComponent(item.address)}`, "_blank");
}

function labelForType(type) {
  const map = { restaurant: "餐廳", activity: "活動", hotel: "住宿", transport: "交通", other: "其他" };
  return map[type] || type;
}

// === Booking Modal ===
function setupModal() {
  document.getElementById("btn-add").onclick = () => openModal();
  document.getElementById("modal-close").onclick = closeModal;
  document.getElementById("modal-overlay").onclick = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  document.getElementById("type-chips").addEventListener("click", e => {
    const chip = e.target.closest(".chip[data-type]");
    if (!chip) return;
    document.querySelectorAll(".chip[data-type]").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    selectedType = chip.dataset.type;
  });

  document.getElementById("status-chips").addEventListener("click", e => {
    const chip = e.target.closest(".status-chip");
    if (!chip) return;
    document.querySelectorAll(".status-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    selectedStatus = chip.dataset.status;
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
  document.getElementById("form-maps-url").value = booking?.mapsUrl || "";
  document.getElementById("form-notes").value = booking?.notes || "";

  selectedType = booking?.type || "restaurant";
  document.querySelectorAll(".chip[data-type]").forEach(c => {
    c.classList.toggle("active", c.dataset.type === selectedType);
  });

  selectedStatus = booking?.status || "confirmed";
  document.querySelectorAll(".status-chip").forEach(c => {
    c.classList.toggle("active", c.dataset.status === selectedStatus);
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
    status: selectedStatus,
    reservation: document.getElementById("form-reservation").value.trim(),
    confirmation: document.getElementById("form-confirmation").value.trim(),
    mapsUrl: document.getElementById("form-maps-url").value.trim(),
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
