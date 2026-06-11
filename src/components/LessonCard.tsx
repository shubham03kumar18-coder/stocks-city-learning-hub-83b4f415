import { useState } from "react";
import { SectionNav } from "./SectionNav";

function MiniBounceChart({ color, dashColor, direction }: { color: string; dashColor: string; direction: "up" | "down" }) {
  const path =
    direction === "up"
      ? "M10,80 L40,40 L70,70 L100,30 L130,65 L160,25 L190,55"
      : "M10,20 L40,60 L70,30 L100,70 L130,35 L160,75 L190,45";
  const lineY = direction === "up" ? 85 : 15;
  return (
    <svg viewBox="0 0 200 100" className="h-32 w-full">
      <line x1="0" y1={lineY} x2="200" y2={lineY} stroke={dashColor} strokeWidth="2" strokeDasharray="5,5" />
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CandlestickChart() {
  const candles = [
    { x: 20, o: 70, c: 50, h: 45, l: 75, up: true },
    { x: 40, o: 55, c: 65, h: 50, l: 70, up: false },
    { x: 60, o: 65, c: 50, h: 45, l: 70, up: true },
    { x: 80, o: 55, c: 70, h: 50, l: 75, up: false },
    { x: 100, o: 70, c: 55, h: 50, l: 80, up: true },
    { x: 120, o: 60, c: 75, h: 55, l: 80, up: false },
    { x: 140, o: 75, c: 60, h: 55, l: 80, up: true },
    { x: 160, o: 65, c: 80, h: 60, l: 85, up: false },
    { x: 180, o: 80, c: 65, h: 60, l: 85, up: true },
    { x: 200, o: 70, c: 85, h: 65, l: 90, up: false },
    { x: 220, o: 85, c: 70, h: 65, l: 90, up: true },
    { x: 240, o: 75, c: 90, h: 70, l: 95, up: false },
    { x: 260, o: 90, c: 75, h: 70, l: 100, up: true },
    { x: 280, o: 80, c: 95, h: 75, l: 100, up: false },
    { x: 300, o: 95, c: 80, h: 75, l: 105, up: true },
  ];
  return (
    <svg viewBox="0 0 340 200" className="h-52 w-full">
      <rect x="0" y="30" width="340" height="22" fill="#DC2626" opacity="0.18" />
      <text x="6" y="44" fill="#DC2626" fontSize="9" fontWeight="bold">Resistance Zone</text>
      <rect x="0" y="155" width="340" height="22" fill="#16A34A" opacity="0.18" />
      <text x="6" y="170" fill="#16A34A" fontSize="9" fontWeight="bold">Support Zone</text>
      {candles.map((c, i) => {
        const color = c.up ? "#16A34A" : "#DC2626";
        const top = Math.min(c.o, c.c);
        const height = Math.abs(c.o - c.c);
        return (
          <g key={i}>
            <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={color} strokeWidth="1.5" />
            <rect x={c.x - 5} y={top} width="10" height={height} fill={color} />
          </g>
        );
      })}
      <g>
        <rect x="195" y="100" width="55" height="16" fill="#FBBF24" rx="3" />
        <text x="222" y="111" fill="#0a0a0a" fontSize="9" fontWeight="bold" textAnchor="middle">Entry Area</text>
        <line x1="222" y1="116" x2="220" y2="125" stroke="#FBBF24" strokeWidth="1.5" />
      </g>
      <g>
        <text x="305" y="180" fill="#DC2626" fontSize="9" fontWeight="bold">↓ SL</text>
        <text x="305" y="50" fill="#16A34A" fontSize="9" fontWeight="bold">↑ Target</text>
      </g>
    </svg>
  );
}

function VolumeChart() {
  const bars = [40, 55, 35, 60, 45, 50, 90, 100];
  return (
    <svg viewBox="0 0 200 100" className="h-28 w-full">
      {bars.map((h, i) => {
        const isHigh = i >= 6;
        return (
          <rect
            key={i}
            x={10 + i * 23}
            y={100 - h}
            width="18"
            height={h}
            fill={isHigh ? "#16A34A" : "#666"}
          />
        );
      })}
      <text x="135" y="20" fill="#16A34A" fontSize="10" fontWeight="bold">HIGH VOLUME!</text>
    </svg>
  );
}

function BreakoutChart({ bullish }: { bullish: boolean }) {
  const color = bullish ? "#16A34A" : "#DC2626";
  const lineColor = bullish ? "#DC2626" : "#16A34A";
  const path = bullish
    ? "M10,75 L40,72 L70,68 L95,55 L120,55 L150,38 L180,20"
    : "M10,25 L40,28 L70,32 L95,45 L120,45 L150,62 L180,80";
  const lineY = bullish ? 50 : 50;
  return (
    <svg viewBox="0 0 200 100" className="h-28 w-full">
      <line x1="0" y1={lineY} x2="200" y2={lineY} stroke={lineColor} strokeWidth="2" strokeDasharray="4,4" />
      <path d={path} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <polygon
        points={bullish ? "175,15 185,25 175,25" : "175,85 185,75 175,75"}
        fill={color}
      />
    </svg>
  );
}

const CHECKS = [
  "Trend Confirmed",
  "Support/Resistance Marked",
  "Volume Checked",
  "Risk Defined",
  "Stop Loss Planned",
];

export function LessonCard() {
  const [checked, setChecked] = useState<boolean[]>(CHECKS.map(() => false));
  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section className="relative bg-[#0a0a0a] px-4 py-20">
      <SectionNav />
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-4xl font-black text-white md:text-5xl">
          Today&apos;s <span className="text-[#C9A84C]">Lesson</span>
        </h2>

        <div
          className="rounded-2xl border border-[#C9A84C]/30 bg-[#FAF8F2] p-6 text-[#1a1a1a] shadow-2xl md:p-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(37,99,235,0.08) 31px, rgba(37,99,235,0.08) 32px)",
          }}
        >
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-md bg-[#C9A84C] px-3 py-1 font-bold text-[#0a0a0a]">
              Day 25 / 200 — Part 1
            </span>
            <span className="rounded-md bg-yellow-100 px-2 py-1 font-semibold text-yellow-800">🟡 Intermediate</span>
            <span className="rounded-md bg-gray-200 px-2 py-1 font-semibold text-gray-700">⏱ 3 Minutes</span>
          </div>
          <h3 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">SUPPORT &amp; RESISTANCE</h3>
          <p className="mt-2 text-lg italic text-gray-600">The Foundation of Smart Trading</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-[#2563EB] bg-white p-5 shadow">
              <h4 className="text-lg font-bold text-[#2563EB]">What is Support?</h4>
              <p className="mt-2 text-sm text-gray-700">
                Support ek aisa price level hota hai jahan buying pressure, selling pressure se zyada ho jaata hai.
                Think of it as a <b>FLOOR</b> — price bounces UP from here.
              </p>
              <MiniBounceChart color="#16A34A" dashColor="#16A34A" direction="up" />
            </div>

            <div className="rounded-lg border-l-4 border-[#DC2626] bg-white p-5 shadow">
              <h4 className="text-lg font-bold text-[#DC2626]">What is Resistance?</h4>
              <p className="mt-2 text-sm text-gray-700">
                Resistance ek aisa level hai jahan selling pressure dominate karta hai. Think of it as a{" "}
                <b>CEILING</b> — price gets rejected DOWN from here.
              </p>
              <MiniBounceChart color="#DC2626" dashColor="#DC2626" direction="down" />
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-[#141414] p-5 text-white shadow-lg">
            <h4 className="mb-3 text-lg font-bold text-[#C9A84C]">📊 Real Market Example</h4>
            <CandlestickChart />
          </div>

          <div className="mt-6 rounded-lg border-l-4 border-[#FBBF24] bg-white p-5 shadow">
            <h4 className="text-lg font-bold text-[#B45309]">Volume Confirmation</h4>
            <p className="mt-2 text-sm text-gray-700">
              Volume confirms breakouts! High volume = strong move. Low volume = fake breakout — avoid!
            </p>
            <VolumeChart />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-5 shadow ring-1 ring-green-200">
              <h4 className="text-lg font-bold text-green-700">🚀 Bullish Breakout</h4>
              <BreakoutChart bullish />
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-green-200 px-2 py-1 font-semibold text-green-800">Resistance Break</span>
                <span className="rounded bg-green-200 px-2 py-1 font-semibold text-green-800">Retest</span>
                <span className="rounded bg-green-200 px-2 py-1 font-semibold text-green-800">Uptrend</span>
              </div>
            </div>
            <div className="rounded-lg bg-red-50 p-5 shadow ring-1 ring-red-200">
              <h4 className="text-lg font-bold text-red-700">📉 Bearish Breakdown</h4>
              <BreakoutChart bullish={false} />
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-red-200 px-2 py-1 font-semibold text-red-800">Support Break</span>
                <span className="rounded bg-red-200 px-2 py-1 font-semibold text-red-800">Retest</span>
                <span className="rounded bg-red-200 px-2 py-1 font-semibold text-red-800">Downtrend</span>
              </div>
            </div>
          </div>

          <div
            className="mx-auto mt-8 max-w-md rounded bg-[#FEF08A] p-4 text-center text-sm font-semibold text-[#1a1a1a] shadow-lg"
            style={{ transform: "rotate(-1deg)" }}
          >
            📌 Important: Support and Resistance are AREAS, not exact price levels!
          </div>

          <div className="mt-6 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] p-5 text-white shadow">
            <p className="font-semibold">💡 Pro Tip: Always wait for confirmation before entering a breakout trade.</p>
          </div>

          <div className="mt-4 rounded-lg bg-orange-200 p-5 text-[#7c2d12] shadow">
            <p className="font-semibold">
              ⚠️ Common Mistake: Beginners often buy immediately after breakout without checking volume.
            </p>
          </div>

          <div className="mt-6 rounded-lg bg-white p-5 shadow">
            <h4 className="mb-3 text-lg font-bold text-[#1a1a1a]">✅ Before Taking a Trade:</h4>
            <ul className="space-y-2">
              {CHECKS.map((c, i) => (
                <li key={c}>
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center gap-3 text-left text-sm text-gray-800"
                  >
                    <span
                      className={`grid h-5 w-5 place-items-center rounded border-2 ${
                        checked[i] ? "border-green-600 bg-green-600 text-white" : "border-gray-400"
                      }`}
                    >
                      {checked[i] ? "✓" : ""}
                    </span>
                    <span className={checked[i] ? "line-through opacity-60" : ""}>{c}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a855f7] p-5 text-white shadow">
            <h4 className="font-bold">🧠 Memory Trick:</h4>
            <p className="mt-1 text-sm">
              Support = FLOOR (price bounces UP) <br />
              Resistance = CEILING (price bounces DOWN) <br />
              Price oscillates between them!
            </p>
          </div>

          <div className="mt-6 rounded-lg border-2 border-[#C9A84C] bg-[#141414] p-5 text-white shadow">
            <h4 className="text-lg font-bold text-[#C9A84C]">📝 Quick Quiz:</h4>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
              <li>What is Support?</li>
              <li>What is Resistance?</li>
              <li>Why is Volume Important?</li>
              <li>What is a Breakout?</li>
            </ol>
          </div>

          <div className="mt-6 rounded-lg bg-gradient-to-r from-[#C9A84C] to-[#F0D080] p-5 text-[#0a0a0a] shadow-lg">
            <p className="font-bold">
              🎯 Key Takeaway: Support and Resistance help traders identify important market zones for entries,
              exits, and risk management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
