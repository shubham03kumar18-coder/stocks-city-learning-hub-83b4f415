export interface Course {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  overview: string;
  modules: string[];
  whoFor: string[];
}

export const COURSES: Course[] = [
  {
    slug: "stock-market-basics",
    number: "01",
    title: "Stock Market Basics",
    tagline: "Your first step into the world of trading & investing.",
    level: "Beginner",
    duration: "Foundation",
    overview:
      "Understand how the stock market works, key participants, instruments, exchanges, and how to place your first trade with confidence.",
    modules: [
      "What is the stock market & how it works",
      "Demat & trading accounts explained",
      "Equity, derivatives, indices overview",
      "Order types: market, limit, SL, SL-M",
      "Brokerage, taxes & charges",
    ],
    whoFor: ["Absolute beginners", "Investors moving from FD/MF to stocks", "Students starting their finance journey"],
  },
  {
    slug: "candlestick-analysis",
    number: "02",
    title: "Candlestick Analysis",
    tagline: "Read the language of the market — one candle at a time.",
    level: "Beginner",
    duration: "Core Module",
    overview:
      "Master single, double and triple candlestick patterns and learn how to combine them with location for high-probability setups.",
    modules: [
      "Anatomy of a candle (OHLC)",
      "Single candle patterns: Marubozu, Doji, Hammer",
      "Double candle patterns: Engulfing, Harami, Tweezers",
      "Triple candle patterns: Morning/Evening Star, Three Soldiers",
      "Candles + support/resistance",
    ],
    whoFor: ["New traders", "Investors who want to time entries better", "Anyone serious about technical analysis"],
  },
  {
    slug: "support-resistance",
    number: "03",
    title: "Support & Resistance",
    tagline: "The backbone of every professional trader's chart.",
    level: "Beginner",
    duration: "Core Module",
    overview:
      "Learn how to draw, validate, and trade key support & resistance zones across timeframes — the foundation for every strategy.",
    modules: [
      "Horizontal S/R zones",
      "Dynamic S/R with moving averages",
      "Role reversal: support becoming resistance",
      "Multi-timeframe S/R confluence",
      "Trading breakouts & rejections",
    ],
    whoFor: ["Beginner traders", "Swing & positional traders", "Anyone using price action"],
  },
  {
    slug: "trend-analysis",
    number: "04",
    title: "Trend Analysis",
    tagline: "The trend is your friend — only if you can read it.",
    level: "Intermediate",
    duration: "Core Module",
    overview:
      "Identify the prevailing trend across multiple timeframes and learn when a trend is strong, weak, or about to reverse.",
    modules: [
      "Higher highs / higher lows framework",
      "Trendlines & channel construction",
      "Moving averages for trend",
      "Multi-timeframe trend alignment",
      "Spotting trend exhaustion",
    ],
    whoFor: ["Intermediate traders", "Swing traders", "Position traders"],
  },
  {
    slug: "technical-analysis",
    number: "05",
    title: "Technical Analysis",
    tagline: "A complete toolkit to analyze any chart, any market.",
    level: "Intermediate",
    duration: "Advanced Module",
    overview:
      "A complete framework combining price, indicators, volume, and structure — built for traders who want a robust technical edge.",
    modules: [
      "Indicators: RSI, MACD, ADX, Bollinger Bands",
      "Volume analysis",
      "Market structure (BOS, CHOCH)",
      "Confluence-based trade setups",
      "Building your own trading checklist",
    ],
    whoFor: ["Serious traders", "Intraday & swing traders", "Anyone building a trading system"],
  },
  {
    slug: "chart-patterns",
    number: "06",
    title: "Chart Patterns",
    tagline: "Repeating patterns. Repeatable profits.",
    level: "Intermediate",
    duration: "Core Module",
    overview:
      "Learn high-probability chart patterns — continuation and reversal — with proper entry, stop-loss and target frameworks.",
    modules: [
      "Continuation: flags, pennants, triangles",
      "Reversal: H&S, double top/bottom",
      "Cup & handle, rounding bottoms",
      "Pattern entries, SL and targets",
      "Pattern failures & traps",
    ],
    whoFor: ["Swing traders", "Positional traders", "Pattern-based discretionary traders"],
  },
  {
    slug: "price-action-trading",
    number: "07",
    title: "Price Action Trading",
    tagline: "Trade naked charts — pure structure, no clutter.",
    level: "Advanced",
    duration: "Advanced Module",
    overview:
      "Pure price-action trading without indicator noise — read structure, liquidity and momentum directly from candles.",
    modules: [
      "Market structure mapping",
      "Order blocks & supply/demand zones",
      "Liquidity sweeps and traps",
      "Break of structure (BOS) setups",
      "Building a price-action trading plan",
    ],
    whoFor: ["Advanced learners", "Intraday traders", "Smart-money concept enthusiasts"],
  },
  {
    slug: "risk-management",
    number: "08",
    title: "Risk Management",
    tagline: "The only edge that separates pros from amateurs.",
    level: "Intermediate",
    duration: "Core Module",
    overview:
      "Learn how to protect your capital, size positions correctly, and stay in the game long enough to win.",
    modules: [
      "Risk per trade rule (1–2%)",
      "Position sizing formulas",
      "Stop-loss placement frameworks",
      "Risk:Reward and expectancy",
      "Capital allocation across strategies",
    ],
    whoFor: ["Every trader", "Intraday & swing traders", "Options traders"],
  },
  {
    slug: "trading-psychology",
    number: "09",
    title: "Trading Psychology",
    tagline: "Master your mind. Master the markets.",
    level: "Intermediate",
    duration: "Core Module",
    overview:
      "Conquer fear, greed, FOMO, revenge trading and over-trading with proven mental frameworks used by professionals.",
    modules: [
      "The four trader emotions",
      "Pre-trade & post-trade routines",
      "Trade journaling for self-awareness",
      "Handling drawdowns",
      "Building unshakeable discipline",
    ],
    whoFor: ["All traders", "Anyone struggling with consistency", "Returning traders after losses"],
  },
  {
    slug: "swing-trading",
    number: "10",
    title: "Swing Trading",
    tagline: "Trade the moves that last days to weeks.",
    level: "Intermediate",
    duration: "Strategy Module",
    overview:
      "A complete swing trading system — identify, enter, manage and exit multi-day moves while holding a job or business.",
    modules: [
      "Swing setup scanning",
      "Multi-timeframe entries",
      "Trailing stops & exits",
      "Sector rotation for swings",
      "Building a weekly trading routine",
    ],
    whoFor: ["Working professionals", "Part-time traders", "Investors wanting active returns"],
  },
  {
    slug: "intraday-trading",
    number: "11",
    title: "Intraday Trading",
    tagline: "Capture the day's biggest moves with precision.",
    level: "Advanced",
    duration: "Strategy Module",
    overview:
      "A complete intraday playbook — opening range, momentum, breakout, and reversal strategies with tight risk control.",
    modules: [
      "Opening range breakout (ORB)",
      "VWAP-based strategies",
      "Momentum & news trading",
      "Intraday risk & exits",
      "Daily routine of an intraday trader",
    ],
    whoFor: ["Active traders", "Full-time aspiring traders", "Scalpers & momentum traders"],
  },
];
