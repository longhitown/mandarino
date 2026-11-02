/* màndarínō · lo stile della lezione-capitolo (ui/lezione.js). Resta una stringa: il foglio entra nella pagina la prima volta che si apre una lezione ricca,
   così non pesa sull'avvio. Colori e sfondi vengono dai token del tema (--surface, --ink, --accent, --t1…--t5): chiaro, scuro e temi si adattano da soli. */
window.CP.lzCss = `
.lz { --lz-ok: var(--accent); --lz-ko: var(--t4); --lz-r: 16px; --lz-soft: color-mix(in srgb, var(--accent) 9%, var(--surface)); --lz-soft2: color-mix(in srgb, var(--accent) 16%, var(--surface)); max-width: 760px; margin: 6px auto 40px; }
.lz *, .lz *::before, .lz *::after { box-sizing: border-box; }
.lz-back { margin: 14px 0 0; }
.lz-top { padding: 18px 2px 8px; }
.lz-title { font-size: clamp(1.45rem, 5.4vw, 2rem); line-height: 1.18; margin: 6px 0 8px; letter-spacing: -.01em; }
.lz-goal { margin: 0; padding: 12px 14px; border-radius: 12px; background: var(--lz-soft); color: var(--ink); font-size: 1rem; line-height: 1.45; }
.lz-svolta { color: var(--accent); font-weight: 700; }
.lz-sticky { position: sticky; top: 0; z-index: 5; margin: 10px -16px 6px; padding: 0 16px 8px; background: linear-gradient(var(--bg) 82%, transparent); }
.lz-bar { height: 3px; border-radius: 3px; background: var(--line); overflow: hidden; margin-bottom: 8px; }
.lz-bar i { display: block; height: 100%; width: 0; background: var(--accent); transition: width .12s linear; }
.lz-toc { display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none; padding: 2px 0; -webkit-overflow-scrolling: touch; }
.lz-toc::-webkit-scrollbar { display: none; }
.lz-tchip { flex: 0 0 auto; min-height: 36px; padding: 0 13px; border: 1px solid var(--line); border-radius: 999px; background: var(--surface); color: var(--muted); font: inherit; font-size: .86rem; cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
.lz-tchip.on { background: var(--accent); border-color: var(--accent); color: var(--bg); font-weight: 700; }
.lz-sec { margin: 26px 0 0; padding: 20px 16px 18px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--lz-r); scroll-margin-top: 92px; outline: none; }
.lz-h { display: flex; align-items: center; gap: 10px; margin: 0 0 12px; font-size: 1.15rem; line-height: 1.2; }
.lz-step { flex: 0 0 auto; display: inline-grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; background: var(--lz-soft2); color: var(--accent); font-weight: 800; font-size: .95rem; }
.lz-sub { margin: 20px 0 8px; font-size: .78rem; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); }
.lz-sec p { line-height: 1.6; margin: 0 0 10px; }
.lz mark { background: color-mix(in srgb, var(--accent) 22%, transparent); color: inherit; padding: 0 .2em; border-radius: 4px; }
.lz .han { font-weight: 600; }
.lz-rb { ruby-position: over; ruby-align: center; }
.lz-rb rt { font-size: .58em; font-weight: 500; line-height: 1.15; letter-spacing: 0; white-space: nowrap; color: var(--muted); font-family: var(--f-body, inherit); }
.lz-rb rt [class^="t"] { font-weight: 600; }
.lz-w { display: inline-block; text-align: center; vertical-align: top; }
.lz-w::after { content: attr(data-g); display: block; font-size: .6em; font-weight: 500; line-height: 1.1; margin-top: -.15em; color: var(--muted); white-space: nowrap; }
.lz[data-corso="zh"] .lz-sec p, .lz[data-corso="zh"] .lz-sec li { line-height: 1.95; }
.lz-tr { color: var(--muted); font-size: .92rem; margin-top: 4px; line-height: 1.45; }
.lz-sents { display: grid; gap: 10px; margin: 6px 0 14px; }
.lz-sent { padding: 12px 14px; border-radius: 12px; background: var(--lz-soft); border-left: 4px solid var(--accent); }
.lz-q-text { font-weight: 600; font-size: 1.02rem; }
.lz-ans { margin-top: 12px; padding: 12px 14px; border-radius: 12px; background: var(--lz-soft2); }
.lz-ans p { margin: 0; }
.lz-in { animation: lz-rise .32s cubic-bezier(.2,.8,.3,1); }
@keyframes lz-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.lz-lead { font-size: 1.08rem; line-height: 1.55; }
.lz-formula { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 8px; margin: 12px 0 16px; padding: 14px 12px; border-radius: 14px; background: var(--bg); border: 1px dashed var(--line); }
.lz-fx { padding: 7px 12px; border-radius: 10px; font-weight: 600; background: var(--lz-soft); border: 1px solid var(--line); }
.lz-fx.key { background: var(--accent); border-color: var(--accent); color: var(--bg); font-size: 1.1rem; }
.lz-fx.f1 { background: color-mix(in srgb, var(--t1) 16%, var(--surface)); } .lz-fx.f2 { background: color-mix(in srgb, var(--t2) 16%, var(--surface)); } .lz-fx.f3 { background: color-mix(in srgb, var(--t3) 16%, var(--surface)); } .lz-fx.f4 { background: color-mix(in srgb, var(--t4) 16%, var(--surface)); }
.lz-arrow { color: var(--muted); }
.lz-points { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.lz-points li { display: flex; gap: 10px; align-items: flex-start; padding: 10px 12px; border-radius: 12px; background: var(--bg); line-height: 1.5; }
.lz-points li.no { background: color-mix(in srgb, var(--lz-ko) 10%, var(--surface)); }
.lz-pi { flex: 0 0 auto; margin-top: 1px; color: var(--lz-ok); } .lz-points li.no .lz-pi { color: var(--lz-ko); }
.lz-callout { padding: 14px 16px; border-radius: 14px; background: var(--lz-soft); border-left: 4px solid var(--accent); }
.lz-callout p:last-child { margin-bottom: 0; }
.lz-tw { overflow-x: auto; margin: 0 -4px; padding: 0 4px; }
.lz-table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: .95rem; }
.lz-table th, .lz-table td { padding: 9px 11px; text-align: left; border-bottom: 1px solid var(--line); vertical-align: top; }
.lz-table thead th { background: var(--lz-soft2); position: sticky; top: 0; }
.lz-table thead th:first-child { border-top-left-radius: 10px; } .lz-table thead th:last-child { border-top-right-radius: 10px; }
.lz-table tbody th { font-weight: 700; background: var(--bg); }
.lz-hint, .lz-note { color: var(--muted); font-size: .92rem; }
.lz-chain { display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0; }
.lz-chip { display: inline-flex; flex-direction: column; align-items: center; padding: 6px 10px; border-radius: 10px; background: var(--bg); border: 1px solid var(--line); line-height: 1.2; }
.lz-chip i { font-style: normal; font-size: .7rem; color: var(--muted); }
.lz-chip.g-m { background: color-mix(in srgb, var(--t1) 14%, var(--surface)); } .lz-chip.g-f { background: color-mix(in srgb, var(--t4) 14%, var(--surface)); }
.lz-chip.core { border-color: var(--accent); box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 30%, transparent); }
.lz-tl { display: grid; gap: 10px; margin: 8px 0; }
.tl-row { display: grid; grid-template-columns: minmax(70px, 28%) 1fr; gap: 10px; align-items: center; }
.tl-lab { font-size: .9rem; line-height: 1.3; }
.tl-track { position: relative; height: 26px; border-radius: 13px; background: var(--bg); border: 1px solid var(--line); }
.tl-bar { position: absolute; top: 5px; bottom: 5px; border-radius: 8px; background: var(--accent); }
.tl-dot { position: absolute; top: 8px; width: 8px; height: 8px; border-radius: 50%; background: var(--accent); }
.tl-ev { position: absolute; top: -1px; transform: translateX(-50%); color: var(--lz-ko); }
.tl-axis { text-align: right; color: var(--muted); font-size: .85rem; }
.lz-tnode { padding: 14px; border-radius: 14px; background: var(--bg); }
.lz-tq { font-weight: 700; }
.lz-topts, .lz-opts { display: grid; gap: 8px; margin-top: 10px; }
.lz-opt { display: flex; align-items: center; justify-content: flex-start; text-align: left; gap: 8px; width: 100%; min-height: 48px; padding: 10px 14px; border: 1.5px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); font: inherit; cursor: pointer; transition: transform .12s, border-color .2s, background .2s; }
.lz-opt:hover:not(:disabled) { border-color: var(--accent); }
.lz-opt:active:not(:disabled) { transform: scale(.985); }
.lz-opt.right { border-color: var(--lz-ok); background: var(--lz-soft2); }
.lz-opt.wrong { border-color: var(--lz-ko); background: color-mix(in srgb, var(--lz-ko) 14%, var(--surface)); animation: lz-shake .3s; }
.lz-opt.off { opacity: .55; }
.lz-opt:disabled { cursor: default; color: var(--ink); }
@keyframes lz-shake { 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
.lz-ex { position: relative; padding: 12px 56px 12px 14px; margin: 0 0 8px; border-radius: 12px; background: var(--bg); border: 1px solid var(--line); }
.lz-ex-side { position: absolute; top: 8px; right: 8px; }
.lz-ex-note { margin-top: 6px; padding-top: 6px; border-top: 1px dashed var(--line); font-size: .9rem; color: var(--muted); }
.lz-c.ls-zh, .lz-c { display: inline-block; vertical-align: middle; }
.lz-q { margin: 0 0 12px; padding: 14px; border-radius: 14px; border: 1px solid var(--line); background: var(--bg); transition: border-color .25s; }
.lz-q.is-ok { border-color: var(--lz-ok); } .lz-q.is-ko { border-color: var(--lz-ko); }
.lz-q-top { display: flex; gap: 10px; align-items: flex-start; }
.lz-q-n { flex: 0 0 auto; display: inline-grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; background: var(--lz-soft2); font-size: .8rem; font-weight: 800; }
.lz-q-top .lz-q-text { margin: 0; }
.lz-q-ctx { margin: 10px 0 2px; padding: 10px 12px; border-radius: 10px; background: var(--surface); }
.lz-lab { display: block; font-size: .72rem; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); margin-bottom: 4px; }
.lz-fb:empty { display: none; }
.lz-fb { margin-top: 10px; animation: lz-rise .28s ease-out; }
.lz-verdict { display: flex; gap: 8px; align-items: flex-start; margin: 0 0 8px; padding: 10px 12px; border-radius: 10px; font-size: .95rem; line-height: 1.5; }
.lz-verdict.ok { background: var(--lz-soft2); } .lz-verdict.ko { background: color-mix(in srgb, var(--lz-ko) 13%, var(--surface)); }
.lz-verdict > span:first-child { flex: 0 0 auto; margin-top: 1px; }
.lz-counter { text-align: right; color: var(--muted); font-size: .88rem; margin: -4px 0 8px; }
.lz-dlg { display: grid; gap: 10px; margin: 10px 0 4px; }
.lz-bub { display: flex; gap: 8px; align-items: flex-end; max-width: 92%; }
.lz-bub.b { margin-left: auto; flex-direction: row-reverse; }
.lz-who { flex: 0 0 auto; display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--lz-soft2); font-size: .78rem; font-weight: 800; }
.lz-bub-in { position: relative; padding: 10px 44px 10px 14px; border-radius: 16px 16px 16px 4px; background: var(--lz-soft); border: 1px solid var(--line); min-width: 0; }
.lz-bub.b .lz-bub-in { border-radius: 16px 16px 4px 16px; background: var(--lz-soft2); }
.lz-tr-dlg { display: none; } .lz-dlg.tr-on .lz-tr-dlg { display: block; animation: lz-rise .25s ease-out; }
.lz-trtog { margin-bottom: 4px; }
.lz-trap { padding: 14px; border-radius: 14px; background: color-mix(in srgb, var(--lz-ko) 9%, var(--surface)); border: 1px solid color-mix(in srgb, var(--lz-ko) 35%, var(--line)); }
.lz-trap-t { font-weight: 700; font-size: 1.04rem; }
.lz-pairs { display: grid; gap: 8px; margin: 10px 0; }
.lz-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.lz-pair > div { display: flex; gap: 8px; align-items: center; padding: 9px 11px; border-radius: 10px; background: var(--surface); border: 1px solid var(--line); }
.lz-pair .bad { text-decoration: line-through; text-decoration-color: var(--lz-ko); } .lz-pair .good { border-color: var(--lz-ok); }
@media (max-width: 460px) { .lz-pair { grid-template-columns: 1fr; } }
.lz-det { border: 1px solid var(--line); border-radius: 12px; margin: 0 0 8px; background: var(--bg); overflow: hidden; }
.lz-det summary { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 12px 14px; font-weight: 600; cursor: pointer; list-style: none; min-height: 48px; }
.lz-det summary::-webkit-details-marker { display: none; }
.lz-det summary i { width: 10px; height: 10px; border-right: 2px solid var(--muted); border-bottom: 2px solid var(--muted); transform: rotate(45deg); transition: transform .2s; flex: 0 0 auto; }
.lz-det[open] summary i { transform: rotate(-135deg); }
.lz-det-b { padding: 0 14px 12px; animation: lz-rise .25s ease-out; }
.lz-prag { margin-top: 14px; padding: 12px 14px; border-radius: 12px; background: var(--lz-soft); }
.lz-prag h4 { margin: 0 0 6px; font-size: .95rem; }
.lz-start { text-align: center; padding: 8px 0; }
.lz-start-n { font-size: 1.05rem; }
.lz-rbar { height: 6px; border-radius: 6px; background: var(--line); overflow: hidden; }
.lz-rbar i { display: block; height: 100%; background: var(--accent); transition: width .35s cubic-bezier(.2,.8,.3,1); }
.lz-rcount { text-align: right; color: var(--muted); font-size: .85rem; margin: 6px 0 4px; }
.lz-form { margin: 10px 0; } .lz-form input { width: 100%; }
.lz-slot { min-height: 64px; margin: 10px 0; }
.lz-bank { margin-bottom: 8px; }
.lz-tr-in { color: var(--muted); font-weight: 400; }
.lz-sheet { margin-top: 14px; padding: 12px; border-radius: 14px; animation: lz-rise .28s ease-out; position: sticky; bottom: 8px; box-shadow: 0 6px 22px rgba(0,0,0,.14); }
.lz-sheet.ok { background: var(--lz-soft2); border: 1px solid var(--lz-ok); } .lz-sheet.ko { background: color-mix(in srgb, var(--lz-ko) 12%, var(--surface)); border: 1px solid var(--lz-ko); }
.lz-sheet .lz-verdict { background: transparent; padding: 0 0 8px; }
.lz-rightis { display: block; margin-top: 6px; }
.lz-result { text-align: center; padding: 10px 0; }
.lz-stamp { display: inline-grid; place-items: center; width: 64px; height: 64px; border-radius: 50%; font-size: 1.8rem; border: 3px double var(--lz-ok); color: var(--lz-ok); transform: rotate(-8deg); animation: lz-stamp .5s cubic-bezier(.3,1.5,.5,1); }
.lz-result.ko .lz-stamp { border-color: var(--lz-ko); color: var(--lz-ko); }
@keyframes lz-stamp { from { transform: scale(1.8) rotate(-20deg); opacity: 0; } to { transform: rotate(-8deg); opacity: 1; } }
.lz-capaci { text-align: left; margin: 16px 0; padding: 14px; border-radius: 14px; background: var(--lz-soft); }
.lz-capaci h4 { margin: 0 0 8px; }
.lz-capaci ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
.lz-capaci li { display: flex; gap: 8px; line-height: 1.45; } .lz-capaci li > span:first-child { color: var(--lz-ok); }
.lz-result .acts { justify-content: center; flex-wrap: wrap; }
@media (min-width: 700px) { .lz-sec { padding: 24px 26px 22px; } .lz-sticky { margin: 10px 0 6px; padding: 0 0 8px; } .lz-opts.two, .lz-topts { grid-template-columns: 1fr 1fr; } }
@media (prefers-reduced-motion: reduce) { .lz-in, .lz-fb, .lz-sheet, .lz-det-b, .lz-stamp, .lz-opt.wrong, .lz-tr-dlg { animation: none !important; } .lz-bar i, .lz-rbar i, .lz-opt, .lz-tchip, .lz-det summary i { transition: none !important; } }
`;
