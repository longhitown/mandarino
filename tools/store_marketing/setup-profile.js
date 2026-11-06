// Script per inizializzare il localStorage con un profilo ricco di studio
export function getSeedProfile() {
  const now = Date.now();
  return {
    "cp-ux-v1": JSON.stringify({ onboarded: 1, unlv: 1, showAll: 1 }),
    "cp-theme": "sepia",
    "cp-lang": "it",
    "cp-course": "zh",
    "cp-study-cfg": JSON.stringify({ n: 10, sec: "" }),
    "cp-game-v1": JSON.stringify({ xp: 480, goal: 10, days: { [new Date().toISOString().slice(0, 10)]: 10 }, best: 14 }),
    "cp-srs-v1": JSON.stringify({
      "你好": { n: 4, d: now - 3600000, b: 3, st: 4.2, df: 4, sd: 3, sp: 1, lr: now - 86400000, rp: 4, lp: 0 },
      "水": { n: 3, d: now - 7200000, b: 2, st: 2.5, df: 5, sd: 2, sp: 0, lr: now - 172800000, rp: 3, lp: 0 },
      "谢谢": { n: 5, d: now + 86400000, b: 4, st: 6.0, df: 3, sd: 4, sp: 2, lr: now - 3600000, rp: 5, lp: 0 },
      "中国": { n: 2, d: now - 1000, b: 1, st: 1.8, df: 6, sd: 2, sp: 0, lr: now - 259200000, rp: 2, lp: 1 }
    })
  };
}
