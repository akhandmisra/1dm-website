// Structured content for the 1DM ecosystem site.
// Facts (names, prices, hours, addresses) are placeholders drawn from the
// current 1dm.coffee site structure — swap in exact live data any time.

export const brand = {
  name: "1DM",
  fullName: "1DollarMoffe",
  tagline: "Specialty coffee, for everyone.",
  founded: 2019,
  cities: 4,
  outlets: 10,
};

export type TimelineEntry = {
  year: string;
  title: string;
  copy: string;
  badge?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2019",
    title: "Pune — the first cup, on wheels",
    badge: "India's 1st",
    copy: "1DM starts India's first multi-roaster coffee truck and cafe concept — a one-dollar cup used as the door into specialty coffee for people who'd never tried it. Nobody else in the country was running this model.",
  },
  {
    year: "2021",
    title: "Raipur, and roots",
    badge: "India's 1st",
    copy: "The truck parks for good and 1DM brings specialty coffee culture to Raipur, Chhattisgarh for the first time — nobody else in the state was pouring this way. Our own team went on to be the first from Chhattisgarh to win coffee trophies at the state and national level.",
  },
  {
    year: "2022",
    title: "Choubey turns up the volume",
    badge: "India's 1st",
    copy: "1DM hosts India's first techno rave inside a coffee shop — the first in India to do it, when nobody else was even thinking about it.",
  },
  {
    year: "2024",
    title: "Shailendra Nagar, chef-crafted",
    copy: "A culinary pivot — a chef-crafted menu of toasts, bowls, and bakes built to sit alongside the coffee program, not compete with it.",
  },
  {
    year: "2025",
    title: "Six outlets, one year",
    badge: "India's 1st",
    copy: "Rapid expansion across Chhattisgarh — six outlets live in a single year, and 1DM becomes India's first cafe brand to champion reusable cups across its entire counter.",
  },
  {
    year: "2026",
    title: "Bilaspur, seed to cup",
    copy: "Kruptos Coffee Roasters — Raipur's first dedicated specialty roastery — launches under the 1DM umbrella alongside a tenth outlet in Bilaspur. Roasting the beans, baking the bread: total control, seed to cup.",
  },
];

export type StoryPhoto = {
  image: string;
  caption: string;
  span?: "wide" | "tall";
};

export const storyGallery: StoryPhoto[] = [
  {
    image: "/images/story/cupping-overhead.jpg",
    caption: "Cupping session — every batch gets tasted before it earns a place on the menu.",
    span: "wide",
  },
  {
    image: "/images/story/barista-training.jpg",
    caption: "A 1DM bar takeover — Akhand hosting Handcrafted's owner and their coffee behind our counter, one of many guest takeovers we've run.",
    span: "tall",
  },
  {
    image: "/images/story/aeropress-trophy.jpg",
    caption: "2023 India AeroPress Championship — 2nd place.",
  },
  {
    image: "/images/story/flavor-wheel.jpg",
    caption: "The SCAA flavor wheel — the language our baristas train on.",
  },
  {
    image: "/images/story/croissant.jpg",
    caption: "Bakery R&D — laminated dough, done properly.",
  },
  {
    image: "/images/story/cocktails-sunflower.jpg",
    caption: "Beverage R&D — espresso martinis alongside the single origins.",
  },
];

export type Location = {
  slug: string;
  name: string;
  city: string;
  hours: string;
  mapsUrl?: string;
  menuStatus: "live" | "soon";
  heroImage?: string;
};

// mapsUrl is a Google Maps *search* link built from the outlet name + city — it opens
// Maps and searches for the cafe by name rather than pointing at an exact pin. Swap in
// the precise "Share" link from each outlet's Google Business listing whenever you have it
// (Google Maps → find the cafe → Share → Copy link) for a pin-accurate result instead.
function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const locations: Location[] = [
  {
    slug: "samta",
    name: "1DM Samta",
    city: "Raipur",
    hours: "10:30 AM – 11:00 PM, daily",
    menuStatus: "live",
    mapsUrl: mapsSearchUrl("1DM Samta Cafe, Raipur"),
    heroImage: "/images/food/bagel-sandwich.jpg",
  },
  {
    slug: "dumartarai",
    name: "1DM Dumartarai",
    city: "Raipur",
    hours: "10:30 AM – 11:00 PM, daily",
    menuStatus: "live",
    mapsUrl:
      "https://www.google.com/maps/place/1DM+Specialty+Coffee/data=!4m2!3m1!1s0x0:0x2e3464ea6f04c378?sa=X&ved=1t:2428&hl=en-GB&ictx=111",
  },
  {
    slug: "bilaspur",
    name: "1DM Bilaspur",
    city: "Bilaspur",
    hours: "12:00 PM – 10:00 PM, closed Tuesdays",
    menuStatus: "live",
    mapsUrl: mapsSearchUrl("1DM Bilaspur Cafe"),
  },
  { slug: "tagore", name: "1DM Tagore Nagar", city: "Raipur", hours: "Coming soon", menuStatus: "soon", mapsUrl: mapsSearchUrl("1DM Tagore Nagar Cafe, Raipur") },
  { slug: "slice-vip-road", name: "Slice By 1DM VIP Road", city: "Raipur", hours: "Coming soon", menuStatus: "soon", mapsUrl: mapsSearchUrl("Slice By 1DM VIP Road, Raipur") },
  {
    slug: "slice-shankar-nagar",
    name: "Slice By 1DM Shankar Nagar",
    city: "Raipur",
    hours: "Coming soon",
    menuStatus: "soon",
    mapsUrl:
      "https://www.google.com/maps/place/SLICE+BY+1DM/data=!4m2!3m1!1s0x3a28ddc16768623b:0x8da9884a73fb5713?sa=X&ved=1t:242&hl=en-GB&ictx=111",
  },
  { slug: "civil-line", name: "1DM Civil Line", city: "Raipur", hours: "Coming soon", menuStatus: "soon", mapsUrl: mapsSearchUrl("1DM Civil Line Cafe, Raipur") },
  { slug: "avanti", name: "1DM Avanti Vihar", city: "Raipur", hours: "Coming soon", menuStatus: "soon", mapsUrl: mapsSearchUrl("1DM Avanti Vihar Cafe, Raipur") },
  { slug: "bhilai", name: "1DM Bhilai", city: "Bhilai", hours: "Coming soon", menuStatus: "soon", mapsUrl: mapsSearchUrl("1DM Bhilai Cafe") },
  { slug: "jagdalpur", name: "1DM Jagdalpur", city: "Jagdalpur", hours: "Coming soon", menuStatus: "soon", mapsUrl: mapsSearchUrl("1DM Cafe Jagdalpur") },
];

export type MenuCategory = {
  name: string;
  note?: string;
  items: { name: string; price: number; note?: string }[];
};

export const menuByLocation: Record<string, MenuCategory[]> = {
  samta: [
    {
      name: "Water-based Coffee",
      items: [
        { name: "Espresso", price: 100 },
        { name: "Doppio", price: 200 },
        { name: "Americano", price: 130 },
        { name: "Espresso with Juices", price: 250 },
        { name: "Espresso, Ale / Tonic / Lemonade", price: 250 },
        { name: "Cold Brew", price: 200 },
        { name: "Cold Brew, Juices / Ale / Tonic / Lemonade", price: 250 },
        { name: "Handcrafted Coffee", price: 250 },
        { name: "International Handcrafted Coffee", price: 380 },
      ],
    },
    {
      name: "Lattes & More",
      items: [
        { name: "Flat White", price: 200 },
        { name: "Cafe Latte / Cappuccino / Iced Latte / Cortado", price: 230 },
        { name: "Spanish Latte", price: 250 },
        { name: "Vietnamese Latte", price: 250 },
        { name: "Honey Cinnamon Latte", price: 250 },
        { name: "Artisan Mocha", price: 280 },
        { name: "Affogato", price: 250 },
        { name: "Hot Chocolate", price: 250 },
      ],
    },
    {
      name: "Teas & Refreshers",
      items: [
        { name: "Matcha Tea", price: 130 },
        { name: "Hibiscus with Juices", price: 230 },
        { name: "Typical Chai", price: 250 },
        { name: "Flower Ale", price: 250 },
        { name: "Bluepea Latte", price: 250 },
        { name: "Matcha Latte", price: 250 },
        { name: "Tropical Sunset", price: 250 },
        { name: "Matcha with Coconut Water", price: 250 },
      ],
    },
    {
      name: "Artisan Food & Bowls",
      items: [
        { name: "Hummus Toast", price: 250 },
        { name: "Hummus Avocado Toast", price: 300 },
        { name: "Guac-on Toast", price: 300 },
        { name: "Spiced Paneer Toast", price: 200 },
        { name: "Classic Grilled Cheese", price: 200 },
        { name: "Bagel Mushroom Sandwich", price: 250 },
        { name: "Bagel Sundried Tomato", price: 250 },
        { name: "Focaccia Gone Wild", price: 200 },
        { name: "Focaccia Paneer Tikka", price: 200 },
        { name: "Paneer Wrap", price: 250 },
        { name: "Mushroom Taco", price: 250 },
        { name: "Pumpkin Sauce Pasta", price: 300 },
        { name: "Mexican Rice Bowl", price: 300 },
        { name: "Red Velvet Hummus Bowl", price: 300 },
        { name: "Mediterranean Quinoa Salad Bowl", price: 250 },
        { name: "Mango Smoothie Bowl", price: 250 },
        { name: "Banana Smoothie Bowl", price: 250 },
        { name: "Pancake, Maple or Nutella", price: 250 },
      ],
    },
  ],
  "vip-road": [
    {
      name: "Water-based Coffee",
      items: [
        { name: "Filter Kaapi", price: 75 },
        { name: "Espresso", price: 100 },
        { name: "Americano", price: 130 },
        { name: "Cold Brew", price: 200 },
      ],
    },
    {
      name: "Coolers",
      items: [
        { name: "Hibiscus Passion Cooler", price: 250 },
        { name: "Jasmine Peach Cooler", price: 250 },
        { name: "Ginger Pineapple Cooler", price: 250 },
      ],
    },
    {
      name: "Fresh Juices",
      items: [
        { name: "Orange", price: 180 },
        { name: "Cranberry", price: 180 },
        { name: "Pineapple", price: 180 },
        { name: "Coconut Water", price: 150 },
      ],
    },
    {
      name: "Customise it",
      items: [
        { name: "Add a syrup", price: 35 },
        { name: "Swap to almond or oat milk", price: 50 },
      ],
    },
  ],
  bilaspur: [
    {
      name: "Fresh Bakes & Desserts",
      note: "In partnership with Brownie & Co.",
      items: [
        { name: "Matilda Cake", price: 160 },
        { name: "Opera-inspired Cake", price: 140 },
        { name: "Classic Brownie", price: 120 },
        { name: "Ragi Brownie", price: 120 },
        { name: "Hazelnut Brownie", price: 130 },
        { name: "Nutella Brownie", price: 150 },
        { name: "Lotus Biscoff Brownie", price: 150 },
        { name: "Butter Cake Choco-chunk Muffin", price: 80 },
        { name: "NY-style Double Choc-chip Cookie", price: 45 },
      ],
    },
  ],
};

export type CoffeeProduct = {
  handle: string;
  name: string;
  roaster: string;
  origin: string;
  price: number;
  unit: string;
  notes: string;
  badge?: string;
};

// Kept in sync manually with kruptoscoffee.com's current drop — there's no live
// storefront API wired up, so when a new drop launches, update this entry (or ask
// Claude to re-check kruptoscoffee.com and refresh it).
export const coffeeProducts: CoffeeProduct[] = [
  {
    handle: "stairway-to-heaven",
    name: "Stairway to Heaven",
    roaster: "Kruptos Coffee Roasters",
    origin: "Side A & Side B",
    price: 300,
    unit: "bag",
    notes: "Kruptos's debut drop — two sides, one stairway. Full tasting notes on kruptoscoffee.com.",
    badge: "Debut Drop",
  },
];

export type BarRoaster = {
  roaster: string;
  logo?: string;
  note: string;
};

// The guest roasters currently rotating through the 1DM bar's pour-over/guest slot —
// distinct from `coffeeProducts` above (Kruptos's own retail drop on kruptoscoffee.com).
// Update this list whenever the bar's lineup changes.
export const barRoasters: BarRoaster[] = [
  {
    roaster: "Bloom Coffee Roasters",
    logo: "/images/partners/bloom-coffee.png",
    note: "Ask your barista what's on pour — the lineup rotates.",
  },
  {
    roaster: "Capulus Beans",
    logo: "/images/partners/capulus-beans.png",
    note: "Ask your barista what's on pour — the lineup rotates.",
  },
  {
    roaster: "Rossette Coffee Lab",
    logo: "/images/partners/rossette.png",
    note: "Ask your barista what's on pour — the lineup rotates.",
  },
  {
    roaster: "Naivo Coffee Company",
    logo: "/images/partners/naivo.png",
    note: "Ask your barista what's on pour — the lineup rotates.",
  },
  {
    roaster: "Kruptos Coffee Roasters",
    logo: "/images/partners/kruptos.png",
    note: "Our own roastery, poured alongside the guests.",
  },
];

export type EquipmentProduct = {
  handle: string;
  name: string;
  category: "Grinders & Machines" | "Drippers & Servers" | "Kettles & Scales" | "Filters & Accessories";
  buyPrice: number;
  rentPrice?: number;
};

export const equipmentProducts: EquipmentProduct[] = [
  { handle: "df64-gen-2", name: "DF64 Gen 2 Grinder", category: "Grinders & Machines", buyPrice: 43200, rentPrice: 1903 },
  { handle: "fellow-ode-gen-2", name: "Fellow Ode Brew Grinder Gen 2", category: "Grinders & Machines", buyPrice: 52500, rentPrice: 1600 },
  { handle: "comandante-mk4-nitro", name: "Comandante MK4 Nitro", category: "Grinders & Machines", buyPrice: 29000, rentPrice: 1200 },
  { handle: "timemore-chestnut-c3s", name: "Timemore Chestnut C3S", category: "Grinders & Machines", buyPrice: 6500, rentPrice: 450 },
  { handle: "xbloom-studio", name: "xBloom Studio Brewer", category: "Grinders & Machines", buyPrice: 95000, rentPrice: 6500 },
  { handle: "meraki-espresso", name: "Meraki Espresso Machine", category: "Grinders & Machines", buyPrice: 242000, rentPrice: 6998 },
  { handle: "mahlkonig-x54", name: "Mahlkönig X54 Grinder", category: "Grinders & Machines", buyPrice: 53000, rentPrice: 2100 },
  { handle: "mahlkonig-x64-sd", name: "Mahlkönig X64 SD", category: "Grinders & Machines", buyPrice: 65000, rentPrice: 3200 },
  { handle: "baratza-encore-esp", name: "Baratza Encore ESP", category: "Grinders & Machines", buyPrice: 21000, rentPrice: 1100 },

  { handle: "origami-dripper-air-s", name: "Origami Dripper Air S", category: "Drippers & Servers", buyPrice: 3200 },
  { handle: "omni-dripper-2", name: "Omni Dripper 2", category: "Drippers & Servers", buyPrice: 4500 },
  { handle: "ufo-ceramic-black", name: "UFO Ceramic Black Dripper", category: "Drippers & Servers", buyPrice: 5200 },
  { handle: "ufo-v2-midnight", name: "UFO V2 Midnight", category: "Drippers & Servers", buyPrice: 5800 },
  { handle: "hario-v60-server-set", name: "Hario V60 Server Set", category: "Drippers & Servers", buyPrice: 2400 },
  { handle: "hario-cold-water-tower", name: "Hario Cold Water Tower", category: "Drippers & Servers", buyPrice: 24500 },

  { handle: "hario-mizudashi-pot", name: "Hario Mizudashi Pot", category: "Kettles & Scales", buyPrice: 1800 },
  { handle: "flair-cafe-kettle", name: "Flair Cafe Kettle 800ml", category: "Kettles & Scales", buyPrice: 5200 },
  { handle: "brewista-artisan-1l", name: "Brewista Artisan 1L", category: "Kettles & Scales", buyPrice: 8500 },
  { handle: "timemore-fish-smart", name: "Timemore Fish Smart Scale", category: "Kettles & Scales", buyPrice: 6200 },

  { handle: "sibarist-fast-filters", name: "Sibarist FAST Filters", category: "Filters & Accessories", buyPrice: 900 },
  { handle: "chemex-filters", name: "Chemex Filters", category: "Filters & Accessories", buyPrice: 850 },
  { handle: "hario-v60-02-filters", name: "Hario V60-02 Filters", category: "Filters & Accessories", buyPrice: 500 },
  { handle: "aeropress-filters", name: "AeroPress Filters", category: "Filters & Accessories", buyPrice: 600 },
  { handle: "kalita-wave-filters", name: "Kalita Wave Filters", category: "Filters & Accessories", buyPrice: 700 },
];

export const clubTiers = [
  {
    name: "1DM Elite Club",
    price: "₹5,999 to join",
    pitch: "Reserved for you. Forbidden to all — strictly 5 new members a month.",
    perks: [
      "10% off everything, every outlet — plus a free birthday drink and 10% off all day",
      "Priority seating — 1DM doesn't take public reservations, Elite members do",
      "₹3,500 monthly credit line — brew now, settle up at month-end",
      "Zero-deposit equipment rental — pro kettles, scales, grinders, and V60s from ₹1,200/mo",
      "15 hours of complimentary brewing classes every year",
      "Invitation-only Member Circle gatherings — cuppings, mixers, jamming evenings",
    ],
    renewalPrice: "₹2,999 veteran renewal",
  },
  {
    name: "Chakara Privilege",
    price: "By invitation",
    pitch: "The inner circle — for the members who show up every week.",
    perks: ["Everything in 1DM Elite Club", "3-day pickup trials on new roasts, at no cost", "Priority access to Noir by 1DM tastings", "A direct line to the roasting team"],
  },
];

export type EliteNetworkPartner = {
  name: string;
  offer: string;
  cta: string;
  href: string;
};

// The "Elite Network" partner perks from the live 1DM Elite Club page.
export const eliteNetwork: EliteNetworkPartner[] = [
  {
    name: "Kruptos Roastery",
    offer: "10% off all beans, plus first-week exclusive access to new drops.",
    cta: "Visit the roastery",
    href: "/kruptos",
  },
  {
    name: "Chakara Fitness",
    offer: "Elite discounts on annual memberships for the 1DM family.",
    cta: "See Chakara Privilege",
    href: "/club/chakara-privilege",
  },
  {
    name: "The Local",
    offer: "Priority entry and reserved seating at Raipur's premium hub.",
    cta: "Ask at the counter",
    href: "/contact",
  },
  {
    name: "Professional Courses",
    offer: "Discounted rates on expert brewing certifications and SCA modules.",
    cta: "Ask at the counter",
    href: "/contact",
  },
];

// The specialty roasters and tool/community partners 1DM has worked with — carried over
// from the roasters directory on the previous site.
// logo is optional — falls back to a text pill on /kruptos when unset. Real logo files
// live in /public/images/partners.
export type RoasterPartner = { name: string; global?: boolean; logo?: string };

export const roasterPartners: RoasterPartner[] = [
  { name: "Kruptos Coffee" },
  { name: "Blue Tokai", logo: "/images/partners/blue-tokai.png" },
  { name: "Bloom Coffee", logo: "/images/partners/bloom-coffee.png" },
  { name: "Coffee Genetic" },
  { name: "Savourworks", logo: "/images/partners/savorworks.png" },
  { name: "DAK", global: true, logo: "/images/partners/dak.png" },
  { name: "B&W", global: true, logo: "/images/partners/black-and-white.png" },
  { name: "Hydrangea", global: true, logo: "/images/partners/hydrangea.png" },
  { name: "Hatch", global: true, logo: "/images/partners/hatch.png" },
  { name: "El Bueno", logo: "/images/partners/el-bueno.png" },
  { name: "Handcrafted" },
  { name: "Half Light" },
  { name: "South Indian Coffee Company" },
  { name: "Groundzero", logo: "/images/partners/ground-zero.png" },
  { name: "Kokoro", logo: "/images/partners/kokoro.png" },
  { name: "Rossette Coffee Lab", logo: "/images/partners/rossette.png" },
  { name: "Kapikottai", logo: "/images/partners/kapikottai.png" },
  { name: "Siolim Coffee" },
  { name: "Capulus Beans", logo: "/images/partners/capulus-beans.png" },
  { name: "Quick Brown Fox", logo: "/images/partners/quick-brown-fox.png" },
  { name: "Naivo Coffee", logo: "/images/partners/naivo.png" },
];

export const communityPartners: RoasterPartner[] = [
  { name: "Brewing Gadgets" },
  { name: "Benki Tools" },
  { name: "Floating Everyday" },
  { name: "Chakara Fitness", logo: "/images/partners/chakra-raipur.png" },
  { name: "The Local" },
  { name: "Shimmmi", logo: "/images/partners/shimmmi.png" },
];

export const founder = {
  name: "Akhand Mishra",
  role: "Founder & CEO",
  bio: "Akhand founded 1DollarMoffe Pvt. Ltd. and built both 1DM Cafe and Kruptos Coffee Roasters from the ground up — from the first $1 cup off a coffee truck in Pune to a ten-outlet chain and Raipur's first dedicated specialty roastery. He runs the operations across every outlet personally, and has built much of the brand's operational and digital backbone himself, from the inventory systems that keep the cafes stocked to the identity and packaging that carry the Kruptos name. Nothing goes on a 1DM menu without his sign-off — every new drink and dish goes through rounds of R&D and cupping first, built on his own ongoing study of coffee and food, and on close collaboration with the roasters, chefs, and brands 1DM partners with. The menu is the part of the business he obsesses over the most.",
};

export type TeamMember = {
  name: string;
  role: string;
  credentials: string;
  // Optional real photo — falls back to an initials monogram on /story when unset.
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Tushar Nagarchi",
    role: "Barista Trainer",
    credentials: "Multiple barista championship wins · SCA Authorised Barista · Coffee Board of India Certified",
    photo: "/images/team/tushar-nagarchi.jpg",
  },
  {
    name: "Abhishek Mishra",
    role: "Brewing & Extraction Lead",
    credentials: "National-Level AeroPress Championship winner · SCA Certified Barista",
    photo: "/images/team/abhishek-mishra.jpg",
  },
  {
    name: "Shreya Mishra",
    role: "Head Barista",
    credentials: "Pulling shots since 19 · Actress and model turned barista, choosing coffee over the camera",
    photo: "/images/team/shreya-mishra.jpg",
  },
  {
    name: "Shreya Sahu",
    role: "Beverage R&D Lead",
    credentials: "Assistant Roaster at Kruptos, roasting alongside Akhand · Develops new beverages for 1DM and Slice",
    photo: "/images/team/shreya-sahu.jpg",
  },
  {
    name: "Adnan Sheikh",
    role: "Head Chef",
    credentials: "Leads the Food & Bakery R&D team · Builds the kitchen menu from scratch, outlet to outlet",
    photo: "/images/team/adnan-sheikh.jpg",
  },
  {
    name: "Sanskar",
    role: "Food Consultant",
    credentials: "Food & Bakery R&D, working with Head Chef Adnan on every new dish before it reaches the menu",
    photo: "/images/team/sanskar.jpg",
  },
  {
    name: "Luffy",
    role: "Chief Bark-ista",
    credentials: "Self-appointed captain of the crumb patrol · Undefeated in the Grand Line of belly rubs · Refuses decaf on principle",
    photo: "/images/team/luffy.jpg",
  },
];
