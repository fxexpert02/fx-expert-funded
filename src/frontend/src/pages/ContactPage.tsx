import { Link } from "@tanstack/react-router";
import {
  Clock,
  ExternalLink,
  Mail,
  MessageCircle,
  Send,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const contactCards = [
  {
    icon: <Mail className="w-5 h-5 text-brand-gold" />,
    title: "Email Support",
    value: "support@fxexpertfunded.com",
    sub: "Response within 24 hours",
    href: "mailto:support@fxexpertfunded.com",
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-brand-green" />,
    title: "WhatsApp",
    value: "+1 (555) 123-4567",
    sub: "Available Mon–Sat 9am–8pm UTC",
    href: "https://wa.me/15551234567",
  },
  {
    icon: <Send className="w-5 h-5 text-[#229ED9]" />,
    title: "Telegram",
    value: "@FXExpertFunded",
    sub: "Fastest response channel",
    href: "https://t.me/FXExpertFunded",
  },
  {
    icon: <Clock className="w-5 h-5 text-brand-gold" />,
    title: "Live Chat",
    value: "Bottom-Right Corner",
    sub: "24/7 availability",
    href: "#",
  },
];

const supportHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 8:00 PM UTC" },
  { day: "Saturday – Sunday", hours: "10:00 AM – 6:00 PM UTC" },
  { day: "Emergency Support", hours: "24/7 via Telegram" },
];

const faqLinks = [
  { q: "How fast are payouts processed?", href: "/faq" },
  { q: "What is the maximum drawdown allowed?", href: "/faq" },
  { q: "Can I use EAs and automated trading?", href: "/faq" },
  { q: "How does the affiliate program work?", href: "/faq" },
  { q: "Can I hold positions over weekends?", href: "/faq" },
];

const subjects = [
  "General Inquiry",
  "Account Help",
  "Affiliate Question",
  "Technical Issue",
  "Partnership",
  "Billing",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-background">
      <title>Contact FX Expert Funded - 24/7 Trader Support</title>

      {/* Hero */}
      <section className="gradient-hero py-20 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-semibold mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            Support Online Now
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display font-black text-5xl sm:text-6xl mb-4"
          >
            We&apos;re Here <span className="text-gradient-gold">to Help</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 mb-6"
          >
            Our dedicated support team is standing by to assist you. Expect a
            response to every message.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-semibold text-sm"
          >
            <Shield className="w-4 h-4" />
            24 Hour Response Guarantee
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="gradient-section-alt py-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, i) => (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-elevated rounded-xl p-5 flex flex-col gap-3 hover:border-brand-gold/30 transition-smooth"
                data-ocid={`contact.info_card.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm mb-0.5">
                    {card.title}
                  </div>
                  <div className="text-brand-gold text-sm font-medium">
                    {card.value}
                  </div>
                  <div className="text-xs text-foreground/40 mt-0.5">
                    {card.sub}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main section: form + sidebar */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card-elevated rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center mx-auto mb-5">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-foreground/55 mb-6">
                    Thank you! We'll respond within 24 hours. Check your email
                    for confirmation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-sm px-6 py-2.5"
                    data-ocid="contact.send_another_button"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-6">
                    <h2 className="font-display font-bold text-xl mb-1">
                      Send a Message
                    </h2>
                    <p className="text-sm text-foreground/40">
                      Fill out the form and we'll get back to you within 24
                      hours.
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-foreground/50 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                      data-ocid="contact.name_input"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-foreground/50 mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                        data-ocid="contact.email_input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-foreground/50 mb-1.5"
                      >
                        Phone (optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 555 000 0000"
                        className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                        data-ocid="contact.phone_input"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-foreground/50 mb-1.5"
                    >
                      Subject *
                    </label>
                    <select
                      id="contact-subject"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                      data-ocid="contact.subject_select"
                    >
                      <option value="">Select a topic…</option>
                      {subjects.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-foreground/50 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="How can we help you? Please describe your question or issue in detail."
                      className="w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast resize-none"
                      data-ocid="contact.message_textarea"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-sm"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-foreground/30 text-center">
                    By submitting, you agree to our Privacy Policy. We never
                    spam.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Support hours */}
            <div className="card-elevated rounded-xl p-6">
              <h3 className="font-display font-bold text-base mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                Support Hours
              </h3>
              <div className="space-y-3">
                {supportHours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-start gap-3"
                  >
                    <span className="text-xs text-foreground/50">{h.day}</span>
                    <span className="text-xs font-semibold text-brand-gold text-right">
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ quick links */}
            <div className="card-elevated rounded-xl p-6">
              <h3 className="font-display font-bold text-base mb-4">
                Quick Answers
              </h3>
              <div className="space-y-2">
                {faqLinks.map((item) => (
                  <Link
                    key={item.q}
                    to="/faq"
                    className="flex items-center gap-2 text-xs text-foreground/60 hover:text-brand-gold transition-colors-fast py-1"
                    data-ocid="contact.faq_link"
                  >
                    <ExternalLink className="w-3 h-3 flex-shrink-0 text-brand-gold/50" />
                    {item.q}
                  </Link>
                ))}
              </div>
              <Link
                to="/faq"
                className="btn-secondary w-full text-center text-xs py-2.5 mt-4 block"
                data-ocid="contact.view_all_faq_button"
              >
                View All FAQs
              </Link>
            </div>

            {/* Security badges */}
            <div className="card-elevated rounded-xl p-5">
              <div className="space-y-2.5">
                {[
                  "🔒 SSL Secured Connection",
                  "🛡️ 2FA Available",
                  "🏦 Bank-level Encryption",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 text-xs text-foreground/50"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
