import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";
import { AboutSection } from "../components/AboutSection";
import { StatsSection } from "../components/StatsSection";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Stocks City" },
      { name: "description", content: "Stocks City is a premium stock market learning platform helping individuals master trading & investing through practical education by Rajeev Bair." },
      { property: "og:title", content: "About Stocks City" },
      { property: "og:description", content: "Premium stock market learning platform by Rajeev Bair." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { t: "Practical Education", d: "Real charts, real markets, real lessons — not theory." },
  { t: "Structured Path", d: "From absolute basics to advanced strategies, step by step." },
  { t: "Community First", d: "32,000+ learners growing and supporting each other daily." },
  { t: "Transparent Teaching", d: "No tips, no signals — only education and skill-building." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="ABOUT US"
        title="Built for Serious Learners"
        subtitle="Stocks City is a premium stock market learning platform dedicated to helping individuals understand trading and investing through practical education, market insights, and real-world examples."
      />
      <AboutSection />
      <section className="bg-[#0a0a0a] px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.t} className="rounded-2xl border border-[#1f1f1f] bg-[#141414] p-6 transition hover:border-[#C9A84C]/50">
              <h3 className="text-xl font-bold text-[#C9A84C]">{v.t}</h3>
              <p className="mt-2 text-gray-300">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
      <StatsSection />
      <CTASection />
    </SiteLayout>
  );
}
