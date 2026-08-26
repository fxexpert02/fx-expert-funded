import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  Target,
  Trophy,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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
    badge: null as string | null,
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
    badge: "Popular",
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
    badge: null as string | null,
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
    badge: null as string | null,
  },
];

const allowedRules = [
  "All Forex major and minor pairs",
  "Gold (XAU/USD) and Silver (XAG/USD)",
  "Expert Advisors (EAs)",
  "Automated trading strategies",
  "News trading allowed",
  "Hedging within the account",
  "Weekend holding positions",
  "Scalping and swing trading",
];

const restrictedRules = [
  "No martingale or grid strategies",
  "No account sharing or copying farms",
  "No tick-scalping exploitation",
  "No third-party signal abuse",
];

const tips = [
  {
    icon: Target,
    title: "Respect the Drawdown Rules",
    tip: "Keep your daily loss under 4% (not 5%) so you have a safety buffer. The 5% daily limit is the ceiling, not your target stop.",
  },
  {
    icon: Lightbulb,
    title: "Trade Consistently, Not Aggressively",
    tip: "Phase 2 tests your consistency. Aim for 1-2% per day and hit the profit target over 7-10 trading days rather than trying to do it in 2 days.",
  },
  {
    icon: Trophy,
    title: "Journal Every Trade",
    tip: "Evaluators look for disciplined traders. A consistent win rate of 55%+ with positive R:R ratio demonstrates professional-grade trading to our risk team.",
  },
];

const faqs = [
  {
    q: "What is the minimum number of trading days?",
    a: "Both Phase 1 and Phase 2 require a minimum of 5 trading days each. A trading day counts when you open at least one trade. There is no maximum time limit to complete each phase.",
  },
  {
    q: "Can I use EAs and automated trading?",
    a: "Yes, Expert Advisors and automated strategies are fully permitted. Scalping, news trading, swing trading, and hedging are all allowed. Martingale and grid strategies are the only exception.",
  },
  {
    q: "What happens if I fail Phase 1?",
    a: "If you breach the drawdown limits or fail to reach the profit target within the time limit, your challenge resets. Gold and Platinum tiers include one free reset. Additional resets can be purchased.",
  },
  {
    q: "How long does it take to get funded after passing?",
    a: "After passing Phase 2, your funded account is typically activated within 24-48 hours. You will receive MT5 credentials via email once the risk team reviews your trading history.",
  },
  {
    q: "Can I scale my challenge account after getting funded?",
    a: "Yes! Our scaling plan allows consistent traders to grow their accounts up to $1,000,000. After achieving 10% profit in 3 consecutive months, your account size increases by 25%.",
  },
];

function FAQItem({ item }: { item: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/3 transition-smooth"
        data-ocid="challenge.faq_item"
      >
        <span className="font-semibold text-sm pr-4">{item.q}</span>
        <ChevronDown
          className={`w-4 h-4 text-brand-gold flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-white/8">
          <p className="pt-4 text-sm text-foreground/60 leading-relaxed">
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ChallengeAccountsPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="gradient-hero py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Trophy className="w-3 h-3" /> 2-Phase Evaluation · Scale to $1M
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl mb-5"
          >
            Prove Your Skills,{" "}
            <span className="text-gradient-gold block sm:inline">
              Get Funded Up To $1M
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8"
          >
            Pass our 2-phase evaluation at a fraction of the cost of instant
            funding. Prove your strategy, get funded, and scale to one million
            dollars.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <a
              href="#tiers"
              className="btn-primary text-base px-8 py-4"
              data-ocid="challenge.hero_cta_button"
            >
              View Challenges
            </a>
            <Link
              to="/instant-funding"
              className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2"
              data-ocid="challenge.view_instant_link"
            >
              Try Instant Funding <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-4xl sm:text-5xl mb-3">
              Choose Your <span className="text-gradient-gold">Challenge</span>
            </h2>
            <p className="text-foreground/50 text-lg">
              Lower cost. Higher reward. Proven path to funding.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-brand-navy to-brand-navy/70 border-2 border-brand-gold/50"
                    : "card-elevated"
                }`}
                data-ocid={`challenge.tier.${i + 1}`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-gold text-brand-black text-xs font-black">
                    {tier.badge}
                  </div>
                )}

                <div className="mb-1">
                  <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-3">
                    {tier.name}
                  </div>
                  <div className="text-5xl font-black font-display text-brand-gold">
                    {tier.capital}
                  </div>
                  <div className="text-sm text-foreground/40 mt-1">
                    Account Size
                  </div>
                </div>

                <div className="mt-4 mb-5">
                  <div className="inline-flex items-baseline gap-1">
                    <span className="text-2xl font-black font-display">
                      {tier.cost}
                    </span>
                    <span className="text-sm text-foreground/40">
                      entry fee
                    </span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-5 mb-6 flex-1">
                  {[
                    ["Phase 1 Target", tier.phase1Target, false],
                    ["Phase 2 Target", tier.phase2Target, false],
                    ["Max Drawdown", tier.maxDrawdown, false],
                    ["Daily Loss", tier.dailyLoss, false],
                    ["Min Trading Days", tier.minDays, false],
                    ["Profit Split", tier.profitSplit, true],
                  ].map(([label, val, green]) => (
                    <div
                      key={String(label)}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-foreground/50">{label}</span>
                      <span
                        className={
                          green
                            ? "text-brand-green font-semibold"
                            : "font-medium"
                        }
                      >
                        {val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {[
                    "MT5 platform included",
                    "Weekly payouts after funding",
                    "Scaling plan available",
                  ].map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-xs text-foreground/60"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className={
                    tier.highlighted
                      ? "btn-primary text-sm py-3"
                      : "btn-secondary text-sm py-3"
                  }
                  data-ocid={`challenge.tier_${i + 1}.start_button`}
                >
                  Start {tier.name} Challenge
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Phase Process */}
      <section className="gradient-section-alt py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              The Two-Phase <span className="text-gradient-gold">Process</span>
            </h2>
            <p className="text-foreground/50">
              Three stages, one goal: get you funded with real capital.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 relative">
            {[
              {
                step: "Phase 1",
                title: "Prove Consistency",
                target: "8% Profit Target",
                desc: "Trade for minimum 5 days. Reach 8% profit while keeping within 5% daily and 10% max drawdown. No time limit.",
                color: "border-brand-gold/30",
              },
              {
                step: "Phase 2",
                title: "Confirm Strategy",
                target: "5% Profit Target",
                desc: "Achieve 5% profit in Phase 2 with minimum 5 trading days. This confirms your trading is disciplined and repeatable.",
                color: "border-brand-gold/50",
              },
              {
                step: "Funded!",
                title: "Real Capital",
                target: "Up to 90% Split",
                desc: "Pass both phases and receive your funded account within 24-48hrs. Trade with real capital and withdraw weekly.",
                color: "border-brand-green/40",
              },
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`card-elevated rounded-xl p-6 border-2 ${phase.color}`}
                data-ocid={`challenge.phase.${i + 1}`}
              >
                <div className="text-brand-gold font-black text-xs uppercase tracking-widest mb-2 font-display">
                  {phase.step}
                </div>
                <div className="inline-block px-2 py-1 rounded bg-brand-gold/10 text-brand-gold text-xs font-bold mb-3">
                  {phase.target}
                </div>
                <h3 className="font-display font-bold text-base mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Table */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Trading <span className="text-gradient-gold">Rules</span>
            </h2>
            <p className="text-foreground/50">
              Transparent rules. No surprises. Trade freely within these
              parameters.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-elevated rounded-xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="w-5 h-5 text-brand-green" />
                <h3 className="font-display font-bold text-base text-brand-green">
                  Allowed
                </h3>
              </div>
              <ul className="space-y-3">
                {allowedRules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2.5 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated rounded-xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <XCircle className="w-5 h-5 text-red-400" />
                <h3 className="font-display font-bold text-base text-red-400">
                  Restricted
                </h3>
              </div>
              <ul className="space-y-3">
                {restrictedRules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2.5 text-sm text-foreground/70"
                  >
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="gradient-navy py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              3 Tips to{" "}
              <span className="text-gradient-gold">Pass Your Challenge</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {tips.map((tip, i) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated rounded-xl p-6"
                  data-ocid={`challenge.tip.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-brand-gold mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-foreground/55 leading-relaxed">
                    {tip.tip}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Challenge <span className="text-gradient-gold">FAQs</span>
            </h2>
          </div>
          <div className="space-y-3" data-ocid="challenge.faq_list">
            {faqs.map((item) => (
              <FAQItem key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, #d4af37 0%, #e8c84a 40%, #c9a227 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-black mb-4">
            Start Your Challenge Today
          </h2>
          <p className="text-brand-black/60 mb-8">
            Prove your trading skills and get funded with real capital.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#tiers"
              className="px-8 py-4 rounded-lg bg-brand-black text-brand-gold font-display font-bold text-base hover:bg-brand-navy transition-smooth shadow-xl"
              data-ocid="challenge.bottom_cta_button"
            >
              Pick Your Challenge
            </a>
            <Link
              to="/instant-funding"
              className="px-8 py-4 rounded-lg border-2 border-brand-black/30 text-brand-black font-display font-bold text-base hover:bg-brand-black/10 transition-smooth"
              data-ocid="challenge.instant_funding_link"
            >
              Prefer Instant Funding?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
