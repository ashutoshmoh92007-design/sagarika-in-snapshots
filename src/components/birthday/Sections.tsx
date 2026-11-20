import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { Camera, ChevronDown, Heart, Sparkles, X } from "lucide-react";
import { AGE, SISTER_NAME, YOUR_NAME, letter, memories, reasons, secretMessage, timeline, type Memory } from "@/lib/birthday-data";
import { Bokeh, ConfettiBurst } from "./Particles";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rose">{kicker}</p>
      <h2 className="font-serif text-4xl text-foreground md:text-6xl">{title}</h2>
    </Reveal>
  );
}

export function PhotoBox({ image, tint, alt, className = "" }: { image?: string | undefined; tint: string; alt: string; className?: string }) {
  if (image) return <img src={image} alt={alt} className={`h-full w-full object-cover ${className}`} loading="lazy" />;
  return (
    <div className={`grid h-full w-full place-items-center bg-gradient-to-br ${tint} ${className}`}>
      <Camera className="text-rose/60" size={28} />
    </div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const op = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-hero px-6">
      <Bokeh count={30} />
      <motion.div style={{ y, opacity: op }} className="relative z-10 max-w-3xl text-center">
        <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} animate={{ opacity: 1, letterSpacing: "0.35em" }} transition={{ duration: 1.6 }}
          className="mb-6 text-xs font-semibold uppercase text-rose">Turning {AGE} · A love letter in pixels</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.4, delay: 0.3 }}
          className="font-serif text-5xl leading-[1.05] text-foreground sm:text-7xl md:text-8xl">
          Happy Birthday,<br /><em className="text-gradient-rose">{SISTER_NAME}</em> ✨
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1 }}
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
          A little corner of the internet dedicated to my favorite person and all our memories.
        </motion.p>
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 text-rose">
        <ChevronDown />
      </motion.div>
    </section>
  );
}

const tabs = ["All Memories", "Childhood", "Best Trips", "Random Chaos"] as const;
const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];

export function Gallery() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All Memories");
  const [open, setOpen] = useState<Memory | null>(null);
  const list = tab === "All Memories" ? memories : memories.filter((m) => m.category === tab);
  return (
    <section className="px-5 py-24 md:py-32">
      <Heading kicker="The Scrapbook" title="Memories we made" />
      <div className="mx-auto mb-12 flex max-w-2xl flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`rounded-full px-4 py-2 text-sm transition ${tab === t ? "bg-primary text-primary-foreground shadow-soft" : "bg-card text-muted-foreground hover:text-foreground"}`}>{t}</button>
        ))}
      </div>
      <motion.div layout className="mx-auto max-w-6xl columns-2 gap-4 md:columns-3 md:gap-8">
        <AnimatePresence>
          {list.map((m, i) => (
            <motion.button layout key={m.id} onClick={() => setOpen(m)}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ rotate: 0, scale: 1.04, y: -6 }}
              className={`polaroid relative mb-6 block w-full break-inside-avoid md:mb-10 ${tilts[i % tilts.length]}`}>
              <span className="tape" />
              <div className={i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"}><PhotoBox image={m.image} tint={m.tint} alt={m.title} /></div>
              <p className="mt-3 font-hand text-lg text-foreground md:text-2xl">{m.title}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.date}</p>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-charcoal/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <motion.div onClick={(e) => e.stopPropagation()} initial={{ y: 40, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, opacity: 0 }}
              className="relative grid max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-card shadow-soft md:grid-cols-[1.3fr_1fr]">
              <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-3 top-3 z-10 rounded-full bg-card/90 p-2"><X size={18} /></button>
              <div className="aspect-square md:aspect-auto md:min-h-[480px]"><PhotoBox image={open.image} tint={open.tint} alt={open.title} /></div>
              <div className="paper flex flex-col justify-center p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-rose">{open.date} · {open.category}</p>
                <h3 className="mt-2 font-serif text-3xl text-foreground">{open.title}</h3>
                <p className="mt-6 font-hand text-2xl leading-snug text-foreground/80">{open.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Reasons() {
  const [flipped, setFlipped] = useState<number | null>(null);
  return (
    <section className="bg-secondary px-5 py-24 md:py-32">
      <Heading kicker="Six of a million" title="Why you're the best sister" />
      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.n} delay={i * 0.08}>
            <div className="flip h-64 cursor-pointer" onClick={() => setFlipped(flipped === i ? null : i)}>
              <div className={`flip-inner ${flipped === i ? "is-flipped" : ""}`}>
                <div className="flip-face flex flex-col justify-between bg-card p-7 shadow-soft">
                  <span className="font-serif text-5xl text-blush">{r.n}</span>
                  <div><p className="font-serif text-2xl text-foreground">{r.front}</p><p className="mt-2 text-xs text-muted-foreground">Tap to reveal ♡</p></div>
                </div>
                <div className="flip-face flip-back flex items-center bg-gradient-rose p-7 shadow-soft">
                  <p className="font-hand text-2xl leading-snug text-primary-foreground">{r.back}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="px-5 py-24 md:py-32">
      <Heading kicker="Our Story" title="From then to now" />
      <div ref={ref} className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-0 h-full w-px bg-border md:left-1/2" />
        <motion.div style={{ height: h }} className="glow-line absolute left-5 top-0 w-[3px] -translate-x-px rounded-full md:left-1/2" />
        {timeline.map((t, i) => (
          <Reveal key={t.year} className={`relative mb-14 pl-14 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}>
            <span className={`absolute top-2 left-[14px] h-4 w-4 rounded-full border-4 border-background bg-rose shadow-glow ${i % 2 ? "md:-left-2" : "md:left-auto md:-right-2"}`} />
            <span className="inline-block rounded-full bg-blush/40 px-3 py-1 text-xs font-semibold text-foreground">{t.year}</span>
            <div className={`mt-3 flex items-center gap-4 ${i % 2 ? "" : "md:flex-row-reverse"}`}>
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-soft"><PhotoBox image={t.image} tint="from-blush to-cream" alt={t.title} /></div>
              <div><h3 className="font-serif text-2xl text-foreground">{t.title}</h3><p className="text-sm text-muted-foreground">{t.text}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Cake() {
  const [out, setOut] = useState(false);
  const [fire, setFire] = useState(0);
  const blow = () => { setOut(true); setFire((f) => f + 1); };
  return (
    <section className="relative overflow-hidden bg-secondary px-5 py-24 md:py-32">
      <ConfettiBurst fire={fire} />
      <Heading kicker="Close your eyes" title="Make a wish" />
      <div className="mx-auto flex max-w-md flex-col items-center">
        <div className="relative mt-10 h-64 w-72">
          <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative flex flex-col items-center">
                <AnimatePresence>
                  {!out ? <motion.span exit={{ opacity: 0, scale: 0 }} className="flame" style={{ animationDelay: `${i * 0.2}s` }} />
                    : <motion.span initial={{ opacity: 0.8, y: 0 }} animate={{ opacity: 0, y: -50, scale: 2 }} transition={{ duration: 2 }} className="absolute -top-6 h-5 w-5 rounded-full bg-muted-foreground/40 blur-md" />}
                </AnimatePresence>
                <span className="candle" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-24 left-1/2 h-20 w-48 -translate-x-1/2 rounded-t-2xl bg-cake-top shadow-soft"><div className="drip" /></div>
          <div className="absolute bottom-4 left-1/2 h-20 w-64 -translate-x-1/2 rounded-t-xl bg-cake-base shadow-soft"><div className="drip" /></div>
          <div className="absolute bottom-0 left-1/2 h-5 w-72 -translate-x-1/2 rounded-full bg-card shadow-soft" />
        </div>
        <button onClick={blow} disabled={out}
          className="mt-10 rounded-full bg-gradient-rose px-8 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-105 disabled:opacity-60">
          {out ? "Wish made ✨" : "Blow Out the Candles 🎂"}
        </button>
        <AnimatePresence>
          {out && (
            <motion.div initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.6, duration: 1 }}
              className="mt-10 rounded-2xl bg-card p-8 text-center shadow-soft">
              <Sparkles className="mx-auto mb-3 text-gold" />
              <p className="font-hand text-2xl text-foreground">{secretMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export function Letter() {
  return (
    <section className="px-5 py-24 md:py-32">
      <Heading kicker="For your eyes only" title="A letter for you" />
      <Reveal className="paper relative mx-auto max-w-2xl rounded-sm p-8 pb-24 shadow-soft md:p-14 md:pb-28">
        {letter.map((p, i) => (
          <p key={i} className={i === 0 ? "mb-6 font-serif text-2xl italic text-foreground" : "mb-5 leading-relaxed text-foreground/85"}>{p}</p>
        ))}
        <p className="mt-10 font-serif italic text-muted-foreground">Always in your corner,</p>
        <p className="font-hand text-4xl text-foreground">{YOUR_NAME}</p>
        <div className="wax-seal absolute -bottom-10 left-1/2 grid h-20 w-20 -translate-x-1/2 place-items-center rounded-full">
          <Heart className="text-primary-foreground" fill="currentColor" size={26} />
        </div>
      </Reveal>
      <p className="mt-24 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">Made with love, for {SISTER_NAME} · {new Date().getFullYear()}</p>
    </section>
  );
}
