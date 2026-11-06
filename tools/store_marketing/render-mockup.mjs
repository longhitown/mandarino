import { createRequire } from "module";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = path.resolve(".");
const SHOTS = path.join(ROOT, "tools/store_marketing/raw_shots");
const OUT = path.join(ROOT, "tools/store_marketing/promos");
fs.mkdirSync(OUT, { recursive: true });

// Convert image to base64
function b64(file) {
  const data = fs.readFileSync(path.join(SHOTS, file));
  return "data:image/png;base64," + data.toString("base64");
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });

  const shot1 = b64("01_percorso.png");

  // Template Carta di Riso
  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1080px;
    height: 1920px;
    overflow: hidden;
    background: #FAF6EE;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* Carta di riso subtle background texture */
  .bg-decor {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    background: radial-gradient(circle at 50% 15%, rgba(20, 89, 74, 0.05), transparent 70%);
  }
  .seal {
    position: absolute;
    top: 50px;
    right: 60px;
    width: 68px;
    height: 68px;
    border: 3px solid #C8312B;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C8312B;
    font-size: 34px;
    font-weight: 900;
    font-family: "Noto Serif SC", serif;
    opacity: 0.85;
  }
  .header {
    width: 960px;
    margin-top: 80px;
    text-align: center;
    z-index: 2;
  }
  .badge {
    display: inline-block;
    padding: 10px 24px;
    background: rgba(20, 89, 74, 0.1);
    color: #14594A;
    border: 1.5px solid rgba(20, 89, 74, 0.25);
    border-radius: 30px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  .title {
    font-size: 58px;
    font-weight: 800;
    color: #1A2420;
    line-height: 1.22;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
  }
  .title span {
    color: #14594A;
  }
  .sub {
    font-size: 29px;
    font-weight: 500;
    color: #55625B;
    line-height: 1.45;
    max-width: 860px;
    margin: 0 auto;
  }
  /* Phone Frame Mockup */
  .device-wrap {
    position: absolute;
    bottom: -120px;
    width: 780px;
    height: 1560px;
    background: #1C2321;
    border-radius: 56px;
    padding: 14px;
    box-shadow:
      0 35px 80px -15px rgba(28, 35, 33, 0.35),
      0 10px 30px rgba(0, 0, 0, 0.15),
      inset 0 0 0 2px rgba(255, 255, 255, 0.15);
    z-index: 2;
  }
  .screen {
    width: 100%;
    height: 100%;
    border-radius: 44px;
    overflow: hidden;
    position: relative;
    background: #000;
  }
  .screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
  /* Dynamic island / camera hole */
  .camera {
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    width: 130px;
    height: 28px;
    background: #000;
    border-radius: 20px;
    z-index: 10;
  }
</style>
</head>
<body>
  <div class="bg-decor"></div>
  <div class="seal">道</div>
  <div class="header">
    <div class="badge">HSK 3.0 · VOCABOLARIO UFFICIALE</div>
    <div class="title">Tutto il cinese, <span>dal livello 1 al 9</span></div>
    <div class="sub">6.388 parole con caratteri, pinyin, audio nativo e frasi d'esempio reali.</div>
  </div>
  <div class="device-wrap">
    <div class="screen">
      <div class="camera"></div>
      <img src="${shot1}">
    </div>
  </div>
</body>
</html>`;

  await page.setContent(html);
  await page.screenshot({ path: path.join(OUT, "sample_phone_rice.png") });
  console.log("Sample mockup generated: sample_phone_rice.png");
  await browser.close();
})();
