import { features, stats, testimonials } from "@/data";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Crown,
  DollarSign,
  Globe,
  Shield,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const tickerItems = [
  { pair: "EUR/USD", change: "+0.12%", positive: true },
  { pair: "GBP/USD", change: "-0.05%", positive: false },
  { pair: "XAU/USD", change: "+0.89%", positive: true },
  { pair: "BTC/USD", change: "+1.23%", positive: true },
  { pair: "USD/JPY", change: "-0.08%", positive: false },
  { pair: "NAS100", change: "+0.34%", positive: true },
  { pair: "US30", change: "+0.47%", positive: true },
  { pair: "GBP/JPY", change: "-0.19%", positive: false },
  { pair: "AUD/USD", change: "+0.22%", positive: true },
  { pair: "EUR/GBP", change: "-0.11%", positive: false },
  { pair: "XAG/USD", change: "+1.54%", positive: true },
  { pair: "USD/CAD", change: "+0.09%", positive: true },
];

function TickerBar() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="bg-brand-navy/80 border-b border-white/10 py-2 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span
              key={`ticker-${item.pair}-${i}`}
              className="inline-flex items-center gap-2 text-xs font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green inline-block animate-pulse-glow-green" />
              <span className="text-foreground/70 font-semibold">
                {item.pair}
              </span>
              <span
                className={item.positive ? "text-brand-green" : "text-red-400"}
              >
                {item.change}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TradingSparkline() {
  const path1 =
    "M0,40 C20,35 40,20 60,25 C80,30 100,15 120,10 C140,5 160,20 180,15 C200,10 220,5 240,8";
  const path2 =
    "M0,50 C30,45 50,55 80,40 C110,25 130,35 160,20 C180,10 210,15 240,12";
  return (
    <svg
      viewBox="0 0 240 60"
      className="w-full h-16 opacity-60"
      preserveAspectRatio="none"
      aria-label="Live trading price sparkline chart"
      role="img"
    >
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path d={path1} fill="none" stroke="url(#sparkGrad)" strokeWidth="1.5" />
      <path
        d={path2}
        fill="none"
        stroke="#00d084"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center gradient-hero overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Zap className="w-3 h-3" />
            Trusted Since 2021 · 15,000+ Funded Traders
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.04] mb-6"
          >
            Get Funded
            <span className="block">Up To</span>
            <span className="text-gradient-gold text-shimmer block">
              $1,000,000
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/60 leading-relaxed mb-8 max-w-xl"
          >
            Trade Forex, Gold, Indices &amp; Crypto with one of the most trusted
            prop firms since 2021. Weekly payouts, up to 90% profit split, and
            instant funded accounts available now.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Link
              to="/challenge-accounts"
              className="btn-primary flex items-center gap-2"
              data-ocid="hero.start_challenge_button"
            >
              Start Challenge <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/instant-funding"
              className="btn-secondary flex items-center gap-2"
              data-ocid="hero.instant_funding_button"
            >
              <Zap className="w-4 h-4" /> Get Instant Funding
            </Link>
            <Link
              to="/affiliate"
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-foreground/70 hover:text-brand-gold border border-white/15 hover:border-brand-gold/30 transition-smooth"
              data-ocid="hero.affiliate_button"
            >
              Become an Affiliate
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {(
              [
                { icon: ShieldCheck, label: "10,000+ Traders" },
                { icon: Calendar, label: "2021 Founded" },
                { icon: DollarSign, label: "$50M+ Paid" },
                { icon: Star, label: "Trustpilot 4.8" },
              ] as const
            ).map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40 border border-white/8"
              >
                <Icon className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                <span className="text-xs text-foreground/60 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="card-elevated p-7 rounded-2xl animate-pulse-glow-gold">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    Live Platform Stats
                  </div>
                  <div className="text-xs text-brand-green">
                    ● All systems operational
                  </div>
                </div>
              </div>
              <div className="text-xs text-foreground/40 font-mono">
                UTC 09:42
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-muted/40 rounded-xl p-4 border border-white/5"
                >
                  <div className="text-2xl font-black font-display text-brand-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/50 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <TradingSparkline />

            <div className="space-y-2.5 mt-4">
              {[
                "Weekly Payouts Guaranteed",
                "90% Profit Split",
                "No Hidden Fees",
                "MT5 Live Markets",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span className="text-foreground/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={`hero-star-${n}`}
                  className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                />
              ))}
              <span className="text-xs text-foreground/40 ml-1">
                4.9/5 · 2,400+ reviews
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

const statCounters = [
  { label: "Funded Traders", value: 15000, suffix: "+", prefix: "" },
  { label: "Total Payouts", value: 50, suffix: "M+", prefix: "$" },
  { label: "Success Rate", value: 95, suffix: "%", prefix: "" },
  { label: "Countries", value: 150, suffix: "+", prefix: "" },
];

function StatCounter({
  stat,
  inView,
}: { stat: (typeof statCounters)[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2200, inView);
  return (
    <div className="text-center">
      <div className="font-display font-black text-5xl sm:text-6xl text-gradient-gold mb-2">
        {stat.prefix}
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-foreground/50 text-sm font-medium">{stat.label}</div>
    </div>
  );
}

function StatsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-background border-b border-white/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3">
            Platform Statistics
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl">
            Numbers That{" "}
            <span className="text-gradient-gold">Speak for Themselves</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {statCounters.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`stats.counter.${i + 1}`}
            >
              <StatCounter stat={stat} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="gradient-section-alt py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">
            Why <span className="text-gradient-gold">10,000+ Traders</span>{" "}
            Choose Us
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Industry-leading terms, fast payouts, and real trading conditions
            that put traders first.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-elevated rounded-xl p-6"
              data-ocid={`features.card.${i + 1}`}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-display font-bold text-sm mb-2 text-brand-gold">
                {f.title}
              </h3>
              <p className="text-xs text-foreground/50 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const accountTypes = [
  {
    id: "instant",
    icon: Zap,
    name: "Instant Funding",
    tagline: "Trade Today, No Challenge",
    highlight: false,
    badge: null,
    features: [
      "No evaluation required",
      "Same-day account setup",
      "Up to 85% profit split",
      "10% max drawdown",
      "Weekly withdrawals",
    ],
    cta: "Get Started",
    href: "/instant-funding" as const,
    priceFrom: "From $99",
  },
  {
    id: "challenge",
    icon: Award,
    name: "Challenge Accounts",
    tagline: "Prove Skills, Get Funded",
    highlight: true,
    badge: "Most Popular",
    features: [
      "2-phase evaluation",
      "Lower entry cost",
      "Up to 90% profit split",
      "Scale to $1,000,000",
      "Free challenge reset",
    ],
    cta: "Start Challenge",
    href: "/challenge-accounts" as const,
    priceFrom: "From $59",
  },
  {
    id: "prime",
    icon: Crown,
    name: "Prime Accounts",
    tagline: "Institutional-Grade Funding",
    highlight: false,
    badge: null,
    features: [
      "Up to $1M capital",
      "Dedicated account manager",
      "Custom conditions",
      "Priority payout processing",
      "VIP trader community",
    ],
    cta: "Learn More",
    href: "/prime-accounts" as const,
    priceFrom: "From $999",
  },
];

function AccountTypesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3">
            Account Options
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">
            Choose Your{" "}
            <span className="text-gradient-gold">Path to Funding</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            Three ways to get funded. All paths lead to real capital and real
            profits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {accountTypes.map((acct, i) => {
            const Icon = acct.icon;
            return (
              <motion.div
                key={acct.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  acct.highlight
                    ? "bg-gradient-to-b from-brand-navy to-brand-navy/60 border-2 border-brand-gold/50 shadow-2xl"
                    : "card-elevated"
                }`}
                data-ocid={`accounts.${acct.id}_card`}
              >
                {acct.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-gold text-brand-black text-xs font-black tracking-wide">
                    {acct.badge}
                  </div>
                )}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    acct.highlight
                      ? "bg-brand-gold/20 border border-brand-gold/40"
                      : "bg-muted/60 border border-white/10"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${acct.highlight ? "text-brand-gold" : "text-foreground/60"}`}
                  />
                </div>
                <div className="text-xs text-foreground/40 uppercase tracking-widest mb-1">
                  {acct.tagline}
                </div>
                <h3 className="font-display font-black text-xl mb-1">
                  {acct.name}
                </h3>
                <div className="text-sm text-brand-gold font-semibold mb-5">
                  {acct.priceFrom}
                </div>
                <ul className="space-y-2.5 flex-1 mb-7">
                  {acct.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2.5 text-sm text-foreground/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to={acct.href}
                  className={
                    acct.highlight
                      ? "btn-primary text-center text-sm"
                      : "btn-secondary text-center text-sm"
                  }
                  data-ocid={`accounts.${acct.id}.cta_button`}
                >
                  {acct.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    <section className="gradient-section-alt py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3">
            Trader Stories
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">
            What Our <span className="text-gradient-gold">Traders Say</span>
          </h2>
          <p className="text-foreground/50 text-lg">
            Real stories from real funded traders worldwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          <AnimatePresence mode="wait">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.id}-pos-${i}-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ delay: i * 0.06 }}
                className="card-elevated rounded-xl p-6"
                data-ocid={`testimonials.card.${i + 1}`}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={`${t.id}-star-${j}`}
                      className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-brand-navy border border-brand-gold/20 flex items-center justify-center text-sm">
                      {t.flag}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-foreground/40">
                        {t.country} · {t.accountSize}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-brand-green">
                      {t.profit}
                    </div>
                    <div className="text-xs text-foreground/40">
                      Total profit
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/15 hover:border-brand-gold/40 flex items-center justify-center transition-smooth"
            aria-label="Previous testimonials"
            data-ocid="testimonials.prev_button"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={`dot-${t.id}`}
                type="button"
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  i === current ? "bg-brand-gold w-5" : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
                data-ocid={`testimonials.dot.${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/15 hover:border-brand-gold/40 flex items-center justify-center transition-smooth"
            aria-label="Next testimonials"
            data-ocid="testimonials.next_button"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/reviews"
            className="btn-secondary inline-flex items-center gap-2"
            data-ocid="testimonials.view_all_reviews_button"
          >
            View All Reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const trustPoints = [
  {
    icon: Calendar,
    title: "Working Since 2021",
    desc: "4+ years of reliable operations and consistent payouts.",
  },
  {
    icon: Zap,
    title: "Fast Payouts Guaranteed",
    desc: "Average 24-48hr processing. No unnecessary delays.",
  },
  {
    icon: Shield,
    title: "Transparent Rules",
    desc: "No hidden restrictions. Everything is clearly documented.",
  },
  {
    icon: Globe,
    title: "Global Trading Community",
    desc: "Connect with 15,000+ traders across 150+ countries.",
  },
  {
    icon: Users,
    title: "150+ Countries",
    desc: "Serving traders from Asia, Europe, Africa, and the Americas.",
  },
  {
    icon: TrendingUp,
    title: "Professional Risk Management",
    desc: "Industry-standard drawdown limits. Trader-first policies.",
  },
];

function TrustSection() {
  return (
    <section className="py-20 gradient-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-brand-gold/60 text-xs uppercase tracking-widest font-semibold mb-3">
            Our Commitment
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">
            Built on{" "}
            <span className="text-gradient-gold">Trust &amp; Transparency</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Since 2021, we have paid over $50 million to traders worldwide.
            Transparent rules, fast payouts, no manipulation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/3 border border-white/8 hover:border-brand-gold/20 transition-smooth"
                data-ocid={`trust.point.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm mb-1">
                    {point.title}
                  </h3>
                  <p className="text-xs text-foreground/50 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <Link
            to="/payout-proofs"
            className="btn-primary flex items-center gap-2"
            data-ocid="trust.view_payout_proofs_button"
          >
            View Payout Proofs <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="btn-secondary flex items-center gap-2"
            data-ocid="trust.about_us_button"
          >
            About Our Company
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, #d4af37 0%, #e8c84a 40%, #c9a227 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-black mb-4">
            Ready to Get Funded? Start Today
          </h2>
          <p className="text-brand-black/60 text-lg mb-8 max-w-xl mx-auto">
            Join 15,000+ traders who have already transformed their trading
            careers with FX Expert Funded.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/instant-funding"
              className="px-8 py-4 rounded-lg bg-brand-black text-brand-gold font-display font-bold text-base hover:bg-brand-navy transition-smooth shadow-xl"
              data-ocid="cta_banner.get_instant_funding_button"
            >
              Get Instant Funding
            </Link>
            <Link
              to="/challenge-accounts"
              className="px-8 py-4 rounded-lg border-2 border-brand-black/30 text-brand-black font-display font-bold text-base hover:bg-brand-black/10 transition-smooth"
              data-ocid="cta_banner.start_challenge_button"
            >
              Start a Challenge
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <TickerBar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AccountTypesSection />
      <TestimonialsSection />
      <TrustSection />
      <CTABanner />
    </>
  );
}
