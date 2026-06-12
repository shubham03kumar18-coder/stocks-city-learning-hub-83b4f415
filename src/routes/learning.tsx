import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";
import { StatsSection } from "../components/StatsSection";
import { CTASection } from "../components/CTASection";
import { LEARNING_TOPICS } from "../data/learning";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: "Learning Platform — Tradeverse City" },
      { name: "description", content: "Structured learning, live sessions, market analysis & 32,000+ learner community — the Tradeverse City learning platform." },
      { property: "og:title", content: "Tradeverse City Learning Platform" },
      { property: "og:description", content: "Structured stock market learning with live sessions and community support." },
      { property: "og:url", content: "/learning" },
    ],
    links: [{ rel: "canonical", href: "/learning" }],
  }),
  component: LearningPage,
});

function LearningPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="LEARNING PLATFORM"
        title="Everything You Need to Learn"
        subtitle="32,000+ Learners Learning Together — built around real markets, structured lessons and an active community."
      />
      <section className="bg-[#0a0a0a] px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEARNING_TOPICS.map((f) => (
            <Link
              key={f.slug}
              to="/learning/$slug"
              params={{ slug: f.slug }}
              className="group rounded-2xl border border-[#1f1f1f] bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-6 transition hover:-translate-y-1 hover:border-[#C9A84C]/60"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 text-lg font-bold text-white group-hover:text-[#C9A84C]">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{f.tagline}</p>
              <p className="mt-4 text-xs font-bold text-[#C9A84C]">Explore →</p>
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#C9A84C]/40 bg-[#141414] p-8 text-center">
          <p className="text-3xl font-black text-[#C9A84C] md:text-4xl">32,000+ Learners</p>
          <p className="mt-1 text-gray-300">Learning Together on Tradeverse City</p>
        </div>
      </section>
      <StatsSection />
      <CTASection />
    </SiteLayout>
  );
}
