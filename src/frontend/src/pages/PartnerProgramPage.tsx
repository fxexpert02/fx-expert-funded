import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  CheckCircle2,
  Code2,
  Globe,
  Handshake,
  Megaphone,
  MonitorSmartphone,
  Users,
  Webhook,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const tiers = [
  {
    id: "affiliate",
    label: "Affiliate",
    badge: "Get Started",
    commission: "25%",
    commissionNote: "Flat commission",
    features: [
      "Referral link tracking",
      "Weekly payouts",
      "Real-time dashboard",
      "Marketing materials",
      "Email support",
    ],
    cta: "Join as Affiliate",
    href: "/affiliate",
    highlighted: false,
  },
  {
    id: "ib-partner",
    label: "IB Partner",
    badge: "Most Popular",
    commission: "20–25%",
    commissionNote: "Tiered commission",
    features: [
      "Everything in Affiliate",
      "Dedicated partner manager",
      "Co-branded landing pages",
      "Sub-IB network support",
      "Advanced analytics",
      "Priority support 24/7",
    ],
    cta: "Apply as IB Partner",
    href: "#apply",
    highlighted: true,
  },
  {
    id: "strategic",
    label: "Strategic Partner",
    badge: "Enterprise",
    commission: "Revenue Share",
    commissionNote: "Custom structure",
    features: [
      "Everything in IB Partner",
      "White-label solution",
      "API access (full suite)",
      "Full marketing suite",
      "Webhook notifications",
      "Custom revenue model",
      "Dedicated tech support",
    ],
    cta: "Apply as Strategic Partner",
    href: "#apply",
    highlighted: false,
  },
];

const comparisonFeatures = [
  {
    feature: "Commission Rate",
    affiliate: "25% flat",
    ib: "20–25% tiered",
    strategic: "Custom revenue share",
  },
  { feature: "Dedicated Manager", affiliate: "—", ib: "✓", strategic: "✓" },
  { feature: "Co-Branded Pages", affiliate: "—", ib: "✓", strategic: "✓" },
  { feature: "White-Label Access", affiliate: "—", ib: "—", strategic: "✓" },
  {
    feature: "API Integration",
    affiliate: "—",
    ib: "Read-only stats",
    strategic: "Full API suite",
  },
];

const apiFeatures = [
  {
    icon: <BarChart3 className="w-5 h-5 text-brand-gold" />,
    title: "Real-Time Stats API",
    desc: "Live access to account performance, trader stats, and payout data via REST endpoints.",
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5 text-brand-gold" />,
    title: "Account Management API",
    desc: "Create, activate, and manage trader accounts programmatically through a secure API.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-brand-gold" />,
    title: "Data Integration",
    desc: "Pull trading data, metrics, and reports into your own dashboards and CRM systems.",
  },
  {
    icon: <Webhook className="w-5 h-5 text-brand-gold" />,
    title: "Webhook Notifications",
    desc: "Receive real-time events for account status changes, payouts, and new signups.",
  },
];

const marketingSupport = [
  {
    icon: <Megaphone className="w-5 h-5 text-brand-gold" />,
    title: "Joint Webinars",
    desc: "Co-host live trading webinars with FX Expert Funded to engage and grow your audience.",
  },
  {
    icon: <Globe className="w-5 h-5 text-brand-gold" />,
    title: "Co-Branded Landing Pages",
    desc: "Custom pages featuring your brand alongside ours — built for maximum conversions.",
  },
  {
    icon: <Users className="w-5 h-5 text-brand-gold" />,
    title: "Shared Social Content",
    desc: "Branded graphics, videos, and posts for your social media channels, ready to share.",
  },
  {
    icon: <Handshake className="w-5 h-5 text-brand-gold" />,
    title: "Dedicated Marketing Manager",
    desc: "A real human partner manager helps you launch campaigns, track results, and optimize.",
  },
];

const countries = [
  "United States",
  "United Kingdom",
  "India",
  "UAE",
  "Singapore",
  "Germany",
  "France",
  "Canada",
  "Australia",
  "Japan",
  "Brazil",
  "South Africa",
  "Nigeria",
  "Pakistan",
  "Malaysia",
  "Indonesia",
  "Philippines",
  "Vietnam",
  "Thailand",
  "Other",
];

export default function PartnerProgramPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    country: "",
    partnerType: "",
    website: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-background">
      <title>
        Partner Program - White Label &amp; IB Opportunities | FX Expert Funded
      </title>

      {/* Hero */}
      <section className="gradient-hero py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-semibold text-brand-gold mb-5"
          >
            <Zap className="w-3.5 h-3.5" />
            Global Partnership Program
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl mb-5"
          >
            Build Your{" "}
            <span className="text-gradient-gold">Trading Business</span> with Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10"
          >
            Join our global network of affiliate partners, IBs, and strategic
            white-label partners. Choose your tier and start earning from day
            one.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#tiers"
              className="btn-primary text-sm px-8 py-3.5"
              data-ocid="partner_program.hero_cta_button"
            >
              View Partnership Tiers
            </a>
            <a
              href="#apply"
              className="btn-secondary text-sm px-8 py-3.5"
              data-ocid="partner_program.hero_apply_button"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tier Cards */}
      <section id="tiers" className="gradient-section-alt py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl mb-3">
              Choose Your{" "}
              <span className="text-gradient-gold">Partnership Tier</span>
            </h2>
            <p className="text-foreground/50 max-w-xl mx-auto">
              From simple referral links to full white-label solutions — pick
              the structure that fits your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`card-elevated rounded-2xl p-7 flex flex-col relative ${tier.highlighted ? "border-brand-gold/40 glow-gold-sm" : ""}`}
                data-ocid={`partner_program.tier_card.${i + 1}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-gold text-brand-black text-xs font-black tracking-wider">
                    {tier.badge}
                  </div>
                )}
                <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4">
                  <Handshake className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-display font-black text-xl mb-1">
                  {tier.label}
                </h3>
                <span className="text-3xl font-black text-brand-gold font-display">
                  {tier.commission}
                </span>
                <p className="text-xs text-foreground/40 mb-5">
                  {tier.commissionNote}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-foreground/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={tier.href}
                  className={
                    tier.highlighted
                      ? "btn-primary text-sm text-center py-3"
                      : "btn-secondary text-sm text-center py-3"
                  }
                  data-ocid={`partner_program.tier_cta.${i + 1}`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-black text-3xl text-center mb-10">
            Tier <span className="text-gradient-gold">Comparison</span>
          </h2>
          <div className="card-elevated rounded-2xl overflow-hidden">
            <table
              className="w-full text-sm"
              data-ocid="partner_program.comparison_table"
            >
              <thead>
                <tr className="border-b border-white/10 bg-muted/50">
                  <th className="text-left px-6 py-4 text-foreground/50 font-semibold">
                    Feature
                  </th>
                  <th className="text-center px-4 py-4 font-display font-bold text-foreground/80">
                    Affiliate
                  </th>
                  <th className="text-center px-4 py-4 font-display font-bold text-brand-gold">
                    IB Partner
                  </th>
                  <th className="text-center px-4 py-4 font-display font-bold text-foreground/80">
                    Strategic
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/8 ${i % 2 === 1 ? "bg-muted/20" : ""}`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground/70">
                      {row.feature}
                    </td>
                    <td className="px-4 py-4 text-center text-foreground/50">
                      {row.affiliate}
                    </td>
                    <td className="px-4 py-4 text-center text-brand-gold font-semibold">
                      {row.ib}
                    </td>
                    <td className="px-4 py-4 text-center text-foreground/50">
                      {row.strategic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="gradient-section-alt py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-xs font-semibold text-brand-gold mb-4">
                <Code2 className="w-3.5 h-3.5" />
                Strategic Partners Only
              </div>
              <h2 className="font-display font-black text-3xl mb-4">
                API{" "}
                <span className="text-gradient-gold">Integration Suite</span>
              </h2>
              <p className="text-foreground/50 leading-relaxed mb-6">
                Strategic Partners get full programmatic access to our platform.
                Build custom dashboards, automate workflows, and integrate FX
                Expert Funded into your existing tech stack.
              </p>
              <a
                href="#apply"
                className="btn-secondary text-sm px-6 py-3"
                data-ocid="partner_program.api_cta_button"
              >
                Request API Access
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {apiFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated rounded-xl p-5"
                  data-ocid={`partner_program.api_card.${i + 1}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-3">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1.5">{f.title}</h4>
                  <p className="text-xs text-foreground/50 leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co-Marketing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl mb-3">
              Co-Marketing <span className="text-gradient-gold">Support</span>
            </h2>
            <p className="text-foreground/50 max-w-xl mx-auto">
              We invest in our partners' success. IB and Strategic partners
              receive dedicated co-marketing resources.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {marketingSupport.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated rounded-xl p-6 text-center"
                data-ocid={`partner_program.marketing_card.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Models */}
      <section className="gradient-section-alt py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-black text-3xl text-center mb-12">
            Revenue <span className="text-gradient-gold">Share Models</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-5">
                <BarChart3 className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                Flat Commission
              </h3>
              <p className="text-foreground/55 text-sm leading-relaxed mb-4">
                Earn a fixed <strong className="text-brand-gold">25%</strong> on
                every purchase your referrals make. Simple, transparent, and
                predictable. Perfect for content creators, social media
                influencers, and bloggers who want a straightforward earning
                model.
              </p>
              <ul className="space-y-2">
                {[
                  "Paid weekly",
                  "No minimum payout",
                  "Lifetime cookie tracking",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-foreground/65"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-brand-navy/40 border border-brand-gold/20 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                Revenue Share
              </h3>
              <p className="text-foreground/55 text-sm leading-relaxed mb-4">
                Strategic partners negotiate a{" "}
                <strong className="text-brand-gold">
                  custom revenue share
                </strong>{" "}
                based on trading volume, referred account size, and total
                network. This model scales with your growth — the bigger your
                network, the more you earn.
              </p>
              <ul className="space-y-2">
                {[
                  "Scales with volume",
                  "Monthly settlement",
                  "Dedicated reporting",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-foreground/65"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl mb-3">
              Start Earning with{" "}
              <span className="text-gradient-gold">FX Expert Funded</span>
            </h2>
            <p className="text-foreground/50">
              Fill in your details and our partner team will reach out within 24
              hours.
            </p>
          </div>
          <div className="card-elevated rounded-2xl p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
                data-ocid="partner_program.success_state"
              >
                <div className="w-16 h-16 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-brand-green">
                  Application Submitted!
                </h3>
                <p className="text-foreground/50 text-sm">
                  Thank you for applying. Our partnership team will review your
                  application and contact you within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
                data-ocid="partner_program.apply_form"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="pp-name"
                      className="block text-xs font-semibold text-foreground/50 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="pp-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                      data-ocid="partner_program.name_input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="pp-company"
                      className="block text-xs font-semibold text-foreground/50 mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      id="pp-company"
                      type="text"
                      placeholder="Company (optional)"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                      data-ocid="partner_program.company_input"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="pp-country"
                      className="block text-xs font-semibold text-foreground/50 mb-1.5"
                    >
                      Country *
                    </label>
                    <select
                      id="pp-country"
                      required
                      value={formState.country}
                      onChange={(e) =>
                        setFormState({ ...formState, country: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm text-foreground/80 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                      data-ocid="partner_program.country_select"
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="pp-type"
                      className="block text-xs font-semibold text-foreground/50 mb-1.5"
                    >
                      Partnership Type *
                    </label>
                    <select
                      id="pp-type"
                      required
                      value={formState.partnerType}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          partnerType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm text-foreground/80 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                      data-ocid="partner_program.type_select"
                    >
                      <option value="">Select type</option>
                      <option value="affiliate">Affiliate</option>
                      <option value="ib">IB Partner</option>
                      <option value="strategic">Strategic Partner</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="pp-website"
                    className="block text-xs font-semibold text-foreground/50 mb-1.5"
                  >
                    Website URL (optional)
                  </label>
                  <input
                    id="pp-website"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formState.website}
                    onChange={(e) =>
                      setFormState({ ...formState, website: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                    data-ocid="partner_program.website_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pp-desc"
                    className="block text-xs font-semibold text-foreground/50 mb-1.5"
                  >
                    Brief Description *
                  </label>
                  <textarea
                    id="pp-desc"
                    rows={4}
                    required
                    placeholder="Tell us about your community, audience, or business model..."
                    value={formState.description}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        description: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast resize-none"
                    data-ocid="partner_program.description_textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-sm"
                  data-ocid="partner_program.submit_button"
                >
                  Submit Partnership Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
