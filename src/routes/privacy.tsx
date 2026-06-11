import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Stocks City" },
      { name: "description", content: "Privacy policy for Stocks City learning platform." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-gray-300">
        <p>Stocks City respects your privacy. We collect minimal information needed to deliver our educational services and respond to your enquiries via WhatsApp, Telegram and Instagram.</p>
        <p>We do not sell your data to third parties. Contact details shared with us are used solely for course communication and support.</p>
        <p>By using this site, you consent to this privacy policy. For questions, contact us on WhatsApp.</p>
      </section>
    </SiteLayout>
  ),
});
