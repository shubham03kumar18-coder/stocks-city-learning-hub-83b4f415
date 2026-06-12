import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { COURSES } from "../data/courses";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Trading Courses — Tradeverse City" },
      { name: "description", content: "Master stock market basics, candlestick & chart patterns, price action, options, swing trading and more with Tradeverse City courses." },
      { property: "og:title", content: "Trading Courses — Tradeverse City" },
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
        subtitle="A complete curriculum covering the full journey from your first candle to advanced trading strategies."
      />
      <section className="bg-[#0a0a0a] px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <Link
              key={c.slug}
              to="/courses/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col gap-3 rounded-2xl border border-[#1f1f1f] bg-[#141414] p-5 transition hover:border-[#C9A84C]/60 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#C9A84C] to-[#F0D080] text-sm font-black text-[#0a0a0a]">
                  {c.number}
                </div>
                <div className="font-semibold text-white group-hover:text-[#C9A84C]">{c.title}</div>
              </div>
              <p className="text-sm text-gray-400">{c.tagline}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="rounded-full border border-[#C9A84C]/30 px-2 py-0.5 text-[10px] font-bold text-[#C9A84C]">{c.level}</span>
                <span className="text-xs font-bold text-[#C9A84C]">View details →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#C9A84C]/40 bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-8 text-center">
          <p className="text-lg text-white">
            For full course details, batches, and enrollment information,
            <span className="font-bold text-[#C9A84C]"> contact us on WhatsApp.</span>
          </p>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
