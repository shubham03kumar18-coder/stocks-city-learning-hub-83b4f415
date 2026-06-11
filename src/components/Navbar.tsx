import { useEffect, useState } from "react";
import { StocksCityLogo } from "../svg/StocksCityLogo";
import { InstagramSVG } from "../svg/InstagramSVG";
import { WhatsAppSVG } from "../svg/WhatsAppSVG";
import { TelegramSVG } from "../svg/TelegramSVG";
import { INSTAGRAM_LINK, TELEGRAM_LINK, WHATSAPP_LINK } from "../constants/links";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-[#C9A84C]/40 transition-colors ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur" : "bg-[#0a0a0a]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center">
          <StocksCityLogo />
        </a>
        <div className="hidden items-center gap-4 md:flex">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <InstagramSVG />
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <WhatsAppSVG />
          </a>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <TelegramSVG />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#C9A84C] to-[#F0D080] px-5 py-2 text-sm font-bold text-[#0a0a0a] shadow transition hover:scale-105"
          >
            Join Community
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded border border-[#2a2a2a] p-2 text-[#C9A84C] md:hidden"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-3 border-t border-[#2a2a2a] bg-[#0a0a0a] px-4 py-4 md:hidden">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white">
            <InstagramSVG /> Instagram
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white">
            <WhatsAppSVG /> WhatsApp
          </a>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white">
            <TelegramSVG /> Telegram
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#C9A84C] to-[#F0D080] px-5 py-2 text-center text-sm font-bold text-[#0a0a0a]"
          >
            Join Community
          </a>
        </div>
      )}
    </nav>
  );
}
