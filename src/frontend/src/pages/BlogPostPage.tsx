import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Share2,
  Tag,
  User,
} from "lucide-react";
import { motion } from "motion/react";

const blogData = [
  {
    id: "1",
    slug: "best-forex-trading-strategies-2026",
    title: "Best Forex Trading Strategies for 2026",
    excerpt:
      "Discover the top-performing forex strategies that professional funded traders use to achieve consistent results and pass prop firm challenges in 2026.",
    category: "Forex",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "May 10, 2026",
    readTime: "8 min read",
    wordCount: "~1,800 words",
    content: [
      {
        heading: "Why Strategy Selection Matters in 2026",
        body: "The forex market in 2026 is more competitive than ever. With algorithmic trading firms dominating short-term moves and liquidity conditions shifting rapidly, retail traders need an edge that goes beyond basic technical analysis. The most successful funded traders consistently outperform by combining high-probability setups with disciplined risk management frameworks. Understanding which strategies work in the current market environment is your first competitive advantage.",
      },
      {
        heading: "1. Supply and Demand Zone Trading",
        body: "Supply and demand zone trading remains one of the most powerful strategies available. By identifying institutional order blocks on higher timeframes (H4, Daily, Weekly), traders can enter positions at favorable risk-to-reward ratios of 1:3 or better. The key is patience — only trade zones that have been tested and validated. Fresh, untested zones offer the best entries. On the H4 chart, look for strong impulsive candles leaving clear zones, then drop to M15 for confirmation entries. This approach consistently delivers 65–70% win rates for disciplined traders.",
      },
      {
        heading: "2. Trend Following with Market Structure",
        body: "Higher highs and higher lows define an uptrend; lower highs and lower lows define a downtrend. Trend-following traders who wait for confirmed market structure breaks before entering with the trend outperform counter-trend traders significantly. Use the Weekly chart to determine bias, Daily chart to identify structure, and H1 for entry. Combine with the 200 EMA for confluence. Avoid trading against weekly bias — this single rule can improve your win rate by 15-20%.",
      },
      {
        heading: "3. News-Driven Momentum Strategies",
        body: "High-impact news events (NFP, CPI, FOMC, ECB) create explosive momentum moves that skilled traders can capitalize on. FX Expert Funded allows news trading on all account types — a key advantage over competitors. The pre-news consolidation breakout strategy involves placing orders above and below the consolidation range 2 minutes before the release. Target 1:2 R:R with tight stops. Only trade major news on liquid pairs like EURUSD, GBPUSD, and USDJPY for optimal results.",
      },
      {
        heading: "Risk Management: The Foundation of Every Strategy",
        body: "No strategy works without strict risk management. Professional funded traders risk no more than 0.5-1% per trade on Challenge accounts and 1-2% on Instant Funded accounts. Use a trading journal to track win rate, average R:R, and maximum drawdown. Review your metrics weekly. If your win rate drops below 40% over 20 trades, pause and analyze — the market regime may have changed. Always respect the 5% daily drawdown rule: once you hit 3% intraday loss, stop trading for the day.",
      },
    ],
  },
  {
    id: "2",
    slug: "how-to-pass-prop-firm-challenge",
    title: "How to Pass a Prop Firm Challenge in 30 Days",
    excerpt:
      "A step-by-step blueprint for passing any prop firm evaluation challenge. Risk rules, entry discipline, and psychological edge from real funded traders.",
    category: "Prop Firm",
    author: "Alex Rivera",
    authorInitials: "AR",
    date: "May 8, 2026",
    readTime: "6 min read",
    wordCount: "~1,400 words",
    content: [
      {
        heading: "Understanding the Challenge Framework",
        body: "A prop firm challenge is an evaluation designed to verify that you can trade profitably while managing risk. At FX Expert Funded, the 2-phase challenge requires hitting a 10% profit target in Phase 1 and 5% in Phase 2, while respecting 5% daily drawdown and 10% max drawdown limits. The key insight most traders miss: the challenge is not about making money fast — it's about demonstrating consistent, disciplined trading behavior.",
      },
      {
        heading: "Week 1-2: Build Momentum Safely",
        body: "Target 1-2% per week in the first two weeks. This feels slow but it's strategic. If you start with a $50,000 account, aim for $500-$1,000 per week. Risk 0.5% per trade maximum during Phase 1. Trade only your highest-conviction setups. If you achieve 3-4% in the first two weeks with clean drawdown numbers, you're perfectly positioned for Phase 2. More than 40% of challenge failures happen in Week 1 due to aggressive risk-taking.",
      },
      {
        heading: "The 3 Rules That Guarantee Failure (Avoid These)",
        body: "First: revenge trading after a loss. If you take a loss, do not immediately re-enter trying to recover. Step away for at least 30 minutes. Second: trading the wrong session for your strategy — ensure your strategy aligns with the London or New York session for peak liquidity. Third: overtrading — the best funded traders take 1-3 trades per day maximum. More trades equal more exposure to random market noise and drawdown risk.",
      },
      {
        heading: "Psychology of the Final Days",
        body: "The most challenging psychological phase of any challenge is the final 5 days when you're close to the profit target. Traders often tighten up and start micro-managing positions, or conversely, go aggressive trying to hit the target fast. The solution: increase position size by only 10-15% maximum when within 2% of target. Never double your risk to 'get it done.' More challenges are failed in the final stretch than at any other point.",
      },
      {
        heading: "Phase 2 and the Funded Account Transition",
        body: "Phase 2 requires a 5% profit target with the same drawdown rules. Most traders who pass Phase 1 pass Phase 2 easily because the psychological pressure is lower. After passing, your live funded account has no profit target — you simply manage risk and request withdrawals. Request your first withdrawal as soon as you're eligible (typically after 14 days). Receiving that first payout reinforces the positive feedback loop and builds long-term trading confidence.",
      },
    ],
  },
  {
    id: "3",
    slug: "gold-trading-risk-management",
    title: "Gold Trading Risk Management: Complete Guide",
    excerpt:
      "Master XAUUSD trading with professional risk techniques. Position sizing, stop-loss placement, and correlation analysis for gold prop trading.",
    category: "Gold Trading",
    author: "Sarah Chen",
    authorInitials: "SC",
    date: "May 5, 2026",
    readTime: "5 min read",
    wordCount: "~1,200 words",
    content: [
      {
        heading: "Why Gold Demands Special Risk Rules",
        body: "Gold (XAUUSD) is one of the most volatile instruments available to prop firm traders. A single 1% move in gold on a $50,000 account can represent $500 in profit or loss depending on your position size. Unlike forex major pairs, gold can gap significantly on geopolitical events, central bank announcements, and risk-off sentiment shifts. Understanding these characteristics is essential before sizing any gold position on a funded account.",
      },
      {
        heading: "Position Sizing for XAUUSD",
        body: "A practical formula for gold position sizing on prop accounts: Risk Amount = Account Balance x Risk% (max 1%). For a $50K account risking 1%, your max risk is $500. If your stop loss is 20 pips on gold, and each pip on a 0.1 lot is $1.00, you need a maximum of 2.5 lots. Most professional funded traders use 0.01-0.05 lot per $1,000 account balance as a default. This ensures you never exceed 2% drawdown on any single gold trade, regardless of stop distance.",
      },
      {
        heading: "Stop Loss Placement on Gold Charts",
        body: "The most common mistake gold traders make is placing stops too tight — gold has wide spreads (typically 25-40 pips during volatile sessions) and requires breathing room. Place stops behind the nearest significant swing high or low on the 30M or H1 chart. Minimum recommended stop distance on gold: 30 pips from entry. For news events, widen to 50+ pips. Using ATR (14) and multiplying by 1.5 gives you a dynamic stop distance that adjusts to current market volatility automatically.",
      },
      {
        heading: "Correlation with USD and Safe Haven Flows",
        body: "Gold moves inversely to the US Dollar (DXY) approximately 70% of the time. Before entering any gold trade, check the DXY direction on the H4 chart. If DXY is in a strong uptrend on H4 and you're considering a gold long position, the odds are against you. Also monitor the 10-year US Treasury yield — rising yields typically pressure gold lower. These macro factors create the most reliable gold trading setups when they align with your technical analysis.",
      },
      {
        heading: "Session Timing for Gold Trades",
        body: "The optimal gold trading windows are the London open (8:00-10:00 AM UTC) and the overlap with New York (1:00-5:00 PM UTC). Avoid trading gold during the Asian session unless you're targeting the Asian range breakout strategy. The London open regularly produces 40-80 pip moves as European institutional desks initiate gold positions. Combining a strong technical setup with London session timing dramatically increases your gold trade win rate.",
      },
    ],
  },
  {
    id: "4",
    slug: "best-prop-firms-2026",
    title: "Best Prop Firms in 2026 Compared",
    excerpt:
      "We compare the top 10 prop trading firms of 2026 by payout speed, profit split, rules fairness, and real trader reviews.",
    category: "Prop Firm",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "May 2, 2026",
    readTime: "10 min read",
    wordCount: "~2,200 words",
    content: [
      {
        heading: "What Makes a Great Prop Firm in 2026?",
        body: "After reviewing data from over 15,000 funded traders across multiple firms, we've identified five criteria that separate the best prop firms from the rest: (1) Payout speed and reliability — the firm actually pays, quickly; (2) Rule fairness — rules that allow traders to trade naturally; (3) Profit split — keeping 80%+ of your profits; (4) Scaling opportunities — the ability to grow your capital; (5) Support quality — responsive, knowledgeable help when you need it.",
      },
      {
        heading: "FX Expert Funded: Overall #1 Rating",
        body: "FX Expert Funded consistently ranks #1 across all key metrics in 2026. With instant account activation, 90% profit split on top tier accounts, weekly payouts processed within 24-48 hours, and 24/7 support across 150+ countries, no other prop firm matches this combination. The introduction of Prime accounts in 2024 expanded options for serious institutional-level traders. Real payout proofs published weekly provide unmatched transparency.",
      },
      {
        heading: "What to Look Out For When Choosing a Prop Firm",
        body: "Beware of firms that advertise 100% profit splits — the math simply doesn't work at scale. Watch for hidden rules like 'consistency requirements' that cap your best trading days, or 'drawdown calculation methods' that use equity-based rather than balance-based drawdown (significantly harder). Look for firms with published payout proof galleries, not just social media screenshots. Check Trustpilot and independent review sites for verified trader experiences before purchasing.",
      },
      {
        heading: "Challenge vs. Instant Funding: Which is Better in 2026?",
        body: "Instant Funding accounts now represent over 60% of all new prop firm accounts purchased. The reason is simple: traders prefer to skip the evaluation and start trading real capital immediately. While challenge accounts are cheaper upfront ($59 vs $99 for $10K accounts), instant funding eliminates the risk of challenge failure. For traders with a verified edge and proper risk management, instant funding at FX Expert Funded is unquestionably the better ROI.",
      },
      {
        heading: "Final Verdict: Our Recommendation",
        body: "For traders serious about building a sustainable funded trading career in 2026, FX Expert Funded offers the most complete package available. The combination of instant funding options, industry-leading profit splits, weekly payouts, and a genuine scaling plan to $1,000,000 creates a long-term opportunity that no other prop firm currently matches. Start with the $50K Elite Instant Funded account for the optimal balance of capital, profit split, and cost.",
      },
    ],
  },
  {
    id: "5",
    slug: "forex-trading-for-beginners",
    title: "Forex Trading for Beginners: Zero to Funded",
    excerpt:
      "Complete beginner's guide to forex trading. Build a strategy, practice on demo, and land your first funded account with FX Expert Funded.",
    category: "Forex",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "Apr 28, 2026",
    readTime: "7 min read",
    wordCount: "~1,600 words",
    content: [
      {
        heading: "What is Forex Trading?",
        body: "Forex (foreign exchange) trading is the buying and selling of currency pairs. The forex market is the largest financial market in the world with over $7.5 trillion in daily volume. Currency pairs like EURUSD, GBPUSD, and USDJPY move based on economic data, central bank policy, and global sentiment. As a trader, your job is to predict whether one currency will strengthen or weaken against another — and profit from those moves.",
      },
      {
        heading: "Start with the Right Mindset",
        body: "The number one mistake beginner traders make is expecting quick profits. Professional funded traders spend 3-6 months on demo before risking real capital. Your first goal should not be making money — it should be developing a consistent process. Track every trade in a journal: entry reason, risk amount, outcome, what you learned. After 100 demo trades, analyze your statistics. A 45% win rate with 1:2 average R:R is profitable. Most beginners don't realize this and abandon good strategies too early.",
      },
      {
        heading: "Your First Trading Strategy",
        body: "We recommend beginners start with London session breakout trading on GBPUSD or EURUSD. The concept: the Asian session creates a tight consolidation range. When London opens, price typically breaks out of this range. Enter in the direction of the breakout with a stop behind the range and target 2x the range distance. This simple strategy requires only 30 minutes of screen time per day and produces consistent opportunities. Backtest 3 months of data before going live.",
      },
      {
        heading: "How to Get Your First Funded Account",
        body: "Once you have 3 months of profitable demo trading with consistent risk management, you're ready for a funded account. At FX Expert Funded, beginners typically start with the $10K Bronze Challenge at $59 or the $10K Instant Funded account at $99. The challenge option builds good habits through the evaluation process. After passing, you keep up to 80% of all profits. Most traders who start with $10K scale to $50K or $100K accounts within 6-12 months.",
      },
      {
        heading: "Common Beginner Mistakes to Avoid",
        body: "The five most common beginner mistakes: (1) Overleveraging — always use 0.5-1% risk per trade maximum. (2) Trading too many pairs — master 2-3 pairs before expanding. (3) Ignoring the trend — always confirm higher timeframe direction before entry. (4) Moving stops to breakeven too early — give trades room to develop. (5) Chasing losses — a loss is information, not a failure. Accept it, learn from it, and move to the next setup. These five rules alone will put you ahead of 80% of retail traders.",
      },
    ],
  },
  {
    id: "6",
    slug: "instant-funded-accounts-explained",
    title: "How Instant Funded Accounts Work",
    excerpt:
      "Everything about instant funding accounts — how they work, rules to follow, and whether they're worth it vs. standard challenges.",
    category: "Prop Firm",
    author: "David Park",
    authorInitials: "DP",
    date: "Apr 25, 2026",
    readTime: "4 min read",
    wordCount: "~900 words",
    content: [
      {
        heading: "What Is an Instant Funded Account?",
        body: "An instant funded account skips the traditional evaluation challenge entirely. You pay a one-time fee, your account is activated immediately, and you start trading with the full account balance the same day. FX Expert Funded offers instant funded accounts from $10,000 to $200,000 with profit splits ranging from 75% to 90%. There are no profit targets to hit — your only obligation is to respect the drawdown limits.",
      },
      {
        heading: "Rules You Must Follow",
        body: "Instant funded accounts have two key rules: (1) 5% daily drawdown limit — your account equity cannot drop more than 5% from the day's opening balance. If a $50K account drops $2,500 in a day, all trades close and trading stops until midnight reset. (2) 10% maximum overall drawdown — the account cannot lose more than 10% from the original funded balance ever. These rules are non-negotiable and enforced by the platform automatically.",
      },
      {
        heading: "The Payout Structure",
        body: "Payouts are requested weekly, typically on Fridays. The minimum withdrawal is $100. Payouts are processed within 24-48 business hours via USDT, bank wire, or cryptocurrency. The profit split means if you make $5,000 profit on a $50K account with an 85% split, you receive $4,250 and FX Expert Funded retains $750. There is no cap on the number of withdrawals or total amount withdrawn.",
      },
      {
        heading: "Is Instant Funding Worth It?",
        body: "For traders with proven profitability, yes — absolutely. The premium you pay over a challenge account ($349 vs $299 for the $50K tier) buys you immediate capital access, zero evaluation risk, and direct income generation from day one. If you can make 5% per month consistently, a $50K instant funded account generates $2,125 per month after the 85% split. At that rate, you recover the account fee in less than 5 months of trading.",
      },
    ],
  },
  {
    id: "7",
    slug: "weekly-payout-prop-firms",
    title: "Weekly Payout Prop Firms Explained",
    excerpt:
      "Not all firms pay weekly. We investigated 15 prop firms and ranked them by actual payout reliability, processing speed, and trader satisfaction.",
    category: "Prop Firm",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "Apr 20, 2026",
    readTime: "5 min read",
    wordCount: "~1,100 words",
    content: [
      {
        heading: "The Payout Reliability Problem",
        body: "Our investigation surveyed 2,400+ funded traders across 15 major prop firms. The results were shocking: only 3 of 15 firms consistently processed payouts within their stated timeframe. The rest averaged 5-14 days despite advertising 24-48 hour processing. Delayed payouts are the #1 complaint in the prop firm industry and the main reason traders switch firms. This guide ranks which firms actually deliver on their payout promises.",
      },
      {
        heading: "How FX Expert Funded Handles Payouts",
        body: "FX Expert Funded processed 99.2% of payout requests within 48 hours in 2025, verified by independent trader surveys. The system is automated: when a payout request is submitted on Friday, it enters an automated verification queue. If risk rules were followed correctly, it's approved and sent within 2 business hours. For amounts over $10,000, manual verification adds 4-8 hours. Real payout proofs are published weekly on the Payout Proofs page with trader names, amounts, and timestamps.",
      },
      {
        heading: "Payment Methods That Actually Work",
        body: "USDT (TRC20 and ERC20) provides the fastest, most reliable payout method with near-instant settlement after approval. Cryptocurrency payments (Bitcoin, Ethereum) are slightly slower due to blockchain confirmation times. Bank wire transfers are the slowest (2-3 business days after approval) but work for traders without crypto wallets. All methods are fully supported by FX Expert Funded with no preference fees.",
      },
      {
        heading: "Red Flags: When Firms Delay Payouts",
        body: "Warning signs that a prop firm may delay or withhold payouts: (1) No published payout proof gallery. (2) 'Payout requests reviewed manually' without clear timelines. (3) Inconsistent answers from support about processing times. (4) Complaints about 'rule violations' appearing after payout requests. (5) Social media posts from traders showing weeks-long delays. Always research a firm's payout track record before purchasing. FX Expert Funded publishes all payouts publicly for maximum transparency.",
      },
    ],
  },
  {
    id: "8",
    slug: "trading-psychology-tips",
    title: "Top 10 Trading Psychology Tips for Funded Traders",
    excerpt:
      "Master your mindset while trading a prop firm account. Expert tips on discipline, loss recovery, consistency and avoiding revenge trading.",
    category: "Psychology",
    author: "Dr. Maria Santos",
    authorInitials: "MS",
    date: "Apr 15, 2026",
    readTime: "6 min read",
    wordCount: "~1,300 words",
    content: [
      {
        heading: "Why Psychology Determines Funded Account Success",
        body: "In our analysis of 1,000 funded traders who failed their accounts, psychology-related errors caused 73% of failures. Not strategy failures. Not market conditions. Psychology. The most common: revenge trading after a loss (31%), overtrading on winning streaks (24%), and paralysis when near the daily drawdown limit (18%). Understanding and managing these psychological triggers is more important than any technical strategy.",
      },
      {
        heading: "Tips 1-3: Managing Losses Professionally",
        body: "Tip 1: Accept losses before you trade. Every trade has a defined risk amount. When you open the trade, mentally accept that money is already spent. If it works out, great. If not, it's the cost of doing business. Tip 2: Take a mandatory 30-minute break after any loss that feels emotionally charged. Walk away from the screen. Tip 3: Set a daily loss limit at 2% (half the maximum 5%). Once you hit 2% intraday loss, stop trading regardless of setups. Protecting capital when emotional is the mark of a professional.",
      },
      {
        heading: "Tips 4-6: Maintaining Consistency",
        body: "Tip 4: Trade the same strategy every single day. Consistency in approach leads to consistency in results. Changing strategies after 3 losing trades is the fastest path to failure. Tip 5: Set a maximum of 3 trades per day. More is not better — more trades mean more randomness and more emotional exposure. The best funded traders average 2.3 trades per day. Tip 6: Review your trades every Sunday. What worked? What didn't? Patterns emerge over 20+ trades that reveal your edge — and your weaknesses.",
      },
      {
        heading: "Tips 7-10: Advanced Mindset Techniques",
        body: "Tip 7: Detach outcome from process. Your only job is to execute your strategy correctly. The market decides the outcome. Grade yourself on process quality, not trade results. Tip 8: Use visualization before the trading session. Spend 5 minutes visualizing calm, disciplined execution. Elite athletes do this — it works for traders too. Tip 9: Build a pre-trading routine (exercise, meditation, journaling) that creates a consistent mental state. Tip 10: Celebrate consistent process execution, not big winning trades. Culture creates behavior — reward what you want to repeat.",
      },
    ],
  },
];

const categoryColors: Record<string, string> = {
  "Prop Firm": "bg-brand-gold/10 text-brand-gold",
  Forex: "bg-blue-500/10 text-blue-400",
  "Gold Trading": "bg-yellow-500/10 text-yellow-400",
  Strategy: "bg-purple-500/10 text-purple-400",
  Psychology: "bg-pink-500/10 text-pink-400",
};

export default function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display font-black text-4xl mb-4">
          Post Not Found
        </h1>
        <Link
          to="/blog"
          className="btn-primary inline-block"
          data-ocid="blog_post.back_button"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const related = blogData
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="bg-background">
      <title>{post.title} | FX Expert Funded Blog</title>

      {/* Hero */}
      <section className="gradient-hero py-16 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-brand-gold transition-colors-fast mb-6"
            data-ocid="blog_post.back_to_blog_link"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium ${categoryColors[post.category] ?? "bg-muted text-foreground/60"}`}
            >
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-foreground/40">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-foreground/40">
              <BookOpen className="w-3 h-3" />
              {post.wordCount}
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-3xl sm:text-5xl mb-5 leading-tight"
          >
            {post.title}
          </motion.h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-navy border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-sm">
                {post.authorInitials}
              </div>
              <div>
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <User className="w-3.5 h-3.5 text-foreground/40" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1 text-xs text-foreground/40">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Share article"
              className="flex items-center gap-2 text-xs text-foreground/50 hover:text-brand-gold transition-colors-fast"
              data-ocid="blog_post.share_button"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="card-elevated rounded-2xl p-8">
              <p className="text-foreground/70 text-lg leading-relaxed mb-8 border-l-2 border-brand-gold pl-5">
                {post.excerpt}
              </p>
              {post.content.map((section) => (
                <div key={section.heading} className="mb-8">
                  <h2 className="font-display font-bold text-xl mb-3 text-foreground">
                    {section.heading}
                  </h2>
                  <p className="text-foreground/65 leading-relaxed text-[0.9375rem]">
                    {section.body}
                  </p>
                </div>
              ))}
              <div className="border-t border-white/10 pt-6 mt-2">
                <p className="text-xs text-foreground/30">
                  Published by {post.author} • {post.date} • FX Expert Funded
                  Blog
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="gradient-navy rounded-2xl p-7 text-center mt-6">
              <p className="text-sm text-foreground/60 mb-3">
                Ready to apply what you've learned?
              </p>
              <h3 className="font-display font-bold text-xl mb-5">
                Get a{" "}
                <span className="text-gradient-gold">Funded Account Today</span>
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/instant-funding"
                  className="btn-primary text-sm px-6 py-2.5"
                  data-ocid="blog_post.get_funded_button"
                >
                  Instant Funding
                </Link>
                <Link
                  to="/challenge-accounts"
                  className="btn-secondary text-sm px-6 py-2.5"
                  data-ocid="blog_post.challenge_button"
                >
                  Start Challenge
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Table of Contents */}
            <div className="card-elevated rounded-xl p-5">
              <h3 className="font-display font-bold text-sm mb-3 text-foreground/80">
                Table of Contents
              </h3>
              <div className="space-y-2">
                {post.content.map((section, i) => (
                  <div
                    key={`toc-${section.heading}`}
                    className="flex items-start gap-2 text-xs text-foreground/50 hover:text-brand-gold cursor-pointer transition-colors-fast py-0.5"
                  >
                    <span className="text-brand-gold/60 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="line-clamp-2">{section.heading}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="card-elevated rounded-xl p-5">
                <h3 className="font-display font-bold text-sm mb-4 text-foreground/80">
                  Related Articles
                </h3>
                <div className="space-y-3">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="block p-3 rounded-lg bg-muted hover:bg-brand-gold/5 transition-smooth"
                      data-ocid={`blog_post.related.${p.id}`}
                    >
                      <div className="text-xs text-brand-gold mb-1">
                        {p.category}
                      </div>
                      <div className="text-xs font-semibold line-clamp-2 leading-snug">
                        {p.title}
                      </div>
                      <div className="text-xs text-foreground/40 mt-1">
                        {p.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Social Share */}
            <div className="card-elevated rounded-xl p-5">
              <h3 className="font-display font-bold text-sm mb-3 text-foreground/80">
                Share This Article
              </h3>
              <div className="flex gap-2">
                {["Twitter", "Telegram", "WhatsApp"].map((platform) => (
                  <button
                    key={platform}
                    type="button"
                    aria-label={`Share on ${platform}`}
                    className="flex-1 py-2 text-xs rounded-lg bg-muted text-foreground/50 hover:text-brand-gold hover:bg-brand-gold/10 transition-smooth"
                    data-ocid={`blog_post.share_${platform.toLowerCase()}_button`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
