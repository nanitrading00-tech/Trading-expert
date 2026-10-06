// Business details, names and links used across the whole website. Edit them here and every page updates.
// (Secret keys such as the Google Sheets settings live in .env.local, not here.)
export const site = {
  name: "Nifty Experts",
  legalName: "Nifty Experts, Inc.",
  tagline: "Invest for a more comfortable life, invest for a happier life",
  url: "https://www.nifty-experts.in",
  logo: "/images/logo.png",
  freeTrial: "1-Day Free Trial",

  phone: "+91 95538 36864",
  // Country code + number, digits only. Used by the WhatsApp chat button and icons.
  whatsapp: "919553836864",
  email: "niftyexperts@gmail.com",
  // Also used to place the pin on the Contact Us page map.
  address: "Millennium Business Park, MIDC Industrial Area, Mahape Road, Mumbai, Maharashtra 400555",

  social: {
    facebook: "https://www.facebook.com/stock.benifits1",
    instagram:
      "https://www.instagram.com/stock.benifits.1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },

  quote: "“I will tell you how to become rich.”",
  designer: { name: "DIGITALZ CREATIONS", url: "https://www.digitalzcreations.in/" },

  // Shown in the footer. Fill in your SEBI registration number, e.g. "INH000000000".
  sebiRegistration: "",
  disclaimer:
    "Investments in the securities market are subject to market risks. Read all the related documents carefully before investing.",
  // Shown as "Last updated" on the Terms and Privacy pages (YYYY-MM-DD).
  policyUpdated: "2024-05-01",

  // Google Analytics 4 ID, e.g. "G-XXXXXXXXXX". Tracking starts only after a visitor accepts cookies.
  googleAnalyticsId: "",
  // Google Search Console verification code.
  googleSiteVerification: "Fct_8OeR3lZxs_0_7t1EJh6ydmpG2bnVZS_8fL7ufKg",
};

// Monthly price in ₹ (before GST) and an optional "Pay now" link for each package. Paste a Razorpay
// (or other) payment link and the button appears; leave it empty to hide it. Names and features are in content.ts.
export const packages = {
  "equity-cash-12000": { price: "12,000", paymentLink: "" },
  "intraday-18000": { price: "18,000", paymentLink: "" },
  "equity-cash-25000": { price: "25,000", paymentLink: "" },
  "option-intraday-equity-35000": { price: "35,000", paymentLink: "" },
  "premium-option-75000": { price: "75,000", paymentLink: "" },
  "intraday-150000": { price: "1,50,000", paymentLink: "" },
  "hni-500000": { price: "5,00,000", paymentLink: "" },
} satisfies Record<string, { price: string; paymentLink: string }>;

export type PackageId = keyof typeof packages;

// Numbers in the home page "Track record" section, in the same order as its labels in content.ts.
export const trackRecord = [
  { value: 90, suffix: "%" }, // Accuracy
  { value: 630, suffix: "+" }, // Trusted customers
  { value: 100, suffix: "%" }, // Client satisfaction
];

export const whatsappLink = `https://wa.me/${site.whatsapp}`;

// Paths are the English URLs; Hindi pages add a /hi prefix automatically.
export const navPaths = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/our-packages", key: "packages" },
  { href: "/blog", key: "blog" },
  { href: "/terms-and-conditions", key: "terms" },
  { href: "/contact-us", key: "contact" },
] as const;

export const socialLinks = [
  { name: "Facebook", href: site.social.facebook },
  { name: "Instagram", href: site.social.instagram },
  { name: "WhatsApp", href: whatsappLink },
] as const;

// Indices in the live market ticker and chart (Yahoo Finance symbols). The first three get chart tabs.
export const marketIndices = [
  { symbol: "^NSEI", name: "NIFTY 50" },
  { symbol: "^NSEBANK", name: "BANK NIFTY" },
  { symbol: "^BSESN", name: "SENSEX" },
  { symbol: "NIFTY_FIN_SERVICE.NS", name: "FIN NIFTY" },
  { symbol: "^CNXIT", name: "NIFTY IT" },
  { symbol: "^INDIAVIX", name: "INDIA VIX" },
];

// Values stored in the Google Sheet. Hindi labels for these live in src/lib/content.ts.
export const tradingSegments = ["Nifty", "Bank Nifty", "Equity", "Commodity", "Stock Option"];

export const investmentRanges = [
  "Up to Rs. 50,000",
  "Rs. 50,000 – 1,00,000",
  "Above Rs. 1,00,000",
  "Above Rs. 3,00,000",
  "Above Rs. 5,00,000",
  "Above Rs. 10,00,000",
];
