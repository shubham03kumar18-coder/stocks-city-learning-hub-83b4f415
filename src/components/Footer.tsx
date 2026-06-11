import { Link } from "@tanstack/react-router";
import { StocksCityLogo } from "../svg/StocksCityLogo";
import { InstagramSVG } from "../svg/InstagramSVG";
import { WhatsAppSVG } from "../svg/WhatsAppSVG";
import { TelegramSVG } from "../svg/TelegramSVG";
import { INSTAGRAM_LINK, TELEGRAM_LINK, WHATSAPP_LINK } from "../constants/links";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#1f1f1f] bg-[#050505] px-4 py-12 text-gray-400">
      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <StocksCityLogo />
          <p className="mt-4 max-w-sm text-sm">
            India&apos;s premium stock market learning platform. Master trading, investing,
            and market psychology with structured education.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110"><InstagramSVG /></a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110"><WhatsAppSVG size={26} /></a>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110"><TelegramSVG size={26} /></a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#C9A84C]">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/learning" className="hover:text-white">Learning Platform</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#C9A84C]">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto mt-10 max-w-6xl space-y-1 border-t border-[#1f1f1f] pt-6 text-center text-xs">
        <p className="italic text-gray-500">⚠️ For Educational Purposes Only. Not Financial Advice.</p>
        <p className="text-gray-600">© 2025 Stocks City. All rights reserved.</p>
      </div>
    </footer>
  );
}
