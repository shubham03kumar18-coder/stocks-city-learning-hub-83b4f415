import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { LessonCard } from "../components/LessonCard";
import { AboutSection } from "../components/AboutSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { StatsSection } from "../components/StatsSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stocks City — Master the Stock Market with Rajeev Bair" },
      {
        name: "description",
        content:
          "Stocks City by Rajeev Bair — India's fastest growing stock market learning platform. 32K+ learners, 200-day structured program, expert lessons on technical analysis.",
      },
      { property: "og:title", content: "Stocks City — Master the Stock Market" },
      {
        property: "og:description",
        content: "Join 32,000+ learners on a 200-day structured trading program by Rajeev Bair.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <LessonCard />
        <AboutSection />
        <CertificatesSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
