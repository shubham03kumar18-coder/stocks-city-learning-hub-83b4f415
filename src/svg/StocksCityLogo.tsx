export function StocksCityLogo() {
  return (
    <svg width="170" height="40" viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg" aria-label="Tradeverse City">
      <defs>
        <linearGradient id="sc-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#F0D080" />
        </linearGradient>
      </defs>
      <g>
        <rect x="2" y="4" width="32" height="32" rx="6" fill="url(#sc-gold)" />
        <path
          d="M11 14 Q11 11 14 11 L23 11 Q26 11 26 14 Q26 17 23 17 L14 17 Q11 17 11 20 Q11 23 14 23 L23 23 Q26 23 26 26 Q26 29 23 29 L14 29 Q11 29 11 26"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <text
        x="42"
        y="26"
        fill="#C9A84C"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="15"
        letterSpacing="2"
      >
        TRADEVERSE CITY
      </text>
    </svg>
  );
}
