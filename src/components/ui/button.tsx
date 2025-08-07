import * as React from "react";
import { cn } from "@/lib/utils";
import Link from 'next/link';

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary btn-primary-cta",
  secondary: "btn-secondary",
  outline: "border border-primary-500 text-primary-700 bg-transparent hover:bg-primary-100 rounded-md btn-outline",
  ghost: "bg-transparent text-primary-700 hover:bg-primary-100 rounded-md btn-ghost",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, external = false, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const ariaLabel = props["aria-label"] || (typeof children === "string" ? children : undefined);

    // If href is provided, render as a link
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
            aria-label={ariaLabel}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={baseClasses}
          aria-label={ariaLabel}
        >
          {children}
        </Link>
      );
    }

    // Otherwise render as a button
    return (
      <button
        ref={ref}
        className={baseClasses}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button"; 