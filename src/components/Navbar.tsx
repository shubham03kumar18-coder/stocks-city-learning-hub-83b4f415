import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { StocksCityLogo } from "../svg/StocksCityLogo";
import { InstagramSVG } from "../svg/InstagramSVG";
import { WhatsAppSVG } from "../svg/WhatsAppSVG";
import { TelegramSVG } from "../svg/TelegramSVG";
import { INSTAGRAM_LINK, TELEGRAM_LINK, WHATSAPP_LINK } from "../constants/links";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/learning", label: "Learning Platform" },
  { to: "/courses", label: "Trading Courses" },
  { to: "/contact", label: "Contact Us" },
] as const;

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
      className={`sticky top-0 z-40 w-full border-b border-[#C9A84C]/40 transition-colors ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur" : "bg-[#0a0a0a]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <StocksCityLogo />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold text-gray-300 transition hover:text-[#C9A84C]"
              activeProps={{ className: "text-sm font-semibold text-[#C9A84C]" }}
            >
              {n.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <InstagramSVG />
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <WhatsAppSVG size={26} />
          </a>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <TelegramSVG size={26} />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#C9A84C] to-[#F0D080] px-4 py-2 text-sm font-bold text-[#0a0a0a] shadow transition hover:scale-105"
          >
            Enroll Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded border border-[#2a2a2a] p-2 text-[#C9A84C] lg:hidden"
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
        <div className="flex flex-col gap-2 border-t border-[#2a2a2a] bg-[#0a0a0a] px-4 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-[#141414] hover:text-[#C9A84C]"
              activeProps={{ className: "rounded px-3 py-2 text-sm font-semibold text-[#C9A84C] bg-[#141414]" }}
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-4 px-3">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"><InstagramSVG /></a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><WhatsAppSVG size={28} /></a>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer"><TelegramSVG size={28} /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
