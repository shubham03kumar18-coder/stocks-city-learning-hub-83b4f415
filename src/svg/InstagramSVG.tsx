interface Props {
  size?: number;
}
export function InstagramSVG({ size = 24 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Instagram">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FCB045" />
          <stop offset="50%" stopColor="#FD1D1D" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad)" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
    </svg>
  );
}
