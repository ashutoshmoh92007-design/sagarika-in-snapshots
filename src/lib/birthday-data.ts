// ✏️ Edit everything about the site here. To use real photos, drop them in /public/photos
// and set `image: "/photos/your-file.jpg"`. Leave image empty to show a soft placeholder.
export const SISTER_NAME = "Sagarika";
export const AGE = 21;
export const YOUR_NAME = "Ashutosh";

export type Category = "Childhood" | "Best Trips" | "Random Chaos";
export type Memory = { id: number; title: string; date: string; category: Category; caption: string; image?: string; tint: string };

export const memories: Memory[] = [
  { id: 1, title: "First birthday cake", date: "2006", category: "Childhood", tint: "from-blush to-cream", caption: "You smashed your face straight into it and everyone clapped like it was a performance. Honestly, it was." },
  { id: 2, title: "Goa, sunburnt", date: "Dec 2019", category: "Best Trips", tint: "from-rose to-blush", caption: "We forgot sunscreen, ate prawns every meal and swore we'd come back every year." },
  { id: 3, title: "The kitchen fire", date: "2016", category: "Random Chaos", tint: "from-cream to-rose", caption: "Maggi. Two kids. One smoke alarm. Mom still doesn't know the full story." },
  { id: 4, title: "School annual day", date: "2012", category: "Childhood", tint: "from-blush to-rose", caption: "You forgot your lines and improvised a whole new ending. The teachers liked yours better." },
  { id: 5, title: "Manali road trip", date: "May 2022", category: "Best Trips", tint: "from-rose to-cream", caption: "Twelve hours in a car, one playlist on repeat, zero regrets." },
  { id: 6, title: "3 AM dance party", date: "2021", category: "Random Chaos", tint: "from-cream to-blush", caption: "Exam week. We should have been studying. We were not studying." },
  { id: 7, title: "Matching raincoats", date: "2009", category: "Childhood", tint: "from-blush to-cream", caption: "Yellow, too big, and you refused to take yours off for a week." },
  { id: 8, title: "Jaipur rooftops", date: "Oct 2023", category: "Best Trips", tint: "from-rose to-blush", caption: "Chai at sunset and you explaining my whole life back to me better than I could." },
  { id: 9, title: "The haircut incident", date: "2011", category: "Random Chaos", tint: "from-cream to-rose", caption: "You trusted me with scissors. You never trusted me again. Fair." },
];

export const reasons = [
  { n: "01", front: "My Forever Partner-in-Crime", back: "Every bad idea I've ever had, you said 'okay but let's do it properly.'" },
  { n: "02", front: "Best Advice Giver", back: "You tell me what I need to hear, not what I want to hear—and you're annoyingly always right." },
  { n: "03", front: "Professional Snack Thief", back: "Nothing in my plate has ever been safe. I've accepted it. Mostly." },
  { n: "04", front: "My Safe Place", back: "When the world gets loud, one call with you makes everything quiet again." },
  { n: "05", front: "Unmatched Laugh", back: "That snort-laugh you hate? It's my favourite sound in the world." },
  { n: "06", front: "Braver Than She Knows", back: "I've watched you start over, stand up and keep going. I'm so proud of you." },
];

export const timeline = [
  { year: "2005", title: "You arrived", text: "The family got louder, and so much better.", image: "" },
  { year: "2011", title: "The fort era", text: "Bedsheets, torches and a strict no-parents policy.", image: "" },
  { year: "2018", title: "Teenage chaos", text: "Shared secrets, slammed doors, and late-night talks anyway.", image: "" },
  { year: "2023", title: "College days", text: "A new chapter, and I realised how much I would miss you around.", image: "" },
  { year: "2025", title: "Finding your voice", text: "Watching you walk into every room like you owned it.", image: "" },
  { year: "2026", title: "Today", text: `Still my favourite person. Happy ${AGE}st.`, image: "" },
];

export const secretMessage = "Your wish is already on its way. And so is a surprise — check under your pillow tonight. 💌";

export const letter = [
  "Dear Sagarika,",
  "I've tried to write this a dozen times, and every version felt too small for what you mean to me. So here's the simple truth: life is better because you're in it.",
  "You were my first friend, my first rival, and the first person who taught me that being family means choosing each other, every day. You've seen me at my worst and somehow still think I'm alright. I don't say it enough, but I notice everything you do for the people you love.",
  "This year, I hope you chase the things that make your heart race. I hope you're kind to yourself. And I hope you remember that no matter where life takes either of us, there's someone cheering the loudest for you.",
  "Happy birthday. I love you more than all the snacks you've stolen from me.",
];
