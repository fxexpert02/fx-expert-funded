import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, M as MessageCircle, S as Send } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
import { S as Shield } from "./shield-lUrlHG6O.js";
import { C as Clock } from "./clock-C5tE6HL9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
const contactCards = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-brand-gold" }),
    title: "Email Support",
    value: "support@fxexpertfunded.com",
    sub: "Response within 24 hours",
    href: "mailto:support@fxexpertfunded.com"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 text-brand-green" }),
    title: "WhatsApp",
    value: "+1 (555) 123-4567",
    sub: "Available Mon–Sat 9am–8pm UTC",
    href: "https://wa.me/15551234567"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5 text-[#229ED9]" }),
    title: "Telegram",
    value: "@FXExpertFunded",
    sub: "Fastest response channel",
    href: "https://t.me/FXExpertFunded"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-brand-gold" }),
    title: "Live Chat",
    value: "Bottom-Right Corner",
    sub: "24/7 availability",
    href: "#"
  }
];
const supportHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 8:00 PM UTC" },
  { day: "Saturday – Sunday", hours: "10:00 AM – 6:00 PM UTC" },
  { day: "Emergency Support", hours: "24/7 via Telegram" }
];
const faqLinks = [
  { q: "How fast are payouts processed?", href: "/faq" },
  { q: "What is the maximum drawdown allowed?", href: "/faq" },
  { q: "Can I use EAs and automated trading?", href: "/faq" },
  { q: "How does the affiliate program work?", href: "/faq" },
  { q: "Can I hold positions over weekends?", href: "/faq" }
];
const subjects = [
  "General Inquiry",
  "Account Help",
  "Affiliate Question",
  "Technical Issue",
  "Partnership",
  "Billing"
];
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Contact FX Expert Funded - 24/7 Trader Support" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-hero py-20 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-semibold mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-brand-green animate-pulse" }),
            "Support Online Now"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.05 },
          className: "font-display font-black text-5xl sm:text-6xl mb-4",
          children: [
            "We're Here ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "to Help" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "text-lg text-foreground/60 mb-6",
          children: "Our dedicated support team is standing by to assist you. Expect a response to every message."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.15 },
          className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-semibold text-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
            "24 Hour Response Guarantee"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-section-alt py-12 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: contactCards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: card.href,
        target: card.href.startsWith("http") ? "_blank" : void 0,
        rel: card.href.startsWith("http") ? "noopener noreferrer" : void 0,
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.08 },
        className: "card-elevated rounded-xl p-5 flex flex-col gap-3 hover:border-brand-gold/30 transition-smooth",
        "data-ocid": `contact.info_card.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-muted flex items-center justify-center", children: card.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm mb-0.5", children: card.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-brand-gold text-sm font-medium", children: card.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/40 mt-0.5", children: card.sub })
          ] })
        ]
      },
      card.title
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-elevated rounded-2xl p-8", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "text-center py-12",
          "data-ocid": "contact.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "✅" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl mb-2", children: "Message Sent!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/55 mb-6", children: "Thank you! We'll respond within 24 hours. Check your email for confirmation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSubmitted(false),
                className: "btn-secondary text-sm px-6 py-2.5",
                "data-ocid": "contact.send_another_button",
                children: "Send Another Message"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl mb-1", children: "Send a Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/40", children: "Fill out the form and we'll get back to you within 24 hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "contact-name",
              className: "block text-xs font-semibold text-foreground/50 mb-1.5",
              children: "Full Name *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "contact-name",
              type: "text",
              required: true,
              placeholder: "John Doe",
              className: "w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
              "data-ocid": "contact.name_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "contact-email",
                className: "block text-xs font-semibold text-foreground/50 mb-1.5",
                children: "Email *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "contact-email",
                type: "email",
                required: true,
                placeholder: "you@example.com",
                className: "w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
                "data-ocid": "contact.email_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "contact-phone",
                className: "block text-xs font-semibold text-foreground/50 mb-1.5",
                children: "Phone (optional)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "contact-phone",
                type: "tel",
                placeholder: "+1 555 000 0000",
                className: "w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
                "data-ocid": "contact.phone_input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "contact-subject",
              className: "block text-xs font-semibold text-foreground/50 mb-1.5",
              children: "Subject *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "contact-subject",
              required: true,
              className: "w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
              "data-ocid": "contact.subject_select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a topic…" }),
                subjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "contact-message",
              className: "block text-xs font-semibold text-foreground/50 mb-1.5",
              children: "Message *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "contact-message",
              required: true,
              rows: 5,
              placeholder: "How can we help you? Please describe your question or issue in detail.",
              className: "w-full px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast resize-none",
              "data-ocid": "contact.message_textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "btn-primary w-full py-3 text-sm",
            "data-ocid": "contact.submit_button",
            children: "Send Message"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/30 text-center", children: "By submitting, you agree to our Privacy Policy. We never spam." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevated rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-base mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-brand-gold" }),
            "Support Hours"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: supportHours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between items-start gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/50", children: h.day }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-brand-gold text-right", children: h.hours })
              ]
            },
            h.day
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevated rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base mb-4", children: "Quick Answers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: faqLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/faq",
              className: "flex items-center gap-2 text-xs text-foreground/60 hover:text-brand-gold transition-colors-fast py-1",
              "data-ocid": "contact.faq_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 flex-shrink-0 text-brand-gold/50" }),
                item.q
              ]
            },
            item.q
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/faq",
              className: "btn-secondary w-full text-center text-xs py-2.5 mt-4 block",
              "data-ocid": "contact.view_all_faq_button",
              children: "View All FAQs"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-elevated rounded-xl p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: [
          "🔒 SSL Secured Connection",
          "🛡️ 2FA Available",
          "🏦 Bank-level Encryption"
        ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex items-center gap-2 text-xs text-foreground/50",
            children: badge
          },
          badge
        )) }) })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as default
};
