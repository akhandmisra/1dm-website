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
};

export const timeline: TimelineEntry[] = [
  {
    year: "2019",
    title: "The first cup, on wheels",
    copy: "1DM begins as a multi-roaster coffee truck in Pune — a one-rupee cup used as the door into specialty coffee for people who'd never tried it.",
  },
  {
    year: "2021",
    title: "Raipur, and roots",
    copy: "The brand plants its flag in Raipur, building toward a sustainable, low-waste model for cafe operations from day one.",
  },
  {
    year: "2024",
    title: "Coffee meets kitchen",
    copy: "A culinary pivot — toasts, bowls, and bakes built to sit alongside the coffee program, not compete with it.",
  },
  {
    year: "2025",
    title: "Six outlets, one year",
    copy: "Rapid expansion across Chhattisgarh — six new cafes open as the operating model matures into something repeatable.",
  },
  {
    year: "2026",
    title: "Kruptos, and outlet ten",
    copy: "Kruptos Coffee Roasters — Raipur's first dedicated specialty roastery — launches under the 1DM umbrella, alongside a tenth outlet in Bilaspur.",
  },
];

export type Location = {
  slug: string;
  name: string;
  city: string;
  hours: string;
  mapsUrl?: string;
  menuStatus: "live" | "soon";
};

export const locations: Location[] = [
  { slug: "samta", name: "1DM Samta", city: "Raipur", hours: "10:30 AM – 11:00 PM, daily", menuStatus: "live" },
  { slug: "vip-road", name: "1DM VIP Road", city: "Raipur", hours: "10:30 AM – 11:00 PM, daily", menuStatus: "live" },
  { slug: "bilaspur", name: "1DM Bilaspur", city: "Bilaspur", hours: "12:00 PM – 10:00 PM, closed Tuesdays", menuStatus: "live" },
  { slug: "tagore", name: "1DM Tagore Nagar", city: "Raipur", hours: "Coming soon", menuStatus: "soon" },
  { slug: "shailendra-nagar", name: "1DM Shailendra Nagar", city: "Raipur", hours: "Coming soon", menuStatus: "soon" },
  { slug: "shankar-nagar-1", name: "1DM Shankar Nagar", city: "Raipur", hours: "Coming soon", menuStatus: "soon" },
  { slug: "shankar-nagar-2", name: "1DM Shankar Nagar II", city: "Raipur", hours: "Coming soon", menuStatus: "soon" },
  { slug: "avanti", name: "1DM Avanti Vihar", city: "Raipur", hours: "Coming soon", menuStatus: "soon" },
  { slug: "bhilai", name: "1DM Bhilai", city: "Bhilai", hours: "Coming soon", menuStatus: "soon" },
  { slug: "pune", name: "1DM Pune", city: "Pune", hours: "Coming soon", menuStatus: "soon" },
];

export type MenuCategory = {
  name: string;
  note?: string;
  items: { name: string; price: number; note?: string }[];
};

export const menuByLocation: Record<string, MenuCategory[]> = {
  samta: [
    {
      name: "The 1 Rupee Signatures",
      items: [
        { name: "1DM Cuppa", price: 1 },
        { name: "1DM Toasties", price: 1 },
        { name: "1DM Green Tea", price: 1, note: "Chamomile · Blue Pea · Matcha · Hibiscus · Rose Oolong · Kashmiri Kahwa" },
      ],
    },
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

export const coffeeProducts: CoffeeProduct[] = [
  {
    handle: "the-dark-side",
    name: "The Dark Side",
    roaster: "Kruptos Coffee Roasters",
    origin: "Chikkamagaluru, India",
    price: 250,
    unit: "100g",
    notes: "Nutty, chocolate, fruity, with a structured aftertaste",
    badge: "Best Seller",
  },
  {
    handle: "bloom",
    name: "Bloom",
    roaster: "Kruptos Coffee Roasters",
    origin: "Koraput, Odisha",
    price: 280,
    unit: "100g",
    notes: "Berries, plum, almond, apple, with a sweet lingering finish",
    badge: "Summer Drop",
  },
  {
    handle: "simple-men",
    name: "Simple Men",
    roaster: "Kruptos Coffee Roasters",
    origin: "Koraput, Odisha",
    price: 250,
    unit: "100g",
    notes: "Fruity, chocolate, with a juicy body",
    badge: "New Release",
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
    name: "1DM Club",
    price: "Membership",
    pitch: "The front door — reserved seating, member drops, and first word on new releases.",
    perks: ["Reserved seating at your home outlet", "Early access to seasonal menu drops", "Member-only pricing on Kruptos beans", "Birthday cup, on the house"],
  },
  {
    name: "Chakara Privilege",
    price: "By invitation",
    pitch: "The inner circle — for the members who show up every week.",
    perks: ["Everything in 1DM Club", "3-day pickup trials on new roasts, at no cost", "Priority access to Noir by 1DM tastings", "A direct line to the roasting team"],
  },
];

export const team = [
  {
    name: "Abhishek Mishra",
    role: "Brewing & Extraction Lead",
    credentials: "National-Level AeroPress Championship winner · SCA Certified Barista",
  },
  {
    name: "Tushar Nagarchi",
    role: "Barista Trainer",
    credentials: "Multiple barista championship wins · SCA Authorised Barista · Coffee Board of India Certified",
  },
];
