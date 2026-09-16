export type CareerRole = {
  id: string;
  title: string;
  employmentType: string;
  blurb: string;
  responsibilities: string[];
  lookingFor: string[];
};

// Roles currently open across the chain — not tied to a single outlet.
// Add a new role here to have it show up on /careers and in the
// application form's role dropdown; nothing else needs to change.
export const careerRoles: CareerRole[] = [
  {
    id: "head-barista",
    title: "Head Barista",
    employmentType: "Full-time",
    blurb:
      "Run the bar at one of our outlets — dial in the day's roast, hold the same shot and the same seven-second pour we've kept since day one, and train the team on it.",
    responsibilities: [
      "Run bar service during your shift — quality control on every pour, recalibrating grind and dose as beans change",
      "Train and correct the outlet's baristas so every cup meets the same standard, not just yours",
      "Track bean, milk, and consumables stock at the outlet and flag reorders before they run out",
      "Keep grinders, machines, and kettles maintained and properly calibrated",
      "Help trial new drinks and seasonal specials alongside the founder's menu R&D process",
    ],
    lookingFor: [
      "Hands-on bar experience — ideally both espresso and pour-over",
      "Comfortable training and correcting less experienced baristas, not just pulling shots yourself",
      "SCA certification or equivalent is a strong plus, not mandatory",
      "Treats a bad shot as something to fix, not something to defend",
    ],
  },
  {
    id: "chef",
    title: "Chef",
    employmentType: "Full-time",
    blurb:
      "Lead the kitchen — toasties, bakery items, and seasonal specials, each one going through R&D and cupping before it reaches a table.",
    responsibilities: [
      "Run daily kitchen operations — toasties, bakery items, and the seasonal specials menu",
      "Partner with the founder on menu R&D and cupping before anything new goes live",
      "Maintain food safety and hygiene standards through prep and service",
      "Manage kitchen inventory and keep waste down",
      "Train kitchen staff on recipes and consistency, the same way the bar trains on pours",
    ],
    lookingFor: [
      "Prior kitchen experience — cafe or bakery background preferred over large hotel-style kitchens",
      "Comfortable in a small, fast-moving kitchen rather than a big brigade setup",
      "Willing to iterate on a recipe through repeated testing, not just execute a fixed one",
    ],
  },
  {
    id: "manager",
    title: "Manager",
    employmentType: "Full-time",
    blurb:
      "Own the day-to-day running of an outlet — staffing, inventory, and keeping service at the standard every 1DM cafe holds to.",
    responsibilities: [
      "Own full day-to-day running of an outlet — staffing, rostering, inventory, and cash handling",
      "Hold the outlet to 1DM's service and quality standards day to day",
      "Handle customer escalations and on-the-ground problem solving",
      "Report outlet performance and issues back to central operations",
      "Support hiring and onboarding of outlet staff alongside HR",
    ],
    lookingFor: [
      "Prior experience running a cafe, restaurant, or retail outlet",
      "Comfortable being hands-on — this is a floor role, not a desk job",
      "Good with people — you're managing a small team in person, every day",
    ],
  },
  {
    id: "hr",
    title: "HR",
    employmentType: "Full-time",
    blurb:
      "Build out people operations for a team spread across ten outlets and four cities — hiring, onboarding, and keeping standards consistent everywhere.",
    responsibilities: [
      "Own recruitment and onboarding for a team spread across 10 outlets in 4 cities",
      "Keep policies, attendance, and documentation consistent from outlet to outlet",
      "Handle employee queries and day-to-day people issues as they come up",
      "Support outlet managers on staffing and performance",
      "Help build out HR processes as the company keeps growing",
    ],
    lookingFor: [
      "Prior HR or people-ops experience, ideally in retail, F&B, or hospitality",
      "Comfortable working across multiple locations rather than a single office",
      "Organized — you're the one keeping records straight across every outlet",
    ],
  },
];

export const preferredCities = ["No preference", "Raipur", "Bhilai", "Bilaspur", "Jagdalpur"];
