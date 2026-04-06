const fetch = require('node-fetch');
const AUTH_GIST_ID = process.env.AUTH_GIST_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const AUTH_FILENAME = 'bali-auth.json';

async function getAuthData() {
  if (!AUTH_GIST_ID || !GITHUB_TOKEN) return { error: 'no auth gist configured' };
  const res = await fetch(`https://api.github.com/gists/${AUTH_GIST_ID}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}`, Accept: 'application/vnd.github.v3+json' }
  });
  if (!res.ok) return { error: 'failed to fetch gist', status: res.status };
  const data = await res.json();
  try { return JSON.parse(data.files[AUTH_FILENAME].content); } catch(e) { return { error: 'parse fail', detail: e.message } }
}

exports.handler = async () => {
  const authData = await getAuthData();
  return { statusCode: 200, body: JSON.stringify({ envAdmin: process.env.ADMIN_EMAIL || null, authData }, null, 2) };
};
