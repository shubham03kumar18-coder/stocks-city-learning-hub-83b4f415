import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Tradeverse City" },
      { name: "description", content: "Terms and conditions for using the Tradeverse City learning platform." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="LEGAL" title="Terms & Conditions" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-gray-300">
        <p>Tradeverse City provides stock market education for informational purposes only. Nothing on this site is financial advice, a recommendation, or a solicitation to buy or sell securities.</p>
        <p>Trading and investing involve substantial risk including loss of capital. You are solely responsible for your decisions.</p>
        <p>Course content, materials, and community access are provided as-is. Misuse, redistribution, or piracy of paid materials is strictly prohibited.</p>
      </section>
    </SiteLayout>
  ),
});
