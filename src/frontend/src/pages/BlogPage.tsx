import { Link } from "@tanstack/react-router";
import { Clock, Mail, Search, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Prop Firm",
  "Forex",
  "Gold Trading",
  "Strategy",
  "Psychology",
];

const blogPosts = [
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
  },
  {
    id: "4",
    slug: "best-prop-firms-2026",
    title: "Best Prop Firms in 2026 Compared",
    excerpt:
      "We compare the top 10 prop trading firms of 2026 by payout speed, profit split, rules fairness, and real trader reviews. See who ranks #1.",
    category: "Prop Firm",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "May 2, 2026",
    readTime: "10 min read",
  },
  {
    id: "5",
    slug: "forex-trading-for-beginners",
    title: "Forex Trading for Beginners: Zero to Funded",
    excerpt:
      "Complete beginner's guide to forex trading. Build a strategy, practice on demo, and land your first funded account with FX Expert Funded step by step.",
    category: "Forex",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "Apr 28, 2026",
    readTime: "7 min read",
  },
  {
    id: "6",
    slug: "instant-funded-accounts-explained",
    title: "How Instant Funded Accounts Work",
    excerpt:
      "Everything you need to know about instant funding accounts — how they work, rules to follow, and whether they're worth it vs. standard challenges.",
    category: "Prop Firm",
    author: "David Park",
    authorInitials: "DP",
    date: "Apr 25, 2026",
    readTime: "4 min read",
  },
  {
    id: "7",
    slug: "weekly-payout-prop-firms",
    title: "Weekly Payout Prop Firms Explained",
    excerpt:
      "Not all firms pay weekly. We investigated 15 prop firms and ranked them by actual payout reliability, processing speed, and trader satisfaction scores.",
    category: "Prop Firm",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "Apr 20, 2026",
    readTime: "5 min read",
  },
  {
    id: "8",
    slug: "trading-psychology-tips",
    title: "Top 10 Trading Psychology Tips for Funded Traders",
    excerpt:
      "Master your mindset and emotions while trading a prop firm account. Expert tips on discipline, loss recovery, consistency and avoiding revenge trading.",
    category: "Psychology",
    author: "Dr. Maria Santos",
    authorInitials: "MS",
    date: "Apr 15, 2026",
    readTime: "6 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Prop Firm": "bg-brand-gold/10 text-brand-gold",
  Forex: "bg-blue-500/10 text-blue-400",
  "Gold Trading": "bg-yellow-500/10 text-yellow-400",
  Strategy: "bg-purple-500/10 text-purple-400",
  Psychology: "bg-pink-500/10 text-pink-400",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = blogPosts.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      (search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <div className="bg-background">
      <title>
        Forex Trading Blog | Expert Trading Tips &amp; Prop Firm News
      </title>

      {/* Hero */}
      <section className="gradient-hero py-20 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold mb-5"
          >
            📚 Trader Knowledge Hub
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display font-black text-5xl sm:text-6xl mb-5"
          >
            Trading <span className="text-gradient-gold">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 mb-8 max-w-xl mx-auto"
          >
            Expert strategies, prop firm guides, and market analysis to help you
            trade better and get funded faster.
          </motion.p>
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
            <input
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
              data-ocid="blog.search_input"
            />
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="gradient-section-alt border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-smooth ${
                activeCategory === cat
                  ? "bg-brand-gold text-brand-black"
                  : "bg-muted text-foreground/60 hover:text-foreground"
              }`}
              data-ocid={`blog.category_${cat.toLowerCase().replace(/\s+/g, "_")}_tab`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.07 }}
                className="card-elevated rounded-xl overflow-hidden group flex flex-col"
                data-ocid={`blog.post.${i + 1}`}
              >
                <div className="h-44 bg-gradient-to-br from-brand-navy to-brand-black flex items-center justify-center border-b border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-brand-gold/20 to-transparent" />
                  <span className="text-5xl">
                    {post.category === "Psychology"
                      ? "🧠"
                      : post.category === "Gold Trading"
                        ? "🪩"
                        : post.category === "Strategy"
                          ? "📊"
                          : post.category === "Prop Firm"
                            ? "🏦"
                            : "📈"}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
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
                  </div>
                  <h2 className="font-display font-bold text-base mb-2 group-hover:text-brand-gold transition-colors-fast line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-foreground/50 line-clamp-2 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-navy border border-brand-gold/20 flex items-center justify-center text-xs font-bold text-brand-gold">
                        {post.authorInitials}
                      </div>
                      <span className="text-xs text-foreground/40 truncate max-w-[6rem]">
                        {post.author}
                      </span>
                    </div>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="text-xs text-brand-gold hover:underline font-semibold transition-colors-fast"
                      data-ocid={`blog.post_${i + 1}.read_more_link`}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Newsletter signup embedded */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-elevated rounded-xl p-7 flex flex-col justify-center text-center border-brand-gold/20"
              data-ocid="blog.newsletter_card"
            >
              <div className="text-3xl mb-3">📨</div>
              <h3 className="font-display font-bold text-lg mb-2">
                Get Trading Insights Weekly
              </h3>
              <p className="text-sm text-foreground/50 mb-5">
                Join 5,000+ traders who receive our weekly trading tips and prop
                firm news.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                  data-ocid="blog.newsletter_input"
                />
                <button
                  type="submit"
                  className="btn-primary w-full py-2.5 text-sm"
                  data-ocid="blog.newsletter_submit_button"
                >
                  Subscribe Free
                </button>
              </form>
            </motion.div>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16" data-ocid="blog.empty_state">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-foreground/50">
                No articles found for your search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="btn-secondary text-sm px-5 py-2 mt-4"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
