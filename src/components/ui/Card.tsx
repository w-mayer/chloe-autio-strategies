import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverable = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "card transition-shadow duration-200",
        hoverable && "hover:shadow-lg hover:border-primary-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card"; 