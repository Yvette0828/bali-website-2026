// ===========================
// Bali 2026 - Auth Layer
// ===========================

let currentUser = null;
window.currentUser = null;

function getCurrentRole() {
  return currentUser?.role || "viewer";
}

function canEdit() {
  return ["editor", "admin"].includes(getCurrentRole());
}

function syncCurrentUser(user) {
  currentUser = user || null;
  window.currentUser = currentUser;
}

function updateRoleBasedUI() {
  const editable = canEdit();
  const addBtn = document.getElementById("btn-add");
  if (addBtn) addBtn.style.display = editable ? "" : "none";

  document.querySelectorAll(".btn-add-inline").forEach(el => {
    el.style.display = editable ? "inline-flex" : "none";
  });

  const saveBtn = document.getElementById("btn-save");
  if (saveBtn) saveBtn.style.display = editable ? "" : "none";

  const deleteBtn = document.getElementById("btn-delete");
  if (deleteBtn) deleteBtn.style.display = editable && deleteBtn.dataset.editing === "true" ? "block" : "none";

  const viewerBadge = document.getElementById("viewer-badge");
  if (viewerBadge) viewerBadge.style.display = editable ? "none" : "inline-flex";

  const logoutBtn = document.getElementById("main-logout-btn");
  if (logoutBtn) logoutBtn.style.display = currentUser ? "inline-flex" : "none";
}

function showAuthOverlay() {
  document.getElementById("auth-overlay").style.display = "flex";
  document.getElementById("pending-overlay").style.display = "none";
  document.querySelector(".bg-blur").style.display = "none";
  document.querySelector(".app-header").style.display = "none";
  document.querySelector(".day-tabs").style.display = "none";
  document.querySelector(".main-content").style.display = "none";
}

function showPendingOverlay(user) {
  document.getElementById("auth-overlay").style.display = "none";
  document.getElementById("pending-overlay").style.display = "flex";
  document.getElementById("pending-msg").textContent =
    `${user.name || user.email}，你的申請已送出，等待 Yvette 審核後即可查看行程 🌴`;
  document.querySelector(".bg-blur").style.display = "none";
  document.querySelector(".app-header").style.display = "none";
  document.querySelector(".day-tabs").style.display = "none";
  document.querySelector(".main-content").style.display = "none";
}

function showApp() {
  document.getElementById("auth-overlay").style.display = "none";
  document.getElementById("pending-overlay").style.display = "none";
  document.querySelector(".bg-blur").style.display = "";
  document.querySelector(".app-header").style.display = "";
  document.querySelector(".day-tabs").style.display = "";
  document.querySelector(".main-content").style.display = "";
  updateRoleBasedUI();
}

async function handleGoogleLogin(response) {
  const token = response.credential;
  document.getElementById("auth-status").textContent = "驗證中...";

  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "verify", token })
    });

    const data = await res.json();
    syncCurrentUser(data.user);

    if (data.status === "approved") {
      localStorage.setItem("bali_token", token);
      localStorage.setItem("bali_user", JSON.stringify(data.user));
      showApp();
    } else if (data.status === "pending") {
      showPendingOverlay(data.user);
    } else {
      document.getElementById("auth-status").textContent = "⛔ 你的申請已被拒絕。請聯絡 Yvette。";
    }
  } catch (e) {
    document.getElementById("auth-status").textContent = "連線失敗，請稍後再試。";
  }
}

function googleLogout() {
  localStorage.removeItem("bali_token");
  localStorage.removeItem("bali_user");
  syncCurrentUser(null);
  location.reload();
}

// On page load: check cached session
async function initAuth() {
  showAuthOverlay();

  const cachedToken = localStorage.getItem("bali_token");
  const cachedUser = localStorage.getItem("bali_user");
  if (cachedToken && cachedUser) {
    document.getElementById("auth-status").textContent = "正在驗證登入狀態...";
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "verify", token: cachedToken })
      });
      const data = await res.json();
      syncCurrentUser(data.user);
      if (data.status === "approved") {
        showApp();
        return;
      } else if (data.status === "pending") {
        showPendingOverlay(data.user || JSON.parse(cachedUser));
        return;
      }
    } catch (e) {
      // Token expired or offline — show login
    }
    localStorage.removeItem("bali_token");
    localStorage.removeItem("bali_user");
  }

  document.getElementById("auth-status").textContent = "";
}

window.googleLogout = googleLogout;
window.canEdit = canEdit;
window.getCurrentRole = getCurrentRole;
window.updateRoleBasedUI = updateRoleBasedUI;

function detectInAppBrowser() {
  const ua = navigator.userAgent || "";
  // LINE, Instagram, Facebook, WeChat in-app browsers
  return /Line|FBAN|FBAV|Instagram|MicroMessenger|WebView|wv/.test(ua)
    || (/(iPhone|iPod|iPad)/.test(ua) && !/Safari/.test(ua));
}

document.addEventListener("DOMContentLoaded", () => {
  if (detectInAppBrowser()) {
    document.getElementById("auth-overlay").style.display = "flex";
    document.getElementById("auth-status").innerHTML = `
      ⚠️ 請用 <strong>Safari</strong> 或 <strong>Chrome</strong> 打開此連結，
      不支援 LINE / Instagram 內建瀏覽器登入。<br/><br/>
      請複製連結到瀏覽器：<br/>
      <code style="font-size:12px;background:#f0f0f0;padding:4px 8px;border-radius:6px;display:inline-block;margin-top:6px;word-break:break-all;">https://bali-for-rebuilding.netlify.app</code>
    `;
    // Hide the Google sign-in button since it won't work
    const signInDiv = document.querySelector(".g_id_signin");
    if (signInDiv) signInDiv.style.display = "none";
    return;
  }
  initAuth();
});
