/**
 * Central content placeholders.
 * Replace the bracketed values with the library's real information.
 * Contact values left as placeholders intentionally render as inert text
 * (no fake tel:/mailto:/maps links).
 */

export const site = {
  volume: "VOL. 01",
  name: "[LIBRARY NAME]",
  tagline: "[LIBRARY TAGLINE]",
  description: "[LIBRARY DESCRIPTION]",
  story: "[LIBRARY STORY]",
  introduction: "[LIBRARY INTRODUCTION]",
  established: "[ESTABLISHED YEAR]",
  locality: "[LOCALITY]",
  city: "[CITY]",
  address: "[ADDRESS]",
  openingHours: "[OPENING HOURS]",
  phone: "[PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  email: "[EMAIL ADDRESS]",
  instagram: "[INSTAGRAM HANDLE]",
  facebook: "[FACEBOOK HANDLE]",
  mapUrl: "",
  type: "[LIBRARY / READING ROOM]",
  contactIntro: "[SHORT CONTACT DESCRIPTION]",
  owner: {
    name: "[OWNER NAME]",
    title: "[OWNER TITLE]",
    bio: "[OWNER BIO]",
    quote: "[OWNER QUOTE]",
  },
  membershipNote: "[MEMBERSHIP DETAILS]",
} as const;

export const isPlaceholder = (value: string) =>
  value.trim().startsWith("[") && value.trim().endsWith("]");

export const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "FACILITIES", href: "#facilities" },
  { label: "MEMBERSHIP", href: "#membership" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

export const facilities = [
  { n: "01", title: "QUIET READING SPACE", body: "[FACILITY DESCRIPTION]", icon: "BookOpen" },
  { n: "02", title: "COMFORTABLE STUDY DESKS", body: "[FACILITY DESCRIPTION]", icon: "Clock" },
  { n: "03", title: "HIGH-SPEED WI-FI", body: "[FACILITY DESCRIPTION]", icon: "Wifi" },
  { n: "04", title: "CHARGING FACILITIES", body: "[FACILITY DESCRIPTION]", icon: "Zap" },
  { n: "05", title: "AIR CONDITIONING", body: "[FACILITY DESCRIPTION]", icon: "Snowflake" },
  { n: "06", title: "PARKING", body: "[FACILITY DESCRIPTION]", icon: "Car" },
  { n: "07", title: "CLEAN AND WELL-LIT SPACE", body: "[FACILITY DESCRIPTION]", icon: "BookOpen" },
  { n: "08", title: "[OTHER ACTUAL FACILITY]", body: "[FACILITY DESCRIPTION]", icon: "MapPin" },
] as const;

export const experience = [
  { n: "01", title: "ARRIVE", body: "[DESCRIPTION]" },
  { n: "02", title: "FOCUS", body: "[DESCRIPTION]" },
  { n: "03", title: "STAY", body: "[DESCRIPTION]" },
];

export const plans = [
  {
    term: "MONTHLY",
    price: "[₹ PRICE]",
    featured: false,
    benefits: ["[MEMBERSHIP BENEFIT]", "[MEMBERSHIP BENEFIT]", "[MEMBERSHIP BENEFIT]"],
  },
  {
    term: "QUARTERLY",
    price: "[₹ PRICE]",
    featured: true,
    benefits: ["[MEMBERSHIP BENEFIT]", "[MEMBERSHIP BENEFIT]", "[MEMBERSHIP BENEFIT]"],
  },
  {
    term: "YEARLY",
    price: "[₹ PRICE]",
    featured: false,
    benefits: ["[MEMBERSHIP BENEFIT]", "[MEMBERSHIP BENEFIT]", "[MEMBERSHIP BENEFIT]"],
  },
];

export const gallery = [
  { fig: "FIG. 01", caption: "MAIN READING ROOM", placeholder: "[GALLERY IMAGE 01]" },
  { fig: "FIG. 02", caption: "BOOKSHELVES", placeholder: "[GALLERY IMAGE 02]" },
  { fig: "FIG. 03", caption: "STUDY AREA", placeholder: "[GALLERY IMAGE 03]" },
  { fig: "FIG. 04", caption: "LIBRARY INTERIOR", placeholder: "[GALLERY IMAGE 04]" },
  { fig: "FIG. 05", caption: "LIBRARY ENTRANCE", placeholder: "[GALLERY IMAGE 05]" },
  { fig: "FIG. 06", caption: "[OTHER FACILITY]", placeholder: "[GALLERY IMAGE 06]" },
];

export const testimonials = [
  { quote: "[REAL MEMBER TESTIMONIAL]", name: "[MEMBER NAME]", meta: "[MEMBERSHIP TYPE]" },
  { quote: "[REAL MEMBER TESTIMONIAL]", name: "[MEMBER NAME]", meta: "[MEMBERSHIP TYPE]" },
];

export const faqs = [
  "WHAT ARE YOUR OPENING HOURS?",
  "HOW CAN I BECOME A MEMBER?",
  "WHAT ARE THE MEMBERSHIP FEES?",
  "CAN I VISIT BEFORE BECOMING A MEMBER?",
  "WHAT FACILITIES ARE AVAILABLE?",
  "IS WI-FI AVAILABLE?",
  "ARE CHARGING POINTS AVAILABLE?",
  "IS PARKING AVAILABLE?",
  "IS THE LIBRARY OPEN ON SUNDAYS?",
  "HOW CAN I CONTACT THE OWNER?",
].map((q, i) => ({ q, a: `[ANSWER ${String(i + 1).padStart(2, "0")}]` }));
