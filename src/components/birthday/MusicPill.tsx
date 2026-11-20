import { useRef, useState } from "react";
import { Pause, Play, Music2 } from "lucide-react";

// Soft generated ambient pad. To use your own song, put an mp3 in /public and swap in an <audio> element.
export function MusicPill() {
  const [playing, setPlaying] = useState(false);
  const ctx = useRef<{ ac: AudioContext; gain: GainNode } | null>(null);
  const toggle = () => {
    if (!ctx.current) {
      const ac = new AudioContext();
      const gain = ac.createGain(); gain.gain.value = 0; gain.connect(ac.destination);
      [261.6, 329.6, 392, 493.9].forEach((f, i) => {
        const o = ac.createOscillator(); o.type = "sine"; o.frequency.value = f;
        const lfo = ac.createOscillator(); lfo.frequency.value = 0.1 + i * 0.05;
        const lg = ac.createGain(); lg.gain.value = 0.03; lfo.connect(lg);
        const g = ac.createGain(); g.gain.value = 0.04; lg.connect(g.gain);
        o.connect(g); g.connect(gain); o.start(); lfo.start();
      });
      ctx.current = { ac, gain };
    }
    const { ac, gain } = ctx.current;
    ac.resume();
    gain.gain.linearRampToValueAtTime(playing ? 0 : 0.6, ac.currentTime + 1.2);
    setPlaying(!playing);
  };
  return (
    <button onClick={toggle} aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-border bg-card/80 py-2 pl-2 pr-4 shadow-soft backdrop-blur-md transition hover:scale-105">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
        {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </span>
      <span className="hidden text-left sm:block">
        <span className="block text-xs font-semibold text-foreground">Our Song</span>
        <span className="flex items-center gap-1 text-[10px] text-muted-foreground"><Music2 size={10} /> soft & warm</span>
      </span>
      <span className="flex h-5 items-end gap-0.5">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`w-1 rounded-full bg-rose ${playing ? "eq-bar" : "h-1"}`} style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </span>
    </button>
  );
}
