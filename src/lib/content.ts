// All page wording, in English and Hindi. Edit the text here and both languages stay in sync.
// English pages live at /about, /our-packages … and the Hindi versions at /hi/about, /hi/our-packages …
import type { PackageId } from "./site";

export type PackageContent = {
  id: PackageId;
  title: string;
  tag?: string;
  highlights: string[];
  features: string[];
};

const en = {
  code: "en",
  htmlLang: "en",
  nativeName: "English",
  switchTo: "हिंदी",

  nav: {
    home: "Home",
    about: "About",
    packages: "Our Packages",
    blog: "Blog",
    terms: "Terms & Conditions",
    contact: "Contact Us",
    privacy: "Privacy Policy",
  },

  cta: {
    freeTrial: "Free Trial",
    startTrial: "Start {trial}",
    viewPackages: "View packages",
    talkToExpert: "Talk to an expert",
    enquireNow: "Enquire Now",
    payNow: "Pay now",
    backHome: "Back to home",
    contactUs: "Contact us",
    readMore: "Read article",
  },

  ticker: { live: "LIVE", closed: "MARKET", loading: "Loading market data…", unavailable: "Market data is unavailable right now." },

  market: {
    open: "Market open",
    closed: "Market closed",
    updated: "Updated {time} IST",
    prevClose: "Prev. close",
    dayHigh: "Day high",
    dayLow: "Day low",
    note: "Data may be delayed. For information only — not investment advice.",
    unavailable: "Live market data is unavailable right now. Please check back soon.",
    loading: "Loading market data",
  },

  form: {
    title: "Contact Us",
    subtitle: "Leave your details and our experts will call you back.",
    callbackTitle: "Request a callback",
    packageLabel: "Package",
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    phone: "Phone Number",
    phonePlaceholder: "10 digit mobile number",
    phoneTitle: "Enter a 10 digit mobile number",
    subject: "Subject",
    subjectPlaceholder: "How can we help?",
    segment: "In which segment do you wish to trade?",
    investment: "How much do you wish to invest?",
    choose: "Choose Option",
    submit: "Submit",
    sending: "Sending...",
    success: "Thank You! We will get in touch with you shortly.",
    lastName: "Last name",
    lastNamePlaceholder: "Your last name",
    yourEmail: "Your email",
    yourEmailPlaceholder: "Your email address",
    message: "Message",
    messagePlaceholder: "Enter your message",
    messageSuccess: "Thank You!",
    messageNamePlaceholder: "Your name",
    segmentLabels: {
      Nifty: "Nifty",
      "Bank Nifty": "Bank Nifty",
      Equity: "Equity",
      Commodity: "Commodity",
      "Stock Option": "Stock Option",
    } as Record<string, string>,
    investmentLabels: {
      "Up to Rs. 50,000": "Up to Rs. 50,000",
      "Rs. 50,000 – 1,00,000": "Rs. 50,000 – 1,00,000",
      "Above Rs. 1,00,000": "Above Rs. 1,00,000",
      "Above Rs. 3,00,000": "Above Rs. 3,00,000",
      "Above Rs. 5,00,000": "Above Rs. 5,00,000",
      "Above Rs. 10,00,000": "Above Rs. 10,00,000",
    } as Record<string, string>,
  },

  cookie: {
    text: "This website uses cookies to provide necessary site functionality and to improve your experience. By using this website, you agree to our use of cookies.",
    accept: "Accept",
    decline: "Decline",
  },

  home: {
    metaTitle: "Unlock the Power of Stock Market",
    metaDescription:
      "Take control of your financial future with {name}. Start investing in the stock market today and unlock the potential for wealth creation.",
    eyebrow: "Stock market advisory",
    headline: "Invest for a more comfortable life,",
    headlineAccent: "invest for a happier life",
    lead: "Expert-guided calls for NIFTY, Bank NIFTY, equity, F&O and commodities — each with a clear target and stop-loss, so you always know your plan.",
    points: ["Target & stop-loss on every call", "Support on call & WhatsApp"],
    featuresTitle: ["Certified consultants", "Ideation actualized", "Experienced analysts", "Customer support"],
    servicesEyebrow: "Our services",
    servicesTitle: "What we",
    servicesTitleAccent: "bring to you",
    servicesLead: "Advisory across every major segment of the Indian stock market.",
    services: [
      {
        title: "Stock Option Tips",
        text: "With our tried and true share market methodology, we help you strategize your investments to attain financial independence.",
      },
      {
        title: "HNI Equity Tips",
        text: "Dedicated equity advice from our share market experts, designed for high-net-worth investors.",
      },
      {
        title: "Stock Future Tips",
        text: "Our stock advice makes investing simple — trade futures with a clear plan to make the most of every move.",
      },
      {
        title: "Index Options",
        text: "Daily NIFTY and Bank NIFTY levels so you can trade the indices with confidence.",
      },
      {
        title: "Audit & Assurance",
        text: "The right share market guidance for intraday trading, helping you improve your profitability.",
      },
      {
        title: "Strategic planning",
        text: "A tested methodology to plan your investments and build towards financial independence.",
      },
    ],
    bannerLine1: "A wise investment",
    bannerLine2: "always results in a better future",
    statsEyebrow: "Track record",
    statsTitle: "Number speaks",
    statsTitleAccent: "everything",
    stats: ["Accuracy", "Trusted Customers", "Client Satisfaction"],
    whyEyebrow: "Why choose us?",
    whyTitle: "We know,",
    whyTitleAccent: "we do",
    whyText:
      "We at {name} assist each of our clients in becoming financially independent. With our seamless and tested services, regardless of any personal characteristics, our ideals drive us to provide the best services to every client. In the stock market, we live by the mantra “low risk, high profits.”",
    whyImageAlt: "Stock market app on a smartphone",
    ctaEyebrow: "Get started",
    ctaTitle: "Start your",
    ctaText: "Experience our calls and support before you subscribe. Share your details and our team will set up your trial.",
    ctaPerks: [
      "NIFTY, Bank NIFTY, equity, F&O and commodity calls",
      "A clear target and stop-loss with every call",
      "Help on call, email and WhatsApp",
    ],
  },

  about: {
    metaTitle: "Unbiased Technical Analysis for the Trading Community",
    metaDescription:
      "Our organization offers unbiased technical analysis by experienced professionals to the trading community, providing the best stock market guidance for intraday trading.",
    bannerEyebrow: "About us",
    bannerTitle: "About",
    bannerSubtitle: "Unbiased technical analysis by experienced professionals, for every trader.",
    introEyebrow: "Who we are",
    introTitle: "Have the",
    introTitleAccent: "wise choice",
    introTitleEnd: "of investment",
    introText:
      "The organization was established with the purpose of offering unbiased technical analysis to the trading community by experienced professionals, in order to create a favorable environment and deliver the best share market recommendations. Get the best stock market guidance for intraday trading when you invest in the stock market — we can help you increase your profit margins. Using our established methods, we help you with option tips and index option tips in the stock market.",
    introImageAlt: "Trading charts on a laptop",
    strategyEyebrow: "Our approach",
    strategyTitle: "A better",
    strategyTitleAccent: "business strategy",
    strengths: [
      "Committed to enhancing your net worth",
      "Unmatched service, satisfaction & transparency",
      "Built on a legacy of trust",
      "Better long-term returns",
    ],
    visionEyebrow: "Vision · Mission · Strategy",
    visionText:
      "To expand alongside our clients by acquiring significant global experts and establishing {name} as the best research firm. Our management team has a diverse set of skills, ensuring that our clients receive value-added services. Our goal is to form genuine relationships with a select group of clients by offering consistent, high-quality service.",
  },

  packages: {
    metaTitle: "Invest in Stocks with Us",
    metaDescription:
      "{name} provides valuable insights and tools to help you make informed investment decisions. Explore our packages and start investing today!",
    bannerEyebrow: "Pricing",
    bannerTitle: "Our",
    bannerTitleAccent: "packages",
    bannerSubtitle: "We provide a variety of plans to suit everyone's needs.",
    eyebrow: "How we charge",
    title: "Choose the plan that",
    titleAccent: "fits your trading",
    lead: "The state of the stock market is the first thing you should evaluate before entering a trade. Determine whether the market is trending or fluctuating — if it is trending, prices will be moving higher or lower.",
    perMonth: "/ month + GST",
    note: "All prices are per month and exclusive of GST. Not sure which plan suits you?",
    hniTag: "For HNIs",
    enquiryTitle: "Enquire about this package",
    helpTitle: "Ask about our packages",
    helpSubject: "Help choosing a package",
    items: [
      {
        id: "equity-cash-12000",
        title: "Equity Cash Trading",
        highlights: ["Intraday", "1 tip per day"],
        features: [
          "Proper target & stop loss",
          "Profit target: Rs. 2,000 – 5,000 per positive tip",
          "Daily tips with up to 80% accuracy",
        ],
      },
      {
        id: "intraday-18000",
        title: "Intraday Trading",
        highlights: ["Intraday", "1 tip per day"],
        features: [
          "Proper target & stop loss",
          "Profit target: Rs. 5,000 – 8,000 per positive tip",
          "Daily tips with up to 85% accuracy",
        ],
      },
      {
        id: "equity-cash-25000",
        title: "Equity Cash Trading",
        highlights: ["Intraday + BTST", "1–2 tips per day"],
        features: [
          "Proper target & stop loss",
          "Profit target: Rs. 8,000 – 12,000 per positive tip",
          "Daily tips with up to 85% accuracy",
        ],
      },
      {
        id: "option-intraday-equity-35000",
        title: "Option, Intraday, Equity",
        tag: "For HNIs",
        highlights: ["Options · Intraday · Equity", "1 tip per day"],
        features: [
          "Proper target & stop loss (reversal trade)",
          "Profit target: Rs. 5,000 – 10,000 per positive tip",
          "Daily tips with up to 85% accuracy",
          "Zero to Hero call (expiry)",
        ],
      },
      {
        id: "premium-option-75000",
        title: "Premium Option Trading",
        highlights: ["Nifty / Bank Nifty", "1 tip per day"],
        features: [
          "Proper target & stop loss (reversal trade)",
          "Profit target: Rs. 10,000 – 15,000 per positive tip",
          "Daily tips with up to 85% accuracy",
        ],
      },
      {
        id: "intraday-150000",
        title: "Intraday Trading",
        highlights: ["Stock / Future", "1 tip per day"],
        features: [
          "Proper target & stop loss",
          "Profit target: Rs. 20,000 – 25,000 per positive tip",
          "Daily tips with up to 90% accuracy",
        ],
      },
      {
        id: "hni-500000",
        title: "HNI Trading",
        tag: "For HNIs",
        highlights: ["3–5 tips per day"],
        features: [
          "Proper target & stop loss (reversal trade)",
          "Profit target: Rs. 35,000 – 40,000 per positive tip",
          "Daily tips with 85% accuracy",
          "Zero to Hero call (expiry)",
        ],
      },
    ] as PackageContent[],
  },

  contact: {
    metaTitle: "Contact Us to Grow in the Stock Market",
    metaDescription:
      "Get in touch with us to learn about the benefits of investing in the stock market. Our team of experts is here to assist you.",
    bannerEyebrow: "Contact",
    bannerTitle: "Contact",
    bannerTitleAccent: "us",
    bannerSubtitle: "Our {name} team is always ready to help.",
    eyebrow: "Get in touch",
    title: "Connect",
    titleAccent: "with us",
    lead: "Give us a call, message us on WhatsApp, send an email, or fill out the form.",
    callUs: "Call us",
    whatsapp: "WhatsApp",
    whatsappValue: "Chat with our team",
    emailLabel: "Email",
    addressLabel: "Office address",
    teamEyebrow: "Our team",
    teamTitle: "We are available for you",
    teamTitleAccent: "every time",
    mapTitle: "Office location on Google Maps",
  },

  terms: {
    metaTitle: "Terms & Conditions",
    metaDescription:
      "At {name}, we provide a comprehensive platform to demystify the complexities of the stock market and investment strategies.",
    bannerEyebrow: "Legal",
    bannerTitle: "Terms &",
    bannerTitleAccent: "Conditions",
    bannerSubtitle: "Please read these terms before subscribing.",
    seeAlso: "See also our",
    privacyLink: "Privacy policy",
    sections: [
      {
        heading: "Terms & Conditions",
        points: [
          "Investing in securities carries market risk — we do not promise profits or fixed returns.",
          "Fees are accepted only in the company's name, never into a personal bank account.",
          "Every call includes a target and stop-loss; placing the trade remains the client's own decision.",
        ],
      },
      {
        heading: "Refund Policy",
        points: ["A {trial} lets you evaluate the service first, so subscription payments are non-refundable."],
      },
      {
        heading: "Disclosure",
        points: [
          "We receive no compensation from product issuers or intermediaries, and our analysts do not trade on their own account.",
          "Past performance does not guarantee future results; treat all tips as opinions and trade within your own risk appetite.",
          "Only written communication from us counts as official advice.",
        ],
      },
    ],
  },

  privacy: {
    metaTitle: "Privacy Policy",
    bannerEyebrow: "Legal",
    bannerTitle: "Privacy",
    bannerTitleAccent: "Policy",
    effective: "Effective Date: {date}",
    contactHeading: "8. Contact Us",
    contactText: "Questions about this policy? Email us at",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "Contact details you share with us (name, email, phone), technical data collected automatically (IP address, browser, pages visited) and limited payment details when you buy a service.",
      },
      {
        heading: "2. Use of Your Information",
        text: "To provide our services, process payments, reply to your enquiries and improve the website.",
      },
      {
        heading: "3. Disclosure of Your Information",
        text: "Only where required by law, to protect rights and safety, during a business transfer, or with partners who help us deliver our services. Enquiries submitted through this website are stored in Google Sheets.",
      },
      {
        heading: "4. Security of Your Information",
        text: "We use reasonable safeguards to protect your data, but no system is completely secure.",
      },
      { heading: "5. Policy for Children", text: "We do not knowingly collect information from children under 13." },
      {
        heading: "6. Controls for Do-Not-Track Features",
        text: "We do not currently respond to Do-Not-Track browser signals.",
      },
      {
        heading: "7. Options Regarding Your Information",
        text: "You can opt out of our emails at any time by contacting us.",
      },
    ],
  },

  blog: {
    metaTitle: "Market Insights",
    metaDescription: "Stock market insights, trading basics and updates from the {name} research desk.",
    bannerEyebrow: "Blog",
    bannerTitle: "Market",
    bannerTitleAccent: "insights",
    bannerSubtitle: "Trading basics, market views and updates from our research desk.",
    empty: "No articles yet. Please check back soon.",
    backToBlog: "All articles",
    minRead: "min read",
    author: "{name} research desk",
    ctaTitle: "Want calls like these on your phone?",
    ctaText: "Start your {trial} and see how our research desk works.",
  },

  notFound: {
    metaTitle: "Page not found",
    code: "404",
    title: "This page went off the charts",
    text: "The page you are looking for doesn't exist or has been moved.",
  },

  error: {
    title: "Something went wrong",
    text: "We could not load this page. Please try again, or contact us if it keeps happening.",
    retry: "Try again",
  },

  skipToContent: "Skip to content",
  lastUpdated: "Last updated: {date}",

  footer: {
    quickLinks: "Quick links",
    contact: "Contact",
    getInTouch: "Get in",
    getInTouchAccent: "touch",
    chatOnWhatsApp: "Chat on WhatsApp",
    sebi: "SEBI Registration No.:",
    rights: "All rights reserved.",
    sitePolicy: "Site policy",
    designedBy: "Designed by",
  },
};

export type Dictionary = typeof en;

const hi: Dictionary = {
  code: "hi",
  htmlLang: "hi",
  nativeName: "हिंदी",
  switchTo: "English",

  nav: {
    home: "होम",
    about: "हमारे बारे में",
    packages: "हमारे पैकेज",
    blog: "ब्लॉग",
    terms: "नियम एवं शर्तें",
    contact: "संपर्क करें",
    privacy: "गोपनीयता नीति",
  },

  cta: {
    freeTrial: "फ्री ट्रायल",
    startTrial: "{trial} शुरू करें",
    viewPackages: "पैकेज देखें",
    talkToExpert: "विशेषज्ञ से बात करें",
    enquireNow: "अभी पूछताछ करें",
    payNow: "अभी भुगतान करें",
    backHome: "होम पर जाएँ",
    contactUs: "संपर्क करें",
    readMore: "लेख पढ़ें",
  },

  ticker: {
    live: "लाइव",
    closed: "बाज़ार",
    loading: "बाज़ार का डेटा लोड हो रहा है…",
    unavailable: "बाज़ार का डेटा अभी उपलब्ध नहीं है।",
  },

  market: {
    open: "बाज़ार खुला है",
    closed: "बाज़ार बंद है",
    updated: "अपडेट {time} IST",
    prevClose: "पिछला बंद",
    dayHigh: "दिन का उच्चतम",
    dayLow: "दिन का निम्नतम",
    note: "डेटा में देरी हो सकती है। केवल जानकारी के लिए — यह निवेश सलाह नहीं है।",
    unavailable: "लाइव बाज़ार डेटा अभी उपलब्ध नहीं है। कृपया थोड़ी देर बाद देखें।",
    loading: "बाज़ार का डेटा लोड हो रहा है",
  },

  form: {
    title: "संपर्क करें",
    subtitle: "अपनी जानकारी भेजें, हमारे विशेषज्ञ आपको कॉल करेंगे।",
    callbackTitle: "कॉलबैक का अनुरोध करें",
    packageLabel: "पैकेज",
    name: "नाम",
    namePlaceholder: "आपका पूरा नाम",
    email: "ईमेल",
    emailPlaceholder: "you@example.com",
    phone: "मोबाइल नंबर",
    phonePlaceholder: "10 अंकों का मोबाइल नंबर",
    phoneTitle: "10 अंकों का मोबाइल नंबर डालें",
    subject: "विषय",
    subjectPlaceholder: "हम आपकी किस तरह मदद करें?",
    segment: "आप किस सेगमेंट में ट्रेड करना चाहते हैं?",
    investment: "आप कितना निवेश करना चाहते हैं?",
    choose: "विकल्प चुनें",
    submit: "भेजें",
    sending: "भेजा जा रहा है...",
    success: "धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।",
    lastName: "उपनाम",
    lastNamePlaceholder: "आपका उपनाम",
    yourEmail: "आपका ईमेल",
    yourEmailPlaceholder: "आपका ईमेल पता",
    message: "संदेश",
    messagePlaceholder: "अपना संदेश लिखें",
    messageSuccess: "धन्यवाद!",
    messageNamePlaceholder: "आपका नाम",
    segmentLabels: {
      Nifty: "निफ्टी",
      "Bank Nifty": "बैंक निफ्टी",
      Equity: "इक्विटी",
      Commodity: "कमोडिटी",
      "Stock Option": "स्टॉक ऑप्शन",
    },
    investmentLabels: {
      "Up to Rs. 50,000": "₹50,000 तक",
      "Rs. 50,000 – 1,00,000": "₹50,000 – 1,00,000",
      "Above Rs. 1,00,000": "₹1,00,000 से अधिक",
      "Above Rs. 3,00,000": "₹3,00,000 से अधिक",
      "Above Rs. 5,00,000": "₹5,00,000 से अधिक",
      "Above Rs. 10,00,000": "₹10,00,000 से अधिक",
    },
  },

  cookie: {
    text: "यह वेबसाइट ज़रूरी सुविधाओं और आपके अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग करती है। इस वेबसाइट का उपयोग करके आप कुकीज़ के उपयोग से सहमत होते हैं।",
    accept: "स्वीकार करें",
    decline: "अस्वीकार करें",
  },

  home: {
    metaTitle: "शेयर बाज़ार की ताकत को समझें",
    metaDescription:
      "{name} के साथ अपने आर्थिक भविष्य की कमान संभालें। आज ही शेयर बाज़ार में निवेश शुरू करें और संपत्ति बनाने की राह पर बढ़ें।",
    eyebrow: "शेयर बाज़ार सलाहकार",
    headline: "बेहतर जीवन के लिए निवेश करें,",
    headlineAccent: "खुशहाल जीवन के लिए निवेश करें",
    lead: "निफ्टी, बैंक निफ्टी, इक्विटी, एफ एंड ओ और कमोडिटी के लिए विशेषज्ञों की कॉल — हर कॉल में साफ़ टारगेट और स्टॉप-लॉस, ताकि आपकी योजना हमेशा स्पष्ट रहे।",
    points: ["हर कॉल में टारगेट और स्टॉप-लॉस", "कॉल और व्हाट्सएप पर सहायता"],
    featuresTitle: ["प्रमाणित सलाहकार", "सोच को साकार करना", "अनुभवी विश्लेषक", "ग्राहक सहायता"],
    servicesEyebrow: "हमारी सेवाएँ",
    servicesTitle: "हम आपके लिए",
    servicesTitleAccent: "क्या लाते हैं",
    servicesLead: "भारतीय शेयर बाज़ार के हर प्रमुख सेगमेंट में सलाह।",
    services: [
      {
        title: "स्टॉक ऑप्शन टिप्स",
        text: "हमारी परखी हुई शेयर बाज़ार पद्धति से हम आपके निवेश की रणनीति बनाने में मदद करते हैं, ताकि आप आर्थिक रूप से आत्मनिर्भर बनें।",
      },
      {
        title: "एचएनआई इक्विटी टिप्स",
        text: "हमारे शेयर बाज़ार विशेषज्ञों से समर्पित इक्विटी सलाह, जो बड़े निवेशकों के लिए तैयार की गई है।",
      },
      {
        title: "स्टॉक फ्यूचर टिप्स",
        text: "हमारी सलाह से निवेश आसान हो जाता है — साफ़ योजना के साथ फ्यूचर्स में ट्रेड करें।",
      },
      {
        title: "इंडेक्स ऑप्शंस",
        text: "रोज़ाना निफ्टी और बैंक निफ्टी के स्तर, ताकि आप भरोसे के साथ इंडेक्स में ट्रेड कर सकें।",
      },
      {
        title: "ऑडिट और एश्योरेंस",
        text: "इंट्राडे ट्रेडिंग के लिए सही शेयर बाज़ार मार्गदर्शन, जो आपकी लाभप्रदता बेहतर करने में मदद करता है।",
      },
      {
        title: "रणनीतिक योजना",
        text: "आपके निवेश की योजना बनाने और आर्थिक आत्मनिर्भरता की ओर बढ़ने के लिए परखी हुई पद्धति।",
      },
    ],
    bannerLine1: "समझदारी से किया गया निवेश",
    bannerLine2: "हमेशा बेहतर भविष्य देता है",
    statsEyebrow: "हमारा रिकॉर्ड",
    statsTitle: "आंकड़े ही",
    statsTitleAccent: "सब कहते हैं",
    stats: ["सटीकता", "भरोसेमंद ग्राहक", "ग्राहक संतुष्टि"],
    whyEyebrow: "हमें क्यों चुनें?",
    whyTitle: "हम जानते हैं,",
    whyTitleAccent: "हम करते हैं",
    whyText:
      "{name} में हम अपने हर ग्राहक को आर्थिक रूप से आत्मनिर्भर बनाने में मदद करते हैं। हमारी सहज और परखी हुई सेवाओं के साथ, हमारे सिद्धांत हमें हर ग्राहक को सर्वोत्तम सेवा देने के लिए प्रेरित करते हैं। शेयर बाज़ार में हमारा मंत्र है “कम जोखिम, अधिक लाभ।”",
    whyImageAlt: "स्मार्टफोन पर शेयर बाज़ार ऐप",
    ctaEyebrow: "शुरुआत करें",
    ctaTitle: "शुरू करें अपना",
    ctaText: "सदस्यता लेने से पहले हमारी कॉल और सहायता का अनुभव लें। अपनी जानकारी भेजें और हमारी टीम आपका ट्रायल शुरू कर देगी।",
    ctaPerks: [
      "निफ्टी, बैंक निफ्टी, इक्विटी, एफ एंड ओ और कमोडिटी कॉल",
      "हर कॉल के साथ साफ़ टारगेट और स्टॉप-लॉस",
      "कॉल, ईमेल और व्हाट्सएप पर सहायता",
    ],
  },

  about: {
    metaTitle: "ट्रेडिंग समुदाय के लिए निष्पक्ष तकनीकी विश्लेषण",
    metaDescription:
      "हमारी संस्था अनुभवी पेशेवरों द्वारा ट्रेडिंग समुदाय को निष्पक्ष तकनीकी विश्लेषण देती है और इंट्राडे ट्रेडिंग के लिए बेहतरीन मार्गदर्शन उपलब्ध कराती है।",
    bannerEyebrow: "हमारे बारे में",
    bannerTitle: "परिचय",
    bannerSubtitle: "हर ट्रेडर के लिए अनुभवी पेशेवरों द्वारा निष्पक्ष तकनीकी विश्लेषण।",
    introEyebrow: "हम कौन हैं",
    introTitle: "निवेश का",
    introTitleAccent: "समझदारी भरा",
    introTitleEnd: "चुनाव करें",
    introText:
      "इस संस्था की स्थापना अनुभवी पेशेवरों द्वारा ट्रेडिंग समुदाय को निष्पक्ष तकनीकी विश्लेषण देने के उद्देश्य से की गई थी, ताकि एक अनुकूल माहौल बने और शेयर बाज़ार की सर्वोत्तम सिफ़ारिशें दी जा सकें। शेयर बाज़ार में निवेश करते समय इंट्राडे ट्रेडिंग के लिए बेहतरीन मार्गदर्शन पाएँ — हम आपका लाभ बढ़ाने में मदद कर सकते हैं। अपनी स्थापित पद्धतियों से हम आपको ऑप्शन टिप्स और इंडेक्स ऑप्शन टिप्स में मदद करते हैं।",
    introImageAlt: "लैपटॉप पर ट्रेडिंग चार्ट",
    strategyEyebrow: "हमारा तरीका",
    strategyTitle: "बेहतर",
    strategyTitleAccent: "कारोबारी रणनीति",
    strengths: [
      "आपकी संपत्ति बढ़ाने के लिए प्रतिबद्ध",
      "बेजोड़ सेवा, संतुष्टि और पारदर्शिता",
      "भरोसे की विरासत पर बना",
      "बेहतर दीर्घकालिक प्रतिफल",
    ],
    visionEyebrow: "विज़न · मिशन · रणनीति",
    visionText:
      "अपने ग्राहकों के साथ आगे बढ़ना और वैश्विक विशेषज्ञों को जोड़कर {name} को सर्वश्रेष्ठ रिसर्च फर्म बनाना। हमारी प्रबंधन टीम के पास विविध कौशल हैं, जिससे ग्राहकों को मूल्यवान सेवाएँ मिलती हैं। हमारा लक्ष्य चुनिंदा ग्राहकों के साथ लगातार उच्च गुणवत्ता की सेवा देकर सच्चे रिश्ते बनाना है।",
  },

  packages: {
    metaTitle: "हमारे साथ शेयरों में निवेश करें",
    metaDescription:
      "{name} आपको सोच-समझकर निवेश के फ़ैसले लेने में मदद करने वाली जानकारी और साधन देता है। हमारे पैकेज देखें और आज ही निवेश शुरू करें!",
    bannerEyebrow: "कीमतें",
    bannerTitle: "हमारे",
    bannerTitleAccent: "पैकेज",
    bannerSubtitle: "हर ज़रूरत के लिए कई तरह की योजनाएँ उपलब्ध हैं।",
    eyebrow: "हमारा शुल्क",
    title: "वह योजना चुनें जो",
    titleAccent: "आपकी ट्रेडिंग के अनुकूल हो",
    lead: "ट्रेड लेने से पहले सबसे पहले बाज़ार की स्थिति देखें। तय करें कि बाज़ार में ट्रेंड है या उतार-चढ़ाव — ट्रेंड होने पर कीमतें ऊपर या नीचे की दिशा में चलती हैं।",
    perMonth: "/ माह + जीएसटी",
    note: "सभी कीमतें प्रति माह और जीएसटी अतिरिक्त हैं। तय नहीं कर पा रहे कि कौन सी योजना सही है?",
    hniTag: "एचएनआई के लिए",
    enquiryTitle: "इस पैकेज के बारे में पूछें",
    helpTitle: "हमारे पैकेज के बारे में पूछें",
    helpSubject: "पैकेज चुनने में सहायता",
    items: [
      {
        id: "equity-cash-12000",
        title: "इक्विटी कैश ट्रेडिंग",
        highlights: ["इंट्राडे", "रोज़ 1 टिप"],
        features: [
          "सही टारगेट और स्टॉप लॉस",
          "लाभ लक्ष्य: ₹2,000 – 5,000 प्रति सफल टिप",
          "रोज़ाना टिप्स, 80% तक सटीकता",
        ],
      },
      {
        id: "intraday-18000",
        title: "इंट्राडे ट्रेडिंग",
        highlights: ["इंट्राडे", "रोज़ 1 टिप"],
        features: [
          "सही टारगेट और स्टॉप लॉस",
          "लाभ लक्ष्य: ₹5,000 – 8,000 प्रति सफल टिप",
          "रोज़ाना टिप्स, 85% तक सटीकता",
        ],
      },
      {
        id: "equity-cash-25000",
        title: "इक्विटी कैश ट्रेडिंग",
        highlights: ["इंट्राडे + बीटीएसटी", "रोज़ 1–2 टिप"],
        features: [
          "सही टारगेट और स्टॉप लॉस",
          "लाभ लक्ष्य: ₹8,000 – 12,000 प्रति सफल टिप",
          "रोज़ाना टिप्स, 85% तक सटीकता",
        ],
      },
      {
        id: "option-intraday-equity-35000",
        title: "ऑप्शन, इंट्राडे, इक्विटी",
        tag: "एचएनआई के लिए",
        highlights: ["ऑप्शन · इंट्राडे · इक्विटी", "रोज़ 1 टिप"],
        features: [
          "सही टारगेट और स्टॉप लॉस (रिवर्सल ट्रेड)",
          "लाभ लक्ष्य: ₹5,000 – 10,000 प्रति सफल टिप",
          "रोज़ाना टिप्स, 85% तक सटीकता",
          "ज़ीरो टू हीरो कॉल (एक्सपायरी)",
        ],
      },
      {
        id: "premium-option-75000",
        title: "प्रीमियम ऑप्शन ट्रेडिंग",
        highlights: ["निफ्टी / बैंक निफ्टी", "रोज़ 1 टिप"],
        features: [
          "सही टारगेट और स्टॉप लॉस (रिवर्सल ट्रेड)",
          "लाभ लक्ष्य: ₹10,000 – 15,000 प्रति सफल टिप",
          "रोज़ाना टिप्स, 85% तक सटीकता",
        ],
      },
      {
        id: "intraday-150000",
        title: "इंट्राडे ट्रेडिंग",
        highlights: ["स्टॉक / फ्यूचर", "रोज़ 1 टिप"],
        features: [
          "सही टारगेट और स्टॉप लॉस",
          "लाभ लक्ष्य: ₹20,000 – 25,000 प्रति सफल टिप",
          "रोज़ाना टिप्स, 90% तक सटीकता",
        ],
      },
      {
        id: "hni-500000",
        title: "एचएनआई ट्रेडिंग",
        tag: "एचएनआई के लिए",
        highlights: ["रोज़ 3–5 टिप"],
        features: [
          "सही टारगेट और स्टॉप लॉस (रिवर्सल ट्रेड)",
          "लाभ लक्ष्य: ₹35,000 – 40,000 प्रति सफल टिप",
          "रोज़ाना टिप्स, 85% सटीकता",
          "ज़ीरो टू हीरो कॉल (एक्सपायरी)",
        ],
      },
    ],
  },

  contact: {
    metaTitle: "शेयर बाज़ार में आगे बढ़ने के लिए संपर्क करें",
    metaDescription:
      "शेयर बाज़ार में निवेश के फ़ायदों के बारे में जानने के लिए हमसे संपर्क करें। हमारे विशेषज्ञ आपकी मदद के लिए तैयार हैं।",
    bannerEyebrow: "संपर्क",
    bannerTitle: "संपर्क",
    bannerTitleAccent: "करें",
    bannerSubtitle: "हमारी {name} टीम हमेशा आपकी मदद के लिए तैयार है।",
    eyebrow: "संपर्क में रहें",
    title: "हमसे",
    titleAccent: "जुड़ें",
    lead: "हमें कॉल करें, व्हाट्सएप पर संदेश भेजें, ईमेल करें या नीचे दिया फ़ॉर्म भरें।",
    callUs: "कॉल करें",
    whatsapp: "व्हाट्सएप",
    whatsappValue: "हमारी टीम से चैट करें",
    emailLabel: "ईमेल",
    addressLabel: "कार्यालय का पता",
    teamEyebrow: "हमारी टीम",
    teamTitle: "हम आपके लिए",
    teamTitleAccent: "हमेशा उपलब्ध हैं",
    mapTitle: "गूगल मैप्स पर कार्यालय का स्थान",
  },

  terms: {
    metaTitle: "नियम एवं शर्तें",
    metaDescription:
      "{name} में हम शेयर बाज़ार और निवेश रणनीतियों की जटिलताओं को आसान बनाने के लिए एक पूर्ण मंच उपलब्ध कराते हैं।",
    bannerEyebrow: "कानूनी",
    bannerTitle: "नियम एवं",
    bannerTitleAccent: "शर्तें",
    bannerSubtitle: "सदस्यता लेने से पहले कृपया ये शर्तें पढ़ें।",
    seeAlso: "यह भी देखें:",
    privacyLink: "गोपनीयता नीति",
    sections: [
      {
        heading: "नियम एवं शर्तें",
        points: [
          "प्रतिभूतियों में निवेश बाज़ार जोखिम के अधीन है — हम लाभ या निश्चित प्रतिफल का वादा नहीं करते।",
          "शुल्क केवल कंपनी के नाम पर स्वीकार किया जाता है, किसी निजी बैंक खाते में नहीं।",
          "हर कॉल में टारगेट और स्टॉप-लॉस होता है; ट्रेड लेने का निर्णय ग्राहक का अपना होता है।",
        ],
      },
      {
        heading: "रिफ़ंड नीति",
        points: ["{trial} से आप पहले सेवा परख सकते हैं, इसलिए सदस्यता शुल्क वापस नहीं होता।"],
      },
      {
        heading: "प्रकटीकरण",
        points: [
          "हमें उत्पाद जारीकर्ताओं या बिचौलियों से कोई कमीशन नहीं मिलता, और हमारे विश्लेषक अपने खाते से ट्रेड नहीं करते।",
          "पिछला प्रदर्शन भविष्य के परिणामों की गारंटी नहीं है; सभी टिप्स को राय मानें और अपनी जोखिम क्षमता के अनुसार ट्रेड करें।",
          "केवल हमारे लिखित संदेश ही आधिकारिक सलाह माने जाते हैं।",
        ],
      },
    ],
  },

  privacy: {
    metaTitle: "गोपनीयता नीति",
    bannerEyebrow: "कानूनी",
    bannerTitle: "गोपनीयता",
    bannerTitleAccent: "नीति",
    effective: "प्रभावी तिथि: {date}",
    contactHeading: "8. संपर्क करें",
    contactText: "इस नीति के बारे में प्रश्न हैं? हमें ईमेल करें:",
    sections: [
      {
        heading: "1. हम कौन सी जानकारी लेते हैं",
        text: "आपके द्वारा दी गई संपर्क जानकारी (नाम, ईमेल, फ़ोन), स्वतः एकत्र होने वाला तकनीकी डेटा (आईपी पता, ब्राउज़र, देखे गए पेज) और सेवा खरीदते समय सीमित भुगतान विवरण।",
      },
      {
        heading: "2. जानकारी का उपयोग",
        text: "अपनी सेवाएँ देने, भुगतान संसाधित करने, आपकी पूछताछ का उत्तर देने और वेबसाइट बेहतर बनाने के लिए।",
      },
      {
        heading: "3. जानकारी साझा करना",
        text: "केवल कानूनी आवश्यकता होने पर, अधिकारों और सुरक्षा की रक्षा के लिए, व्यवसाय हस्तांतरण के दौरान, या सेवा देने में मदद करने वाले साझेदारों के साथ। इस वेबसाइट से भेजी गई पूछताछ गूगल शीट्स में संग्रहित होती है।",
      },
      {
        heading: "4. आपकी जानकारी की सुरक्षा",
        text: "हम आपकी जानकारी की सुरक्षा के लिए उचित उपाय करते हैं, पर कोई भी प्रणाली पूरी तरह सुरक्षित नहीं होती।",
      },
      { heading: "5. बच्चों के लिए नीति", text: "हम जानबूझकर 13 वर्ष से कम आयु के बच्चों की जानकारी एकत्र नहीं करते।" },
      {
        heading: "6. डू-नॉट-ट्रैक सेटिंग",
        text: "फ़िलहाल हम ब्राउज़र के डू-नॉट-ट्रैक संकेतों पर प्रतिक्रिया नहीं देते।",
      },
      {
        heading: "7. आपके विकल्प",
        text: "आप हमसे संपर्क करके कभी भी हमारे ईमेल प्राप्त करना बंद कर सकते हैं।",
      },
    ],
  },

  blog: {
    metaTitle: "बाज़ार की जानकारी",
    metaDescription: "{name} रिसर्च डेस्क से शेयर बाज़ार की जानकारी, ट्रेडिंग की बुनियादी बातें और अपडेट।",
    bannerEyebrow: "ब्लॉग",
    bannerTitle: "बाज़ार की",
    bannerTitleAccent: "जानकारी",
    bannerSubtitle: "हमारी रिसर्च डेस्क से ट्रेडिंग की बुनियादी बातें, बाज़ार की राय और अपडेट।",
    empty: "अभी कोई लेख नहीं है। कृपया थोड़ी देर बाद देखें।",
    backToBlog: "सभी लेख",
    minRead: "मिनट का पठन",
    author: "{name} रिसर्च डेस्क",
    ctaTitle: "ऐसी कॉल अपने फ़ोन पर चाहिए?",
    ctaText: "अपना {trial} शुरू करें और देखें कि हमारी रिसर्च डेस्क कैसे काम करती है।",
  },

  notFound: {
    metaTitle: "पेज नहीं मिला",
    code: "404",
    title: "यह पेज चार्ट से बाहर चला गया",
    text: "आप जो पेज खोज रहे हैं वह मौजूद नहीं है या हटाया जा चुका है।",
  },

  error: {
    title: "कुछ गड़बड़ हो गई",
    text: "यह पेज लोड नहीं हो सका। कृपया दोबारा कोशिश करें, या बार-बार ऐसा हो तो हमसे संपर्क करें।",
    retry: "दोबारा कोशिश करें",
  },

  skipToContent: "मुख्य सामग्री पर जाएँ",
  lastUpdated: "अंतिम अद्यतन: {date}",

  footer: {
    quickLinks: "त्वरित लिंक",
    contact: "संपर्क",
    getInTouch: "संपर्क",
    getInTouchAccent: "करें",
    chatOnWhatsApp: "व्हाट्सएप पर चैट करें",
    sebi: "सेबी पंजीकरण संख्या:",
    rights: "सर्वाधिकार सुरक्षित।",
    sitePolicy: "साइट नीति",
    designedBy: "डिज़ाइन:",
  },
};

export const dictionaries = { en, hi };
