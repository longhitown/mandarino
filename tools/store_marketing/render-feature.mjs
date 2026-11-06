import { createRequire } from "module";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = path.resolve(".");
const OUT = path.join(ROOT, "tools/store_marketing/promos");
fs.mkdirSync(OUT, { recursive: true });

const iconSvg = fs.readFileSync(path.join(ROOT, "docs/icon.svg"), "utf8");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1024, height: 500 } });

  // 1. Feature Graphic - Carta di Riso
  const htmlRice = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1024px;
    height: 500px;
    overflow: hidden;
    background: #FAF6EE;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 70px;
  }
  .bg-grad {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 75% 50%, rgba(20, 89, 74, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }
  .seal {
    position: absolute;
    top: 40px;
    right: 50px;
    width: 60px;
    height: 60px;
    border: 3px solid #C8312B;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C8312B;
    font-size: 30px;
    font-weight: 900;
    font-family: "Noto Serif SC", serif;
    opacity: 0.85;
  }
  .watermark {
    position: absolute;
    right: -20px;
    bottom: -60px;
    font-size: 320px;
    font-weight: 900;
    font-family: "Noto Serif SC", serif;
    color: rgba(20, 89, 74, 0.04);
    pointer-events: none;
    line-height: 1;
  }
  .left {
    flex: 1;
    z-index: 2;
  }
  .badge {
    display: inline-block;
    padding: 7px 18px;
    background: rgba(20, 89, 74, 0.1);
    color: #14594A;
    border: 1.5px solid rgba(20, 89, 74, 0.25);
    border-radius: 20px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .brand {
    font-size: 76px;
    font-weight: 800;
    color: #16201B;
    letter-spacing: -1.5px;
    line-height: 1;
    margin-bottom: 12px;
  }
  .tagline {
    font-size: 28px;
    font-weight: 600;
    color: #14594A;
    margin-bottom: 22px;
  }
  .features {
    display: flex;
    gap: 16px;
  }
  .feat-pill {
    padding: 8px 16px;
    background: #EFE8DA;
    color: #3C4641;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #DFD5C2;
  }
  .right {
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .icon-card {
    width: 210px;
    height: 210px;
    background: #FFFFFF;
    border-radius: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      0 20px 40px -10px rgba(45, 35, 20, 0.15),
      0 2px 6px rgba(0, 0, 0, 0.05),
      0 0 0 1px rgba(223, 214, 199, 0.6);
  }
  .icon-card svg {
    width: 150px;
    height: 150px;
  }
</style>
</head>
<body>
  <div class="bg-grad"></div>
  <div class="watermark">学</div>
  <div class="seal">道</div>
  <div class="left">
    <div class="badge">ITALIANO ⇄ CINESE · HSK 1–9</div>
    <div class="brand">màndarínō</div>
    <div class="tagline">Il cinese mandarino, finalmente chiaro.</div>
    <div class="features">
      <div class="feat-pill">100% Offline</div>
      <div class="feat-pill">Zero Pubblicità</div>
      <div class="feat-pill">FSRS Scientifico</div>
      <div class="feat-pill">Toni & Tratti</div>
    </div>
  </div>
  <div class="right">
    <div class="icon-card">
      ${iconSvg}
    </div>
  </div>
</body>
</html>`;

  await page.setContent(htmlRice);
  await page.screenshot({ path: path.join(OUT, "featureGraphic_rice.png") });

  // 2. Feature Graphic - Giada Imperiale
  const htmlJade = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1024px;
    height: 500px;
    overflow: hidden;
    background: radial-gradient(circle at 80% 40%, #154D40 0%, #0C2C24 50%, #051612 100%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 70px;
  }
  .bg-glow {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 25% 60%, rgba(229, 184, 105, 0.07) 0%, transparent 50%);
    pointer-events: none;
  }
  .seal {
    position: absolute;
    top: 40px;
    right: 50px;
    width: 60px;
    height: 60px;
    border: 3px solid #E5B869;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E5B869;
    font-size: 30px;
    font-weight: 900;
    font-family: "Noto Serif SC", serif;
    opacity: 0.9;
    background: rgba(229, 184, 105, 0.08);
  }
  .watermark {
    position: absolute;
    right: -20px;
    bottom: -60px;
    font-size: 320px;
    font-weight: 900;
    font-family: "Noto Serif SC", serif;
    color: rgba(255, 255, 255, 0.03);
    pointer-events: none;
    line-height: 1;
  }
  .left {
    flex: 1;
    z-index: 2;
  }
  .badge {
    display: inline-block;
    padding: 7px 18px;
    background: rgba(229, 184, 105, 0.15);
    color: #F3D08A;
    border: 1.5px solid rgba(229, 184, 105, 0.35);
    border-radius: 20px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .brand {
    font-size: 76px;
    font-weight: 800;
    color: #FFFFFF;
    letter-spacing: -1.5px;
    line-height: 1;
    margin-bottom: 12px;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }
  .brand span {
    color: #E5B869;
  }
  .tagline {
    font-size: 28px;
    font-weight: 600;
    color: #B4D6CD;
    margin-bottom: 22px;
  }
  .features {
    display: flex;
    gap: 16px;
  }
  .feat-pill {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.08);
    color: #E1EDE9;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
  }
  .right {
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .icon-card {
    width: 210px;
    height: 210px;
    background: linear-gradient(145deg, #18463B, #0E2E26);
    border-radius: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      0 25px 50px -10px rgba(0, 0, 0, 0.6),
      0 0 0 2px rgba(229, 184, 105, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  .icon-card svg {
    width: 150px;
    height: 150px;
  }
</style>
</head>
<body>
  <div class="bg-glow"></div>
  <div class="watermark">学</div>
  <div class="seal">道</div>
  <div class="left">
    <div class="badge">ITALIANO ⇄ CINESE · HSK 1–9</div>
    <div class="brand">màndarínō</div>
    <div class="tagline">Il cinese mandarino, finalmente chiaro.</div>
    <div class="features">
      <div class="feat-pill">100% Offline</div>
      <div class="feat-pill">Zero Pubblicità</div>
      <div class="feat-pill">FSRS Scientifico</div>
      <div class="feat-pill">Toni & Tratti</div>
    </div>
  </div>
  <div class="right">
    <div class="icon-card">
      ${iconSvg}
    </div>
  </div>
</body>
</html>`;

  await page.setContent(htmlJade);
  await page.screenshot({ path: path.join(OUT, "featureGraphic_jade.png") });

  await browser.close();
  console.log("Feature graphics generated: featureGraphic_rice.png and featureGraphic_jade.png");
})();
