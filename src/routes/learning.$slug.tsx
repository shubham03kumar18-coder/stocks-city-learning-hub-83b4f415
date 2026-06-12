import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { LEARNING_TOPICS, type LearningTopic } from "../data/learning";
import { WHATSAPP_LINK, TELEGRAM_LINK } from "../constants/links";

export const Route = createFileRoute("/learning/$slug")({
  loader: ({ params }): { topic: LearningTopic } => {
    const topic = LEARNING_TOPICS.find((t) => t.slug === params.slug);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.topic;
    const title = t ? `${t.title} — Tradeverse City Learning` : "Learning — Tradeverse City";
    const desc = t?.tagline ?? "Tradeverse City Learning Platform";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <PageHero title="Topic not found" subtitle="The learning topic you're looking for doesn't exist." />
    </SiteLayout>
  ),
  component: LearningDetail,
});

function LearningDetail() {
  const { topic } = Route.useLoaderData() as { topic: LearningTopic };
  return (
    <SiteLayout>
      <PageHero eyebrow="LEARNING PLATFORM" title={`${topic.icon} ${topic.title}`} subtitle={topic.tagline} />
      <section className="bg-[#0a0a0a] px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <p className="text-lg leading-relaxed text-gray-300">{topic.intro}</p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1f1f1f] bg-[#141414] p-6">
              <h2 className="text-xl font-bold text-[#C9A84C]">What's Inside</h2>
              <ul className="mt-4 space-y-2 text-gray-300">
                {topic.highlights.map((h) => (
                  <li key={h} className="flex gap-2"><span className="text-[#C9A84C]">▸</span><span>{h}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1f1f1f] bg-[#141414] p-6">
              <h2 className="text-xl font-bold text-[#C9A84C]">What You'll Achieve</h2>
              <ul className="mt-4 space-y-2 text-gray-300">
                {topic.outcomes.map((h) => (
                  <li key={h} className="flex gap-2"><span className="text-[#C9A84C]">✓</span><span>{h}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#C9A84C]/40 bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-6">
            <div>
              <p className="text-lg font-bold text-white">Want to explore this in detail?</p>
              <p className="text-sm text-gray-400">Chat with us for batch timings & full curriculum.</p>
            </div>
            <div className="flex gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-5 py-2 font-bold text-white">WhatsApp</a>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#229ED9] px-5 py-2 font-bold text-white">Telegram</a>
            </div>
          </div>

          <div className="text-center">
            <Link to="/learning" className="text-sm font-semibold text-[#C9A84C] hover:underline">← Back to Learning Platform</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
