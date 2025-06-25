import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <div className="w-full">
      <textarea
        ref={ref}
        className={cn(
          "form-input min-h-[96px] resize-y",
          error && "border-amber-500 focus:ring-amber-500",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${props.id}-error`} className="form-error" role="alert">
          {error}
        </span>
      )}
    </div>
  )
);
Textarea.displayName = "Textarea"; 