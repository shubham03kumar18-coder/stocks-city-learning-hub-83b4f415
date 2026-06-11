import asset from "../assets/telegram.png.asset.json";
interface Props { size?: number; className?: string }
export function TelegramSVG({ size = 24, className }: Props) {
  return <img src={asset.url} alt="Telegram" width={size} height={size} className={className} loading="lazy" />;
}
