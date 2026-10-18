/**
 * Central content for Focus Zone Library, Kharar.
 * Contact details, hours, address and links are real and used site-wide.
 */

export const site = {
  volume: "VOL. 01",
  name: "Focus Zone Library",
  tagline: "Where Dream Meets Reality",
  description:
    "A peaceful, well-equipped study space designed for focus, consistency and your goals.",
  story:
    "Focus Zone Library is a quiet, disciplined reading and study space in the heart of Kharar. Every detail — from spacious desks and personal storage to eye-friendly lighting — is arranged so you can sit down, settle in and do your best work.",
  introduction:
    "Focus Zone Library is a calm, air-conditioned reading and study space on the top floor of City Heart, Kharar. It is built for students and readers who want a disciplined environment, practical facilities and long, uninterrupted hours of focus.",
  established: "[ESTABLISHED YEAR]",
  locality: "City Heart",
  city: "Kharar",
  address: "SCO 54, Top Floor, City Heart, Kharar",
  addressLine2: "Near Yes Bank",
  openingHours: "7:00 AM – 10:00 PM",
  phone: "+91 98789 09309",
  whatsapp: "+91 98789 09309",
  email: "focuszonelibrary1@gmail.com",
  instagramUrl:
    "https://www.instagram.com/focuszone_library_kharar?vrfl=MTk2cXdqaWUweTdpZA==",
  instagramLabel: "Instagram — Focus Zone Library",
  mapUrl: "https://maps.google.com/?cid=1819941103893495000&hl=en&gl=us&entry=ac",
  type: "LIBRARY / READING ROOM",
  contactIntro:
    "Questions about seats, timings or facilities? Send us a message and we will get back to you soon.",
  whatsappMessage:
    "Hello Focus Zone Library, I would like to know more about the library and its facilities.",
} as const;

export const isPlaceholder = (value: string) =>
  value.trim().startsWith("[") && value.trim().endsWith("]");

export const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "FACILITIES", href: "#facilities" },
  { label: "GALLERY", href: "#gallery" },
  { label: "VISIT US", href: "#visit" },
  { label: "CONTACT", href: "#contact" },
];

export const facilities = [
  {
    n: "01",
    title: "EMERGENCY DROP FACILITY FOR GIRLS",
    body: "Emergency drop assistance for girls leaving late, subject to the library's service arrangements.",
    icon: "ShieldCheck",
  },
  {
    n: "02",
    title: "PERSONAL BOOK STORAGE",
    body: "Personal book storage at every seat.",
    icon: "BookOpen",
  },
  {
    n: "03",
    title: "SEPARATE WASHROOMS",
    body: "Separate washrooms for boys and girls.",
    icon: "DoorOpen",
  },
  {
    n: "04",
    title: "SPACIOUS DESKS",
    body: "Dedicated, spacious desks for comfortable studying.",
    icon: "Table",
  },
  {
    n: "05",
    title: "PERSONAL BAG STORAGE",
    body: "Personal bag storage at every seat.",
    icon: "Backpack",
  },
  {
    n: "06",
    title: "FREE SANITARY PADS FOR GIRLS",
    body: "Free sanitary pads available for girls.",
    icon: "HeartHandshake",
  },
  {
    n: "07",
    title: "PERSONAL CHARGING SOCKET",
    body: "A personal charging socket for convenient device charging.",
    icon: "Zap",
  },
  {
    n: "08",
    title: "EYE-FRIENDLY LIGHTING",
    body: "Lighting designed with comfortable reading and studying in mind.",
    icon: "Lamp",
  },
  {
    n: "09",
    title: "PIN BOARD AT EVERY SEAT",
    body: "A personal pin board at every seat.",
    icon: "Pin",
  },
  {
    n: "10",
    title: "DISCIPLINED STUDY ENVIRONMENT",
    body: "An environment focused on discipline, consistency and productivity.",
    icon: "Target",
  },
  {
    n: "11",
    title: "DAILY NEWSPAPER & MONTHLY MAGAZINES",
    body: "Reading material to stay informed.",
    icon: "Newspaper",
  },
  {
    n: "12",
    title: "FIRST AID BOX",
    body: "First-aid facilities available at the library.",
    icon: "Cross",
  },
  {
    n: "13",
    title: "LUNCH ROOM & NEWSPAPER AREA",
    body: "A designated area for lunch and newspaper reading.",
    icon: "UtensilsCrossed",
  },
  {
    n: "14",
    title: "CCTV SURVEILLANCE",
    body: "CCTV surveillance within the library.",
    icon: "Cctv",
  },
  {
    n: "15",
    title: "FULLY AIR-CONDITIONED SPACE",
    body: "Air-conditioned study space.",
    icon: "Snowflake",
  },
  {
    n: "16",
    title: "FREE WI-FI",
    body: "Internet access for study-related activities.",
    icon: "Wifi",
  },
  {
    n: "17",
    title: "PEACEFUL, CLEAN ENVIRONMENT",
    body: "A clean, calm and pleasant environment for focused study.",
    icon: "Leaf",
  },
] as const;

export const experience = [
  {
    n: "01",
    title: "ARRIVE",
    body: "Walk in, settle at your own spacious desk and store your books and bag right at your seat.",
  },
  {
    n: "02",
    title: "FOCUS",
    body: "Study in a disciplined, air-conditioned space with eye-friendly lighting, Wi-Fi and a personal charging socket.",
  },
  {
    n: "03",
    title: "STAY",
    body: "Take a break in the lunch room and newspaper area, then get back to it — open 7:00 AM to 10:00 PM.",
  },
];

export const gallery = [
  { fig: "FIG. 01", caption: "MAIN READING ROOM", key: "gallery01" },
  { fig: "FIG. 02", caption: "BOOKSHELVES", key: "gallery02" },
  { fig: "FIG. 03", caption: "STUDY AREA", key: "gallery03" },
  { fig: "FIG. 04", caption: "LIBRARY INTERIOR", key: "gallery04" },
  { fig: "FIG. 05", caption: "LIBRARY ENTRANCE", key: "gallery05" },
  { fig: "FIG. 06", caption: "READING ENVIRONMENT", key: "gallery06" },
] as const;

export const faqs = [
  {
    q: "WHAT ARE YOUR OPENING HOURS?",
    a: "The library is open every day from 7:00 AM to 10:00 PM.",
  },
  {
    q: "HOW CAN I BECOME A MEMBER?",
    a: "Call, WhatsApp or visit us at SCO 54, Top Floor, City Heart, Kharar and we will walk you through the current plans and seat availability.",
  },
  {
    q: "WHAT ARE THE MEMBERSHIP FEES?",
    a: "Fees depend on the plan and duration you choose. Contact us on +91 98789 09309 for current fees and availability.",
  },
  {
    q: "CAN I VISIT BEFORE BECOMING A MEMBER?",
    a: "Yes — drop by during opening hours (7:00 AM – 10:00 PM) and see the reading room and facilities for yourself.",
  },
  {
    q: "WHAT FACILITIES ARE AVAILABLE?",
    a: "Spacious desks, personal book and bag storage, a personal charging socket and pin board at every seat, free Wi-Fi, air conditioning, a lunch room and newspaper area, separate washrooms, CCTV and more — see the Facilities section above.",
  },
  {
    q: "IS WI-FI AVAILABLE?",
    a: "Yes, free Wi-Fi is available for study-related activities.",
  },
  {
    q: "ARE CHARGING POINTS AVAILABLE?",
    a: "Yes, every seat has a personal charging socket.",
  },
  {
    q: "IS THE LIBRARY OPEN ON SUNDAYS?",
    a: "The library is open 7:00 AM – 10:00 PM. Call or WhatsApp us to confirm holiday timings.",
  },
  {
    q: "HOW CAN I CONTACT THE LIBRARY?",
    a: "Call or WhatsApp +91 98789 09309, email focuszonelibrary1@gmail.com, or use the contact form on this page.",
  },
];
