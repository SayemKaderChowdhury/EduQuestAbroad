/* ============================================================
   EduQuestAbroad — Main JavaScript
   ============================================================ */

/* ─── TRANSLATIONS ────────────────────────────────────────── */
const t = {
  bn: {
    /* NAV */
    'nav-home':       'হোম',
    'nav-about':      'আমাদের সম্পর্কে',
    'nav-services':   'আমাদের সেবা',
    'nav-stories':    'সাফল্যের গল্প',
    'nav-states':     'শীর্ষ রাজ্য',
    'nav-contact':    'যোগাযোগ',
    'nav-cta':        'বিনামূল্যে পরামর্শ',

    /* HERO */
    'hero-badge':     '🇧🇩 বাংলাদেশ থেকে আমেরিকার পথে',
    'hero-title-1':   'যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়ে',
    'hero-title-2':   'ভর্তির স্বপ্ন পূরণ করুন',
    'hero-sub':       'বাংলাদেশী শিক্ষার্থীদের আমেরিকান বিশ্ববিদ্যালয়ে ভর্তি, ভিসা এবং সামগ্রিক সহায়তায় আমরা আপনার বিশ্বস্ত অংশীদার।',
    'hero-btn-1':     '📅 বিনামূল্যে পরামর্শ নিন',
    'hero-btn-2':     'আমাদের সম্পর্কে জানুন',
    'trust-1':        '৫০০+ সফল শিক্ষার্থী',
    'trust-2':        '৯৮% ভিসা সাফল্য',
    'trust-3':        'বিনামূল্যে প্রাথমিক পরামর্শ',

    /* STATS */
    'stat-1-label':   'সফল শিক্ষার্থী',
    'stat-2-label':   'বিশ্ববিদ্যালয় অংশীদার',
    'stat-3-label':   'ভিসা সাফল্যের হার',
    'stat-4-label':   'বছরের অভিজ্ঞতা',

    /* SERVICES */
    'sec-svc-eye':    'আমাদের সেবা',
    'sec-svc-title':  'আমরা আপনাকে কীভাবে সাহায্য করতে পারি',
    'sec-svc-sub':    'বিশ্ববিদ্যালয় ভর্তি থেকে ভিসা পর্যন্ত — প্রতিটি পদক্ষেপে আমরা আপনার পাশে আছি।',
    'svc-1-title':    'বিশ্ববিদ্যালয় ভর্তি গাইডেন্স',
    'svc-1-desc':     'আপনার একাডেমিক প্রোফাইল ও লক্ষ্য অনুযায়ী সঠিক বিশ্ববিদ্যালয় নির্বাচন এবং সম্পূর্ণ আবেদন প্রক্রিয়ায় সহায়তা।',
    'svc-1-link':     'বিস্তারিত জানুন →',
    'svc-2-title':    'ভিসা আবেদন সহায়তা',
    'svc-2-desc':     'F-1 স্টুডেন্ট ভিসার ডকুমেন্টেশন থেকে ইন্টারভিউ প্রস্তুতি পর্যন্ত সম্পূর্ণ গাইডেন্স।',
    'svc-2-link':     'বিস্তারিত জানুন →',
    'svc-3-title':    'SOP ও রচনা লেখা',
    'svc-3-desc':     'আপনার গল্প সুন্দরভাবে উপস্থাপন করতে পেশাদার SOP এবং অ্যাডমিশন এসে লেখার সহায়তা।',
    'svc-3-link':     'বিস্তারিত জানুন →',
    'svc-4-title':    'স্কলারশিপ সহায়তা',
    'svc-4-desc':     'আপনার যোগ্যতা অনুযায়ী সেরা স্কলারশিপ খুঁজে পেতে এবং আবেদন করতে বিশেষজ্ঞ সহায়তা।',
    'svc-4-link':     'বিস্তারিত জানুন →',

    /* WHY US */
    'sec-why-eye':    'কেন আমরা',
    'sec-why-title':  'কেন Edu Quest Abroad বেছে নেবেন?',
    'sec-why-sub':    'আমরা শুধু পরামর্শ দিই না — আমরা আপনার সাফল্য নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।',
    'feat-1-h':       'অভিজ্ঞ পরামর্শদাতা',
    'feat-1-p':       'যুক্তরাষ্ট্রে উচ্চশিক্ষা সম্পর্কে গভীর জ্ঞান ও বাস্তব অভিজ্ঞতাসম্পন্ন আমাদের বিশেষজ্ঞ টিম।',
    'feat-2-h':       'ব্যক্তিগতকৃত সেবা',
    'feat-2-p':       'প্রতিটি শিক্ষার্থীর জন্য কাস্টম রোডম্যাপ তৈরি করা হয় — কারণ প্রতিটি স্বপ্ন আলাদা।',
    'feat-3-h':       '৯৮% ভিসা সাফল্য',
    'feat-3-p':       'আমাদের শিক্ষার্থীদের ৯৮% সফলভাবে F-1 ভিসা পেয়েছেন — এটাই আমাদের গর্ব।',
    'feat-4-h':       'সাশ্রয়ী মূল্যে সেরা সেবা',
    'feat-4-p':       'সর্বোচ্চ মানের পরামর্শ সেবা সবার জন্য সাশ্রয়ী মূল্যে নিশ্চিত করি আমরা।',
    'card-1-h':       '🎓 নিউ ইয়র্কে ভর্তি',
    'card-1-p':       'রাহেলা পারভীন — Columbia University',
    'card-2-h':       '✈️ স্বপ্নের আমেরিকায়',
    'card-2-p':       'আরিফ হোসেন — University of Michigan',
    'card-3-h':       '🏆 ফুল স্কলারশিপ',
    'card-3-p':       'সুমাইয়া আক্তার — Boston University',

    /* HOW */
    'sec-how-eye':    'প্রক্রিয়া',
    'sec-how-title':  'মাত্র ৩ টি সহজ ধাপে শুরু করুন',
    'sec-how-sub':    'আমাদের সুশৃঙ্খল প্রক্রিয়া আপনার যাত্রাকে সহজ ও নিশ্চিত করে তোলে।',
    'step-1-h':       'যোগাযোগ করুন',
    'step-1-p':       'আমাদের সাথে বিনামূল্যে প্রাথমিক পরামর্শ বুক করুন। আমরা আপনার প্রোফাইল মূল্যায়ন করব।',
    'step-2-h':       'পরিকল্পনা তৈরি',
    'step-2-p':       'আপনার লক্ষ্য, বাজেট ও যোগ্যতা অনুযায়ী একটি কাস্টম অ্যাডমিশন রোডম্যাপ তৈরি করা হবে।',
    'step-3-h':       'সাফল্য অর্জন করুন',
    'step-3-p':       'আমাদের গাইডেন্সে ভিসা থেকে ফ্লাইট পর্যন্ত — স্বপ্নের বিশ্ববিদ্যালয়ে পৌঁছান।',

    /* TESTI */
    'sec-testi-eye':  'সাফল্যের গল্প',
    'sec-testi-title':'আমাদের শিক্ষার্থীরা কী বলেন',
    'sec-testi-sub':  'শত শত বাংলাদেশী শিক্ষার্থীর আমেরিকান স্বপ্ন পূরণে আমরা গর্বিত অংশীদার।',

    /* STATES */
    'sec-states-eye': 'গন্তব্য',
    'sec-states-title':'যুক্তরাষ্ট্রের জনপ্রিয় রাজ্যসমূহ',
    'sec-states-sub': 'বাংলাদেশী শিক্ষার্থীদের পছন্দের শীর্ষ রাজ্যগুলো আবিষ্কার করুন।',
    'state-1-name':   'নিউ ইয়র্ক',
    'state-2-name':   'ক্যালিফোর্নিয়া',
    'state-3-name':   'মিশিগান',
    'state-4-name':   'টেক্সাস',
    'state-5-name':   'ফ্লোরিডা',
    'state-unis':     'বিশ্ববিদ্যালয়',

    /* VIDEO */
    'sec-vid-eye':    'আমাদের যাত্রা',
    'sec-vid-title':  'বাংলাদেশ থেকে আমেরিকার স্বপ্ন',
    'sec-vid-sub':    'আমাদের শিক্ষার্থীদের অনুপ্রেরণামূলক যাত্রা দেখুন এবং আপনার স্বপ্নের পথ খুঁজে নিন।',
    'sec-vid-btn':    'আমাদের সম্পর্কে জানুন',

    /* CTA */
    'sec-cta-eye':    'শুরু করুন আজই',
    'sec-cta-title':  'আপনার আমেরিকান স্বপ্ন শুরু হোক আজই',
    'sec-cta-sub':    'বিনামূল্যে প্রথম পরামর্শ নিন এবং জানুন কীভাবে আমরা আপনার স্বপ্নকে বাস্তবে রূপ দিতে পারি।',
    'sec-cta-btn-1':  '📅 এখনই অ্যাপয়েন্টমেন্ট নিন',
    'sec-cta-btn-2':  'WhatsApp-এ কথা বলুন',

    /* FOOTER */
    'foot-about':     'বাংলাদেশী শিক্ষার্থীদের আমেরিকার শীর্ষ বিশ্ববিদ্যালয়ে ভর্তিতে সহায়তা করা আমাদের মিশন।',
    'foot-links-h':   'দ্রুত লিংক',
    'foot-svc-h':     'আমাদের সেবা',
    'foot-contact-h': 'যোগাযোগ',
    'foot-copy':      '© 2025 Edu Quest Abroad। সর্বস্বত্ব সংরক্ষিত।',
    'foot-made':      'ভালোবাসায় তৈরি বাংলাদেশের জন্য 🇧🇩',
  },

  en: {
    'nav-home':       'Home',
    'nav-about':      'About Us',
    'nav-services':   'Our Services',
    'nav-stories':    'Success Stories',
    'nav-states':     'Top States',
    'nav-contact':    'Contact',
    'nav-cta':        'Free Consultation',

    'hero-badge':     '🇧🇩 From Bangladesh to America',
    'hero-title-1':   'Get Admitted to Top',
    'hero-title-2':   'US Universities',
    'hero-sub':       'We are your trusted partner guiding Bangladeshi students to top American universities — from admissions and visa support to every step of your journey.',
    'hero-btn-1':     '📅 Book Free Consultation',
    'hero-btn-2':     'Learn About Us',
    'trust-1':        '500+ Successful Students',
    'trust-2':        '98% Visa Success Rate',
    'trust-3':        'Free Initial Consultation',

    'stat-1-label':   'Successful Students',
    'stat-2-label':   'University Partners',
    'stat-3-label':   'Visa Success Rate',
    'stat-4-label':   'Years of Experience',

    'sec-svc-eye':    'Our Services',
    'sec-svc-title':  'How We Can Help You',
    'sec-svc-sub':    'From university admissions to visa approvals — we are with you at every step.',
    'svc-1-title':    'University Admission Guidance',
    'svc-1-desc':     'Personalized university selection based on your academic profile and goals, with complete application process support.',
    'svc-1-link':     'Learn More →',
    'svc-2-title':    'Visa Application Support',
    'svc-2-desc':     'Complete guidance from F-1 student visa documentation to interview preparation and approval.',
    'svc-2-link':     'Learn More →',
    'svc-3-title':    'SOP & Essay Writing',
    'svc-3-desc':     'Professional SOP and admission essay writing support to make your application stand out.',
    'svc-3-link':     'Learn More →',
    'svc-4-title':    'Scholarship Assistance',
    'svc-4-desc':     'Expert help finding and applying for the best scholarships matching your academic profile.',
    'svc-4-link':     'Learn More →',

    'sec-why-eye':    'Why Us',
    'sec-why-title':  'Why Choose Edu Quest Abroad?',
    'sec-why-sub':    'We don\'t just advise — we are committed to ensuring your success at every step.',
    'feat-1-h':       'Expert Consultants',
    'feat-1-p':       'Our team has deep knowledge and real experience with US higher education systems.',
    'feat-2-h':       'Personalized Service',
    'feat-2-p':       'A custom roadmap is created for every student — because every dream is unique.',
    'feat-3-h':       '98% Visa Success',
    'feat-3-p':       '98% of our students have successfully received their F-1 visa — that is our pride.',
    'feat-4-h':       'Affordable Excellence',
    'feat-4-p':       'Top-quality consultation services made accessible and affordable for every student.',
    'card-1-h':       '🎓 Admitted to New York',
    'card-1-p':       'Rahela Parveen — Columbia University',
    'card-2-h':       '✈️ Dream of America',
    'card-2-p':       'Arif Hossain — University of Michigan',
    'card-3-h':       '🏆 Full Scholarship',
    'card-3-p':       'Sumaiya Akter — Boston University',

    'sec-how-eye':    'Process',
    'sec-how-title':  'Get Started in Just 3 Easy Steps',
    'sec-how-sub':    'Our structured process makes your journey smooth and certain.',
    'step-1-h':       'Contact Us',
    'step-1-p':       'Book a free initial consultation. We will evaluate your academic profile and goals.',
    'step-2-h':       'Create Your Plan',
    'step-2-p':       'A custom admission roadmap tailored to your goals, budget, and qualifications.',
    'step-3-h':       'Achieve Success',
    'step-3-p':       'From visa to flight — reach your dream university with our complete support.',

    'sec-testi-eye':  'Success Stories',
    'sec-testi-title':'What Our Students Say',
    'sec-testi-sub':  'We are proud partners in fulfilling the American dreams of hundreds of Bangladeshi students.',

    'sec-states-eye': 'Destinations',
    'sec-states-title':'Popular US States for Students',
    'sec-states-sub': 'Discover the top US states preferred by Bangladeshi students.',
    'state-1-name':   'New York',
    'state-2-name':   'California',
    'state-3-name':   'Michigan',
    'state-4-name':   'Texas',
    'state-5-name':   'Florida',
    'state-unis':     'Universities',

    'sec-vid-eye':    'Our Journey',
    'sec-vid-title':  'From Bangladesh to the American Dream',
    'sec-vid-sub':    'Watch our students\' inspiring journeys and find your path to success.',
    'sec-vid-btn':    'Learn About Us',

    'sec-cta-eye':    'Start Today',
    'sec-cta-title':  'Begin Your American Dream Today',
    'sec-cta-sub':    'Get a free first consultation and discover how we can turn your dream into reality.',
    'sec-cta-btn-1':  '📅 Book Appointment Now',
    'sec-cta-btn-2':  'Chat on WhatsApp',

    'foot-about':     'Our mission is to help Bangladeshi students gain admission to top American universities.',
    'foot-links-h':   'Quick Links',
    'foot-svc-h':     'Our Services',
    'foot-contact-h': 'Contact',
    'foot-copy':      '© 2025 Edu Quest Abroad. All Rights Reserved.',
    'foot-made':      'Made with love for Bangladesh 🇧🇩',
  }
};

/* ─── LANGUAGE SYSTEM ─────────────────────────────────────── */
let lang = localStorage.getItem('eqa-lang') || 'bn';

function applyLang(l) {
  lang = l;
  localStorage.setItem('eqa-lang', l);
  document.documentElement.lang = l;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[l] && t[l][key]) el.textContent = t[l][key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[l] && t[l][key]) el.placeholder = t[l][key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === l);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});

/* ─── NAVBAR ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-close');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
  if (window.scrollY > 60) navbar.classList.add('scrolled');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* Active nav link */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });
});

/* ─── HERO CANVAS WORLD MAP ANIMATION ────────────────────── */
class HeroCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.arcs = [];

    /* City positions as [xFraction, yFraction] */
    this.cities = [
      { id: 'dhaka',   x: .72, y: .42, color: '#FF6B35', size: 7 },
      { id: 'ny',      x: .27, y: .31, color: '#FFC82E', size: 5 },
      { id: 'la',      x: .11, y: .36, color: '#FFC82E', size: 5 },
      { id: 'chicago', x: .22, y: .28, color: '#FFC82E', size: 5 },
      { id: 'boston',  x: .30, y: .27, color: '#FFC82E', size: 5 },
      { id: 'houston', x: .20, y: .40, color: '#FFC82E', size: 5 },
      { id: 'michigan',x: .25, y: .28, color: '#FFC82E', size: 5 },
    ];

    /* One arc per US city */
    this.cities.slice(1).forEach((city, i) => {
      this.arcs.push({ from: this.cities[0], to: city, progress: (i / 6), speed: .0018 + i * .0003 });
    });

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.spawnParticles(120);
    this.animate();
  }

  resize() {
    this.canvas.width  = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.spawnParticles(120);
  }

  spawnParticles(n) {
    this.particles = [];
    for (let i = 0; i < n; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        r: Math.random() * 1.4 + .4,
        o: Math.random() * .35 + .1,
        vy: Math.random() * .25 + .06,
      });
    }
  }

  px(frac, axis) { return frac * (axis === 'x' ? this.canvas.width : this.canvas.height); }

  bezierPoint(t, x0, y0, cpX, cpY, x1, y1) {
    const u = 1 - t;
    return {
      x: u * u * x0 + 2 * u * t * cpX + t * t * x1,
      y: u * u * y0 + 2 * u * t * cpY + t * t * y1,
    };
  }

  drawArc(arc) {
    const ctx = this.ctx;
    const x0  = this.px(arc.from.x, 'x'), y0 = this.px(arc.from.y, 'y');
    const x1  = this.px(arc.to.x,   'x'), y1 = this.px(arc.to.y,   'y');
    const cpX = (x0 + x1) / 2;
    const cpY = Math.min(y0, y1) - Math.abs(x1 - x0) * .28;

    ctx.save();

    /* Trail */
    const steps = 60;
    ctx.beginPath();
    for (let i = 0; i <= arc.progress * steps; i++) {
      const p = this.bezierPoint(i / steps, x0, y0, cpX, cpY, x1, y1);
      i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
    }
    ctx.strokeStyle = 'rgba(255,200,46,.45)';
    ctx.lineWidth   = 1.4;
    ctx.stroke();

    /* Moving dot */
    const dot = this.bezierPoint(arc.progress, x0, y0, cpX, cpY, x1, y1);
    const g   = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, 14);
    g.addColorStop(0, 'rgba(255,200,46,.8)');
    g.addColorStop(1, 'rgba(255,200,46,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#FFC82E';
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
    arc.progress = (arc.progress + arc.speed) % 1;
  }

  drawCity(city) {
    const ctx  = this.ctx;
    const x    = this.px(city.x, 'x'), y = this.px(city.y, 'y');
    const t    = Date.now() / 900;
    const ring = 9 + Math.sin(t) * 4;

    ctx.save();
    ctx.strokeStyle = city.color;
    ctx.lineWidth   = 1.5;
    ctx.globalAlpha = .35 + Math.sin(t) * .15;
    ctx.beginPath(); ctx.arc(x, y, ring,     0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = .15 + Math.sin(t+1) * .1;
    ctx.beginPath(); ctx.arc(x, y, ring + 7, 0, Math.PI * 2); ctx.stroke();

    ctx.globalAlpha = 1;
    ctx.fillStyle   = city.color;
    ctx.beginPath(); ctx.arc(x, y, city.size, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  animate() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    /* Particles */
    this.particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.o;
      ctx.fillStyle = 'rgba(255,200,46,.75)';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      p.y += p.vy;
      if (p.y > this.canvas.height) { p.y = 0; p.x = Math.random() * this.canvas.width; }
    });

    /* Arcs + cities */
    this.arcs.forEach(a => this.drawArc(a));
    this.cities.forEach(c => this.drawCity(c));

    requestAnimationFrame(() => this.animate());
  }
}

/* ─── STATS COUNTER ───────────────────────────────────────── */
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const dur    = 1800;
    const step   = 16;
    const inc    = target / (dur / step);
    let cur      = 0;

    const timer = setInterval(() => {
      cur = Math.min(cur + inc, target);
      el.textContent = Math.floor(cur) + suffix;
      if (cur >= target) clearInterval(timer);
    }, step);
  });
}

/* ─── SCROLL REVEAL ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* Counter trigger */
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const sio = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { animateCounters(); sio.disconnect(); }
    }, { threshold: .4 });
    sio.observe(statsBar);
  }
});

/* ─── VIDEO OVERLAY ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('vid-overlay');
  const video   = document.getElementById('hero-video');
  if (overlay && video) {
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      video.controls = true;
      video.play();
    });
  }
});

/* ─── CONTACT FORM ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = '...';

    setTimeout(() => {
      const success = document.getElementById('form-success');
      if (success) { success.style.display = 'block'; }
      form.reset();
      btn.disabled = false;
      btn.textContent = lang === 'bn' ? 'বার্তা পাঠান' : 'Send Message';
    }, 1200);
  });
});

/* ─── INIT CANVAS ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  new HeroCanvas('hero-canvas');
});
