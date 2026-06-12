import logoAsset from "../assets/tradeverse-logo.jpg.asset.json";

export function StocksCityLogo({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoAsset.url}
        alt="Tradeverse City"
        width={size}
        height={size}
        className="rounded-full ring-1 ring-[#C9A84C]/40"
        style={{ width: size, height: size, objectFit: "cover" }}
      />
      <span
        className="hidden sm:inline bg-gradient-to-r from-[#C9A84C] to-[#F0D080] bg-clip-text text-transparent font-extrabold tracking-widest text-base"
      >
        TRADEVERSE CITY
      </span>
    </div>
  );
}
