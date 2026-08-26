import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
import { S as Search } from "./search-fzUlFKeu.js";
import { T as Tag } from "./tag-BqlXV74a.js";
import { C as Clock } from "./clock-C5tE6HL9.js";
const CATEGORIES = [
  "All",
  "Prop Firm",
  "Forex",
  "Gold Trading",
  "Strategy",
  "Psychology"
];
const blogPosts = [
  {
    id: "1",
    slug: "best-forex-trading-strategies-2026",
    title: "Best Forex Trading Strategies for 2026",
    excerpt: "Discover the top-performing forex strategies that professional funded traders use to achieve consistent results and pass prop firm challenges in 2026.",
    category: "Forex",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "May 10, 2026",
    readTime: "8 min read"
  },
  {
    id: "2",
    slug: "how-to-pass-prop-firm-challenge",
    title: "How to Pass a Prop Firm Challenge in 30 Days",
    excerpt: "A step-by-step blueprint for passing any prop firm evaluation challenge. Risk rules, entry discipline, and psychological edge from real funded traders.",
    category: "Prop Firm",
    author: "Alex Rivera",
    authorInitials: "AR",
    date: "May 8, 2026",
    readTime: "6 min read"
  },
  {
    id: "3",
    slug: "gold-trading-risk-management",
    title: "Gold Trading Risk Management: Complete Guide",
    excerpt: "Master XAUUSD trading with professional risk techniques. Position sizing, stop-loss placement, and correlation analysis for gold prop trading.",
    category: "Gold Trading",
    author: "Sarah Chen",
    authorInitials: "SC",
    date: "May 5, 2026",
    readTime: "5 min read"
  },
  {
    id: "4",
    slug: "best-prop-firms-2026",
    title: "Best Prop Firms in 2026 Compared",
    excerpt: "We compare the top 10 prop trading firms of 2026 by payout speed, profit split, rules fairness, and real trader reviews. See who ranks #1.",
    category: "Prop Firm",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "May 2, 2026",
    readTime: "10 min read"
  },
  {
    id: "5",
    slug: "forex-trading-for-beginners",
    title: "Forex Trading for Beginners: Zero to Funded",
    excerpt: "Complete beginner's guide to forex trading. Build a strategy, practice on demo, and land your first funded account with FX Expert Funded step by step.",
    category: "Forex",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "Apr 28, 2026",
    readTime: "7 min read"
  },
  {
    id: "6",
    slug: "instant-funded-accounts-explained",
    title: "How Instant Funded Accounts Work",
    excerpt: "Everything you need to know about instant funding accounts — how they work, rules to follow, and whether they're worth it vs. standard challenges.",
    category: "Prop Firm",
    author: "David Park",
    authorInitials: "DP",
    date: "Apr 25, 2026",
    readTime: "4 min read"
  },
  {
    id: "7",
    slug: "weekly-payout-prop-firms",
    title: "Weekly Payout Prop Firms Explained",
    excerpt: "Not all firms pay weekly. We investigated 15 prop firms and ranked them by actual payout reliability, processing speed, and trader satisfaction scores.",
    category: "Prop Firm",
    author: "FX Expert Team",
    authorInitials: "FX",
    date: "Apr 20, 2026",
    readTime: "5 min read"
  },
  {
    id: "8",
    slug: "trading-psychology-tips",
    title: "Top 10 Trading Psychology Tips for Funded Traders",
    excerpt: "Master your mindset and emotions while trading a prop firm account. Expert tips on discipline, loss recovery, consistency and avoiding revenge trading.",
    category: "Psychology",
    author: "Dr. Maria Santos",
    authorInitials: "MS",
    date: "Apr 15, 2026",
    readTime: "6 min read"
  }
];
const categoryColors = {
  "Prop Firm": "bg-brand-gold/10 text-brand-gold",
  Forex: "bg-blue-500/10 text-blue-400",
  "Gold Trading": "bg-yellow-500/10 text-yellow-400",
  Strategy: "bg-purple-500/10 text-purple-400",
  Psychology: "bg-pink-500/10 text-pink-400"
};
function BlogPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  const filtered = blogPosts.filter(
    (p) => (activeCategory === "All" || p.category === activeCategory) && (search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase()))
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Forex Trading Blog | Expert Trading Tips & Prop Firm News" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-hero py-20 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold mb-5",
          children: "📚 Trader Knowledge Hub"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.05 },
          className: "font-display font-black text-5xl sm:text-6xl mb-5",
          children: [
            "Trading ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Insights" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "text-lg text-foreground/60 mb-8 max-w-xl mx-auto",
          children: "Expert strategies, prop firm guides, and market analysis to help you trade better and get funded faster."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.15 },
          className: "relative max-w-md mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search articles…",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
                "data-ocid": "blog.search_input"
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-section-alt border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-4 flex gap-2 flex-wrap", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveCategory(cat),
        className: `px-4 py-1.5 rounded-full text-sm font-medium transition-smooth ${activeCategory === cat ? "bg-brand-gold text-brand-black" : "bg-muted text-foreground/60 hover:text-foreground"}`,
        "data-ocid": `blog.category_${cat.toLowerCase().replace(/\s+/g, "_")}_tab`,
        children: cat
      },
      cat
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        filtered.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i % 6 * 0.07 },
            className: "card-elevated rounded-xl overflow-hidden group flex flex-col",
            "data-ocid": `blog.post.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 bg-gradient-to-br from-brand-navy to-brand-black flex items-center justify-center border-b border-white/10 relative overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 bg-gradient-to-br from-brand-gold/20 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: post.category === "Psychology" ? "🧠" : post.category === "Gold Trading" ? "🪩" : post.category === "Strategy" ? "📊" : post.category === "Prop Firm" ? "🏦" : "📈" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium ${categoryColors[post.category] ?? "bg-muted text-foreground/60"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" }),
                        post.category
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-foreground/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    post.readTime
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base mb-2 group-hover:text-brand-gold transition-colors-fast line-clamp-2", children: post.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/50 line-clamp-2 mb-4 flex-1", children: post.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-brand-navy border border-brand-gold/20 flex items-center justify-center text-xs font-bold text-brand-gold", children: post.authorInitials }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/40 truncate max-w-[6rem]", children: post.author })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/blog/$slug",
                      params: { slug: post.slug },
                      className: "text-xs text-brand-gold hover:underline font-semibold transition-colors-fast",
                      "data-ocid": `blog.post_${i + 1}.read_more_link`,
                      children: "Read More →"
                    }
                  )
                ] })
              ] })
            ]
          },
          post.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "card-elevated rounded-xl p-7 flex flex-col justify-center text-center border-brand-gold/20",
            "data-ocid": "blog.newsletter_card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "📨" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg mb-2", children: "Get Trading Insights Weekly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/50 mb-5", children: "Join 5,000+ traders who receive our weekly trading tips and prop firm news." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "your@email.com",
                    className: "w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
                    "data-ocid": "blog.newsletter_input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "btn-primary w-full py-2.5 text-sm",
                    "data-ocid": "blog.newsletter_submit_button",
                    children: "Subscribe Free"
                  }
                )
              ] })
            ]
          }
        )
      ] }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", "data-ocid": "blog.empty_state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🔍" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50", children: "No articles found for your search." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setSearch("");
              setActiveCategory("All");
            },
            className: "btn-secondary text-sm px-5 py-2 mt-4",
            children: "Clear Filters"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  BlogPage as default
};
