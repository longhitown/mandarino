import { createRequire } from "module";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { spawnSync } from "child_process";
import { getSeedProfile } from "./setup-profile.js";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = path.resolve(".");
const DIST = pathToFileURL(path.join(ROOT, "dist/index.html")).href;
const BASE_OUT = path.join(ROOT, "store_assets");
const RAW_DIR = path.join(ROOT, "tools/store_marketing/raw_shots");

fs.mkdirSync(RAW_DIR, { recursive: true });
fs.mkdirSync(path.join(BASE_OUT, "carta_di_riso/phone"), { recursive: true });
fs.mkdirSync(path.join(BASE_OUT, "carta_di_riso/tablet7"), { recursive: true });
fs.mkdirSync(path.join(BASE_OUT, "carta_di_riso/tablet10"), { recursive: true });
fs.mkdirSync(path.join(BASE_OUT, "carta_di_riso/desktop"), { recursive: true });

fs.mkdirSync(path.join(BASE_OUT, "giada/phone"), { recursive: true });
fs.mkdirSync(path.join(BASE_OUT, "giada/tablet7"), { recursive: true });
fs.mkdirSync(path.join(BASE_OUT, "giada/tablet10"), { recursive: true });
fs.mkdirSync(path.join(BASE_OUT, "giada/desktop"), { recursive: true });

const iconSvg = fs.readFileSync(path.join(ROOT, "docs/icon.svg"), "utf8");

// Convert file to base64
function b64(filePath) {
  const data = fs.readFileSync(filePath);
  return "data:image/png;base64," + data.toString("base64");
}

const SHOT_DEFS = [
  {
    id: "01_percorso",
    badge: "HSK 3.0 · VOCABOLARIO UFFICIALE",
    title: "Tutto il cinese, dal livello 1 al 9",
    titleHighlight: "dal livello 1 al 9",
    sub: "6.388 parole con caratteri, pinyin, audio nativo e frasi d'esempio reali.",
    seal: "道"
  },
  {
    id: "02_flashcard",
    badge: "MEMORIZZAZIONE SCIENTIFICA",
    title: "Ricorda per sempre in 10 min al giorno",
    titleHighlight: "in 10 min al giorno",
    sub: "Algoritmo FSRS avanzato che adatta il ripasso ai tuoi ritmi di memoria.",
    seal: "学"
  },
  {
    id: "03_toni",
    badge: "PRONUNCIA GUIDATA & TONI",
    title: "Distingui e pronuncia i 4 toni",
    titleHighlight: "i 4 toni",
    sub: "Oscilloscopio vocale in tempo reale, curve di intonazione e duotono.",
    seal: "声"
  },
  {
    id: "04_lavagna",
    badge: "SCRITTURA DEGLI IDEOGRAMMI",
    title: "Impara a scrivere ogni carattere",
    titleHighlight: "ogni carattere",
    sub: "Lavagna tattile interattiva con l'ordine esatto e tracciamento dei tratti.",
    seal: "字"
  },
  {
    id: "05_frasi",
    badge: "GRAMMATICA TRASPARENTE",
    title: "Traduci capendo la struttura logica",
    titleHighlight: "la struttura logica",
    sub: "55 lezioni ragionate e traduttore a Raggi X che segnala le trappole dei calchi.",
    seal: "言"
  },
  {
    id: "06_parole",
    badge: "100% OFFLINE · NESSUNA PUBBLICITÀ",
    title: "Dizionario completo e privacy totale",
    titleHighlight: "privacy totale",
    sub: "Funziona senza rete. I tuoi progressi di studio restano solo sul telefono.",
    seal: "书"
  }
];

function buildPhoneHtml(theme, shotDef, imgDataUrl) {
  const isJade = theme === "giada";
  const bgStyle = isJade
    ? "radial-gradient(circle at 50% 20%, #114237 0%, #08211B 60%, #04120F 100%)"
    : "#FAF6EE";
  const bgGlow = isJade
    ? `<div style="position:absolute;top:40px;left:50%;transform:translateX(-50%);width:900px;height:500px;background:radial-gradient(ellipse at center, rgba(32,148,122,0.22) 0%, transparent 70%);pointer-events:none;"></div>`
    : `<div style="position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;background:radial-gradient(circle at 50% 15%, rgba(20,89,74,0.05), transparent 70%);"></div>`;
  const sealColor = isJade ? "#E5B869" : "#C8312B";
  const sealBg = isJade ? "rgba(229,184,105,0.08)" : "transparent";
  const badgeStyle = isJade
    ? "background:rgba(229,184,105,0.12);color:#F3D08A;border:1.5px solid rgba(229,184,105,0.35);"
    : "background:rgba(20,89,74,0.1);color:#14594A;border:1.5px solid rgba(20,89,74,0.25);";
  const titleColor = isJade ? "#FFFFFF" : "#1A2420";
  const hlColor = isJade ? "#E5B869" : "#14594A";
  const subColor = isJade ? "#B4D6CD" : "#55625B";
  const deviceBorder = isJade
    ? "box-shadow: 0 40px 100px -15px rgba(0,0,0,0.7), 0 0 0 2px rgba(229,184,105,0.25), inset 0 0 0 2px rgba(255,255,255,0.1);"
    : "box-shadow: 0 35px 80px -15px rgba(28,35,33,0.35), 0 10px 30px rgba(0,0,0,0.15), inset 0 0 0 2px rgba(255,255,255,0.15);";
  const deviceBg = isJade ? "#0B1714" : "#1C2321";

  const titleFormatted = shotDef.title.replace(
    shotDef.titleHighlight,
    `<span style="color:${hlColor}">${shotDef.titleHighlight}</span>`
  );

  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1080px;
    height: 1920px;
    overflow: hidden;
    background: ${bgStyle};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seal {
    position: absolute;
    top: 50px;
    right: 60px;
    width: 68px;
    height: 68px;
    border: 3px solid ${sealColor};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${sealColor};
    font-size: 34px;
    font-weight: 900;
    font-family: "Noto Serif SC", serif;
    opacity: 0.9;
    background: ${sealBg};
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
    border-radius: 30px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
    ${badgeStyle}
  }
  .title {
    font-size: 56px;
    font-weight: 800;
    color: ${titleColor};
    line-height: 1.22;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
    ${isJade ? 'text-shadow: 0 4px 20px rgba(0,0,0,0.4);' : ''}
  }
  .sub {
    font-size: 28px;
    font-weight: 500;
    color: ${subColor};
    line-height: 1.45;
    max-width: 860px;
    margin: 0 auto;
    ${isJade ? 'text-shadow: 0 2px 10px rgba(0,0,0,0.3);' : ''}
  }
  .device-wrap {
    position: absolute;
    bottom: -130px;
    width: 780px;
    height: 1560px;
    background: ${deviceBg};
    border-radius: 56px;
    padding: 14px;
    z-index: 2;
    ${deviceBorder}
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
  ${bgGlow}
  <div class="seal">${shotDef.seal}</div>
  <div class="header">
    <div class="badge">${shotDef.badge}</div>
    <div class="title">${titleFormatted}</div>
    <div class="sub">${shotDef.sub}</div>
  </div>
  <div class="device-wrap">
    <div class="screen">
      <div class="camera"></div>
      <img src="${imgDataUrl}">
    </div>
  </div>
</body>
</html>`;
}

function buildTabletHtml(theme, shotDef, imgDataUrl, width, height) {
  const isJade = theme === "giada";
  const bgStyle = isJade
    ? "radial-gradient(circle at 50% 25%, #114237 0%, #08211B 65%, #04120F 100%)"
    : "#FAF6EE";
  const badgeStyle = isJade
    ? "background:rgba(229,184,105,0.12);color:#F3D08A;border:1.5px solid rgba(229,184,105,0.35);"
    : "background:rgba(20,89,74,0.1);color:#14594A;border:1.5px solid rgba(20,89,74,0.25);";
  const titleColor = isJade ? "#FFFFFF" : "#1A2420";
  const hlColor = isJade ? "#E5B869" : "#14594A";
  const subColor = isJade ? "#B4D6CD" : "#55625B";
  const sealColor = isJade ? "#E5B869" : "#C8312B";
  const deviceBorder = isJade
    ? "box-shadow: 0 45px 110px -20px rgba(0,0,0,0.7), 0 0 0 2px rgba(229,184,105,0.25);"
    : "box-shadow: 0 40px 90px -20px rgba(28,35,33,0.35), 0 10px 30px rgba(0,0,0,0.15);";
  const deviceBg = isJade ? "#0B1714" : "#1C2321";

  const titleFormatted = shotDef.title.replace(
    shotDef.titleHighlight,
    `<span style="color:${hlColor}">${shotDef.titleHighlight}</span>`
  );

  const isLandscape = width > height;

  if (isLandscape) {
    return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    background: ${bgStyle};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 100px;
    gap: 80px;
  }
  .seal {
    position: absolute;
    top: 50px;
    right: 70px;
    width: 68px;
    height: 68px;
    border: 3px solid ${sealColor};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${sealColor};
    font-size: 34px;
    font-weight: 900;
    font-family: "Noto Serif SC", serif;
    opacity: 0.9;
  }
  .left {
    flex: 1.1;
    z-index: 2;
  }
  .badge {
    display: inline-block;
    padding: 10px 24px;
    border-radius: 30px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
    ${badgeStyle}
  }
  .title {
    font-size: 64px;
    font-weight: 800;
    color: ${titleColor};
    line-height: 1.2;
    letter-spacing: -0.5px;
    margin-bottom: 20px;
  }
  .sub {
    font-size: 30px;
    font-weight: 500;
    color: ${subColor};
    line-height: 1.45;
  }
  .right {
    flex: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
  }
  .device-wrap {
    width: 580px;
    height: 1160px;
    background: ${deviceBg};
    border-radius: 52px;
    padding: 12px;
    transform: rotate(3deg) translateY(40px);
    ${deviceBorder}
  }
  .screen {
    width: 100%;
    height: 100%;
    border-radius: 40px;
    overflow: hidden;
    position: relative;
  }
  .screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
</head>
<body>
  <div class="seal">${shotDef.seal}</div>
  <div class="left">
    <div class="badge">${shotDef.badge}</div>
    <div class="title">${titleFormatted}</div>
    <div class="sub">${shotDef.sub}</div>
  </div>
  <div class="right">
    <div class="device-wrap">
      <div class="screen">
        <img src="${imgDataUrl}">
      </div>
    </div>
  </div>
</body>
</html>`;
  }

  // Portrait layout for tablet
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    background: ${bgStyle};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seal {
    position: absolute;
    top: 50px;
    right: 60px;
    width: 68px;
    height: 68px;
    border: 3px solid ${sealColor};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${sealColor};
    font-size: 34px;
    font-weight: 900;
    font-family: "Noto Serif SC", serif;
    opacity: 0.9;
  }
  .header {
    width: 90%;
    margin-top: 80px;
    text-align: center;
    z-index: 2;
  }
  .badge {
    display: inline-block;
    padding: 10px 24px;
    border-radius: 30px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
    ${badgeStyle}
  }
  .title {
    font-size: 58px;
    font-weight: 800;
    color: ${titleColor};
    line-height: 1.22;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
  }
  .sub {
    font-size: 28px;
    font-weight: 500;
    color: ${subColor};
    line-height: 1.45;
    max-width: 860px;
    margin: 0 auto;
  }
  .device-wrap {
    position: absolute;
    bottom: -120px;
    width: 820px;
    height: 1560px;
    background: ${deviceBg};
    border-radius: 56px;
    padding: 14px;
    z-index: 2;
    ${deviceBorder}
  }
  .screen {
    width: 100%;
    height: 100%;
    border-radius: 44px;
    overflow: hidden;
    position: relative;
  }
  .screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
</head>
<body>
  <div class="seal">${shotDef.seal}</div>
  <div class="header">
    <div class="badge">${shotDef.badge}</div>
    <div class="title">${titleFormatted}</div>
    <div class="sub">${shotDef.sub}</div>
  </div>
  <div class="device-wrap">
    <div class="screen">
      <img src="${imgDataUrl}">
    </div>
  </div>
</body>
</html>`;
}

(async () => {
  console.log("=== Generazione Suite Asset Google Play ===");
  const browser = await chromium.launch();

  // 1. Icona App 512x512
  console.log("Generazione Icona 512x512...");
  const iconPage = await browser.newPage({ viewport: { width: 512, height: 512 } });
  await iconPage.setContent(`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 512px; height: 512px; overflow: hidden; background: #FFFFFF; display: flex; align-items: center; justify-content: center; }
  svg { width: 440px; height: 440px; }
</style>
</head>
<body>
  ${iconSvg}
</body>
</html>`);
  await iconPage.screenshot({ path: path.join(BASE_OUT, "icon.png") });
  await iconPage.close();

  // 2. Feature Graphic 1024x500 (entrambe le varianti)
  console.log("Generazione Feature Graphic 1024x500...");
  const fgPage = await browser.newPage({ viewport: { width: 1024, height: 500 } });
  
  // Feature Graphic Carta di Riso
  const fgRiceHtml = `<!doctype html>
<html><head><meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { width: 1024px; height: 500px; overflow: hidden; background: #FAF6EE; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif; position: relative; display: flex; align-items: center; padding: 0 70px; }
  .bg-grad { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 75% 50%, rgba(20, 89, 74, 0.08) 0%, transparent 60%); pointer-events: none; }
  .seal { position: absolute; top: 40px; right: 50px; width: 60px; height: 60px; border: 3px solid #C8312B; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #C8312B; font-size: 30px; font-weight: 900; font-family: "Noto Serif SC", serif; opacity: 0.85; }
  .watermark { position: absolute; right: -20px; bottom: -60px; font-size: 320px; font-weight: 900; font-family: "Noto Serif SC", serif; color: rgba(20, 89, 74, 0.04); pointer-events: none; line-height: 1; }
  .left { flex: 1; z-index: 2; }
  .badge { display: inline-block; padding: 7px 18px; background: rgba(20, 89, 74, 0.1); color: #14594A; border: 1.5px solid rgba(20, 89, 74, 0.25); border-radius: 20px; font-size: 15px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; }
  .brand { font-size: 76px; font-weight: 800; color: #16201B; letter-spacing: -1.5px; line-height: 1; margin-bottom: 12px; }
  .tagline { font-size: 28px; font-weight: 600; color: #14594A; margin-bottom: 22px; }
  .features { display: flex; gap: 16px; }
  .feat-pill { padding: 8px 16px; background: #EFE8DA; color: #3C4641; border-radius: 10px; font-size: 16px; font-weight: 600; border: 1px solid #DFD5C2; }
  .right { width: 250px; height: 250px; display: flex; align-items: center; justify-content: center; z-index: 2; }
  .icon-card { width: 210px; height: 210px; background: #FFFFFF; border-radius: 46px; display: flex; align-items: center; justify-content: center; box-shadow: 0 20px 40px -10px rgba(45, 35, 20, 0.15), 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(223, 214, 199, 0.6); }
  .icon-card svg { width: 150px; height: 150px; }
</style></head>
<body>
  <div class="bg-grad"></div><div class="watermark">学</div><div class="seal">道</div>
  <div class="left">
    <div class="badge">ITALIANO ⇄ CINESE · HSK 1–9</div>
    <div class="brand">màndarínō</div>
    <div class="tagline">Il cinese mandarino, finalmente chiaro.</div>
    <div class="features">
      <div class="feat-pill">100% Offline</div><div class="feat-pill">Zero Pubblicità</div><div class="feat-pill">FSRS Scientifico</div><div class="feat-pill">Toni & Tratti</div>
    </div>
  </div>
  <div class="right"><div class="icon-card">${iconSvg}</div></div>
</body></html>`;
  await fgPage.setContent(fgRiceHtml);
  await fgPage.screenshot({ path: path.join(BASE_OUT, "carta_di_riso/featureGraphic.png") });

  // Feature Graphic Giada
  const fgJadeHtml = `<!doctype html>
<html><head><meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { width: 1024px; height: 500px; overflow: hidden; background: radial-gradient(circle at 80% 40%, #154D40 0%, #0C2C24 50%, #051612 100%); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif; position: relative; display: flex; align-items: center; padding: 0 70px; }
  .bg-glow { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 60%, rgba(229, 184, 105, 0.07) 0%, transparent 50%); pointer-events: none; }
  .seal { position: absolute; top: 40px; right: 50px; width: 60px; height: 60px; border: 3px solid #E5B869; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #E5B869; font-size: 30px; font-weight: 900; font-family: "Noto Serif SC", serif; opacity: 0.9; background: rgba(229, 184, 105, 0.08); }
  .watermark { position: absolute; right: -20px; bottom: -60px; font-size: 320px; font-weight: 900; font-family: "Noto Serif SC", serif; color: rgba(255, 255, 255, 0.03); pointer-events: none; line-height: 1; }
  .left { flex: 1; z-index: 2; }
  .badge { display: inline-block; padding: 7px 18px; background: rgba(229, 184, 105, 0.15); color: #F3D08A; border: 1.5px solid rgba(229, 184, 105, 0.35); border-radius: 20px; font-size: 15px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; }
  .brand { font-size: 76px; font-weight: 800; color: #FFFFFF; letter-spacing: -1.5px; line-height: 1; margin-bottom: 12px; text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); }
  .tagline { font-size: 28px; font-weight: 600; color: #B4D6CD; margin-bottom: 22px; }
  .features { display: flex; gap: 16px; }
  .feat-pill { padding: 8px 16px; background: rgba(255, 255, 255, 0.08); color: #E1EDE9; border-radius: 10px; font-size: 16px; font-weight: 600; border: 1px solid rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); }
  .right { width: 250px; height: 250px; display: flex; align-items: center; justify-content: center; z-index: 2; }
  .icon-card { width: 210px; height: 210px; background: linear-gradient(145deg, #18463B, #0E2E26); border-radius: 46px; display: flex; align-items: center; justify-content: center; box-shadow: 0 25px 50px -10px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(229, 184, 105, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2); }
  .icon-card svg { width: 150px; height: 150px; }
</style></head>
<body>
  <div class="bg-glow"></div><div class="watermark">学</div><div class="seal">道</div>
  <div class="left">
    <div class="badge">ITALIANO ⇄ CINESE · HSK 1–9</div>
    <div class="brand">màndarínō</div>
    <div class="tagline">Il cinese mandarino, finalmente chiaro.</div>
    <div class="features">
      <div class="feat-pill">100% Offline</div><div class="feat-pill">Zero Pubblicità</div><div class="feat-pill">FSRS Scientifico</div><div class="feat-pill">Toni & Tratti</div>
    </div>
  </div>
  <div class="right"><div class="icon-card">${iconSvg}</div></div>
</body></html>`;
  await fgPage.setContent(fgJadeHtml);
  await fgPage.screenshot({ path: path.join(BASE_OUT, "giada/featureGraphic.png") });
  await fgPage.close();

  // 3. Generazione Screenshot per Smartphone (1080x1920)
  console.log("Generazione Screenshot Smartphone (1080x1920)...");
  const phonePage = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  
  for (let i = 0; i < SHOT_DEFS.length; i++) {
    const shot = SHOT_DEFS[i];
    const rawFile = path.join(RAW_DIR, `${shot.id}.png`);
    if (!fs.existsSync(rawFile)) {
      console.warn(`File raw non trovato: ${rawFile}`);
      continue;
    }
    const imgData = b64(rawFile);
    const num = i + 1;

    // Carta di riso
    const riceHtml = buildPhoneHtml("carta_di_riso", shot, imgData);
    await phonePage.setContent(riceHtml);
    await phonePage.screenshot({ path: path.join(BASE_OUT, `carta_di_riso/phone/${num}.png`) });

    // Giada
    const jadeHtml = buildPhoneHtml("giada", shot, imgData);
    await phonePage.setContent(jadeHtml);
    await phonePage.screenshot({ path: path.join(BASE_OUT, `giada/phone/${num}.png`) });

    console.log(`✓ Smartphone shot ${num}/${SHOT_DEFS.length}: ${shot.badge}`);
  }
  await phonePage.close();

  // 4. Generazione Screenshot Tablet 7" (1200x1920)
  console.log("Generazione Screenshot Tablet 7\" (1200x1920)...");
  const tab7Page = await browser.newPage({ viewport: { width: 1200, height: 1920 } });
  for (let i = 0; i < 4; i++) {
    const shot = SHOT_DEFS[i];
    const rawFile = path.join(RAW_DIR, `${shot.id}.png`);
    const imgData = b64(rawFile);
    const num = i + 1;

    // Carta di riso
    await tab7Page.setContent(buildTabletHtml("carta_di_riso", shot, imgData, 1200, 1920));
    await tab7Page.screenshot({ path: path.join(BASE_OUT, `carta_di_riso/tablet7/${num}.png`) });

    // Giada
    await tab7Page.setContent(buildTabletHtml("giada", shot, imgData, 1200, 1920));
    await tab7Page.screenshot({ path: path.join(BASE_OUT, `giada/tablet7/${num}.png`) });
    console.log(`✓ Tablet 7" shot ${num}/4`);
  }
  await tab7Page.close();

  // 5. Generazione Screenshot Tablet 10" (2048x1536 Landscape)
  console.log("Generazione Screenshot Tablet 10\" (2048x1536)...");
  const tab10Page = await browser.newPage({ viewport: { width: 2048, height: 1536 } });
  for (let i = 0; i < 4; i++) {
    const shot = SHOT_DEFS[i];
    const rawFile = path.join(RAW_DIR, `${shot.id}.png`);
    const imgData = b64(rawFile);
    const num = i + 1;

    // Carta di riso
    await tab10Page.setContent(buildTabletHtml("carta_di_riso", shot, imgData, 2048, 1536));
    await tab10Page.screenshot({ path: path.join(BASE_OUT, `carta_di_riso/tablet10/${num}.png`) });

    // Giada
    await tab10Page.setContent(buildTabletHtml("giada", shot, imgData, 2048, 1536));
    await tab10Page.screenshot({ path: path.join(BASE_OUT, `giada/tablet10/${num}.png`) });
    console.log(`✓ Tablet 10" shot ${num}/4`);
  }
  await tab10Page.close();

  // 6. Generazione Screenshot Desktop (1920x1080 Landscape)
  console.log("Generazione Screenshot Desktop (1920x1080)...");
  const deskPage = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  for (let i = 0; i < 4; i++) {
    const shot = SHOT_DEFS[i];
    const rawFile = path.join(RAW_DIR, `${shot.id}.png`);
    const imgData = b64(rawFile);
    const num = i + 1;

    // Carta di riso
    await deskPage.setContent(buildTabletHtml("carta_di_riso", shot, imgData, 1920, 1080));
    await deskPage.screenshot({ path: path.join(BASE_OUT, `carta_di_riso/desktop/${num}.png`) });

    // Giada
    await deskPage.setContent(buildTabletHtml("giada", shot, imgData, 1920, 1080));
    await deskPage.screenshot({ path: path.join(BASE_OUT, `giada/desktop/${num}.png`) });
    console.log(`✓ Desktop shot ${num}/4`);
  }
  await deskPage.close();

  await browser.close();
  console.log("=== Tutti gli asset visivi sono stati generati con successo in store_assets/ ===");
})();
