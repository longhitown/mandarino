import { createRequire } from "module";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = path.resolve(".");
const SHOTS = path.join(ROOT, "tools/store_marketing/raw_shots");
const OUT = path.join(ROOT, "tools/store_marketing/promos");

function b64(file) {
  const data = fs.readFileSync(path.join(SHOTS, file));
  return "data:image/png;base64," + data.toString("base64");
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  const shot1 = b64("01_percorso.png");

  // Template Giada Imperiale
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
    background: radial-gradient(circle at 50% 20%, #114237 0%, #08211B 60%, #04120F 100%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bg-glow {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    height: 500px;
    background: radial-gradient(ellipse at center, rgba(32, 148, 122, 0.22) 0%, transparent 70%);
    pointer-events: none;
  }
  .seal {
    position: absolute;
    top: 50px;
    right: 60px;
    width: 68px;
    height: 68px;
    border: 3px solid #E5B869;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E5B869;
    font-size: 34px;
    font-weight: 900;
    font-family: "Noto Serif SC", serif;
    opacity: 0.9;
    background: rgba(229, 184, 105, 0.08);
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
    background: rgba(229, 184, 105, 0.12);
    color: #F3D08A;
    border: 1.5px solid rgba(229, 184, 105, 0.35);
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
    color: #FFFFFF;
    line-height: 1.22;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }
  .title span {
    color: #E5B869;
  }
  .sub {
    font-size: 29px;
    font-weight: 500;
    color: #B4D6CD;
    line-height: 1.45;
    max-width: 860px;
    margin: 0 auto;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  .device-wrap {
    position: absolute;
    bottom: -120px;
    width: 780px;
    height: 1560px;
    background: #0B1714;
    border-radius: 56px;
    padding: 14px;
    box-shadow:
      0 40px 100px -15px rgba(0, 0, 0, 0.7),
      0 0 0 2px rgba(229, 184, 105, 0.25),
      inset 0 0 0 2px rgba(255, 255, 255, 0.1);
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
  <div class="bg-glow"></div>
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
  await page.screenshot({ path: path.join(OUT, "sample_phone_jade.png") });
  console.log("Sample mockup generated: sample_phone_jade.png");
  await browser.close();
})();
