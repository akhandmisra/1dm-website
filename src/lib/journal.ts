// The 1DM Journal — brew guides and coffee-knowledge articles. Same
// no-CMS pattern as the rest of the site: content lives here as structured
// data, rendered by src/app/journal/[slug]/page.tsx. Add a new article by
// adding an entry to `journalArticles`; nothing else needs to change.

export type JournalBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type JournalArticle = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
  publishedAt: string; // ISO date
  body: JournalBlock[];
  /** Optional end-of-article buttons; overrides the category defaults. */
  ctas?: { href: string; label: string }[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "coffee-equipment-checklist-new-cafe-india",
    title: "Coffee Equipment Checklist for a New Cafe in India (and What to Buy First)",
    dek: "Everything a new specialty cafe needs behind the bar — espresso machine, grinders, brewing gear, water and the small tools people forget — and which pieces are worth spending on.",
    category: "For business",
    readTime: "7 min read",
    publishedAt: "2026-11-25",
    ctas: [
      { href: "/cafe-consulting", label: "Cafe consulting" },
      { href: "https://kruptoscoffee.com/espresso-machines-chhattisgarh", label: "Espresso machines — buy or rent" },
      { href: "/barista-training", label: "Barista training" },
    ],
    body: [
      {
        type: "paragraph",
        text: "We've set up the bars for every 1DM cafe across Chhattisgarh, and help other cafes do the same. The same mistakes come up again and again: overspending on the espresso machine, underspending on the grinder, and forgetting water filtration until the first service bill. Here's the checklist we work from.",
      },
      { type: "heading", text: "1. Espresso machine" },
      {
        type: "paragraph",
        text: "Size it to your drinks per day. Most new specialty cafes selling 40–150 drinks a day do well with a two-group commercial machine. Busy cafes and hotels need two or three groups from a brand built for volume. Under 40 drinks a day, a good dual-boiler prosumer machine is enough. If you're not sure of your volume yet, rent first.",
      },
      { type: "heading", text: "2. Grinders (plural)" },
      {
        type: "list",
        items: [
          "An on-demand espresso grinder with large flat burrs — this matters as much as the machine.",
          "A second grinder for filter coffee (pour-over, batch brew) or decaf, so you're not constantly re-adjusting the espresso grinder.",
        ],
      },
      { type: "heading", text: "3. Water" },
      {
        type: "paragraph",
        text: "Hard water scales boilers and flattens flavour. Budget for a proper filter or softener from day one, and a direct water line and drain for the machine if your space allows.",
      },
      { type: "heading", text: "4. Brewing gear for filter coffee" },
      {
        type: "list",
        items: [
          "Pour-over drippers (V60 or flat-bottom), servers and filters.",
          "A temperature-controlled gooseneck kettle.",
          "Cold brew setup — immersion pots or a cold drip tower.",
          "AeroPress for quick single cups and events.",
        ],
      },
      { type: "heading", text: "5. The small tools people forget" },
      {
        type: "list",
        items: [
          "0.1 g scales at every station — for espresso and filter.",
          "Tampers, distribution tools, knock box, milk pitchers in two sizes.",
          "Cleaning brushes, backflush detergent, grinder cleaning tablets.",
          "Thermometer, timers, and plenty of clean cloths.",
        ],
      },
      { type: "heading", text: "6. Coffee and training" },
      {
        type: "paragraph",
        text: "Line up a roaster who can supply fresh coffee consistently — ideally one who will build a roast profile or house blend with you — and train your team on your actual machine before you open. Good equipment with untrained staff and stale coffee still makes bad coffee.",
      },
      { type: "heading", text: "Buy, rent, or get help" },
      {
        type: "paragraph",
        text: "In Chhattisgarh, our roastery Kruptos supplies and rents espresso machines, commercial grinders and brewing equipment, and is the authorised Brewing Gadgets dealer for the state. Through 1DM's cafe consulting we'll help you choose the right setup for your budget, get it installed and dialled in, and train your team.",
      },
    ],
  },
  {
    slug: "office-coffee-machine-rental-raipur",
    title: "Office Coffee Machine on Rent in Raipur: Espresso vs Vending",
    dek: "Most offices in Raipur rent an instant-coffee vending machine by default. Here's when renting a real espresso machine makes more sense, what it costs, and how to set it up.",
    category: "For business",
    readTime: "5 min read",
    publishedAt: "2026-11-24",
    ctas: [
      { href: "https://kruptoscoffee.com/coffee-machine-rental", label: "Coffee machines on rent" },
      { href: "/coffee-catering", label: "Coffee for events" },
      { href: "/club", label: "1DM Elite Club" },
    ],
    body: [
      {
        type: "paragraph",
        text: "Ask most offices in Raipur, Bhilai or Bilaspur what coffee machine they have and the answer is a rented vending machine running on premix. It's cheap and simple, and nobody looks forward to it. Your team walks past it to order coffee on an app, or to the cafe downstairs.",
      },
      {
        type: "paragraph",
        text: "We've run specialty coffee bars across Chhattisgarh since 2019, and the question we now hear from offices, co-working spaces and clinics is: can we have that coffee here, without buying a ₹2-lakh machine? Yes — you can rent one.",
      },
      { type: "heading", text: "Vending machine or espresso machine?" },
      {
        type: "list",
        items: [
          "Vending: premix powder, one button, very low cost per cup, very little to manage. Fine if coffee is just a hot drink.",
          "Espresso machine + grinder: freshly roasted beans ground for each cup, real espresso, cappuccino and lattes. Needs a short training and a regular bean supply.",
          "The middle ground: for a small team that mostly drinks black coffee, a good grinder and a batch brewer or pour-over setup costs far less than an espresso machine and still tastes like a cafe.",
        ],
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "Through our roastery, Kruptos Coffee Roasters, an espresso machine rents for about ₹7,000 a month and espresso-capable grinders for roughly ₹1,100–3,200 a month; simpler brewing gear starts from a few hundred rupees. Add your beans — a team drinking 20 espresso drinks a working day uses roughly 7–8 kg of coffee a month. For many offices that works out close to what they already spend on delivery coffee, for much better coffee.",
      },
      { type: "heading", text: "How we set it up" },
      {
        type: "list",
        items: [
          "We suggest a machine and grinder based on your headcount and how many cups a day you drink.",
          "We install it, dial in the recipe on your machine, and train whoever will be making coffee.",
          "Fresh Kruptos beans are delivered on a schedule, so you never run out or end up with stale coffee.",
          "You can keep renting, or buy the machine later — 1DM Elite members get 10% of their rent credited toward the purchase.",
        ],
      },
      { type: "heading", text: "For events, not just offices" },
      {
        type: "paragraph",
        text: "If you need coffee for a day rather than every day — a launch, an offsite, a wedding — renting a machine on its own isn't the answer, because someone still has to make the drinks. For those we bring the whole bar: machine, barista and coffee, through our coffee catering service.",
      },
      {
        type: "paragraph",
        text: "Tell us your team size and city and we'll suggest a setup and the monthly rent. You can see the machines and request a quote on the Kruptos coffee machine rental page, or WhatsApp us on +91 9179241042.",
      },
    ],
  },
  {
    slug: "dialing-in-light-roasts",
    title: "Dialing In Your V60 (or AeroPress) for Light Roasts",
    dek: "Light roasts fight back a little harder — here's how to actually get the sweetness out instead of a cup of sour, grassy water.",
    category: "Brew guides",
    readTime: "7 min read",
    publishedAt: "2026-09-15",
    body: [
      {
        type: "paragraph",
        text: "Light roasts get blamed for being sour more often than they deserve it. Most of the time the roast isn't the problem — the brew is. A light roast is denser and less soluble than a dark one: less time in the drum means less of the bean's structure has broken down, so it holds onto its sugars and acids harder and needs more coaxing to give them up. Treat it like a medium roast and you'll pull a thin, sharp cup and blame the beans.",
      },
      {
        type: "heading",
        text: "The three levers that actually matter",
      },
      {
        type: "paragraph",
        text: "Extraction is a function of grind size, water temperature, and contact time. For a light roast, you generally want to push all three up a notch from wherever you'd land on a medium roast:",
      },
      {
        type: "list",
        items: [
          "Grind finer — a light roast's cell structure is tougher, so a coarser grind just runs water past it without extracting much. Go one to two clicks finer than your usual V60 setting.",
          "Brew hotter — 94–96°C, close to a full boil. Darker roasts scorch at that temperature; light roasts need it just to extract at a normal rate.",
          "Extend contact time — a slightly slower pour, a finer grind, or both, so total brew time lands around 2:30–3:30 for a V60 rather than rushing through in under two minutes.",
        ],
      },
      {
        type: "paragraph",
        text: "If you change only one thing, change the grind first. It's the lever with the biggest effect and the easiest to dial back if you overshoot.",
      },
      {
        type: "heading",
        text: "V60: the bloom is doing more work than you think",
      },
      {
        type: "paragraph",
        text: "Start with a bloom of roughly twice the coffee's weight in water — 30g of coffee gets about 60g for the bloom — and give it 30–45 seconds before the first real pour. This isn't ceremony. Fresh light-roast coffee holds a lot of CO2, and that gas physically pushes water away from the grounds if you don't let it escape first. Skip the bloom and you'll get inconsistent extraction no matter how well you've dialled everything else in.",
      },
      {
        type: "paragraph",
        text: "After the bloom, pour in three or four gentle pulses rather than one continuous stream, keeping the bed agitated with a slow spiral from the centre out. Each pulse re-saturates the grounds and keeps the extraction even as the water level drops.",
      },
      {
        type: "heading",
        text: "AeroPress: go inverted, go longer",
      },
      {
        type: "paragraph",
        text: "The inverted method buys you control the standard method doesn't: a full, timed steep with no drip-through until you're ready to press. For a light roast, grind slightly finer than a drip setting, use water at 94–96°C, and steep for 2–2:30 minutes with one gentle stir at the ten-second mark to break up clumps. Flip, press slowly over 30–45 seconds — a press that finishes in ten seconds means your grind is too coarse and you're under-extracting.",
      },
      {
        type: "heading",
        text: "How to tell if you've under- or over-shot it",
      },
      {
        type: "paragraph",
        text: "Sour, thin, or grassy means under-extraction — grind finer or brew hotter before you touch the dose. Bitter, hollow, or drying on the finish means over-extraction, which is rarer with light roasts but does happen if the grind runs too fine for your brew time. Sweetness sitting right behind the acidity, rather than fighting it, is the sign you've landed it.",
      },
      {
        type: "paragraph",
        text: "We keep a rotating single-origin on pour-over at the bar specifically because light roasts show the differences between farms and processing methods more honestly than a dark roast ever will. Ask whoever's behind the counter what's on today — they'll tell you exactly how we're brewing it and why.",
      },
    ],
  },
  {
    slug: "why-degassing-matters",
    title: "Why Degassing Matters Before Your Pour-Over",
    dek: "That big, dramatic bloom on a fresh bag of beans isn't a good sign by itself — here's what's actually happening, and why a rest period helps.",
    category: "Brew guides",
    readTime: "6 min read",
    publishedAt: "2026-09-15",
    body: [
      {
        type: "paragraph",
        text: "Roasting doesn't just change a bean's colour — it traps gas inside it. The Maillard and caramelisation reactions that build flavour during roasting also produce carbon dioxide, and a lot of it gets locked into the bean's cell structure as it cools. That CO2 doesn't disappear the moment the roast finishes. It leaks out slowly over the following days and weeks, fastest right after roasting and gradually tapering off — a process called degassing.",
      },
      {
        type: "heading",
        text: "Why a huge bloom isn't actually flattering the bean",
      },
      {
        type: "paragraph",
        text: "When you pour water over freshly roasted grounds, that trapped CO2 rushes out all at once — the coffee bed puffs up, bubbles, and domes. It looks dramatic, and it's tempting to read it as a sign of quality. It's really just a sign of freshness, and too much of it works against you: gas escaping mid-brew pushes water away from the grounds unevenly, creating channels where water finds the path of least resistance instead of moving through the coffee bed evenly. The result is a cup that's simultaneously under-extracted in some spots and over-extracted in others — which usually reads as a strange mix of sour and bitter in the same sip.",
      },
      {
        type: "heading",
        text: "So how long should coffee actually rest?",
      },
      {
        type: "paragraph",
        text: "There's no single universal number, because roast level changes the timeline. Darker roasts have a more broken-down, porous structure, so they release CO2 faster and often taste best within a few days of roasting. Lighter roasts are denser and hold onto gas longer — for pour-over, most light roasts are still improving at the one-week mark and can keep getting better for two.",
      },
      {
        type: "list",
        items: [
          "Darker roasts: often peak within 3–7 days off roast",
          "Medium roasts: typically 5–10 days",
          "Light roasts: commonly 7–14 days, sometimes longer for very dense, high-grown beans",
        ],
      },
      {
        type: "paragraph",
        text: "Those windows are starting points, not rules — the only way to know for sure is to taste the same bean at a few different rest points and notice where it opens up.",
      },
      {
        type: "heading",
        text: "What the valve on your bag is actually for",
      },
      {
        type: "paragraph",
        text: "A one-way degassing valve lets CO2 escape from a sealed bag without letting oxygen in from the outside. That matters because oxygen is what actually stales coffee — it oxidises the oils that carry flavour. Without a valve, a freshly roasted bag would either need to stay open (letting oxygen in immediately) or risk bursting from the gas building up inside a sealed one. The valve is doing quiet, unglamorous work to give the bean time to rest properly.",
      },
      {
        type: "heading",
        text: "Reading your own bloom",
      },
      {
        type: "paragraph",
        text: "Once you know what to look for, the bloom becomes a useful diagnostic rather than just a step to get through. A big, vigorous, bubbling dome usually means the bean is quite fresh — worth a slightly longer bloom time to let more gas clear before the main pour. A flat, barely-there bloom on a bean that should still be fresh can be a sign it wasn't sealed well, or that it's simply past its best. Somewhere in between — a gentle, even rise that settles within the bloom window — is usually where a rested bean sits, and it's where pour-overs tend to taste most consistent.",
      },
      {
        type: "paragraph",
        text: "Every bag we roast under Kruptos carries a roast date, not just a best-before — so you can actually work with the bean's timeline instead of guessing at it.",
      },
    ],
  },
  {
    slug: "guide-to-indian-coffee-estates",
    title: "A Field Guide to India's Specialty Coffee Estates",
    dek: "India is the only country in the world that grows all of its coffee under shade — here's a tour of where it actually comes from.",
    category: "Origins",
    readTime: "8 min read",
    publishedAt: "2026-09-15",
    body: [
      {
        type: "paragraph",
        text: "Coffee arrived in India by way of legend before it arrived by way of trade: the story goes that a 17th-century pilgrim named Baba Budan smuggled seven coffee seeds out of Yemen strapped to his chest, since exporting fertile beans was forbidden, and planted them in the hills of what's now Chikmagalur, Karnataka. Whatever the exact truth of the story, that range of hills still carries his name — the Bababudangiris — and Karnataka is still India's largest coffee-producing state four centuries later.",
      },
      {
        type: "heading",
        text: "The regions that matter",
      },
      {
        type: "paragraph",
        text: "India's coffee belt runs down the Western Ghats and out to a couple of newer pockets in the east. Five regions now hold Geographical Indication certification — legal recognition that ties a coffee's character to the specific place it's grown, similar to Champagne or Darjeeling:",
      },
      {
        type: "list",
        items: [
          "Chikmagalur Arabica (Karnataka) — the birthplace of Indian coffee, 700–1,500m elevation, growing both arabica and robusta",
          "Bababudangiris Arabica (Karnataka) — the historic core of Chikmagalur district, up to 1,500m",
          "Coorg Arabica (Kodagu, Karnataka) — dense shade canopy, heavy intercropping with pepper and cardamom",
          "Wayanad Robusta (Kerala) — India's largest coffee-growing area by land, mostly lower-elevation robusta",
          "Araku Valley Arabica (Andhra Pradesh/Odisha border) — a newer, high-elevation region largely grown by tribal farming cooperatives",
        ],
      },
      {
        type: "paragraph",
        text: "Tamil Nadu's hill ranges — the Nilgiris, Anamalais, Pulneys, and Sheveroys — round out the map with more high-altitude arabica, some of it climbing past 2,000 metres.",
      },
      {
        type: "heading",
        text: "The thing that actually makes Indian coffee different",
      },
      {
        type: "paragraph",
        text: "India is the only major coffee-growing country that grows all of its coffee under shade — every estate, arabica or robusta, sits beneath a planted canopy rather than in open sun. Estates commonly plant over fifty species of shade tree, and intercrop coffee with pepper, cardamom, and fruit trees on the same land. It slows the cherry's ripening, which builds more complexity into the cup, and it's also just a different way of farming: closer to a managed forest than a plantation in the way people usually picture one.",
      },
      {
        type: "heading",
        text: "The variety doing the most work you've never heard of",
      },
      {
        type: "paragraph",
        text: "If you've had Indian arabica, there's a good chance it was S795. Bred at the Balehonnur research station by crossing S288 with the Kent variety, it now accounts for roughly a quarter to a third of all arabica acreage in the country, prized for disease resistance and a genuinely good cup rather than yield alone — it's popped up often enough in Indonesian specialty circles that it took a chunk of the podium at Indonesia's first Cup of Excellence.",
      },
      {
        type: "heading",
        text: "A process nobody else really does",
      },
      {
        type: "paragraph",
        text: "Monsooned Malabar is India's own contribution to coffee processing, and there's genuinely nothing else quite like it: green beans are laid out and exposed to the humid monsoon winds off the Arabian Sea for several weeks, swelling and turning a pale gold as they absorb moisture. The acidity drops out almost entirely, leaving something heavier, earthier, and unmistakably different from a washed or natural coffee from anywhere else in the world.",
      },
      {
        type: "quote",
        text: "Every bar rotation we run pulls from a different one of these regions on purpose — the point isn't just variety, it's showing what shade-grown, GI-protected Indian coffee can actually taste like when it's treated as specialty from the start.",
      },
      {
        type: "paragraph",
        text: "Kruptos sources across several of these regions rather than settling on one — ask your barista where the current single origin on the bar is from, and what process it went through to get there.",
      },
    ],
  },
  {
    slug: "best-specialty-coffee-in-raipur",
    title: "Where to Find the Best Specialty Coffee in Raipur (2026 Guide)",
    dek: "Raipur has gone from instant coffee to hand-brewed pour-overs in a few short years. Here's where to drink specialty coffee in the city, what to order, and when to go.",
    category: "City guides",
    readTime: "6 min read",
    publishedAt: "2026-11-24",
    body: [
      {
        type: "paragraph",
        text: "Ask anyone who grew up in Raipur what coffee meant ten years ago and you'll mostly hear about filter coffee at home or a sweet, milky cup from a vending machine. That changed fast. Specialty coffee — traceable beans, roasted for flavour, brewed to a recipe by a trained barista — arrived in the city in 2021, when 1DM parked its coffee truck in Raipur for good. Today the city has a proper coffee scene, and this guide is the short version of where to find it.",
      },
      { type: "heading", text: "What counts as specialty coffee?" },
      {
        type: "paragraph",
        text: "Specialty coffee isn't about fancy latte art or a higher price tag. It starts with green beans that score well when professionally cupped, comes from farms you can actually name, and is roasted lightly enough that you can taste where it came from — fruit, chocolate, nuts or florals rather than just bitterness. Then it's brewed with measured doses, water temperatures and times. If a cafe can tell you which estate your coffee came from and how it was processed, you're in the right place.",
      },
      { type: "heading", text: "1DM's five Raipur cafes, and which one to pick" },
      {
        type: "list",
        items: [
          "1DM Tagore Nagar (near Navkar Hospital, Tikrapara) — open 8:30 AM to 10 PM daily. The early-morning pick, and the only Raipur outlet serving the Veg & Non-Veg menu with eggs and chicken.",
          "1DM Avanti Vihar (Avanti Vihar Road, Shankar Nagar) — open 8:30 AM to 10 PM daily. The other early opener; good for a quiet breakfast-and-pour-over before work.",
          "1DM Samta (Main Road, Samta Colony) — open 11 AM to 10 PM daily. The busiest evening spot, especially for cold brew and signatures.",
          "1DM Dumartarai (LK Corporate Towers, New Dhamtari Road) — open 10 AM to 8 PM, closed Sundays. Built for the office crowd on the Dhamtari Road side of town.",
          "Slice By 1DM, Shankar Nagar (Lane 8, Geetanjali Colony) — open 12 PM to 10 PM, closed Tuesdays. Handcrafted pizza slices with the same coffee program.",
        ],
      },
      { type: "heading", text: "What to order if you're new to specialty coffee" },
      {
        type: "paragraph",
        text: "If you normally drink a cappuccino, start there — a cafe latte or cappuccino made with a fresh, lighter roast tastes sweeter and less bitter than you expect, and it's an easy way to notice the difference. If you want to try coffee the way roasters taste it, order a pour-over on V60: it's black coffee, brewed slowly by hand, and it's where a single origin's character shows up most clearly. On a hot Raipur afternoon, the cold brew is the crowd favourite.",
      },
      {
        type: "paragraph",
        text: "Prices at 1DM start at ₹200 for espresso and Americano, ₹230 for lattes and cappuccinos, and ₹250 for espresso signatures. Every outlet's full menu, with food, is on its menu page on this site.",
      },
      { type: "heading", text: "Why the beans matter" },
      {
        type: "paragraph",
        text: "Most of the coffee on the 1DM bar is roasted by Kruptos Coffee Roasters, our own roastery, which means the beans reach the grinder days after roasting rather than months. Guest roasters from across India rotate through the bar too, so there's always something new to taste. Our baristas were the first from Chhattisgarh to win coffee trophies at state and national level, including 2nd place at the 2023 India AeroPress Championship — ask them what's on pour-over today.",
      },
      {
        type: "quote",
        text: "The best coffee in Raipur is the one brewed fresh, by someone who can tell you where it came from.",
      },
      {
        type: "paragraph",
        text: "Visiting from Bhilai or Bilaspur? 1DM also runs cafes in Nehru Nagar, Bhilai and on Smart Road, Bilaspur — see the city pages for directions and hours.",
      },
    ],
  },
  {
    slug: "what-is-specialty-coffee",
    title: "What Is Specialty Coffee? A Simple Guide for Coffee Lovers in India",
    dek: "Specialty coffee gets thrown around a lot. Here's what it actually means — from the farm to your cup — and how to tell the real thing from marketing.",
    category: "Coffee basics",
    readTime: "6 min read",
    publishedAt: "2026-11-24",
    body: [
      {
        type: "paragraph",
        text: "\"Specialty coffee\" is printed on a lot of menus now, and it's fair to wonder whether it means anything. It does. The term describes coffee that is graded, sourced, roasted and brewed to a standard high enough that the flavour of the bean itself — not just the roast, the milk or the sugar — is the point.",
      },
      { type: "heading", text: "It starts with a score" },
      {
        type: "paragraph",
        text: "Green coffee is graded by trained tasters called Q graders, who roast a sample, brew it in a standard way (called cupping) and score it out of 100 on things like sweetness, acidity, body and aftertaste. Coffee that scores 80 points or more, with very few defects in the green beans, qualifies as specialty grade. Most of the world's coffee — including most instant coffee — falls well below that line.",
      },
      { type: "heading", text: "It's traceable" },
      {
        type: "paragraph",
        text: "Specialty coffee usually tells you exactly where it came from: the estate or cooperative, the region, the variety of coffee plant, the altitude and how the cherries were processed after picking. In India that might be an arabica from Chikmagalur, Coorg or Araku Valley — or, increasingly, from newer regions like Bastar in Chhattisgarh. Traceability matters because it lets roasters pay farmers for quality, and lets you taste the difference between places.",
      },
      { type: "heading", text: "Processing changes the taste" },
      {
        type: "list",
        items: [
          "Washed — the fruit is removed before drying. Clean, bright, tea-like cups.",
          "Natural — the whole cherry dries around the bean. Fruity, jammy, heavier body.",
          "Honey — some of the sticky fruit is left on during drying. Sweet, round, in between the two.",
          "Monsooned — an Indian speciality where beans absorb monsoon humidity for weeks. Low acidity, earthy and heavy.",
        ],
      },
      { type: "heading", text: "It's roasted to show the bean, not hide it" },
      {
        type: "paragraph",
        text: "Dark roasts taste mostly of the roast: smoky, bitter, similar from one coffee to the next. Specialty roasters usually roast lighter so the bean's own flavours come through. Freshness matters too — coffee is at its best roughly one to four weeks after roasting, which is why good cafes work with roasters close to home. At 1DM, most of our coffee comes from our own roastery, Kruptos Coffee Roasters.",
      },
      { type: "heading", text: "And it's brewed to a recipe" },
      {
        type: "paragraph",
        text: "The last step is the barista. Specialty cafes weigh their coffee and water, control grind size, water temperature and brew time, and taste constantly to keep every cup consistent. That's the difference between a cappuccino that tastes of milk and bitterness, and one that tastes sweet, chocolatey and balanced.",
      },
      { type: "heading", text: "How to tell if a cafe is serious about it" },
      {
        type: "list",
        items: [
          "They can tell you the origin and roast date of the coffee they're using today.",
          "They offer at least one manual brew — pour-over, AeroPress or similar.",
          "They grind fresh for every drink and weigh their shots.",
          "Black coffee tastes good without sugar.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're in Raipur, Bhilai or Bilaspur, the easiest way to taste the difference is to order a pour-over and a cappuccino side by side at any 1DM cafe — and ask the barista what's on the bar today.",
      },
    ],
  },
  {
    slug: "coffee-catering-corporate-events-raipur",
    title: "Coffee Catering for Corporate Events in Raipur: A Planning Checklist",
    dek: "Planning a conference, offsite, launch or wedding in Raipur? Here's how to get a live coffee bar right — headcount, drinks, power, timing and budget.",
    category: "For business",
    readTime: "5 min read",
    publishedAt: "2026-11-24",
    body: [
      {
        type: "paragraph",
        text: "A live coffee bar has become one of the most-talked-about parts of corporate events and weddings in Raipur — guests remember a properly made latte far longer than another tray of tea. But an espresso bar is a piece of equipment and a team, not just a menu, and a little planning makes the difference between a queue that moves and one that doesn't.",
      },
      { type: "heading", text: "1. Start with headcount and timing" },
      {
        type: "paragraph",
        text: "The two numbers that decide everything are how many guests will drink coffee and when. A conference with a 20-minute break needs more baristas and machines than a wedding where coffee runs all evening. Share your expected guest count and the peak moments — registration, breaks, after lunch — so the bar can be sized for the rush, not the average.",
      },
      { type: "heading", text: "2. Keep the menu short" },
      {
        type: "paragraph",
        text: "Four to six drinks is plenty: a cappuccino or latte, an Americano, a cold coffee or cold brew, one or two signatures, and a non-coffee option. A short menu keeps the line moving and every drink consistent. Ask for dairy-free milk if your guest list needs it.",
      },
      { type: "heading", text: "3. Check the venue basics" },
      {
        type: "list",
        items: [
          "Power: commercial espresso machines need a dedicated power point close to the counter.",
          "Water: access to clean water nearby, or confirmation that the caterer brings their own.",
          "Space: a counter or table of roughly 6–8 feet, with room for the queue to form without blocking a doorway.",
          "Setup time: allow at least an hour before guests arrive for the machine to heat and the team to dial in.",
        ],
      },
      { type: "heading", text: "4. Brand it" },
      {
        type: "paragraph",
        text: "A coffee bar is one of the few places every guest will stop. Branded cups, sleeves or a counter backdrop turn it into an easy photo moment for a launch or a company event.",
      },
      { type: "heading", text: "5. Book early" },
      {
        type: "paragraph",
        text: "During the wedding season and year-end conference season, baristas and machines get booked out. A week's notice works for most corporate events; for weddings and large conferences, book as soon as your date is fixed.",
      },
      {
        type: "quote",
        text: "The coffee at your event should taste exactly like the coffee in a good cafe — because it's made by the same people.",
      },
      {
        type: "paragraph",
        text: "1DM runs live specialty coffee bars for corporate events, office coffee days, weddings and launches across Raipur, Bhilai and Bilaspur, with trained baristas and beans from our own roastery, Kruptos. Share your date, venue and guest count on our coffee catering page, or WhatsApp +91 9179241042, and we'll come back with a quote within a working day.",
      },
    ],
  },
  {
    slug: "how-to-open-a-cafe-in-chhattisgarh",
    title: "How to Open a Cafe in Chhattisgarh: What We've Learned Running 1DM",
    dek: "Thinking of opening a cafe in Raipur, Bhilai or Bilaspur? The location, menu, coffee, people and systems questions to answer before you sign a lease.",
    category: "For business",
    readTime: "7 min read",
    publishedAt: "2026-11-24",
    body: [
      {
        type: "paragraph",
        text: "1DM started in 2019 as a one-dollar coffee truck in Pune and has grown into a chain of specialty cafes across Raipur, Bhilai and Bilaspur, with its own roastery. Along the way we've opened, run and fixed a lot of cafes — and we get asked the same question almost every week: what does it actually take to open a cafe in Chhattisgarh? Here's our honest checklist.",
      },
      { type: "heading", text: "Location beats decor" },
      {
        type: "paragraph",
        text: "Footfall, visibility and parking matter more than an Instagram-ready interior. In Raipur, the strongest cafe locations sit near colleges, hospitals, offices and residential main roads where people pass every day — not tucked away where they have to make a special trip. Study the street at different times of day before you sign anything, and understand who will be walking past at 9 AM and at 8 PM.",
      },
      { type: "heading", text: "Decide what you're famous for" },
      {
        type: "paragraph",
        text: "A cafe that tries to be everything usually ends up known for nothing. Pick one or two things you want people to come back for — for us, it's specialty coffee — and build a short, tight menu around them. Every extra dish adds inventory, training and waste.",
      },
      { type: "heading", text: "Get the coffee right from day one" },
      {
        type: "list",
        items: [
          "Choose fresh, traceable beans from a roaster who can support you with recipes and training.",
          "Buy the right grinder — it matters as much as the espresso machine.",
          "Dial in recipes (dose, yield, time) and write them down so every barista makes the same cup.",
          "Plan for water filtration; local water hardness will affect both taste and machine life.",
        ],
      },
      { type: "heading", text: "People are the product" },
      {
        type: "paragraph",
        text: "Your barista is the person your customer actually meets. Budget time and money for training before opening, not after. Skilled baristas are still scarce in Chhattisgarh, which is why 1DM trains its own team in-house — several of whom have gone on to win state and national coffee trophies.",
      },
      { type: "heading", text: "Systems keep the doors open" },
      {
        type: "paragraph",
        text: "Most cafes that close don't close because the coffee was bad — they close because costs, stock and cash weren't tracked. Cost every menu item before launch, track inventory daily, and know your break-even number of cups per day. Simple systems, used consistently, are worth more than any fancy software.",
      },
      { type: "heading", text: "Build vs. partner" },
      {
        type: "paragraph",
        text: "You can build everything yourself, bring in a consultant for the coffee program and operations, or partner with an established brand. 1DM offers all three routes: a franchise-owned, company-operated 1DM outlet, where we run the cafe day to day; cafe consulting for people building their own brand; and specialty coffee supply from Kruptos Coffee Roasters.",
      },
      {
        type: "paragraph",
        text: "If you're thinking about a cafe anywhere in Chhattisgarh, tell us your location and plans on our franchise page or WhatsApp +91 9179241042 — we're always happy to talk it through.",
      },
    ],
  },
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((a) => a.slug === slug);
}
