export interface LearningTopic {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  intro: string;
  highlights: string[];
  outcomes: string[];
}

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    slug: "structured-learning",
    icon: "📚",
    title: "Structured Learning",
    tagline: "Step-by-step modules from basics to advanced.",
    intro:
      "Our structured learning path is designed for serious learners who want a clear roadmap — from understanding what a stock is, all the way to building professional-grade trading strategies.",
    highlights: [
      "Beginner → Intermediate → Advanced progression",
      "Module-by-module curriculum with prerequisites",
      "Recap quizzes and assignments after each module",
      "Mentor-led doubt-clearing sessions",
    ],
    outcomes: [
      "Build a strong, gap-free foundation",
      "Move from theory to live-market application",
      "Know exactly what to learn next at every stage",
    ],
  },
  {
    slug: "live-sessions",
    icon: "🎥",
    title: "Live Sessions",
    tagline: "Interactive live classes with real market examples.",
    intro:
      "Join live, interactive trading classes where every concept is taught using real charts, current market setups, and Q&A driven by learners.",
    highlights: [
      "Weekly live trading & analysis sessions",
      "Real-time chart breakdowns",
      "Open Q&A with mentors",
      "Recordings available for revision",
    ],
    outcomes: [
      "Learn how pros actually read live charts",
      "Get your specific doubts cleared on the spot",
      "Stay accountable with a fixed weekly rhythm",
    ],
  },
  {
    slug: "market-analysis",
    icon: "📊",
    title: "Market Analysis",
    tagline: "Daily market breakdowns and chart studies.",
    intro:
      "Get daily and weekly market analysis — index views, sector rotation, key stocks, and chart studies so you always know what's moving and why.",
    highlights: [
      "Pre-market and post-market analysis",
      "Index and sectoral trend tracking",
      "Key levels, support, resistance & triggers",
      "Trade ideas with rationale (educational)",
    ],
    outcomes: [
      "Develop a market view of your own",
      "Spot high-probability setups faster",
      "Track institutional behaviour across sectors",
    ],
  },
  {
    slug: "community",
    icon: "💬",
    title: "Community Support",
    tagline: "Active learner community for doubts & discussions.",
    intro:
      "Learning trading alone is hard. Inside the Tradeverse City community, you get a network of 32,000+ learners discussing setups, asking questions, and growing together.",
    highlights: [
      "Active Telegram & WhatsApp communities",
      "Peer discussions on live trades",
      "Mentor responses on key questions",
      "Daily learning prompts & polls",
    ],
    outcomes: [
      "Never feel stuck or isolated",
      "Learn from other learners' mistakes too",
      "Stay motivated with a strong tribe",
    ],
  },
  {
    slug: "resources",
    icon: "📁",
    title: "Learning Resources",
    tagline: "Notes, PDFs, recordings & curated study material.",
    intro:
      "Every concept comes with high-quality, easy-to-revise study material — notes, PDFs, cheat sheets and recorded sessions.",
    highlights: [
      "Topic-wise PDFs and notes",
      "Cheat sheets for patterns & indicators",
      "Recordings of every live session",
      "Curated reading list for deeper study",
    ],
    outcomes: [
      "Revise quickly before live markets",
      "Build your own reference vault",
      "Never lose what you've learned",
    ],
  },
  {
    slug: "chart-examples",
    icon: "📈",
    title: "Real Chart Examples",
    tagline: "Practical lessons using live & historical charts.",
    intro:
      "Theory is taught only as much as needed — the focus is on real chart examples, both historical and live, so you can pattern-match in real markets.",
    highlights: [
      "100+ annotated chart case studies",
      "Live chart walk-throughs in sessions",
      "Before/after entry-exit breakdowns",
      "Multi-timeframe analysis examples",
    ],
    outcomes: [
      "Train your eye to read charts instantly",
      "Recognize repeating setups in any market",
      "Move from 'I know it' to 'I can spot it'",
    ],
  },
  {
    slug: "practical-education",
    icon: "🎯",
    title: "Practical Market Education",
    tagline: "Real-world skill-building, not just theory.",
    intro:
      "Tradeverse City is built around one principle — practical, market-ready education. You learn what works, how to apply it, and how to manage risk like a professional.",
    highlights: [
      "Trading plans and journaling templates",
      "Risk & position-sizing frameworks",
      "Psychology & discipline modules",
      "Strategy back-testing walk-throughs",
    ],
    outcomes: [
      "Trade with a plan, not emotion",
      "Protect capital with proper risk control",
      "Develop habits of a consistent trader",
    ],
  },
];
