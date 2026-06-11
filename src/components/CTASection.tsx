import { InstagramSVG } from "../svg/InstagramSVG";
import { WhatsAppSVG } from "../svg/WhatsAppSVG";
import { TelegramSVG } from "../svg/TelegramSVG";
import { INSTAGRAM_LINK, PHONE_DISPLAY, TELEGRAM_LINK, WHATSAPP_LINK } from "../constants/links";
import { SectionNav } from "./SectionNav";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-20">
      <SectionNav />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.2), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-black text-white md:text-5xl">
          Ready to Start Your{" "}
          <span className="bg-gradient-to-r from-[#C9A84C] to-[#F0D080] bg-clip-text text-transparent">
            Trading Journey?
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Join 32,000+ learners on India&apos;s fastest growing stock market learning platform
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 rounded-2xl bg-[#25D366] p-6 text-white shadow-xl transition hover:scale-[1.03]"
          >
            <div className="flex items-center gap-3">
              <WhatsAppSVG size={32} />
              <span className="text-lg font-bold">Get Course Details on WhatsApp</span>
            </div>
            <span className="text-sm opacity-90">{PHONE_DISPLAY}</span>
          </a>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 rounded-2xl bg-[#229ED9] p-6 text-white shadow-xl transition hover:scale-[1.03]"
          >
            <div className="flex items-center gap-3">
              <TelegramSVG size={32} />
              <span className="text-lg font-bold">Join Telegram Community</span>
            </div>
            <span className="text-sm opacity-90">{PHONE_DISPLAY}</span>
          </a>
        </div>

        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#2a2a2a] bg-[#141414] px-5 py-3 text-white transition hover:scale-105"
        >
          <InstagramSVG size={24} />
          <span className="font-bold">@stocks__city</span>
          <span className="text-sm text-gray-400">Follow for daily trading lessons</span>
        </a>
      </div>
    </section>
  );
}
