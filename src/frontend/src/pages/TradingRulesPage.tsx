import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Info,
  Shield,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";

const allowedInstruments = [
  {
    icon: "💱",
    name: "Forex Pairs",
    desc: "28 major & minor pairs including EUR/USD, GBP/USD, USD/JPY, USD/CAD and more",
  },
  {
    icon: "🥇",
    name: "Gold & Silver",
    desc: "XAUUSD (Gold) and XAGUSD (Silver) available on all account tiers",
  },
  {
    icon: "📈",
    name: "Stock Indices",
    desc: "US30 (Dow Jones), NAS100, SPX500, UK100, DAX40, and more global indices",
  },
  {
    icon: "₿",
    name: "Cryptocurrency",
    desc: "BTC, ETH, LTC, XRP available on Pro and Elite account tiers on MT5",
  },
];

const prohibitedStrategies = [
  {
    title: "Martingale & Grid Strategies",
    desc: "Strategies that exponentially increase position size after a loss to recover drawdown are not permitted and will result in account termination.",
  },
  {
    title: "Account Copying Farms",
    desc: "Operating multiple funded accounts as a copying farm by mirroring trades across accounts to bypass risk limits is prohibited.",
  },
  {
    title: "Exploiting Technical Glitches",
    desc: "Any trading that exploits pricing errors, latency arbitrage, or technical glitches in the platform is immediately disqualifying.",
  },
];

const riskTableRows = [
  {
    rule: "Daily Loss Limit",
    value: "5%",
    detail: "From start-of-day balance",
  },
  {
    rule: "Max Drawdown",
    value: "10%",
    detail: "From initial account balance",
  },
  {
    rule: "Max Position Size",
    value: "5% per trade",
    detail: "Of account equity per single position",
  },
  {
    rule: "Leverage (Forex)",
    value: "1:100 max",
    detail: "Includes Gold and Silver",
  },
  {
    rule: "Leverage (Indices)",
    value: "1:50 max",
    detail: "All stock indices",
  },
  {
    rule: "Leverage (Crypto)",
    value: "1:10 max",
    detail: "BTC, ETH, LTC, XRP",
  },
  {
    rule: "Overnight Positions",
    value: "Allowed",
    detail: "Max 3% exposure at rollover",
  },
  {
    rule: "Weekend Holding",
    value: "Allowed",
    detail: "Standard swap rates apply",
  },
  {
    rule: "News Trading",
    value: "Allowed",
    detail: "30-min window before high-impact — use caution",
  },
];

const accountTypeRows = [
  {
    type: "Challenge Phase 1",
    target: "10%",
    drawdown: "10%",
    daily: "5%",
    minDays: "5 days",
    color: "text-brand-gold",
  },
  {
    type: "Challenge Phase 2",
    target: "5%",
    drawdown: "10%",
    daily: "5%",
    minDays: "5 days",
    color: "text-brand-gold",
  },
  {
    type: "Challenge Funded",
    target: "None",
    drawdown: "10%",
    daily: "5%",
    minDays: "None",
    color: "text-brand-green",
  },
  {
    type: "Instant Funding",
    target: "None",
    drawdown: "10%",
    daily: "5%",
    minDays: "None",
    color: "text-brand-green",
  },
  {
    type: "Prime Accounts",
    target: "None",
    drawdown: "12% (custom)",
    daily: "5–8% (custom)",
    minDays: "None",
    color: "text-purple-400",
  },
];

const violationSteps = [
  {
    step: "Warning",
    color: "text-brand-gold border-brand-gold/40 bg-brand-gold/5",
    icon: <AlertTriangle className="w-5 h-5 text-brand-gold" />,
    scenarios: [
      "Daily loss limit breached once by under 1%",
      "Minor platform or parameter violation",
      "Minor overcrowding of positions",
    ],
  },
  {
    step: "Account Review",
    color: "text-orange-400 border-orange-400/40 bg-orange-400/5",
    icon: <Info className="w-5 h-5 text-orange-400" />,
    scenarios: [
      "Repeated daily loss limit warnings",
      "Suspected use of prohibited strategy",
      "Unusual trading pattern detected by risk team",
    ],
  },
  {
    step: "Account Termination",
    color: "text-destructive border-destructive/40 bg-destructive/5",
    icon: <XCircle className="w-5 h-5 text-destructive" />,
    scenarios: [
      "Max overall drawdown (10%) breached",
      "Confirmed use of martingale or grid strategies",
      "Account sharing or copying farm confirmed",
    ],
  },
];

export default function TradingRulesPage() {
  return (
    <div className="bg-background">
      <title>
        Trading Rules &amp; Guidelines | FX Expert Funded - Fair Prop Firm Rules
      </title>
      <meta
        name="description"
        content="Read FX Expert Funded trading rules: 5% daily drawdown, 10% max drawdown, allowed instruments, prohibited strategies, MT5 platform requirements, and violation policy."
      />

      {/* Hero */}
      <section className="gradient-hero py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-wider mb-6"
            data-ocid="rules.hero_badge"
          >
            <Shield className="w-4 h-4" /> Transparent & Fair
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-6"
          >
            Clear, Fair{" "}
            <span className="text-gradient-gold">Trading Rules</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto"
          >
            We believe in simple, trader-friendly conditions with no hidden
            traps. Every rule exists to protect both traders and capital — not
            to disqualify you unfairly.
          </motion.p>
        </div>
      </section>

      {/* Allowed Instruments */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-brand-green mb-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wider">
                Allowed Instruments
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl">
              What You Can Trade
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allowedInstruments.map((inst, i) => (
              <motion.div
                key={inst.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated rounded-xl p-6"
                data-ocid={`rules.instrument.${i + 1}`}
              >
                <div className="text-4xl mb-3">{inst.icon}</div>
                <h3 className="font-display font-bold text-sm mb-1.5">
                  {inst.name}
                </h3>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  {inst.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management Table */}
      <section className="py-20 gradient-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-brand-gold mb-2">
              <Shield className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wider">
                Risk Management
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl">
              Risk Rules & Limits
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated rounded-2xl overflow-hidden"
            data-ocid="rules.risk_table"
          >
            <div className="grid grid-cols-3 bg-card/80">
              <div className="px-5 py-3.5 text-xs font-bold text-foreground/40 uppercase tracking-wider border-b border-white/10">
                Rule
              </div>
              <div className="px-5 py-3.5 text-xs font-bold text-brand-gold uppercase tracking-wider border-b border-white/10 border-l border-white/10">
                Limit
              </div>
              <div className="px-5 py-3.5 text-xs font-bold text-foreground/40 uppercase tracking-wider border-b border-white/10 border-l border-white/10">
                Note
              </div>
            </div>
            {riskTableRows.map((row, i) => (
              <div
                key={row.rule}
                className={`grid grid-cols-3 ${
                  i % 2 === 0 ? "" : "bg-white/[0.015]"
                }`}
                data-ocid={`rules.risk_row.${i + 1}`}
              >
                <div className="px-5 py-3.5 text-sm text-foreground/70 border-b border-white/5">
                  {row.rule}
                </div>
                <div className="px-5 py-3.5 text-sm font-bold text-foreground border-b border-white/5 border-l border-white/5">
                  {row.value}
                </div>
                <div className="px-5 py-3.5 text-xs text-foreground/50 border-b border-white/5 border-l border-white/5">
                  {row.detail}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Account Type Rules */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display font-black text-2xl sm:text-3xl">
              Rules by <span className="text-gradient-gold">Account Type</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated rounded-2xl overflow-hidden"
            data-ocid="rules.account_type_table"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-card/80">
                    {[
                      "Account Type",
                      "Profit Target",
                      "Max Drawdown",
                      "Daily Loss",
                      "Min Days",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-4 text-left text-xs font-bold text-foreground/40 uppercase tracking-wider border-b border-white/10"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {accountTypeRows.map((row, i) => (
                    <tr
                      key={row.type}
                      className={i % 2 === 0 ? "" : "bg-white/[0.015]"}
                      data-ocid={`rules.account_row.${i + 1}`}
                    >
                      <td
                        className={`px-5 py-4 font-bold text-sm border-b border-white/5 ${row.color}`}
                      >
                        {row.type}
                      </td>
                      <td className="px-5 py-4 text-foreground/70 border-b border-white/5">
                        {row.target}
                      </td>
                      <td className="px-5 py-4 text-foreground/70 border-b border-white/5">
                        {row.drawdown}
                      </td>
                      <td className="px-5 py-4 text-foreground/70 border-b border-white/5">
                        {row.daily}
                      </td>
                      <td className="px-5 py-4 text-foreground/70 border-b border-white/5">
                        {row.minDays}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prohibited Strategies */}
      <section className="py-20 gradient-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-destructive mb-2">
              <XCircle className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wider">
                Prohibited Strategies
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl">
              What Is Not Allowed
            </h2>
          </motion.div>
          <div className="space-y-4">
            {prohibitedStrategies.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 flex gap-4"
                data-ocid={`rules.prohibited.${i + 1}`}
              >
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm mb-1 text-destructive">
                    {s.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MT5 Requirements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-display font-black text-2xl sm:text-3xl">
              MT5 Platform{" "}
              <span className="text-gradient-gold">Requirements</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-5"
          >
            {[
              {
                icon: "🖥️",
                title: "Minimum Version",
                val: "MT5 Build 3815+",
                sub: "Any higher build is supported",
              },
              {
                icon: "🏦",
                title: "Compatible Brokers",
                val: "Our Designated Broker",
                sub: "Login credentials provided on signup",
              },
              {
                icon: "🌐",
                title: "VPS Recommended",
                val: "Windows VPS, 2GB+ RAM",
                sub: "Required for EA-based strategies",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="card-elevated rounded-xl p-6 text-center"
                data-ocid={`rules.mt5.${i + 1}`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-xs text-foreground/40 uppercase tracking-wider mb-1">
                  {item.title}
                </div>
                <div className="font-bold text-sm mb-1">{item.val}</div>
                <div className="text-xs text-foreground/50">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Violation Policy */}
      <section className="py-20 gradient-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display font-black text-2xl sm:text-3xl">
              Violation <span className="text-gradient-gold">Policy</span>
            </h2>
            <p className="text-foreground/50 mt-2">
              We follow a fair 3-step escalation before any permanent action.
            </p>
          </motion.div>
          <div className="space-y-5">
            {violationSteps.map((vs, i) => (
              <motion.div
                key={vs.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border p-6 ${vs.color}`}
                data-ocid={`rules.violation.${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {vs.icon}
                  <h3 className="font-display font-bold text-base">
                    Step {i + 1}: {vs.step}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {vs.scenarios.map((sc) => (
                    <li
                      key={sc}
                      className="flex items-start gap-2 text-sm text-foreground/60"
                    >
                      <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-50" />
                      {sc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto mb-6" />
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
              Start with{" "}
              <span className="text-gradient-gold">Fair Rules Today</span>
            </h2>
            <p className="text-foreground/55 mb-8 max-w-xl mx-auto">
              No hidden traps, no gotcha rules. Our conditions are designed to
              let you trade your strategy while protecting capital responsibly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/instant-funding"
                className="btn-primary px-10 py-4 text-base inline-flex items-center justify-center"
                data-ocid="rules.cta_instant_button"
              >
                Get Instant Funding
              </Link>
              <Link
                to="/challenge-accounts"
                className="btn-secondary px-8 py-4 text-base inline-flex items-center justify-center"
                data-ocid="rules.cta_challenge_button"
              >
                Start a Challenge
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
