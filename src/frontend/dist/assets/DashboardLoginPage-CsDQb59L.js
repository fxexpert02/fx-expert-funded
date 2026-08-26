import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, T as TrendingUp, L as Link } from "./index-DMJMRxWv.js";
import { m as motion } from "./proxy-cX8v38p_.js";
import { C as CircleCheck } from "./circle-check-CWiMeYpG.js";
import { S as Shield } from "./shield-lUrlHG6O.js";
import { S as ShieldCheck } from "./shield-check-XW3KdbZy.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
function DashboardLoginPage() {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [tab, setTab] = reactExports.useState("trader");
  const [rememberMe, setRememberMe] = reactExports.useState(false);
  const [forgotSent, setForgotSent] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1400);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[85vh] gradient-hero flex items-center justify-center px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "w-full max-w-md",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-7 h-7 text-brand-gold" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl mb-2", children: "Welcome Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-sm", children: "Login to your FX Expert Funded dashboard" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevated rounded-2xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded-lg bg-muted p-1 mb-6", role: "tablist", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": tab === "trader",
                onClick: () => setTab("trader"),
                className: `flex-1 py-2 text-sm font-semibold rounded-md transition-smooth ${tab === "trader" ? "bg-brand-gold text-brand-black" : "text-foreground/50 hover:text-foreground"}`,
                "data-ocid": "dashboard_login.trader_tab",
                children: "Trader Login"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": tab === "affiliate",
                onClick: () => setTab("affiliate"),
                className: `flex-1 py-2 text-sm font-semibold rounded-md transition-smooth ${tab === "affiliate" ? "bg-brand-gold text-brand-black" : "text-foreground/50 hover:text-foreground"}`,
                "data-ocid": "dashboard_login.affiliate_tab",
                children: "Affiliate Login"
              }
            )
          ] }),
          success ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.96 },
              animate: { opacity: 1, scale: 1 },
              className: "text-center py-8",
              "data-ocid": "dashboard_login.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-brand-green" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-brand-green", children: "Welcome back!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/50 mt-1", children: "Redirecting to dashboard..." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-5", onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "email",
                  className: "block text-xs font-semibold text-foreground/50 mb-1.5",
                  children: "Email Address"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "email",
                  type: "email",
                  required: true,
                  placeholder: "trader@example.com",
                  className: "w-full px-4 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
                  "data-ocid": "dashboard_login.email_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "password",
                    className: "text-xs font-semibold text-foreground/50",
                    children: "Password"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-xs text-brand-gold hover:underline",
                    onClick: () => setForgotSent(true),
                    "data-ocid": "dashboard_login.forgot_password_button",
                    children: "Forgot password?"
                  }
                )
              ] }),
              forgotSent && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-brand-green mb-2",
                  "data-ocid": "dashboard_login.forgot_success_state",
                  children: "✓ Password reset email sent! Check your inbox."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "password",
                    type: showPassword ? "text" : "password",
                    required: true,
                    placeholder: "Enter your password",
                    className: "w-full px-4 py-3 pr-12 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast",
                    "data-ocid": "dashboard_login.password_input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors-fast",
                    onClick: () => setShowPassword(!showPassword),
                    "aria-label": showPassword ? "Hide password" : "Show password",
                    "data-ocid": "dashboard_login.toggle_password_button",
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "remember-me",
                  type: "checkbox",
                  checked: rememberMe,
                  onChange: (e) => setRememberMe(e.target.checked),
                  className: "w-4 h-4 rounded accent-[#d4af37] cursor-pointer",
                  "data-ocid": "dashboard_login.remember_me_checkbox"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "remember-me",
                  className: "text-xs text-foreground/50 cursor-pointer select-none",
                  children: "Remember me for 30 days"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: loading,
                className: "btn-primary w-full py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                "data-ocid": "dashboard_login.submit_button",
                children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" }),
                  " ",
                  "Logging in..."
                ] }) : `Login to ${tab === "trader" ? "Trader" : "Affiliate"} Dashboard`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-5 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-5 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-foreground/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SSL Secured" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-foreground/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2FA Available" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-foreground/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bank-level Encryption" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-foreground/50 mt-5", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/instant-funding",
              className: "text-brand-gold hover:underline font-medium",
              "data-ocid": "dashboard_login.instant_funding_link",
              children: "Instant Funding"
            }
          ),
          " ",
          "or",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/challenge-accounts",
              className: "text-brand-gold hover:underline font-medium",
              "data-ocid": "dashboard_login.challenge_link",
              children: "Challenge Account"
            }
          )
        ] })
      ]
    }
  ) });
}
export {
  DashboardLoginPage as default
};
