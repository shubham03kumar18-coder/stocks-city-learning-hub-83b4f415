import { StocksCityLogo } from "../svg/StocksCityLogo";
import { InstagramSVG } from "../svg/InstagramSVG";
import { WhatsAppSVG } from "../svg/WhatsAppSVG";
import { TelegramSVG } from "../svg/TelegramSVG";
import { INSTAGRAM_LINK, TELEGRAM_LINK, WHATSAPP_LINK } from "../constants/links";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] px-4 py-12 text-gray-400">
      <div
        className="pointer-events-none absolute inset-0 grid place-items-center"
        style={{ transform: "rotate(-15deg)" }}
        aria-hidden
      >
        <span className="whitespace-nowrap text-6xl font-black text-white opacity-[0.05] md:text-8xl">
          Stocks City Learning Platform
        </span>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row md:justify-between">
        <StocksCityLogo />
        <p className="font-bold text-[#C9A84C]">32K+ Learners Learning Together</p>
        <div className="flex items-center gap-4">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <InstagramSVG />
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <WhatsAppSVG />
          </a>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <TelegramSVG />
          </a>
        </div>
      </div>
      <div className="relative mx-auto mt-8 max-w-6xl space-y-1 text-center text-xs">
        <p className="italic text-gray-500">⚠️ For Educational Purposes Only. Not Financial Advice.</p>
        <p className="text-gray-600">© 2025 Stocks City. All rights reserved.</p>
      </div>
    </footer>
  );
}
