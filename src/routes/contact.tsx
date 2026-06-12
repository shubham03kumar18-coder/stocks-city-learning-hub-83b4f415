import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";
import { WhatsAppSVG } from "../svg/WhatsAppSVG";
import { TelegramSVG } from "../svg/TelegramSVG";
import { InstagramSVG } from "../svg/InstagramSVG";
import { INSTAGRAM_LINK, PHONE_DISPLAY, TELEGRAM_LINK, WHATSAPP_LINK } from "../constants/links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Tradeverse City" },
      { name: "description", content: "Contact Tradeverse City on WhatsApp, Telegram or Instagram for course details, pricing and enrollment." },
      { property: "og:title", content: "Contact Tradeverse City" },
      { property: "og:description", content: "Reach Tradeverse City on WhatsApp +91 93183 36747." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="CONTACT US"
        title="Let's Talk Trading"
        subtitle="Reach out for course details, pricing, batches & enrollment information."
      />
      <section className="bg-[#0a0a0a] px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#C9A84C]/40 bg-[#141414] p-8 text-center">
            <p className="text-sm uppercase tracking-widest text-gray-400">Call / WhatsApp</p>
            <p className="mt-2 text-3xl font-black text-[#C9A84C] md:text-4xl">{PHONE_DISPLAY}</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl bg-[#25D366] p-6 text-white shadow-xl transition hover:scale-[1.03]"
            >
              <WhatsAppSVG size={48} />
              <span className="font-bold">WhatsApp</span>
              <span className="text-xs opacity-90">Tap to chat</span>
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl bg-[#229ED9] p-6 text-white shadow-xl transition hover:scale-[1.03]"
            >
              <TelegramSVG size={48} />
              <span className="font-bold">Telegram</span>
              <span className="text-xs opacity-90">Join community</span>
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] p-6 text-white shadow-xl transition hover:scale-[1.03]"
            >
              <InstagramSVG size={48} />
              <span className="font-bold">Instagram</span>
              <span className="text-xs opacity-90">@tradeverse__city</span>
            </a>
          </div>

          <div className="mt-10 rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] p-6 text-center text-gray-300">
            <p className="font-bold text-white">Educational Disclaimer</p>
            <p className="mt-2 text-sm text-gray-400">
              Tradeverse City offers educational content only. We do not provide tips, calls or financial advice.
              All trading involves risk. Please do your own research.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
