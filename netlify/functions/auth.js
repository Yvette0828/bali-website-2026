// Netlify Function: /api/auth
// Verifies Google ID token and checks approval status

const nodemailer = require('nodemailer');

async function sendApprovalEmail(toEmail, toName) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });

  await transporter.sendMail({
    from: `"Yvette" <${user}>`,
    to: toEmail,
    subject: '🌴 Bali for Rebuilding — 你已獲得存取權限！',
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;">
        <h2 style="font-size:22px;margin-bottom:8px;">🌴 歡迎加入！</h2>
        <p style="color:#555;line-height:1.6;">嗨 ${toName || toEmail}，<br/><br/>
        你已獲准存取 <strong>Bali for Rebuilding</strong> 行程網頁 🎉</p>
        <a href="https://bali-for-rebuilding.netlify.app" 
           style="display:inline-block;margin-top:24px;padding:12px 24px;background:#1a6fd4;color:white;border-radius:10px;text-decoration:none;font-weight:600;">
          開啟行程網頁
        </a>
        <p style="margin-top:24px;color:#aaa;font-size:12px;">Apr 11–15, 2026 · Bali</p>
      </div>
    `
  });
}

const AUTH_GIST_ID = process.env.AUTH_GIST_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "y19990828@gmail.com";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const AUTH_FILENAME = "bali-auth.json";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function extractApprovedEmail(entry) {
  if (typeof entry === "string") return normalizeEmail(entry);
  if (entry && typeof entry === "object") return normalizeEmail(entry.email);
  return "";
}

function extractRole(entry) {
  if (entry && typeof entry === "object" && entry.role) return entry.role;
  return "editor";
}

function isApprovedEntry(entry, email) {
  return extractApprovedEmail(entry) === normalizeEmail(email);
}

function isSimpleEmailMatch(entry, email) {
  if (typeof entry === "string") return normalizeEmail(entry) === normalizeEmail(email);
  if (entry && typeof entry === "object") return normalizeEmail(entry.email) === normalizeEmail(email);
  return false;
}

function getApprovedUser(authData, email) {
  return (authData.approved || []).find(entry => isApprovedEntry(entry, email));
}

function isRejectedUser(authData, email) {
  return (authData.rejected || []).some(entry => isSimpleEmailMatch(entry, email));
}

function isPendingUser(authData, email) {
  return (authData.pending || []).some(entry => isSimpleEmailMatch(entry, email));
}

async function verifyGoogleToken(token) {
  const res = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
  );
  if (!res.ok) return null;
  const payload = await res.json();
  // Verify audience
  if (payload.aud !== GOOGLE_CLIENT_ID) return null;
  return { email: payload.email, name: payload.name, picture: payload.picture };
}

async function getAuthData() {
  const fallback = {
    approved: [{ email: ADMIN_EMAIL, role: "admin" }],
    pending: [],
    rejected: []
  };

  if (!AUTH_GIST_ID || !GITHUB_TOKEN) return fallback;
  const res = await fetch(`https://api.github.com/gists/${AUTH_GIST_ID}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    }
  });
  if (!res.ok) return fallback;
  const data = await res.json();
  const content = data.files?.[AUTH_FILENAME]?.content;
  try {
    const parsed = JSON.parse(content);
    return {
      approved: Array.isArray(parsed.approved) ? parsed.approved : fallback.approved,
      pending: Array.isArray(parsed.pending) ? parsed.pending : [],
      rejected: Array.isArray(parsed.rejected) ? parsed.rejected : []
    };
  } catch {
    return fallback;
  }
}

async function saveAuthData(authData) {
  if (!AUTH_GIST_ID || !GITHUB_TOKEN) return false;
  const res = await fetch(`https://api.github.com/gists/${AUTH_GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json",
    },
    body: JSON.stringify({
      files: { [AUTH_FILENAME]: { content: JSON.stringify(authData, null, 2) } }
    })
  });
  return res.ok;
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };

  const body = JSON.parse(event.body || "{}");
  const { action, token, email } = body;

  // === Verify + check status ===
  if (action === "verify") {
    if (!token) return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing token" }) };

    const user = await verifyGoogleToken(token);
    if (!user) return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid token" }) };

    const authData = await getAuthData();

    const approvedEntry = getApprovedUser(authData, user.email);
    if (approvedEntry) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: "approved",
          user: {
            ...user,
            role: extractRole(approvedEntry)
          }
        })
      };
    }
    if (isRejectedUser(authData, user.email)) {
      return { statusCode: 403, headers, body: JSON.stringify({ status: "rejected", user }) };
    }

    // Add to pending if not already there
    if (!isPendingUser(authData, user.email)) {
      authData.pending.push({ email: user.email, name: user.name, requestedAt: new Date().toISOString() });
      await saveAuthData(authData);
    }

    return { statusCode: 202, headers, body: JSON.stringify({ status: "pending", user }) };
  }

  // === Admin: approve user ===
  if (action === "approve") {
    const authData = await getAuthData();
    // Only admin can approve
    const requester = getApprovedUser(authData, email);
    if (!requester || extractRole(requester) !== "admin") {
      return { statusCode: 403, headers, body: JSON.stringify({ error: "Not authorized" }) };
    }
    const targetEmail = normalizeEmail(body.targetEmail);
    const targetRole = body.role || "viewer";
    const targetUser = authData.pending.find(p => normalizeEmail(p.email) === targetEmail);
    authData.pending = authData.pending.filter(p => normalizeEmail(p.email) !== targetEmail);
    authData.rejected = authData.rejected.filter(e => !isSimpleEmailMatch(e, targetEmail));
    if (!getApprovedUser(authData, targetEmail)) {
      authData.approved.push({ email: targetEmail, name: targetUser?.name, role: targetRole });
    }
    await saveAuthData(authData);
    // Send approval email
    try { await sendApprovalEmail(targetEmail, targetUser?.name || targetEmail); } catch(e) { console.error('Email failed:', e.message); }
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  }

  // === Admin: reject user ===
  if (action === "reject") {
    const authData = await getAuthData();
    const requester = getApprovedUser(authData, email);
    if (!requester || extractRole(requester) !== "admin") {
      return { statusCode: 403, headers, body: JSON.stringify({ error: "Not authorized" }) };
    }
    const targetEmail = normalizeEmail(body.targetEmail);
    authData.pending = authData.pending.filter(p => normalizeEmail(p.email) !== targetEmail);
    authData.approved = authData.approved.filter(e => !isApprovedEntry(e, targetEmail)); // also remove from approved
    if (!isRejectedUser(authData, targetEmail)) authData.rejected.push(targetEmail);
    await saveAuthData(authData);
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  }

  // === Admin: get pending list ===
  if (action === "list") {
    const authData = await getAuthData();
    const requester = getApprovedUser(authData, email);
    if (!requester || extractRole(requester) !== "admin") {
      return { statusCode: 403, headers, body: JSON.stringify({ error: "Not authorized" }) };
    }
    return { statusCode: 200, headers, body: JSON.stringify({ pending: authData.pending, approved: authData.approved, rejected: authData.rejected }) };
  }

  return { statusCode: 400, headers, body: JSON.stringify({ error: "Unknown action" }) };
};
