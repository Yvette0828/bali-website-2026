// ===========================
// Bali 2026 Travel App
// ===========================

const ITINERARY = {
  1: {
    date: "2026/04/11",
    title: "抵達峇里島",
    subtitle: "長途飛行 → Canggu 安頓",
    items: [
      { id: "d1-pickup", time: "07:00", name: "機場接送出發", type: "transport", duration: "自家 → 桃園機場", address: "臺灣桃園國際機場, 大園區, 桃園市, 台灣" },
      { id: "d1-tpe-depart", time: "09:50", name: "TPE 桃園機場起飛", type: "transport", duration: "飛行 ~5h", address: "臺灣桃園國際機場, 大園區, 桃園市, 台灣" },
      { id: "d1-dps-arrive", time: "15:15", name: "DPS 伍拉賴機場抵達", type: "transport", duration: "入境 ~1h", address: "Ngurah Rai International Airport, Badung, Bali, Indonesia" },
      { id: "d1-indigo", time: "16:47", name: "峇里島水明漾海灘英迪格酒店", type: "hotel", duration: "check-in", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
      { id: "d1-osteria", time: "18:15", name: "L'Osteria Pizza e Cucina Canggu", type: "restaurant", duration: "晚餐 ~1h", address: "Jl. Pantai Berawa No.7, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { id: "d1-santanera", time: "19:35", name: "Santanera", type: "restaurant", duration: "~1h", address: "Jl. Pantai Berawa, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali" },
      { id: "d1-indigo-sleep", time: "21:08", name: "英迪格酒店", type: "hotel", duration: "就寢", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
    ]
  },
  2: {
    date: "2026/04/12",
    title: "Canggu 漫遊",
    subtitle: "早午餐、Spa、海灘夕陽",
    items: [
      { id: "d2-indigo", time: "08:00", name: "英迪格酒店", type: "hotel", duration: "出發", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
      { id: "d2-milk-madu", time: "08:37", name: "Milk & Madu Beach Road", type: "restaurant", duration: "早餐 ~1h", address: "Jl. Pantai Batu Mejan, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { id: "d2-gigi-susu", time: "09:40", name: "Gigi Susu", type: "activity", duration: "~1h", address: "Canggu, Kuta Utara, Badung Regency, Bali, Indonesia" },
      { id: "d2-sensatia", time: "10:35", name: "Sensatia – Batu Bolong Canggu", type: "activity", duration: "~1h", address: "Jl. Batu Bolong No.56, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { id: "d2-labrisa-market", time: "11:38", name: "La Brisa Sunday Market", type: "activity", duration: "~2.5h", address: "Jl. Pantai Batu Mejan, Echo Beach, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { id: "d2-udara", time: "14:15", name: "Udara Bali Yoga Detox & Spa", type: "activity", duration: "頌缽課程 ~3h", address: "Jl. Pantai Batu Bolong No.97, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { id: "d2-labrisa-club", time: "17:42", name: "La Brisa Bali | Beach Club", type: "activity", duration: "夕陽 ~1.5h", address: "Jl. Pantai Batu Mejan, Echo Beach, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { id: "d2-naughty-nuris", time: "19:11", name: "Naughty Nuri's Warung Seminyak", type: "restaurant", duration: "晚餐 ~1h", address: "Jl. Raya Petitenget No.17, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { id: "d2-indigo-sleep", time: "20:26", name: "英迪格酒店", type: "hotel", duration: "就寢", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
    ]
  },
  3: {
    date: "2026/04/13",
    title: "前往烏布",
    subtitle: "猴子森林、皇宮、聖河",
    items: [
      { id: "d3-indigo-checkout", time: "08:00", name: "英迪格酒店 Check-out", type: "hotel", duration: "出發烏布", address: "Jl. Pantai Berawa No.22, Tibubeneng, Kuta Utara, Kabupaten Badung, Bali 80361" },
      { id: "d3-sisterfields", time: "09:15", name: "Sisterfields", type: "restaurant", duration: "早午餐 ~1.5h", address: "Jl. Subak Sari No.20, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali" },
      { id: "d3-ulu-spa", time: "11:00", name: "ULU SPA Club", type: "activity", duration: "Spa ~1.5h", address: "Jl. Raya Uluwatu, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali" },
      { id: "d3-kurasu", time: "13:46", name: "Kurasu Ubud", type: "restaurant", duration: "咖啡 ~1h", address: "Jl. Raya Sanggingan, Lungsiakan, Kedewatan, Kecamatan Ubud, Kabupaten Gianyar, Bali" },
      { id: "d3-monkey-forest", time: "14:58", name: "Sacred Monkey Forest Sanctuary", type: "activity", duration: "~1h", address: "Jl. Monkey Forest, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571" },
      { id: "d3-ubud-palace", time: "16:05", name: "烏布皇宮", type: "activity", duration: "~1h", address: "Jl. Raya Ubud No.8, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571" },
      { id: "d3-water-palace", time: "17:08", name: "烏布水皇宮", type: "activity", duration: "~1h", address: "Jl. Raya Ubud, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali" },
      { id: "d3-sayan-point", time: "18:18", name: "Sayan Point", type: "restaurant", duration: "晚餐", address: "Jl. Raya Sayan, Sayan, Ubud, Kabupaten Gianyar, Bali" },
      { id: "d3-airbnb", time: "21:00", name: "Airbnb 烏布", type: "hotel", duration: "check-in", address: "Jalan Tirta Tawar Kutuh, 烏布德, 峇里島 80571, 印尼" },
    ]
  },
  4: {
    date: "2026/04/14",
    title: "火山日出 & 梯田",
    subtitle: "凌晨出發、巴杜爾火山、德哥拉朗",
    items: [
      { id: "d4-batur", time: "03:00", name: "巴杜爾火山日出健行", type: "activity", duration: "~5h", address: "Mount Batur, Kintamani, Bangli Regency, Bali, Indonesia" },
      { id: "d4-tis-cafe", time: "08:56", name: "Tis Cafe", type: "restaurant", duration: "早餐 ~1.5h", address: "Jl. Raya Penelokan, Batur, Kintamani, Bangli Regency, Bali" },
      { id: "d4-tegallalang", time: "10:28", name: "德哥拉朗梯田", type: "activity", duration: "~1h", address: "Tegallalang Rice Terrace, Tegallalang, Gianyar Regency, Bali" },
      { id: "d4-garcia-checkin", time: "12:02", name: "The Garcia Ubud", type: "hotel", duration: "check-in", address: "Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali" },
      { id: "d4-tirta-empul", time: "13:41", name: "聖泉寺", type: "activity", duration: "~1h", address: "Pura Tirta Empul, Jl. Tirta, Manukaya, Kec. Tampaksiring, Kabupaten Gianyar, Bali" },
      { id: "d4-garcia-rest", time: "15:21", name: "The Garcia Ubud", type: "hotel", duration: "休息", address: "Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali" },
      { id: "d4-afternoon-yoga", time: "16:00", name: "Afternoon Yoga @ The Garcia Ubud", type: "activity", duration: "~1h · 16:00–17:00", address: "Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali", tentative: true },
    ]
  },
  5: {
    date: "2026/04/15",
    title: "返回台灣",
    subtitle: "烏布 → 機場 → 台北",
    items: [
      { id: "d5-morning-yoga", time: "07:00", name: "Morning Yoga @ The Garcia Ubud", type: "activity", duration: "飯店晨間瑜伽", address: "Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali" },
      { id: "d5-dps-depart", time: "13:30", name: "DPS 伍拉賴機場", type: "transport", duration: "~3h 候機", address: "Ngurah Rai International Airport, Badung, Bali, Indonesia" },
      { id: "d5-tpe-arrive", time: "22:00", name: "TPE 桃園機場抵達", type: "transport", duration: "回到台灣 🎉", address: "臺灣桃園國際機場, 大園區, 桃園市, 台灣" },
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
  `;

  main.appendChild(section);
  renderMergedTimeline(day, data.items);
}

function renderMergedTimeline(day, itineraryItems) {
  // Build combined list of itinerary items + user bookings for this day
  const dayBookings = bookings.filter(b => String(b.day) === String(day));

  // Convert bookings to timeline-compatible objects
  const bookingItems = dayBookings.map(b => ({
    _isBooking: true,
    _booking: b,
    id: `booking-${b.id}`,
    time: b.time || "",
    name: b.place,
    type: b.type || "other",
    duration: b.reservation ? `預約 ${b.reservation}` : "",
    status: b.status,
  }));

  // Merge and sort by resolved display time (taking overrideTime into account)
  const allItems = [...itineraryItems, ...bookingItems]
    .filter(item => !item._removed)
    .sort((a, b) => {
      const ta = getDisplayTime(a, day) || "99:99";
      const tb = getDisplayTime(b, day) || "99:99";
      return ta.localeCompare(tb);
    });

  function getDisplayTime(item, day) {
    if (item._isBooking) return item.time || null;
    const key = `${day}-${slugKey(item)}`;
    const saved = placeNotes[key] || {};
    return saved.overrideTime || item.time || null;
  }

  renderTimeline(day, allItems);

  // Always show add button at bottom
  const el = document.getElementById(`timeline-${day}`);
  if (el) {
    const hint = document.createElement("div");
    hint.style.cssText = "padding:16px 0 4px;";
    const btnLabel = day === 'backup' ? '新增景點' : '新增自訂行程';
    hint.innerHTML = `<button class="btn-add-inline" onclick="openModal()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      ${btnLabel}
    </button>`;
    el.appendChild(hint);
  }
}

function renderTimeline(day, items) {
  const el = document.getElementById(`timeline-${day}`);
  if (!el) return;

  items.forEach((item, i) => {
    if (item._removed) return; // skip removed tentative items
    const isBooking = !!item._isBooking;
    const key = isBooking ? null : `${day}-${slugKey(item)}`;
    const bookingVisitedKey = isBooking ? `booking-${item._booking?.id}` : null;
    const saved = key ? (placeNotes[key] || {}) : {};
    const hasNote = saved.reservationTime || saved.notes;
    const isVisited = isBooking ? !!visited[bookingVisitedKey] : (key ? !!visited[key] : false);
    const isTentative = !isBooking && item.tentative && !visited[key + '_confirmed'];
    const isTentativeBooking = isBooking && item.status === 'tentative';
    const displayTime = isBooking ? (item.time || "") : (saved.overrideTime || item.time || "");

    const wrapper = document.createElement("div");
    wrapper.className = "timeline-item";

    if (isBooking) {
      // Render booking card inline in timeline
      const b = item._booking;
      const mapsUrl = b.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(b.place + ', Bali')}`;
      wrapper.innerHTML = `
        <div class="timeline-left">
          <div class="timeline-time">${displayTime}</div>
          <div class="timeline-dot ${isVisited ? 'visited' : ''}"></div>
          ${i < items.length - 1 ? `<div class="timeline-line ${isVisited ? 'visited' : ''}"></div>` : ""}
        </div>
        <div class="timeline-card type-${item.type} ${isTentativeBooking ? 'tentative' : ''} ${isVisited ? 'visited' : ''}" data-booking-id="${b.id}" data-maps-url="${mapsUrl}">
          <div class="card-name">
            <span class="card-type-dot"></span>
            <span class="${isVisited ? 'card-name-visited' : ''}">${item.name}</span>
            ${isTentativeBooking ? '<span class="tentative-badge">❓ 待定</span>' : ''}
            ${isVisited ? '<span class="visited-badge">✓ 去過</span>' : ''}
            <span class="card-chevron">›</span>
          </div>
          ${item.duration ? `<div class="card-duration">${item.duration}</div>` : ""}
          ${b.confirmation ? `<div class="card-duration"># ${b.confirmation}</div>` : ""}
          ${b.notes ? `<div class="card-duration" style="color:var(--text-tertiary)">📝 ${b.notes.substring(0,40)}${b.notes.length>40?'…':''}</div>` : ""}
        </div>
      `;
    } else {
      wrapper.innerHTML = `
        <div class="timeline-left">
          <div class="timeline-time ${isTentative ? 'tentative-time' : ''}">${displayTime}</div>
          <div class="timeline-dot ${isVisited ? 'visited' : ''} ${isTentative ? 'tentative-dot' : ''}"></div>
          ${i < items.length - 1 ? `<div class="timeline-line ${isVisited ? 'visited' : ''}"></div>` : ""}
        </div>
        <div class="timeline-card type-${item.type} ${isVisited ? 'visited' : ''} ${isTentative ? 'tentative' : ''}" data-day="${day}" data-index="${i}">
          <div class="card-name">
            <span class="card-type-dot"></span>
            <span class="${isVisited ? 'card-name-visited' : ''}">${saved.overrideName || item.name}</span>
            ${isTentative ? '<span class="tentative-badge">❓ 待定</span>' : ''}
            ${isVisited ? '<span class="visited-badge">✓ 去過</span>' : ''}
            <span class="card-chevron">›</span>
          </div>
          ${item.duration ? `<div class="card-duration">${item.duration}</div>` : ""}
          ${saved.reservationTime ? `<div class="card-reservation-badge">🕐 ${saved.reservationTime}</div>` : ""}
          ${hasNote && saved.notes ? `<div class="card-duration" style="margin-top:4px;color:var(--text-tertiary)">📝 ${saved.notes.substring(0,40)}${saved.notes.length>40?'…':''}</div>` : ""}
        </div>
      `;
    }

    el.appendChild(wrapper);
  });

  // Click handler
  el.addEventListener("click", e => {
    const card = e.target.closest(".timeline-card");
    if (!card) return;
    if (card.dataset.bookingId) {
      const b = bookings.find(x => x.id === card.dataset.bookingId);
      if (b) openBookingDetail(b);
    } else if (card.dataset.day) {
      openPlaceModal(card.dataset.day, parseInt(card.dataset.index));
    }
  });
}

function renderBookings(day) {
  const el = document.getElementById(`bookings-${day}`);
  if (!el) return;

  const dayBookings = bookings.filter(b => String(b.day) === String(day));

  const isBackup = String(day) === 'backup';
  if (dayBookings.length === 0 && !isBackup) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <p>還沒有自訂行程</p>
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
    <div id="bookings-backup" style="margin-top:16px;"></div>
  `;

  main.appendChild(section);
  renderBackupBookings();
}

function renderBackupBookings() {
  const el = document.getElementById("bookings-backup");
  if (!el) return;
  const dayBookings = bookings.filter(b => String(b.day) === "backup");

  el.innerHTML = "";
  dayBookings.forEach(b => {
    const isTentativeBooking = b.status === "tentative";
    const item = document.createElement("div");
    item.className = `booking-item${isTentativeBooking ? " booking-tentative" : ""}`;
    item.onclick = () => openBookingDetail(b);
    item.innerHTML = `
      <div class="booking-icon">${TYPE_ICONS[b.type] || "📌"}</div>
      <div class="booking-info">
        <div class="booking-name">${b.place}${isTentativeBooking ? ' <span class="tentative-badge">❓ 待定</span>' : ""}</div>
        <div class="booking-meta">
          ${b.time ? `<span class="booking-tag">${b.time}</span>` : ""}
          ${b.notes ? `<span class="booking-tag">${b.notes.substring(0,30)}</span>` : ""}
        </div>
      </div>
    `;
    el.appendChild(item);
  });

  // Always show add button
  const hint = document.createElement("div");
  hint.style.cssText = "padding:12px 0 4px;";
  hint.innerHTML = `<button class="btn-add-inline" onclick="openModalForBackup()">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    新增景點
  </button>`;
  el.appendChild(hint);
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
        <div class="modal-title-wrap" id="modal-title-wrap">
          <h2 id="place-modal-title" class="place-title-text">地點詳情</h2>
          <button class="btn-edit-title" id="btn-edit-title" title="修改標題">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <input type="text" id="place-title-input" class="place-title-input" style="display:none;" />
        </div>
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
        <label>時間（可修改）</label>
        <input type="time" id="place-time-input" />
      </div>
      <div class="form-group">
        <label>Google Maps 連結（可覆蓋預設搜尋）</label>
        <input type="url" id="place-maps-input" placeholder="貼入 Google Maps 分享連結" />
      </div>
      <div class="form-group">
        <label>備註</label>
        <textarea id="place-notes" placeholder="記錄任何注意事項..." rows="3"></textarea>
      </div>
      <div class="form-actions" style="flex-wrap:nowrap;gap:6px;margin-top:16px;">
        <button type="button" class="place-action-btn btn-visited" id="place-visited-btn" style="flex:1;font-size:12px;padding:10px 6px;white-space:nowrap;">✓ 去過</button>
        <button type="button" class="place-action-btn btn-visited" id="place-set-tentative-btn" style="flex:1;font-size:12px;padding:10px 6px;white-space:nowrap;display:none;">❓ 待定</button>
        <button type="button" class="place-action-btn btn-remove-plan" id="place-remove-confirmed-btn" style="flex:1;font-size:12px;padding:10px 6px;white-space:nowrap;display:none;">× 移除</button>
        <button type="button" class="place-action-btn btn-primary" id="place-save-btn" style="flex:1;font-size:12px;padding:10px 6px;">儲存</button>
      </div>
      <div id="place-tentative-actions" style="display:none;margin-top:8px;">
        <p class="tentative-modal-label">❓ 這個行程還在待定中</p>
        <div class="tentative-btns">
          <button type="button" class="btn-confirm-plan" id="place-confirm-btn">✓ 正式加入</button>
          <button type="button" class="btn-remove-plan" id="place-remove-btn">× 移除行程</button>
        </div>
      </div>
      <div id="place-manage-actions" style="display:none;"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById("place-modal-close").onclick = closePlaceModal;
  overlay.onclick = e => { if (e.target === overlay) closePlaceModal(); };

  // Inline title edit
  document.getElementById("btn-edit-title").onclick = () => {
    document.getElementById("place-modal-title").style.display = "none";
    document.getElementById("btn-edit-title").style.display = "none";
    const inp = document.getElementById("place-title-input");
    inp.style.display = "";
    inp.focus();
    inp.select();
  };
  document.getElementById("place-title-input").onblur = () => {
    const val = document.getElementById("place-title-input").value.trim();
    if (val) document.getElementById("place-modal-title").textContent = val;
    document.getElementById("place-modal-title").style.display = "";
    document.getElementById("btn-edit-title").style.display = "";
    document.getElementById("place-title-input").style.display = "none";
  };
  document.getElementById("place-title-input").onkeydown = e => {
    if (e.key === "Enter") document.getElementById("place-title-input").blur();
    if (e.key === "Escape") {
      document.getElementById("place-title-input").value = document.getElementById("place-modal-title").textContent;
      document.getElementById("place-title-input").blur();
    }
  };

  document.getElementById("place-save-btn").onclick = async () => {
    if (!currentPlaceDetail) return;
    const { day, index } = currentPlaceDetail;
    const item = ITINERARY[day]?.items[index];
    const key = `${day}-${slugKey(item || index)}`;
    const newName = document.getElementById("place-title-input").value.trim() || document.getElementById("place-modal-title").textContent.trim();
    placeNotes[key] = {
      overrideName: newName !== item.name ? newName : "",
      reservationTime: document.getElementById("place-reservation-time").value.trim(),
      overrideTime: document.getElementById("place-time-input").value.trim(),
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
    item.tentative = false;
    visited[`${day}-${slugKey(item)}_confirmed`] = true;
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast("Added to itinerary ✓");
  };

  document.getElementById("place-remove-btn").onclick = async () => {
    if (!currentPlaceDetail) return;
    const { day, index } = currentPlaceDetail;
    const item = ITINERARY[day]?.items[index];
    if (!item) return;
    item._removed = true;
    item.tentative = false;
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast("Removed from itinerary 🗑️");
  };

  document.getElementById("place-set-tentative-btn").onclick = async () => {
    if (!currentPlaceDetail) return;
    const { day, index } = currentPlaceDetail;
    const item = ITINERARY[day]?.items[index];
    if (!item) return;
    item.tentative = true;
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast("Marked as tentative ❓");
  };

  document.getElementById("place-remove-confirmed-btn").onclick = async () => {
    if (!currentPlaceDetail) return;
    const { day, index } = currentPlaceDetail;
    const item = ITINERARY[day]?.items[index];
    if (!item) return;
    item._removed = true;
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast("Removed from itinerary 🗑️");
  };

  document.getElementById("place-visited-btn").onclick = async () => {
    if (!currentPlaceDetail) return;
    const { day, index } = currentPlaceDetail;
    const item2 = ITINERARY[day]?.items[index];
    const key = `${day}-${slugKey(item2?.name || index)}`;
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

  const key = `${day}-${slugKey(item)}`;
  const saved = placeNotes[key] || {};

  const displayName = (placeNotes[key]?.overrideName) || item.name;
  document.getElementById("place-modal-title").textContent = displayName;
  document.getElementById("place-title-input").value = displayName;
  document.getElementById("place-modal-title").style.display = "";
  document.getElementById("place-title-input").style.display = "none";
  document.getElementById("btn-edit-title").style.display = "";

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
  document.getElementById("place-time-input").value = saved.overrideTime || item.time || "";
  document.getElementById("place-maps-input").value = saved.mapsUrl || "";
  document.getElementById("place-notes").value = saved.notes || "";

  const key2 = `${day}-${slugKey(item)}`;
  const isVisited = !!visited[key2];
  const isTentativeItem = !!item.tentative;
  const visitedBtn = document.getElementById("place-visited-btn");
  visitedBtn.textContent = isVisited ? "↩ Cancel visited" : "✓ Mark as visited";
  visitedBtn.classList.toggle("btn-visited-active", isVisited);
  visitedBtn.style.display = isTentativeItem ? "none" : "";

  // Set-tentative and remove buttons (only for non-tentative confirmed items)
  const setTentativeBtn = document.getElementById("place-set-tentative-btn");
  const removeConfirmedBtn = document.getElementById("place-remove-confirmed-btn");
  setTentativeBtn.style.display = (!isTentativeItem && !item._removed) ? "" : "none";
  removeConfirmedBtn.style.display = (!isTentativeItem && !item._removed) ? "" : "none";

  const tentativeActions = document.getElementById("place-tentative-actions");
  tentativeActions.style.display = isTentativeItem ? "block" : "none";

  document.getElementById("place-manage-actions").style.display = "none";

  document.getElementById("place-modal-overlay").classList.add("open");
  setTimeout(() => document.getElementById("place-reservation-time").focus(), 350);
}

function closePlaceModal() {
  document.getElementById("place-modal-overlay").classList.remove("open");
  currentPlaceDetail = null;
}

function openBackupPlace(index) {
  const item = ITINERARY.backup.items[index];
  if (!item) return;
  const query = item.name + ", Bali";
  window.open(`https://maps.google.com/?q=${encodeURIComponent(query)}`, "_blank");
}

function labelForType(type) {
  const map = { restaurant: "餐廳", activity: "活動", hotel: "住宿", transport: "交通", other: "其他" };
  return map[type] || type;
}

function openModalForBackup() {
  openModal(null, true);
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

function openModal(booking = null, isBackupMode = false) {
  editingId = booking?.id || null;
  const isEdit = !!booking;

  document.getElementById("modal-title").textContent = isEdit ? "編輯行程" : (isBackupMode ? "新增備案景點" : "新增行程");
  document.getElementById("btn-delete").style.display = isEdit ? "block" : "none";
  document.getElementById("form-id").value = booking?.id || "";
  document.getElementById("form-place").value = booking?.place || "";
  document.getElementById("form-day").value = booking?.day || (isBackupMode ? "backup" : currentDay);
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
  showToast(editingId ? "Updated ✓" : "Added ✓");
}

// === Booking Detail (inline timeline cards) ===
function openBookingDetail(b) {
  // Reuse place modal but fill with booking data
  currentPlaceDetail = null; // not an itinerary item

  document.getElementById("place-modal-title").textContent = b.place;

  const metaEl = document.getElementById("place-modal-meta");
  metaEl.innerHTML = `
    ${b.time ? `<span class="place-tag">${b.time}</span>` : ""}
    ${b.reservation ? `<span class="place-tag">${b.reservation}</span>` : ""}
    <span class="place-tag type-tag">${TYPE_ICONS[b.type] || '📌'} ${labelForType(b.type)}</span>
    ${b.status === 'tentative' ? '<span class="place-tag" style="background:rgba(200,200,210,0.3);color:#888">❓ 待定</span>' : '<span class="place-tag" style="background:rgba(52,199,89,0.1);color:#1b7a3e">✅ 已確定</span>'}
    ${b.confirmation ? `<div class="place-address"># ${b.confirmation}</div>` : ""}
  `;

  const mapsUrl = b.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(b.place + ', Bali')}`;
  const mapsBtn = document.getElementById("place-maps-btn");
  mapsBtn.href = mapsUrl;
  mapsBtn.style.display = "flex";

  document.getElementById("place-reservation-time").value = b.reservation || "";
  document.getElementById("place-maps-input").value = b.mapsUrl || "";
  document.getElementById("place-notes").value = b.notes || "";

  // Tentative / manage actions for bookings
  const isTentativeB = b.status === 'tentative';
  const tentativeActions = document.getElementById("place-tentative-actions");
  const manageActions = document.getElementById("place-manage-actions");

  if (isTentativeB) {
    tentativeActions.style.display = "block";
    manageActions.style.display = "none";
    document.getElementById("place-set-tentative-btn").style.display = "none";
    document.getElementById("place-remove-confirmed-btn").style.display = "none";
    document.getElementById("place-confirm-btn").onclick = async () => {
      b.status = 'confirmed';
      const idx = bookings.findIndex(x => x.id === b.id);
      if (idx !== -1) bookings[idx] = b;
      await saveBookings(); closePlaceModal(); renderDay(currentDay); showToast("已確定 ✓");
    };
    document.getElementById("place-remove-btn").onclick = async () => {
      bookings = bookings.filter(x => x.id !== b.id);
      await saveBookings(); closePlaceModal(); renderDay(currentDay); showToast("Removed 🗑️");
    };
  } else {
    tentativeActions.style.display = "none";
    manageActions.style.display = "none";
    document.getElementById("place-set-tentative-btn").style.display = "";
    document.getElementById("place-remove-confirmed-btn").style.display = "";
    document.getElementById("place-set-tentative-btn").onclick = async () => {
      b.status = 'tentative';
      const idx = bookings.findIndex(x => x.id === b.id);
      if (idx !== -1) bookings[idx] = b;
      await saveBookings(); closePlaceModal(); renderDay(currentDay); showToast("標為待定 ❓");
    };
    document.getElementById("place-remove-confirmed-btn").onclick = async () => {
      bookings = bookings.filter(x => x.id !== b.id);
      await saveBookings(); closePlaceModal(); renderDay(currentDay); showToast("Removed 🗑️");
    };
  }

  // Visited state for booking
  const bookingVisitedKey = `booking-${b.id}`;
  const isBookingVisited = !!visited[bookingVisitedKey];
  const visitedBtn = document.getElementById("place-visited-btn");
  visitedBtn.textContent = isBookingVisited ? "↩ Cancel visited" : "✓ Mark as visited";
  visitedBtn.classList.toggle("btn-visited-active", isBookingVisited);
  visitedBtn.style.display = "";
  visitedBtn.onclick = async () => {
    if (visited[bookingVisitedKey]) {
      delete visited[bookingVisitedKey];
    } else {
      visited[bookingVisitedKey] = true;
    }
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast(visited[bookingVisitedKey] === undefined ? "已取消標記" : "已打卡 ✓ 🌴");
  };

  // Override save to update booking
  document.getElementById("place-save-btn").onclick = async () => {
    b.reservation = document.getElementById("place-reservation-time").value.trim();
    b.time = document.getElementById("place-time-input").value.trim() || b.time;
    b.mapsUrl = document.getElementById("place-maps-input").value.trim();
    b.notes = document.getElementById("place-notes").value.trim();
    const idx = bookings.findIndex(x => x.id === b.id);
    if (idx !== -1) bookings[idx] = b;
    await saveBookings();
    closePlaceModal();
    renderDay(currentDay);
    showToast("Updated ✓");
  };

  document.getElementById("place-modal-overlay").classList.add("open");
}

// === Helpers ===
function slugKey(item) {
  // Prefer stable id; fall back to name-based slug
  if (typeof item === 'object' && item.id) return item.id;
  const name = typeof item === 'object' ? item.name : item;
  return String(name).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-').replace(/^-|-$/g, '');
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
