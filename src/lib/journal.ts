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
};

export const journalArticles: JournalArticle[] = [
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
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((a) => a.slug === slug);
}
