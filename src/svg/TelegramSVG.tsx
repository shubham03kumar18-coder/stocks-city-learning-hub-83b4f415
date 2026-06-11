interface Props {
  size?: number;
}
export function TelegramSVG({ size = 24 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Telegram">
      <circle cx="12" cy="12" r="11" fill="#229ED9" />
      <path
        d="M17.5 7.2 15.6 16.4c-.1.6-.5.8-1 .5l-2.8-2-1.3 1.3c-.2.2-.3.3-.6.3l.2-2.9 5.2-4.7c.2-.2 0-.3-.3-.1L8.5 12.8l-2.8-.9c-.6-.2-.6-.6.1-.9l11-4.2c.5-.2 1 .1.8 1z"
        fill="#fff"
      />
    </svg>
  );
}
