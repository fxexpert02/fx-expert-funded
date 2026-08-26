import { c as createLucideIcon, j as jsxRuntimeExports, T as TrendingUp, L as Link, r as reactExports, C as ChevronDown } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
import { Z as Zap } from "./zap-BGif2zWy.js";
import { A as ArrowRight } from "./arrow-right-DtQfokYj.js";
import { C as Clock } from "./clock-C5tE6HL9.js";
import { C as ChartColumn } from "./chart-column-DKvI8oyn.js";
import { C as CircleCheck } from "./circle-check-CWiMeYpG.js";
import { S as Shield } from "./shield-lUrlHG6O.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode);
const tiers = [
  {
    id: "starter",
    name: "Starter",
    capital: "$10,000",
    cost: "$99",
    profitSplit: "80%",
    maxDrawdown: "10%",
    dailyLoss: "5%",
    leverage: "1:100",
    platform: "MT5",
    highlighted: false,
    badge: null
  },
  {
    id: "growth",
    name: "Growth",
    capital: "$25,000",
    cost: "$199",
    profitSplit: "85%",
    maxDrawdown: "10%",
    dailyLoss: "5%",
    leverage: "1:100",
    platform: "MT5",
    highlighted: true,
    badge: "Most Popular"
  },
  {
    id: "professional",
    name: "Professional",
    capital: "$50,000",
    cost: "$349",
    profitSplit: "88%",
    maxDrawdown: "10%",
    dailyLoss: "5%",
    leverage: "1:100",
    platform: "MT5",
    highlighted: false,
    badge: null
  },
  {
    id: "elite",
    name: "Elite",
    capital: "$100,000",
    cost: "$599",
    profitSplit: "90%",
    maxDrawdown: "10%",
    dailyLoss: "5%",
    leverage: "1:100",
    platform: "MT5",
    highlighted: false,
    badge: null
  }
];
const benefits = [
  {
    icon: Zap,
    title: "No Challenge Required",
    desc: "Skip the evaluation entirely. Pay once, start trading the same day."
  },
  {
    icon: Clock,
    title: "Same-Day Setup",
    desc: "MT5 credentials delivered within minutes of payment confirmation."
  },
  {
    icon: ChartColumn,
    title: "Weekly Withdrawals",
    desc: "Request your profits every 7 days. Processed within 24-48 hours."
  },
  {
    icon: TrendingUp,
    title: "Real MT5 Markets",
    desc: "Live accounts with real spreads, real liquidity, real conditions."
  },
  {
    icon: CreditCard,
    title: "Up to 90% Profit Split",
    desc: "Elite tier traders keep 90% of all profits. Industry-leading rates."
  }
];
const steps = [
  {
    num: "01",
    title: "Choose Account",
    desc: "Select your preferred capital size and pay a one-time activation fee."
  },
  {
    num: "02",
    title: "Complete Verification",
    desc: "Quick KYC verification to comply with our global standards."
  },
  {
    num: "03",
    title: "Start Trading",
    desc: "Receive your MT5 credentials and begin trading immediately."
  },
  {
    num: "04",
    title: "Get Paid Weekly",
    desc: "Submit withdrawal requests weekly. Paid in 24-48 business hours."
  }
];
const faqs = [
  {
    q: "Do I need to pass any evaluation?",
    a: "No. Instant Funding accounts require zero evaluation. You pay a one-time fee and your account is activated immediately. No profit targets, no evaluation phases."
  },
  {
    q: "How long does account setup take?",
    a: "Most accounts are activated within 15-30 minutes of payment. You will receive your MT5 login credentials via email. In rare cases it can take up to 2 hours."
  },
  {
    q: "Can I scale my instant funding account?",
    a: "Yes! After achieving 10% profit in 3 consecutive months, your account size is automatically increased by 25%, up to a maximum of $1,000,000."
  },
  {
    q: "What is the drawdown rule?",
    a: "You have a 5% daily loss limit and a 10% maximum drawdown from your initial balance. These are calculated from the starting balance, not a rolling high watermark."
  },
  {
    q: "Which instruments can I trade?",
    a: "All tiers include Forex (all major/minor pairs) and Gold. Growth and above include Indices. Elite tier includes all instruments including crypto and commodities."
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
        "data-ocid": "instant_funding.faq_item",
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
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-5 text-sm text-foreground/60 leading-relaxed border-t border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pt-4", children: item.a }) })
  ] });
}
function InstantFundingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-hero py-24 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" }),
            " No Evaluation · No Challenge"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "font-display font-black text-5xl sm:text-6xl mb-5",
          children: [
            "Get Instant Access to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Funded Accounts" })
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
          children: "No challenge. No waiting. Purchase your funded account and start trading real capital today with weekly payouts and up to 90% profit split."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#pricing",
              className: "btn-primary inline-flex items-center gap-2 text-base px-8 py-4",
              "data-ocid": "instant_funding.hero_cta_button",
              children: [
                "View Pricing ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 gradient-section-alt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-3", children: [
        "Why Instant Funding?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "5 Key Benefits" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-5", children: benefits.map((b, i) => {
        const Icon = b.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.07 },
            className: "card-elevated rounded-xl p-5 text-center",
            "data-ocid": `instant_funding.benefit.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-brand-gold" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm mb-2 text-brand-gold", children: b.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/50 leading-relaxed", children: b.desc })
            ]
          },
          b.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl mb-3", children: [
          "Choose Your",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Account Size" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-lg", children: "One-time fee. No monthly charges. No hidden costs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: tiers.map((tier, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: `relative rounded-2xl p-7 flex flex-col ${tier.highlighted ? "bg-gradient-to-b from-brand-navy to-brand-navy/70 border-2 border-brand-gold/50" : "card-elevated"}`,
          "data-ocid": `instant_funding.tier.${i + 1}`,
          children: [
            tier.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-gold text-brand-black text-xs font-black", children: tier.badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground/40 uppercase tracking-widest mb-3", children: tier.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-black font-display text-brand-gold", children: tier.capital }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/40 mt-1", children: "Funded Account" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black font-display", children: tier.cost }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/40", children: "one-time" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 border-t border-white/10 pt-5 mb-6 flex-1", children: [
              ["Profit Split", tier.profitSplit, true],
              ["Max Drawdown", tier.maxDrawdown, false],
              ["Daily Loss Limit", tier.dailyLoss, false],
              ["Leverage", tier.leverage, false],
              ["Platform", tier.platform, false],
              ["Payouts", "Weekly", false]
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
              "No challenge required",
              "Instant activation",
              "MT5 platform included",
              "Weekly withdrawals"
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
                "data-ocid": `instant_funding.tier_${i + 1}.purchase_button`,
                children: [
                  "Get ",
                  tier.capital,
                  " Account"
                ]
              }
            )
          ]
        },
        tier.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 text-center text-sm text-foreground/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 inline mr-1.5 text-brand-green" }),
        "All purchases are secured. Instant account access after payment verification."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-section-alt py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-3", children: [
          "How It ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Works" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50", children: "Four simple steps from purchase to first payout." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "card-elevated rounded-xl p-6 text-center relative",
          "data-ocid": `instant_funding.step.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-brand-gold text-sm", children: s.num }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm mb-2", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/50 leading-relaxed", children: s.desc }),
            i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-10 -right-3 w-6 text-brand-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" }) })
          ]
        },
        s.num
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-3", children: [
        "Frequently Asked",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Questions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "instant_funding.faq_list", children: faqs.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { item }, item.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-navy py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-4", children: [
        "Ready to Start Trading",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Instantly?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 mb-8", children: "Join 15,000+ traders. Purchase your funded account and trade real capital today." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#pricing",
            className: "btn-primary text-base px-8 py-4",
            "data-ocid": "instant_funding.bottom_cta_button",
            children: "Get Funded Now"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/challenge-accounts",
            className: "btn-secondary text-base px-8 py-4 inline-flex items-center gap-2",
            "data-ocid": "instant_funding.view_challenges_link",
            children: [
              "View Challenge Accounts ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  InstantFundingPage as default
};
