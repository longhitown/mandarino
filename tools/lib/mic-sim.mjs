/* màndarínō · microfono simulato per provare src/voice/pitch.js senza browser: un orologio virtuale (16 ms a fotogramma), un analizzatore finto
   che restituisce una voce sintetica (armoniche + rumore di fondo) e CP.pitchSession vera. Serve ai test (tools/unit.mjs): run(file, voce) → i punti
   {t, f} che la sessione ha registrato. voce(t) → { f: Hz, rms } oppure null (silenzio), con t in secondi dal tocco. */
import fs from "fs"; import vm from "vm";
export async function run(file, voice, secs = 3.2) {
  let clock = 100, q = null, seed = 3; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }, gauss = () => Math.sqrt(-2 * Math.log(rnd() + 1e-12)) * Math.cos(2 * Math.PI * rnd());
  const perf = { now: () => clock * 1000 }; let frame = new Float32Array(2048), tStart = null;
  const an = { fftSize: 0, connect() {}, disconnect() {}, getFloatTimeDomainData: (b) => b.set(frame) };
  const ctx = vm.createContext({ Math, Float32Array, Promise, navigator: {}, performance: perf, document: { hidden: false }, console, setTimeout: () => 0, clearInterval() {}, setInterval: () => 0, requestAnimationFrame: (fn) => { q = fn; return 1; }, cancelAnimationFrame() {} });
  ctx.window = ctx; ctx.CP = { getCtx: () => ({ state: "running", sampleRate: 48000, createMediaStreamSource: () => ({ connect() {}, disconnect() {} }), createAnalyser: () => an, createGain: () => ({ gain: { value: 0 }, connect() {}, disconnect() {} }), destination: {} }), micStream: () => Promise.resolve({}), micRelease() {} };
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx);
  let res = null; const ses = ctx.CP.pitchSession({ maxSec: 3.5, waitSec: 7, onFrame() {}, onEnd: (r) => { res = r; } });
  await Promise.resolve(); await Promise.resolve(); tStart = clock;
  let ph = 0;
  for (let i = 0; i < Math.round(secs / 0.016) && !res && q; i++) {
    clock += 0.016; const t = clock - tStart, v = voice(t), f = v && v.f, rms = v ? v.rms : 0;
    const b = new Float32Array(2048); let s = 0;
    for (let k = 0; k < 2048; k++) { if (f) { ph += 2 * Math.PI * f / 48000; b[k] = Math.sin(ph) + .6 * Math.sin(2 * ph + .4) + .4 * Math.sin(3 * ph + 1.1); } s += b[k] * b[k]; }
    const g = f ? rms / Math.sqrt(s / 2048) : 0; for (let k = 0; k < 2048; k++) b[k] = b[k] * g + gauss() * 0.003; frame = b;
    const fn = q; q = null; fn();
  }
  if (!res) ses.stop(false);
  return res ? res.pts : [];
}
