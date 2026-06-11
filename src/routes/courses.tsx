import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";

const TOPICS = [
  "Stock Market Basics", "Candlestick Analysis", "Support & Resistance",
  "Trend Analysis", "Technical Analysis", "Chart Patterns",
  "Price Action Trading", "Risk Management", "Trading Psychology",
  "Swing Trading", "Intraday Trading", "Options Trading Fundamentals",
  "Market Research",
];

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Trading Courses — Stocks City" },
      { name: "description", content: "Master stock market basics, candlestick & chart patterns, price action, options, swing trading and more with Stocks City courses." },
      { property: "og:title", content: "Trading Courses — Stocks City" },
      { property: "og:description", content: "Complete trading curriculum from basics to advanced." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="TRADING COURSES"
        title="Master Every Aspect of Trading"
        subtitle="A complete curriculum covering the full journey from your first candle to advanced options strategies."
      />
      <section className="bg-[#0a0a0a] px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t, i) => (
            <div
              key={t}
              className="group flex items-center gap-4 rounded-2xl border border-[#1f1f1f] bg-[#141414] p-5 transition hover:border-[#C9A84C]/60"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#C9A84C] to-[#F0D080] text-sm font-black text-[#0a0a0a]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-semibold text-white group-hover:text-[#C9A84C]">{t}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#C9A84C]/40 bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-8 text-center">
          <p className="text-lg text-white">
            For complete course details, pricing, batches, and enrollment information,
            <span className="font-bold text-[#C9A84C]"> contact us on WhatsApp.</span>
          </p>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
