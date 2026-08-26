import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

export default function CTAButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost:
      "text-brand-gold hover:text-brand-gold-light font-semibold font-display underline-offset-4 hover:underline transition-colors-fast",
  }[variant];

  const classes = cn(variantClasses, sizeClasses, className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
