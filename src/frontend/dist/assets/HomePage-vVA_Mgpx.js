import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, T as TrendingUp, s as stats, r as reactExports, f as features, t as testimonials } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
import { Z as Zap } from "./zap-BGif2zWy.js";
import { A as ArrowRight } from "./arrow-right-DtQfokYj.js";
import { S as ShieldCheck } from "./shield-check-XW3KdbZy.js";
import { C as Calendar } from "./calendar-DP3n2EW1.js";
import { D as DollarSign } from "./dollar-sign-BrdmBysu.js";
import { S as Star } from "./star-CwtFj-te.js";
import { C as CircleCheck } from "./circle-check-CWiMeYpG.js";
import { A as Award } from "./award-L7ZfnJgY.js";
import { C as Crown } from "./crown-C0_kuvfQ.js";
import { A as AnimatePresence } from "./index-JgOTx1H4.js";
import { C as ChevronRight } from "./chevron-right-CBLcwSVD.js";
import { S as Shield } from "./shield-lUrlHG6O.js";
import { G as Globe } from "./globe-X8Y2BvD6.js";
import { U as Users } from "./users-gVwYfH7K.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
const tickerItems = [
  { pair: "EUR/USD", change: "+0.12%", positive: true },
  { pair: "GBP/USD", change: "-0.05%", positive: false },
  { pair: "XAU/USD", change: "+0.89%", positive: true },
  { pair: "BTC/USD", change: "+1.23%", positive: true },
  { pair: "USD/JPY", change: "-0.08%", positive: false },
  { pair: "NAS100", change: "+0.34%", positive: true },
  { pair: "US30", change: "+0.47%", positive: true },
  { pair: "GBP/JPY", change: "-0.19%", positive: false },
  { pair: "AUD/USD", change: "+0.22%", positive: true },
  { pair: "EUR/GBP", change: "-0.11%", positive: false },
  { pair: "XAG/USD", change: "+1.54%", positive: true },
  { pair: "USD/CAD", change: "+0.09%", positive: true }
];
function TickerBar() {
  const doubled = [...tickerItems, ...tickerItems];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-navy/80 border-b border-white/10 py-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticker-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticker-track", children: doubled.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-2 text-xs font-mono",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-brand-green inline-block animate-pulse-glow-green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/70 font-semibold", children: item.pair }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: item.positive ? "text-brand-green" : "text-red-400",
            children: item.change
          }
        )
      ]
    },
    `ticker-${item.pair}-${i}`
  )) }) }) });
}
function TradingSparkline() {
  const path1 = "M0,40 C20,35 40,20 60,25 C80,30 100,15 120,10 C140,5 160,20 180,15 C200,10 220,5 240,8";
  const path2 = "M0,50 C30,45 50,55 80,40 C110,25 130,35 160,20 C180,10 210,15 240,12";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 240 60",
      className: "w-full h-16 opacity-60",
      preserveAspectRatio: "none",
      "aria-label": "Live trading price sparkline chart",
      role: "img",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "sparkGrad", x1: "0", y1: "0", x2: "1", y2: "0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#d4af37", stopOpacity: "0.3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#d4af37", stopOpacity: "1" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: path1, fill: "none", stroke: "url(#sparkGrad)", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: path2,
            fill: "none",
            stroke: "#00d084",
            strokeWidth: "1",
            strokeOpacity: "0.5"
          }
        )
      ]
    }
  );
}
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] flex items-center gradient-hero overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-5",
        style: {
          backgroundImage: "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" }),
              "Trusted Since 2021 · 15,000+ Funded Traders"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 28 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.1 },
            className: "font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.04] mb-6",
            children: [
              "Get Funded",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Up To" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold text-shimmer block", children: "$1,000,000" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "text-lg text-foreground/60 leading-relaxed mb-8 max-w-xl",
            children: "Trade Forex, Gold, Indices & Crypto with one of the most trusted prop firms since 2021. Weekly payouts, up to 90% profit split, and instant funded accounts available now."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            className: "flex flex-wrap gap-3 mb-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/challenge-accounts",
                  className: "btn-primary flex items-center gap-2",
                  "data-ocid": "hero.start_challenge_button",
                  children: [
                    "Start Challenge ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/instant-funding",
                  className: "btn-secondary flex items-center gap-2",
                  "data-ocid": "hero.instant_funding_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                    " Get Instant Funding"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/affiliate",
                  className: "flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-foreground/70 hover:text-brand-gold border border-white/15 hover:border-brand-gold/30 transition-smooth",
                  "data-ocid": "hero.affiliate_button",
                  children: "Become an Affiliate"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, delay: 0.45 },
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: [
              { icon: ShieldCheck, label: "10,000+ Traders" },
              { icon: Calendar, label: "2021 Founded" },
              { icon: DollarSign, label: "$50M+ Paid" },
              { icon: Star, label: "Trustpilot 4.8" }
            ].map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40 border border-white/8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-brand-gold flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/60 font-medium", children: label })
                ]
              },
              label
            ))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.7, delay: 0.3 },
          className: "hidden lg:block",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevated p-7 rounded-2xl animate-pulse-glow-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-brand-gold" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: "Live Platform Stats" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-brand-green", children: "● All systems operational" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/40 font-mono", children: "UTC 09:42" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 mb-5", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-muted/40 rounded-xl p-4 border border-white/5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black font-display text-brand-gold", children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/50 mt-0.5", children: stat.label })
                ]
              },
              stat.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TradingSparkline, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 mt-4", children: [
              "Weekly Payouts Guaranteed",
              "90% Profit Split",
              "No Hidden Fees",
              "MT5 Live Markets"
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-brand-green flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/70", children: item })
            ] }, item)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-white/10 flex items-center gap-2", children: [
              [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: "w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                },
                `hero-star-${n}`
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/40 ml-1", children: "4.9/5 · 2,400+ reviews" })
            ] })
          ] })
        }
      )
    ] })
  ] });
}
function useCountUp(target, duration = 2e3, start = false) {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}
const statCounters = [
  { label: "Funded Traders", value: 15e3, suffix: "+", prefix: "" },
  { label: "Total Payouts", value: 50, suffix: "M+", prefix: "$" },
  { label: "Success Rate", value: 95, suffix: "%", prefix: "" },
  { label: "Countries", value: 150, suffix: "+", prefix: "" }
];
function StatCounter({
  stat,
  inView
}) {
  const count = useCountUp(stat.value, 2200, inView);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-black text-5xl sm:text-6xl text-gradient-gold mb-2", children: [
      stat.prefix,
      count.toLocaleString(),
      stat.suffix
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/50 text-sm font-medium", children: stat.label })
  ] });
}
function StatsSection() {
  const [inView, setInView] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "py-20 bg-background border-b border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3", children: "Platform Statistics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl", children: [
            "Numbers That",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Speak for Themselves" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4", children: statCounters.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        "data-ocid": `stats.counter.${i + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCounter, { stat, inView })
      },
      stat.label
    )) })
  ] }) });
}
function FeaturesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-section-alt py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3", children: "Why Choose Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl mb-4", children: [
            "Why ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "10,000+ Traders" }),
            " ",
            "Choose Us"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-lg max-w-2xl mx-auto", children: "Industry-leading terms, fast payouts, and real trading conditions that put traders first." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.07 },
        className: "card-elevated rounded-xl p-6",
        "data-ocid": `features.card.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-4", children: f.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm mb-2 text-brand-gold", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/50 leading-relaxed", children: f.description })
        ]
      },
      f.title
    )) })
  ] }) });
}
const accountTypes = [
  {
    id: "instant",
    icon: Zap,
    name: "Instant Funding",
    tagline: "Trade Today, No Challenge",
    highlight: false,
    badge: null,
    features: [
      "No evaluation required",
      "Same-day account setup",
      "Up to 85% profit split",
      "10% max drawdown",
      "Weekly withdrawals"
    ],
    cta: "Get Started",
    href: "/instant-funding",
    priceFrom: "From $99"
  },
  {
    id: "challenge",
    icon: Award,
    name: "Challenge Accounts",
    tagline: "Prove Skills, Get Funded",
    highlight: true,
    badge: "Most Popular",
    features: [
      "2-phase evaluation",
      "Lower entry cost",
      "Up to 90% profit split",
      "Scale to $1,000,000",
      "Free challenge reset"
    ],
    cta: "Start Challenge",
    href: "/challenge-accounts",
    priceFrom: "From $59"
  },
  {
    id: "prime",
    icon: Crown,
    name: "Prime Accounts",
    tagline: "Institutional-Grade Funding",
    highlight: false,
    badge: null,
    features: [
      "Up to $1M capital",
      "Dedicated account manager",
      "Custom conditions",
      "Priority payout processing",
      "VIP trader community"
    ],
    cta: "Learn More",
    href: "/prime-accounts",
    priceFrom: "From $999"
  }
];
function AccountTypesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3", children: "Account Options" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl mb-4", children: [
            "Choose Your",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Path to Funding" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-lg max-w-xl mx-auto", children: "Three ways to get funded. All paths lead to real capital and real profits." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: accountTypes.map((acct, i) => {
      const Icon = acct.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.12 },
          className: `relative rounded-2xl p-7 flex flex-col ${acct.highlight ? "bg-gradient-to-b from-brand-navy to-brand-navy/60 border-2 border-brand-gold/50 shadow-2xl" : "card-elevated"}`,
          "data-ocid": `accounts.${acct.id}_card`,
          children: [
            acct.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-gold text-brand-black text-xs font-black tracking-wide", children: acct.badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${acct.highlight ? "bg-brand-gold/20 border border-brand-gold/40" : "bg-muted/60 border border-white/10"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    className: `w-6 h-6 ${acct.highlight ? "text-brand-gold" : "text-foreground/60"}`
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/40 uppercase tracking-widest mb-1", children: acct.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-xl mb-1", children: acct.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-brand-gold font-semibold mb-5", children: acct.priceFrom }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 flex-1 mb-7", children: acct.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-center gap-2.5 text-sm text-foreground/70",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-brand-green flex-shrink-0" }),
                  feat
                ]
              },
              feat
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: acct.href,
                className: acct.highlight ? "btn-primary text-center text-sm" : "btn-secondary text-center text-sm",
                "data-ocid": `accounts.${acct.id}.cta_button`,
                children: acct.cta
              }
            )
          ]
        },
        acct.id
      );
    }) })
  ] }) });
}
function TestimonialsSection() {
  const [current, setCurrent] = reactExports.useState(0);
  const total = testimonials.length;
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4e3);
    return () => clearInterval(timer);
  }, [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const visible = [
    testimonials[current],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-section-alt py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3", children: "Trader Stories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl mb-4", children: [
            "What Our ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Traders Say" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-lg", children: "Real stories from real funded traders worldwide." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: visible.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { delay: i * 0.06 },
        className: "card-elevated rounded-xl p-6",
        "data-ocid": `testimonials.card.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 mb-3", children: [...Array(t.rating)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: "w-3.5 h-3.5 fill-brand-gold text-brand-gold"
            },
            `${t.id}-star-${j}`
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/70 leading-relaxed mb-4", children: [
            "“",
            t.comment,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-brand-navy border border-brand-gold/20 flex items-center justify-center text-sm", children: t.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-foreground/40", children: [
                  t.country,
                  " · ",
                  t.accountSize
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-brand-green", children: t.profit }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/40", children: "Total profit" })
            ] })
          ] })
        ]
      },
      `${t.id}-pos-${i}-${current}`
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: prev,
          className: "w-10 h-10 rounded-full border border-white/15 hover:border-brand-gold/40 flex items-center justify-center transition-smooth",
          "aria-label": "Previous testimonials",
          "data-ocid": "testimonials.prev_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setCurrent(i),
          className: `w-2 h-2 rounded-full transition-smooth ${i === current ? "bg-brand-gold w-5" : "bg-white/20"}`,
          "aria-label": `Go to testimonial ${i + 1}`,
          "data-ocid": `testimonials.dot.${i + 1}`
        },
        `dot-${t.id}`
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: next,
          className: "w-10 h-10 rounded-full border border-white/15 hover:border-brand-gold/40 flex items-center justify-center transition-smooth",
          "aria-label": "Next testimonials",
          "data-ocid": "testimonials.next_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/reviews",
        className: "btn-secondary inline-flex items-center gap-2",
        "data-ocid": "testimonials.view_all_reviews_button",
        children: [
          "View All Reviews ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ]
      }
    ) })
  ] }) });
}
const trustPoints = [
  {
    icon: Calendar,
    title: "Working Since 2021",
    desc: "4+ years of reliable operations and consistent payouts."
  },
  {
    icon: Zap,
    title: "Fast Payouts Guaranteed",
    desc: "Average 24-48hr processing. No unnecessary delays."
  },
  {
    icon: Shield,
    title: "Transparent Rules",
    desc: "No hidden restrictions. Everything is clearly documented."
  },
  {
    icon: Globe,
    title: "Global Trading Community",
    desc: "Connect with 15,000+ traders across 150+ countries."
  },
  {
    icon: Users,
    title: "150+ Countries",
    desc: "Serving traders from Asia, Europe, Africa, and the Americas."
  },
  {
    icon: TrendingUp,
    title: "Professional Risk Management",
    desc: "Industry-standard drawdown limits. Trader-first policies."
  }
];
function TrustSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 gradient-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand-gold/60 text-xs uppercase tracking-widest font-semibold mb-3", children: "Our Commitment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl mb-4", children: [
            "Built on",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Trust & Transparency" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-lg max-w-2xl mx-auto", children: "Since 2021, we have paid over $50 million to traders worldwide. Transparent rules, fast payouts, no manipulation." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: trustPoints.map((point, i) => {
      const Icon = point.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          className: "flex items-start gap-4 p-6 rounded-xl bg-white/3 border border-white/8 hover:border-brand-gold/20 transition-smooth",
          "data-ocid": `trust.point.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-brand-gold" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm mb-1", children: point.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/50 leading-relaxed", children: point.desc })
            ] })
          ]
        },
        point.title
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "flex flex-wrap justify-center gap-4 mt-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/payout-proofs",
              className: "btn-primary flex items-center gap-2",
              "data-ocid": "trust.view_payout_proofs_button",
              children: [
                "View Payout Proofs ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/about",
              className: "btn-secondary flex items-center gap-2",
              "data-ocid": "trust.about_us_button",
              children: "About Our Company"
            }
          )
        ]
      }
    )
  ] }) });
}
function CTABanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20",
      style: {
        background: "linear-gradient(135deg, #d4af37 0%, #e8c84a 40%, #c9a227 100%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.97 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl sm:text-5xl text-brand-black mb-4", children: "Ready to Get Funded? Start Today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand-black/60 text-lg mb-8 max-w-xl mx-auto", children: "Join 15,000+ traders who have already transformed their trading careers with FX Expert Funded." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/instant-funding",
                  className: "px-8 py-4 rounded-lg bg-brand-black text-brand-gold font-display font-bold text-base hover:bg-brand-navy transition-smooth shadow-xl",
                  "data-ocid": "cta_banner.get_instant_funding_button",
                  children: "Get Instant Funding"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/challenge-accounts",
                  className: "px-8 py-4 rounded-lg border-2 border-brand-black/30 text-brand-black font-display font-bold text-base hover:bg-brand-black/10 transition-smooth",
                  "data-ocid": "cta_banner.start_challenge_button",
                  children: "Start a Challenge"
                }
              )
            ] })
          ]
        }
      ) })
    }
  );
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TickerBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AccountTypesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
export {
  HomePage as default
};
