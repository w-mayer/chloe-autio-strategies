import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Removed hoverable prop
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "card transition-shadow duration-200 bg-eggshell border border-ashGray text-gray",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card"; 