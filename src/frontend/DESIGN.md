# FX Expert Funded — Design System

## Aesthetic
Premium dark fintech. Institutional trading authority. Black-and-gold luxury with tactical navy depth and accent green for live/positive states. Every surface feels like a Bloomberg terminal crossed with a private bank portal.

## Palette

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| brand-black | `#0a0a0a` | `oklch(0.1 0 0)` | Page background |
| brand-gold | `#d4af37` | `oklch(0.77 0.16 84)` | Primary, CTAs, accents |
| brand-gold-light | `#f5d96b` | `oklch(0.88 0.16 84)` | Gradient highlights |
| brand-navy | `#0d1f3c` | `oklch(0.22 0.06 252)` | Secondary, navy sections |
| brand-navy-dark | `#0a1628` | — | Deep navy |
| brand-green | `#00d084` | `oklch(0.77 0.19 162)` | Profit, live, positive states |
| brand-surface | `#111117` | `oklch(0.13 0.004 270)` | Cards, elevated surfaces |
| brand-surface-2 | `#16161e` | `oklch(0.15 0.005 270)` | Popovers, deeper cards |

## Typography

| Role | Font | Weights | CSS Class |
|------|------|---------|----------|
| Display / Headings | Montserrat | 600, 700, 800, 900 | `font-display` |
| Body / UI | Inter | 300, 400, 500, 600, 700 | `font-body` |
| Mono / Code | JetBrains Mono | 400, 700 | `font-mono` |

Sources: Google Fonts `Montserrat` + `Inter`.

## Semantic Token Mapping

| Tailwind Token | Value |
|----------------|-------|
| `bg-background` | `#0a0a0a` |
| `bg-card` | `#111117` |
| `bg-popover` | `#16161e` |
| `bg-primary` | Gold `#d4af37` |
| `bg-secondary` | Navy `#0d1f3c` |
| `bg-accent` | Green `#00d084` |
| `bg-muted` | `#18181e` |
| `text-foreground` | Near-white `#f7f7f8` |
| `text-muted-foreground` | Mid-grey |
| `border-border` | Subtle dark |
| `ring` | Gold |

## Layout Zones

| Zone | Background | Border/Shadow |
|------|-----------|---------------|
| Top nav | `bg-card` + `border-b` | `shadow-subtle` + gold accent on scroll |
| Hero | `gradient-hero` | Gold radial glow from top |
| Feature sections | Alternate `bg-background` / `gradient-section-alt` | `section-divider` between |
| Navy CTA bands | `gradient-navy` | Gold border top/bottom |
| Footer | `bg-card` | `border-t border-border` |

## Custom Utilities

| Class | Effect |
|-------|--------|
| `.text-gradient-gold` | Gold shimmer gradient text |
| `.text-gradient-hero` | White-to-gold hero gradient text |
| `.text-shimmer` | Animated gold shimmer text |
| `.glow-gold` | Gold box-shadow glow |
| `.glow-green` | Green box-shadow glow |
| `.gradient-hero` | Full hero background with radial gold bloom |
| `.gradient-section-alt` | Dark-navy alt section |
| `.gradient-navy` | Navy CTA band |
| `.card-elevated` | Glassmorphism card with gold border hover |
| `.card-navy` | Navy glassmorphism card |
| `.btn-primary` | Gold gradient button |
| `.btn-secondary` | Outline gold button |
| `.section-divider` | Gold fade-out `<hr>` divider |
| `.animate-fade-up` | 0.6s ease-up entrance |
| `.animate-slide-in` | 0.6s ease slide-in from left |
| `.animate-pulse-glow-gold` | Infinite gold pulse glow |
| `.animate-pulse-glow-green` | Infinite green pulse glow |
| `.animate-ticker` | Infinite left-scroll ticker |

## Tailwind Extended Shadows

`shadow-glow-gold`, `shadow-glow-gold-sm`, `shadow-glow-gold-lg`, `shadow-glow-green`, `shadow-glow-green-sm`, `shadow-card`, `shadow-card-hover`, `shadow-card-elevated`

## Motion Principles

- Entrances: `animate-fade-up` staggered by `delay: index * 0.1s`
- Hover: `transition-smooth` (300ms cubic-bezier) on all interactive cards
- Glows: `animate-pulse-glow-gold` on key CTAs, `animate-pulse-glow-green` on live stats
- Ticker: `animate-ticker` for live market data strip
- Respects `prefers-reduced-motion: reduce`

## Component Conventions

- **Cards**: `card-elevated` base, `glow-gold-sm` on hover. Media → title → meta → action hierarchy.
- **Buttons (primary)**: `btn-primary` or `<Button variant="default">` with gold gradient.
- **Buttons (secondary)**: `btn-secondary` or `<Button variant="outline">`.
- **Badges**: Green for active/live, gold for premium/featured, navy for neutral.
- **Section headings**: `font-display font-bold text-gradient-gold` for major headlines.
- **Body copy**: `font-body text-muted-foreground` for supporting text.
