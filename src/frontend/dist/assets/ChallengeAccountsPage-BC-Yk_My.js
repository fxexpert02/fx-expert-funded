import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, r as reactExports, C as ChevronDown } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
import { A as ArrowRight } from "./arrow-right-DtQfokYj.js";
import { C as CircleCheck } from "./circle-check-CWiMeYpG.js";
import { C as CircleX } from "./circle-x-t5D8I5dq.js";
import { T as Target } from "./target-D_yQrf5k.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
const tiers = [
  {
    id: "bronze",
    name: "Bronze",
    capital: "$10,000",
    cost: "$89",
    phase1Target: "8%",
    phase2Target: "5%",
    maxDrawdown: "10%",
    dailyLoss: "5%",
    minDays: "5",
    profitSplit: "80%",
    highlighted: false,
    badge: null
  },
  {
    id: "silver",
    name: "Silver",
    capital: "$25,000",
    cost: "$189",
    phase1Target: "8%",
    phase2Target: "5%",
    maxDrawdown: "10%",
    dailyLoss: "5%",
    minDays: "5",
    profitSplit: "80%",
    highlighted: true,
    badge: "Popular"
  },
  {
    id: "gold",
    name: "Gold",
    capital: "$50,000",
    cost: "$299",
    phase1Target: "8%",
    phase2Target: "5%",
    maxDrawdown: "10%",
    dailyLoss: "5%",
    minDays: "5",
    profitSplit: "85%",
    highlighted: false,
    badge: null
  },
  {
    id: "platinum",
    name: "Platinum",
    capital: "$100,000",
    cost: "$499",
    phase1Target: "8%",
    phase2Target: "5%",
    maxDrawdown: "10%",
    dailyLoss: "5%",
    minDays: "5",
    profitSplit: "90%",
    highlighted: false,
    badge: null
  }
];
const allowedRules = [
  "All Forex major and minor pairs",
  "Gold (XAU/USD) and Silver (XAG/USD)",
  "Expert Advisors (EAs)",
  "Automated trading strategies",
  "News trading allowed",
  "Hedging within the account",
  "Weekend holding positions",
  "Scalping and swing trading"
];
const restrictedRules = [
  "No martingale or grid strategies",
  "No account sharing or copying farms",
  "No tick-scalping exploitation",
  "No third-party signal abuse"
];
const tips = [
  {
    icon: Target,
    title: "Respect the Drawdown Rules",
    tip: "Keep your daily loss under 4% (not 5%) so you have a safety buffer. The 5% daily limit is the ceiling, not your target stop."
  },
  {
    icon: Lightbulb,
    title: "Trade Consistently, Not Aggressively",
    tip: "Phase 2 tests your consistency. Aim for 1-2% per day and hit the profit target over 7-10 trading days rather than trying to do it in 2 days."
  },
  {
    icon: Trophy,
    title: "Journal Every Trade",
    tip: "Evaluators look for disciplined traders. A consistent win rate of 55%+ with positive R:R ratio demonstrates professional-grade trading to our risk team."
  }
];
const faqs = [
  {
    q: "What is the minimum number of trading days?",
    a: "Both Phase 1 and Phase 2 require a minimum of 5 trading days each. A trading day counts when you open at least one trade. There is no maximum time limit to complete each phase."
  },
  {
    q: "Can I use EAs and automated trading?",
    a: "Yes, Expert Advisors and automated strategies are fully permitted. Scalping, news trading, swing trading, and hedging are all allowed. Martingale and grid strategies are the only exception."
  },
  {
    q: "What happens if I fail Phase 1?",
    a: "If you breach the drawdown limits or fail to reach the profit target within the time limit, your challenge resets. Gold and Platinum tiers include one free reset. Additional resets can be purchased."
  },
  {
    q: "How long does it take to get funded after passing?",
    a: "After passing Phase 2, your funded account is typically activated within 24-48 hours. You will receive MT5 credentials via email once the risk team reviews your trading history."
  },
  {
    q: "Can I scale my challenge account after getting funded?",
    a: "Yes! Our scaling plan allows consistent traders to grow their accounts up to $1,000,000. After achieving 10% profit in 3 consecutive months, your account size increases by 25%."
  }
];
function FAQItem({ item }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-white/10 rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen(!open),
        className: "w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/3 transition-smooth",
        "data-ocid": "challenge.faq_item",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm pr-4", children: item.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: `w-4 h-4 text-brand-gold flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-5 border-t border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pt-4 text-sm text-foreground/60 leading-relaxed", children: item.a }) })
  ] });
}
function ChallengeAccountsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-hero py-24 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3 h-3" }),
            " 2-Phase Evaluation · Scale to $1M"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "font-display font-black text-5xl sm:text-6xl mb-5",
          children: [
            "Prove Your Skills,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold block sm:inline", children: "Get Funded Up To $1M" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: "text-lg text-foreground/60 max-w-2xl mx-auto mb-8",
          children: "Pass our 2-phase evaluation at a fraction of the cost of instant funding. Prove your strategy, get funded, and scale to one million dollars."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "flex flex-wrap gap-3 justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#tiers",
                className: "btn-primary text-base px-8 py-4",
                "data-ocid": "challenge.hero_cta_button",
                children: "View Challenges"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/instant-funding",
                className: "btn-secondary text-base px-8 py-4 inline-flex items-center gap-2",
                "data-ocid": "challenge.view_instant_link",
                children: [
                  "Try Instant Funding ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tiers", className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl mb-3", children: [
          "Choose Your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Challenge" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-lg", children: "Lower cost. Higher reward. Proven path to funding." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: tiers.map((tier, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: `relative rounded-2xl p-7 flex flex-col ${tier.highlighted ? "bg-gradient-to-b from-brand-navy to-brand-navy/70 border-2 border-brand-gold/50" : "card-elevated"}`,
          "data-ocid": `challenge.tier.${i + 1}`,
          children: [
            tier.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-gold text-brand-black text-xs font-black", children: tier.badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground/40 uppercase tracking-widest mb-3", children: tier.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-black font-display text-brand-gold", children: tier.capital }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/40 mt-1", children: "Account Size" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black font-display", children: tier.cost }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/40", children: "entry fee" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 border-t border-white/10 pt-5 mb-6 flex-1", children: [
              ["Phase 1 Target", tier.phase1Target, false],
              ["Phase 2 Target", tier.phase2Target, false],
              ["Max Drawdown", tier.maxDrawdown, false],
              ["Daily Loss", tier.dailyLoss, false],
              ["Min Trading Days", tier.minDays, false],
              ["Profit Split", tier.profitSplit, true]
            ].map(([label, val, green]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex justify-between text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/50", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: green ? "text-brand-green font-semibold" : "font-medium",
                      children: val
                    }
                  )
                ]
              },
              String(label)
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-6", children: [
              "MT5 platform included",
              "Weekly payouts after funding",
              "Scaling plan available"
            ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-xs text-foreground/60",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-brand-green flex-shrink-0" }),
                  f
                ]
              },
              f
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: tier.highlighted ? "btn-primary text-sm py-3" : "btn-secondary text-sm py-3",
                "data-ocid": `challenge.tier_${i + 1}.start_button`,
                children: [
                  "Start ",
                  tier.name,
                  " Challenge"
                ]
              }
            )
          ]
        },
        tier.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-section-alt py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-3", children: [
          "The Two-Phase ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Process" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50", children: "Three stages, one goal: get you funded with real capital." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-6 relative", children: [
        {
          step: "Phase 1",
          title: "Prove Consistency",
          target: "8% Profit Target",
          desc: "Trade for minimum 5 days. Reach 8% profit while keeping within 5% daily and 10% max drawdown. No time limit.",
          color: "border-brand-gold/30"
        },
        {
          step: "Phase 2",
          title: "Confirm Strategy",
          target: "5% Profit Target",
          desc: "Achieve 5% profit in Phase 2 with minimum 5 trading days. This confirms your trading is disciplined and repeatable.",
          color: "border-brand-gold/50"
        },
        {
          step: "Funded!",
          title: "Real Capital",
          target: "Up to 90% Split",
          desc: "Pass both phases and receive your funded account within 24-48hrs. Trade with real capital and withdraw weekly.",
          color: "border-brand-green/40"
        }
      ].map((phase, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.12 },
          className: `card-elevated rounded-xl p-6 border-2 ${phase.color}`,
          "data-ocid": `challenge.phase.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-brand-gold font-black text-xs uppercase tracking-widest mb-2 font-display", children: phase.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-2 py-1 rounded bg-brand-gold/10 text-brand-gold text-xs font-bold mb-3", children: phase.target }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base mb-2", children: phase.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/50 leading-relaxed", children: phase.desc })
          ]
        },
        phase.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-3", children: [
          "Trading ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Rules" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50", children: "Transparent rules. No surprises. Trade freely within these parameters." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevated rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-brand-green" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-brand-green", children: "Allowed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: allowedRules.map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2.5 text-sm text-foreground/70",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" }),
                rule
              ]
            },
            rule
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevated rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-red-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-red-400", children: "Restricted" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: restrictedRules.map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2.5 text-sm text-foreground/70",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" }),
                rule
              ]
            },
            rule
          )) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-navy py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-3", children: [
        "3 Tips to",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Pass Your Challenge" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-6", children: tips.map((tip, i) => {
        const Icon = tip.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "card-elevated rounded-xl p-6",
            "data-ocid": `challenge.tip.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-brand-gold" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-brand-gold mb-2", children: tip.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/55 leading-relaxed", children: tip.tip })
            ]
          },
          tip.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-3", children: [
        "Challenge ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "FAQs" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "challenge.faq_list", children: faqs.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { item }, item.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16",
        style: {
          background: "linear-gradient(135deg, #d4af37 0%, #e8c84a 40%, #c9a227 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-3xl sm:text-4xl text-brand-black mb-4", children: "Start Your Challenge Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand-black/60 mb-8", children: "Prove your trading skills and get funded with real capital." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#tiers",
                className: "px-8 py-4 rounded-lg bg-brand-black text-brand-gold font-display font-bold text-base hover:bg-brand-navy transition-smooth shadow-xl",
                "data-ocid": "challenge.bottom_cta_button",
                children: "Pick Your Challenge"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/instant-funding",
                className: "px-8 py-4 rounded-lg border-2 border-brand-black/30 text-brand-black font-display font-bold text-base hover:bg-brand-black/10 transition-smooth",
                "data-ocid": "challenge.instant_funding_link",
                children: "Prefer Instant Funding?"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  ChallengeAccountsPage as default
};
