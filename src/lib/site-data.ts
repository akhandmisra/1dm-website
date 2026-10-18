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

export const contactInfo = {
  phone: "+91 9179241042",
  phoneHref: "tel:+919179241042",
  email: "hello@1dollarmoffee.com",
  instagramHandle: "@1dollarmoffee",
  instagramUrl: "https://www.instagram.com/1dollarmoffee/",
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
    hours: "11:00 AM – 10:30 PM, daily",
    menuStatus: "live",
    mapsUrl: mapsSearchUrl("1DM Samta Cafe, Raipur"),
    heroImage: "/images/food/bagel-sandwich.jpg",
  },
  {
    slug: "dumartarai",
    name: "1DM Dumartarai",
    city: "Raipur",
    hours: "10:00 AM – 8:00 PM, closed Sundays",
    menuStatus: "live",
    mapsUrl:
      "https://www.google.com/maps/place/1DM+Specialty+Coffee/data=!4m2!3m1!1s0x0:0x2e3464ea6f04c378?sa=X&ved=1t:2428&hl=en-GB&ictx=111",
  },
  {
    slug: "bilaspur",
    name: "1DM Bilaspur",
    city: "Bilaspur",
    hours: "12:00 PM – 10:00 PM, daily",
    menuStatus: "live",
    mapsUrl: mapsSearchUrl("1DM Bilaspur Cafe"),
  },
  {
    slug: "tagore",
    name: "1DM Tagore Nagar",
    city: "Raipur",
    hours: "9:00 AM – 10:00 PM, daily",
    menuStatus: "live",
    mapsUrl: mapsSearchUrl("1DM Tagore Nagar Cafe, Raipur"),
  },
  { slug: "slice-vip-road", name: "Slice By 1DM VIP Road", city: "Raipur", hours: "Coming soon", menuStatus: "soon", mapsUrl: mapsSearchUrl("Slice By 1DM VIP Road, Raipur") },
  {
    slug: "slice-shankar-nagar",
    name: "Slice By 1DM Shankar Nagar",
    city: "Raipur",
    hours: "12:00 PM – 10:00 PM, closed Tuesdays",
    menuStatus: "live",
    mapsUrl:
      "https://www.google.com/maps/place/SLICE+BY+1DM/data=!4m2!3m1!1s0x3a28ddc16768623b:0x8da9884a73fb5713?sa=X&ved=1t:242&hl=en-GB&ictx=111",
  },
  { slug: "civil-line", name: "1DM Civil Line", city: "Raipur", hours: "Coming soon", menuStatus: "soon", mapsUrl: mapsSearchUrl("1DM Civil Line Cafe, Raipur") },
  {
    slug: "avanti",
    name: "1DM Avanti Vihar",
    city: "Raipur",
    hours: "9:00 AM – 10:30 PM, closed Thursdays",
    menuStatus: "live",
    mapsUrl: mapsSearchUrl("1DM Avanti Vihar Cafe, Raipur"),
  },
  {
    slug: "bhilai",
    name: "1DM Bhilai",
    city: "Bhilai",
    hours: "11:00 AM – 10:00 PM, closed Mondays",
    menuStatus: "live",
    mapsUrl: mapsSearchUrl("1DM Bhilai Cafe"),
  },
  { slug: "jagdalpur", name: "1DM Jagdalpur", city: "Jagdalpur", hours: "Coming soon", menuStatus: "soon", mapsUrl: mapsSearchUrl("1DM Cafe Jagdalpur") },
];

export type MenuCategory = {
  name: string;
  note?: string;
  items: { name: string; price: number; note?: string }[];
};

// The "Daily Pour" menu — 1DM's standard menu, printed as a 12-page
// newspaper-style handout (Vol. 01, The Menu Edition). It comes in two
// real editions from the printer, and this file now mirrors that split
// instead of flattening it into one shared menu (an earlier round wrongly
// put the combined edition at every outlet — see the status doc):
//   - The VEGETARIAN EDITION ("100% vegetarian menu" on its own notice
//     box) — no eggs, no chicken, anywhere.
//   - The VEG & NON-VEG EDITION — the same drinks and kitchen menu, plus
//     an "Eggs & chicken" page, chicken/egg options folded into several
//     breakfast platters, a Chicken Panuozzo, a Chicken Taco and a Pesto
//     Chicken Salad.
// Transcribed in full from both handouts on 2026-10-18, including every
// price. Every category that's identical between the two editions below
// is defined once and shared by reference — edit it once here and both
// editions update together; only the handful of categories that actually
// differ (Breakfast Platters, Panuozzo, plus the three non-veg-only
// categories) are duplicated. "Chicken Panuozzo" is genuinely cross-listed
// in both Signature Chicken Mains and Panuozzo in the non-veg handout —
// kept in both to match. Bilaspur's previous "Fresh Bakes & Desserts, in
// partnership with Brownie & Co." category is not part of either edition
// and stays dropped — reintroduce it as a Bilaspur-only addendum if that
// partnership is still active and should stay on the site.

const shortAndStrong: MenuCategory = {
  name: "Short & Strong",
  items: [
    { name: "Espresso", price: 200, note: "Hot · Iced — concentrated, syrupy and bittersweet; the base of every espresso drink." },
    { name: "Americano", price: 200, note: "Hot · Iced — long, clean and smooth; espresso stretched with water." },
    { name: "Macchiato", price: 220, note: "Hot · Iced — espresso marked with a spoonful of milk foam." },
    { name: "Cortado", price: 230, note: "Hot · Iced — equal parts espresso and milk; bold, balanced and smooth." },
  ],
};

const milkAndSilk: MenuCategory = {
  name: "Milk & Silk",
  note: "Double shot, silky milk.",
  items: [
    { name: "Artisan Mocha", price: 280, note: "Hot · Iced — coffee and chocolate in balance; rich and dessert-like." },
    { name: "Spanish Latte", price: 250, note: "Hot — silky and sweet, with a caramel-like richness from condensed milk." },
    { name: "Vietnamese Latte", price: 250, note: "Iced — bold, sweet and creamy; condensed milk meets a long, strong shot." },
    { name: "Cafe Latte", price: 230, note: "Hot · Iced — smooth and milky, finished with a light layer of foam." },
    { name: "Cappuccino", price: 230, note: "Hot · Iced — airy, thick foam over a rich espresso base." },
    { name: "Flat White", price: 200, note: "Hot · Iced — strong coffee under a thin, velvety micro-foam." },
  ],
};

const houseFavourite: MenuCategory = {
  name: "The House Favourite",
  items: [
    {
      name: "1DM Cuppa & a Bake",
      price: 250,
      note: "Our signature small cup — gentle coffee, creamy milky finish. Bake included: tea cake, muffin, Korean bun or mini croissants. Tea cake with any other drink, +89.",
    },
  ],
};

const espressoSignatures: MenuCategory = {
  name: "Espresso Signatures",
  note: "The drinks people come back for. Every signature, 250.",
  items: [
    { name: "Shaken Espresso", price: 250, note: "Iced — chilled, frothy espresso sweetened with jaggery, topped with a tiramisu cloud." },
    { name: "Clarified Iced Latte", price: 250, note: "Iced — clear as tea, creamy in flavour; all the taste of a latte without the cloudiness." },
    { name: "Honey Cinnamon Latte", price: 250, note: "Hot · Iced — warm spice and floral sweetness, built right into the espresso." },
    { name: "Jaggery Flat White", price: 250, note: "Hot — our flat white, sweetened the Indian way with jaggery." },
    { name: "1DM Flat White", price: 250, note: "Hot — the house take on the flat white; strong, silky and smooth." },
    { name: "Affogato", price: 250, note: "Hot espresso melting into cold vanilla ice cream." },
  ],
};

const cloudCreations: MenuCategory = {
  name: "Cloud Creations",
  note: "Airy cream clouds, only at 1DM. Every one, 250.",
  items: [
    { name: "Mango Espresso Cloud", price: 250, note: "Iced — tropical mango and coconut water under a salted-butter espresso cloud." },
    { name: "Cookie Butter Iced Latte", price: 250, note: "Iced — Biscoff sweetness in an iced latte, finished with a tiramisu cloud." },
    { name: "Cold Brew Cloud", price: 250, note: "Iced — smooth cold brew under a sweet, creamy syrup cloud." },
    { name: "1DM Iced Chocolate", price: 250, note: "Iced — cold, blended chocolate topped with a tiramisu cloud." },
    { name: "Bluepea Berry", price: 250, note: "Iced · caffeine-free — berry and coconut water under a bluepea cloud. Colourful and refreshing." },
  ],
};

const espressoCoolers: MenuCategory = {
  name: "Espresso Coolers",
  note: "Coffee mocktails. Every one, 250.",
  items: [
    { name: "Espresso Tonic / Ale", price: 250, note: "Iced — bittersweet and sparkling; a coffee-forward refresher." },
    { name: "Espresso with Juices", price: 250, note: "Iced — bright, fruity and fizzy." },
    { name: "Mixed Berry Tonic", price: 250, note: "Iced — sweet berry, sparkling tonic and a bright shot of espresso." },
  ],
};

const coldBrew: MenuCategory = {
  name: "Cold Brew",
  note: "Bisal Munti Single Estate, roasted by Kruptos · steeped for 24 hours. Any shot can be lengthened with tonic, ginger ale or juice, +50.",
  items: [
    { name: "Cold Brew Classic", price: 230, note: "Iced — smooth, low in acidity and naturally sweet." },
    { name: "Cold Brew Lemonade", price: 250, note: "Iced — sweet-tart lemonade layered with smooth cold brew." },
    { name: "Cold Brew with Tonic", price: 250, note: "Iced — crisp, bittersweet and bubbly." },
    { name: "Cold Brew with Juice", price: 250, note: "Iced — smooth cold brew with a fruity, sparkling lift." },
    { name: "Mont Blanc", price: 250, note: "Iced — cold brew crowned with a snowy cream top." },
  ],
};

const handBrewed: MenuCategory = {
  name: "Hand-Brewed",
  note: "Aeropress, V60, Origami, Chemex or French Press — clean, bright and aromatic, brewed by hand on Bisal Munti Single Estate.",
  items: [
    { name: "Hand-Brewed Pour-Over", price: 269, note: "Hot · Iced · Indian micro-lot +50 · International micro-lot +120." },
  ],
};

const teasAndInfusions: MenuCategory = {
  name: "Teas & Infusions",
  note: "Brewed to order, hot or iced.",
  items: [
    { name: "Hibiscus", price: 139, note: "Caffeine-free — tart and ruby-red." },
    { name: "Chamomile", price: 139, note: "Caffeine-free — soft and floral." },
    { name: "Blue Pea", price: 139, note: "Caffeine-free — floral, deep-blue butterfly pea." },
    { name: "Rose Tea", price: 139, note: "Gently fragrant and floral." },
    { name: "Kashmiri Kahwa", price: 139, note: "A warming, spiced green tea from the valley." },
    { name: "Matcha", price: 139, note: "Vivid, earthy and umami-rich, whisked to order." },
  ],
};

const matchaAndTeaLattes: MenuCategory = {
  name: "Matcha & Tea Lattes",
  items: [
    { name: "Mango Matcha Latte", price: 300, note: "Iced — mango at the base, matcha and milk on top." },
    { name: "Mixed Berry Matcha Latte", price: 300, note: "Iced — berry at the base, matcha and milk on top." },
    { name: "Strawberry Matcha Latte", price: 300, note: "Iced — strawberry at the base, matcha and milk on top." },
    { name: "Matcha Latte", price: 250, note: "Hot · Iced — earthy matcha rounded out with milk." },
    { name: "Matcha Latte Cloud", price: 250, note: "Iced — our matcha latte, finished with a soft cloud." },
    { name: "Bluepea Latte", price: 250, note: "Hot · Iced · caffeine-free — creamy, caramel-sweet and colourful." },
  ],
};

const coolers: MenuCategory = {
  name: "Coolers",
  note: "Fizzy, fruity and made for hot afternoons. Every cooler, 250.",
  items: [
    { name: "Tropical Sunset", price: 250, note: "Iced · caffeine-free — hibiscus, orange or mango and pineapple, with a honey finish." },
    { name: "Typical Chai", price: 250, note: "Iced · caffeine-free — zingy ginger fizz with a tart hibiscus edge." },
    { name: "Flower Ale", price: 250, note: "Iced · caffeine-free — ginger ale with the deep blue of butterfly pea." },
    { name: "Hibiscus with Juices", price: 250, note: "Iced · caffeine-free — tart, fruity and sparkling." },
    { name: "Mango Heat Fizz", price: 250, note: "Iced — mango with a little heat, lifted with fizz." },
    { name: "Matcha with Coconut Water", price: 250, note: "Iced — light, hydrating and gently sweet." },
    { name: "Mom's Hot Chocolate", price: 250, note: "Hot — thick, creamy and deeply chocolatey." },
  ],
};

const kombucha: MenuCategory = {
  name: "Kombucha",
  note: "By Shimmmi. Small-batch, sparkling fermented tea.",
  items: [
    { name: "Kombucha Cans", price: 130, note: "Mango + Jalapeño · Cranberry + Star Anise · Blackberry + Cinnamon." },
    { name: "Kombucha Bottles", price: 200, note: "Ginger Grass · Lovely Lavender · Kaffir Limey Hopbucha." },
  ],
};

const customizeIt: MenuCategory = {
  name: "Customize It",
  note: "Make it yours.",
  items: [
    { name: "Slice of Tea Cake", price: 89 },
    { name: "Upgrade to The Vibrant Espresso", price: 30, note: "Kruptos Coffee Roasters — medium-light, mixed berries." },
    { name: "Oat or Almond Milk", price: 80 },
    { name: "Coconut Milk", price: 100 },
    { name: "Sweetened Cold Foam", price: 60 },
    { name: "Syrup", price: 30 },
    { name: "Tonic, Ginger Ale or Juice", price: 50 },
  ],
};

// Breakfast Platters — differs by edition: the Veg Edition has no egg or
// chicken anywhere; the Veg & Non-Veg Edition folds chicken sausage,
// grilled chicken breast or egg options into five of the six platters
// (the Vegan platter is unchanged either way).
const breakfastPlattersVeg: MenuCategory = {
  name: "Breakfast Platters",
  note: "Every platter comes with your choice of tea, coffee or fresh juice.",
  items: [
    { name: "Heavy Protein", price: 799, note: "Grilled paneer or tofu, German mashed potatoes, warm baked beans, mushroom patty, giant artisanal bread basket, sautéed greens, house dips and fresh fruits." },
    { name: "Green", price: 699, note: "Grilled veggies with mushroom, paneer and tofu, golden hash brown, fresh guacamole, cherry tomatoes and radish, artisanal bread basket and fresh fruits. With green tea or fresh juice." },
    { name: "French", price: 599, note: "One signature fluffy pancake, one brioche French toast, warm butter croissant, mushroom patty, house salad, dips and fresh fruits." },
    { name: "English", price: 499, note: "Choice of hummus or paneer, warm baked beans, grilled veggies, house dips, artisanal bread basket and fresh fruit." },
    { name: "Pahadi", price: 499, note: "Choice of paneer or tofu bhurji, golden crisp hash brown, artisanal bread basket, four house dips, house garden salad and fresh fruits." },
    { name: "Vegan", price: 450, note: "Vegan — mushroom patty, grilled zucchini, tofu scramble, guacamole, hummus and an artisanal bread basket." },
  ],
};

const breakfastPlattersVegNonVeg: MenuCategory = {
  name: "Breakfast Platters",
  note: "Every platter comes with your choice of tea, coffee or fresh juice. Egg and chicken options marked.",
  items: [
    { name: "Heavy Protein", price: 799, note: "Non-veg option — grilled chicken breast, paneer or tofu, German mashed potatoes, warm baked beans, mushroom patty or chicken sausage, giant artisanal bread basket, sautéed greens, house dips and fresh fruits." },
    { name: "Green", price: 699, note: "Non-veg option — grilled veggies with mushroom, paneer and tofu, hash brown or chicken sausage, fresh guacamole, cherry tomatoes and radish, artisanal bread basket, choice of eggs and fresh fruits. With green tea or fresh juice." },
    { name: "French", price: 599, note: "Non-veg option — one signature fluffy pancake, one brioche French toast, warm butter croissant, mushroom patty or chicken sausage, house salad, dips and fresh fruits." },
    { name: "English", price: 499, note: "Non-veg option — choice of eggs, hummus, sausage or paneer, warm baked beans, grilled veggies, house dips, artisanal bread basket and fresh fruit." },
    { name: "Pahadi", price: 499, note: "Non-veg option — choice of paneer, tofu or egg bhurji, golden crisp hash brown, artisanal bread basket, four house dips, house garden salad and fresh fruits." },
    { name: "Vegan", price: 450, note: "Vegan — mushroom patty, grilled zucchini, tofu scramble, guacamole, hummus and an artisanal bread basket." },
  ],
};

// Non-veg-only categories — from the "Eggs & chicken" page, which doesn't
// exist at all in the Vegetarian Edition handout.
const artisanalEggs: MenuCategory = {
  name: "Artisanal Eggs",
  note: "Non-veg · cooked to order, served on butter-toasted sourdough.",
  items: [
    { name: "Egg Benedict with Avocado", price: 350, note: "Poached eggs on fresh Hass avocado and a warm English muffin or sourdough, with rich house hollandaise." },
    { name: "Mushroom Omelette", price: 250, note: "Fluffy three-egg French-style omelette, folded around garlic-butter wild mushrooms and melted cheese." },
    { name: "Scrambled Eggs", price: 200, note: "Soft, creamy scrambled eggs with fresh herbs on butter-toasted sourdough. Add guacamole, +150." },
    { name: "Sunny Side-Up", price: 200, note: "Golden, runny-yolk fried eggs with crackled edges, cracked black pepper and sea salt, over sourdough. Add guacamole, +150." },
  ],
};

const gourmetSalad: MenuCategory = {
  name: "Gourmet Salad",
  note: "Non-veg.",
  items: [
    { name: "Pesto Chicken Salad", price: 380, note: "Herb-grilled chicken breast with crisp garden greens, cherry tomatoes, bocconcini, roasted pine nuts and a creamy basil pesto dressing." },
  ],
};

const signatureChickenMains: MenuCategory = {
  name: "Signature Chicken Mains",
  note: "Non-veg.",
  items: [
    { name: "Harissa Chicken Flatbread", price: 400, note: "Chef's pick — fire-baked flatbread with harissa-glazed chicken, caramelised onions, mozzarella and hot ranch." },
    { name: "Chipotle Chicken Rice Bowl", price: 399, note: "Mexican seasoned rice with smoky chipotle grilled chicken, baked beans, sweet corn salsa, fresh guacamole and house sour cream." },
    { name: "Harissa Chicken Sandwich", price: 350, note: "Spicy harissa grilled chicken in toasted sourdough or focaccia, with house sauce, melted cheese and crisp lettuce." },
    { name: "Grilled Chicken Wrap", price: 350, note: "Chargrilled chicken strips, shredded lettuce, melted mozzarella, creamy slaw and house chilli spread in a grilled tortilla." },
    { name: "Chicken Panuozzo", price: 350, note: "Herb-grilled chicken in warm panuozzo bread." },
    { name: "Chicken Taco", price: 300, note: "Soft tortillas with seasoned grilled chicken, tomato pico de gallo, crisp lettuce, cheese and a cool garlic yoghurt drizzle." },
  ],
};

const sandwichesAndBagels: MenuCategory = {
  name: "Sandwiches & Bagels",
  items: [
    { name: "Focaccia Gone Wild", price: 350, note: "Our loaded focaccia, pressed hot and piled high." },
    { name: "Focaccia Paneer Tikka", price: 350, note: "Spiced paneer tikka in toasted focaccia." },
    { name: "Hot Mushroom Melt", price: 350, note: "Mushrooms and melted cheese, pressed hot." },
    { name: "Avocado Cream Cheese Bagel", price: 329, note: "Jain available — freshly crushed avocado and cream cheese on a toasted bagel." },
    { name: "Sun-dried Tomato Bagel", price: 250, note: "Jain available — warm toasted bagel with sun-dried tomato spread and herbs." },
    { name: "Mushroom Bagel", price: 250, note: "Toasted bagel with a savoury mushroom filling." },
    { name: "Classic Grilled Cheese", price: 200, note: "Jain available — melted artisan cheese on toasted sourdough. Add harissa or pesto, +50." },
  ],
};

// Panuozzo — differs by edition: the Veg Edition has 2 items, the Veg &
// Non-Veg Edition adds Chicken Panuozzo as a 3rd (same item also listed
// under Signature Chicken Mains in that edition — intentional, matches
// the source handout).
const panuozzoVeg: MenuCategory = {
  name: "Panuozzo",
  note: "Italian sandwiches, baked in their own bread.",
  items: [
    { name: "Caprese Panuozzo", price: 350, note: "Tomato, mozzarella and basil in warm panuozzo bread." },
    { name: "Spiced Paneer Panuozzo", price: 350, note: "Spiced paneer in warm panuozzo bread." },
  ],
};

const panuozzoVegNonVeg: MenuCategory = {
  name: "Panuozzo",
  note: "Italian sandwiches, baked in their own bread.",
  items: [
    { name: "Chicken Panuozzo", price: 350, note: "Non-veg · herb-grilled chicken in warm panuozzo bread." },
    { name: "Caprese Panuozzo", price: 350, note: "Tomato, mozzarella and basil in warm panuozzo bread." },
    { name: "Spiced Paneer Panuozzo", price: 350, note: "Spiced paneer in warm panuozzo bread." },
  ],
};

const garlicBreads: MenuCategory = {
  name: "Garlic Breads",
  items: [
    { name: "Stuffed Garlic Bread", price: 329, note: "Garlic bread with a cheesy, stuffed centre. Add paneer, +50." },
    { name: "Indi Garlic Bread", price: 250, note: "Garlic bread with an Indian spice twist." },
    { name: "Classic Garlic Bread", price: 200, note: "Toasted bread with garlic butter and herbs." },
  ],
};

const subs: MenuCategory = {
  name: "Subs",
  items: [
    { name: "Vegan Sub", price: 300, note: "Vegan — artisanal bread stuffed with grilled veggies, avocado spread and vegan house dressing." },
    { name: "Paneer Sub", price: 250, note: "A soft sub roll filled with spiced paneer and fresh greens." },
    { name: "Shrooms Sub", price: 250, note: "A soft sub roll filled with a savoury mushroom patty." },
  ],
};

const sliders: MenuCategory = {
  name: "Sliders",
  note: "Mini buns, big on flavour.",
  items: [
    { name: "Sliders, Set of 3", price: 350, note: "Three mini burgers with your choice of filling — paneer, mushroom or beetroot." },
    { name: "Sliders, Set of 2", price: 250, note: "Two mini burgers with your choice of filling — paneer, mushroom or beetroot." },
  ],
};

const fries: MenuCategory = {
  name: "Fries",
  note: "Hot, crisp and made for sharing.",
  items: [
    { name: "Loaded Fries", price: 250, note: "Golden fries loaded with melted cheese sauce, jalapeños and herbs." },
    { name: "Peri Peri Fries", price: 200, note: "Crisp fries tossed in smoky, spicy peri peri seasoning." },
    { name: "Salted Fries", price: 180, note: "Classic golden fries with a sprinkle of sea salt." },
  ],
};

const wrapsTacosAndNachos: MenuCategory = {
  name: "Wraps, Tacos & Nachos",
  items: [
    { name: "Grilled Paneer Wrap", price: 300, note: "Grilled paneer, greens and onions in a toasted wrap, with a dip on the side." },
    { name: "Loaded Nachos", price: 300, note: "Vegan — crisp tortilla chips topped with spiced beans, salsa and guacamole." },
    { name: "Nachos Salad", price: 300, note: "Crunchy tortilla chips tossed through a fresh salad." },
    { name: "Taco", price: 250, note: "A crisp taco shell with a spiced, fresh filling." },
  ],
};

const openToasts: MenuCategory = {
  name: "Open Toasts",
  note: "On toasted sourdough.",
  items: [
    { name: "Tomato & Balsamic Bruschetta", price: 200, note: "Diced tomato, fresh basil and a splash of balsamic, piled on toasted sourdough." },
    { name: "Whipped Feta Hot Honey", price: 300, note: "Whipped feta with a drizzle of hot honey." },
    { name: "Guac on Toast", price: 300, note: "Vegan — freshly crushed avocado, lemon, microgreens and toasted seeds." },
    { name: "Avocado Toast", price: 300, note: "Jain available — mashed avocado, lemon zest and herbs on crisp sourdough." },
    { name: "Hummus Avocado", price: 300, note: "Whipped hummus layered with fresh avocado." },
    { name: "Creamy Mushroom Melt", price: 300, note: "Creamy mushrooms under melted cheese." },
    { name: "Hummus on Toast", price: 250, note: "Vegan — freshly whipped hummus, olive oil and herbs." },
    { name: "Spiced Paneer Toast", price: 250, note: "Spiced paneer on a crisp toast." },
  ],
};

const riceBowls: MenuCategory = {
  name: "Rice Bowls",
  items: [
    { name: "Mexican Bowl", price: 300, note: "Mexican seasoned rice, beans, fresh corn salad, salsa, guacamole and sour cream." },
    { name: "Italian Rice Bowl", price: 300, note: "Herb butter rice with sun-dried tomatoes, olives, pesto and grilled veggies." },
  ],
};

const salads: MenuCategory = {
  name: "Salads",
  items: [
    { name: "Cous Cous Salad", price: 350, note: "Vegan — fluffy couscous with roasted Mediterranean vegetables and a citrus herb dressing." },
    { name: "Green Goddess Salad", price: 279, note: "Fresh greens, microgreens, avocado, cucumber and a creamy herb dressing." },
    { name: "Pasta Salad", price: 259, note: "Vegan — chilled pasta with black olives, crisp veggies and a light vinaigrette." },
  ],
};

const smoothieBowls: MenuCategory = {
  name: "Smoothie Bowls",
  items: [
    { name: "Mango Smoothie Bowl", price: 300, note: "Jain available — thick mango purée topped with kiwi, chia seeds, banana and granola." },
    { name: "Banana Smoothie Bowl", price: 250, note: "Jain available — creamy banana blend with toasted seeds, blueberries and roasted nuts." },
    { name: "Coconut Smoothie Bowl", price: 250, note: "Jain available — coconut milk base layered with tropical fruits and coconut flakes." },
  ],
};

const sweetThings: MenuCategory = {
  name: "Sweet Things",
  items: [
    { name: "Custard French Toast", price: 300, note: "Jain available — golden brioche soaked in rich custard, with maple syrup, Nutella or Biscoff. Add caramelised banana, blueberry or cream cheese, +160." },
    { name: "Pancake", price: 300, note: "Jain available — fluffy pancakes with maple syrup, Nutella or Biscoff." },
    { name: "Tea Cake", price: 89, note: "A soft slice to go with any drink." },
  ],
};

const perfectPairs: MenuCategory = {
  name: "Perfect Pairs",
  note: "Seven food and coffee pairs, put together by our baristas. Say the number at the counter and save.",
  items: [
    { name: "1 · The Morning Cuppa", price: 250, note: "1DM Cuppa + your pick of bake · bake included" },
    { name: "2 · The Cheese Pull", price: 389, note: "Classic Grilled Cheese + Cappuccino · save 41 vs. 430" },
    { name: "3 · The Italian Job", price: 399, note: "Tomato & Balsamic Bruschetta + Espresso Tonic · save 51 vs. 450" },
    { name: "4 · The Wrap Up", price: 479, note: "Grilled Paneer Wrap + Cold Brew Classic · save 51 vs. 530" },
    { name: "5 · The Sub Club", price: 399, note: "Shrooms Sub + Americano · save 51 vs. 450" },
    { name: "6 · The Sunny Bowl", price: 499, note: "Mango Smoothie Bowl + Matcha Latte · save 51 vs. 550" },
    { name: "7 · The Sweet Tooth", price: 499, note: "Custard French Toast + Spanish Latte · save 51 vs. 550" },
  ],
};

// The Vegetarian Edition — every live outlet except Tagore Nagar.
export const dailyPourMenuVeg: MenuCategory[] = [
  shortAndStrong,
  milkAndSilk,
  houseFavourite,
  espressoSignatures,
  cloudCreations,
  espressoCoolers,
  coldBrew,
  handBrewed,
  teasAndInfusions,
  matchaAndTeaLattes,
  coolers,
  kombucha,
  customizeIt,
  breakfastPlattersVeg,
  sandwichesAndBagels,
  panuozzoVeg,
  garlicBreads,
  subs,
  sliders,
  fries,
  wrapsTacosAndNachos,
  openToasts,
  riceBowls,
  salads,
  smoothieBowls,
  sweetThings,
  perfectPairs,
];

// The Veg & Non-Veg Edition — Tagore Nagar only, the one outlet that
// serves chicken and eggs.
export const dailyPourMenuVegNonVeg: MenuCategory[] = [
  shortAndStrong,
  milkAndSilk,
  houseFavourite,
  espressoSignatures,
  cloudCreations,
  espressoCoolers,
  coldBrew,
  handBrewed,
  teasAndInfusions,
  matchaAndTeaLattes,
  coolers,
  kombucha,
  customizeIt,
  breakfastPlattersVegNonVeg,
  artisanalEggs,
  gourmetSalad,
  signatureChickenMains,
  sandwichesAndBagels,
  panuozzoVegNonVeg,
  garlicBreads,
  subs,
  sliders,
  fries,
  wrapsTacosAndNachos,
  openToasts,
  riceBowls,
  salads,
  smoothieBowls,
  sweetThings,
  perfectPairs,
];

// Tagore Nagar is 1DM's only non-veg outlet (confirmed by Akhand,
// 2026-10-18) and gets the Veg & Non-Veg Edition; every other live outlet
// is pure veg and gets the Vegetarian Edition. Both constants above are
// shared by reference across every outlet that uses them, so a future
// menu-wide update is still a single edit, not one per location.
export const menuByLocation: Record<string, MenuCategory[]> = {
  samta: dailyPourMenuVeg,
  dumartarai: dailyPourMenuVeg,
  bilaspur: dailyPourMenuVeg,
  avanti: dailyPourMenuVeg,
  bhilai: dailyPourMenuVeg,
  tagore: dailyPourMenuVegNonVeg,
  "slice-shankar-nagar": dailyPourMenuVeg,
};

// A location's `menuStatus` says whether the cafe itself is open; it does
// NOT mean a real menu has been entered into `menuByLocation` yet (several
// "live" outlets still have no menu content — see the project status doc).
// Anything that links to a per-location menu page should check this, not
// `menuStatus` directly, or it produces a real dead link: `/menu/<slug>`
// calls notFound() and returns an actual HTTP 404 when there's no entry
// here, which Sitechecker flagged as "internal links to 4xx pages".
export function hasLiveMenu(slug: string): boolean {
  return Boolean(menuByLocation[slug]);
}

// ---------------------------------------------------------------------------
// Menu page photography & partner logos
//
// The printed A3 Daily Pour menu this site's menu pages are transcribed from
// is full of photography and ends with a roaster-partner logo wall — neither
// made it into the first web version of the menu. These extend MenuPager
// (src/components/menu-pager.tsx) with that same material: real photos shot
// for the print menu (extracted from the source PDFs the brand supplied,
// cropped to remove stray print layout that bled in during extraction) and
// the exact 20-logo partner wall, split exactly as the PDF splits it
// ("Roasters we have partnered with" / "From abroad").
// ---------------------------------------------------------------------------

export type MenuPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

// One representative photo per page-turn of the regular (non-Pairs,
// non-Roasters) menu pages. MenuPager chunks a location's categories 4-per-
// page and, for each page, uses the photo for the first category in that
// chunk that has an entry here — so not every category needs one, just
// enough that every page gets art. Keyed by MenuCategory.name, shared across
// both editions since the shared categories carry the same name. Captions
// are the print menu's own spread captions where the photo matches exactly.
export const menuCategoryPhotos: Record<string, MenuPhoto> = {
  "The House Favourite": {
    src: "/images/menu/cuppa-and-bake.jpg",
    alt: "A 1DM Cuppa and a bake, the House Favourite",
    caption: "The drinks people come back for.",
  },
  "Cloud Creations": {
    src: "/images/menu/cloud-creations-sunflower.jpg",
    alt: "A Cloud Creations drink topped with its signature cloud",
    caption: "Topped with its signature cloud, every time.",
  },
  "Teas & Infusions": {
    src: "/images/menu/tea-pour.jpg",
    alt: "Tea being poured at the 1DM bar",
    caption: "Floral, earthy or fizzy. Pour it hot, or take it over ice.",
  },
  "Breakfast Platters": {
    src: "/images/menu/breakfast-platter-vegan.jpg",
    alt: "The Vegan breakfast platter, plated",
    caption: "The Vegan platter: mushroom patty, grilled zucchini, tofu scramble and a bread basket.",
  },
  "Sandwiches & Bagels": {
    src: "/images/menu/grilled-cheese.jpg",
    alt: "The Classic Grilled Cheese, cut in half",
    caption: "The Classic Grilled Cheese, pressed on sourdough.",
  },
  Subs: {
    src: "/images/menu/sub-sandwich.jpg",
    alt: "A sub roll sliced open, filled and ready to serve",
    caption: "A sub, fresh off the board.",
  },
  "Open Toasts": {
    src: "/images/menu/bruschetta.jpg",
    alt: "Tomato & Balsamic Bruschetta, held up on toasted sourdough",
    caption: "Tomato & Balsamic Bruschetta, 200. Small plate, big crunch.",
  },
  "Smoothie Bowls": {
    src: "/images/menu/smoothie-bowl.jpg",
    alt: "A Mango Smoothie Bowl, topped and ready to serve",
    caption: "The Mango Smoothie Bowl, topped to order.",
  },
  "Sweet Things": {
    src: "/images/menu/custard-french-toast.jpg",
    alt: "Custard French toast, dusted and plated",
    caption: "Custard French toast and pancakes.",
  },
  Kombucha: {
    src: "/images/menu/kombucha-bottles.jpg",
    alt: "Bottled 1DM kombucha",
    caption: "Canned or bottled, cold and ready.",
  },
};

// The seven Perfect Pairs photos, in the same order as `perfectPairs.items`
// above (1. The Morning Cuppa through 7. The Sweet Tooth).
export const perfectPairPhotos: MenuPhoto[] = [
  { src: "/images/menu/pair-morning-cuppa.jpg", alt: "The Morning Cuppa — a 1DM Cuppa with a bake" },
  { src: "/images/menu/pair-cheese-pull.jpg", alt: "The Cheese Pull — a Classic Grilled Cheese with a Cappuccino" },
  { src: "/images/menu/pair-italian-job.jpg", alt: "The Italian Job — Tomato & Balsamic Bruschetta with an Espresso Tonic" },
  { src: "/images/menu/pair-wrap-up.jpg", alt: "The Wrap Up — a Grilled Paneer Wrap with a Cold Brew Classic" },
  { src: "/images/menu/pair-sub-club.jpg", alt: "The Sub Club — a Shrooms Sub with an Americano" },
  { src: "/images/menu/pair-sunny-bowl.jpg", alt: "The Sunny Bowl — a Mango Smoothie Bowl with a Matcha Latte" },
  { src: "/images/menu/pair-sweet-tooth.jpg", alt: "The Sweet Tooth — Custard French Toast with a Spanish Latte" },
];

export type MenuRoasterLogo = { name: string; logo: string };

// The roaster-partner logo wall from the printed menu's own "Roasters we
// have partnered with" page — distinct from `roasterPartners` /
// `communityPartners` below (the homepage network marquee) and `barRoasters`
// (the 5 roasters currently rotating through the bar). This is the full
// 20-logo list exactly as the print PDF groups it.
export const menuRoasterPartners: { indian: MenuRoasterLogo[]; abroad: MenuRoasterLogo[] } = {
  indian: [
    { name: "Bloom Coffee Roasters", logo: "/images/menu/roasters/bloom-coffee-roasters.png" },
    { name: "Videshi Coffee", logo: "/images/menu/roasters/videshi-coffee.png" },
    { name: "Ground Zero Coffee Roasters", logo: "/images/menu/roasters/ground-zero-coffee-roasters.png" },
    { name: "El Bueno Coffee Roasters", logo: "/images/menu/roasters/el-bueno-coffee-roasters.png" },
    { name: "Corridor Seven Coffee Roasters", logo: "/images/menu/roasters/corridor-seven-coffee-roasters.png" },
    { name: "Siolim Specialty Coffee Roasters", logo: "/images/menu/roasters/siolim-specialty-coffee-roasters.png" },
    { name: "Quick Brown Fox Coffee Roasters", logo: "/images/menu/roasters/quick-brown-fox-coffee-roasters.png" },
    { name: "Kokoro", logo: "/images/menu/roasters/kokoro.png" },
    { name: "Naivo Coffee Company", logo: "/images/menu/roasters/naivo-coffee-company.png" },
    { name: "Capulus Beans", logo: "/images/menu/roasters/capulus-beans.png" },
    { name: "Blue Tokai Coffee Roasters", logo: "/images/menu/roasters/blue-tokai-coffee-roasters.png" },
    { name: "Kapi Kottai", logo: "/images/menu/roasters/kapi-kottai.png" },
    { name: "Savorworks Coffee Roasters", logo: "/images/menu/roasters/savorworks-coffee-roasters.png" },
    { name: "Rossette Coffee Lab", logo: "/images/menu/roasters/rossette-coffee-lab.png" },
    { name: "Half Light Coffee Roasters", logo: "/images/menu/roasters/half-light-coffee-roasters.png" },
    { name: "Tulum Coffee", logo: "/images/menu/roasters/tulum-coffee.png" },
  ],
  abroad: [
    { name: "Black & White Coffee Roasters", logo: "/images/menu/roasters/black-and-white-coffee-roasters.png" },
    { name: "Dak Coffee Roasters", logo: "/images/menu/roasters/dak-coffee-roasters.png" },
    { name: "Hydrangea Coffee Roasters", logo: "/images/menu/roasters/hydrangea-coffee-roasters.png" },
    { name: "Hatch", logo: "/images/menu/roasters/hatch.png" },
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
