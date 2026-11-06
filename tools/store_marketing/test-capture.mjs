import { createRequire } from "module";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { getSeedProfile } from "./setup-profile.js";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = path.resolve(".");
const DIST = pathToFileURL(path.join(ROOT, "dist/index.html")).href;
const OUT = path.join(ROOT, "tools/store_marketing/raw_shots");
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true
  });

  const seed = getSeedProfile();
  await ctx.addInitScript((s) => {
    for (const [k, v] of Object.entries(s)) {
      localStorage.setItem(k, v);
    }
  }, seed);

  const page = await ctx.newPage();
  await page.goto(DIST, { waitUntil: "commit" });
  await page.waitForTimeout(2500);

  // 1. Percorso (Path)
  await page.evaluate(() => CP.show("path", true, true));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT, "01_percorso.png") });
  console.log("Captured 01_percorso.png");

  // 2. Studia / Flashcard (Study)
  await page.evaluate(() => CP.show("study", true, true));
  await page.waitForTimeout(800);
  // Start study session
  if (await page.$("#go")) {
    await page.click("#go");
    await page.waitForTimeout(1200);
  }
  await page.screenshot({ path: path.join(OUT, "02_flashcard.png") });
  console.log("Captured 02_flashcard.png");
  if (await page.$("#quit")) {
    await page.click("#quit");
    await page.waitForTimeout(500);
  }

  // 3. Duotono / Orecchio ai toni
  await page.evaluate(() => CP.show("study", true, true));
  await page.waitForTimeout(500);
  if (await page.$("#ear-open")) {
    await page.click("#ear-open");
    await page.waitForTimeout(1500);
  }
  await page.screenshot({ path: path.join(OUT, "03_toni.png") });
  console.log("Captured 03_toni.png");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(500);

  // 4. Lavagna (Writing strokes)
  await page.evaluate(() => CP.show("study", true, true));
  await page.waitForTimeout(500);
  if (await page.$("#lavagna-open")) {
    await page.click("#lavagna-open");
    await page.waitForTimeout(1500);
  }
  await page.screenshot({ path: path.join(OUT, "04_lavagna.png") });
  console.log("Captured 04_lavagna.png");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(500);

  // 5. Frasi / Raggi X
  await page.evaluate(() => CP.show("build", true, true));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(OUT, "05_frasi.png") });
  console.log("Captured 05_frasi.png");

  // 6. Parole / Vocabolario
  await page.evaluate(() => CP.show("words", true, true));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(OUT, "06_parole.png") });
  console.log("Captured 06_parole.png");

  await browser.close();
  console.log("All raw screenshots captured!");
})();
