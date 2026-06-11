import { useEffect, useRef, useState } from "react";
import { SectionNav } from "./SectionNav";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const STATS: Stat[] = [
  { value: 32000, suffix: "+", label: "Active Learners" },
  { value: 200, suffix: "", label: "Day Learning Program" },
  { value: 40, suffix: "+", label: "Expert Lessons" },
  { value: 4.9, suffix: "★", label: "Student Rating", decimals: 1 },
];

function CountUp({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1500;
            const startTime = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - startTime) / duration, 1);
              setValue(target * (1 - Math.pow(1 - p, 3)));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const display =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative bg-[#0d0d0d] px-4 py-20">
      <SectionNav />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[#C9A84C]/40 bg-[#141414] p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(201,168,76,0.15)]"
          >
            <p className="text-3xl font-black text-[#C9A84C] md:text-4xl">
              <CountUp target={s.value} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="mt-2 text-sm text-white">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
