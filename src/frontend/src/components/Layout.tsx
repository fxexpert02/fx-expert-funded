import FloatingChat from "@/components/ui/FloatingChat";
import { footerLinkGroups, navLinks } from "@/data";
import type { NavLink } from "@/types";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, TrendingUp, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function DropdownMenu({
  items,
  isOpen,
}: { items: NavLink[]; isOpen: boolean }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-lg border border-white/10 bg-brand-black/95 backdrop-blur-xl shadow-card overflow-hidden transition-all duration-200 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="block px-4 py-3 text-sm text-foreground/80 hover:text-brand-gold hover:bg-white/5 transition-colors-fast border-b border-white/5 last:border-0"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function NavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isActive = location.pathname === link.href;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (link.children) {
    return (
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-gold transition-colors-fast"
          aria-expanded={open}
          data-ocid={`nav.${link.label.toLowerCase()}_dropdown`}
        >
          {link.label}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <DropdownMenu items={link.children} isOpen={open} />
      </div>
    );
  }

  return (
    <Link
      to={link.href}
      className={`px-3 py-2 text-sm font-medium transition-colors-fast ${
        isActive
          ? "text-brand-gold"
          : "text-foreground/80 hover:text-brand-gold"
      }`}
      data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
    >
      {link.label}
    </Link>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-xl border-b border-white/10 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.logo_link"
        >
          <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors-fast">
            <TrendingUp className="w-5 h-5 text-brand-gold" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold font-display text-brand-gold tracking-wider">
              FX EXPERT
            </div>
            <div className="text-xs font-semibold text-foreground/60 tracking-widest uppercase">
              Funded
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavItem key={link.href + link.label} link={link} />
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard-login"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-brand-gold border border-white/15 hover:border-brand-gold/40 rounded-lg transition-smooth"
            data-ocid="nav.login_button"
          >
            Login
          </Link>
          <Link
            to="/instant-funding"
            className="btn-primary text-sm px-5 py-2 hidden sm:inline-block"
            data-ocid="nav.get_funded_button"
          >
            Get Funded
          </Link>
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-white/8 transition-colors-fast"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.mobile_menu_toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden border-t border-white/10 bg-brand-black/98 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.href + link.label}>
              {link.children ? (
                <div>
                  <div className="px-3 py-2 text-xs font-semibold text-foreground/40 uppercase tracking-widest">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-2 text-sm text-foreground/70 hover:text-brand-gold transition-colors-fast"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-brand-gold transition-colors-fast"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-3 pb-1 grid grid-cols-2 gap-2 border-t border-white/10">
            <Link
              to="/dashboard-login"
              onClick={() => setMobileOpen(false)}
              className="btn-secondary text-sm text-center py-2.5"
              data-ocid="nav.mobile_login_button"
            >
              Login
            </Link>
            <Link
              to="/instant-funding"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm text-center py-2.5"
              data-ocid="nav.mobile_get_funded_button"
            >
              Get Funded
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-white/10">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-lg text-foreground">
              Stay Ahead of the Markets
            </h3>
            <p className="text-sm text-foreground/50 mt-1">
              Get weekly trading insights, payout alerts, and exclusive offers.
            </p>
          </div>
          <form
            className="flex w-full md:w-auto gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-2.5 rounded-lg bg-muted border border-white/15 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-brand-gold/50 transition-colors-fast"
              data-ocid="footer.newsletter_input"
            />
            <button
              type="submit"
              className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap"
              data-ocid="footer.newsletter_submit_button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-gold" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold font-display text-brand-gold tracking-wider">
                  FX EXPERT
                </div>
                <div className="text-xs font-semibold text-foreground/60 tracking-widest">
                  FUNDED
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed mb-4">
              One of the most trusted forex prop firms since 2021. Empowering
              traders globally with capital and transparency.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {(
                [
                  {
                    icon: "📧",
                    label: "Email",
                    href: "mailto:support@fxexpertfunded.com",
                  },
                  {
                    icon: "📱",
                    label: "WhatsApp",
                    href: "https://wa.me/fxexpertfunded",
                  },
                  {
                    icon: "📸",
                    label: "Instagram",
                    href: "https://instagram.com/fxexpertfunded",
                  },
                  {
                    icon: "🎥",
                    label: "YouTube",
                    href: "https://youtube.com/@fxexpertfunded",
                  },
                  {
                    icon: "✈️",
                    label: "Telegram",
                    href: "https://t.me/fxexpertfunded",
                  },
                  {
                    icon: "🎧",
                    label: "Discord",
                    href: "https://discord.gg/fxexpertfunded",
                  },
                ] as const
              ).map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-brand-gold/10 hover:border-brand-gold/30 border border-white/10 flex items-center justify-center text-sm transition-smooth"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-bold text-sm text-foreground mb-4 tracking-wide">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground/50 hover:text-brand-gold transition-colors-fast"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/40">
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              className="hover:text-brand-gold transition-colors-fast"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-foreground/30 text-center md:text-right max-w-lg">
            <strong className="text-foreground/40">Risk Warning:</strong>{" "}
            Trading forex and CFDs involves significant risk of loss. Past
            performance is not indicative of future results. FX Expert Funded
            accounts are for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
