import { Link } from "@tanstack/react-router";
import {
  Award,
  Globe,
  Heart,
  Linkedin,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "15,000+", label: "Funded Traders", sub: "Globally active" },
  { value: "$50M+", label: "Total Paid Out", sub: "And counting" },
  { value: "150+", label: "Countries", sub: "Worldwide reach" },
  { value: "4.8/5", label: "Trader Rating", sub: "1,200+ reviews" },
];

const values = [
  {
    icon: <Shield className="w-7 h-7 text-brand-gold" />,
    title: "Transparency",
    desc: "We publish real payout proofs weekly, share our rules openly, and never hide fees or restrictions. What you see is exactly what you get.",
  },
  {
    icon: <Zap className="w-7 h-7 text-brand-gold" />,
    title: "Speed",
    desc: "From instant account activation to 24-48 hour payout processing, we respect your time. Fast is not just a feature — it's our culture.",
  },
  {
    icon: <Target className="w-7 h-7 text-brand-gold" />,
    title: "Trader Success",
    desc: "Our entire business exists to help traders grow. Trader-friendly rules, scaling plans, dedicated support — your success is our KPI.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "FX Expert Funded Founded",
    desc: "Founded by experienced traders who wanted a fairer, more transparent prop firm. Launched with 100 funded traders and a bold mission.",
    metric: "100 traders funded",
  },
  {
    year: "2022",
    title: "Rapid Global Expansion",
    desc: "Reached 1,000 funded traders milestone. Expanded operations to 50+ countries. Paid out $5M+ in trader profits. Community trust grows.",
    metric: "$5M+ paid out",
  },
  {
    year: "2023",
    title: "Challenge Accounts Launched",
    desc: "Launched 2-phase Challenge evaluation accounts. Reached 5,000 active funded traders. Total payouts crossed $20M. MT5 upgrades deployed.",
    metric: "$20M+ paid out",
  },
  {
    year: "2024",
    title: "Prime Accounts & Affiliate Program",
    desc: "Introduced Prime institutional accounts for serious traders. Launched our 25% affiliate program. 10,000 traders funded, $40M+ in payouts.",
    metric: "$40M+ paid out",
  },
  {
    year: "2025",
    title: "Global Expansion & Scale",
    desc: "Reached 15,000 funded traders across 150+ countries. Total payouts exceeded $50M. Expanded to crypto and indices instruments globally.",
    metric: "$50M+ paid out",
  },
];

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Co-Founder",
    bio: "Former institutional FX trader with 18 years across JPMorgan and Goldman Sachs desks. Founded FX Expert Funded to democratize access to trading capital globally.",
    initials: "AT",
  },
  {
    name: "Sarah Chen",
    role: "Head of Risk Management",
    bio: "Quantitative risk specialist with a PhD in financial mathematics. Designed our trader-first drawdown rules that are fair, transparent, and sustainable.",
    initials: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Trader Success",
    bio: "Certified trading coach and behavioral finance expert. Personally mentors our top funded traders and oversees the entire trader success program.",
    initials: "MJ",
  },
  {
    name: "Aisha Patel",
    role: "Chief Technology Officer",
    bio: "Fintech engineering leader who built the platform infrastructure powering instant account activation, real-time dashboards, and automated payout processing.",
    initials: "AP",
  },
];

const differentiators = [
  {
    icon: <TrendingUp className="w-5 h-5 text-brand-gold" />,
    point: "Instant account activation — no waiting days or weeks",
  },
  {
    icon: <Award className="w-5 h-5 text-brand-gold" />,
    point: "90% profit split — highest in the industry for funded traders",
  },
  {
    icon: <Zap className="w-5 h-5 text-brand-gold" />,
    point: "Weekly payouts processed within 24-48 hours, guaranteed",
  },
  {
    icon: <Globe className="w-5 h-5 text-brand-gold" />,
    point: "150+ countries supported with 24/7 multilingual support team",
  },
  {
    icon: <Users className="w-5 h-5 text-brand-gold" />,
    point: "Scaling plan to $1,000,000 — grow with your performance",
  },
  {
    icon: <Heart className="w-5 h-5 text-brand-gold" />,
    point: "Trader-first rules: news trading, EAs, hedging — all allowed",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <title>About FX Expert Funded - Trusted Prop Firm Since 2021</title>

      {/* Hero */}
      <section className="gradient-hero py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold mb-5"
          >
            <Globe className="w-3.5 h-3.5" />
            Trusted Prop Firm Since 2021
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display font-black text-5xl sm:text-6xl mb-5"
          >
            Empowering Traders{" "}
            <span className="text-gradient-gold">Worldwide</span>
            <br />
            Since 2021
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            FX Expert Funded was built by traders, for traders. We provide the
            capital, infrastructure, and support you need to trade at the
            highest level — without risking your own money.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-section-alt border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center card-elevated rounded-xl p-5"
              data-ocid={`about.stat.${i + 1}`}
            >
              <div className="text-4xl font-black font-display text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold mb-0.5">{stat.label}</div>
              <div className="text-xs text-foreground/40">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
              Our <span className="text-gradient-gold">Story</span>
            </h2>
            <p className="text-foreground/40 text-sm">
              How we became one of the most trusted prop firms globally
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="text-foreground/70 leading-relaxed">
                FX Expert Funded was founded in 2021 by a group of experienced
                institutional traders who saw a broken industry. Most prop firms
                were designed to fail traders — impossible rules, slow payouts,
                and zero trader support. We knew there was a better way.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We built FX Expert Funded on three unshakeable pillars:
                transparency, speed, and genuine trader success. From day one,
                we published payout proofs, offered instant account activation,
                and designed rules that real traders could actually pass and
                maintain.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, over 15,000 traders in 150+ countries call FX Expert
                Funded their trading home. We've paid out more than $50 million
                in trader profits — and we're just getting started. Our mission
                remains unchanged: capital for every skilled trader, globally.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2021" },
                { label: "Countries", value: "150+" },
                { label: "Instruments", value: "50+" },
                { label: "Avg Payout", value: "36hrs" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card-elevated rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-black font-display text-brand-gold mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-foreground/50">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="gradient-section-alt py-20 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Mission &amp; <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-foreground/50 text-sm max-w-xl mx-auto">
              Everything we do is guided by three core principles that put
              traders first.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated rounded-2xl p-7 text-center"
                data-ocid={`about.value.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Company <span className="text-gradient-gold">Timeline</span>
            </h2>
            <p className="text-foreground/50 text-sm">
              Five years of growth, payouts, and trader success
            </p>
          </div>
          <div className="relative space-y-0">
            <div className="absolute left-[1.875rem] sm:left-[3.5rem] top-4 bottom-4 w-px bg-brand-gold/20" />
            {timeline.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 sm:gap-8 items-start pb-8"
                data-ocid={`about.timeline.${i + 1}`}
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-[3.75rem] sm:w-28 h-[3.75rem] rounded-xl bg-brand-navy border border-brand-gold/30 flex items-center justify-center">
                    <span className="text-brand-gold font-black font-display text-sm sm:text-base">
                      {m.year}
                    </span>
                  </div>
                </div>
                <div className="card-elevated rounded-xl px-6 py-5 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-base">
                      {m.title}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green font-semibold">
                      {m.metric}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/55 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="gradient-section-alt py-20 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Meet the <span className="text-gradient-gold">Team</span>
            </h2>
            <p className="text-foreground/50 text-sm max-w-xl mx-auto">
              The people behind FX Expert Funded — experienced traders, risk
              experts, and fintech engineers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated rounded-2xl p-6 text-center"
                data-ocid={`about.team_member.${i + 1}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-navy border-2 border-brand-gold/30 flex items-center justify-center text-brand-gold font-black font-display text-lg mx-auto mb-4">
                  {member.initials}
                </div>
                <div className="font-semibold text-sm mb-1">{member.name}</div>
                <div className="text-xs text-brand-gold mb-3">
                  {member.role}
                </div>
                <p className="text-xs text-foreground/50 leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    aria-label={`${member.name} LinkedIn`}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-brand-gold/10 transition-smooth"
                  >
                    <Linkedin className="w-4 h-4 text-foreground/40 hover:text-brand-gold" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-3">
              Why Choose{" "}
              <span className="text-gradient-gold">FX Expert Funded</span>
            </h2>
            <p className="text-foreground/50 text-sm">
              Six reasons we outperform every competitor
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.point}
                initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-elevated rounded-xl px-5 py-4 flex items-center gap-4"
                data-ocid={`about.differentiator.${i + 1}`}
              >
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                  {d.icon}
                </div>
                <p className="text-sm text-foreground/70">{d.point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
            Join the{" "}
            <span className="text-gradient-gold">FX Expert Family</span>
          </h2>
          <p className="text-foreground/50 mb-8">
            15,000+ traders already funded across 150+ countries. Your turn.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/instant-funding"
              className="btn-primary inline-block text-base px-8 py-4"
              data-ocid="about.get_funded_button"
            >
              Get Funded Today
            </Link>
            <Link
              to="/challenge-accounts"
              className="btn-secondary inline-block text-base px-8 py-4"
              data-ocid="about.challenge_button"
            >
              Start Challenge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
