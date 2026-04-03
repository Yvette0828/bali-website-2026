// ===========================
// Bali 2026 - Auth Layer
// ===========================

let currentUser = null;

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
    currentUser = data.user;

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
  currentUser = null;
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
      currentUser = data.user;
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

document.addEventListener("DOMContentLoaded", initAuth);
