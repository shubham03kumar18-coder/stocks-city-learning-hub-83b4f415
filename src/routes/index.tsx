import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { StatsSection } from "../components/StatsSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stocks City — Learn Stock Market The Right Way | Rajeev Bair" },
      { name: "description", content: "Join 32,000+ learners at Stocks City. Master trading, investing, technical analysis, price action, risk management & market psychology with structured education." },
      { property: "og:title", content: "Stocks City — Premium Stock Market Learning" },
      { property: "og:description", content: "32,000+ learners learning together. Premium stock market education by Rajeev Bair." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ReviewsSection />
      <CTASection />
    </SiteLayout>
  );
}
