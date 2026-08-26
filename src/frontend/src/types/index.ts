export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  rating: number;
  comment: string;
  profit: string;
  accountSize: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage?: string;
}

export interface PayoutProof {
  id: string;
  trader: string;
  country: string;
  flag: string;
  amount: string;
  date: string;
  platform: string;
  accountSize: string;
}

export interface AccountTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  accountSize: string;
  profitSplit: string;
  maxDrawdown: string;
  dailyDrawdown: string;
  profitTarget: string;
  leverage: string;
  instruments: string;
  payoutFrequency: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface TradingRule {
  id: string;
  title: string;
  description: string;
  type: "allowed" | "restricted" | "info";
}
