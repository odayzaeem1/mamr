(() => {
'use strict';

/* =========================================================
   الإعدادات — عدّل بيانات شركتك هنا
   ========================================================= */
const CONFIG = {
  brand: 'ممرّ',
  brandSub: 'استوديو حلول برمجية',
  whatsapp: '970592297933',          // بدون + أو أصفار بالبداية
  email: 'odyzaeem1@gmail.com'
};

/* الخدمات — كل عنصر = لوحة على حيطان الممر */
const SERVICES = [
  {
    id:'web', icon:'web', colors:['#0ea5e9','#6d28d9'],
    title:'تطوير مواقع الويب',
    tag:'مواقع سريعة، متجاوبة، ومبنية لتحوّل الزائر إلى عميل.',
    desc:'نصمم ونبرمج مواقع تعريفية ومنصات ويب من الصفر، بتصميم مخصص لهويتك، وأداء عالي على كل الأجهزة، وبنية نظيفة قابلة للتوسع مع نمو مشروعك.',
    includes:['تصميم واجهات مخصص بالكامل لهويتك','تجاوب كامل مع الجوال والتابلت','لوحة تحكم لإدارة المحتوى بسهولة','تحسين السرعة وتهيئة SEO تقنية','ربط مع Google Analytics وأدوات التتبع'],
    steps:[['الاكتشاف','نفهم أهدافك وجمهورك ونحدد الصفحات والمزايا.'],['التصميم','نماذج أولية وتصميم نهائي توافق عليه قبل البرمجة.'],['التطوير','برمجة نظيفة مع مراجعات دورية معك.'],['الإطلاق','اختبار شامل ورفع الموقع وتسليمك كل شيء.']],
    tech:['HTML/CSS/JS','React','Next.js','Laravel','WordPress'],
    duration:'2 – 6 أسابيع'
  },
  {
    id:'store', icon:'store', colors:['#f59e0b','#db2777'],
    title:'المتاجر الإلكترونية',
    tag:'متجر جاهز للبيع من أول يوم: دفع، شحن، ومخزون.',
    desc:'نبني متاجر إلكترونية متكاملة تسهّل على عميلك الشراء وعليك الإدارة، مع ربط بوابات الدفع وشركات الشحن وتقارير المبيعات.',
    includes:['صفحات منتجات مقنعة وسلة شراء سلسة','ربط بوابات الدفع الإلكتروني','إدارة المخزون والطلبات والعملاء','كوبونات وعروض وبرامج ولاء','تقارير مبيعات ولوحة تحكم واضحة'],
    steps:[['التخطيط','نرتّب الأقسام والمنتجات ورحلة الشراء.'],['التصميم','واجهة متجر تعكس علامتك وتشجع على الشراء.'],['البناء والربط','برمجة المتجر وربط الدفع والشحن.'],['التدريب والإطلاق','نسلمك المتجر وندربك على إدارته.']],
    tech:['Shopify','WooCommerce','Next.js','Stripe','Laravel'],
    duration:'3 – 8 أسابيع'
  },
  {
    id:'mobile', icon:'mobile', colors:['#10b981','#0e7490'],
    title:'تطبيقات الجوال',
    tag:'تطبيق واحد يشتغل على iOS و Android بتجربة ناعمة.',
    desc:'نطوّر تطبيقات جوال عملية وسريعة بتقنيات متعددة المنصات، مع لوحة تحكم وإشعارات وربط كامل بأنظمتك الحالية، ونرافقك حتى النشر على المتاجر.',
    includes:['تطبيق لنظامي iOS و Android','تسجيل دخول وحسابات مستخدمين','إشعارات فورية Push Notifications','لوحة تحكم لإدارة التطبيق','النشر على App Store و Google Play'],
    steps:[['تحديد النطاق','نحدد المزايا الأساسية للإصدار الأول.'],['تصميم التجربة','شاشات وتدفقات استخدام واضحة.'],['التطوير والاختبار','برمجة على مراحل مع نسخ تجريبية لك.'],['النشر والمتابعة','رفع التطبيق ومتابعة الأداء والتحديثات.']],
    tech:['Flutter','React Native','Firebase','Node.js','REST APIs'],
    duration:'6 – 12 أسبوع'
  },
  {
    id:'uiux', icon:'uiux', colors:['#f43f5e','#7c3aed'],
    title:'تصميم UI / UX',
    tag:'تجربة استخدام مدروسة قبل ما نكتب سطر كود واحد.',
    desc:'نصمم واجهات جميلة وسهلة الاستخدام مبنية على فهم المستخدم، من الخرائط الأولية حتى النماذج التفاعلية وأنظمة التصميم الجاهزة للتطوير.',
    includes:['بحث وتحليل رحلة المستخدم','Wireframes ونماذج أولية تفاعلية','تصميم واجهات نهائي بدقة عالية','نظام تصميم Design System قابل لإعادة الاستخدام','ملفات تسليم جاهزة للمطورين'],
    steps:[['الفهم','نحلل المستخدم والمنافسين والمشكلة.'],['الهيكلة','خرائط الشاشات وتدفق الاستخدام.'],['التصميم البصري','ألوان وخطوط ومكونات متناسقة.'],['النموذج التفاعلي','نموذج قابل للتجربة قبل التطوير.']],
    tech:['Figma','FigJam','Prototyping','Design Systems'],
    duration:'1 – 4 أسابيع'
  },
  {
    id:'systems', icon:'systems', colors:['#3b82f6','#0f172a'],
    title:'الأنظمة والحلول المخصصة',
    tag:'أنظمة إدارة مصممة على مقاس طريقة شغلك.',
    desc:'نبني أنظمة داخلية ولوحات تحكم مخصصة (CRM، ERP، أنظمة حجوزات وفوترة) تختصر الوقت وتقلل الأخطاء وتعطيك صورة واضحة عن شغلك.',
    includes:['تحليل سير العمل الحالي','لوحات تحكم وتقارير لحظية','صلاحيات وأدوار للمستخدمين','واجهات برمجية APIs للربط مع أنظمة أخرى','نسخ احتياطي وحماية للبيانات'],
    steps:[['تحليل العمليات','نفهم كيف تشتغل اليوم وأين الهدر.'],['تصميم النظام','قاعدة البيانات والشاشات والصلاحيات.'],['التطوير على مراحل','نسلّم أجزاء قابلة للاستخدام بسرعة.'],['التشغيل والتدريب','ننقل بياناتك وندرب فريقك.']],
    tech:['Node.js','Laravel','PostgreSQL','MySQL','Vue/React'],
    duration:'4 – 16 أسبوع'
  },
  {
    id:'ai', icon:'ai', colors:['#a855f7','#06b6d4'],
    title:'الذكاء الاصطناعي والأتمتة',
    tag:'خلّي المهام المتكررة تشتغل لحالها.',
    desc:'ندمج الذكاء الاصطناعي في منتجك وعملك: مساعدات محادثة تفهم بياناتك، أتمتة للمهام اليومية، وتحليل ذكي يساعدك تاخذ قرارات أسرع.',
    includes:['شات بوت ذكي مدرّب على بيانات شركتك','أتمتة سير العمل بين الأدوات','استخراج وتحليل البيانات من المستندات','ربط نماذج الذكاء الاصطناعي بأنظمتك','لوحات متابعة لأداء الأتمتة'],
    steps:[['اكتشاف الفرص','نحدد المهام الأعلى عائداً للأتمتة.'],['نموذج تجريبي','حل مصغر نختبره على بيانات حقيقية.'],['التطوير والدمج','ربط الحل بأدواتك وأنظمتك.'],['القياس والتحسين','نراقب النتائج ونحسّن باستمرار.']],
    tech:['Python','LLM APIs','RAG','n8n','Vector DB'],
    duration:'2 – 8 أسابيع'
  },
  {
    id:'cloud', icon:'cloud', colors:['#38bdf8','#1e3a8a'],
    title:'الاستضافة والسحابة DevOps',
    tag:'بنية تحتية مستقرة، سريعة، وجاهزة للضغط.',
    desc:'نجهز ونشغّل بنيتك التحتية على السحابة بطريقة احترافية: نشر آلي، مراقبة على مدار الساعة، وتوسّع تلقائي وقت الذروة.',
    includes:['إعداد الخوادم والاستضافة السحابية','نشر آلي CI/CD','حاويات Docker وتنظيم البيئات','مراقبة وتنبيهات وسجلات','CDN وشهادات SSL وتحسين الأداء'],
    steps:[['التقييم','نراجع وضعك الحالي واحتياجاتك.'],['التصميم','بنية مناسبة للحجم والميزانية.'],['التنفيذ والنقل','ننقل خدماتك بدون توقف.'],['المراقبة','متابعة مستمرة وتحسين التكلفة.']],
    tech:['AWS','Docker','GitHub Actions','Nginx','Cloudflare'],
    duration:'1 – 3 أسابيع'
  },
  {
    id:'support', icon:'support', colors:['#22c55e','#065f46'],
    title:'الصيانة والدعم والأمان',
    tag:'نظامك شغّال ومحمي وأنت مرتاح البال.',
    desc:'باقات دعم شهرية تبقي موقعك أو تطبيقك محدثاً وآمناً وسريعاً، مع استجابة سريعة لأي مشكلة وتطوير مستمر لمزايا جديدة.',
    includes:['تحديثات أمنية وتقنية دورية','نسخ احتياطي تلقائي واستعادة','فحص ثغرات وتقوية الحماية','مراقبة التوفر وسرعة الاستجابة','ساعات تطوير شهرية للتحسينات'],
    steps:[['الفحص الأولي','تدقيق شامل للأداء والأمان.'],['خطة الصيانة','جدول واضح للتحديثات والنسخ.'],['الدعم المستمر','استجابة سريعة لأي طلب.'],['تقرير شهري','ملخص لكل ما تم وتوصيات.']],
    tech:['Security Audits','Backups','Uptime Monitoring','Performance'],
    duration:'اشتراك شهري'
  }
];

/* =========================================================
   أيقونات اللوحات (SVG) — مرسومة حول المركز (0,0)
   ========================================================= */
const ICONS = {
  web:'<rect x="-44" y="-32" width="88" height="64" rx="7"/><path d="M-44 -17H44"/><circle cx="-34" cy="-24.5" r="1.8" fill="#fff"/><circle cx="-27" cy="-24.5" r="1.8" fill="#fff"/><circle cx="-20" cy="-24.5" r="1.8" fill="#fff"/><path d="M-14 -4l-11 10 11 10M14 -4l11 10-11 10M5 -6l-10 26"/>',
  store:'<path d="M-31 -14h62l-6 48h-50z"/><path d="M-14 -14v-8a14 14 0 0 1 28 0v8"/><path d="M-11 8c5 7 17 7 22 0"/>',
  mobile:'<rect x="-23" y="-40" width="46" height="80" rx="9"/><path d="M-7 -32h14"/><circle cx="0" cy="30" r="2.6"/><path d="M-12 -14h24M-12 -2h16M-12 10h20"/>',
  uiux:'<path d="M-36 24C-20 -32 20 32 36 -24"/><rect x="-44" y="18" width="13" height="13" rx="2"/><rect x="31" y="-31" width="13" height="13" rx="2"/><circle cx="0" cy="0" r="5"/><path d="M-36 24L-10 -26M36 -24L10 26" stroke-dasharray="3 5"/>',
  systems:'<rect x="-44" y="-33" width="88" height="66" rx="7"/><path d="M-31 20v-12M-17 20v-26M-3 20v-17M11 20v-32"/><path d="M24 -18h11M24 -6h11M24 6h11"/>',
  ai:'<path d="M-6 -38C-2 -15 2 -11 23 -7C2 -3 -2 1 -6 24C-10 1 -14 -3 -35 -7C-14 -11 -10 -15 -6 -38Z"/><path d="M27 10c1 7 3 9 10 10c-7 1-9 3-10 10c-1-7-3-9-10-10c7-1 9-3 10-10Z"/>',
  cloud:'<path d="M-26 22h52a18 18 0 0 0 0-36a26 26 0 0 0-50-6a20 20 0 0 0-2 42z"/><path d="M0 14V-6M-9 3l9-9 9 9"/>',
  support:'<path d="M0 -38L32 -26V0C32 20 18 32 0 40C-18 32 -32 20 -32 0V-26Z"/><path d="M-13 1l9 9 17-18"/>'
};

let svgUid = 0;
function artSVG(sv){
  const u = 'a' + (svgUid++);
  const [c1, c2] = sv.colors;
  return `<svg viewBox="0 0 228 174" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs>
<linearGradient id="${u}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
<radialGradient id="${u}r" cx=".78" cy=".18" r=".75"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
<pattern id="${u}p" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1" fill="#fff" fill-opacity=".16"/></pattern>
</defs>
<rect width="228" height="174" fill="url(#${u}g)"/>
<rect width="228" height="174" fill="url(#${u}p)"/>
<circle cx="190" cy="22" r="70" fill="#fff" fill-opacity=".07"/>
<circle cx="24" cy="170" r="86" fill="#000" fill-opacity=".18"/>
<circle cx="114" cy="87" r="62" fill="none" stroke="#fff" stroke-opacity=".14" stroke-width="1"/>
<circle cx="114" cy="87" r="78" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="1" stroke-dasharray="2 6"/>
<rect width="228" height="174" fill="url(#${u}r)"/>
<g transform="translate(114 87)" fill="none" stroke="#fff" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round">${ICONS[sv.icon]}</g>
</svg>`;
}
function hexRgb(h){
  const n = parseInt(h.slice(1), 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

/* =========================================================
   هندسة الممر
   المسار منحني على المستوى الأفقي (x,z)، وزاوية الاتجاه θ(s)
   تتغير مع المسافة s فيصير الممر "مطعوج" يمين ويسار.
   ========================================================= */
const HW = 190;                 // نصف عرض الممر (ممر ضيق)
const FLOOR = 240, CEIL = -200; // ارتفاع الأرض والسقف بالنسبة لعين الزائر
const WALL_H = FLOOR - CEIL, WALL_Y = (FLOOR + CEIL) / 2;
const DS = 100;                 // طول قطعة الحيط (الفرق عن المنحنى الحقيقي ~1.6px فقط)
const FDS = 150;                // طول قطعة الأرض/السقف
const STEP = 5;                 // دقة حساب المسار
const AMP = 1.0, LAMBDA = 760;  // شدة الالتفاف وطوله
const S_START_CURVE = 380;
const FIRST = 950, GAP = 620;
const FRAME_S = SERVICES.map((_, i) => FIRST + i * GAP);
const S_END = FRAME_S[FRAME_S.length - 1] + 820;
const S_FLAT = S_END - 650;     // آخر الممر مستقيم ليواجهك الجدار النهائي
const CAM_MAX = S_END - 470;
/* جودة حسب الجهاز */
const IS_TOUCH = window.matchMedia('(pointer: coarse)').matches;
const LOW = IS_TOUCH || (navigator.hardwareConcurrency || 8) <= 4 || window.innerWidth < 760;
const VIEW = LOW ? 1500 : 2000;  // مدى الرسم — الممر المنحني يحجب ما بعده أصلاً
const FOG_END = VIEW - 80;
if (LOW) document.documentElement.classList.add('low');
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) document.documentElement.classList.add('hov');
const FRAME_W = 260, FRAME_H = 310;
const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

function theta(s){
  const u = clamp(s, S_START_CURVE, S_FLAT) - S_START_CURVE;
  return AMP * Math.sin(u / LAMBDA);
}
function kappa(s){ return (theta(s + 1) - theta(s - 1)) / 2; }

const PRE_MIN = -400, PRE_MAX = S_END + 700;
const NPTS = Math.ceil((PRE_MAX - PRE_MIN) / STEP) + 1;
const PX = new Float64Array(NPTS), PZ = new Float64Array(NPTS), PT = new Float64Array(NPTS);
(function buildPath(){
  const i0 = Math.round((0 - PRE_MIN) / STEP);
  PX[i0] = 0; PZ[i0] = 0; PT[i0] = theta(0);
  let x = 0, z = 0;
  for (let i = i0 + 1; i < NPTS; i++){
    const s = PRE_MIN + i * STEP, tm = theta(s - STEP / 2);
    x += Math.sin(tm) * STEP; z -= Math.cos(tm) * STEP;
    PX[i] = x; PZ[i] = z; PT[i] = theta(s);
  }
  x = 0; z = 0;
  for (let i = i0 - 1; i >= 0; i--){
    const s = PRE_MIN + i * STEP, tm = theta(s + STEP / 2);
    x -= Math.sin(tm) * STEP; z += Math.cos(tm) * STEP;
    PX[i] = x; PZ[i] = z; PT[i] = theta(s);
  }
})();
function sample(s){
  const f = clamp((s - PRE_MIN) / STEP, 0, NPTS - 1.000001);
  const i = Math.floor(f), t = f - i;
  return { x: PX[i] + (PX[i + 1] - PX[i]) * t, z: PZ[i] + (PZ[i + 1] - PZ[i]) * t, t: PT[i] + (PT[i + 1] - PT[i]) * t };
}
/* نقطة على بعد off من منتصف الممر (موجب = يمين) */
function pt(s, off){
  const p = sample(s);
  return { x: p.x + Math.cos(p.t) * off, z: p.z + Math.sin(p.t) * off, t: p.t };
}

/* =========================================================
   بناء المشهد
   ========================================================= */
const world = document.getElementById('world');
const frag = document.createDocumentFragment();

function placeEl(el, w, h, x, y, z, ry, rx){
  el.style.width = w + 'px';
  el.style.height = h + 'px';
  el.style.margin = `${-h / 2}px 0 0 ${-w / 2}px`;
  el.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,${z.toFixed(2)}px) rotateY(${ry.toFixed(5)}rad)` + (rx ? ` rotateX(${rx}deg)` : '');
}
function panel(cls, w, h, x, y, z, ry, rx){
  const el = document.createElement('div');
  el.className = 'pl ' + cls;
  placeEl(el, w, h, x, y, z, ry, rx);
  frag.appendChild(el);
  return { el, f: -1 };
}
/* جدار بين نقطتين — العنصر يواجه داخل الممر دائماً */
function wallPanel(cls, A, B){
  const dx = B.x - A.x, dz = B.z - A.z;
  return panel(cls, Math.hypot(dx, dz) + 1.5, WALL_H + 4, (A.x + B.x) / 2, WALL_Y, (A.z + B.z) / 2, Math.atan2(-dz, dx));
}

const segs = [];
let k = 0;
for (let s = -250; s < S_END; s += DS, k++){
  const s1 = Math.min(s + DS, S_END + 2);
  const seam = (k % 2 === 0) ? ' seam' : '';
  segs.push({ s0: s, s1, sm: (s + s1) / 2, vis: true, parts: [
    wallPanel('wall l' + seam, pt(s, -HW), pt(s1, -HW)),
    wallPanel('wall r' + seam, pt(s1, HW), pt(s, HW))
  ]});
}
for (let s = -250; s < S_END; s += FDS){
  const s1 = Math.min(s + FDS, S_END + 2);
  const sm = (s + s1) / 2, m = sample(sm);
  const depth = (s1 - s) * (1 + HW * Math.abs(kappa(sm))) + 3;
  segs.push({ s0: s, s1, sm, vis: true, parts: [
    panel('floor', HW * 2 + 6, depth, m.x, FLOOR, m.z, -m.t, 90),
    panel('ceil', HW * 2 + 6, depth, m.x, CEIL, m.z, -m.t, -90)
  ]});
}

/* اللوحات */
const frames = [];
SERVICES.forEach((sv, i) => {
  const s = FRAME_S[i];
  const side = (i % 2 === 0) ? -1 : 1; // -1 يسار، 1 يمين
  sv.side = side;
  sv.rgb = hexRgb(sv.colors[0]);
  const kap = kappa(s);
  const inset = 12 + 1.3 * FRAME_W * FRAME_W * Math.abs(kap) / 8; // يمنع تداخل البرواز مع الحيط المنحني
  const p = pt(s, side * (HW - inset));
  const ry = side === -1 ? Math.PI / 2 - p.t : -Math.PI / 2 - p.t;

  const el = document.createElement('div');
  el.className = 'pl frame3d';
  el.tabIndex = 0;
  el.setAttribute('role', 'button');
  el.setAttribute('aria-label', 'عرض تفاصيل خدمة ' + sv.title);
  el.style.setProperty('--acc-rgb', sv.rgb);
  el.innerHTML =
    `<div class="halo"></div><div class="lamp"></div>
     <div class="fr"><div class="mat"><div class="art">${artSVG(sv)}</div></div></div>
     <div class="plaque"><span class="no">${String(i + 1).padStart(2, '0')}</span><b></b><i>اضغط للتفاصيل</i></div>
`;
  el.querySelector('.plaque b').textContent = sv.title;
  placeEl(el, FRAME_W, FRAME_H, p.x, 0, p.z, ry);
  el.addEventListener('click', () => openService(i));
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openService(i); }
  });
  el.addEventListener('focus', () => { if (el.matches(':focus-visible')) scrollToS(FRAME_S[i] - 260); });
  frag.appendChild(el);

  const pp = pt(s, side * (HW - 85));
  const pool = panel('pool', 230, 300, pp.x, FLOOR - 1, pp.z, -pp.t, 90);
  pool.el.style.setProperty('--acc-rgb', sv.rgb);

  frames.push({ s, side, el, f: -1, pool, vis: true });
});

/* الجدار الأخير */
const endP = sample(S_END);
const endWall = document.createElement('div');
endWall.className = 'pl endwall';
endWall.innerHTML =
  `<div class="neon">وصلت لآخر الممر..<br>وبداية مشروعك</div>
   <p>جاهزين نحوّل فكرتك لمنتج رقمي حقيقي.<br>احكيلنا شو في بالك.</p>
   <div class="row"><button class="btn primary" type="button" data-contact>ابدأ مشروعك</button><button class="btn ghost" type="button" data-restart>ارجع للبداية</button></div>`;
placeEl(endWall, HW * 2 + 4, WALL_H + 4, endP.x, WALL_Y, endP.z, -endP.t);
frag.appendChild(endWall);
endWall.querySelector('[data-contact]').addEventListener('click', () => openContact());
endWall.querySelector('[data-restart]').addEventListener('click', () => scrollToS(0));

world.appendChild(frag);

/* =========================================================
   الواجهة: النصوص، النقاط، الخريطة
   ========================================================= */
document.getElementById('brandName').textContent = CONFIG.brand;
document.getElementById('brandSub').textContent = CONFIG.brandSub;
document.getElementById('heroEyebrow').textContent = CONFIG.brandSub;

const dotsEl = document.getElementById('dots');
const dotBtns = SERVICES.map((sv, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.style.setProperty('--acc', sv.colors[0]);
  b.setAttribute('aria-label', sv.title);
  const tip = document.createElement('span');
  tip.textContent = sv.title;
  b.appendChild(tip);
  b.addEventListener('click', () => scrollToS(FRAME_S[i] - 260));
  dotsEl.appendChild(b);
  return b;
});

/* الخريطة المصغرة */
const NS = 'http://www.w3.org/2000/svg';
const mapSvg = document.getElementById('mapSvg');
const MAP = { vx: 0, vy: 0, vw: 1, vh: 1, sc: 0, ox: 0, oy: 0 };
const mapMarker = document.getElementById('mapMarker');
(function buildMap(){
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  const pts = [];
  for (let s = 0; s <= S_END; s += 40){
    const p = sample(s);
    pts.push(p.x.toFixed(1) + ',' + p.z.toFixed(1));
    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
    minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z);
  }
  const pad = 260;
  const w = (maxX - minX) + pad * 2, h = (maxZ - minZ) + pad * 2;
  mapSvg.setAttribute('viewBox', `${minX - pad} ${minZ - pad} ${w} ${h}`);
  mapSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  const sw = Math.max(w, h) / 60;
  const pl = document.createElementNS(NS, 'polyline');
  pl.setAttribute('points', pts.join(' '));
  pl.setAttribute('fill', 'none');
  pl.setAttribute('stroke', 'rgba(255,255,255,.22)');
  pl.setAttribute('stroke-width', (HW * 2).toString());
  pl.setAttribute('stroke-linecap', 'round');
  pl.setAttribute('stroke-linejoin', 'round');
  mapSvg.appendChild(pl);
  const pl2 = pl.cloneNode();
  pl2.setAttribute('stroke', 'rgba(65,233,255,.55)');
  pl2.setAttribute('stroke-width', (sw * .5).toString());
  mapSvg.appendChild(pl2);
  SERVICES.forEach((sv, i) => {
    const p = pt(FRAME_S[i], sv.side * HW);
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', p.x); c.setAttribute('cy', p.z); c.setAttribute('r', sw * 1.4);
    c.setAttribute('fill', sv.colors[0]);
    mapSvg.appendChild(c);
  });
  MAP.vx = minX - pad; MAP.vy = minZ - pad; MAP.vw = w; MAP.vh = h;
})();
/* مؤشر موقعك على الخريطة: عنصر HTML بيتحرك بـ transform (بدون إعادة رسم الخريطة) */
function measureMap(){
  const box = mapSvg.getBoundingClientRect();
  const host = mapSvg.parentElement.getBoundingClientRect();
  const sc = Math.min(box.width / MAP.vw, box.height / MAP.vh) || 0;
  MAP.sc = sc;
  MAP.ox = box.left - host.left + (box.width - MAP.vw * sc) / 2;
  MAP.oy = box.top - host.top + (box.height - MAP.vh * sc) / 2;
}

/* =========================================================
   السكرول ← الكاميرا
   ========================================================= */
const track = document.getElementById('track');
const scene = document.getElementById('scene');
let persp = 600;

function maxScroll(){ return Math.max(0, document.documentElement.scrollHeight - window.innerHeight); }
function layout(){
  persp = clamp(Math.round(window.innerWidth * 0.42), 380, 720);
  measureMap();
  scene.style.perspective = persp + 'px';
  track.style.height = Math.round(CAM_MAX * 1.15 + Math.max(window.innerHeight, screen.height || 0)) + 'px';
}
let cur = 0, target = 0, dirty = true;
function readTarget(){
  const m = maxScroll();
  target = m > 0 ? clamp(window.scrollY / m, 0, 1) * CAM_MAX : 0;
}
function scrollToS(s){
  const m = maxScroll();
  window.scrollTo({ top: clamp(s / CAM_MAX, 0, 1) * m, behavior: REDUCE ? 'auto' : 'smooth' });
}

/* حركة الماوس — نظرة خفيفة يمين/يسار/فوق/تحت */
let mx = 0, my = 0, tmx = 0, tmy = 0;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (finePointer && !REDUCE){
  window.addEventListener('mousemove', e => {
    tmx = (e.clientX / window.innerWidth) * 2 - 1;
    tmy = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });
  document.addEventListener('mouseleave', () => { tmx = 0; tmy = 0; });
}

function fogAt(d){
  const v = clamp((d - 350) / (FOG_END - 350), 0, 1);
  return Math.round(Math.pow(v, 1.25) * 48) / 50; // خطوات 0.02 = كتابات أقل على الـ DOM
}
/* الضباب = شفافية القطعة نفسها فوق خلفية سوداء.
   الشفافية بيعالجها كرت الشاشة مباشرة بدون إعادة رسم — هذا أكبر توفير بالأداء */
function setFog(o, f){ if (o.f !== f){ o.el.style.opacity = 1 - f; o.f = f; } }

const hero = document.getElementById('hero');
const hint = document.getElementById('hint');
const bar = document.getElementById('progressBar');
const pct = document.getElementById('pct');
const near = document.getElementById('near');
const nearSide = document.getElementById('nearSide');
const nearTitle = document.getElementById('nearTitle');
let nearIdx = -2, activeDot = -2, endFogV = -1, endWallVis = null, heroV = -1, hintV = -1, pctV = -1;

function render(){
  const s = cur;

  /* موقع الكاميرا: تلتفت قليلاً نحو اللوحة القريبة وتبتعد عن حيطها */
  let turn = 0, lat = 0;
  for (const fr of frames){
    const d = fr.s - s - 200;
    const f = Math.exp(-(d * d) / (2 * 170 * 170));
    turn += fr.side * 0.42 * f;
    lat += -fr.side * 26 * f;
  }
  const p = sample(s);
  const cx = p.x + Math.cos(p.t) * lat;
  const cz = p.z + Math.sin(p.t) * lat;
  const ahead = sample(Math.min(s + 170, S_END - 5));
  const look = Math.atan2(ahead.x - cx, -(ahead.z - cz));
  const yaw = look + turn + mx * 0.07;
  const pitch = -my * 0.05;
  const speed = Math.abs(target - cur);
  const bob = REDUCE ? 0 : Math.sin(s * 0.018) * Math.min(speed * 0.02, 2.5);

  world.style.transform =
    `translateZ(${persp}px) rotateX(${pitch.toFixed(4)}rad) rotateY(${yaw.toFixed(5)}rad) translate3d(${(-cx).toFixed(2)}px,${bob.toFixed(2)}px,${(-cz).toFixed(2)}px)`;

  /* إخفاء البعيد والضباب */
  for (const g of segs){
    const vis = g.s1 > s - 60 && g.s0 < s + VIEW;
    if (vis !== g.vis){
      g.vis = vis;
      const disp = vis ? '' : 'none';
      for (const q of g.parts) q.el.style.display = disp;
    }
    if (vis){
      const f = fogAt(g.sm - s);
      for (const q of g.parts) setFog(q, f);
    }
  }
  for (const fr of frames){
    const vis = fr.s > s - 120 && fr.s < s + VIEW;
    if (vis !== fr.vis){
      fr.vis = vis;
      fr.el.style.display = vis ? '' : 'none';
      fr.pool.el.style.display = vis ? '' : 'none';
    }
    if (vis){
      const f = fogAt(fr.s - s);
      setFog(fr, f);
      setFog(fr.pool, f);
    }
  }
  const ef = fogAt(S_END - s);
  if (ef !== endFogV){ endFogV = ef; endWall.style.opacity = 1 - ef; }
  const endVis = (S_END - s < VIEW);
  if (endVis !== endWallVis){ endWallVis = endVis; endWall.style.display = endVis ? '' : 'none'; }

  /* الواجهة */
  const prog = s / CAM_MAX;
  bar.style.transform = `scaleX(${prog.toFixed(4)})`;
  const pc = Math.round(prog * 100);
  if (pc !== pctV){ pctV = pc; pct.textContent = pc + '%'; }
  const h = Math.round(clamp(1 - s / 280, 0, 1) * 200) / 200;
  if (h !== heroV){
    heroV = h;
    hero.style.opacity = h;
    hero.style.transform = `translateY(${(-(1 - h) * 40).toFixed(1)}px) scale(${(1 + (1 - h) * 0.06).toFixed(3)})`;
    hero.style.visibility = h <= 0 ? 'hidden' : 'visible';
  }
  const hv = Math.round(clamp(1 - s / 60, 0, 1) * 50) / 50;
  if (hv !== hintV){ hintV = hv; hint.style.opacity = hv; }

  mapMarker.style.transform =
    `translate3d(${(MAP.ox + (cx - MAP.vx) * MAP.sc).toFixed(1)}px,${(MAP.oy + (cz - MAP.vy) * MAP.sc).toFixed(1)}px,0) rotate(${yaw.toFixed(3)}rad)`;

  /* أقرب خدمة */
  let best = -1, bestD = Infinity;
  FRAME_S.forEach((fs, i) => {
    const d = fs - s;
    if (d > -150 && d < 560){
      const sc = Math.abs(d - 200);
      if (sc < bestD){ bestD = sc; best = i; }
    }
  });
  if (best !== nearIdx){
    nearIdx = best;
    if (best >= 0){
      const sv = SERVICES[best];
      nearSide.textContent = sv.side < 0 ? 'على يسارك ←' : 'على يمينك →';
      nearTitle.textContent = sv.title;
      near.classList.add('show');
    } else {
      near.classList.remove('show');
    }
  }
  if (best !== activeDot){
    activeDot = best;
    dotBtns.forEach((b, i) => b.classList.toggle('on', i === best));
  }
}

function tick(){
  requestAnimationFrame(tick);
  const diff = target - cur;
  if (REDUCE || Math.abs(diff) < 0.05) cur = target;
  else cur += diff * 0.075;
  const dmx = tmx - mx, dmy = tmy - my;
  mx += dmx * 0.06; my += dmy * 0.06;
  const moving = diff !== 0 || Math.abs(dmx) > 0.0005 || Math.abs(dmy) > 0.0005;
  if ((!moving && !dirty) || (openM && !dirty)) return;
  dirty = false;
  render();
}

window.addEventListener('scroll', readTarget, { passive: true });
/* على الجوال: شريط العنوان بيغيّر ارتفاع الشاشة أثناء السكرول — ما نعيد الحساب إلا لو تغيّر العرض */
let lastW = window.innerWidth, rT = 0;
window.addEventListener('resize', () => {
  clearTimeout(rT);
  rT = setTimeout(() => {
    if (IS_TOUCH && window.innerWidth === lastW) return;
    lastW = window.innerWidth;
    layout(); readTarget(); dirty = true;
  }, 120);
});
window.addEventListener('orientationchange', () => setTimeout(() => { lastW = window.innerWidth; layout(); readTarget(); dirty = true; }, 250));

/* =========================================================
   النوافذ المنبثقة
   ========================================================= */
const svcModal = document.getElementById('svcModal');
const contactModal = document.getElementById('contactModal');
let openM = null, returnFocus = null, curSvc = 0;

function focusables(m){
  return Array.from(m.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'))
    .filter(el => !el.disabled && el.offsetParent !== null);
}
function showModal(m){
  if (openM === m) return;
  if (openM){ closeModal(openM, true); }
  else { returnFocus = document.activeElement; }
  m.classList.add('open');
  m.setAttribute('aria-hidden', 'false');
  document.documentElement.classList.add('lock');
  openM = m;
  setTimeout(() => { const x = m.querySelector('.x'); if (x) x.focus({ preventScroll: true }); }, 60);
}
function closeModal(m, swapping){
  m.classList.remove('open');
  m.setAttribute('aria-hidden', 'true');
  if (openM === m) openM = null;
  if (!swapping){
    document.documentElement.classList.remove('lock');
    if (returnFocus && typeof returnFocus.focus === 'function' && document.contains(returnFocus)){
      returnFocus.focus({ preventScroll: true });
    }
    returnFocus = null;
  }
}
[svcModal, contactModal].forEach(m => {
  m.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => closeModal(m)));
});
document.addEventListener('keydown', e => {
  if (!openM) return;
  if (e.key === 'Escape'){ e.preventDefault(); closeModal(openM); return; }
  if (e.key === 'Tab'){
    const f = focusables(openM);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
  if (openM === svcModal && (e.key === 'ArrowLeft' || e.key === 'ArrowRight') && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){
    e.preventDefault();
    fillService(e.key === 'ArrowLeft' ? curSvc + 1 : curSvc - 1);
  }
});

const mEls = {
  no: document.getElementById('mNo'), title: document.getElementById('mTitle'), tag: document.getElementById('mTag'),
  art: document.getElementById('mArt'), desc: document.getElementById('mDesc'), list: document.getElementById('mList'),
  steps: document.getElementById('mSteps'), chips: document.getElementById('mChips'), dur: document.getElementById('mDur')
};
function fillService(i){
  const n = SERVICES.length;
  curSvc = ((i % n) + n) % n;
  const sv = SERVICES[curSvc];
  const sheet = svcModal.querySelector('.sheet');
  sheet.style.setProperty('--acc-rgb', sv.rgb);
  sheet.style.setProperty('--acc', sv.colors[0]);
  mEls.no.textContent = 'الخدمة ' + String(curSvc + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
  mEls.title.textContent = sv.title;
  mEls.tag.textContent = sv.tag;
  mEls.art.innerHTML = artSVG(sv);
  mEls.desc.textContent = sv.desc;
  mEls.list.replaceChildren(...sv.includes.map(t => { const li = document.createElement('li'); li.textContent = t; return li; }));
  mEls.steps.replaceChildren(...sv.steps.map(([a, b]) => {
    const li = document.createElement('li');
    const d = document.createElement('div');
    const bb = document.createElement('b'); bb.textContent = a;
    const sm = document.createElement('small'); sm.textContent = b;
    d.append(bb, sm); li.appendChild(d); return li;
  }));
  mEls.chips.replaceChildren(...sv.tech.map(t => { const sp = document.createElement('span'); sp.textContent = t; return sp; }));
  mEls.dur.textContent = sv.duration;
  sheet.scrollTop = 0;
}
function openService(i){
  fillService(i);
  showModal(svcModal);
}
document.getElementById('mPrev').addEventListener('click', () => fillService(curSvc - 1));
document.getElementById('mNext').addEventListener('click', () => fillService(curSvc + 1));
document.getElementById('mOrder').addEventListener('click', () => openContact(curSvc));
document.getElementById('nearBtn').addEventListener('click', () => { if (nearIdx >= 0) openService(nearIdx); });

/* التواصل */
const form = document.getElementById('contactForm');
const cService = document.getElementById('cService');
['غير متأكد بعد — بدي استشارة', ...SERVICES.map(s => s.title)].forEach((t, i) => {
  const o = document.createElement('option');
  o.value = i === 0 ? '' : t;
  o.textContent = t;
  cService.appendChild(o);
});
function openContact(svcIndex){
  cService.value = (typeof svcIndex === 'number') ? SERVICES[svcIndex].title : '';
  form.querySelectorAll('.field.bad').forEach(f => f.classList.remove('bad'));
  showModal(contactModal);
}
function validate(){
  let ok = true;
  form.querySelectorAll('.field[data-req]').forEach(f => {
    const inp = f.querySelector('input,textarea');
    const bad = !inp.value.trim();
    f.classList.toggle('bad', bad);
    if (bad && ok){ inp.focus(); ok = false; }
  });
  return ok;
}
function buildMessage(){
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const svc = cService.value || 'استشارة عامة';
  const msg = form.message.value.trim();
  return `مرحباً، أنا ${name}\nالخدمة: ${svc}\n${phone ? 'رقمي: ' + phone + '\n' : ''}\n${msg}`;
}
form.addEventListener('input', e => {
  const f = e.target.closest('.field');
  if (f && f.classList.contains('bad') && e.target.value.trim()) f.classList.remove('bad');
});
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validate()) return;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(buildMessage())}`, '_blank', 'noopener');
});
document.getElementById('cMail').addEventListener('click', () => {
  if (!validate()) return;
  const subject = 'طلب مشروع: ' + (cService.value || 'استشارة عامة');
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
});

document.getElementById('toContact').addEventListener('click', () => openContact());
document.getElementById('toServices').addEventListener('click', () => scrollToS(FRAME_S[0] - 260));
document.getElementById('brandLink').addEventListener('click', e => { e.preventDefault(); scrollToS(0); });

/* =========================================================
   تشغيل
   ========================================================= */
layout();
readTarget();
cur = target;
render();
requestAnimationFrame(() => document.body.classList.add('ready'));
requestAnimationFrame(tick);

})();
