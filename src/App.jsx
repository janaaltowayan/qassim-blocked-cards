import { useState, useMemo } from "react";

const T = {
  navy:"#07202B", navyMid:"#0D3244",
  teal:"#22B8D1", tealDark:"#178AA0", tealPale:"#E4F7FB",
  gold:"#C9A227", goldDark:"#9C7D1A",
  bg:"#EFF4F6", surface:"#FFFFFF", surfaceAlt:"#F7FAFB",
  line:"#DDE6EA",
  t1:"#0B2733", t2:"#2D5E6E", t3:"#7A9FAB",
  danger:"#B71C1C", success:"#1B5E20", muted:"#9EADB3",
};

const cards = [
  { id:1,  type:"اشتراك شهري",          phone:"966549914480",  cardNum:"2303209461",         balance:1.05,   lastUsed:"18.07.2025", evidenceUrl:"" },
  { id:2,  type:"اشتراك أسبوعي",        phone:"966502885687",  cardNum:"9966001699096255",   balance:3.10,   lastUsed:"30.06.2025", evidenceUrl:"" },
  { id:3,  type:"اشتراك يومي",          phone:"966534134941",  cardNum:"9966001699077066",   balance:0.45,   lastUsed:"18.06.2025", evidenceUrl:"" },
  { id:4,  type:"اشتراك أسبوعي",        phone:"966560621123",  cardNum:"9966001699101657",   balance:10.80,  lastUsed:"17.07.2025", evidenceUrl:"" },
  { id:5,  type:"اشتراك شهري",          phone:"966531932764",  cardNum:"2303209807",         balance:0.05,   lastUsed:"30.07.2025", evidenceUrl:"" },
  { id:6,  type:"اشتراك شهري",          phone:"966537075981",  cardNum:"2303127527",         balance:0.00,   lastUsed:"31.07.2025", evidenceUrl:"" },
  { id:7,  type:"اشتراك يومي",          phone:"966534069034",  cardNum:"9966001699027880",   balance:0.15,   lastUsed:"17.08.2025", evidenceUrl:"" },
  { id:8,  type:"اشتراك يومي",          phone:"966533908500",  cardNum:"2303208998",         balance:49.30,  lastUsed:"09.09.2025", evidenceUrl:"" },
  { id:9,  type:"اشتراك أسبوعي",        phone:"966502276286",  cardNum:"9966001699054989",   balance:0.00,   lastUsed:"14.09.2025", evidenceUrl:"" },
  { id:10, type:"اشتراك يومي",          phone:"966573701408",  cardNum:"9966001699112416",   balance:5.85,   lastUsed:"25.09.2025", evidenceUrl:"" },
  { id:11, type:"اشتراك يومي",          phone:"966534895931",  cardNum:"9966001699058932",   balance:2.70,   lastUsed:"23.09.2025", evidenceUrl:"" },
  { id:12, type:"اشتراك شهري",          phone:"966547713938",  cardNum:"9966001699024189",   balance:3.45,   lastUsed:"29.09.2025", evidenceUrl:"" },
  { id:13, type:"اشتراك يومي",          phone:"966539131411",  cardNum:"9966001699112246",   balance:51.75,  lastUsed:"02.10.2025", evidenceUrl:"" },
  { id:14, type:"اشتراك شهري",          phone:"966501093884",  cardNum:"2303209737",         balance:25.05,  lastUsed:"02.10.2025", evidenceUrl:"" },
  { id:15, type:"اشتراك يومي",          phone:"966530225923",  cardNum:"9966001699080004",   balance:122.60, lastUsed:"02.10.2025", evidenceUrl:"" },
  { id:16, type:"اشتراك شهري",          phone:"966502597149",  cardNum:"2303127538",         balance:1.20,   lastUsed:"15.10.2025", evidenceUrl:"" },
  { id:17, type:"اشتراك شهري",          phone:"966541951729",  cardNum:"9966001699052316",   balance:0.50,   lastUsed:"06.10.2025", evidenceUrl:"" },
  { id:18, type:"اشتراك شهري",          phone:"966530641842",  cardNum:"2303208798",         balance:5.10,   lastUsed:"14.10.2025", evidenceUrl:"" },
  { id:19, type:"اشتراك شهري",          phone:"966569102825",  cardNum:"9966001699104556",   balance:8.10,   lastUsed:"16.10.2025", evidenceUrl:"" },
  { id:20, type:"اشتراك يومي",          phone:"966552137223",  cardNum:"9966001699072266",   balance:0.70,   lastUsed:"16.10.2025", evidenceUrl:"" },
  { id:21, type:"اشتراك يومي",          phone:"966570033075",  cardNum:"9966001699105812",   balance:0.65,   lastUsed:"21.10.2025", evidenceUrl:"" },
  { id:22, type:"اشتراك شهري",          phone:"966508408638",  cardNum:"9966001699099475",   balance:3.55,   lastUsed:"03.11.2026", evidenceUrl:"" },
  { id:23, type:"اشتراك شهري",          phone:"966591434334",  cardNum:"9966001699114497",   balance:0.00,   lastUsed:"02.11.2027", evidenceUrl:"" },
  { id:24, type:"اشتراك يومي",          phone:"966533808542",  cardNum:"9966001699099891",   balance:0.55,   lastUsed:"28.10.2025", evidenceUrl:"" },
  { id:25, type:"اشتراك أسبوعي",        phone:"966593808696",  cardNum:"2303127549",         balance:3.75,   lastUsed:"06.11.2025", evidenceUrl:"" },
  { id:26, type:"اشتراك يومي",          phone:"966575073869",  cardNum:"9966001699116154",   balance:5.00,   lastUsed:"14.11.2025", evidenceUrl:"" },
  { id:27, type:"اشتراك يومي",          phone:"966508263918",  cardNum:"9966001699093347",   balance:77.15,  lastUsed:"16.11.2025", evidenceUrl:"" },
  { id:28, type:"اشتراك شهري",          phone:"966501642859",  cardNum:"9966001699113982",   balance:1.55,   lastUsed:"24.11.2025", evidenceUrl:"" },
  { id:29, type:"اشتراك شهري",          phone:"966582719616",  cardNum:"9966001699077824",   balance:0.00,   lastUsed:"23.11.2025", evidenceUrl:"" },
  { id:30, type:"اشتراك أسبوعي",        phone:"966543132851",  cardNum:"9966001699111347",   balance:0.00,   lastUsed:"18.12.2025", evidenceUrl:"" },
  { id:31, type:"اشتراك يومي",          phone:"966540387757",  cardNum:"9966001699018021",   balance:0.09,   lastUsed:"21.12.2025", evidenceUrl:"" },
  { id:32, type:"اشتراك يومي",          phone:"966507953909",  cardNum:"2303244523",         balance:135.40, lastUsed:"08.01.2026", evidenceUrl:"" },
  { id:33, type:"اشتراك يومي",          phone:"966563359784",  cardNum:"9966001699116914",   balance:9.30,   lastUsed:"08.01.2026", evidenceUrl:"" },
  { id:34, type:"اشتراك يومي",          phone:"966510694588",  cardNum:"9966001699092456",   balance:0.00,   lastUsed:"09.01.2026", evidenceUrl:"" },
  { id:35, type:"اشتراك يومي",          phone:"966593131636",  cardNum:"9966001699023896",   balance:12.95,  lastUsed:"12.01.2026", evidenceUrl:"" },
  { id:36, type:"اشتراك شهري",          phone:"966509060735",  cardNum:"9966001699109334",   balance:8.63,   lastUsed:"14.01.2026", evidenceUrl:"" },
  { id:37, type:"اشتراك شهري",          phone:"966544916120",  cardNum:"9966001699108516",   balance:0.00,   lastUsed:"19.01.2026", evidenceUrl:"" },
  { id:38, type:"اشتراك شهري",          phone:"966510485820",  cardNum:"2303127529",         balance:52.55,  lastUsed:"26.01.2026", evidenceUrl:"" },
  { id:39, type:"اشتراك شهري",          phone:"966578496126",  cardNum:"9966001699189067",   balance:0.60,   lastUsed:"26.01.2026", evidenceUrl:"" },
  { id:40, type:"اشتراك يومي",          phone:"966580403838",  cardNum:"9966001699114658",   balance:0.20,   lastUsed:"29.01.2026", evidenceUrl:"" },
  { id:41, type:"اشتراك يومي",          phone:"966510404750",  cardNum:"9966001699092709",   balance:3.10,   lastUsed:"05.02.2026", evidenceUrl:"" },
  { id:42, type:"اشتراك يومي",          phone:"966509462471",  cardNum:"9966001699116377",   balance:0.00,   lastUsed:"03.02.2026", evidenceUrl:"" },
  { id:43, type:"بطاقة خصم طالب",       phone:"966504868627",  cardNum:"2502046537",         balance:32.08,  lastUsed:"07.02.2026", evidenceUrl:"" },
  { id:44, type:"اشتراك يومي",          phone:"966558590684",  cardNum:"9966001699117928",   balance:0.00,   lastUsed:"07.02.2026", evidenceUrl:"" },
  { id:45, type:"بطاقة خصم طالب",       phone:"966504596875",  cardNum:"2502046528",         balance:15.87,  lastUsed:"13.02.2026", evidenceUrl:"" },
  { id:46, type:"اشتراك يومي",          phone:"966538950940",  cardNum:"9966001699117469",   balance:0.00,   lastUsed:"13.02.2026", evidenceUrl:"" },
  { id:47, type:"بطاقة خصم طالب",       phone:"966570505129",  cardNum:"2502036853",         balance:1.48,   lastUsed:"24.02.2026", evidenceUrl:"" },
  { id:48, type:"بطاقة خصم طالب",       phone:"966572825027",  cardNum:"2502046531",         balance:7.00,   lastUsed:"25.02.2026", evidenceUrl:"" },
  { id:49, type:"اشتراك أسبوعي",        phone:"966544242790",  cardNum:"2303127326",         balance:0.00,   lastUsed:"23.02.2026", evidenceUrl:"" },
  { id:50, type:"بطاقة خصم طالب",       phone:"966533178905",  cardNum:"2502046332",         balance:1.55,   lastUsed:"23.02.2026", evidenceUrl:"" },
  { id:51, type:"اشتراك أسبوعي",        phone:"966557029439",  cardNum:"9966001699100657",   balance:0.00,   lastUsed:"27.02.2026", evidenceUrl:"" },
  { id:52, type:"اشتراك شهري",          phone:"966509088334",  cardNum:"9966001699117774",   balance:0.00,   lastUsed:"28.02.2027", evidenceUrl:"" },
  { id:53, type:"بطاقة خصم طالب",       phone:"966552049713",  cardNum:"2502046202",         balance:2.32,   lastUsed:"26.02.2026", evidenceUrl:"" },
  { id:54, type:"اشتراك يومي",          phone:"966580642946",  cardNum:"9966001699120567",   balance:0.55,   lastUsed:"27.02.2026", evidenceUrl:"" },
  { id:55, type:"اشتراك أسبوعي",        phone:"966507272669",  cardNum:"2303245773",         balance:5.50,   lastUsed:"28.02.2026", evidenceUrl:"" },
  { id:56, type:"بطاقة خصم طالب",       phone:"966552659199",  cardNum:"2502046346",         balance:3.08,   lastUsed:"01.03.2026", evidenceUrl:"" },
  { id:57, type:"اشتراك أسبوعي",        phone:"966533785918",  cardNum:"9966001699121912",   balance:0.00,   lastUsed:"06.03.2026", evidenceUrl:"" },
  { id:58, type:"اشتراك أسبوعي",        phone:"966501170319",  cardNum:"9966001699121893",   balance:9.20,   lastUsed:"12.03.2026", evidenceUrl:"" },
  { id:59, type:"اشتراك شهري",          phone:"966561747700",  cardNum:"9966001699118904",   balance:0.00,   lastUsed:"25.03.2026", evidenceUrl:"" },
  { id:60, type:"اشتراك يومي",          phone:"966579147862",  cardNum:"2303127836",         balance:9.30,   lastUsed:"22.03.2026", evidenceUrl:"" },
  { id:61, type:"اشتراك يومي",          phone:"966548107574",  cardNum:"2303208889",         balance:10.58,  lastUsed:"31.03.2026", evidenceUrl:"" },
  { id:62, type:"اشتراك شهري",          phone:"966563704780",  cardNum:"2303127165",         balance:2.00,   lastUsed:"31.03.2026", evidenceUrl:"" },
  { id:63, type:"بطاقة خصم طالب",       phone:"966530762172",  cardNum:"2502046311",         balance:13.74,  lastUsed:"05.04.2026", evidenceUrl:"" },
  { id:64, type:"اشتراك شهري",          phone:"966568796976",  cardNum:"9966001699120707",   balance:3.45,   lastUsed:"15.04.2026", evidenceUrl:"" },
  { id:65, type:"اشتراك شهري",          phone:"966553681359",  cardNum:"9966001699117941",   balance:0.95,   lastUsed:"15.04.2026", evidenceUrl:"" },
  { id:66, type:"اشتراك أسبوعي",        phone:"966550113022",  cardNum:"9966001799005722",   balance:0.00,   lastUsed:"22.04.2026", evidenceUrl:"" },
  { id:67, type:"بطاقة خصم طالب",       phone:"966537189295",  cardNum:"2502046339",         balance:16.39,  lastUsed:"03.05.2026", evidenceUrl:"" },
  { id:68, type:"اشتراك يومي",          phone:"9660575073869", cardNum:"9966001699183578",   balance:0.00,   lastUsed:"29.04.2026", evidenceUrl:"" },
  { id:69, type:"بطاقة خصم كبار السن",  phone:"966509083184",  cardNum:"2502046225",         balance:26.21,  lastUsed:"03.05.2026", evidenceUrl:"" },
  { id:70, type:"بطاقة خصم طالب",       phone:"966536529862",  cardNum:"2502046541",         balance:11.84,  lastUsed:"30.04.2026", evidenceUrl:"" },
  { id:71, type:"بطاقة خصم طالب",       phone:"966569273742",  cardNum:"2502046340",         balance:11.84,  lastUsed:"13.05.2026", evidenceUrl:"" },
  { id:72, type:"اشتراك يومي",          phone:"966547824955",  cardNum:"9966001699065399",   balance:1.10,   lastUsed:"17.05.2026", evidenceUrl:"" },
  { id:73, type:"اشتراك أسبوعي",        phone:"966569226493",  cardNum:"9966001699031858",   balance:0.40,   lastUsed:"16.05.2026", evidenceUrl:"" },
  { id:74, type:"اشتراك يومي",          phone:"966549485005",  cardNum:"9966001699120932",   balance:6.55,   lastUsed:"20.05.2026", evidenceUrl:"" },
  { id:75, type:"اشتراك يومي",          phone:"966537635371",  cardNum:"9966001699110114",   balance:0.15,   lastUsed:"26.05.2026", evidenceUrl:"" },
  { id:76, type:"اشتراك يومي",          phone:"966531499490",  cardNum:"9966001699072174",   balance:39.15,  lastUsed:"08.06.2026", evidenceUrl:"" },
];

const TYPE_META = {
  "اشتراك يومي":          { bg:"#E2F5F8", color:"#0D5F6E", dot:T.teal    },
  "اشتراك أسبوعي":        { bg:"#E6F2EC", color:"#1A5C35", dot:"#2ECC71" },
  "اشتراك شهري":          { bg:"#EDE8F5", color:"#4A1A8C", dot:"#8E44AD" },
  "بطاقة خصم طالب":       { bg:"#FEF6E4", color:"#7A4E00", dot:T.gold    },
  "بطاقة خصم كبار السن":  { bg:"#FDEAEA", color:"#7A1A1A", dot:"#E74C3C" },
};
const tm = t => TYPE_META[t] || { bg:"#F0F0F0", color:"#555", dot:"#aaa" };

const TYPES = ["الكل","اشتراك شهري","اشتراك أسبوعي","اشتراك يومي","بطاقة خصم طالب","بطاقة خصم كبار السن"];

const QassimLogo = () => (
  <svg viewBox="0 0 44 44" width="34" height="34" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22,2 38,11 38,33 22,42 6,33 6,11" fill="none" stroke={T.teal} strokeWidth="2.5" strokeLinejoin="round"/>
    <line x1="6"  y1="22" x2="14" y2="22" stroke={T.teal} strokeWidth="2.5"/>
    <line x1="30" y1="22" x2="38" y2="22" stroke={T.teal} strokeWidth="2.5"/>
    <line x1="22" y1="2"  x2="22" y2="12" stroke={T.teal} strokeWidth="2.5"/>
    <circle cx="22" cy="22" r="4" fill={T.teal} opacity="0.2"/>
  </svg>
);

const SaptcoLogo = () => (
  <svg viewBox="0 0 44 44" width="34" height="34" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22,3 25.5,13.5 36.5,13.5 27.5,20 31,30.5 22,24 13,30.5 16.5,20 7.5,13.5 18.5,13.5"
      fill="none" stroke={T.gold} strokeWidth="2.2" strokeLinejoin="round"/>
    <polygon points="22,9 24.5,16.5 32,16.5 26,21 28.5,28.5 22,24 15.5,28.5 18,21 12,16.5 19.5,16.5"
      fill={T.gold} opacity="0.2"/>
  </svg>
);

/* ── MOBILE CARD ── */
const MobileCard = ({ c }) => {
  const meta = tm(c.type);
  return (
    <div style={{
      background: T.surface,
      border: `1px solid ${T.line}`,
      borderRadius: 14,
      marginBottom: 10,
      overflow: "hidden",
      boxShadow: "0 1px 5px rgba(0,0,0,0.06)",
    }}>
      {/* header */}
      <div style={{
        display:"flex", justifyContent:"space-between", alignItems:"center",
        padding:"9px 12px",
        background: T.surfaceAlt,
        borderBottom:`1px solid ${T.line}`,
      }}>
        <span style={{
          display:"inline-flex", alignItems:"center", gap:5,
          padding:"3px 9px", borderRadius:20,
          background: meta.bg, color: meta.color, fontSize:11, fontWeight:700,
        }}>
          <span style={{ width:5, height:5, borderRadius:"50%", background:meta.dot, flexShrink:0 }}/>
          {c.type}
        </span>
        <span style={{ fontSize:10.5, color:T.t3, fontWeight:700 }}>#{c.id}</span>
      </div>

      {/* body */}
      <div style={{ padding:"10px 12px", display:"flex", flexDirection:"column", gap:8 }}>

        {/* رقم الهاتف + رقم البطاقة */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
          <div style={{ background:T.bg, borderRadius:9, padding:"8px 10px" }}>
            <div style={{ fontSize:9.5, color:T.t3, marginBottom:3 }}>📱 رقم الهاتف</div>
            <div style={{ fontFamily:"monospace", fontWeight:700, color:T.t1, fontSize:12, direction:"ltr", wordBreak:"break-all" }}>
              {c.phone}
            </div>
          </div>
          <div style={{ background:T.bg, borderRadius:9, padding:"8px 10px" }}>
            <div style={{ fontSize:9.5, color:T.t3, marginBottom:3 }}>💳 رقم البطاقة</div>
            <div style={{ fontFamily:"monospace", fontWeight:700, color:T.t1, fontSize:12, direction:"ltr", wordBreak:"break-all" }}>
              {c.cardNum}
            </div>
          </div>
        </div>

        {/* الرصيد + آخر استخدام */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
          <div style={{ background:T.bg, borderRadius:9, padding:"8px 10px" }}>
            <div style={{ fontSize:9.5, color:T.t3, marginBottom:3 }}>💰 الرصيد</div>
            <div style={{
              fontWeight:800, fontSize:13,
              color: c.balance===0 ? T.muted : c.balance>=50 ? T.danger : T.success,
            }}>
              {c.balance.toFixed(2)}
              <span style={{ fontSize:9.5, fontWeight:500, color:T.t3, marginRight:2 }}>ر.س</span>
            </div>
          </div>
          <div style={{ background:T.bg, borderRadius:9, padding:"8px 10px" }}>
            <div style={{ fontSize:9.5, color:T.t3, marginBottom:3 }}>📅 آخر استخدام</div>
            <div style={{ fontFamily:"monospace", fontWeight:700, color:T.t2, fontSize:12, direction:"ltr" }}>
              {c.lastUsed}
            </div>
          </div>
        </div>

        {/* دليل المخالفة */}
        <div style={{ background:T.bg, borderRadius:9, padding:"8px 10px" }}>
          <div style={{ fontSize:9.5, color:T.t3, marginBottom:5 }}>📁 دليل المخالفة</div>
          {c.evidenceUrl
            ? <a href={c.evidenceUrl} target="_blank" rel="noreferrer" style={{
                display:"inline-flex", alignItems:"center", gap:5,
                padding:"5px 12px", borderRadius:7,
                background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
                color:"#fff", fontWeight:700, fontSize:12,
                textDecoration:"none",
              }}>🔗 فتح الدليل</a>
            : <span style={{ fontSize:11.5, color:T.muted, fontWeight:600 }}>لم يُضَف بعد</span>
          }
        </div>
      </div>
    </div>
  );
};

/* ── APP ── */
export default function App() {
  const [search,     setSearch]     = useState("");
  const [filterType, setFilterType] = useState("الكل");
  const [sortBy,     setSortBy]     = useState("id");
  const [sortDir,    setSortDir]    = useState("asc");

  const filtered = useMemo(() => {
    let d = cards.filter(c => {
      const q = search.trim();
      return (!q || c.phone.includes(q) || c.cardNum.includes(q) || c.type.includes(q) || String(c.id)===q)
        && (filterType==="الكل" || c.type===filterType);
    });
    return [...d].sort((a,b) => {
      let va = sortBy==="balance" ? +a[sortBy] : a[sortBy];
      let vb = sortBy==="balance" ? +b[sortBy] : b[sortBy];
      return sortDir==="asc" ? (va<vb?-1:va>vb?1:0) : (va>vb?-1:va<vb?1:0);
    });
  }, [search, filterType, sortBy, sortDir]);

  const S = {
    total: cards.length,
    shown: filtered.length,
    zero:  filtered.filter(c=>c.balance===0).length,
    high:  filtered.filter(c=>c.balance>=50).length,
    sum:   filtered.reduce((s,c)=>s+c.balance,0),
  };

  const toggleSort = col => {
    if(sortBy===col) setSortDir(d=>d==="asc"?"desc":"asc");
    else { setSortBy(col); setSortDir("asc"); }
  };
  const Arrow = ({col}) => (
    <span style={{ fontSize:9, marginLeft:3, opacity:sortBy===col?1:0.3 }}>
      {sortBy===col ? (sortDir==="asc"?"▲":"▼") : "⇅"}
    </span>
  );

  const statItems = [
    { label:"الإجمالي",   value:S.total,          sub:"بطاقة", accent:T.teal    },
    { label:"البحث",      value:S.shown,          sub:"نتيجة", accent:"#fff"    },
    { label:"رصيد صفري", value:S.zero,           sub:"بطاقة", accent:"#FFD580" },
    { label:"رصيد +50",  value:S.high,           sub:"بطاقة", accent:"#FF8A80" },
    { label:"مجموع",     value:S.sum.toFixed(1), sub:"ر.س",   accent:T.gold    },
  ];

  const TH_COLS = [
    { key:"id",          label:"#"              },
    { key:"type",        label:"نوع البطاقة"   },
    { key:"phone",       label:"رقم الهاتف"    },
    { key:"cardNum",     label:"رقم البطاقة"   },
    { key:"balance",     label:"الرصيد"         },
    { key:"lastUsed",    label:"آخر استخدام"   },
    { key:"evidenceUrl", label:"دليل المخالفة" },
  ];

  return (
    <div dir="rtl" style={{
      fontFamily:"'Segoe UI',Tahoma,Arial,sans-serif",
      background:T.bg, minHeight:"100vh",
      width:"100%", margin:0, padding:0, color:T.t1,
    }}>
      <style>{`
        html,body,#root{margin:0!important;padding:0!important;width:100%!important;overflow-x:hidden!important}
        *{box-sizing:border-box}
        .dt{display:block}.mc{display:none}
        @media(max-width:680px){
          .dt{display:none!important}
          .mc{display:block!important}
          .hl{flex-direction:column!important;gap:8px!important}
          .ht{font-size:14px!important}
          .sg{grid-template-columns:repeat(3,1fr)!important}
          .hp{padding:12px 14px!important}
          .mp{padding:10px!important}
        }
      `}</style>

      {/* ═══ HEADER ═══ */}
      <header style={{
        background:`linear-gradient(160deg, ${T.navy} 0%, ${T.navyMid} 60%, #103D50 100%)`,
        width:"100%",
      }}>
        {/* logos + title strip */}
        <div className="header-pad" style={{ padding:"20px 32px 16px", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
          <div className="header-logos" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:16 }}>

            {/* ── Qassim Bus (right) ── */}
            <div style={{
              display:"flex", alignItems:"center", gap:10,
              background:"rgba(34,184,209,0.08)",
              border:"1px solid rgba(34,184,209,0.22)",
              borderRadius:12, padding:"10px 14px", flexShrink:0,
            }}>
                <img
    src="/qassim-buss2.png"
    alt="Qassim Bus"
    style={{
      height: 40,
      objectFit: "contain",
    }}
  />
            </div>

            {/* ── Centre title ── */}
            <div style={{ textAlign:"center", flex:1, minWidth:0 }}>
              <div className="header-title" style={{ fontSize:19, fontWeight:800, color:"#fff", lineHeight:1.3 }}>
                سجل البطاقات المحظورة
              </div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.42)", marginTop:4, letterSpacing:0.4 }}>
              مخالفات انظمة الأشتراكات في مشروع النقل العام في القصيم
              </div>
            </div>

            {/* ── SAPTCO (left) ── */}
            <div style={{
              display:"flex", alignItems:"center", gap:10,
              background:"rgba(201,162,39,0.08)",
              border:"1px solid rgba(201,162,39,0.22)",
              borderRadius:12, padding:"10px 14px", flexShrink:0,
            }}>
              <div>
                  <img
    src="/saptco-logo2.png"
    alt="SAPTCO"
    style={{
      height: 40,
      objectFit: "contain",
    }}
  />
              </div>
            </div>
          </div>
        </div>

        {/* stats grid */}
        <div className="header-pad" style={{ padding:"14px 32px 20px" }}>
          <div className="stats-grid" style={{
            display:"grid",
            gridTemplateColumns:"repeat(5,1fr)",
            gap:10,
          }}>
            {statItems.map(s=>(
              <div key={s.label} style={{
                background:"rgba(255,255,255,0.06)",
                border:"1px solid rgba(255,255,255,0.10)",
                borderRadius:12, padding:"11px 12px", textAlign:"center",
              }}>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.45)", marginBottom:4, whiteSpace:"nowrap" }}>{s.label}</div>
                <div style={{ fontSize:20, fontWeight:800, color:s.accent, lineHeight:1 }}>{s.value}</div>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.3)", marginTop:3 }}>{s.sub}</div>
              </div>
              
            ))}
          </div>
        </div>
      </header>


      {/* ═══ CONTROLS ═══ */}
      <div style={{
        background:T.surface, borderBottom:`1.5px solid ${T.line}`,
        padding:"10px 14px", boxShadow:"0 2px 8px rgba(0,0,0,0.05)",
      }}>
        <div style={{ position:"relative", marginBottom:8 }}>
          <span style={{ position:"absolute", right:11, top:"50%", transform:"translateY(-50%)", color:T.t3, fontSize:13 }}>🔍</span>
          <input
            value={search} onChange={e=>setSearch(e.target.value)}
            placeholder="رقم الهاتف · رقم البطاقة ..."
            style={{
              width:"100%", padding:"9px 34px 9px 30px",
              border:`1.5px solid ${T.line}`, borderRadius:10,
              fontSize:13, fontFamily:"inherit", color:T.t1,
              background:"#F6F9FA", outline:"none", transition:"border 0.2s",
            }}
            onFocus={e=>e.target.style.borderColor=T.teal}
            onBlur={e=>e.target.style.borderColor=T.line}
          />
          {search && <span onClick={()=>setSearch("")} style={{
            position:"absolute", left:10, top:"50%", transform:"translateY(-50%)",
            cursor:"pointer", color:T.t3, fontSize:14,
          }}>✕</span>}
        </div>
        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
          {TYPES.map(t=>(
            <button key={t} onClick={()=>setFilterType(t)} style={{
              padding:"5px 11px", borderRadius:20, fontFamily:"inherit",
              fontSize:11.5, cursor:"pointer", fontWeight:filterType===t?700:400,
              border:filterType===t?"none":`1.5px solid ${T.line}`,
              background:filterType===t?`linear-gradient(135deg,${T.teal},${T.tealDark})`:"#F6F9FA",
              color:filterType===t?"#fff":T.t2,
              boxShadow:filterType===t?`0 2px 8px rgba(34,184,209,0.28)`:"none",
              transition:"all 0.18s", whiteSpace:"nowrap",
            }}>{t}</button>
          ))}
        </div>
      </div>

      {/* ═══ CONTENT ═══ */}
      <main className="mp" style={{ padding:"18px 32px" }}>

        {/* desktop table */}
        <div className="dt" style={{
          background:T.surface, borderRadius:16,
          border:`1px solid ${T.line}`, boxShadow:"0 2px 16px rgba(0,0,0,0.06)", overflow:"hidden",
        }}>
          {filtered.length===0
            ? <div style={{ textAlign:"center", padding:"70px 20px", color:T.t3 }}>
                <div style={{ fontSize:42, marginBottom:12 }}>🔍</div>
                <div style={{ fontSize:15 }}>لا توجد نتائج مطابقة</div>
              </div>
            : <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
                  <thead>
                    <tr style={{ background:`linear-gradient(90deg,${T.navy},${T.navyMid})` }}>
                      {TH_COLS.map(h=>(
                        <th key={h.key} onClick={()=>toggleSort(h.key)} style={{
                          padding:"13px 14px", textAlign:"right",
                          color:"rgba(255,255,255,0.85)", fontWeight:700,
                          fontSize:12, cursor:"pointer", userSelect:"none", whiteSpace:"nowrap",
                        }}>
                          <Arrow col={h.key}/>{h.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((c,i)=>{
                      const meta = tm(c.type);
                      const rowBg = i%2===0 ? T.surface : T.surfaceAlt;
                      return (
                        <tr key={c.id}
                          style={{ background:rowBg, borderBottom:`1px solid ${T.line}40`, transition:"background 0.12s" }}
                          onMouseEnter={e=>e.currentTarget.style.background="#E8F7FA"}
                          onMouseLeave={e=>e.currentTarget.style.background=rowBg}
                        >
                          <td style={{ padding:"11px 14px", color:T.t3, fontWeight:600, fontSize:12 }}>{c.id}</td>
                          <td style={{ padding:"11px 14px" }}>
                            <span style={{
                              display:"inline-flex", alignItems:"center", gap:5,
                              padding:"3px 10px", borderRadius:20,
                              background:meta.bg, color:meta.color, fontSize:11.5, fontWeight:700,
                            }}>
                              <span style={{ width:6, height:6, borderRadius:"50%", background:meta.dot }}/>
                              {c.type}
                            </span>
                          </td>
                          <td style={{ padding:"11px 14px", fontFamily:"monospace", fontSize:12.5, color:T.t1, direction:"ltr", textAlign:"right" }}>{c.phone}</td>
                          <td style={{ padding:"11px 14px", fontFamily:"monospace", fontSize:11.5, color:T.t2, direction:"ltr", textAlign:"right" }}>{c.cardNum}</td>
                          <td style={{ padding:"11px 14px", fontWeight:700, fontSize:13,
                            color:c.balance===0?T.muted:c.balance>=50?T.danger:T.success }}>
                            {c.balance.toFixed(2)}<span style={{ fontSize:10, color:T.t3, marginRight:2 }}>ر.س</span>
                          </td>
                          <td style={{ padding:"11px 14px", color:T.t2, fontSize:12, direction:"ltr", textAlign:"right" }}>{c.lastUsed}</td>
                          <td style={{ padding:"11px 14px", textAlign:"center" }}>
                            {c.evidenceUrl
                              ? <a href={c.evidenceUrl} target="_blank" rel="noreferrer" style={{
                                  display:"inline-flex", alignItems:"center", gap:4,
                                  padding:"4px 11px", borderRadius:7,
                                  background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
                                  color:"#fff", fontSize:11.5, fontWeight:700, textDecoration:"none",
                                  boxShadow:"0 2px 6px rgba(34,184,209,0.28)",
                                }}>📁 فتح</a>
                              : <span style={{ fontSize:11, color:T.muted, background:"#F2F2F2", padding:"3px 9px", borderRadius:6 }}>لا يوجد</span>
                            }
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
          }
        </div>

        {/* mobile cards */}
        <div className="mc">
          {filtered.length===0
            ? <div style={{ textAlign:"center", padding:"50px 20px", color:T.t3 }}>
                <div style={{ fontSize:36, marginBottom:10 }}>🔍</div>
                <div>لا توجد نتائج</div>
              </div>
            : filtered.map(c=><MobileCard key={c.id} c={c}/>)
          }
        </div>

        <div style={{ textAlign:"center", marginTop:16, color:T.t3, fontSize:11, letterSpacing:0.3 }}>
          مشروع حافلات القصيم · سابتكو &nbsp;|&nbsp; {cards.length} بطاقة · يُعرض {filtered.length}
        </div>
      </main>
    </div>
  );
}
