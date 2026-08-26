import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Clock,
  DollarSign,
  Globe,
  LayoutDashboard,
  Link2,
  Megaphone,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const heroStats = [
  { label: "Top Affiliates Earn", value: "$50K/mo" },
  { label: "Active Affiliates", value: "5,000+" },
  { label: "Payout Day", value: "Every Monday" },
];

const affiliateFeatures = [
  {
    icon: DollarSign,
    title: "25% Commission",
    desc: "Earn up to 25% on every purchase through your link. No cap on earnings — scale without limits.",
  },
  {
    icon: Clock,
    title: "Weekly Payouts",
    desc: "Commissions paid every Monday via USDT, bank wire, or crypto. Reliable, fast, and transparent.",
  },
  {
    icon: Globe,
    title: "IB Opportunities",
    desc: "Become a global Introducing Broker. Build a network of traders and earn from every referral they bring.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    desc: "Access premium banners, landing pages, email templates, social content, and a dedicated manager.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-time Dashboard",
    desc: "Track all clicks, conversions, and earnings live. Full transparency in your affiliate portal.",
  },
  {
    icon: Link2,
    title: "Lifetime Cookie",
    desc: "Long-duration tracking cookies ensure you earn from every return visit, not just first clicks.",
  },
];

const steps = [
  {
    icon: Shield,
    num: "01",
    title: "Sign Up",
    desc: "Register as an affiliate in under 2 minutes. No approval required to get started.",
  },
  {
    icon: Link2,
    num: "02",
    title: "Get Your Link",
    desc: "Receive your unique referral link and access the full marketing materials library.",
  },
  {
    icon: Users,
    num: "03",
    title: "Refer Traders",
    desc: "Share your link on social media, YouTube, blogs, email lists, or Telegram groups.",
  },
  {
    icon: DollarSign,
    num: "04",
    title: "Earn Weekly",
    desc: "Every Monday, commissions are processed and paid directly to your chosen wallet.",
  },
];

const commissionByType = [
  {
    type: "Instant Funding",
    rate: "20%",
    example: "$99 account → $19.80 earned",
  },
  {
    type: "Challenge Accounts",
    rate: "25%",
    example: "$299 challenge → $74.75 earned",
  },
  {
    type: "Prime Accounts",
    rate: "15%",
    example: "$999 prime → $149.85 earned",
  },
];

const marketingAssets = [
  {
    icon: "🖼️",
    title: "Banner Ads",
    desc: "300x250, 728x90, 160x600 in all major languages.",
  },
  {
    icon: "📄",
    title: "Landing Pages",
    desc: "High-converting pre-built pages ready to use.",
  },
  {
    icon: "📧",
    title: "Email Templates",
    desc: "Ready-to-send email sequences for trader lists.",
  },
  {
    icon: "📱",
    title: "Social Media",
    desc: "Designed posts for Instagram, Twitter, Telegram, WhatsApp.",
  },
];

const ibFeatures = [
  {
    icon: Globe,
    title: "Global IB Network",
    desc: "Join our international Introducing Broker program and build a regional trader network. Support available in 10+ languages.",
  },
  {
    icon: Users,
    title: "Agency Support",
    desc: "For agencies managing multiple sub-affiliates, we offer dedicated dashboards, custom commission structures, and monthly reviews.",
  },
  {
    icon: Zap,
    title: "Co-Branding Opportunities",
    desc: "High-volume IBs can access white-label marketing materials with your brand alongside FX Expert Funded for maximum credibility.",
  },
];

const topTestimonials = [
  {
    id: "aff-1",
    name: "Arjun Patel",
    flag: "🇮🇳",
    role: "Full-time Affiliate",
    quote:
      "I was earning $3K/month from my trading community. Within 6 months of joining FX Expert Funded's affiliate program, I hit $22K in a single month.",
  },
  {
    id: "aff-2",
    name: "Carlos Mendes",
    flag: "🇧🇷",
    role: "YouTube Trader · 45K Subs",
    quote:
      "The 25% commission on challenge accounts is the highest in the industry. My viewers trust FX Expert Funded and that trust converts. Weekly payouts never miss.",
  },
  {
    id: "aff-3",
    name: "Fatima Al-Hassan",
    flag: "🇸🇦",
    role: "IB Partner · Gulf Region",
    quote:
      "The IB program gave me everything I needed to build a regional network. Marketing support, tracking tools, and a team that actually picks up the phone.",
  },
];

export default function AffiliateProgramPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="gradient-hero py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <DollarSign className="w-3 h-3" /> Weekly Payouts · Up To 25%
            Commission
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl mb-5"
          >
            Earn Up To{" "}
            <span className="text-gradient-gold">25% Commission</span>
            <span className="block text-4xl sm:text-5xl mt-2">
              Weekly Payouts
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8"
          >
            Start Earning with FX Expert Funded Affiliate Program Today. Refer
            traders, earn industry-leading commissions, and build a passive
            income stream that pays every Monday.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <button
              type="button"
              className="btn-primary text-base px-8 py-4"
              data-ocid="affiliate.join_now_button"
            >
              Join Affiliate Program
            </button>
            <Link
              to="/partner-program"
              className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2"
              data-ocid="affiliate.partner_program_link"
            >
              View IB Program <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Top Earner Stats Bar */}
      <div className="bg-brand-navy/80 border-b border-white/10 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-black text-2xl sm:text-3xl text-brand-gold">
                  {s.value}
                </div>
                <div className="text-xs text-foreground/50 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6 Feature Cards */}
      <section className="py-20 gradient-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">
              Everything You Need to{" "}
              <span className="text-gradient-gold">Earn Big</span>
            </h2>
            <p className="text-foreground/50 text-lg max-w-xl mx-auto">
              Six industry-best affiliate advantages packed into one program.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliateFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-elevated rounded-xl p-6"
                  data-ocid={`affiliate.feature.${i + 1}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2 text-brand-gold">
                    {f.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-foreground/50">
              Four steps from sign-up to weekly payout.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated rounded-xl p-6 text-center"
                  data-ocid={`affiliate.step.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div className="text-brand-gold font-black font-display text-xs mb-2">
                    {s.num}
                  </div>
                  <h3 className="font-display font-bold text-sm mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-foreground/50 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commission Table by Account Type */}
      <section className="gradient-section-alt py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Commission by{" "}
              <span className="text-gradient-gold">Account Type</span>
            </h2>
            <p className="text-foreground/50">
              Earn more by promoting our highest-value products.
            </p>
          </div>
          <div className="card-elevated rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/3">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                    Account Type
                  </th>
                  <th className="text-center px-6 py-4 text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                    Commission
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                {commissionByType.map((row, i) => (
                  <tr
                    key={row.type}
                    className={`border-b border-white/5 last:border-0 ${
                      i % 2 === 0 ? "" : "bg-white/2"
                    }`}
                    data-ocid={`affiliate.commission_row.${i + 1}`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold">
                      {row.type}
                    </td>
                    <td className="px-6 py-4 text-center text-2xl font-black font-display text-brand-gold">
                      {row.rate}
                    </td>
                    <td className="px-6 py-4 text-right text-xs text-brand-green">
                      {row.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IB Partnership */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              IB <span className="text-gradient-gold">Partnership Program</span>
            </h2>
            <p className="text-foreground/50 max-w-xl mx-auto">
              For serious partners who want to build a business, not just earn a
              referral fee.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {ibFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated rounded-xl p-6"
                  data-ocid={`affiliate.ib.${i + 1}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marketing Support */}
      <section className="gradient-section-alt py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Marketing <span className="text-gradient-gold">Support</span>
            </h2>
            <p className="text-foreground/50">
              Everything you need to convert traders — ready to use.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketingAssets.map((asset, i) => (
              <motion.div
                key={asset.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-elevated rounded-xl p-5 text-center"
                data-ocid={`affiliate.marketing.${i + 1}`}
              >
                <div className="text-3xl mb-3">{asset.icon}</div>
                <h3 className="font-display font-bold text-sm mb-1.5">
                  {asset.title}
                </h3>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  {asset.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Affiliate Testimonials */}
      <section className="py-16 gradient-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Top Affiliates{" "}
              <span className="text-gradient-gold">Speak Out</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {topTestimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated rounded-xl p-6"
                data-ocid={`affiliate.testimonial.${i + 1}`}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={`${t.id}-star-${j}`}
                      className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-brand-navy border border-brand-gold/20 flex items-center justify-center text-sm">
                    {t.flag}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-foreground/40">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, #d4af37 0%, #e8c84a 40%, #c9a227 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-black mb-4">
            Join Affiliate Program Today
          </h2>
          <p className="text-brand-black/60 mb-8 text-lg">
            Start Earning with FX Expert Funded — Refer traders, earn 25%
            commission, get paid weekly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              className="px-8 py-4 rounded-lg bg-brand-black text-brand-gold font-display font-bold text-base hover:bg-brand-navy transition-smooth shadow-xl"
              data-ocid="affiliate.final_join_button"
            >
              Sign Up as Affiliate
            </button>
            <Link
              to="/partner-program"
              className="px-8 py-4 rounded-lg border-2 border-brand-black/30 text-brand-black font-display font-bold text-base hover:bg-brand-black/10 transition-smooth"
              data-ocid="affiliate.ib_program_link"
            >
              IB Partnership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
