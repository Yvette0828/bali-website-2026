// Netlify Function: /api/bookings
// Stores booking data in a GitHub Gist (free, serverless)

const GIST_ID = process.env.GIST_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GIST_FILENAME = "bali-bookings.json";

async function getGist() {
  if (!GIST_ID || !GITHUB_TOKEN) return null;
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    }
  });
  if (!res.ok) return null;
  const data = await res.json();
  const content = data.files?.[GIST_FILENAME]?.content;
  if (!content) return { bookings: [] };
  try { return JSON.parse(content); }
  catch { return { bookings: [] }; }
}

async function saveGist(payload) {
  if (!GIST_ID || !GITHUB_TOKEN) return false;
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json",
    },
    body: JSON.stringify({
      files: {
        [GIST_FILENAME]: {
          content: JSON.stringify(payload, null, 2)
        }
      }
    })
  });
  return res.ok;
}

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod === "GET") {
    const data = await getGist();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data || { bookings: [] })
    };
  }

  if (event.httpMethod === "POST") {
    try {
      const body = JSON.parse(event.body);
      const ok = await saveGist(body);
      return {
        statusCode: ok ? 200 : 500,
        headers,
        body: JSON.stringify({ success: ok })
      };
    } catch {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid JSON" })
      };
    }
  }

  return { statusCode: 405, headers, body: "Method not allowed" };
};
