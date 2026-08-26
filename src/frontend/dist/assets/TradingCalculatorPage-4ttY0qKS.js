import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, T as TrendingUp, L as Link } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
const CURRENCY_PAIRS = [
  { value: "EURUSD", label: "EUR/USD", pipSize: 1e-4, contractSize: 1e5 },
  { value: "GBPUSD", label: "GBP/USD", pipSize: 1e-4, contractSize: 1e5 },
  {
    value: "XAUUSD",
    label: "XAU/USD (Gold)",
    pipSize: 0.01,
    contractSize: 100
  },
  { value: "BTCUSD", label: "BTC/USD (Bitcoin)", pipSize: 1, contractSize: 1 }
];
const tips = [
  {
    icon: "🛡️",
    title: "Risk 1–2% Max Per Trade",
    desc: "Professional traders never risk more than 1–2% of their account balance on a single trade. Consistent small risks compound over time."
  },
  {
    icon: "⚖️",
    title: "Aim for 1:2+ Risk/Reward",
    desc: "A minimum 1:2 risk-to-reward ratio means you only need to win 34% of trades to stay profitable. Let winners run, cut losers fast."
  },
  {
    icon: "🧠",
    title: "Never Risk More Than You Afford",
    desc: "Emotional trading kills accounts. Only risk capital you can afford to lose, and stick strictly to your pre-defined stop loss levels."
  }
];
function formatNum(n, decimals = 2) {
  if (!Number.isFinite(n) || Number.isNaN(n)) return "—";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}
function TradingCalculatorPage() {
  const [balance, setBalance] = reactExports.useState("10000");
  const [risk, setRisk] = reactExports.useState("1");
  const [entry, setEntry] = reactExports.useState("");
  const [stopLoss, setStopLoss] = reactExports.useState("");
  const [takeProfit, setTakeProfit] = reactExports.useState("");
  const [pair, setPair] = reactExports.useState("EURUSD");
  const [results, setResults] = reactExports.useState({
    positionSize: 0,
    riskAmount: 0,
    potentialProfit: 0,
    rrRatio: 0,
    pipValue: 0,
    valid: false
  });
  reactExports.useEffect(() => {
    const b = Number.parseFloat(balance);
    const r = Number.parseFloat(risk);
    const e = Number.parseFloat(entry);
    const sl = Number.parseFloat(stopLoss);
    const tp = Number.parseFloat(takeProfit);
    const pairData = CURRENCY_PAIRS.find((p) => p.value === pair);
    if (!b || !r || !e || !sl || b <= 0 || r <= 0 || e <= 0 || sl <= 0) {
      setResults({
        positionSize: 0,
        riskAmount: 0,
        potentialProfit: 0,
        rrRatio: 0,
        pipValue: 0,
        valid: false
      });
      return;
    }
    const riskAmount = b * r / 100;
    const slDistance = Math.abs(e - sl);
    const slPips = slDistance / pairData.pipSize;
    if (slPips === 0) {
      setResults({
        positionSize: 0,
        riskAmount,
        potentialProfit: 0,
        rrRatio: 0,
        pipValue: 0,
        valid: false
      });
      return;
    }
    const pipValue = pairData.pipSize * pairData.contractSize;
    const positionSize = riskAmount / (slPips * pipValue);
    let potentialProfit = 0;
    let rrRatio = 0;
    if (tp && tp > 0) {
      const tpDistance = Math.abs(tp - e);
      const tpPips = tpDistance / pairData.pipSize;
      potentialProfit = tpPips * pipValue * positionSize;
      rrRatio = slDistance > 0 ? tpDistance / slDistance : 0;
    }
    setResults({
      positionSize,
      riskAmount,
      potentialProfit,
      rrRatio,
      pipValue: pipValue * positionSize,
      valid: true
    });
  }, [balance, risk, entry, stopLoss, takeProfit, pair]);
  function handleReset() {
    setBalance("10000");
    setRisk("1");
    setEntry("");
    setStopLoss("");
    setTakeProfit("");
    setPair("EURUSD");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Forex Trading Calculator - Position Size & Risk Calculator | FX Expert Funded" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-hero py-16 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-semibold text-brand-gold mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-3.5 h-3.5" }),
            "Free Professional Tool"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "font-display font-black text-5xl sm:text-6xl mb-4",
          children: [
            "Professional",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Trading Calculator" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: "text-lg text-foreground/60 max-w-xl mx-auto",
          children: "Calculate position size, risk amount, and potential profit with precision. Trade smarter with institutional-grade tools — free."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-section-alt py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-elevated rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5 text-brand-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg", children: "Trade Parameters" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "calc-pair",
                className: "block text-xs font-semibold text-foreground/50 mb-2",
                children: "Currency Pair"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: "calc-pair",
                value: pair,
                onChange: (e) => setPair(e.target.value),
                className: "w-full px-4 py-3 rounded-lg bg-muted border border-white/15 text-sm text-foreground focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
                "data-ocid": "calculator.pair_select",
                children: CURRENCY_PAIRS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.value, children: p.label }, p.value))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "calc-balance",
                className: "block text-xs font-semibold text-foreground/50 mb-2",
                children: "Account Balance ($)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "calc-balance",
                type: "number",
                min: "100",
                value: balance,
                onChange: (e) => setBalance(e.target.value),
                placeholder: "e.g. 10000",
                className: "w-full px-4 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
                "data-ocid": "calculator.balance_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "calc-risk",
                  className: "text-xs font-semibold text-foreground/50",
                  children: "Risk Per Trade"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-brand-gold", children: [
                risk,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "calc-risk",
                type: "range",
                min: "0.5",
                max: "5",
                step: "0.5",
                value: risk,
                onChange: (e) => setRisk(e.target.value),
                className: "w-full h-2 rounded-full accent-[#d4af37] bg-muted cursor-pointer mb-2",
                "data-ocid": "calculator.risk_slider"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-foreground/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0.5%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "3%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "4%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "5%" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "calc-entry",
                  className: "block text-xs font-semibold text-foreground/50 mb-2",
                  children: "Entry Price"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "calc-entry",
                  type: "number",
                  step: "any",
                  value: entry,
                  onChange: (e) => setEntry(e.target.value),
                  placeholder: "Entry",
                  className: "w-full px-3 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
                  "data-ocid": "calculator.entry_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "calc-sl",
                  className: "block text-xs font-semibold text-foreground/50 mb-2",
                  children: "Stop Loss"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "calc-sl",
                  type: "number",
                  step: "any",
                  value: stopLoss,
                  onChange: (e) => setStopLoss(e.target.value),
                  placeholder: "SL",
                  className: "w-full px-3 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-[#ef4444]/50 border-red-500/20 transition-colors-fast",
                  "data-ocid": "calculator.stop_loss_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "calc-tp",
                  className: "block text-xs font-semibold text-foreground/50 mb-2",
                  children: "Take Profit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "calc-tp",
                  type: "number",
                  step: "any",
                  value: takeProfit,
                  onChange: (e) => setTakeProfit(e.target.value),
                  placeholder: "TP",
                  className: "w-full px-3 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-green/50 transition-colors-fast",
                  "data-ocid": "calculator.take_profit_input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleReset,
                className: "btn-secondary flex-1 py-3 text-sm flex items-center justify-center gap-2",
                "data-ocid": "calculator.reset_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
                  " Reset"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-1 py-3 text-sm btn-primary text-center flex items-center justify-center gap-2",
                "data-ocid": "calculator.calculate_indicator",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
                  " Live Calc"
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 gradient-navy", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-brand-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg", children: "Live Results" }),
          results.valid && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs px-2 py-1 rounded-full bg-brand-green/15 text-brand-green font-semibold", children: "✓ Calculated" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
          {
            label: "Position Size",
            value: results.valid ? `${formatNum(results.positionSize, 4)} lots` : "—",
            highlight: true
          },
          {
            label: "Risk Amount",
            value: results.valid ? `$${formatNum(results.riskAmount)}` : "—",
            color: "text-red-400"
          },
          {
            label: "Potential Profit",
            value: results.valid && results.potentialProfit > 0 ? `$${formatNum(results.potentialProfit)}` : "—",
            color: "text-brand-green"
          },
          {
            label: "Risk:Reward Ratio",
            value: results.valid && results.rrRatio > 0 ? `${formatNum(results.rrRatio, 1)}:1` : "—",
            color: results.rrRatio >= 2 ? "text-brand-green" : "text-foreground"
          },
          {
            label: "Pip Value",
            value: results.valid ? `$${formatNum(results.pipValue)}` : "—"
          }
        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex justify-between items-center px-4 py-3.5 rounded-xl ${item.highlight ? "bg-brand-gold/10 border border-brand-gold/25" : "bg-muted/40 border border-white/8"}`,
            "data-ocid": `calculator.result.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/60", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `font-display font-bold text-lg ${item.highlight ? "text-brand-gold" : item.color ?? "text-foreground"}`,
                  children: item.value
                }
              )
            ]
          },
          item.label
        )) }),
        !results.valid && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/30 text-center mt-6", children: "Enter entry price and stop loss to see results." }),
        results.valid && results.rrRatio > 0 && results.rrRatio < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-yellow-400/70 text-center mt-4", children: "⚠️ R:R ratio below 2:1 — consider adjusting your targets." })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-2xl text-center mb-8", children: [
        "Risk Management ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Tips" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: tips.map((tip, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "card-elevated rounded-xl p-6",
          "data-ocid": `calculator.tip_card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: tip.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm mb-2 text-brand-gold", children: tip.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/55 leading-relaxed", children: tip.desc })
          ]
        },
        tip.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-section-alt py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl mb-4", children: [
        "Ready to Trade with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Professional Tools?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 mb-8", children: "Apply your calculations to a real funded account. No demo, no limits — trade with our capital." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/instant-funding",
          className: "btn-primary text-base px-10 py-4",
          "data-ocid": "calculator.cta_button",
          children: "Get Instant Funded Account"
        }
      )
    ] }) })
  ] });
}
export {
  TradingCalculatorPage as default
};
