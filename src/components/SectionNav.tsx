import { InstagramSVG } from "../svg/InstagramSVG";
import { WhatsAppSVG } from "../svg/WhatsAppSVG";
import { TelegramSVG } from "../svg/TelegramSVG";
import { INSTAGRAM_LINK, TELEGRAM_LINK, WHATSAPP_LINK } from "../constants/links";

export function SectionNav() {
  return (
    <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#0a0a0a]/80 px-2 py-1.5 backdrop-blur">
      <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
        <InstagramSVG size={20} />
      </a>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
        <WhatsAppSVG size={20} />
      </a>
      <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
        <TelegramSVG size={20} />
      </a>
    </div>
  );
}
