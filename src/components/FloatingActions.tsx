import { WhatsAppSVG } from "../svg/WhatsAppSVG";
import { TelegramSVG } from "../svg/TelegramSVG";
import { WHATSAPP_LINK, TELEGRAM_LINK } from "../constants/links";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] ring-2 ring-[#25D366]/40 transition hover:scale-110"
      >
        <WhatsAppSVG size={40} />
      </a>
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join Telegram"
        className="grid h-14 w-14 place-items-center rounded-full bg-white shadow-[0_8px_24px_rgba(34,158,217,0.45)] ring-2 ring-[#229ED9]/40 transition hover:scale-110"
      >
        <TelegramSVG size={40} />
      </a>
    </div>
  );
}
