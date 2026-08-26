import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Shield,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function DashboardLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState<"trader" | "affiliate">("trader");
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1400);
  }

  return (
    <div className="min-h-[85vh] gradient-hero flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 mb-4">
            <TrendingUp className="w-7 h-7 text-brand-gold" />
          </div>
          <h1 className="font-display font-black text-3xl mb-2">
            Welcome Back
          </h1>
          <p className="text-foreground/50 text-sm">
            Login to your FX Expert Funded dashboard
          </p>
        </div>

        <div className="card-elevated rounded-2xl p-8">
          {/* Tabs */}
          <div className="flex rounded-lg bg-muted p-1 mb-6" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "trader"}
              onClick={() => setTab("trader")}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-smooth ${tab === "trader" ? "bg-brand-gold text-brand-black" : "text-foreground/50 hover:text-foreground"}`}
              data-ocid="dashboard_login.trader_tab"
            >
              Trader Login
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "affiliate"}
              onClick={() => setTab("affiliate")}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-smooth ${tab === "affiliate" ? "bg-brand-gold text-brand-black" : "text-foreground/50 hover:text-foreground"}`}
              data-ocid="dashboard_login.affiliate_tab"
            >
              Affiliate Login
            </button>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
              data-ocid="dashboard_login.success_state"
            >
              <div className="w-14 h-14 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-brand-green" />
              </div>
              <p className="font-display font-bold text-lg text-brand-green">
                Welcome back!
              </p>
              <p className="text-sm text-foreground/50 mt-1">
                Redirecting to dashboard...
              </p>
            </motion.div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-foreground/50 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="trader@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                  data-ocid="dashboard_login.email_input"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold text-foreground/50"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs text-brand-gold hover:underline"
                    onClick={() => setForgotSent(true)}
                    data-ocid="dashboard_login.forgot_password_button"
                  >
                    Forgot password?
                  </button>
                </div>
                {forgotSent && (
                  <p
                    className="text-xs text-brand-green mb-2"
                    data-ocid="dashboard_login.forgot_success_state"
                  >
                    ✓ Password reset email sent! Check your inbox.
                  </p>
                )}
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-muted border border-white/15 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
                    data-ocid="dashboard_login.password_input"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors-fast"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    data-ocid="dashboard_login.toggle_password_button"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2.5">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#d4af37] cursor-pointer"
                  data-ocid="dashboard_login.remember_me_checkbox"
                />
                <label
                  htmlFor="remember-me"
                  className="text-xs text-foreground/50 cursor-pointer select-none"
                >
                  Remember me for 30 days
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                data-ocid="dashboard_login.submit_button"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" />{" "}
                    Logging in...
                  </>
                ) : (
                  `Login to ${tab === "trader" ? "Trader" : "Affiliate"} Dashboard`
                )}
              </button>
            </form>
          )}

          {/* Security badges */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs text-foreground/40">
                <Lock className="w-3.5 h-3.5" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-foreground/40">
                <Shield className="w-3.5 h-3.5" />
                <span>2FA Available</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-foreground/40">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Bank-level Encryption</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-foreground/50 mt-5">
          Don't have an account?{" "}
          <Link
            to="/instant-funding"
            className="text-brand-gold hover:underline font-medium"
            data-ocid="dashboard_login.instant_funding_link"
          >
            Instant Funding
          </Link>{" "}
          or{" "}
          <Link
            to="/challenge-accounts"
            className="text-brand-gold hover:underline font-medium"
            data-ocid="dashboard_login.challenge_link"
          >
            Challenge Account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
