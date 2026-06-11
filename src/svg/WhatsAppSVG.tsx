import asset from "../assets/whatsapp.png.asset.json";
interface Props { size?: number; className?: string }
export function WhatsAppSVG({ size = 24, className }: Props) {
  return <img src={asset.url} alt="WhatsApp" width={size} height={size} className={className} loading="lazy" />;
}
