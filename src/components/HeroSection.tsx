import { InstagramSVG } from "../svg/InstagramSVG";
import { INSTAGRAM_LINK, TELEGRAM_LINK, WHATSAPP_LINK } from "../constants/links";
import { SectionNav } from "./SectionNav";

const TICKERS = [
  "NIFTY 📈",
  "BANKNIFTY 📊",
  "SENSEX 📈",
  "RELIANCE 💹",
  "TCS 📈",
  "HDFC 📊",
  "INFY 💹",
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      <SectionNav />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(201,168,76,0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(37,99,235,0.12), transparent 50%)",
        }}
      />
      <div className="relative z-[1] mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full border border-[#C9A84C] bg-[#0a0a0a]/60 px-4 py-1.5 text-sm font-medium text-[#C9A84C]">
          📈 32K+ Learners Learning Together
        </span>
        <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
          Master the{" "}
          <span className="bg-gradient-to-r from-[#C9A84C] to-[#F0D080] bg-clip-text text-transparent underline decoration-[#C9A84C] decoration-4 underline-offset-8">
            Stock Market
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:text-lg">
          Step-by-step structured learning from basics to advanced trading strategies
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-7 py-3 font-bold text-white shadow-lg transition hover:scale-105"
          >
            📱 Get Course Details
          </a>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-[#C9A84C] px-7 py-3 font-bold text-[#C9A84C] transition hover:scale-105 hover:bg-[#C9A84C] hover:text-[#0a0a0a]"
          >
            ✈️ Join Telegram Community
          </a>
        </div>
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
        >
          <InstagramSVG size={20} /> @stocks__city on Instagram
        </a>
      </div>

      <div className="absolute bottom-6 left-0 right-0 overflow-hidden border-y border-[#2a2a2a] bg-[#141414] py-3">
        <div className="flex animate-[ticker_30s_linear_infinite] gap-12 whitespace-nowrap">
          {[...TICKERS, ...TICKERS, ...TICKERS].map((t, i) => (
            <span key={i} className="text-sm font-bold text-[#C9A84C]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
