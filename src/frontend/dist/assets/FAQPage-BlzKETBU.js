import { r as reactExports, j as jsxRuntimeExports, M as MessageCircle, C as ChevronDown, L as Link } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
import { S as Search } from "./search-fzUlFKeu.js";
import { A as AnimatePresence } from "./index-JgOTx1H4.js";
const faqData = [
  {
    id: "g1",
    question: "What is FX Expert Funded?",
    answer: "FX Expert Funded is a proprietary trading firm (prop firm) founded in 2021 that provides capital to Forex, Gold, Indices, and Crypto traders worldwide. We offer two account paths: Instant Funding (no evaluation required) and Challenge Accounts (evaluation-based). Traders keep up to 90% of their profits.",
    category: "General"
  },
  {
    id: "g2",
    question: "How long have you been operating?",
    answer: "FX Expert Funded has been serving traders globally since 2021. In that time we have funded over 15,000 traders across 150+ countries, paid out over $50 million, and built a reputation as one of the most reliable and transparent prop firms in the industry.",
    category: "General"
  },
  {
    id: "g3",
    question: "Which countries are supported?",
    answer: "We accept traders from 150+ countries worldwide. We are currently unavailable to residents of the United States, North Korea, Iran, and a small number of other jurisdictions due to regulatory requirements. If you are unsure, please contact our support team.",
    category: "General"
  },
  {
    id: "g4",
    question: "Is there a refund policy?",
    answer: "We offer a 14-day refund for Challenge accounts that have not yet been accessed. Instant Funding accounts are non-refundable once activated. Please review our full refund policy page before making a purchase decision.",
    category: "General"
  },
  {
    id: "a1",
    question: "What is the difference between Instant Funding and a Challenge?",
    answer: "Instant Funding accounts are activated immediately after purchase — no evaluation, no profit targets, no minimum days. You just start trading and keep your profits. Challenge Accounts require passing a 2-phase evaluation (profit targets of 10% Phase 1 and 5% Phase 2), but they cost significantly less upfront.",
    category: "Account Types"
  },
  {
    id: "a2",
    question: "Can I trade multiple accounts simultaneously?",
    answer: "Yes, you may hold multiple funded accounts simultaneously. However, the aggregate total across all accounts must remain within our standard risk rules. Accounts cannot be used for coordinated copy trading that bypasses individual account risk limits.",
    category: "Account Types"
  },
  {
    id: "a3",
    question: "What are Prime Accounts?",
    answer: "Prime Accounts are our VIP-tier funded accounts offering $150,000 to $500,000 in capital, 85–92% profit splits, a dedicated account manager, priority 24-hour withdrawals, custom risk parameters, and access to our exclusive VIP Telegram group. Apply through our Prime Accounts page.",
    category: "Account Types"
  },
  {
    id: "a4",
    question: "Can I scale my funded account?",
    answer: "Yes. Our scaling plan allows accounts to grow up to $1,000,000. After generating 10% profit consistently over 3 consecutive months, your account size increases by 25%. This repeats until you reach the $1M cap.",
    category: "Account Types"
  },
  {
    id: "f1",
    question: "How are payouts processed?",
    answer: "Payouts are processed within 24–48 business hours of submission. We support USDT (TRC-20, ERC-20), Bitcoin, Ethereum, and international bank wire transfers. All payouts are verified and published publicly on our Payout Proofs page.",
    category: "Funding & Payouts"
  },
  {
    id: "f2",
    question: "When can I make my first withdrawal?",
    answer: "For Instant Funding accounts, you can request your first withdrawal after your first profitable week — as early as 7 days from account activation. For Challenge funded accounts, the first withdrawal is available after 14 days of trading the funded account. Prime members receive priority processing.",
    category: "Funding & Payouts"
  },
  {
    id: "f3",
    question: "What payment methods are accepted?",
    answer: "We accept USDT (TRC-20 and ERC-20), Bitcoin (BTC), Ethereum (ETH), and international bank wire transfers for payouts. For account purchases, we accept all major credit/debit cards, crypto, and wire transfers.",
    category: "Funding & Payouts"
  },
  {
    id: "f4",
    question: "Are there any monthly fees?",
    answer: "No monthly fees, ever. You pay a one-time fee for your account or challenge. There are no recurring platform fees, data fees, or hidden charges. Your only ongoing consideration is the profit split — you keep up to 90% of all profits.",
    category: "Funding & Payouts"
  },
  {
    id: "r1",
    question: "What happens if I violate the trading rules?",
    answer: "Minor violations receive a warning. Repeated violations trigger an account review. Serious breaches (max drawdown exceeded, prohibited strategies confirmed) result in account termination. We follow a fair 3-step escalation — see our Trading Rules page for full details.",
    category: "Trading Rules"
  },
  {
    id: "r2",
    question: "Is news trading allowed?",
    answer: "Yes, news trading is fully permitted on all account types. You may hold positions before, during, and after high-impact news events. We recommend using appropriate position sizing around volatile news releases to stay within daily drawdown limits.",
    category: "Trading Rules"
  },
  {
    id: "r3",
    question: "What leverage can I use?",
    answer: "Maximum leverage is 1:100 for Forex and Gold/Silver, 1:50 for Stock Indices, and 1:10 for Cryptocurrency. Prime Account holders can negotiate custom leverage up to 1:200 for Forex pairs.",
    category: "Trading Rules"
  },
  {
    id: "r4",
    question: "Are Expert Advisors (EAs) and automated strategies allowed?",
    answer: "Yes, EAs and fully automated trading systems are permitted on all account types. All strategies including scalping, swing trading, hedging, and news trading are allowed — as long as they comply with drawdown rules and do not use prohibited martingale or grid systems.",
    category: "Trading Rules"
  },
  {
    id: "aff1",
    question: "How do I join the affiliate program?",
    answer: "Visit our Affiliate Program page and click 'Join Now'. Complete the short application, get your unique referral link, and start earning immediately. No minimum traffic requirements. All traders are welcome to become affiliates.",
    category: "Affiliate Program"
  },
  {
    id: "aff2",
    question: "How often are affiliate commissions paid?",
    answer: "Affiliate commissions are paid every week, on Fridays, via your preferred payment method (USDT, BTC, ETH, or wire). There is no minimum payout threshold. You earn up to 25% on every purchase made through your referral link — for life.",
    category: "Affiliate Program"
  },
  {
    id: "aff3",
    question: "Is there a limit to how much I can earn as an affiliate?",
    answer: "There is no earning cap. Top affiliates on our platform earn thousands of dollars per week in commissions. You earn a percentage on every single purchase made through your link, including upsells and account upgrades.",
    category: "Affiliate Program"
  },
  {
    id: "t1",
    question: "Which MT5 broker do I use?",
    answer: "We provide designated broker login credentials upon account activation. All accounts use a regulated MT5 broker partner. You will receive server address, login number, and password by email within minutes of account activation.",
    category: "Technical Support"
  },
  {
    id: "t2",
    question: "What VPS do you recommend for EAs?",
    answer: "We recommend a Windows VPS with minimum 2GB RAM and low-latency connection to NY4 or LD4 data centers (e.g., Contabo, Vultr, or ForexVPS). Your account manager can advise on optimal VPS settings for your specific EA strategy.",
    category: "Technical Support"
  },
  {
    id: "t3",
    question: "How do I contact support?",
    answer: "Our support team is available 24/7 via live chat (bottom right corner of the website), WhatsApp, Telegram, and email at support@fxexpertfunded.com. Prime members receive priority response within 1 hour during market hours.",
    category: "Technical Support"
  }
];
const categories = [
  "All",
  "General",
  "Account Types",
  "Funding & Payouts",
  "Trading Rules",
  "Affiliate Program",
  "Technical Support"
];
function FAQPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [openId, setOpenId] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const filtered = reactExports.useMemo(() => {
    let list = activeCategory === "All" ? faqData : faqData.filter((f) => f.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Frequently Asked Questions | FX Expert Funded Prop Firm FAQ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        name: "description",
        content: "Find answers to all your questions about FX Expert Funded prop firm. Accounts, payouts, trading rules, affiliate program, MT5 setup, and more."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "gradient-hero py-24 border-b border-white/10 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-brand-gold/5 blur-3xl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-6",
            "data-ocid": "faq.hero_badge",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
              " Help Center"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-6",
            children: [
              "Frequently",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Asked Questions" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "text-lg text-foreground/60 mb-8",
            children: "Everything you need to know about FX Expert Funded."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            className: "relative max-w-xl mx-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search questions...",
                  value: searchQuery,
                  onChange: (e) => {
                    setSearchQuery(e.target.value);
                    setOpenId(null);
                  },
                  className: "w-full pl-11 pr-4 py-3.5 rounded-xl bg-card border border-white/10 text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-brand-gold/40 transition-smooth",
                  "data-ocid": "faq.search_input"
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex flex-wrap gap-2 mb-8",
          role: "tablist",
          "aria-label": "FAQ categories",
          children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": activeCategory === cat,
              onClick: () => {
                setActiveCategory(cat);
                setOpenId(null);
              },
              className: `px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth border ${activeCategory === cat ? "bg-brand-gold text-brand-black border-brand-gold" : "bg-transparent text-foreground/60 border-white/10 hover:border-brand-gold/30 hover:text-foreground"}`,
              "data-ocid": `faq.category_${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}_tab`,
              children: cat
            },
            cat
          ))
        }
      ),
      searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/40 mb-4", children: [
        filtered.length,
        " result",
        filtered.length !== 1 ? "s" : "",
        ' for "',
        searchQuery,
        '"'
      ] }),
      filtered.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "faq.list", children: filtered.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i % 10 * 0.04 },
          className: "card-elevated rounded-xl overflow-hidden",
          "data-ocid": `faq.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center justify-between px-6 py-5 text-left",
                onClick: () => setOpenId(openId === faq.id ? null : faq.id),
                "aria-expanded": openId === faq.id,
                "data-ocid": `faq.question.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm pr-4 leading-snug", children: faq.question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block text-xs text-foreground/30 bg-foreground/5 px-2 py-0.5 rounded-full", children: faq.category }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        className: `w-4 h-4 text-brand-gold transition-transform duration-200 ${openId === faq.id ? "rotate-180" : ""}`
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openId === faq.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.22 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 text-sm text-foreground/60 leading-relaxed border-t border-white/10 pt-4", children: faq.answer })
              }
            ) })
          ]
        },
        faq.id
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-16 text-foreground/40",
          "data-ocid": "faq.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-10 h-10 mx-auto mb-3 opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
              'No questions found for "',
              searchQuery,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSearchQuery(""),
                className: "mt-3 text-brand-gold text-sm underline",
                children: "Clear search"
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 gradient-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-12 h-12 text-brand-gold mx-auto mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl mb-4", children: [
            "Still Have ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Questions?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/55 mb-8 max-w-xl mx-auto", children: "Our support team is available 24/7 via live chat, WhatsApp, and Telegram. We typically respond within 2 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "btn-primary px-10 py-4 text-base inline-flex items-center justify-center gap-2",
                "data-ocid": "faq.cta_contact_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                  " Contact Us Now"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/instant-funding",
                className: "btn-secondary px-8 py-4 text-base inline-flex items-center justify-center",
                "data-ocid": "faq.cta_funding_button",
                children: "Get Funded Today"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  FAQPage as default
};
