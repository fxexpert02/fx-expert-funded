import { Link } from "@tanstack/react-router";
import { Play, ShieldCheck, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type ReviewFilter = "All Reviews" | "Instant Funding" | "Challenge" | "Prime";

const FILTERS: ReviewFilter[] = [
  "All Reviews",
  "Instant Funding",
  "Challenge",
  "Prime",
];

const ratingBreakdown = [
  { stars: 5, pct: 78 },
  { stars: 4, pct: 15 },
  { stars: 3, pct: 5 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

const reviews = [
  {
    id: "r1",
    name: "Rahul S.",
    flag: "🇮🇳",
    country: "India",
    stars: 5,
    type: "Instant Funding" as ReviewFilter,
    date: "May 14, 2026",
    profit: "+$8,420 this month",
    comment:
      "FX Expert Funded is the best prop firm I have ever traded with. Got my $100K account funded in minutes and the weekly payouts hit like clockwork. Transparent rules, no hidden games, absolutely top tier.",
  },
  {
    id: "r2",
    name: "Mohammed A.",
    flag: "🇦🇪",
    country: "UAE",
    stars: 5,
    type: "Instant Funding" as ReviewFilter,
    date: "May 12, 2026",
    profit: "+$12,000 this month",
    comment:
      "The instant funding option is a game changer. No challenges, no waiting — I withdrew $12,000 in my first month. The 90% profit split is incredible and the support team responds within hours.",
  },
  {
    id: "r3",
    name: "Elena K.",
    flag: "🇷🇴",
    country: "Romania",
    stars: 5,
    type: "Challenge" as ReviewFilter,
    date: "May 10, 2026",
    profit: "+$5,800 this month",
    comment:
      "Passed the Gold Challenge in 3 weeks. Support team was helpful and professional throughout. Payout was processed within 24 hours. This firm actually cares about their traders — rare in this industry.",
  },
  {
    id: "r4",
    name: "James O.",
    flag: "🇳🇬",
    country: "Nigeria",
    stars: 5,
    type: "Prime" as ReviewFilter,
    date: "May 9, 2026",
    profit: "+$15,200 this month",
    comment:
      "Been with FX Expert Funded for 2 years and over $40K in total payouts. Transparent rules, no manipulation, and the most honest prop firm in the industry. My Prime account scales beautifully.",
  },
  {
    id: "r5",
    name: "Sofia M.",
    flag: "🇪🇸",
    country: "Spain",
    stars: 5,
    type: "Instant Funding" as ReviewFilter,
    date: "May 8, 2026",
    profit: "+$3,200/month passive",
    comment:
      "The affiliate program is amazing — I earn 25% on every trader I refer and get paid weekly. Already making solid passive income while also trading my own funded accounts. Two income streams in one platform.",
  },
  {
    id: "r6",
    name: "Chen W.",
    flag: "🇸🇬",
    country: "Singapore",
    stars: 5,
    type: "Challenge" as ReviewFilter,
    date: "May 7, 2026",
    profit: "+$9,750 this month",
    comment:
      "Trading gold and forex with FX Expert Funded is seamless. MT5 execution is fast, spreads are tight, and the risk team is fair. Passed the challenge in 18 trading days with consistent results.",
  },
  {
    id: "r7",
    name: "Alex J.",
    flag: "🇺🇸",
    country: "USA",
    stars: 5,
    type: "Prime" as ReviewFilter,
    date: "May 5, 2026",
    profit: "+$22,500 this month",
    comment:
      "My Prime $500K account delivers exceptional performance. The dedicated account manager responds quickly, execution is flawless, and I've never had a payout issue. Highly recommend the Prime tier.",
  },
  {
    id: "r8",
    name: "Franz M.",
    flag: "🇩🇪",
    country: "Germany",
    stars: 4,
    type: "Challenge" as ReviewFilter,
    date: "May 4, 2026",
    profit: "+$7,350 this month",
    comment:
      "Good challenge evaluation process with fair rules. MT5 platform is stable and the customer service team resolved my issue quickly. Would like even tighter spreads on indices but overall very satisfied.",
  },
  {
    id: "r9",
    name: "Tanaka N.",
    flag: "🇯🇵",
    country: "Japan",
    stars: 5,
    type: "Instant Funding" as ReviewFilter,
    date: "May 3, 2026",
    profit: "+$18,900 this month",
    comment:
      "Instant funding was activated within 5 minutes of purchase. I was live trading before the hour was out. The 85% profit split on my Elite account keeps getting better as I scale. Outstanding platform.",
  },
  {
    id: "r10",
    name: "Lucas D.",
    flag: "🇫🇷",
    country: "France",
    stars: 5,
    type: "Challenge" as ReviewFilter,
    date: "May 2, 2026",
    profit: "+$6,650 this month",
    comment:
      "Clean and professional prop firm. The two-phase challenge is well-structured and the rules are transparent. Passed phase one in 12 days and phase two in 10 days. Payout arrived in 24 hours — exemplary.",
  },
  {
    id: "r11",
    name: "Priya P.",
    flag: "🇬🇧",
    country: "UK",
    stars: 5,
    type: "Prime" as ReviewFilter,
    date: "Apr 30, 2026",
    profit: "+$11,200 this month",
    comment:
      "The Prime account is exactly what professional traders need. Deep liquidity, fast withdrawals, and an account manager who genuinely understands trading. FX Expert Funded has earned my long-term loyalty.",
  },
  {
    id: "r12",
    name: "Olivia S.",
    flag: "🇧🇷",
    country: "Brazil",
    stars: 4,
    type: "Challenge" as ReviewFilter,
    date: "Apr 28, 2026",
    profit: "+$3,900 this month",
    comment:
      "Solid experience with the challenge account. Rules are clear and fair, especially the no-minimum-day rule for instant accounts. Support was a little slow once but has improved since. Will upgrade to Prime next.",
  },
  {
    id: "r13",
    name: "Kenji T.",
    flag: "🇰🇷",
    country: "South Korea",
    stars: 5,
    type: "Instant Funding" as ReviewFilter,
    date: "Apr 26, 2026",
    profit: "+$14,300 this month",
    comment:
      "I've tried 6 different prop firms over the years and FX Expert Funded is the only one I've stayed with. Fast payouts, real execution, and honest rules. The instant funding makes it easy to get started same day.",
  },
  {
    id: "r14",
    name: "Amira H.",
    flag: "🇸🇦",
    country: "Saudi Arabia",
    stars: 5,
    type: "Prime" as ReviewFilter,
    date: "Apr 24, 2026",
    profit: "+$8,800 this month",
    comment:
      "Exceptional service and professional trading environment. My Prime account was set up within the same business day. The scaled account grows automatically as I hit targets. Nothing else comes close in this industry.",
  },
  {
    id: "r15",
    name: "Victor N.",
    flag: "🇿️️",
    country: "South Africa",
    stars: 5,
    type: "Challenge" as ReviewFilter,
    date: "Apr 22, 2026",
    profit: "+$5,100 this month",
    comment:
      "FX Expert Funded changed my trading career. I passed the Gold Challenge, built consistent risk management habits, and now earn more from trading than my day job. The profit split is the best I have found anywhere.",
  },
];

const videoTestimonials = [
  {
    id: "v1",
    name: "Marcus T.",
    country: "🇺🇸 USA",
    quote: '"Withdrew $22K in my first month. Nothing beats FX Expert Funded."',
  },
  {
    id: "v2",
    name: "Zara K.",
    country: "🇬🇧 UK",
    quote:
      '"The challenge rules are the fairest I\'ve seen. Funded in 3 weeks."',
  },
  {
    id: "v3",
    name: "David C.",
    country: "🇦🇺 Australia",
    quote: '"Best prop firm for gold traders — tight spreads, fast payouts."',
  },
];

const AVATAR_COLORS = [
  "bg-brand-navy",
  "bg-brand-gold/20",
  "bg-brand-green/20",
  "bg-brand-navy",
  "bg-brand-gold/20",
];

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<ReviewFilter>("All Reviews");
  const filtered =
    activeFilter === "All Reviews"
      ? reviews
      : reviews.filter((r) => r.type === activeFilter);

  return (
    <div className="bg-background">
      <title>
        Trader Reviews &amp; Testimonials | 4.8/5 Rating - FX Expert Funded
      </title>

      {/* Hero */}
      <section className="gradient-hero py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-5xl sm:text-6xl mb-4"
          >
            What Our <span className="text-gradient-gold">Traders Say</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-xl mx-auto mb-10"
          >
            Over 1,200 verified funded traders share their real experiences with
            FX Expert Funded.
          </motion.p>

          {/* Big rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-6 px-8 py-5 rounded-2xl card-elevated mb-10"
            data-ocid="reviews.rating_badge"
          >
            <div>
              <div className="text-6xl font-black font-display text-brand-gold leading-none">
                4.8
              </div>
              <div className="text-xs text-foreground/40 mt-1">out of 5</div>
            </div>
            <div className="border-l border-white/10 pl-6">
              <div className="flex gap-1 mb-1.5">
                {[1, 2, 3, 4].map((s) => (
                  <Star
                    key={`hero-star-${s}`}
                    className="w-5 h-5 fill-brand-gold text-brand-gold"
                  />
                ))}
                <Star className="w-5 h-5 fill-brand-gold/60 text-brand-gold/60" />
              </div>
              <div className="text-sm text-foreground/50">
                1,200+ verified traders
              </div>
            </div>
          </motion.div>

          {/* Rating bars */}
          <div className="max-w-xs mx-auto space-y-2">
            {ratingBreakdown.map(({ stars, pct }) => (
              <div
                key={`bar-${stars}`}
                className="flex items-center gap-3 text-xs"
              >
                <span className="text-foreground/50 w-10 text-right shrink-0">
                  {stars} ★
                </span>
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (5 - stars) * 0.08 }}
                    className={`h-full rounded-full ${stars >= 4 ? "bg-brand-gold" : stars === 3 ? "bg-brand-gold/50" : "bg-brand-gold/25"}`}
                  />
                </div>
                <span className="text-foreground/40 w-8 shrink-0">{pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="gradient-section-alt border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                type="button"
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm transition-smooth ${activeFilter === f ? "bg-brand-gold text-brand-black font-semibold" : "bg-muted text-foreground/60 hover:text-foreground"}`}
                data-ocid={`reviews.filter_${f.toLowerCase().replace(/\s+/g, "_")}_tab`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Review Grid */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-elevated rounded-xl p-6 flex flex-col"
                data-ocid={`reviews.review.${i + 1}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star
                        key={`${r.id}-star-${j}`}
                        className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 font-medium">
                    {r.type}
                  </span>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-5 flex-1">
                  "{r.comment}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} border border-brand-gold/20 flex items-center justify-center text-base font-bold text-brand-gold`}
                      >
                        {r.flag}
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{r.name}</div>
                        <div className="text-xs text-foreground/40">
                          {r.country} · {r.date}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-1 rounded-full">
                      {r.profit}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="gradient-section-alt py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-black text-3xl text-center mb-10">
            Video <span className="text-gradient-gold">Testimonials</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated rounded-xl overflow-hidden"
                data-ocid={`reviews.video.${i + 1}`}
              >
                <div className="relative aspect-video bg-brand-navy/60 flex items-center justify-center cursor-pointer group">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/20 border-2 border-brand-gold/50 flex items-center justify-center group-hover:bg-brand-gold/30 transition-smooth">
                    <Play className="w-6 h-6 text-brand-gold fill-brand-gold ml-0.5" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold mb-1">{v.name}</p>
                  <p className="text-xs text-foreground/40 mb-2">{v.country}</p>
                  <p className="text-xs text-foreground/60 italic leading-relaxed">
                    {v.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badge */}
      <section className="py-8 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-brand-green/5 border border-brand-green/20">
            <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0" />
            <p className="text-sm text-foreground/60">
              <strong className="text-brand-green">
                Verified reviews only.
              </strong>{" "}
              All reviews are from verified funded traders — submitted through
              our secured trader portal after account funding.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-black text-3xl mb-4">
            Join Our Community of{" "}
            <span className="text-gradient-gold">Successful Traders</span>
          </h2>
          <p className="text-foreground/50 mb-8">
            Over 1,200 traders can't be wrong. Get funded today and write your
            own success story.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/instant-funding"
              className="btn-primary text-base px-10 py-4"
              data-ocid="reviews.instant_funding_button"
            >
              Get Instant Funding
            </Link>
            <Link
              to="/challenge-accounts"
              className="btn-secondary text-base px-10 py-4"
              data-ocid="reviews.challenge_button"
            >
              Start a Challenge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
