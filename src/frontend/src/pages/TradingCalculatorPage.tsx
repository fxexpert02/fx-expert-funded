import { Link } from "@tanstack/react-router";
import { Calculator, RefreshCw, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const CURRENCY_PAIRS = [
  { value: "EURUSD", label: "EUR/USD", pipSize: 0.0001, contractSize: 100000 },
  { value: "GBPUSD", label: "GBP/USD", pipSize: 0.0001, contractSize: 100000 },
  {
    value: "XAUUSD",
    label: "XAU/USD (Gold)",
    pipSize: 0.01,
    contractSize: 100,
  },
  { value: "BTCUSD", label: "BTC/USD (Bitcoin)", pipSize: 1, contractSize: 1 },
];

const tips = [
  {
    icon: "🛡️",
    title: "Risk 1–2% Max Per Trade",
    desc: "Professional traders never risk more than 1–2% of their account balance on a single trade. Consistent small risks compound over time.",
  },
  {
    icon: "⚖️",
    title: "Aim for 1:2+ Risk/Reward",
    desc: "A minimum 1:2 risk-to-reward ratio means you only need to win 34% of trades to stay profitable. Let winners run, cut losers fast.",
  },
  {
    icon: "🧠",
    title: "Never Risk More Than You Afford",
    desc: "Emotional trading kills accounts. Only risk capital you can afford to lose, and stick strictly to your pre-defined stop loss levels.",
  },
];

function formatNum(n: number, decimals = 2) {
  if (!Number.isFinite(n) || Number.isNaN(n)) return "—";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function TradingCalculatorPage() {
  const [balance, setBalance] = useState("10000");
  const [risk, setRisk] = useState("1");
  const [entry, setEntry] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [pair, setPair] = useState("EURUSD");

  const [results, setResults] = useState({
    positionSize: 0,
    riskAmount: 0,
    potentialProfit: 0,
    rrRatio: 0,
    pipValue: 0,
    valid: false,
  });

  useEffect(() => {
    const b = Number.parseFloat(balance);
    const r = Number.parseFloat(risk);
    const e = Number.parseFloat(entry);
    const sl = Number.parseFloat(stopLoss);
    const tp = Number.parseFloat(takeProfit);
    const pairData = CURRENCY_PAIRS.find((p) => p.value === pair)!;

    if (!b || !r || !e || !sl || b <= 0 || r <= 0 || e <= 0 || sl <= 0) {
      setResults({
        positionSize: 0,
        riskAmount: 0,
        potentialProfit: 0,
        rrRatio: 0,
        pipValue: 0,
        valid: false,
      });
      return;
    }

    const riskAmount = (b * r) / 100;
    const slDistance = Math.abs(e - sl);
    const slPips = slDistance / pairData.pipSize;

    if (slPips === 0) {
      setResults({
        positionSize: 0,
        riskAmount,
        potentialProfit: 0,
        rrRatio: 0,
        pipValue: 0,
        valid: false,
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
      valid: true,
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

  return (
    <div className="bg-background">
      <title>
        Forex Trading Calculator - Position Size &amp; Risk Calculator | FX
        Expert Funded
      </title>

      {/* Hero */}
      <section className="gradient-hero py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-semibold text-brand-gold mb-5"
          >
            <Calculator className="w-3.5 h-3.5" />
            Free Professional Tool
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl mb-4"
          >
            Professional{" "}
            <span className="text-gradient-gold">Trading Calculator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-xl mx-auto"
          >
            Calculate position size, risk amount, and potential profit with
            precision. Trade smarter with institutional-grade tools — free.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="gradient-section-alt py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="card-elevated rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {/* LEFT: Inputs */}
              <div className="p-8">
                <div className="flex items-center gap-2.5 mb-7">
                  <Calculator className="w-5 h-5 text-brand-gold" />
                  <h2 className="font-display font-bold text-lg">
                    Trade Parameters
                  </h2>
                </div>
                <div className="space-y-5">
                  {/* Currency Pair */}
                  <div>
                    <label
                      htmlFor="calc-pair"
                      className="block text-xs font-semibold text-foreground/50 mb-2"
                    >
                      Currency Pair
                    </label>
                    <select
                      id="calc-pair"
                      value={pair}
                      onChange={(e) => setPair(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-white/15 text-sm text-foreground focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                      data-ocid="calculator.pair_select"
                    >
                      {CURRENCY_PAIRS.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Account Balance */}
                  <div>
                    <label
                      htmlFor="calc-balance"
                      className="block text-xs font-semibold text-foreground/50 mb-2"
                    >
                      Account Balance ($)
                    </label>
                    <input
                      id="calc-balance"
                      type="number"
                      min="100"
                      value={balance}
                      onChange={(e) => setBalance(e.target.value)}
                      placeholder="e.g. 10000"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                      data-ocid="calculator.balance_input"
                    />
                  </div>

                  {/* Risk % with slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label
                        htmlFor="calc-risk"
                        className="text-xs font-semibold text-foreground/50"
                      >
                        Risk Per Trade
                      </label>
                      <span className="text-sm font-bold text-brand-gold">
                        {risk}%
                      </span>
                    </div>
                    <input
                      id="calc-risk"
                      type="range"
                      min="0.5"
                      max="5"
                      step="0.5"
                      value={risk}
                      onChange={(e) => setRisk(e.target.value)}
                      className="w-full h-2 rounded-full accent-[#d4af37] bg-muted cursor-pointer mb-2"
                      data-ocid="calculator.risk_slider"
                    />
                    <div className="flex justify-between text-xs text-foreground/30">
                      <span>0.5%</span>
                      <span>1%</span>
                      <span>2%</span>
                      <span>3%</span>
                      <span>4%</span>
                      <span>5%</span>
                    </div>
                  </div>

                  {/* Price inputs */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label
                        htmlFor="calc-entry"
                        className="block text-xs font-semibold text-foreground/50 mb-2"
                      >
                        Entry Price
                      </label>
                      <input
                        id="calc-entry"
                        type="number"
                        step="any"
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                        placeholder="Entry"
                        className="w-full px-3 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                        data-ocid="calculator.entry_input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="calc-sl"
                        className="block text-xs font-semibold text-foreground/50 mb-2"
                      >
                        Stop Loss
                      </label>
                      <input
                        id="calc-sl"
                        type="number"
                        step="any"
                        value={stopLoss}
                        onChange={(e) => setStopLoss(e.target.value)}
                        placeholder="SL"
                        className="w-full px-3 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-[#ef4444]/50 border-red-500/20 transition-colors-fast"
                        data-ocid="calculator.stop_loss_input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="calc-tp"
                        className="block text-xs font-semibold text-foreground/50 mb-2"
                      >
                        Take Profit
                      </label>
                      <input
                        id="calc-tp"
                        type="number"
                        step="any"
                        value={takeProfit}
                        onChange={(e) => setTakeProfit(e.target.value)}
                        placeholder="TP"
                        className="w-full px-3 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-green/50 transition-colors-fast"
                        data-ocid="calculator.take_profit_input"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn-secondary flex-1 py-3 text-sm flex items-center justify-center gap-2"
                      data-ocid="calculator.reset_button"
                    >
                      <RefreshCw className="w-4 h-4" /> Reset
                    </button>
                    <div
                      className="flex-1 py-3 text-sm btn-primary text-center flex items-center justify-center gap-2"
                      data-ocid="calculator.calculate_indicator"
                    >
                      <TrendingUp className="w-4 h-4" /> Live Calc
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Results */}
              <div className="p-8 gradient-navy">
                <div className="flex items-center gap-2.5 mb-7">
                  <TrendingUp className="w-5 h-5 text-brand-gold" />
                  <h2 className="font-display font-bold text-lg">
                    Live Results
                  </h2>
                  {results.valid && (
                    <span className="ml-auto text-xs px-2 py-1 rounded-full bg-brand-green/15 text-brand-green font-semibold">
                      ✓ Calculated
                    </span>
                  )}
                </div>
                <div className="space-y-4">
                  {(
                    [
                      {
                        label: "Position Size",
                        value: results.valid
                          ? `${formatNum(results.positionSize, 4)} lots`
                          : "—",
                        highlight: true,
                      },
                      {
                        label: "Risk Amount",
                        value: results.valid
                          ? `$${formatNum(results.riskAmount)}`
                          : "—",
                        color: "text-red-400",
                      },
                      {
                        label: "Potential Profit",
                        value:
                          results.valid && results.potentialProfit > 0
                            ? `$${formatNum(results.potentialProfit)}`
                            : "—",
                        color: "text-brand-green",
                      },
                      {
                        label: "Risk:Reward Ratio",
                        value:
                          results.valid && results.rrRatio > 0
                            ? `${formatNum(results.rrRatio, 1)}:1`
                            : "—",
                        color:
                          results.rrRatio >= 2
                            ? "text-brand-green"
                            : "text-foreground",
                      },
                      {
                        label: "Pip Value",
                        value: results.valid
                          ? `$${formatNum(results.pipValue)}`
                          : "—",
                      },
                    ] as Array<{
                      label: string;
                      value: string;
                      highlight?: boolean;
                      color?: string;
                    }>
                  ).map((item, i) => (
                    <div
                      key={item.label}
                      className={`flex justify-between items-center px-4 py-3.5 rounded-xl ${
                        item.highlight
                          ? "bg-brand-gold/10 border border-brand-gold/25"
                          : "bg-muted/40 border border-white/8"
                      }`}
                      data-ocid={`calculator.result.${i + 1}`}
                    >
                      <span className="text-sm text-foreground/60">
                        {item.label}
                      </span>
                      <span
                        className={`font-display font-bold text-lg ${
                          item.highlight
                            ? "text-brand-gold"
                            : (item.color ?? "text-foreground")
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                {!results.valid && (
                  <p className="text-xs text-foreground/30 text-center mt-6">
                    Enter entry price and stop loss to see results.
                  </p>
                )}
                {results.valid &&
                  results.rrRatio > 0 &&
                  results.rrRatio < 2 && (
                    <p className="text-xs text-yellow-400/70 text-center mt-4">
                      ⚠️ R:R ratio below 2:1 — consider adjusting your targets.
                    </p>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-black text-2xl text-center mb-8">
            Risk Management <span className="text-gradient-gold">Tips</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {tips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated rounded-xl p-6"
                data-ocid={`calculator.tip_card.${i + 1}`}
              >
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="font-bold text-sm mb-2 text-brand-gold">
                  {tip.title}
                </h3>
                <p className="text-xs text-foreground/55 leading-relaxed">
                  {tip.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-section-alt py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-black text-3xl mb-4">
            Ready to Trade with{" "}
            <span className="text-gradient-gold">Professional Tools?</span>
          </h2>
          <p className="text-foreground/50 mb-8">
            Apply your calculations to a real funded account. No demo, no limits
            — trade with our capital.
          </p>
          <Link
            to="/instant-funding"
            className="btn-primary text-base px-10 py-4"
            data-ocid="calculator.cta_button"
          >
            Get Instant Funded Account
          </Link>
        </div>
      </section>
    </div>
  );
}
