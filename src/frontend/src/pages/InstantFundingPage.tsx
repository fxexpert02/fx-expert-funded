import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock,
  CreditCard,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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
    badge: null as string | null,
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
    badge: "Most Popular",
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
    badge: null as string | null,
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
    badge: null as string | null,
  },
];

const benefits = [
  {
    icon: Zap,
    title: "No Challenge Required",
    desc: "Skip the evaluation entirely. Pay once, start trading the same day.",
  },
  {
    icon: Clock,
    title: "Same-Day Setup",
    desc: "MT5 credentials delivered within minutes of payment confirmation.",
  },
  {
    icon: BarChart3,
    title: "Weekly Withdrawals",
    desc: "Request your profits every 7 days. Processed within 24-48 hours.",
  },
  {
    icon: TrendingUp,
    title: "Real MT5 Markets",
    desc: "Live accounts with real spreads, real liquidity, real conditions.",
  },
  {
    icon: CreditCard,
    title: "Up to 90% Profit Split",
    desc: "Elite tier traders keep 90% of all profits. Industry-leading rates.",
  },
];

const steps = [
  {
    num: "01",
    title: "Choose Account",
    desc: "Select your preferred capital size and pay a one-time activation fee.",
  },
  {
    num: "02",
    title: "Complete Verification",
    desc: "Quick KYC verification to comply with our global standards.",
  },
  {
    num: "03",
    title: "Start Trading",
    desc: "Receive your MT5 credentials and begin trading immediately.",
  },
  {
    num: "04",
    title: "Get Paid Weekly",
    desc: "Submit withdrawal requests weekly. Paid in 24-48 business hours.",
  },
];

const faqs = [
  {
    q: "Do I need to pass any evaluation?",
    a: "No. Instant Funding accounts require zero evaluation. You pay a one-time fee and your account is activated immediately. No profit targets, no evaluation phases.",
  },
  {
    q: "How long does account setup take?",
    a: "Most accounts are activated within 15-30 minutes of payment. You will receive your MT5 login credentials via email. In rare cases it can take up to 2 hours.",
  },
  {
    q: "Can I scale my instant funding account?",
    a: "Yes! After achieving 10% profit in 3 consecutive months, your account size is automatically increased by 25%, up to a maximum of $1,000,000.",
  },
  {
    q: "What is the drawdown rule?",
    a: "You have a 5% daily loss limit and a 10% maximum drawdown from your initial balance. These are calculated from the starting balance, not a rolling high watermark.",
  },
  {
    q: "Which instruments can I trade?",
    a: "All tiers include Forex (all major/minor pairs) and Gold. Growth and above include Indices. Elite tier includes all instruments including crypto and commodities.",
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
        data-ocid="instant_funding.faq_item"
      >
        <span className="font-semibold text-sm pr-4">{item.q}</span>
        <ChevronDown
          className={`w-4 h-4 text-brand-gold flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-foreground/60 leading-relaxed border-t border-white/8">
          <p className="pt-4">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function InstantFundingPage() {
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
            <Zap className="w-3 h-3" /> No Evaluation · No Challenge
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl mb-5"
          >
            Get Instant Access to{" "}
            <span className="text-gradient-gold">Funded Accounts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8"
          >
            No challenge. No waiting. Purchase your funded account and start
            trading real capital today with weekly payouts and up to 90% profit
            split.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#pricing"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
              data-ocid="instant_funding.hero_cta_button"
            >
              View Pricing <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 5 Benefits */}
      <section className="py-16 gradient-section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Why Instant Funding?{" "}
              <span className="text-gradient-gold">5 Key Benefits</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="card-elevated rounded-xl p-5 text-center"
                  data-ocid={`instant_funding.benefit.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="font-display font-bold text-sm mb-2 text-brand-gold">
                    {b.title}
                  </h3>
                  <p className="text-xs text-foreground/50 leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-4xl sm:text-5xl mb-3">
              Choose Your{" "}
              <span className="text-gradient-gold">Account Size</span>
            </h2>
            <p className="text-foreground/50 text-lg">
              One-time fee. No monthly charges. No hidden costs.
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
                data-ocid={`instant_funding.tier.${i + 1}`}
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
                    Funded Account
                  </div>
                </div>

                <div className="mt-4 mb-5">
                  <div className="inline-flex items-baseline gap-1">
                    <span className="text-2xl font-black font-display">
                      {tier.cost}
                    </span>
                    <span className="text-sm text-foreground/40">one-time</span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-5 mb-6 flex-1">
                  {[
                    ["Profit Split", tier.profitSplit, true],
                    ["Max Drawdown", tier.maxDrawdown, false],
                    ["Daily Loss Limit", tier.dailyLoss, false],
                    ["Leverage", tier.leverage, false],
                    ["Platform", tier.platform, false],
                    ["Payouts", "Weekly", false],
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
                    "No challenge required",
                    "Instant activation",
                    "MT5 platform included",
                    "Weekly withdrawals",
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
                  data-ocid={`instant_funding.tier_${i + 1}.purchase_button`}
                >
                  Get {tier.capital} Account
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-foreground/40">
            <Shield className="w-4 h-4 inline mr-1.5 text-brand-green" />
            All purchases are secured. Instant account access after payment
            verification.
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="gradient-section-alt py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-foreground/50">
              Four simple steps from purchase to first payout.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated rounded-xl p-6 text-center relative"
                data-ocid={`instant_funding.step.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-black text-brand-gold text-sm">
                    {s.num}
                  </span>
                </div>
                <h3 className="font-display font-bold text-sm mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 text-brand-gold/30">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Frequently Asked{" "}
              <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>
          <div className="space-y-3" data-ocid="instant_funding.faq_list">
            {faqs.map((item) => (
              <FAQItem key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
            Ready to Start Trading{" "}
            <span className="text-gradient-gold">Instantly?</span>
          </h2>
          <p className="text-foreground/50 mb-8">
            Join 15,000+ traders. Purchase your funded account and trade real
            capital today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#pricing"
              className="btn-primary text-base px-8 py-4"
              data-ocid="instant_funding.bottom_cta_button"
            >
              Get Funded Now
            </a>
            <Link
              to="/challenge-accounts"
              className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2"
              data-ocid="instant_funding.view_challenges_link"
            >
              View Challenge Accounts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
