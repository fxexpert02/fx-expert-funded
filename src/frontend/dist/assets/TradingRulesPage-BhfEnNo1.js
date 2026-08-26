import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
import { S as Shield } from "./shield-lUrlHG6O.js";
import { C as CircleCheck } from "./circle-check-CWiMeYpG.js";
import { C as CircleX } from "./circle-x-t5D8I5dq.js";
import { C as ChevronRight } from "./chevron-right-CBLcwSVD.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const allowedInstruments = [
  {
    icon: "💱",
    name: "Forex Pairs",
    desc: "28 major & minor pairs including EUR/USD, GBP/USD, USD/JPY, USD/CAD and more"
  },
  {
    icon: "🥇",
    name: "Gold & Silver",
    desc: "XAUUSD (Gold) and XAGUSD (Silver) available on all account tiers"
  },
  {
    icon: "📈",
    name: "Stock Indices",
    desc: "US30 (Dow Jones), NAS100, SPX500, UK100, DAX40, and more global indices"
  },
  {
    icon: "₿",
    name: "Cryptocurrency",
    desc: "BTC, ETH, LTC, XRP available on Pro and Elite account tiers on MT5"
  }
];
const prohibitedStrategies = [
  {
    title: "Martingale & Grid Strategies",
    desc: "Strategies that exponentially increase position size after a loss to recover drawdown are not permitted and will result in account termination."
  },
  {
    title: "Account Copying Farms",
    desc: "Operating multiple funded accounts as a copying farm by mirroring trades across accounts to bypass risk limits is prohibited."
  },
  {
    title: "Exploiting Technical Glitches",
    desc: "Any trading that exploits pricing errors, latency arbitrage, or technical glitches in the platform is immediately disqualifying."
  }
];
const riskTableRows = [
  {
    rule: "Daily Loss Limit",
    value: "5%",
    detail: "From start-of-day balance"
  },
  {
    rule: "Max Drawdown",
    value: "10%",
    detail: "From initial account balance"
  },
  {
    rule: "Max Position Size",
    value: "5% per trade",
    detail: "Of account equity per single position"
  },
  {
    rule: "Leverage (Forex)",
    value: "1:100 max",
    detail: "Includes Gold and Silver"
  },
  {
    rule: "Leverage (Indices)",
    value: "1:50 max",
    detail: "All stock indices"
  },
  {
    rule: "Leverage (Crypto)",
    value: "1:10 max",
    detail: "BTC, ETH, LTC, XRP"
  },
  {
    rule: "Overnight Positions",
    value: "Allowed",
    detail: "Max 3% exposure at rollover"
  },
  {
    rule: "Weekend Holding",
    value: "Allowed",
    detail: "Standard swap rates apply"
  },
  {
    rule: "News Trading",
    value: "Allowed",
    detail: "30-min window before high-impact — use caution"
  }
];
const accountTypeRows = [
  {
    type: "Challenge Phase 1",
    target: "10%",
    drawdown: "10%",
    daily: "5%",
    minDays: "5 days",
    color: "text-brand-gold"
  },
  {
    type: "Challenge Phase 2",
    target: "5%",
    drawdown: "10%",
    daily: "5%",
    minDays: "5 days",
    color: "text-brand-gold"
  },
  {
    type: "Challenge Funded",
    target: "None",
    drawdown: "10%",
    daily: "5%",
    minDays: "None",
    color: "text-brand-green"
  },
  {
    type: "Instant Funding",
    target: "None",
    drawdown: "10%",
    daily: "5%",
    minDays: "None",
    color: "text-brand-green"
  },
  {
    type: "Prime Accounts",
    target: "None",
    drawdown: "12% (custom)",
    daily: "5–8% (custom)",
    minDays: "None",
    color: "text-purple-400"
  }
];
const violationSteps = [
  {
    step: "Warning",
    color: "text-brand-gold border-brand-gold/40 bg-brand-gold/5",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-brand-gold" }),
    scenarios: [
      "Daily loss limit breached once by under 1%",
      "Minor platform or parameter violation",
      "Minor overcrowding of positions"
    ]
  },
  {
    step: "Account Review",
    color: "text-orange-400 border-orange-400/40 bg-orange-400/5",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-orange-400" }),
    scenarios: [
      "Repeated daily loss limit warnings",
      "Suspected use of prohibited strategy",
      "Unusual trading pattern detected by risk team"
    ]
  },
  {
    step: "Account Termination",
    color: "text-destructive border-destructive/40 bg-destructive/5",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-destructive" }),
    scenarios: [
      "Max overall drawdown (10%) breached",
      "Confirmed use of martingale or grid strategies",
      "Account sharing or copying farm confirmed"
    ]
  }
];
function TradingRulesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Trading Rules & Guidelines | FX Expert Funded - Fair Prop Firm Rules" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        name: "description",
        content: "Read FX Expert Funded trading rules: 5% daily drawdown, 10% max drawdown, allowed instruments, prohibited strategies, MT5 platform requirements, and violation policy."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "gradient-hero py-24 border-b border-white/10 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-wider mb-6",
            "data-ocid": "rules.hero_badge",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
              " Transparent & Fair"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-6",
            children: [
              "Clear, Fair",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Trading Rules" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto",
            children: "We believe in simple, trader-friendly conditions with no hidden traps. Every rule exists to protect both traders and capital — not to disqualify you unfairly."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-brand-green mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm uppercase tracking-wider", children: "Allowed Instruments" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-2xl sm:text-3xl", children: "What You Can Trade" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: allowedInstruments.map((inst, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "card-elevated rounded-xl p-6",
          "data-ocid": `rules.instrument.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: inst.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm mb-1.5", children: inst.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/50 leading-relaxed", children: inst.desc })
          ]
        },
        inst.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 gradient-section-alt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-brand-gold mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm uppercase tracking-wider", children: "Risk Management" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-2xl sm:text-3xl", children: "Risk Rules & Limits" })
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
          "data-ocid": "rules.risk_table",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 bg-card/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3.5 text-xs font-bold text-foreground/40 uppercase tracking-wider border-b border-white/10", children: "Rule" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3.5 text-xs font-bold text-brand-gold uppercase tracking-wider border-b border-white/10 border-l border-white/10", children: "Limit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3.5 text-xs font-bold text-foreground/40 uppercase tracking-wider border-b border-white/10 border-l border-white/10", children: "Note" })
            ] }),
            riskTableRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `grid grid-cols-3 ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`,
                "data-ocid": `rules.risk_row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3.5 text-sm text-foreground/70 border-b border-white/5", children: row.rule }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3.5 text-sm font-bold text-foreground border-b border-white/5 border-l border-white/5", children: row.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3.5 text-xs text-foreground/50 border-b border-white/5 border-l border-white/5", children: row.detail })
                ]
              },
              row.rule
            ))
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-12",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-2xl sm:text-3xl", children: [
            "Rules by ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Account Type" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "card-elevated rounded-2xl overflow-hidden",
          "data-ocid": "rules.account_type_table",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-card/80", children: [
              "Account Type",
              "Profit Target",
              "Max Drawdown",
              "Daily Loss",
              "Min Days"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "px-5 py-4 text-left text-xs font-bold text-foreground/40 uppercase tracking-wider border-b border-white/10",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: accountTypeRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: i % 2 === 0 ? "" : "bg-white/[0.015]",
                "data-ocid": `rules.account_row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `px-5 py-4 font-bold text-sm border-b border-white/5 ${row.color}`,
                      children: row.type
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-foreground/70 border-b border-white/5", children: row.target }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-foreground/70 border-b border-white/5", children: row.drawdown }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-foreground/70 border-b border-white/5", children: row.daily }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-foreground/70 border-b border-white/5", children: row.minDays })
                ]
              },
              row.type
            )) })
          ] }) })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 gradient-section-alt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-destructive mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm uppercase tracking-wider", children: "Prohibited Strategies" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-2xl sm:text-3xl", children: "What Is Not Allowed" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: prohibitedStrategies.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "rounded-xl border border-destructive/20 bg-destructive/5 p-5 flex gap-4",
          "data-ocid": `rules.prohibited.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-destructive flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm mb-1 text-destructive", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/60 leading-relaxed", children: s.desc })
            ] })
          ]
        },
        s.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-2xl sm:text-3xl", children: [
            "MT5 Platform",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Requirements" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "grid sm:grid-cols-3 gap-5",
          children: [
            {
              icon: "🖥️",
              title: "Minimum Version",
              val: "MT5 Build 3815+",
              sub: "Any higher build is supported"
            },
            {
              icon: "🏦",
              title: "Compatible Brokers",
              val: "Our Designated Broker",
              sub: "Login credentials provided on signup"
            },
            {
              icon: "🌐",
              title: "VPS Recommended",
              val: "Windows VPS, 2GB+ RAM",
              sub: "Required for EA-based strategies"
            }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "card-elevated rounded-xl p-6 text-center",
              "data-ocid": `rules.mt5.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/40 uppercase tracking-wider mb-1", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm mb-1", children: item.val }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/50", children: item.sub })
              ]
            },
            item.title
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 gradient-section-alt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-2xl sm:text-3xl", children: [
              "Violation ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Policy" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 mt-2", children: "We follow a fair 3-step escalation before any permanent action." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: violationSteps.map((vs, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: `rounded-xl border p-6 ${vs.color}`,
          "data-ocid": `rules.violation.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              vs.icon,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-base", children: [
                "Step ",
                i + 1,
                ": ",
                vs.step
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: vs.scenarios.map((sc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 text-sm text-foreground/60",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 mt-0.5 flex-shrink-0 opacity-50" }),
                  sc
                ]
              },
              sc
            )) })
          ]
        },
        vs.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 gradient-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 text-brand-green mx-auto mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-4", children: [
            "Start with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Fair Rules Today" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/55 mb-8 max-w-xl mx-auto", children: "No hidden traps, no gotcha rules. Our conditions are designed to let you trade your strategy while protecting capital responsibly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/instant-funding",
                className: "btn-primary px-10 py-4 text-base inline-flex items-center justify-center",
                "data-ocid": "rules.cta_instant_button",
                children: "Get Instant Funding"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/challenge-accounts",
                className: "btn-secondary px-8 py-4 text-base inline-flex items-center justify-center",
                "data-ocid": "rules.cta_challenge_button",
                children: "Start a Challenge"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  TradingRulesPage as default
};
