import { Link } from "@tanstack/react-router";
import {
  ArrowUpDown,
  BadgeCheck,
  CheckCircle2,
  Clock,
  DollarSign,
  Filter,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

interface ProofCard {
  id: string;
  initials: string;
  maskedName: string;
  country: string;
  flag: string;
  accountType: "Instant Funding" | "Challenge" | "Prime";
  amount: number;
  amountDisplay: string;
  date: string;
  accountSize: string;
  method: string;
}

const payoutCards: ProofCard[] = [
  {
    id: "1",
    initials: "RS",
    maskedName: "R*** S.",
    country: "India",
    flag: "🇮🇳",
    accountType: "Instant Funding",
    amount: 8420,
    amountDisplay: "$8,420",
    date: "May 12, 2026",
    accountSize: "$100,000",
    method: "USDT",
  },
  {
    id: "2",
    initials: "MA",
    maskedName: "M*** A.",
    country: "UAE",
    flag: "🇦🇪",
    accountType: "Prime",
    amount: 12000,
    amountDisplay: "$12,000",
    date: "May 10, 2026",
    accountSize: "$250,000",
    method: "Wire",
  },
  {
    id: "3",
    initials: "EK",
    maskedName: "E*** K.",
    country: "Romania",
    flag: "🇷🇴",
    accountType: "Challenge",
    amount: 5800,
    amountDisplay: "$5,800",
    date: "May 8, 2026",
    accountSize: "$50,000",
    method: "Crypto",
  },
  {
    id: "4",
    initials: "JO",
    maskedName: "J*** O.",
    country: "Nigeria",
    flag: "🇳🇬",
    accountType: "Prime",
    amount: 15200,
    amountDisplay: "$15,200",
    date: "May 7, 2026",
    accountSize: "$500,000",
    method: "USDT",
  },
  {
    id: "5",
    initials: "SM",
    maskedName: "S*** M.",
    country: "Spain",
    flag: "🇪🇸",
    accountType: "Instant Funding",
    amount: 4100,
    amountDisplay: "$4,100",
    date: "May 5, 2026",
    accountSize: "$50,000",
    method: "Wire",
  },
  {
    id: "6",
    initials: "CW",
    maskedName: "C*** W.",
    country: "Singapore",
    flag: "🇸🇬",
    accountType: "Challenge",
    amount: 9750,
    amountDisplay: "$9,750",
    date: "May 3, 2026",
    accountSize: "$100,000",
    method: "Crypto",
  },
  {
    id: "7",
    initials: "AJ",
    maskedName: "A*** J.",
    country: "Canada",
    flag: "🇨🇦",
    accountType: "Prime",
    amount: 22500,
    amountDisplay: "$22,500",
    date: "Apr 30, 2026",
    accountSize: "$500,000",
    method: "Wire",
  },
  {
    id: "8",
    initials: "FM",
    maskedName: "F*** M.",
    country: "Germany",
    flag: "🇩🇪",
    accountType: "Instant Funding",
    amount: 7350,
    amountDisplay: "$7,350",
    date: "Apr 28, 2026",
    accountSize: "$100,000",
    method: "USDT",
  },
  {
    id: "9",
    initials: "TN",
    maskedName: "T*** N.",
    country: "Japan",
    flag: "🇯🇵",
    accountType: "Challenge",
    amount: 18900,
    amountDisplay: "$18,900",
    date: "Apr 26, 2026",
    accountSize: "$200,000",
    method: "Wire",
  },
  {
    id: "10",
    initials: "LD",
    maskedName: "L*** D.",
    country: "France",
    flag: "🇫🇷",
    accountType: "Instant Funding",
    amount: 6650,
    amountDisplay: "$6,650",
    date: "Apr 24, 2026",
    accountSize: "$100,000",
    method: "Crypto",
  },
  {
    id: "11",
    initials: "KP",
    maskedName: "K*** P.",
    country: "UK",
    flag: "🇬🇧",
    accountType: "Prime",
    amount: 11200,
    amountDisplay: "$11,200",
    date: "Apr 22, 2026",
    accountSize: "$250,000",
    method: "Wire",
  },
  {
    id: "12",
    initials: "OS",
    maskedName: "O*** S.",
    country: "Brazil",
    flag: "🇧🇷",
    accountType: "Challenge",
    amount: 3900,
    amountDisplay: "$3,900",
    date: "Apr 20, 2026",
    accountSize: "$50,000",
    method: "USDT",
  },
  {
    id: "13",
    initials: "HK",
    maskedName: "H*** K.",
    country: "South Korea",
    flag: "🇰🇷",
    accountType: "Instant Funding",
    amount: 5500,
    amountDisplay: "$5,500",
    date: "Apr 18, 2026",
    accountSize: "$50,000",
    method: "Crypto",
  },
  {
    id: "14",
    initials: "AB",
    maskedName: "A*** B.",
    country: "Pakistan",
    flag: "🇵🇰",
    accountType: "Challenge",
    amount: 2800,
    amountDisplay: "$2,800",
    date: "Apr 15, 2026",
    accountSize: "$25,000",
    method: "USDT",
  },
  {
    id: "15",
    initials: "VR",
    maskedName: "V*** R.",
    country: "Mexico",
    flag: "🇲🇽",
    accountType: "Instant Funding",
    amount: 4600,
    amountDisplay: "$4,600",
    date: "Apr 12, 2026",
    accountSize: "$50,000",
    method: "Wire",
  },
  {
    id: "16",
    initials: "IB",
    maskedName: "I*** B.",
    country: "Turkey",
    flag: "🇹🇷",
    accountType: "Prime",
    amount: 9800,
    amountDisplay: "$9,800",
    date: "Apr 10, 2026",
    accountSize: "$150,000",
    method: "Crypto",
  },
];

const accountTypeBadgeColor = {
  "Instant Funding": "bg-brand-green/15 text-brand-green border-brand-green/30",
  Challenge: "bg-brand-gold/15 text-brand-gold border-brand-gold/30",
  Prime: "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

const statsData = [
  {
    icon: <DollarSign className="w-5 h-5 text-brand-gold" />,
    value: "$50M+",
    label: "Total Paid Out",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-brand-green" />,
    value: "25,000+",
    label: "Transactions",
  },
  {
    icon: <Users className="w-5 h-5 text-brand-gold" />,
    value: "$2,100",
    label: "Average Payout",
  },
  {
    icon: <Clock className="w-5 h-5 text-brand-green" />,
    value: "Today",
    label: "Latest Payout",
  },
];

type FilterType = "All" | "Instant Funding" | "Challenge" | "Prime";
type SortType = "Latest" | "Highest Amount";

export default function PayoutProofsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [sortBy, setSortBy] = useState<SortType>("Latest");

  const filtered = useMemo(() => {
    let list =
      activeFilter === "All"
        ? [...payoutCards]
        : payoutCards.filter((p) => p.accountType === activeFilter);
    if (sortBy === "Highest Amount") {
      list = list.sort((a, b) => b.amount - a.amount);
    }
    return list;
  }, [activeFilter, sortBy]);

  const filters: FilterType[] = [
    "All",
    "Instant Funding",
    "Challenge",
    "Prime",
  ];

  return (
    <div className="bg-background">
      <title>Payout Proofs &amp; Withdrawal History | FX Expert Funded</title>
      <meta
        name="description"
        content="Browse verified payout proofs from FX Expert Funded traders worldwide. $50M+ total paid out, 25,000+ transactions. Real withdrawals, real traders."
      />

      {/* Hero */}
      <section className="gradient-hero py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-64 rounded-full bg-brand-green/5 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-wider mb-6"
            data-ocid="payout.hero_badge"
          >
            <ShieldCheck className="w-4 h-4" /> 100% Verified Payouts
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-4 leading-tight"
          >
            Real Payouts,{" "}
            <span className="text-gradient-gold">Real Traders</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground/60 max-w-xl mx-auto mb-6"
          >
            Every withdrawal verified and published publicly. We are the most
            transparent prop firm in the industry — our track record speaks for
            itself.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block"
          >
            <div className="text-5xl font-black font-display text-shimmer">
              $50,000,000+
            </div>
            <div className="text-foreground/40 text-sm mt-1 tracking-widest uppercase">
              Total Paid to Traders
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="gradient-section-alt border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
              data-ocid={`payout.stat.${stat.label.toLowerCase().replace(/\s+/g, "_")}`}
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl font-black font-display">
                {stat.value}
              </div>
              <div className="text-xs text-foreground/50 mt-0.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-foreground/40" />
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth border ${
                    activeFilter === f
                      ? "bg-brand-gold text-brand-black border-brand-gold"
                      : "bg-transparent text-foreground/60 border-white/10 hover:border-brand-gold/30 hover:text-foreground"
                  }`}
                  data-ocid={`payout.filter_${f.toLowerCase().replace(/\s+/g, "_")}_tab`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-foreground/40" />
              <button
                type="button"
                onClick={() =>
                  setSortBy((s) =>
                    s === "Latest" ? "Highest Amount" : "Latest",
                  )
                }
                className="px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10 text-foreground/60 hover:border-brand-gold/30 hover:text-foreground transition-smooth"
                data-ocid="payout.sort_toggle"
              >
                Sort: {sortBy}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((proof, i) => (
              <motion.div
                key={proof.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.05 }}
                className="card-elevated rounded-xl p-5 flex flex-col gap-3"
                data-ocid={`payout.proof.${i + 1}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-brand-navy border border-brand-gold/20 flex items-center justify-center font-bold text-sm text-brand-gold">
                      {proof.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        {proof.maskedName}
                      </div>
                      <div className="text-xs text-foreground/40">
                        {proof.flag} {proof.country}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div className="text-center py-2 border-y border-white/5">
                  <div className="text-2xl font-black font-display text-brand-gold">
                    {proof.amountDisplay}
                  </div>
                  <div className="text-xs text-foreground/40 mt-0.5">
                    Withdrawal
                  </div>
                </div>

                {/* Meta */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground/40">Account</span>
                    <span className="text-foreground/70">
                      {proof.accountSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground/40">Method</span>
                    <span className="text-foreground/70">{proof.method}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground/40">Date</span>
                    <span className="text-foreground/70">{proof.date}</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                      accountTypeBadgeColor[proof.accountType]
                    }`}
                  >
                    {proof.accountType}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-brand-green font-semibold">
                    <BadgeCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="gradient-section-alt py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated rounded-2xl p-8 border border-brand-green/20"
          >
            <ShieldCheck className="w-10 h-10 text-brand-green mx-auto mb-4" />
            <h2 className="font-display font-black text-2xl mb-3">
              Independently Verified
            </h2>
            <p className="text-foreground/55 leading-relaxed mb-2">
              All payouts shown are processed within{" "}
              <span className="text-brand-green font-semibold">
                24–48 business hours
              </span>
              . Every withdrawal is verified by our independent third-party
              audit partner and published publicly for full transparency.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/40 mt-4">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Third-party audited · No edits · Updated weekly
            </div>
          </motion.div>
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
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
              Start Trading &{" "}
              <span className="text-gradient-gold">Get Paid Weekly</span>
            </h2>
            <p className="text-foreground/55 mb-8">
              Join 15,000+ funded traders who receive weekly payouts from FX
              Expert Funded. Your name could be in our next payout update.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/instant-funding"
                className="btn-primary px-10 py-4 text-base inline-flex items-center justify-center gap-2"
                data-ocid="payout.cta_instant_button"
              >
                <Zap className="w-4 h-4" /> Get Instant Funding
              </Link>
              <Link
                to="/challenge-accounts"
                className="btn-secondary px-8 py-4 text-base inline-flex items-center justify-center"
                data-ocid="payout.cta_challenge_button"
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

function Zap({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-label="Instant funding"
      role="img"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}
