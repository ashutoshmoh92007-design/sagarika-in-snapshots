// ✏️ Edit everything about the site here.
import p1 from "@/assets/photos/sagarika-1.jpeg.asset.json";
import p2 from "@/assets/photos/sagarika-2.jpeg.asset.json";
import p3 from "@/assets/photos/sagarika-3.jpeg.asset.json";
import p4 from "@/assets/photos/sagarika-4.jpeg.asset.json";
import p5 from "@/assets/photos/sagarika-5.jpeg.asset.json";
import p6 from "@/assets/photos/sagarika-6.jpeg.asset.json";

export const SISTER_NAME = "Sagarika";
export const AGE = 21;
export const YOUR_NAME = "Ashutosh";

export type Category = "Childhood" | "Best Trips" | "Random Chaos";
export type Memory = { id: number; title: string; date: string; category: Category; caption: string; image?: string; tint: string };

export const memories: Memory[] = [
  { id: 1, title: "The Beyblade secret", date: "Back in the day", category: "Childhood", image: p3.url, tint: "from-blush to-cream",
    caption: "I broke the Beyblade. Snapped it, panicked, hid the pieces. You found out in about four seconds… and never told a soul. Not Mom, not Papa, nobody. That was the day I learnt my sister is a vault." },
  { id: 2, title: "…and the blackmail that followed", date: "Every year since", category: "Random Chaos", image: p5.url, tint: "from-cream to-rose",
    caption: "Of course, keeping the secret came with a price. One raised eyebrow and the word 'Beyblade' and I'd do whatever you said. You've been teasing me about it for years. Honestly? Worth it." },
  { id: 3, title: "Shantiniketan, here she comes!", date: "2026", category: "Best Trips", image: p6.url, tint: "from-rose to-blush",
    caption: "You got into Shantiniketan. WOW. Tagore's own campus, and my little sister walking through it. I acted cool when you told me. I was not cool. I was the proudest brother alive." },
  { id: 4, title: "Café evenings", date: "Lately", category: "Best Trips", image: p1.url, tint: "from-blush to-rose",
    caption: "Warm lights, cold coffee and you telling me about everything and nothing. These are the evenings I'll remember most." },
  { id: 5, title: "Main character energy", date: "This year", category: "Random Chaos", image: p2.url, tint: "from-rose to-cream",
    caption: "One hair flip and suddenly it's a photoshoot. You've grown up into someone so confident, and I'm still getting used to it." },
  { id: 6, title: "Hearts filter era", date: "Throwback", category: "Random Chaos", image: p4.url, tint: "from-cream to-blush",
    caption: "Black-and-white, pink hearts, that smirk. You thought this was aesthetic. It was. Don't tell anyone I said that." },
];

export const reasons = [
  { n: "01", front: "Keeper of My Secrets", back: "The Beyblade. Enough said. You took that secret to the grave (and dig it up only to tease me)." },
  { n: "02", front: "Best Advice Giver", back: "You tell me what I need to hear, not what I want to hear—and you're annoyingly always right." },
  { n: "03", front: "Shantiniketan Girl", back: "You worked so hard for it and you made it. Watching you get there was the best thing this year." },
  { n: "04", front: "My Safe Place", back: "When the world gets loud, one talk with you makes everything quiet again." },
  { n: "05", front: "Queen of Funny Faces", back: "No filter is safe with you. That goofy face? My favourite photo of you, forever." },
  { n: "06", front: "Braver Than She Knows", back: "New city, new chapter, new people—and you're walking into it with your head high. So proud of you." },
];

export const timeline = [
  { year: "2005", title: "You arrived", text: "The house got louder, and so much better.", image: "" },
  { year: "Childhood", title: "The Beyblade incident", text: "I broke it, you kept it secret. A lifelong partnership (and blackmail) began.", image: p3.url },
  { year: "Teens", title: "Filters & phases", text: "Hearts, selfies, and endless photos on my phone.", image: p4.url },
  { year: "2025", title: "Growing up", text: "Café chats, big dreams, and you figuring out who you are.", image: p1.url },
  { year: "2026", title: "Shantiniketan!", text: "You got in. Wow. Just wow.", image: p6.url },
  { year: "Today", title: "21 and glowing", text: `Still my favourite person. Happy ${AGE}st, Sagarika.`, image: p2.url },
];

export const secretMessage = "Every wish you make this year, I'm going to help you chase. And no — I'm never buying another Beyblade. 💌";

export const letter = [
  "Dear Sagarika,",
  "I've tried to write this a dozen times, and every version felt too small for what you mean to me. So here's the simple truth: life is better because you're in it.",
  "Remember the Beyblade? I broke it, and you knew instantly. You could have told everyone. Instead you kept it secret—and then spent years teasing me about it. That's you in one story: loyal to the core, and just a little bit evil. I wouldn't change a thing.",
  "And now you're 21, and you got into Shantiniketan. I still can't say it without smiling. You worked so hard, and you deserve every bit of it. Go make that place yours.",
  "Wherever life takes either of us, there will always be one person cheering the loudest for you. Happy birthday, little one. I love you more than any toy I've ever broken.",
];
