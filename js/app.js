/* ============================================================
   قائمة البطاقات المحظورة — منطق الصفحة (بحث · ترتيب · عرض)
   بيانات العملاء في ملف js/data.js
   ============================================================ */
/* بيانات العملاء في js/data.js — لا تعدّل هنا */
import { CUSTOMERS } from "./data.js";

const TYPE_COLORS = {
  "اشتراك شهري": "t-m",
  "اشتراك أسبوعي": "t-w",
  "اشتراك يومي": "t-d",
  "بطاقة خصم طالب": "t-s",
  "بطاقة خصم كبار السن": "t-e",
  "بطاقة خصم احتياجات خاصة": "t-x"
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
} [c]));

const cls = t => TYPE_COLORS[t] || "t-o";
const label = t => esc(t.replace(/^بطاقة /, ""));

const ar2en = v => String(v == null ? "" : v).replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).trim();
const digits = v => ar2en(v).replace(/\D/g, "");
const toISO = v => {
  const m = ar2en(v).match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
  return m ? `${m[3]}-${m[2].padStart(2,"0")}-${m[1].padStart(2,"0")}` : "0000-00-00"
};
const toPhone = v => {
  const p = digits(v);
  return /^05\d{8}$/.test(p) ? "966" + p.slice(1) : p
};
const toLink = v => {
  const l = String(v || "").trim();
  return /^https?:\/\//i.test(l) ? l.replace(/"/g, "%22") : ""
};

const DATA = (typeof CUSTOMERS !== "undefined" ? CUSTOMERS : []).map((c, i) => ({
  i: i + 1,
  t: String(c.type || "").trim(),
  c: digits(c.card),
  p: toPhone(c.phone),
  b: parseFloat(ar2en(c.balance)) || 0,
  d: toISO(c.date),
  link: toLink(c.proof)
}));

/* تنبيهات في Console عند وجود خطأ في البيانات (البطاقة المكررة مسموحة مثل ملف الـ PDF) */
const REL = (typeof RELEASED !== "undefined" ? RELEASED : []).map((c, i) => ({
  i: i + 1,
  t: String(c.type || "").trim(),
  c: digits(c.card),
  p: toPhone(c.phone),
  b: parseFloat(ar2en(c.balance)) || 0,
  d: toISO(c.date),
  rd: toISO(c.released),
  link: toLink(c.proof),
  note: String(c.note || "").trim()
}));
REL.forEach(r => {
  if (!/^\d{10,16}$/.test(r.c) || !/^\d{12}$/.test(r.p) || r.rd === "0000-00-00" || !r.t) console.warn("تحقق من بيانات عميل فك الحظر رقم", r.i, RELEASED[r.i - 1]);
});
DATA.forEach(r => {
  if (!/^\d{10,16}$/.test(r.c) || !/^\d{12}$/.test(r.p) || r.d === "0000-00-00" || !r.t) console.warn("تحقق من بيانات السطر", r.i, CUSTOMERS[r.i - 1]);
});

const $ = id => document.getElementById(id);
let type = "all",
  sortKey = "i",
  sortDir = 1;
const qf = {
  bal: false,
  proof: ""
};
let selId = 0,
  viewIds = [],
  first = true;
const maxOf = a => Math.max(1, ...a.map(r => r.b));
let view = "blocked";
const cur = () => view === "released" ? REL : DATA;
const PRESET = {
  list: ["i", 1],
  new: ["d", -1],
  old: ["d", 1],
  bal: ["b", -1]
};
const COLS = [
  ["i", "م", ""],
  ["t", "نوع البطاقة", "tag"],
  ["p", "رقم الهاتف", "phone"],
  ["c", "رقم البطاقة", "card"],
  ["b", "الرصيد", "wallet"],
  ["d", "آخر استعمال", "cal"],
  ["link", "الدليل", "link"]
];
const cols = () => view === "released" ? [...COLS.slice(0, 6), ["rd", "فك الحظر", "check"]] : COLS;
const fmtD = d => d === "0000-00-00" ? "—" : d.split("-").reverse().join(".");
const ago = iso => {
  const d = Math.floor((Date.now() - new Date(iso + "T00:00:00")) / 864e5);
  if (isNaN(d) || d < 0) return "";
  if (d === 0) return "اليوم";
  if (d === 1) return "أمس";
  if (d === 2) return "منذ يومين";
  if (d <= 10) return `منذ ${d} أيام`;
  if (d < 30) return `منذ ${d} يومًا`;
  const m = Math.floor(d / 30);
  if (d < 60) return "منذ شهر";
  if (m === 2) return "منذ شهرين";
  if (m <= 10) return `منذ ${m} أشهر`;
  if (d < 365) return `منذ ${m} شهرًا`;
  const y = Math.floor(d / 365);
  return y === 1 ? "منذ سنة" : y === 2 ? "منذ سنتين" : `منذ ${y} سنوات`
};
const copyText = async t => {
  try {
    await navigator.clipboard.writeText(t)
  } catch (_) {
    const a = document.createElement("textarea");
    a.value = t;
    a.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(a);
    a.select();
    try {
      document.execCommand("copy")
    } catch (__) {}
    a.remove()
  }
};
let toastT;
const toast = m => {
  const t = $("toast");
  t.textContent = m;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 1700)
};
const setNum = (el, n) => {
  if (!first || matchMedia("(prefers-reduced-motion:reduce)").matches) {
    el.textContent = n;
    return
  }
  const t0 = performance.now();
  const step = t => {
    const k = Math.min(1, (t - t0) / 700);
    el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step)
  };
  requestAnimationFrame(step)
};
const ic = (n, c = "") => `<svg class="i ${c}"><use href="#i-${n}"/></svg>`;
const sv = p => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICON = {
  idle: sv('<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.5"/>'),
  bad: sv('<path d="M6 6l12 12M18 6 6 18"/>'),
  ok: sv('<path d="m5 12.5 4.5 4.5L19 7.5"/>')
};

const proofBtn = (r, x = "") => r.link ?
  `<a class="proof ${x}" href="${r.link}" target="_blank" rel="noopener">${ic("folder","dsk")}<span class="dsk">فتح</span><span class="mob">فتح الدليل</span>${ic("link","mob")}</a>` :
  `<span class="proof off ${x}"><span class="dsk">لا يوجد</span><span class="mob">لا يوجد دليل</span></span>`;

function alert_(s, t, sub) {
  const a = $("al");
  a.hidden = false;
  a.dataset.s = s;
  $("ic").innerHTML = ICON[s];
  $("st-t").textContent = t;
  $("st-s").textContent = sub || ""
}

function side() {
  const n = {};
  cur().forEach(r => n[r.t] = (n[r.t] || 0) + 1);
  const types = [...Object.keys(TYPE_COLORS).filter(k => n[k]), ...Object.keys(n).filter(k => !(k in TYPE_COLORS))];
  const subs = DATA.filter(r => r.t.startsWith("اشتراك")).length;
  setNum($("total"), DATA.length);
  setNum($("s1"), subs);
  setNum($("s2"), DATA.length - subs);
  $("last").textContent = DATA.length ? fmtD(DATA.reduce((a, r) => r.d > a ? r.d : a, "")) : "—";
  $("tabs").innerHTML = [
      ["all", "الكل", cur().length], ...types.map(k => [k, label(k), n[k]])
    ]
    .map(([k, l, c]) => `<button class="tab" type="button" data-k="${esc(k)}" aria-pressed="${k===type}">${l}<b>${c}</b></button>`).join("");
  viewsRender()
}

function viewsRender() {
  $("views").innerHTML = `<button class="vw" type="button" role="tab" data-v="blocked" aria-selected="${view==="blocked"}">${ic("ban")}المحظورون<b>${DATA.length}</b></button><button class="vw" type="button" role="tab" data-v="released" aria-selected="${view==="released"}">${ic("unlock")}تم فك الحظر<b>${REL.length}</b></button>`
}




/*
function qfRender() {
  const cb = cur().filter(r => r.b > 0).length,
    cy = cur().filter(r => r.link).length;
  const chips = [
    ["bal", "رصيد متبقي", "wallet", cb, qf.bal],
    ["yes", "لها دليل", "folder", cy, qf.proof === "yes"],
    ["no", "بدون دليل", "link", cur().length - cy, qf.proof === "no"]
  ];
  const active = qf.bal || qf.proof || type !== "all";
  $("qf").innerHTML = chips.map(([k, l, g, c, on]) => `<button class="qc" type="button" data-q="${k}" aria-pressed="${on}">${ic(g)}${l}<b>${c}</b></button>`).join("") + (active ? `<button class="qc reset" type="button" data-q="reset">إعادة ضبط</button>` : "")
}
*/



function qfRender() {
  const cb = cur().filter(r => r.b > 0).length;

  const chips = [
    ["bal", "رصيد متبقي", "wallet", cb, qf.bal]
  ];

  const active = qf.bal || type !== "all";

  $("qf").innerHTML =
    chips.map(([k, l, g, c, on]) =>
      `<button class="qc" type="button" data-q="${k}" aria-pressed="${on}">
        ${ic(g)}${l}<b>${c}</b>
      </button>`
    ).join("") +
    (active
      ? `<button class="qc reset" type="button" data-q="reset">إعادة ضبط</button>`
      : "");
}









function query() {
  const term = digits($("q").value);
  const loc = term[0] === "0" && term.length > 3 ? term.slice(1) : null;
  const out = cur().filter(r => (type === "all" || r.t === type) && (!term || r.c.includes(term) || r.p.includes(term) || (loc && r.p.includes(loc))) && (!qf.bal || r.b > 0) && (qf.proof !== "yes" || r.link) && (qf.proof !== "no" || !r.link));
  out.sort((a, b) => {
    const x = sortKey === "link" ? +!!a.link : a[sortKey],
      y = sortKey === "link" ? +!!b.link : b[sortKey];
    const c = typeof x === "number" ? x - y : String(x).localeCompare(String(y), "ar", {
      numeric: true
    });
    return (c * sortDir) || a.i - b.i
  });
  return {
    out,
    term,
    loc
  };
}


function render() {
  const {
    out,
    term,
    loc
  } = query();
  $("x").hidden = !$("q").value;
  const cardRows = term ? DATA.filter(r => r.c === term) : [];
  const byCard = cardRows[cardRows.length - 1];
  const byPhone = term && term.length >= 9 ? DATA.filter(r => r.p === term || (loc && r.p.endsWith(loc))) : [];
  const phoneCards = [...new Set(byPhone.map(r => r.c))];
  const lastP = byPhone[byPhone.length - 1];
  const relP = term && term.length >= 9 ? REL.filter(r => r.p === term || (loc && r.p.endsWith(loc))) : [];
  const relC = term ? REL.filter(r => r.c === term) : [];
  const relR = relP[relP.length - 1] || relC[relC.length - 1];
  if (!term) $("al").hidden = true;
  else if (byPhone.length) alert_("bad", "العميل محظور", phoneCards.length > 1 ? `${phoneCards.length} بطاقات محظورة مرتبطة بهذا الرقم` : `${label(lastP.t)} · بطاقة ${phoneCards[0]} · آخر استعمال ${fmtD(lastP.d)}${byPhone.length > 1 ? ` · ظهرت ${byPhone.length} مرات` : ""}`);
  else if (byCard) alert_("bad", "البطاقة محظورة", `${label(byCard.t)} · رقم الهاتف ${byCard.p} · آخر استعمال ${fmtD(byCard.d)}${cardRows.length > 1 ? ` · ظهرت ${cardRows.length} مرات` : ""}`);
  else if (relR) alert_("ok", "تم فك الحظر عن العميل", `${label(relR.t)} · بطاقة ${relR.c} · بتاريخ ${fmtD(relR.rd)} · ضمن تبويب «تم فك الحظر»`);
  else if (term.length >= 9 && !out.length) alert_("ok", "غير موجودة في القائمة", "لا توجد بطاقة أو رقم هاتف بهذا الرقم ضمن القوائم");
  else alert_("idle", out.length ? `${out.length} نتيجة مطابقة` : "لا توجد نتيجة", out.length ? "أكمل الرقم لتأكيد الحالة" : "تأكد من الرقم وأعد المحاولة");

  const rows = out;
  viewIds = out.map(r => r.i);
  qfRender();
  const hl = raw => {
    const k = term ? raw.indexOf(term) : -1;
    return k < 0 ? raw : raw.slice(0, k) + "<mark>" + raw.slice(k, k + term.length) + "</mark>" + raw.slice(k + term.length)
  };

  const maxB = maxOf(cur());
  const head = `<div class="r h">${cols().map(([k,l,g])=>`<button class="th ${k===sortKey?"on":""}" data-s="${k}" type="button" title="ترتيب حسب ${l}">${l}${g?ic(g):""}<s>${k===sortKey?(sortDir>0?"▲":"▼"):"⇅"}</s></button>`).join("")}<span></span></div>`;
  const body = rows.map(r => `
    <div class="r d${r.i===selId?" sel":""}${view==="released"?" rls":""}" data-i="${r.i}" tabindex="0" aria-haspopup="dialog">
      <span class="idx">${r.i}</span>
      <span class="tyc"><span class="ty ${cls(r.t)}">${label(r.t)}</span></span>
      <span class="f fp"><em class="lb">${ic("phone")}رقم الهاتف</em><span class="pv"><span class="n">${hl(r.p)}</span><button class="cpy" type="button" data-copy="${r.p}" title="نسخ الرقم" aria-label="نسخ رقم الهاتف">${ic("copy")}</button></span></span>
      <span class="f fc"><em class="lb">${ic("card")}رقم البطاقة</em><span class="n">${hl(r.c)}</span></span>
      <span class="f fb"><em class="lb">${ic("wallet")}الرصيد</em><span class="am"><b class="${r.b?"":"z"}">${r.b.toFixed(2)}</b> <small>ر.س</small></span><i class="mbar" style="--w:${r.b?Math.max(6,Math.round(Math.sqrt(r.b/maxB)*100)):0}%"></i></span>
      <span class="f fd"><em class="lb">${ic("cal")}آخر استعمال</em><span class="dtw"><span class="n dt">${fmtD(r.d)}</span><small class="rel">${ago(r.d)}</small></span></span>
      ${view==="released"?`<span class="f pf"><em class="lb">${ic("check")}فك الحظر</em><span class="rl"><b>${ic("check")}${fmtD(r.rd)}</b><small>${ago(r.rd)}</small></span></span>`:`<span class="f pf"><em class="lb">${ic("folder")}الدليل</em>${proofBtn(r)}</span>`}
      <span class="go" aria-hidden="true">${ic("chev")}</span>
    </div>`).join("");
  const emptyHtml = view === "released" && !REL.length ?
    `<div class="empty">${ic("unlock","big")}<div>لا يوجد عملاء تم فك الحظر عنهم حتى الآن</div></div>` :
    `<div class="empty">${ic("searchx","big")}<div>لا توجد بطاقات مطابقة</div></div>`;
  $("table").innerHTML = out.length ? head + body : emptyHtml;
  $("info").textContent = out.length === cur().length ? `${out.length} بطاقة` : `${out.length} من ${cur().length} بطاقة`;
}

function openCard(i) {
  const r = cur()[i - 1],
    pos = viewIds.indexOf(i),
    n = viewIds.length;
  selId = i;
  document.querySelectorAll(".r.d.sel").forEach(e => e.classList.remove("sel"));
  const rw = document.querySelector(`.r.d[data-i="${i}"]`);
  if (rw) {
    rw.classList.add("sel");
    rw.scrollIntoView({
      block: "nearest"
    })
  }
  $("dr").innerHTML = `
    <div class="dh"><div class="dtags"><span class="ty ${cls(r.t)}">${label(r.t)}</span>${view==="released"?`<span class="okb">${ic("check")}تم فك الحظر</span>`:""}</div><button class="dx" type="button" id="dx" aria-label="إغلاق">×</button></div>
    <div class="db">
      <small>${ic("phone")}رقم الهاتف</small><span class="big">${r.p}</span>
      <div class="dl">
        <div><span>${ic("card")}رقم البطاقة</span><b class="n">${r.c}</b></div>
        <div><span>${ic("wallet")}الرصيد</span><b class="am"><b class="${r.b?"":"z"}">${r.b.toFixed(2)}</b> <small>ر.س</small></b></div>
        <div><span>${ic("cal")}آخر استعمال</span><b class="n dt">${fmtD(r.d)}</b><small class="rel" style="display:block;font-size:11px;color:#97a3ad">${ago(r.d)}</small></div>
        ${view==="released"?`<div><span>${ic("check")}تاريخ فك الحظر</span><b class="n dt">${fmtD(r.rd)}</b><small class="rel" style="display:block;font-size:11px;color:#97a3ad">${ago(r.rd)}</small></div>`:`<div><span>${ic("hash")}الرقم في القائمة</span><b>${r.i}</b></div>`}
      </div>
      ${r.note?`<p class="dnote">${esc(r.note)}</p>`:""}
      ${proofBtn(r,"lg")}
      <div class="dnav">
        <button class="dn" type="button" data-nav="-1" ${pos<=0?"disabled":""}>${ic("chev","flip")}السابق</button>
        <span class="dc">${pos+1} / ${n}</span>
        <button class="dn" type="button" data-nav="1" ${pos<0||pos>=n-1?"disabled":""}>التالي${ic("chev")}</button>
      </div>
    </div>`;
  document.body.classList.add("open");
  $("dr").setAttribute("aria-hidden", "false");
  const f = $("dr").querySelector("[data-nav]:not(:disabled)") || $("dx");
  f.focus({
    preventScroll: true
  })
}
const navCard = d => {
  const t = viewIds[viewIds.indexOf(selId) + d];
  if (t) openCard(t)
};
const closeCard = () => {
  document.body.classList.remove("open");
  $("dr").setAttribute("aria-hidden", "true")
};

const go = () => render();
const syncSel = () => {
  const m = Object.entries(PRESET).find(([, v]) => v[0] === sortKey && v[1] === sortDir);
  $("sort").value = m ? m[0] : "custom"
};
$("tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab");
  if (!b) return;
  type = b.dataset.k;
  side();
  go()
});
$("table").addEventListener("click", e => {
  const cp = e.target.closest(".cpy");
  if (cp) {
    copyText(cp.dataset.copy);
    toast("تم نسخ الرقم " + cp.dataset.copy);
    return
  }
  const h = e.target.closest(".th");
  if (h) {
    const k = h.dataset.s;
    if (k === sortKey) sortDir = -sortDir;
    else {
      sortKey = k;
      sortDir = (k === "d" || k === "b") ? -1 : 1
    }
    syncSel();
    return go()
  }
  const row = e.target.closest(".r.d");
  if (row && !e.target.closest("a")) openCard(+row.dataset.i);
});
$("table").addEventListener("keydown", e => {
  const row = e.target.closest(".r.d");
  if (!row || e.target !== row) return;
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openCard(+row.dataset.i)
  } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    const n = e.key === "ArrowDown" ? row.nextElementSibling : row.previousElementSibling;
    if (n && n.classList.contains("d")) n.focus()
  }
});
$("qf").addEventListener("click", e => {
  const b = e.target.closest(".qc");
  if (!b) return;
  const k = b.dataset.q;
  if (k === "bal") qf.bal = !qf.bal;
  else if (k === "reset") {
    qf.bal = false;
    qf.proof = "";
    type = "all";
    side()
  } else qf.proof = qf.proof === k ? "" : k;
  go()
});
document.addEventListener("click", e => {
  if (e.target.closest("#dx") || e.target.id === "ov") closeCard();
  const nv = e.target.closest("[data-nav]");
  if (nv && !nv.disabled) navCard(+nv.dataset.nav)
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeCard();
  if (document.body.classList.contains("open") && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
    if (e.key === "ArrowRight") navCard(-1);
    if (e.key === "ArrowLeft") navCard(1)
  }
  if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
    e.preventDefault();
    $("q").focus()
  }
});
$("sort").onchange = () => {
  const p = PRESET[$("sort").value];
  if (p)[sortKey, sortDir] = p;
  go()
};
$("q").addEventListener("input", go);
$("x").onclick = () => {
  $("q").value = "";
  go();
  $("q").focus()
};
$("f").addEventListener("submit", e => {
  e.preventDefault();
  go()
});
const onScroll = () => {
  $("table").classList.toggle("stuck", $("table").getBoundingClientRect().top < -2);
  $("top").classList.toggle("show", scrollY > 700)
};
addEventListener("scroll", onScroll, {
  passive: true
});
$("top").onclick = () => scrollTo({
  top: 0,
  behavior: "smooth"
});
$("views").addEventListener("click", e => {
  const b = e.target.closest(".vw");
  if (!b || b.dataset.v === view) return;
  view = b.dataset.v;
  type = "all";
  qf.bal = false;
  qf.proof = "";
  sortKey = "i";
  sortDir = 1;
  selId = 0;
  closeCard();
  syncSel();
  side();
  go()
});
side();
first = false;
render();
onScroll();
