import * as React from "react";
import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';

const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary btn-primary-cta",
  secondary: "btn-secondary",
  outline: "border border-primary-500 text-primary-700 bg-transparent hover:bg-primary-100",
  ghost: "bg-transparent text-primary-700 hover:bg-primary-100",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return (
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
      );
    }
    // Omit all known conflicting event props for MotionButton (only those that exist on React.ButtonHTMLAttributes)
    const {
      onAnimationStart: _onAnimationStart,
      onDragStart: _onDragStart,
      onDragEnd: _onDragEnd,
      onDrag: _onDrag,
      onDragOver: _onDragOver,
      onDragEnter: _onDragEnter,
      onDragLeave: _onDragLeave,
      onPointerDown: _onPointerDown,
      onPointerMove: _onPointerMove,
      onPointerUp: _onPointerUp,
      onPointerCancel: _onPointerCancel,
      onPointerEnter: _onPointerEnter,
      onPointerLeave: _onPointerLeave,
      onPointerOver: _onPointerOver,
      onPointerOut: _onPointerOut,
      ...motionProps
    } = props;
    return (
      <MotionButton
        ref={ref}
        whileHover={{ scale: 1.04, boxShadow: '0 6px 24px 0 rgba(37,99,235,0.12)' }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          className
        )}
        aria-label={props["aria-label"] || (typeof children === "string" ? children : undefined)}
        {...motionProps}
      >
        {children}
      </MotionButton>
    );
  }
);
Button.displayName = "Button"; 