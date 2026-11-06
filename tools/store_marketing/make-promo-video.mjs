import { createRequire } from "module";
import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

const ROOT = path.resolve(".");
const OUT = path.join(ROOT, "store_assets");
const TMP = path.join(ROOT, "tools/store_marketing/vid_tmp");
fs.mkdirSync(TMP, { recursive: true });

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

// Generate slide cards in HTML and render to 1920x1080 PNG
async function generateSlide(name, title, subtitle, badge, clipName, isIntro = false, isOutro = false) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  const iconSvg = fs.readFileSync(path.join(ROOT, "docs/icon.svg"), "utf8");

  let html;
  if (isIntro) {
    html = `<!doctype html><html><head><meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { width: 1920px; height: 1080px; overflow: hidden; background: radial-gradient(circle at 70% 30%, #154D40 0%, #0C2C24 55%, #051612 100%); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; position: relative; }
      .glow { position: absolute; width: 1200px; height: 700px; background: radial-gradient(ellipse, rgba(229,184,105,0.12) 0%, transparent 60%); }
      .box { text-align: center; z-index: 2; }
      .badge { display: inline-block; padding: 12px 32px; background: rgba(229,184,105,0.15); color: #F3D08A; border: 1.5px solid rgba(229,184,105,0.35); border-radius: 30px; font-size: 24px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 30px; }
      .brand { font-size: 130px; font-weight: 800; color: #FFFFFF; letter-spacing: -2px; line-height: 1; margin-bottom: 24px; text-shadow: 0 8px 30px rgba(0,0,0,0.5); }
      .tag { font-size: 42px; font-weight: 600; color: #B4D6CD; margin-bottom: 40px; }
      .pills { display: flex; gap: 24px; justify-content: center; }
      .pill { padding: 14px 28px; background: rgba(255,255,255,0.08); color: #E1EDE9; border-radius: 14px; font-size: 24px; font-weight: 600; border: 1px solid rgba(255,255,255,0.15); backdrop-filter: blur(10px); }
    </style></head>
    <body>
      <div class="glow"></div>
      <div class="box">
        <div class="badge">ITALIANO ⇄ CINESE · HSK 3.0</div>
        <div class="brand">màndarínō</div>
        <div class="tag">Il cinese mandarino, finalmente chiaro.</div>
        <div class="pills">
          <div class="pill">100% Offline</div>
          <div class="pill">Zero Pubblicità</div>
          <div class="pill">Ripetizione FSRS</div>
          <div class="pill">Toni & Tratti</div>
        </div>
      </div>
    </body></html>`;
  } else if (isOutro) {
    html = `<!doctype html><html><head><meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { width: 1920px; height: 1080px; overflow: hidden; background: radial-gradient(circle at 50% 40%, #154D40 0%, #0C2C24 60%, #051612 100%); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; position: relative; }
      .glow { position: absolute; width: 1000px; height: 600px; background: radial-gradient(ellipse, rgba(229,184,105,0.12) 0%, transparent 60%); }
      .box { text-align: center; z-index: 2; }
      .icon-card { width: 180px; height: 180px; background: #FFFFFF; border-radius: 40px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
      .icon-card svg { width: 130px; height: 130px; }
      .brand { font-size: 96px; font-weight: 800; color: #FFFFFF; letter-spacing: -2px; line-height: 1; margin-bottom: 16px; }
      .tag { font-size: 36px; font-weight: 600; color: #B4D6CD; margin-bottom: 32px; }
      .btn { display: inline-block; padding: 18px 48px; background: #E5B869; color: #08211B; border-radius: 40px; font-size: 28px; font-weight: 800; box-shadow: 0 10px 30px rgba(229,184,105,0.4); }
    </style></head>
    <body>
      <div class="glow"></div>
      <div class="box">
        <div class="icon-card">${iconSvg}</div>
        <div class="brand">màndarínō</div>
        <div class="tag">Inizia oggi. 100% gratuito e senza pubblicità.</div>
        <div class="btn">Disponibile su Google Play</div>
      </div>
    </body></html>`;
  } else {
    // Template with video placeholder area on the right (x: 1352, y: 143, w: 416, h: 854)
    html = `<!doctype html><html><head><meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { width: 1920px; height: 1080px; overflow: hidden; background: radial-gradient(circle at 30% 40%, #114237 0%, #08211B 65%, #04120F 100%); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; padding: 0 120px; position: relative; }
      .left { width: 950px; z-index: 2; }
      .badge { display: inline-block; padding: 10px 26px; background: rgba(229,184,105,0.12); color: #F3D08A; border: 1.5px solid rgba(229,184,105,0.35); border-radius: 30px; font-size: 22px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 24px; }
      .title { font-size: 72px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -1px; margin-bottom: 22px; text-shadow: 0 4px 20px rgba(0,0,0,0.5); }
      .title span { color: #E5B869; }
      .sub { font-size: 32px; font-weight: 500; color: #B4D6CD; line-height: 1.45; text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
      .device-placeholder { position: absolute; right: 130px; top: 120px; width: 440px; height: 900px; border-radius: 48px; background: #0B1714; box-shadow: 0 35px 80px -15px rgba(0,0,0,0.8), 0 0 0 2px rgba(229,184,105,0.3); }
    </style></head>
    <body>
      <div class="left">
        <div class="badge">${badge}</div>
        <div class="title">${title}</div>
        <div class="sub">${subtitle}</div>
      </div>
      <div class="device-placeholder"></div>
    </body></html>`;
  }

  await page.setContent(html);
  const outPath = path.join(TMP, `${name}.png`);
  await page.screenshot({ path: outPath });
  await browser.close();
  return outPath;
}

(async () => {
  console.log("Creazione slide per video promozionale...");
  await generateSlide("slide_intro", "", "", "", null, true, false);
  await generateSlide("slide_parole", "Tutto il percorso <span>HSK 3.0</span>", "6.388 parole con pinyin, audio nativo e frasi d'esempio verificate.", "VOCABOLARIO UFFICIALE", "parole");
  await generateSlide("slide_ripasso", "Memorizzazione scientifica con <span>FSRS</span>", "Dieci minuti al giorno per ricordare a lungo termine.", "FLASHCARD INTELLIGENTI", "ripasso");
  await generateSlide("slide_toni", "Oscilloscopio vocale <span>e Toni</span>", "Riconoscimento vocale e curve d'intonazione in tempo reale.", "PRONUNCIA GUIDATA", "toni");
  await generateSlide("slide_frasi", "Traduttore trasparente <span>a Raggi X</span>", "Impara a costruire le frasi capendo ogni regola e sfumatura.", "GRAMMATICA CHIARA", "frasi");
  await generateSlide("slide_outro", "", "", "", null, false, true);

  console.log("Composizione video con ffmpeg...");

  // Build segments with ffmpeg
  const sh = (cmd, args) => {
    const res = spawnSync(cmd, args, { encoding: "utf8" });
    if (res.status !== 0) throw new Error(`${cmd} failed: ${res.stderr || res.stdout}`);
  };

  // 1. Intro (4 seconds)
  sh("ffmpeg", ["-y", "-loop", "1", "-i", path.join(TMP, "slide_intro.png"), "-t", "4", "-vf", "fps=30,format=yuv420p", "-c:v", "libx264", "-pix_fmt", "yuv420p", path.join(TMP, "seg_intro.mp4")]);

  // Helper for clip overlays
  const buildOverlay = (slideImg, clipMp4, segOut, duration = 6) => {
    sh("ffmpeg", [
      "-y",
      "-loop", "1", "-i", slideImg,
      "-stream_loop", "-1", "-i", clipMp4,
      "-t", String(duration),
      "-filter_complex",
      "[1:v]scale=416:854:force_original_aspect_ratio=decrease[scaled];[0:v][scaled]overlay=1352:143[v]",
      "-map", "[v]",
      "-r", "30",
      "-c:v", "libx264",
      "-pix_fmt", "yuv420p",
      segOut
    ]);
  };

  buildOverlay(path.join(TMP, "slide_parole.png"), path.join(ROOT, "docs/img/clip-parole.mp4"), path.join(TMP, "seg_parole.mp4"), 6);
  buildOverlay(path.join(TMP, "slide_ripasso.png"), path.join(ROOT, "docs/img/clip-ripasso.mp4"), path.join(TMP, "seg_ripasso.mp4"), 6);
  buildOverlay(path.join(TMP, "slide_toni.png"), path.join(ROOT, "docs/img/clip-toni.mp4"), path.join(TMP, "seg_toni.mp4"), 6);
  buildOverlay(path.join(TMP, "slide_frasi.png"), path.join(ROOT, "docs/img/clip-frasi.mp4"), path.join(TMP, "seg_frasi.mp4"), 6);

  // Outro (4 seconds)
  sh("ffmpeg", ["-y", "-loop", "1", "-i", path.join(TMP, "slide_outro.png"), "-t", "4", "-vf", "fps=30,format=yuv420p", "-c:v", "libx264", "-pix_fmt", "yuv420p", path.join(TMP, "seg_outro.mp4")]);

  // Concat all segments
  const listFile = path.join(TMP, "list.txt");
  fs.writeFileSync(listFile, `file '${path.join(TMP, "seg_intro.mp4")}'
file '${path.join(TMP, "seg_parole.mp4")}'
file '${path.join(TMP, "seg_ripasso.mp4")}'
file '${path.join(TMP, "seg_toni.mp4")}'
file '${path.join(TMP, "seg_frasi.mp4")}'
file '${path.join(TMP, "seg_outro.mp4")}'
`);

  const concatVideo = path.join(TMP, "concat.mp4");
  sh("ffmpeg", ["-y", "-f", "concat", "-safe", "0", "-i", listFile, "-c", "copy", concatVideo]);

  // Mix with soundtrack (calligrafia.ogg)
  const finalVideo = path.join(OUT, "mandarino_promo_video.mp4");
  const music = path.join(ROOT, "src/audio/music/calligrafia.ogg");

  sh("ffmpeg", [
    "-y",
    "-i", concatVideo,
    "-i", music,
    "-filter_complex",
    "[1:a]afade=t=in:st=0:d=2,afade=t=out:st=30:d=2,volume=0.6[a]",
    "-map", "0:v",
    "-map", "[a]",
    "-c:v", "copy",
    "-c:a", "aac",
    "-b:a", "192k",
    "-shortest",
    "-movflags", "+faststart",
    finalVideo
  ]);

  console.log(`✓ Video promozionale creato con successo: ${finalVideo}`);
})();
