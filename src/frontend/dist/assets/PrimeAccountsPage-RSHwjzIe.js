import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, T as TrendingUp, M as MessageCircle } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
import { C as Crown } from "./crown-C0_kuvfQ.js";
import { C as CircleCheck } from "./circle-check-CWiMeYpG.js";
import { S as Star } from "./star-CwtFj-te.js";
import { A as Award } from "./award-L7ZfnJgY.js";
import { U as Users } from "./users-gVwYfH7K.js";
import { Z as Zap } from "./zap-BGif2zWy.js";
import { S as Shield } from "./shield-lUrlHG6O.js";
import { C as Calendar } from "./calendar-DP3n2EW1.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
const primeTiers = [
  {
    name: "Silver Prime",
    price: "$799",
    period: "/mo",
    size: "$150,000",
    split: "85%",
    highlighted: false,
    badge: null,
    color: "silver",
    features: [
      "Dedicated Account Manager",
      "Priority Withdrawals (48hr)",
      "Custom Risk Parameters",
      "VIP Telegram Access",
      "All Instruments",
      "Weekly Payouts",
      "MT5 Platform",
      "1:100 Leverage"
    ]
  },
  {
    name: "Gold Prime",
    price: "$1,299",
    period: "/mo",
    size: "$250,000",
    split: "90%",
    highlighted: true,
    badge: "Most Popular",
    color: "gold",
    features: [
      "Senior Account Manager",
      "Priority Withdrawals (24hr)",
      "Custom Risk Parameters",
      "VIP Telegram Group",
      "Quarterly Strategy Calls",
      "All Instruments",
      "Weekly Payouts",
      "MT5 Platform"
    ]
  },
  {
    name: "Platinum Prime",
    price: "$2,499",
    period: "/mo",
    size: "$500,000",
    split: "92%",
    highlighted: false,
    badge: "Highest Capital",
    color: "platinum",
    features: [
      "Elite Account Manager",
      "Instant Withdrawals (24hr)",
      "Fully Custom Parameters",
      "Exclusive VIP Telegram",
      "Monthly Strategy Sessions",
      "All Instruments Unlocked",
      "Daily Payouts Available",
      "Custom Leverage Up to 1:200"
    ]
  }
];
const comparisonRows = [
  { label: "Capital Range", standard: "Up to $100K", prime: "$150K – $500K" },
  { label: "Profit Split", standard: "75–85%", prime: "85–92%" },
  { label: "Max Drawdown", standard: "10%", prime: "12% (custom)" },
  { label: "Daily Loss Limit", standard: "5%", prime: "5–8% (custom)" },
  { label: "Payout Speed", standard: "48–72hrs", prime: "24hrs or same day" },
  {
    label: "Account Manager",
    standard: "Team Support",
    prime: "Dedicated Manager"
  },
  { label: "Custom Risk Params", standard: "No", prime: "Yes" },
  { label: "VIP Telegram", standard: "No", prime: "Yes" },
  { label: "Strategy Calls", standard: "No", prime: "Quarterly / Monthly" },
  { label: "Support Level", standard: "Standard 24/7", prime: "VIP Priority" }
];
const premiumBenefits = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-brand-gold" }),
    title: "Dedicated Account Manager",
    desc: "Your personal account manager is available during market hours to help you with funding, withdrawals, risk queries, and any trading issues."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-brand-gold" }),
    title: "Priority Withdrawals (24hr)",
    desc: "Skip the queue. Prime members receive expedited payout processing — your withdrawal is handled within 24 business hours, guaranteed."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-brand-gold" }),
    title: "Custom Risk Parameters",
    desc: "Negotiate your own daily loss limit and max drawdown settings tailored to your trading style. Standard accounts cannot access this feature."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6 text-brand-gold" }),
    title: "VIP Telegram Group",
    desc: "Access our exclusive Prime trader community with real-time market signals, trade ideas, and direct communication with the risk management team."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-6 h-6 text-brand-gold" }),
    title: "Quarterly Strategy Calls",
    desc: "One-on-one video calls with our senior trading analysts to review your performance, refine your strategy, and optimize your account settings."
  }
];
const applicationSteps = [
  {
    step: "01",
    title: "Choose Your Prime Tier",
    desc: "Select Silver Prime ($150K), Gold Prime ($250K), or Platinum Prime ($500K) based on your capital needs."
  },
  {
    step: "02",
    title: "Complete Application",
    desc: "Fill out our short Prime Account application form with your trading background and preferred settings."
  },
  {
    step: "03",
    title: "Account Review (24hrs)",
    desc: "Our Prime team reviews your application within 24 hours. You'll receive a personal onboarding call."
  },
  {
    step: "04",
    title: "Activate & Start Trading",
    desc: "Account is activated with your custom parameters. Your dedicated manager contacts you on day one."
  }
];
function PrimeAccountsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Prime Funded Accounts - VIP Trading | FX Expert Funded" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        name: "description",
        content: "FX Expert Funded Prime accounts offer $150K–$500K capital, 85–92% profit split, dedicated account managers, priority withdrawals, and custom risk parameters. Apply today."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "gradient-hero py-24 border-b border-white/10 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-brand-navy/60 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-6",
            "data-ocid": "prime.hero_badge",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4 fill-brand-gold" }),
              "VIP Prime Accounts"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight",
            children: [
              "Elite Trading, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Exclusive Conditions" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-10",
            children: "Access institutional-grade funded accounts up to $500,000 with custom risk parameters, a dedicated account manager, and industry-leading 92% profit splits. For serious traders only."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "btn-primary text-base px-8 py-4",
                  "data-ocid": "prime.hero_apply_button",
                  children: "Apply for Prime Account"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/contact",
                  className: "btn-secondary text-base px-8 py-4 inline-flex items-center justify-center gap-2",
                  "data-ocid": "prime.hero_contact_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                    " Talk to Our Team"
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 gradient-section-alt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
              " Side-by-Side Comparison"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl", children: [
              "Prime vs ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Standard" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "card-elevated rounded-2xl overflow-hidden",
          "data-ocid": "prime.comparison_table",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 bg-card/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 font-bold text-sm text-foreground/50 uppercase tracking-widest border-b border-white/10", children: "Feature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 font-bold text-sm text-foreground/70 text-center border-b border-white/10 border-l border-white/10", children: "Standard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 font-bold text-sm text-brand-gold text-center border-b border-white/10 border-l border-white/10 bg-brand-gold/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5" }),
                " Prime"
              ] }) })
            ] }),
            comparisonRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `grid grid-cols-3 ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"}`,
                "data-ocid": `prime.comparison_row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-sm text-foreground/60 border-b border-white/5", children: row.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-sm text-center border-b border-white/5 border-l border-white/5", children: row.standard }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-sm text-brand-gold font-semibold text-center border-b border-white/5 border-l border-white/5 bg-brand-gold/[0.03]", children: row.prime })
                ]
              },
              row.label
            ))
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-3", children: [
              "Choose Your ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Prime Tier" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 max-w-xl mx-auto", children: "All Prime accounts include a dedicated manager, priority withdrawals, and custom parameters." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-6", children: primeTiers.map((tier, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.12 },
          className: `relative rounded-2xl p-7 flex flex-col ${tier.highlighted ? "bg-gradient-to-b from-brand-navy to-brand-navy/70 border-2 border-brand-gold/50 animate-pulse-glow-gold" : "card-elevated"}`,
          "data-ocid": `prime.tier.${i + 1}`,
          children: [
            tier.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold ${tier.highlighted ? "bg-brand-gold text-brand-black" : "bg-foreground/10 text-foreground/70 border border-white/20"}`,
                children: tier.badge
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Crown,
                {
                  className: `w-5 h-5 ${tier.highlighted ? "text-brand-gold" : "text-foreground/30"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground/40 uppercase tracking-widest", children: tier.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-black font-display text-brand-gold", children: tier.price }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/40 mb-1 text-sm", children: tier.period })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mt-2", children: tier.size }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/40 mt-0.5", children: "Funded Capital" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-brand-green text-xl font-black font-display", children: tier.split }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/50", children: "Profit Split" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 flex-1 mb-7", children: tier.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2.5 text-sm text-foreground/70",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-brand-green flex-shrink-0" }),
                  f
                ]
              },
              f
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: tier.highlighted ? "btn-primary py-3.5 text-sm" : "btn-secondary py-3.5 text-sm",
                "data-ocid": `prime.tier_${i + 1}.apply_button`,
                children: [
                  "Apply for ",
                  tier.name
                ]
              }
            )
          ]
        },
        tier.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 gradient-section-alt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-brand-gold" }),
              " Exclusive Prime Benefits"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl", children: [
              "Why Traders Choose",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Prime" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: premiumBenefits.map((benefit, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "card-elevated rounded-xl p-6",
          "data-ocid": `prime.benefit.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4", children: benefit.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base mb-2", children: benefit.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/55 leading-relaxed", children: benefit.desc })
          ]
        },
        benefit.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-14",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl", children: [
            "How to Become a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Prime Member" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: applicationSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "text-center",
          "data-ocid": `prime.step.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-brand-gold/10 border-2 border-brand-gold/30 flex items-center justify-center mx-auto mb-4 font-display font-black text-brand-gold text-lg", children: step.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm mb-2", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/50 leading-relaxed", children: step.desc })
          ]
        },
        step.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 gradient-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-12 h-12 text-brand-gold mx-auto mb-6 fill-brand-gold/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-4", children: [
            "Ready for",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Elite Funding?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/55 mb-8 max-w-xl mx-auto", children: "Join our exclusive Prime program and trade with up to $500,000 in capital, 92% profit split, and a dedicated account manager backing your every move." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "btn-primary px-10 py-4 text-base",
                "data-ocid": "prime.cta_apply_button",
                children: "Apply for Prime Account"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "btn-secondary px-8 py-4 text-base inline-flex items-center justify-center gap-2",
                "data-ocid": "prime.cta_contact_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4" }),
                  " Learn More"
                ]
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  PrimeAccountsPage as default
};
