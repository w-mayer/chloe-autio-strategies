import * as React from "react";
import { cn } from "@/lib/utils";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, children, className, ...props }, ref) => {
    React.useEffect(() => {
      if (!isOpen) return;
      function onKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") onClose();
      }
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadein"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        onClick={onClose}
      >
        <div
          ref={ref}
          className={cn(
            "bg-white dark:bg-neutral-900 rounded-lg shadow-soft p-8 max-w-lg w-full relative animate-slide-up",
            className
          )}
          onClick={e => e.stopPropagation()}
          onKeyDown={e => { if (e.key === 'Escape') onClose(); }}
          tabIndex={-1}
          {...props}
        >
          {title && (
            <h2 id="modal-title" className="text-xl font-semibold mb-4">
              {title}
            </h2>
          )}
          {children}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 focus:outline-none"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }
);
Modal.displayName = "Modal"; 