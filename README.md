# 峇里島 2026 🌴

Bali 2026 旅遊行程網頁 – iOS26 風格，手機優先。

## 功能
- 5 天行程時間軸
- 可新增/編輯/刪除預訂資訊
- 資料存在 GitHub Gist（多人同步）
- 部署於 Netlify（免費）

## 環境變數（在 Netlify 設定）
- `GIST_ID` – 用來存預訂資料的 GitHub Gist ID
- `GITHUB_TOKEN` – 有 gist 權限的 GitHub Personal Access Token

## 本地開發
```bash
npm install -g netlify-cli
netlify dev
```

## 部署
```bash
netlify deploy --prod
```
