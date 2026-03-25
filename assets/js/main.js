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

    /* PRICING NAV */
    'nav-pricing':    'মূল্য তালিকা',

    /* ABOUT PAGE */
    'about-hero-title': 'আমাদের সম্পর্কে',
    'about-hero-sub':   'বাংলাদেশী শিক্ষার্থীদের আমেরিকান স্বপ্ন পূরণে নিবেদিত একটি বিশ্বস্ত প্রতিষ্ঠান।',
    'about-story-eye':  'আমাদের গল্প',
    'about-story-title':'কীভাবে শুরু হয়েছিল Edu Quest Abroad',
    'about-story-p1':   'Edu Quest Abroad প্রতিষ্ঠিত হয়েছিল একটি সহজ কিন্তু শক্তিশালী স্বপ্ন নিয়ে — প্রতিটি বাংলাদেশী মেধাবী শিক্ষার্থী যেন তাদের আমেরিকান স্বপ্ন পূরণ করতে পারে।',
    'about-story-p2':   'আমাদের প্রতিষ্ঠাতা নিজে বাংলাদেশ থেকে যুক্তরাষ্ট্রে উচ্চশিক্ষার সংগ্রামের মধ্য দিয়ে গেছেন। সেই অভিজ্ঞতা থেকেই জন্ম হয়েছে এই প্রতিষ্ঠানের।',
    'about-story-p3':   'গত ১০+ বছরে আমরা ৫০০-এর বেশি শিক্ষার্থীকে যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়ে ভর্তি করিয়েছি এবং ৯৮% ভিসা সাফল্যের হার বজায় রেখেছি।',
    'about-cta-consult':'বিনামূল্যে পরামর্শ নিন',
    'about-cta-services':'আমাদের সেবা দেখুন',
    'about-mv-eye':     'আমাদের লক্ষ্য',
    'about-mv-title':   'মিশন ও ভিশন',
    'about-mission-h':  'আমাদের মিশন',
    'about-mission-p':  'প্রতিটি বাংলাদেশী শিক্ষার্থীকে সর্বোচ্চ মানের এবং ব্যক্তিগতকৃত শিক্ষা পরামর্শ প্রদান করা, যাতে তারা যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়ে সফলভাবে ভর্তি হতে পারে।',
    'about-vision-h':   'আমাদের ভিশন',
    'about-vision-p':   'একটি এমন বিশ্ব গড়ে তোলা যেখানে বাংলাদেশের প্রতিটি মেধাবী শিক্ষার্থী আর্থিক বা তথ্যগত বাধা ছাড়াই আমেরিকার সেরা বিশ্ববিদ্যালয়গুলোতে পড়াশোনার সুযোগ পাবে।',
    'about-values-eye': 'আমাদের মূল্যবোধ',
    'about-values-title':'আমরা যা বিশ্বাস করি',
    'about-val1-h':     'সততা ও বিশ্বস্ততা',
    'about-val1-p':     'আমরা সবসময় স্বচ্ছ এবং সৎ পরামর্শ দিই। আপনার স্বার্থই আমাদের প্রথম অগ্রাধিকার।',
    'about-val2-h':     'শ্রেষ্ঠত্ব',
    'about-val2-p':     'আমরা প্রতিটি সেবায় সর্বোচ্চ মান বজায় রাখি এবং ক্রমাগত উন্নতির চেষ্টা করি।',
    'about-val3-h':     'সহানুভূতি',
    'about-val3-p':     'আমরা প্রতিটি শিক্ষার্থীর স্বপ্ন ও চ্যালেঞ্জ বুঝি এবং পরিবারের মতো সাপোর্ট দিই।',
    'about-val4-h':     'ফলাফলমুখী',
    'about-val4-p':     'আমরা ফলাফলে বিশ্বাসী। আমাদের ৯৮% সাফল্যের হারই আমাদের প্রতিশ্রুতির প্রমাণ।',
    'about-team-eye':   'আমাদের টিম',
    'about-team-title': 'আমাদের বিশেষজ্ঞ দল',
    'about-team-sub':   'যুক্তরাষ্ট্রে উচ্চশিক্ষার গভীর অভিজ্ঞতাসম্পন্ন আমাদের বিশেষজ্ঞ টিমের সাথে পরিচিত হন।',
    'about-cta-h2':     'আমাদের সাথে যোগাযোগ করুন',
    'about-cta-p':      'আপনার স্বপ্নের বিশ্ববিদ্যালয়ে ভর্তির প্রথম পদক্ষেপ আজই নিন।',

    /* SERVICES PAGE */
    'svc-hero-sub':     'বিশ্ববিদ্যালয় ভর্তি থেকে ভিসা পর্যন্ত — প্রতিটি পদক্ষেপে আমরা আপনার সাথে।',
    'svc-eye-01':       'সেবা ০১',
    'svc-eye-02':       'সেবা ০২',
    'svc-eye-03':       'সেবা ০৩',
    'svc-eye-04':       'সেবা ০৪',
    'svc-consult-btn':  'পরামর্শ নিন',
    'svc-1-detail-p':   'আপনার একাডেমিক প্রোফাইল, GPA, GRE/GMAT স্কোর এবং ক্যারিয়ার লক্ষ্য বিশ্লেষণ করে আমরা আপনার জন্য সেরা বিশ্ববিদ্যালয় তালিকা তৈরি করি।',
    'svc-1-li1':        'বিশ্ববিদ্যালয় গবেষণা ও নির্বাচন',
    'svc-1-li2':        'আবেদনপত্র পূরণ ও জমা',
    'svc-1-li3':        'রেকমেন্ডেশন লেটার গাইডেন্স',
    'svc-1-li4':        'ডেডলাইন ট্র্যাকিং',
    'svc-1-li5':        'অফার লেটার পর্যন্ত সম্পূর্ণ সাপোর্ট',
    'svc-2-detail-p':   'F-1 স্টুডেন্ট ভিসার জন্য সম্পূর্ণ ডকুমেন্টেশন প্রস্তুতি থেকে শুরু করে ভিসা ইন্টারভিউ মক প্র্যাকটিস পর্যন্ত আমরা আপনাকে গাইড করব।',
    'svc-2-li1':        'DS-160 ফর্ম পূরণ সহায়তা',
    'svc-2-li2':        'I-20 যাচাইকরণ',
    'svc-2-li3':        'আর্থিক ডকুমেন্ট প্রস্তুতি',
    'svc-2-li4':        'মক ভিসা ইন্টারভিউ সেশন',
    'svc-2-li5':        'SEVIS রেজিস্ট্রেশন গাইডেন্স',
    'svc-3-detail-p':   'একটি শক্তিশালী Statement of Purpose আপনার ভর্তির সম্ভাবনা বহুগুণ বাড়িয়ে দেয়।',
    'svc-3-li1':        'ব্যক্তিগতকৃত SOP লেখা',
    'svc-3-li2':        'Personal Statement',
    'svc-3-li3':        'Research Proposal',
    'svc-3-li4':        'Cover Letter',
    'svc-3-li5':        'সীমাহীন সংশোধন',
    'svc-4-detail-p':   'আমরা আপনার একাডেমিক প্রোফাইল ও আর্থিক প্রয়োজন বিশ্লেষণ করে সেরা স্কলারশিপ সুযোগ চিহ্নিত করি।',
    'svc-4-li1':        'মেধাভিত্তিক স্কলারশিপ অনুসন্ধান',
    'svc-4-li2':        'ফুল-ফান্ডেড PhD সুযোগ',
    'svc-4-li3':        'TA/RA পজিশন গাইডেন্স',
    'svc-4-li4':        'স্কলারশিপ এসে লেখা',
    'svc-4-li5':        'ফান্ডিং ডেডলাইন ট্র্যাকিং',
    'svc-5-title':      'মক ভিসা ইন্টারভিউ কোচিং',
    'svc-5-desc':       'ওয়ান-টু-ওয়ান মক ইন্টারভিউ, বিশেষজ্ঞ ফিডব্যাক ও আত্মবিশ্বাস গড়ে তোলার মাধ্যমে ভিসা ইন্টারভিউয়ের পূর্ণ প্রস্তুতি।',
    'svc-5-link':       'মূল্য দেখুন →',

    /* MOCK COACHING */
    'mock-eye':         'সেবা ০৫',
    'mock-title':       'মক ভিসা ইন্টারভিউ কোচিং',
    'mock-sub':         'ভিসা ইন্টারভিউয়ে সাফল্যের জন্য ব্যক্তিগতকৃত প্রশিক্ষণ ও মক সেশন।',
    'mock-oto-eye':     'ওয়ান-টু-ওয়ান কাউন্সেলিং',
    'mock-oto-title':   'আপনি যা পাবেন',
    'mock-li1':         'দৈনিক এক্সক্লুসিভ মক ইন্টারভিউ',
    'mock-li2':         'পারফরম্যান্সে মূল্যবান ফিডব্যাক',
    'mock-li3':         'সঠিক উত্তর সংশোধন',
    'mock-li4':         'কথোপকথন দক্ষতা উন্নয়ন',
    'mock-li5':         'ইন্টারভিউয়ারের সাথে সিমুলেটেড অনুশীলন',
    'mock-li6':         'কার্যকর আই কনট্যাক্টের টিপস',
    'mock-li7':         'আত্মবিশ্বাসের সাথে ইন্টারভিউয়ারকে সম্বোধন',
    'mock-li8':         'ইতিবাচক বডি ল্যাঙ্গুয়েজ',
    'mock-li9':         '২৪/৭ সমস্যা সমাধান সহায়তা',
    'mock-li10':        'কাস্টমাইজড Q&A সেশন',
    'mock-pricing-btn': 'মূল্য দেখুন',
    'batch-special-title': 'Special Batch',
    'batch-special-sub':   'প্রিমিয়াম পার্সোনালাইজড প্যাকেজ',
    'batch-sp-li1':     'Personal Mentor',
    'batch-sp-li2':     'Answer Making সহায়তা',
    'batch-sp-li3':     'DS-160 Review',
    'batch-sp-li4':     'ইন্টারভিউ তারিখ পর্যন্ত Mock Practice',
    'batch-sp-li5':     'ICU — ইন্টারভিউর ১৫ দিন আগে দিনে ৩-৪টি মক ইন্টারভিউ',
    'batch-contact-btn':'যোগাযোগ করুন',
    'batch-regular-title': 'Regular Batch',
    'batch-regular-sub':   'সাশ্রয়ী মূল্যে নিয়মিত অনুশীলন',
    'batch-reg-li1':    'সপ্তাহে ৬ দিন Mock Practice',
    'batch-reg-li2':    'বিশেষজ্ঞ Feedback',
    'batch-reg-li3':    'পেশাদার Guidance',
    'batch-reg-li4':    'Mock Test ও ফলাফল বিশ্লেষণ',
    'batch-pricing-btn':'মূল্য দেখুন',

    /* CONTACT PAGE */
    'contact-hero-sub':  'আপনার স্বপ্নের যাত্রা শুরু হোক একটি কথোপকথন দিয়ে — বিনামূল্যে।',
    'contact-info-eye':  'আমাদের সাথে কথা বলুন',
    'contact-info-h3':   'আপনার স্বপ্নের পথে প্রথম পদক্ষেপ নিন',
    'contact-info-p':    'আমাদের অভিজ্ঞ পরামর্শদাতারা আপনার প্রশ্নের উত্তর দিতে এবং আপনার জন্য সেরা পথ নির্ধারণ করতে প্রস্তুত। প্রথম পরামর্শটি সম্পূর্ণ বিনামূল্যে।',
    'contact-phone-h':   'ফোন নম্বর',
    'contact-bd-label':  '(বাংলাদেশ)',
    'contact-email-h':   'ইমেইল',
    'contact-wa-chat':   'সরাসরি চ্যাট করুন',
    'contact-hours-h':   'অফিস সময়',
    'contact-hours-p':   'সোম — শুক্র: সকাল ৯টা — রাত ৯টা\nশনি: সকাল ১০টা — বিকাল ৬টা',
    'contact-form-h':    '📅 বিনামূল্যে পরামর্শ বুক করুন',
    'contact-wa-btn':    'WhatsApp করুন',
    'contact-call-btn':  'এখনই কল করুন',
    'form-name-label':   'আপনার নাম *',
    'form-name-ph':      'পুরো নাম লিখুন',
    'form-email-label':  'ইমেইল *',
    'form-phone-label':  'ফোন নম্বর *',
    'form-interest-label':'আপনি কীসের জন্য আগ্রহী?',
    'form-select-default':'নির্বাচন করুন',
    'form-general-consult':'সাধারণ পরামর্শ',
    'form-edu-label':    'আপনার শিক্ষাগত যোগ্যতা',
    'form-undergrad-ongoing':'স্নাতক (অধ্যয়নরত)',
    'form-undergrad-done':'স্নাতক (সম্পন্ন)',
    'form-masters':      'স্নাতকোত্তর',
    'form-target-label': 'আপনার লক্ষ্য বিশ্ববিদ্যালয় বা রাজ্য (ঐচ্ছিক)',
    'form-target-ph':    'যেমন: University of Michigan, New York...',
    'form-msg-label':    'আপনার বার্তা *',
    'form-msg-ph':       'আপনার প্রশ্ন বা প্রয়োজনীয়তা বিস্তারিত লিখুন...',
    'form-submit-btn':   'বার্তা পাঠান',
    'form-success-msg':  'আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা ২৪ ঘণ্টার মধ্যে যোগাযোগ করব।',

    /* SUCCESS STORIES PAGE */
    'stories-hero-sub':  'শত শত বাংলাদেশী শিক্ষার্থী যারা আমাদের সাথে তাদের আমেরিকান স্বপ্ন পূরণ করেছেন।',
    'stories-eye':       'আমাদের শিক্ষার্থীরা',
    'stories-grid-sub':  'প্রতিটি গল্প একটি স্বপ্নের, একটি সংগ্রামের এবং একটি সাফল্যের।',
    'stories-vid-eye':   'ভিডিও গল্প',
    'stories-vid-title': 'ভিডিও সাক্ষাৎকার শীঘ্রই আসছে',
    'stories-vid-sub':   'আমাদের শিক্ষার্থীদের ভিডিও সাক্ষাৎকার খুব শীঘ্রই যোগ করা হবে। এর মধ্যে তাদের লেখা পড়ুন।',
    'stories-vid-testimonial': 'ভিডিও টেস্টিমোনিয়াল',
    'stories-vid-coming': 'আমাদের সাফল্যের গল্পগুলো শীঘ্রই ভিডিও ফর্ম্যাটে পাওয়া যাবে।',

    /* TOP STATES PAGE */
    'states-hero-sub':   'বাংলাদেশী শিক্ষার্থীদের পছন্দের শীর্ষ আমেরিকান রাজ্যগুলো আবিষ্কার করুন।',
    'states-detail-eye': 'গন্তব্য বেছে নিন',

    /* PRICING PAGE */
    'pricing-hero-title':'সার্ভিস মূল্য তালিকা',
    'pricing-hero-sub':  'স্বচ্ছ মূল্যে সর্বোচ্চ মানের সেবা',
    'pricing-oto-eye':   'ওয়ান-টু-ওয়ান কাউন্সেলিং',
    'pricing-oto-title': 'ব্যক্তিগত কোচিং প্যাকেজ',
    'pricing-oto-sub':   'প্রতিটি সেশনে ব্যক্তিগত মনোযোগ ও পেশাদার গাইডেন্স।',
    'pricing-special-eye':'প্রিমিয়াম',
    'pricing-special-title':'Special Batch',
    'pricing-regular-eye':'নিয়মিত',
    'pricing-regular-title':'Regular Batch',
    'pricing-what-eye':  'সম্পূর্ণ প্যাকেজ',
    'pricing-what-title':'আমরা যা অফার করি',
    'pricing-cta-title': 'বিনামূল্যে পরামর্শ নিন',
    'pricing-cta-btn':   '📅 বিনামূল্যে পরামর্শ নিন',
    'pricing-contact-price': 'যোগাযোগ করুন',

    /* FAQ */
    'faq-eye':  'সাধারণ প্রশ্নাবলী',
    'faq-title':'প্রায়ই জিজ্ঞাসিত প্রশ্ন',
    'faq-q1':   'প্রথম পরামর্শ কি সত্যিই বিনামূল্যে?',
    'faq-a1':   'হ্যাঁ, আমাদের প্রাথমিক পরামর্শ সেশনটি সম্পূর্ণ বিনামূল্যে। এতে আপনার প্রোফাইল মূল্যায়ন, বিশ্ববিদ্যালয় পরামর্শ এবং রোডম্যাপ আলোচনা অন্তর্ভুক্ত।',
    'faq-q2':   'আমি কি অনলাইনে পরামর্শ নিতে পারব?',
    'faq-a2':   'অবশ্যই! আমরা Zoom, Google Meet বা WhatsApp ভিডিও কলের মাধ্যমে অনলাইন পরামর্শ দিই।',
    'faq-q3':   'ভিসা রিজেকশন হলে কি হবে?',
    'faq-a3':   'আমাদের ৯৮% ভিসা সাফল্যের হার রয়েছে। তবে রিজেকশন হলে আমরা বিনামূল্যে পুনরায় আবেদনে সহায়তা করব।',
    'faq-q4':   'কত দিনে প্রক্রিয়া সম্পন্ন হয়?',
    'faq-a4':   'সাধারণত ৩-৬ মাস সময় লাগে। জরুরি ক্ষেত্রে দ্রুত প্রক্রিয়াও সম্পন্ন করা যায়।',

    /* DUOLINGO POPUP */
    'duolingo-btn':      '🦉 Duolingo সম্পর্কে জানুন',
    'duolingo-title':    'Duolingo English Test',
    'duolingo-sub':      'সহজ পথে ইংরেজি দক্ষতা প্রমাণ করুন',

    /* HOME HERO */
    'sec-cta-btn-pricing': '💰 মূল্য দেখুন',
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

    /* PRICING NAV */
    'nav-pricing':    'Pricing',

    /* ABOUT PAGE */
    'about-hero-title': 'About Us',
    'about-hero-sub':   'A trusted institution dedicated to fulfilling the American dreams of Bangladeshi students.',
    'about-story-eye':  'Our Story',
    'about-story-title':'How Edu Quest Abroad Began',
    'about-story-p1':   'Edu Quest Abroad was founded with a simple but powerful dream — that every talented Bangladeshi student should be able to fulfill their American dream.',
    'about-story-p2':   'Our founder personally went through the struggle of pursuing higher education in the USA from Bangladesh. That experience gave birth to this institution.',
    'about-story-p3':   'Over the past 10+ years, we have helped 500+ students gain admission to top US universities while maintaining a 98% visa success rate.',
    'about-cta-consult':'Get Free Consultation',
    'about-cta-services':'View Our Services',
    'about-mv-eye':     'Our Goals',
    'about-mv-title':   'Mission & Vision',
    'about-mission-h':  'Our Mission',
    'about-mission-p':  'To provide the highest quality and personalized education consulting to every Bangladeshi student so they can successfully gain admission to top US universities.',
    'about-vision-h':   'Our Vision',
    'about-vision-p':   'To build a world where every talented Bangladeshi student has the opportunity to study at the best American universities without financial or informational barriers.',
    'about-values-eye': 'Our Values',
    'about-values-title':'What We Believe In',
    'about-val1-h':     'Integrity & Trust',
    'about-val1-p':     'We always provide transparent and honest advice. Your interest is our top priority.',
    'about-val2-h':     'Excellence',
    'about-val2-p':     'We maintain the highest standards in every service and continuously strive to improve.',
    'about-val3-h':     'Empathy',
    'about-val3-p':     'We understand every student\'s dreams and challenges, and support them like family.',
    'about-val4-h':     'Results-Driven',
    'about-val4-p':     'We believe in results. Our 98% success rate is proof of our commitment.',
    'about-team-eye':   'Our Team',
    'about-team-title': 'Our Expert Team',
    'about-team-sub':   'Meet our expert team with deep experience in US higher education.',
    'about-cta-h2':     'Contact Us',
    'about-cta-p':      'Take the first step towards admission to your dream university today.',

    /* SERVICES PAGE */
    'svc-hero-sub':     'From university admissions to visa approvals — we are with you at every step.',
    'svc-eye-01':       'Service 01',
    'svc-eye-02':       'Service 02',
    'svc-eye-03':       'Service 03',
    'svc-eye-04':       'Service 04',
    'svc-consult-btn':  'Get Consultation',
    'svc-1-detail-p':   'We analyze your academic profile, GPA, GRE/GMAT scores, and career goals to build the best university list and manage the complete application process.',
    'svc-1-li1':        'University research & selection',
    'svc-1-li2':        'Application filling & submission',
    'svc-1-li3':        'Recommendation letter guidance',
    'svc-1-li4':        'Deadline tracking',
    'svc-1-li5':        'Complete support until offer letter',
    'svc-2-detail-p':   'We guide you through every step from complete F-1 student visa documentation to mock visa interview practice.',
    'svc-2-li1':        'DS-160 form filling assistance',
    'svc-2-li2':        'I-20 verification',
    'svc-2-li3':        'Financial document preparation',
    'svc-2-li4':        'Mock visa interview sessions',
    'svc-2-li5':        'SEVIS registration guidance',
    'svc-3-detail-p':   'A powerful Statement of Purpose dramatically improves your admission chances. Our expert writers will tell your story in a way that impresses the admission committee.',
    'svc-3-li1':        'Personalized SOP writing',
    'svc-3-li2':        'Personal Statement',
    'svc-3-li3':        'Research Proposal',
    'svc-3-li4':        'Cover Letter',
    'svc-3-li5':        'Unlimited revisions',
    'svc-4-detail-p':   'We analyze your academic profile and financial needs to identify the best scholarship opportunities and guide you to successful applications.',
    'svc-4-li1':        'Merit-based scholarship search',
    'svc-4-li2':        'Fully-funded PhD opportunities',
    'svc-4-li3':        'TA/RA position guidance',
    'svc-4-li4':        'Scholarship essay writing',
    'svc-4-li5':        'Funding deadline tracking',
    'svc-5-title':      'Mock Visa Interview Coaching',
    'svc-5-desc':       'Full visa interview preparation through one-to-one mock interviews, expert feedback, and confidence building.',
    'svc-5-link':       'See Pricing →',

    /* MOCK COACHING */
    'mock-eye':         'Service 05',
    'mock-title':       'Mock Visa Interview Coaching',
    'mock-sub':         'Personalized training and mock sessions for visa interview success.',
    'mock-oto-eye':     'One-to-One Counseling',
    'mock-oto-title':   'What You Get',
    'mock-li1':         'Daily exclusive mock interviews',
    'mock-li2':         'Valuable performance feedback',
    'mock-li3':         'Precise answer corrections',
    'mock-li4':         'Conversational skills enhancement',
    'mock-li5':         'Simulated interviewer interaction',
    'mock-li6':         'Effective eye contact tips',
    'mock-li7':         'Confident addressing of the interviewer',
    'mock-li8':         'Positive body language',
    'mock-li9':         '24/7 problem-solving support',
    'mock-li10':        'Customized Q&A sessions',
    'mock-pricing-btn': 'See Pricing',
    'batch-special-title': 'Special Batch',
    'batch-special-sub':   'Premium personalized package',
    'batch-sp-li1':     'Personal Mentor',
    'batch-sp-li2':     'Answer Making assistance',
    'batch-sp-li3':     'DS-160 Review',
    'batch-sp-li4':     'Mock Practice until interview date',
    'batch-sp-li5':     'ICU — 3-4 mock interviews/day, 15 days before interview',
    'batch-contact-btn':'Contact Us',
    'batch-regular-title': 'Regular Batch',
    'batch-regular-sub':   'Affordable regular practice',
    'batch-reg-li1':    '6 days mock practice/week',
    'batch-reg-li2':    'Expert Feedback',
    'batch-reg-li3':    'Professional Guidance',
    'batch-reg-li4':    'Mock Test & result analysis',
    'batch-pricing-btn':'See Pricing',

    /* CONTACT PAGE */
    'contact-hero-sub':  'Let your dream journey begin with a conversation — for free.',
    'contact-info-eye':  'Talk to Us',
    'contact-info-h3':   'Take the First Step Towards Your Dream',
    'contact-info-p':    'Our experienced consultants are ready to answer your questions and determine the best path for you. The first consultation is completely free.',
    'contact-phone-h':   'Phone Number',
    'contact-bd-label':  '(Bangladesh)',
    'contact-email-h':   'Email',
    'contact-wa-chat':   'Chat directly',
    'contact-hours-h':   'Office Hours',
    'contact-hours-p':   'Mon — Fri: 9 AM — 9 PM\nSat: 10 AM — 6 PM',
    'contact-form-h':    '📅 Book Free Consultation',
    'contact-wa-btn':    'WhatsApp Us',
    'contact-call-btn':  'Call Now',
    'form-name-label':   'Your Name *',
    'form-name-ph':      'Enter full name',
    'form-email-label':  'Email *',
    'form-phone-label':  'Phone Number *',
    'form-interest-label':'What are you interested in?',
    'form-select-default':'Select',
    'form-general-consult':'General Consultation',
    'form-edu-label':    'Your Educational Qualification',
    'form-undergrad-ongoing':'Undergraduate (Ongoing)',
    'form-undergrad-done':'Undergraduate (Completed)',
    'form-masters':      'Postgraduate',
    'form-target-label': 'Target University or State (Optional)',
    'form-target-ph':    'e.g., University of Michigan, New York...',
    'form-msg-label':    'Your Message *',
    'form-msg-ph':       'Please describe your questions or requirements in detail...',
    'form-submit-btn':   'Send Message',
    'form-success-msg':  'Your message has been sent successfully! We will contact you within 24 hours.',

    /* SUCCESS STORIES PAGE */
    'stories-hero-sub':  'Hundreds of Bangladeshi students who fulfilled their American dreams with us.',
    'stories-eye':       'Our Students',
    'stories-grid-sub':  'Every story is a dream, a struggle, and a success.',
    'stories-vid-eye':   'Video Stories',
    'stories-vid-title': 'Video Interviews Coming Soon',
    'stories-vid-sub':   'Video interviews of our students will be added very soon. In the meantime, read their written stories.',
    'stories-vid-testimonial': 'Video Testimonials',
    'stories-vid-coming': 'Our success stories will soon be available in video format.',

    /* TOP STATES PAGE */
    'states-hero-sub':   'Discover the top American states preferred by Bangladeshi students.',
    'states-detail-eye': 'Choose Your Destination',

    /* PRICING PAGE */
    'pricing-hero-title':'Service Pricing',
    'pricing-hero-sub':  'Top quality services at transparent prices',
    'pricing-oto-eye':   'One-to-One Counseling',
    'pricing-oto-title': 'Personal Coaching Packages',
    'pricing-oto-sub':   'Personal attention and professional guidance in every session.',
    'pricing-special-eye':'Premium',
    'pricing-special-title':'Special Batch',
    'pricing-regular-eye':'Regular',
    'pricing-regular-title':'Regular Batch',
    'pricing-what-eye':  'Complete Package',
    'pricing-what-title':'What We Offer',
    'pricing-cta-title': 'Get Free Consultation',
    'pricing-cta-btn':   '📅 Book Free Consultation',
    'pricing-contact-price': 'Contact Us',

    /* FAQ */
    'faq-eye':  'Common Questions',
    'faq-title':'Frequently Asked Questions',
    'faq-q1':   'Is the first consultation really free?',
    'faq-a1':   'Yes, our initial consultation session is completely free. It includes profile evaluation, university recommendations, and roadmap discussion.',
    'faq-q2':   'Can I get consultation online?',
    'faq-a2':   'Of course! We provide online consultations via Zoom, Google Meet, or WhatsApp video call.',
    'faq-q3':   'What happens if the visa is rejected?',
    'faq-a3':   'We have a 98% visa success rate. However, if rejection occurs for any reason, we will assist with re-application free of charge.',
    'faq-q4':   'How long does the process take?',
    'faq-a4':   'It generally takes 3-6 months depending on university deadlines. In urgent cases, we can complete the process faster.',

    /* DUOLINGO POPUP */
    'duolingo-btn':      '🦉 Learn about Duolingo',
    'duolingo-title':    'Duolingo English Test',
    'duolingo-sub':      'Prove your English proficiency the easy way',

    /* HOME HERO */
    'sec-cta-btn-pricing': '💰 See Pricing',
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

/* ─── DUOLINGO POPUP ──────────────────────────────────────── */
(function() {
  const POPUP_HTML = `
  <div id="duolingo-popup-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;align-items:center;justify-content:center;">
    <div id="duolingo-popup" role="dialog" aria-modal="true" style="background:white;border-radius:24px;max-width:520px;width:92%;padding:40px 36px;position:relative;box-shadow:0 24px 80px rgba(0,0,0,.28);animation:duoFadeIn .35s ease;">
      <button id="duolingo-close" aria-label="Close" style="position:absolute;top:16px;right:20px;font-size:1.4rem;background:none;border:none;cursor:pointer;color:#777;line-height:1;">✕</button>
      <div style="text-align:center;margin-bottom:24px;">
        <div style="font-size:3.2rem;margin-bottom:10px;">🦉</div>
        <h2 id="duo-popup-title" style="font-size:1.45rem;font-weight:800;color:#6A0032;margin-bottom:6px;">Duolingo English Test</h2>
        <p id="duo-popup-sub" style="color:#555;font-size:.92rem;">সহজ পথে ইংরেজি দক্ষতা প্রমাণ করুন</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:28px;">
        <div style="display:flex;gap:14px;align-items:flex-start;">
          <span style="font-size:1.3rem;flex-shrink:0;">⏱️</span>
          <div><strong style="color:#6A0032;">কম সময়সাপেক্ষ</strong><br/><span style="color:#666;font-size:.87rem;">IELTS-এর তুলনায় মাত্র ১ ঘণ্টায় পরীক্ষা সম্পন্ন হয়।</span></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;">
          <span style="font-size:1.3rem;flex-shrink:0;">✅</span>
          <div><strong style="color:#6A0032;">IELTS-এর চেয়ে সহজ</strong><br/><span style="color:#666;font-size:.87rem;">প্রস্তুতি সহজ এবং পরীক্ষার ধাঁচ সহজবোধ্য।</span></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;">
          <span style="font-size:1.3rem;flex-shrink:0;">📚</span>
          <div><strong style="color:#6A0032;">সহজ প্রস্তুতি</strong><br/><span style="color:#666;font-size:.87rem;">বিনামূল্যে অনুশীলন ম্যাটেরিয়াল ও স্যাম্পল প্রশ্ন পাওয়া যায়।</span></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;">
          <span style="font-size:1.3rem;flex-shrink:0;">🏠</span>
          <div><strong style="color:#6A0032;">ঘরে বসে পরীক্ষা দিন</strong><br/><span style="color:#666;font-size:.87rem;">যেকোনো কম্পিউটার ও ওয়েবক্যাম দিয়ে ঘরে বসেই পরীক্ষা দেওয়া যায়।</span></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;">
          <span style="font-size:1.3rem;flex-shrink:0;">⚡</span>
          <div><strong style="color:#6A0032;">দ্রুত ফলাফল</strong><br/><span style="color:#666;font-size:.87rem;">মাত্র ২ দিনের মধ্যে ফলাফল পাওয়া যায়।</span></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;">
          <span style="font-size:1.3rem;flex-shrink:0;">🎓</span>
          <div><strong style="color:#6A0032;">US বিশ্ববিদ্যালয়ে গ্রহণযোগ্য</strong><br/><span style="color:#666;font-size:.87rem;">৫,০০০-এর বেশি বিশ্ববিদ্যালয় ও প্রোগ্রাম Duolingo English Test স্কোর গ্রহণ করে।</span></div>
        </div>
      </div>
      <div style="text-align:center;">
        <a href="contact.html" class="btn btn-gold btn-lg" style="margin-right:10px;display:inline-flex;align-items:center;gap:8px;" id="duo-cta-btn">📅 আরো জানুন</a>
      </div>
    </div>
  </div>`;

  document.addEventListener('DOMContentLoaded', () => {
    /* Inject popup HTML */
    document.body.insertAdjacentHTML('beforeend', POPUP_HTML);

    /* Inject floating trigger button */
    const triggerBtn = document.createElement('button');
    triggerBtn.id = 'duolingo-trigger';
    triggerBtn.className = 'duolingo-float-btn';
    triggerBtn.setAttribute('data-i18n', 'duolingo-btn');
    triggerBtn.innerHTML = '🦉 <span>Duolingo</span>';
    document.body.appendChild(triggerBtn);

    const overlay = document.getElementById('duolingo-popup-overlay');
    const closeBtn = document.getElementById('duolingo-close');

    function openPopup() {
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    function closePopup() {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      sessionStorage.setItem('eqa-duo-seen', '1');
    }

    triggerBtn.addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closePopup(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePopup(); });

    /* Auto-show once per session (after 8s) */
    if (!sessionStorage.getItem('eqa-duo-seen')) {
      setTimeout(openPopup, 8000);
    }
  });
})();
