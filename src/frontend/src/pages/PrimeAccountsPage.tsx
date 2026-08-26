import { Link } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  CheckCircle2,
  Crown,
  MessageCircle,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

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
      "1:100 Leverage",
    ],
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
      "MT5 Platform",
    ],
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
      "Custom Leverage Up to 1:200",
    ],
  },
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
    prime: "Dedicated Manager",
  },
  { label: "Custom Risk Params", standard: "No", prime: "Yes" },
  { label: "VIP Telegram", standard: "No", prime: "Yes" },
  { label: "Strategy Calls", standard: "No", prime: "Quarterly / Monthly" },
  { label: "Support Level", standard: "Standard 24/7", prime: "VIP Priority" },
];

const premiumBenefits = [
  {
    icon: <Users className="w-6 h-6 text-brand-gold" />,
    title: "Dedicated Account Manager",
    desc: "Your personal account manager is available during market hours to help you with funding, withdrawals, risk queries, and any trading issues.",
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-gold" />,
    title: "Priority Withdrawals (24hr)",
    desc: "Skip the queue. Prime members receive expedited payout processing — your withdrawal is handled within 24 business hours, guaranteed.",
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-gold" />,
    title: "Custom Risk Parameters",
    desc: "Negotiate your own daily loss limit and max drawdown settings tailored to your trading style. Standard accounts cannot access this feature.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-brand-gold" />,
    title: "VIP Telegram Group",
    desc: "Access our exclusive Prime trader community with real-time market signals, trade ideas, and direct communication with the risk management team.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-brand-gold" />,
    title: "Quarterly Strategy Calls",
    desc: "One-on-one video calls with our senior trading analysts to review your performance, refine your strategy, and optimize your account settings.",
  },
];

const applicationSteps = [
  {
    step: "01",
    title: "Choose Your Prime Tier",
    desc: "Select Silver Prime ($150K), Gold Prime ($250K), or Platinum Prime ($500K) based on your capital needs.",
  },
  {
    step: "02",
    title: "Complete Application",
    desc: "Fill out our short Prime Account application form with your trading background and preferred settings.",
  },
  {
    step: "03",
    title: "Account Review (24hrs)",
    desc: "Our Prime team reviews your application within 24 hours. You'll receive a personal onboarding call.",
  },
  {
    step: "04",
    title: "Activate & Start Trading",
    desc: "Account is activated with your custom parameters. Your dedicated manager contacts you on day one.",
  },
];

export default function PrimeAccountsPage() {
  return (
    <div className="bg-background">
      <title>Prime Funded Accounts - VIP Trading | FX Expert Funded</title>
      <meta
        name="description"
        content="FX Expert Funded Prime accounts offer $150K–$500K capital, 85–92% profit split, dedicated account managers, priority withdrawals, and custom risk parameters. Apply today."
      />

      {/* Hero */}
      <section className="gradient-hero py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-brand-navy/60 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-6"
            data-ocid="prime.hero_badge"
          >
            <Crown className="w-4 h-4 fill-brand-gold" />
            VIP Prime Accounts
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight"
          >
            Elite Trading, <br />
            <span className="text-gradient-gold">Exclusive Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
          >
            Access institutional-grade funded accounts up to $500,000 with
            custom risk parameters, a dedicated account manager, and
            industry-leading 92% profit splits. For serious traders only.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              type="button"
              className="btn-primary text-base px-8 py-4"
              data-ocid="prime.hero_apply_button"
            >
              Apply for Prime Account
            </button>
            <Link
              to="/contact"
              className="btn-secondary text-base px-8 py-4 inline-flex items-center justify-center gap-2"
              data-ocid="prime.hero_contact_button"
            >
              <Phone className="w-4 h-4" /> Talk to Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Prime vs Standard Comparison */}
      <section className="py-20 gradient-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-3">
              <TrendingUp className="w-4 h-4" /> Side-by-Side Comparison
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl">
              Prime vs <span className="text-gradient-gold">Standard</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated rounded-2xl overflow-hidden"
            data-ocid="prime.comparison_table"
          >
            <div className="grid grid-cols-3 bg-card/80">
              <div className="p-4 font-bold text-sm text-foreground/50 uppercase tracking-widest border-b border-white/10">
                Feature
              </div>
              <div className="p-4 font-bold text-sm text-foreground/70 text-center border-b border-white/10 border-l border-white/10">
                Standard
              </div>
              <div className="p-4 font-bold text-sm text-brand-gold text-center border-b border-white/10 border-l border-white/10 bg-brand-gold/5">
                <span className="flex items-center justify-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" /> Prime
                </span>
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"
                }`}
                data-ocid={`prime.comparison_row.${i + 1}`}
              >
                <div className="p-4 text-sm text-foreground/60 border-b border-white/5">
                  {row.label}
                </div>
                <div className="p-4 text-sm text-center border-b border-white/5 border-l border-white/5">
                  {row.standard}
                </div>
                <div className="p-4 text-sm text-brand-gold font-semibold text-center border-b border-white/5 border-l border-white/5 bg-brand-gold/[0.03]">
                  {row.prime}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prime Tier Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Choose Your <span className="text-gradient-gold">Prime Tier</span>
            </h2>
            <p className="text-foreground/50 max-w-xl mx-auto">
              All Prime accounts include a dedicated manager, priority
              withdrawals, and custom parameters.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {primeTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-brand-navy to-brand-navy/70 border-2 border-brand-gold/50 animate-pulse-glow-gold"
                    : "card-elevated"
                }`}
                data-ocid={`prime.tier.${i + 1}`}
              >
                {tier.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold ${
                      tier.highlighted
                        ? "bg-brand-gold text-brand-black"
                        : "bg-foreground/10 text-foreground/70 border border-white/20"
                    }`}
                  >
                    {tier.badge}
                  </div>
                )}

                <div className="mb-2 flex items-center gap-2">
                  <Crown
                    className={`w-5 h-5 ${
                      tier.highlighted
                        ? "text-brand-gold"
                        : "text-foreground/30"
                    }`}
                  />
                  <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">
                    {tier.name}
                  </div>
                </div>

                <div className="mb-5 mt-2">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black font-display text-brand-gold">
                      {tier.price}
                    </span>
                    <span className="text-foreground/40 mb-1 text-sm">
                      {tier.period}
                    </span>
                  </div>
                  <div className="text-2xl font-bold mt-2">{tier.size}</div>
                  <div className="text-xs text-foreground/40 mt-0.5">
                    Funded Capital
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="text-brand-green text-xl font-black font-display">
                    {tier.split}
                  </div>
                  <div className="text-sm text-foreground/50">Profit Split</div>
                </div>

                <div className="space-y-3 flex-1 mb-7">
                  {tier.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-foreground/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className={
                    tier.highlighted
                      ? "btn-primary py-3.5 text-sm"
                      : "btn-secondary py-3.5 text-sm"
                  }
                  data-ocid={`prime.tier_${i + 1}.apply_button`}
                >
                  Apply for {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="py-20 gradient-section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-3">
              <Star className="w-4 h-4 fill-brand-gold" /> Exclusive Prime
              Benefits
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl">
              Why Traders Choose{" "}
              <span className="text-gradient-gold">Prime</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated rounded-xl p-6"
                data-ocid={`prime.benefit.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-display font-bold text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl">
              How to Become a{" "}
              <span className="text-gradient-gold">Prime Member</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
                data-ocid={`prime.step.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 border-2 border-brand-gold/30 flex items-center justify-center mx-auto mb-4 font-display font-black text-brand-gold text-lg">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Crown className="w-12 h-12 text-brand-gold mx-auto mb-6 fill-brand-gold/20" />
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
              Ready for{" "}
              <span className="text-gradient-gold">Elite Funding?</span>
            </h2>
            <p className="text-foreground/55 mb-8 max-w-xl mx-auto">
              Join our exclusive Prime program and trade with up to $500,000 in
              capital, 92% profit split, and a dedicated account manager backing
              your every move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="btn-primary px-10 py-4 text-base"
                data-ocid="prime.cta_apply_button"
              >
                Apply for Prime Account
              </button>
              <Link
                to="/contact"
                className="btn-secondary px-8 py-4 text-base inline-flex items-center justify-center gap-2"
                data-ocid="prime.cta_contact_button"
              >
                <Award className="w-4 h-4" /> Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
