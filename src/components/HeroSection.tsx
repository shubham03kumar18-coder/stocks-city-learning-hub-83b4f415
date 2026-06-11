import { Link } from "@tanstack/react-router";
import { WhatsAppSVG } from "../svg/WhatsAppSVG";
import { TelegramSVG } from "../svg/TelegramSVG";
import { InstagramSVG } from "../svg/InstagramSVG";
import { INSTAGRAM_LINK, TELEGRAM_LINK, WHATSAPP_LINK } from "../constants/links";

const TICKERS = [
  "NIFTY 📈", "BANKNIFTY 📊", "SENSEX 📈", "RELIANCE 💹",
  "TCS 📈", "HDFC 📊", "INFY 💹", "ADANI 📈", "ITC 💹",
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(201,168,76,0.18), transparent 50%), radial-gradient(circle at 80% 70%, rgba(37,99,235,0.12), transparent 50%)",
        }}
      />
      <div className="relative z-[1] mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full border border-[#C9A84C] bg-[#0a0a0a]/60 px-4 py-1.5 text-sm font-medium text-[#C9A84C]">
          📈 32,000+ Learners Learning Together
        </span>
        <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
          Learn the{" "}
          <span className="bg-gradient-to-r from-[#C9A84C] to-[#F0D080] bg-clip-text text-transparent underline decoration-[#C9A84C] decoration-4 underline-offset-8">
            Stock Market
          </span>
          <br />The Right Way
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:text-lg">
          Join 32,000+ learners and master trading, investing, technical analysis, risk
          management, price action, and market psychology through practical learning.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105"
          >
            <WhatsAppSVG size={22} /> Get Course Details
          </a>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105"
          >
            <TelegramSVG size={22} /> Join Telegram
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#C9A84C] px-6 py-3 font-bold text-[#C9A84C] transition hover:scale-105 hover:bg-[#C9A84C] hover:text-[#0a0a0a]"
          >
            <InstagramSVG size={22} /> Follow Instagram
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link to="/courses" className="text-gray-300 underline-offset-4 hover:text-[#C9A84C] hover:underline">
            Explore Courses →
          </Link>
          <Link to="/learning" className="text-gray-300 underline-offset-4 hover:text-[#C9A84C] hover:underline">
            Learning Platform →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 overflow-hidden border-y border-[#2a2a2a] bg-[#141414] py-3">
        <div className="flex animate-[ticker_30s_linear_infinite] gap-12 whitespace-nowrap">
          {[...TICKERS, ...TICKERS, ...TICKERS].map((t, i) => (
            <span key={i} className="text-sm font-bold text-[#C9A84C]">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
