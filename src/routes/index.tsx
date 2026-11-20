import { createFileRoute } from "@tanstack/react-router";
import { Cake, Gallery, Hero, Letter, Reasons, Timeline } from "@/components/birthday/Sections";
import { MusicPill } from "@/components/birthday/MusicPill";
import { SISTER_NAME } from "@/lib/birthday-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Happy Birthday, ${SISTER_NAME} ✨` },
      { name: "description", content: `A little corner of the internet for ${SISTER_NAME} and all our memories.` },
      { property: "og:title", content: `Happy Birthday, ${SISTER_NAME} ✨` },
      { property: "og:description", content: "A digital scrapbook of memories, reasons and a letter from her brother." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Hero /><Gallery /><Reasons /><Timeline /><Cake /><Letter />
      <MusicPill />
    </main>
  );
}
