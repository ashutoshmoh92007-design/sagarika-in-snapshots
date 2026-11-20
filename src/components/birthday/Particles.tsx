import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Bokeh({ count = 24 }: { count?: number }) {
  const [dots, setDots] = useState<{ x: number; y: number; s: number; d: number; c: number }[]>([]);
  useEffect(() => {
    setDots(Array.from({ length: count }, () => ({ x: Math.random() * 100, y: Math.random() * 100, s: 6 + Math.random() * 28, d: 6 + Math.random() * 8, c: Math.floor(Math.random() * 3) })));
  }, [count]);
  const cls = ["bg-blush/50", "bg-rose/40", "bg-gold/50"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span key={i} className={`absolute rounded-full blur-[2px] ${cls[d.c]}`}
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.s, height: d.s }}
          initial={{ opacity: 0 }} animate={{ opacity: [0, 0.9, 0], y: [0, -60, -120] }}
          transition={{ duration: d.d, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

export function ConfettiBurst({ fire }: { fire: number }) {
  const [pieces, setPieces] = useState<{ x: number; r: number; c: number; d: number }[]>([]);
  useEffect(() => {
    if (!fire) return;
    setPieces(Array.from({ length: 90 }, () => ({ x: (Math.random() - 0.5) * 1400, r: Math.random() * 720, c: Math.floor(Math.random() * 4), d: 1.8 + Math.random() * 1.6 })));
    const t = setTimeout(() => setPieces([]), 3800);
    return () => clearTimeout(t);
  }, [fire]);
  const cls = ["bg-blush", "bg-rose", "bg-gold", "bg-charcoal"];
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p, i) => (
        <motion.span key={`${fire}-${i}`} className={`absolute left-1/2 top-1/2 h-3 w-1.5 rounded-sm ${cls[p.c]}`}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: p.x, y: [0, -400 - Math.random() * 200, 700], rotate: p.r, opacity: [1, 1, 0] }}
          transition={{ duration: p.d, ease: "easeOut" }} />
      ))}
    </div>
  );
}
