'use client';
import React from 'react';
import { X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Consulting', href: '/services/consulting' },
      { name: 'Workshops', href: '/services/workshops' },
      { name: 'Advisory', href: '/services/advisory' },
    ],
  },
  { name: 'Insights', href: '/insights' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = React.useState(false);
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
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.name}>
                  <button
                    className="flex items-center w-full gap-2 py-2 px-2 rounded hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors"
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {item.name}
                    <ChevronDown className={cn('w-4 h-4 transition-transform', servicesOpen && 'rotate-180')} />
                  </button>
                  {servicesOpen && (
                    <ul className="ml-4 mt-2 flex flex-col gap-2">
                      {item.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.href}
                            className="block px-2 py-1 rounded hover:bg-primary-100 dark:hover:bg-neutral-800 transition-colors"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-2 py-2 rounded hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
} 