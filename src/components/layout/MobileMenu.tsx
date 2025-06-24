'use client';
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
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
      className="fixed inset-0 z-50 flex md:hidden bg-black/40 animate-fadein"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        ref={menuRef}
        className="bg-white dark:bg-neutral-900 w-4/5 max-w-xs h-full p-6 shadow-lg relative animate-slide-up focus:outline-none"
        tabIndex={0}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 focus:outline-none"
        >
          <X className="w-6 h-6" />
        </button>
        <nav className="mt-8">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-2 py-2 rounded hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
} 