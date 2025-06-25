'use client';
import React from 'react';
import { X } from 'lucide-react';
import { siteContent } from '@/data/content';

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { navigation, site, ui } = siteContent;
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  React.useEffect(() => {
    if (open && menuRef.current) {
      menuRef.current.focus();
    }
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex md:hidden bg-black/60 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={menuRef}
        className="fixed left-0 top-0 h-full w-full max-w-sm bg-eggshell dark:bg-paynesGray p-7 shadow-2xl flex flex-col animate-slide-in-left focus:outline-none border-r border-ashGray dark:border-paynesGray"
        tabIndex={-1}
        role="document"
        style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold text-xl text-gray heading">{site.name}</span>
          <button
            onClick={onClose}
            aria-label={ui.aria.closeMenu}
            className="text-paynesGray hover:text-primary-700 focus:outline-none"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        <hr className="border-ashGray dark:border-paynesGray mb-6" />
        <nav>
          <ul className="flex flex-col gap-3">
            {navigation.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-lg font-semibold text-gray dark:text-primary-100 hover:bg-eggshell dark:hover:bg-paynesGray transition-colors focus:bg-eggshell focus:outline-none nav-text"
                  onClick={onClose}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-8 text-xs text-paynesGray text-center">
          &copy; {new Date().getFullYear()} {site.name}
        </div>
      </div>
      <style jsx global>{`
        @keyframes slide-in-left {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
} 