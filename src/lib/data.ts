export type HomeKind = "custom" | "ready" | "coming";

export type Plan = {
  slug: string;
  name: string;
  kind: HomeKind;
  price: string | null;
  beds: string;
  baths: string;
  garage: string;
  sqft: string;
  location: string;
  blurb: string;
  image: string;
  tags: string[];
};

export const SITE = {
  name: "Renaissance Homes",
  tagline: "The Best Built Homes Are Renaissance Homes",
  live: "https://renaissance-homes.com/",
  phone: "(503) 636-5600",
  phoneHref: "tel:+15036365600",
  email: "AAndruss@Renaissance-Homes.com",
  address1: "16771 Boones Ferry Rd.",
  address2: "Lake Oswego, OR 97035",
  ccb: "CCB 49955",
  houzz:
    "https://www.houzz.com/professionals/home-builders/renaissance-homes-pfvwus-pf~2114342316",
  instagram: "https://www.instagram.com/renaissancehomes/",
  x: "https://x.com/search?q=Renaissance%20Homes%20Lake%20Oswego",
  founded: "1984",
};

export const PLANS: Plan[] = [
  {
    slug: "thoma",
    name: "Thoma",
    kind: "custom",
    price: "From $1,425,000",
    beds: "5",
    baths: "5.5",
    garage: "4",
    sqft: "5,461",
    location: "Build on your land",
    blurb:
      "A two-story plan with a long, sweeping front elevation. Base price is for the home. Site costs are extra, and prices are subject to change.",
    image: "/homes/thoma.jpg",
    tags: ["Custom Homes", "Two Story"],
  },
  {
    slug: "turner",
    name: "Turner",
    kind: "custom",
    price: "From $1,050,000",
    beds: "5",
    baths: "4",
    garage: "3",
    sqft: "4,017",
    location: "Build on your land",
    blurb:
      "Five bedrooms, four baths, three-car garage. The team can alter the plan and adapt any exterior style.",
    image: "/homes/turner.jpg",
    tags: ["Custom Homes", "Two Story"],
  },
  {
    slug: "sunningdale",
    name: "Sunningdale",
    kind: "custom",
    price: null,
    beds: "5",
    baths: "5+",
    garage: "3",
    sqft: "5,322",
    location: "Lake Oswego, Street of Dreams 2024",
    blurb:
      "A 2024 Street of Dreams home in Forest Hills. About 5,322 square feet, with a juice bar, media room, and covered outdoor living.",
    image: "/homes/hero.jpg",
    tags: ["Custom Homes", "Street of Dreams"],
  },
  {
    slug: "allegro",
    name: "Allegro",
    kind: "custom",
    price: "From $1,631,000",
    beds: "4",
    baths: "6.5",
    garage: "4",
    sqft: "5,884",
    location: "West Linn, Street of Dreams 2025",
    blurb:
      "Primary on main. The 2025 Street of Dreams home on four-plus acres in West Linn. Modern cottage with outdoor covered living.",
    image: "/homes/allegro.jpg",
    tags: ["Custom Homes", "Primary on Main"],
  },
  {
    slug: "south-shore",
    name: "South Shore",
    kind: "custom",
    price: null,
    beds: "Lakefront",
    baths: "Custom",
    garage: "Custom",
    sqft: "Record sale",
    location: "Lake Oswego",
    blurb:
      "A lakefront custom on South Shore. The builder has printed that no other local builder has built and sold a $10,500,000 home on Lake Oswego.",
    image: "/homes/south-shore.jpg",
    tags: ["Custom Homes", "Lakefront"],
  },
  {
    slug: "chandler",
    name: "Chandler",
    kind: "custom",
    price: "From $1,496,000",
    beds: "5",
    baths: "5.5",
    garage: "3",
    sqft: "5,588",
    location: "Build on your land",
    blurb: "Two-story plan from the printed plans and pricing list. Site costs extra.",
    image: "/homes/thoma.jpg",
    tags: ["Custom Homes", "Two Story"],
  },
];

export const LISTINGS: Plan[] = [
  {
    slug: "964-country-commons",
    name: "964 Country Commons",
    kind: "ready",
    price: "$3,699,900",
    beds: "5",
    baths: "5",
    garage: "3",
    sqft: "5,003",
    location: "Lake Oswego",
    blurb:
      "Move-in ready. Open house printed as Saturday and Sunday, 12 pm to 4 pm. Price subject to change.",
    image: "/homes/hero.jpg",
    tags: ["Move-In Ready"],
  },
  {
    slug: "17615-bryant-road",
    name: "17615 Bryant Road",
    kind: "ready",
    price: "$2,324,900",
    beds: "5",
    baths: "5",
    garage: "4",
    sqft: "3,836",
    location: "Lake Oswego",
    blurb:
      "Move-in ready. Open house printed as Saturday and Sunday, 12 pm to 4 pm. Price subject to change.",
    image: "/homes/bryant.jpg",
    tags: ["Move-In Ready"],
  },
  {
    slug: "2424-glenmorrie-drive",
    name: "2424 Glenmorrie Drive",
    kind: "coming",
    price: null,
    beds: "5",
    baths: "4.5",
    garage: "3",
    sqft: "4,162",
    location: "Lake Oswego · Fall 2026",
    blurb: "Coming soon. Completion printed as Fall 2026.",
    image: "/homes/turner.jpg",
    tags: ["Coming Soon"],
  },
  {
    slug: "3520-upper-drive",
    name: "3520 Upper Drive",
    kind: "coming",
    price: null,
    beds: "5",
    baths: "5",
    garage: "4",
    sqft: "5,165",
    location: "Lake Oswego · Fall 2026",
    blurb: "Coming soon. Completion printed as Fall 2026.",
    image: "/homes/allegro.jpg",
    tags: ["Coming Soon"],
  },
  {
    slug: "2081-wembley-park-road",
    name: "2081 Wembley Park Road",
    kind: "coming",
    price: null,
    beds: "5",
    baths: "4.5",
    garage: "3",
    sqft: "4,215",
    location: "Lake Oswego · Early 2027",
    blurb: "Coming soon. Completion printed as Early 2027.",
    image: "/homes/thoma.jpg",
    tags: ["Coming Soon"],
  },
  {
    slug: "1980-sw-schaeffer-road",
    name: "1980 SW Schaeffer Road",
    kind: "coming",
    price: null,
    beds: "4",
    baths: "5",
    garage: "4",
    sqft: "4,277",
    location: "West Linn · Early 2027",
    blurb: "Coming soon. Completion printed as Early 2027.",
    image: "/homes/outdoor.jpg",
    tags: ["Coming Soon"],
  },
];

export const GALLERY = [
  { src: "/homes/hero.jpg", label: "Exterior elevation", w: "wide" as const },
  { src: "/homes/kitchen.jpg", label: "Luxury kitchen", w: "wide" as const },
  { src: "/homes/foyer.jpg", label: "Stair hall", w: "tall" as const },
  { src: "/homes/suite.jpg", label: "Primary suite", w: "wide" as const },
  { src: "/homes/outdoor.jpg", label: "Outdoor living", w: "wide" as const },
  { src: "/homes/bar.jpg", label: "Wine and bar", w: "wide" as const },
  { src: "/homes/south-shore.jpg", label: "Lakefront", w: "wide" as const },
  { src: "/homes/studio.jpg", label: "Materials studio", w: "wide" as const },
  { src: "/homes/allegro.jpg", label: "Wooded lot", w: "wide" as const },
  { src: "/homes/thoma.jpg", label: "Grand elevation", w: "wide" as const },
];

export const QUOTES = [
  {
    body: "I am such a believer of things happening for a reason. I feel like we chose Renaissance and Renaissance chose us.",
    name: "Jessica Cain",
    source: "Oregon Home, Fall 2025",
  },
  {
    body: "I feel like I cannot say enough about Renaissance. It was seamless. They were doing everything right and on time.",
    name: "Jessica Cain",
    source: "Oregon Home, Fall 2025",
  },
];

export const TEAM = [
  { name: "Randy Sebastian", role: "Founder and President" },
  { name: "Jeff Shrope", role: "Chief Operating Officer" },
  { name: "Amanda Andruss", role: "Principal Broker and Custom Homes Sales Manager" },
  { name: "Paul Wells", role: "Principal Broker and Custom Homes Sales Manager" },
  { name: "Ashley Arenz", role: "Broker and Custom Homes Sales Manager" },
  { name: "Pam Criswell", role: "Senior Interior Designer and Design Studio Manager" },
];
