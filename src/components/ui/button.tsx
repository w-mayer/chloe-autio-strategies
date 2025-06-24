import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary btn-primary-cta",
  secondary: "btn-secondary",
  outline: "border border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50",
  ghost: "bg-transparent text-primary-700 hover:bg-primary-50",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        className
      )}
      aria-label={props["aria-label"] || (typeof children === "string" ? children : undefined)}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button"; 