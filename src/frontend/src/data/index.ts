import type {
  AccountTier,
  BlogPost,
  FAQItem,
  Feature,
  FooterLinkGroup,
  NavLink,
  PayoutProof,
  Stat,
  Testimonial,
  TradingRule,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Accounts",
    href: "#",
    children: [
      { label: "Instant Funding", href: "/instant-funding" },
      { label: "Challenge Accounts", href: "/challenge-accounts" },
      { label: "Prime Accounts", href: "/prime-accounts" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Trading Rules", href: "/trading-rules" },
      { label: "Payout Proofs", href: "/payout-proofs" },
    ],
  },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Partner Program", href: "/partner-program" },
    ],
  },
  { label: "Affiliate", href: "/affiliate" },
  { label: "Contact", href: "/contact" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Products",
    links: [
      { label: "Instant Funding", href: "/instant-funding" },
      { label: "Challenge Accounts", href: "/challenge-accounts" },
      { label: "Prime Accounts", href: "/prime-accounts" },
      { label: "Affiliate Program", href: "/affiliate" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Trading Rules", href: "/trading-rules" },
      { label: "Payout Proofs", href: "/payout-proofs" },
      { label: "Trading Calculator", href: "/calculator" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Partner Program", href: "/partner-program" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Risk Disclaimer", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

export const stats: Stat[] = [
  { value: "15,000+", label: "Funded Traders" },
  { value: "$50M+", label: "Total Payouts" },
  { value: "95%", label: "Approval Rate" },
  { value: "48hrs", label: "Avg Payout Time" },
];

export const features: Feature[] = [
  {
    icon: "⚡",
    title: "Instant Funded Accounts",
    description:
      "Skip the challenge and get funded immediately. Start trading with real capital today.",
  },
  {
    icon: "💰",
    title: "Up To 90% Profit Split",
    description:
      "Keep up to 90% of all your trading profits. Industry-leading payout structure.",
  },
  {
    icon: "📅",
    title: "Weekly Withdrawals",
    description:
      "Request payouts every week. Fast processing within 24-48 business hours.",
  },
  {
    icon: "📉",
    title: "Low Drawdown Rules",
    description:
      "Trader-friendly 5% daily and 10% overall max drawdown limits. Trade with confidence.",
  },
  {
    icon: "🚀",
    title: "Real Trading Environment",
    description:
      "Trade on live MT5 markets with real spreads, real liquidity, and real conditions.",
  },
  {
    icon: "🌍",
    title: "Trusted Globally",
    description:
      "Serving traders in 150+ countries since 2021. Thousands of successful funded traders.",
  },
  {
    icon: "🤝",
    title: "Affiliate Commission 25%",
    description:
      "Earn up to 25% commission on every referral. Weekly affiliate payouts guaranteed.",
  },
  {
    icon: "🔒",
    title: "Secure & Transparent",
    description:
      "Transparent rules, no hidden restrictions. Full audit trail and payout proof published.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    country: "India",
    flag: "🇮🇳",
    rating: 5,
    comment:
      "FX Expert Funded is hands down the best prop firm I have ever traded with. Got my $100K account funded in minutes. Weekly payouts hit like clockwork. Highly recommend!",
    profit: "$8,420",
    accountSize: "$100,000",
  },
  {
    id: "2",
    name: "Mohammed Al-Rashid",
    country: "UAE",
    flag: "🇦🇪",
    rating: 5,
    comment:
      "The instant funding option is a game changer. No challenges, no waiting. I withdrew $12,000 in my first month. The 90% profit split is incredible.",
    profit: "$12,000",
    accountSize: "$200,000",
  },
  {
    id: "3",
    name: "Elena Kovacs",
    country: "Romania",
    flag: "🇷🇴",
    rating: 5,
    comment:
      "Passed the Gold Challenge in 3 weeks. Support team was helpful throughout. Payout was processed within 24 hours. This firm actually cares about their traders.",
    profit: "$5,800",
    accountSize: "$50,000",
  },
  {
    id: "4",
    name: "James Okonkwo",
    country: "Nigeria",
    flag: "🇳🇬",
    rating: 5,
    comment:
      "Been with FX Expert Funded for 2 years. Over $40K in total payouts. Transparent rules, no games, no manipulation. The most honest prop firm in the industry.",
    profit: "$40,000+",
    accountSize: "$500,000",
  },
  {
    id: "5",
    name: "Sofia Martinez",
    country: "Spain",
    flag: "🇪🇸",
    rating: 5,
    comment:
      "The affiliate program is amazing. I earn 25% on every trader I refer and get paid weekly. Already making passive income while trading my own funded accounts.",
    profit: "$3,200/month",
    accountSize: "Affiliate",
  },
  {
    id: "6",
    name: "Chen Wei",
    country: "Singapore",
    flag: "🇸🇬",
    rating: 5,
    comment:
      "Trading gold and forex with FX Expert Funded is seamless. MT5 execution is fast, spreads are tight, and the risk team is professional and fair.",
    profit: "$9,750",
    accountSize: "$100,000",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "best-forex-trading-strategies-2026",
    title: "Best Forex Trading Strategies for 2026",
    excerpt:
      "Discover the top-performing forex trading strategies that professional traders use to pass prop firm challenges and generate consistent profits in 2026.",
    category: "Strategy",
    author: "FX Expert Team",
    date: "May 10, 2026",
    readTime: "8 min read",
  },
  {
    id: "2",
    slug: "how-to-pass-prop-firm-challenge",
    title: "How to Pass a Prop Firm Challenge in 30 Days",
    excerpt:
      "A step-by-step guide to passing any prop firm evaluation challenge. Risk management rules, entry techniques, and psychological tips from funded traders.",
    category: "Education",
    author: "Alex Rivera",
    date: "May 8, 2026",
    readTime: "12 min read",
  },
  {
    id: "3",
    slug: "gold-trading-risk-management",
    title: "Gold Trading Risk Management: The Complete Guide",
    excerpt:
      "Master XAUUSD trading with professional risk management techniques. Learn position sizing, stop loss placement, and correlation analysis for gold.",
    category: "Risk Management",
    author: "Sarah Chen",
    date: "May 5, 2026",
    readTime: "10 min read",
  },
  {
    id: "4",
    slug: "best-prop-firms-2026",
    title: "Best Prop Firms in 2026: Ultimate Comparison",
    excerpt:
      "We compare the top 10 prop trading firms of 2026 by payout speed, profit split, rules fairness, and trader support. See where FX Expert Funded ranks.",
    category: "Reviews",
    author: "FX Expert Team",
    date: "May 2, 2026",
    readTime: "15 min read",
  },
  {
    id: "5",
    slug: "instant-funded-accounts-explained",
    title: "How Instant Funded Accounts Work: Complete Guide",
    excerpt:
      "Everything you need to know about instant funding accounts — how they work, the rules, and whether they are worth it compared to standard challenges.",
    category: "Education",
    author: "David Park",
    date: "Apr 28, 2026",
    readTime: "7 min read",
  },
  {
    id: "6",
    slug: "weekly-payout-prop-firms",
    title: "Weekly Payout Prop Firms: Which Ones Actually Pay?",
    excerpt:
      "Not all prop firms deliver on their weekly payout promises. We investigated 15 firms and ranked them by actual payout reliability and processing speed.",
    category: "Reviews",
    author: "FX Expert Team",
    date: "Apr 25, 2026",
    readTime: "9 min read",
  },
  {
    id: "7",
    slug: "trading-psychology-tips",
    title: "Top 10 Trading Psychology Tips for Funded Traders",
    excerpt:
      "Master your mindset and emotions while trading a prop firm account. Expert tips on discipline, loss recovery, consistency and avoiding revenge trading.",
    category: "Psychology",
    author: "Dr. Maria Santos",
    date: "Apr 20, 2026",
    readTime: "11 min read",
  },
  {
    id: "8",
    slug: "forex-trading-for-beginners",
    title: "Forex Trading for Beginners: From Zero to Funded",
    excerpt:
      "Complete beginner guide to forex trading. Learn the basics, build a strategy, practice on demo, and land your first funded account with FX Expert Funded.",
    category: "Education",
    author: "FX Expert Team",
    date: "Apr 15, 2026",
    readTime: "18 min read",
  },
];

export const payoutProofs: PayoutProof[] = [
  {
    id: "1",
    trader: "R. Sharma",
    country: "India",
    flag: "🇮🇳",
    amount: "$8,420",
    date: "May 12, 2026",
    platform: "USDT",
    accountSize: "$100K",
  },
  {
    id: "2",
    trader: "M. Al-Rashid",
    country: "UAE",
    flag: "🇦🇪",
    amount: "$12,000",
    date: "May 10, 2026",
    platform: "Wire",
    accountSize: "$200K",
  },
  {
    id: "3",
    trader: "E. Kovacs",
    country: "Romania",
    flag: "🇷🇴",
    amount: "$5,800",
    date: "May 8, 2026",
    platform: "Crypto",
    accountSize: "$50K",
  },
  {
    id: "4",
    trader: "J. Okonkwo",
    country: "Nigeria",
    flag: "🇳🇬",
    amount: "$15,200",
    date: "May 7, 2026",
    platform: "USDT",
    accountSize: "$200K",
  },
  {
    id: "5",
    trader: "S. Martinez",
    country: "Spain",
    flag: "🇪🇸",
    amount: "$4,100",
    date: "May 5, 2026",
    platform: "Wire",
    accountSize: "$50K",
  },
  {
    id: "6",
    trader: "C. Wei",
    country: "Singapore",
    flag: "🇸🇬",
    amount: "$9,750",
    date: "May 3, 2026",
    platform: "Crypto",
    accountSize: "$100K",
  },
  {
    id: "7",
    trader: "A. Johnson",
    country: "USA",
    flag: "🇺🇸",
    amount: "$22,500",
    date: "Apr 30, 2026",
    platform: "Wire",
    accountSize: "$500K",
  },
  {
    id: "8",
    trader: "F. Müller",
    country: "Germany",
    flag: "🇩🇪",
    amount: "$7,350",
    date: "Apr 28, 2026",
    platform: "USDT",
    accountSize: "$100K",
  },
  {
    id: "9",
    trader: "T. Nakamura",
    country: "Japan",
    flag: "🇯🇵",
    amount: "$18,900",
    date: "Apr 26, 2026",
    platform: "Wire",
    accountSize: "$200K",
  },
  {
    id: "10",
    trader: "L. Dubois",
    country: "France",
    flag: "🇫🇷",
    amount: "$6,650",
    date: "Apr 24, 2026",
    platform: "Crypto",
    accountSize: "$100K",
  },
  {
    id: "11",
    trader: "K. Patel",
    country: "UK",
    flag: "🇬🇧",
    amount: "$11,200",
    date: "Apr 22, 2026",
    platform: "Wire",
    accountSize: "$200K",
  },
  {
    id: "12",
    trader: "O. Santos",
    country: "Brazil",
    flag: "🇧🇷",
    amount: "$3,900",
    date: "Apr 20, 2026",
    platform: "USDT",
    accountSize: "$50K",
  },
];

export const instantFundingTiers: AccountTier[] = [
  {
    id: "instant-10k",
    name: "Starter",
    price: "$99",
    accountSize: "$10,000",
    profitSplit: "75%",
    maxDrawdown: "10%",
    dailyDrawdown: "5%",
    profitTarget: "None",
    leverage: "1:100",
    instruments: "Forex, Gold",
    payoutFrequency: "Weekly",
    features: [
      "No challenge required",
      "Instant account activation",
      "MT5 platform",
      "Weekly payouts",
      "Email support",
    ],
  },
  {
    id: "instant-25k",
    name: "Professional",
    price: "$199",
    accountSize: "$25,000",
    profitSplit: "80%",
    maxDrawdown: "10%",
    dailyDrawdown: "5%",
    profitTarget: "None",
    leverage: "1:100",
    instruments: "Forex, Gold, Indices",
    payoutFrequency: "Weekly",
    features: [
      "No challenge required",
      "Instant account activation",
      "MT5 platform",
      "Weekly payouts",
      "24/7 live support",
      "Scaling available",
    ],
  },
  {
    id: "instant-50k",
    name: "Elite",
    price: "$349",
    originalPrice: "$449",
    accountSize: "$50,000",
    profitSplit: "85%",
    maxDrawdown: "10%",
    dailyDrawdown: "5%",
    profitTarget: "None",
    leverage: "1:100",
    instruments: "Forex, Gold, Indices, Crypto",
    payoutFrequency: "Weekly",
    features: [
      "No challenge required",
      "Instant account activation",
      "MT5 platform",
      "Weekly payouts",
      "Priority support",
      "Scaling to $1M",
      "Dedicated account manager",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "instant-100k",
    name: "Institutional",
    price: "$599",
    accountSize: "$100,000",
    profitSplit: "90%",
    maxDrawdown: "10%",
    dailyDrawdown: "5%",
    profitTarget: "None",
    leverage: "1:100",
    instruments: "All instruments",
    payoutFrequency: "Weekly",
    features: [
      "No challenge required",
      "Instant account activation",
      "MT5 platform",
      "Weekly payouts",
      "VIP support",
      "Scaling to $1M",
      "Dedicated account manager",
      "Custom leverage",
    ],
  },
];

export const challengeTiers: AccountTier[] = [
  {
    id: "challenge-10k",
    name: "Bronze",
    price: "$59",
    accountSize: "$10,000",
    profitSplit: "80%",
    maxDrawdown: "10%",
    dailyDrawdown: "5%",
    profitTarget: "10%",
    leverage: "1:100",
    instruments: "Forex, Gold",
    payoutFrequency: "Weekly",
    features: [
      "2-phase evaluation",
      "MT5 platform",
      "Weekly payouts after funding",
      "Email support",
    ],
  },
  {
    id: "challenge-25k",
    name: "Silver",
    price: "$149",
    accountSize: "$25,000",
    profitSplit: "80%",
    maxDrawdown: "10%",
    dailyDrawdown: "5%",
    profitTarget: "10%",
    leverage: "1:100",
    instruments: "Forex, Gold, Indices",
    payoutFrequency: "Weekly",
    features: [
      "2-phase evaluation",
      "MT5 platform",
      "Weekly payouts",
      "24/7 support",
      "Reset available",
    ],
  },
  {
    id: "challenge-50k",
    name: "Gold",
    price: "$299",
    originalPrice: "$399",
    accountSize: "$50,000",
    profitSplit: "85%",
    maxDrawdown: "10%",
    dailyDrawdown: "5%",
    profitTarget: "10%",
    leverage: "1:100",
    instruments: "Forex, Gold, Indices, Crypto",
    payoutFrequency: "Weekly",
    features: [
      "2-phase evaluation",
      "MT5 platform",
      "Weekly payouts",
      "Priority support",
      "Free reset",
      "Scaling plan",
    ],
    highlighted: true,
    badge: "Best Value",
  },
  {
    id: "challenge-100k",
    name: "Platinum",
    price: "$499",
    accountSize: "$100,000",
    profitSplit: "90%",
    maxDrawdown: "10%",
    dailyDrawdown: "5%",
    profitTarget: "10%",
    leverage: "1:100",
    instruments: "All instruments",
    payoutFrequency: "Weekly",
    features: [
      "2-phase evaluation",
      "MT5 platform",
      "Weekly payouts",
      "VIP support",
      "Multiple free resets",
      "Scaling to $1M",
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "What is a prop firm and how does FX Expert Funded work?",
    answer:
      "A prop firm (proprietary trading firm) provides traders with capital to trade. At FX Expert Funded, you can either pass our evaluation challenge or get instant funded access. You trade with our capital, keep up to 90% of profits, and we handle all risk management.",
    category: "General",
  },
  {
    id: "2",
    question:
      "What is the difference between Instant Funding and Challenge Accounts?",
    answer:
      "Instant Funding accounts are activated immediately after purchase — no evaluation required. Challenge accounts require you to pass a 2-phase profit target evaluation first, but they are cheaper. Both offer up to 90% profit split.",
    category: "Accounts",
  },
  {
    id: "3",
    question: "How quickly are payouts processed?",
    answer:
      "Payouts are typically processed within 24-48 business hours after submission. We support USDT, bank wire, and cryptocurrency payments. Weekly payouts are available on all account types.",
    category: "Payouts",
  },
  {
    id: "4",
    question: "What is the maximum drawdown allowed?",
    answer:
      "We allow a 5% daily drawdown and 10% maximum overall drawdown. These limits are trader-friendly and industry-standard. Accounts are calculated based on initial balance, not rolling high watermark.",
    category: "Rules",
  },
  {
    id: "5",
    question: "What trading instruments can I trade?",
    answer:
      "You can trade Forex (all major and minor pairs), Gold (XAUUSD), Silver (XAGUSD), Stock indices (US30, NAS100, SPX500), Crude Oil, and major Cryptocurrencies on Pro and Elite plans.",
    category: "Trading",
  },
  {
    id: "6",
    question: "Can I use Expert Advisors (EAs) and automated trading?",
    answer:
      "Yes, EAs and automated trading are fully allowed. All trading strategies are permitted including scalping, news trading, swing trading, and hedging as long as they comply with our drawdown rules.",
    category: "Trading",
  },
  {
    id: "7",
    question: "What trading platform do you use?",
    answer:
      "We use MetaTrader 5 (MT5) for all accounts. MT5 offers superior charting, faster execution, and supports all our instruments including crypto, indices, and commodities.",
    category: "Platform",
  },
  {
    id: "8",
    question: "Is there a minimum trading day requirement?",
    answer:
      "For Challenge accounts, there is a minimum of 5 trading days per phase. Instant Funding accounts have no minimum day requirement — trade at your own pace.",
    category: "Rules",
  },
  {
    id: "9",
    question: "How does the affiliate program work?",
    answer:
      "You earn up to 25% commission on every purchase made through your referral link. Commissions are paid weekly to your preferred payment method. There is no cap on earnings.",
    category: "Affiliate",
  },
  {
    id: "10",
    question: "Can I scale my account?",
    answer:
      "Yes! Our scaling plan allows traders to grow their accounts up to $1,000,000. After reaching 10% profit in 3 consecutive months, your account size can be increased by 25%.",
    category: "Accounts",
  },
  {
    id: "11",
    question: "What countries are eligible?",
    answer:
      "We accept traders from 150+ countries worldwide. We are currently not available in the United States, North Korea, Iran, and a few other restricted jurisdictions due to regulatory requirements.",
    category: "General",
  },
  {
    id: "12",
    question: "Is there a refund policy?",
    answer:
      "We offer a 14-day refund policy for challenge accounts that have not been accessed. Instant Funding accounts are non-refundable once activated. Please review our full refund policy before purchasing.",
    category: "General",
  },
  {
    id: "13",
    question: "How do I contact support?",
    answer:
      "Our support team is available 24/7 via live chat on our website, WhatsApp, Telegram, and email at support@fxexpertfunded.com. Response times are typically under 2 hours.",
    category: "Support",
  },
  {
    id: "14",
    question: "What profit split do I get?",
    answer:
      "Profit splits range from 75% to 90% depending on your account tier. Elite and Institutional accounts receive 90% profit split. All profits above the threshold go directly to you.",
    category: "Payouts",
  },
  {
    id: "15",
    question: "Are there any monthly fees?",
    answer:
      "No monthly fees, ever. You pay a one-time fee to purchase your account or challenge. Once funded, there are no recurring charges. Your profit split is the only ongoing cost.",
    category: "General",
  },
];

export const tradingRules: TradingRule[] = [
  {
    id: "1",
    title: "Maximum Daily Drawdown: 5%",
    description:
      "Your account equity cannot drop more than 5% from the starting balance of the trading day. Breaching this limit will close the account.",
    type: "restricted",
  },
  {
    id: "2",
    title: "Maximum Overall Drawdown: 10%",
    description:
      "Your account cannot lose more than 10% from the initial balance. This is measured from the original starting balance, not a floating high watermark.",
    type: "restricted",
  },
  {
    id: "3",
    title: "No Minimum Trading Days (Instant)",
    description:
      "Instant Funded accounts have no minimum trading day requirement. Trade whenever market conditions suit your strategy.",
    type: "allowed",
  },
  {
    id: "4",
    title: "EAs & Automated Trading Allowed",
    description:
      "All Expert Advisors, automated trading systems, and algorithmic strategies are fully permitted on all account types.",
    type: "allowed",
  },
  {
    id: "5",
    title: "News Trading Allowed",
    description:
      "Trading around major news events is permitted. You may hold positions through high-impact news releases without restrictions.",
    type: "allowed",
  },
  {
    id: "6",
    title: "Hedging Permitted",
    description:
      "Hedging within the same account is allowed. You can hold simultaneous long and short positions on correlated instruments.",
    type: "allowed",
  },
  {
    id: "7",
    title: "Weekend Holding Allowed",
    description:
      "Positions can be held over weekends. Overnight and weekend swap charges apply as per standard market conditions.",
    type: "allowed",
  },
  {
    id: "8",
    title: "No Martingale Grid Strategies",
    description:
      "Martingale and grid trading strategies that increase risk exponentially are not permitted and may result in account termination.",
    type: "restricted",
  },
  {
    id: "9",
    title: "No Account Sharing or Copying Farms",
    description:
      "Copy trading to/from external services that violate our terms, or operating account copying farms with multiple funded accounts, is prohibited.",
    type: "restricted",
  },
  {
    id: "10",
    title: "Max Leverage: 1:100",
    description:
      "Maximum leverage available is 1:100 on Forex and Gold. Indices are capped at 1:50. Crypto maximum leverage is 1:10.",
    type: "info",
  },
];
