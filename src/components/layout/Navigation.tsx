'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';
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

function useActivePath(href: string) {
  if (typeof window === 'undefined') return false;
  return window.location.pathname === href;
}

export function Navigation() {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const servicesRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false);
    }
    if (servicesOpen) {
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }
  }, [servicesOpen]);

  return (
    <ul className="flex items-center gap-6 text-sm font-medium">
      {navItems.map((item) =>
        item.dropdown ? (
          <li key={item.name} className="relative">
            <button
              ref={servicesRef}
              className={cn(
                'flex items-center gap-1 transition-colors hover:text-primary-700 focus:outline-none',
                useActivePath(item.href) && 'text-primary-700 font-semibold'
              )}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
              }}
            >
              {item.name}
              <ChevronDown className={cn('w-4 h-4 transition-transform', servicesOpen && 'rotate-180')} />
            </button>
            {servicesOpen && (
              <ul
                id="services-menu"
                role="menu"
                className="absolute left-0 mt-2 min-w-[180px] rounded-md bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-800 py-2 z-20 animate-fadein"
              >
                {item.dropdown.map((sub) => (
                  <li key={sub.name}>
                    <a
                      href={sub.href}
                      className={cn(
                        'block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors',
                        useActivePath(sub.href) && 'text-primary-700 font-semibold'
                      )}
                      role="menuitem"
                      tabIndex={0}
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
              className={cn(
                'transition-colors hover:text-primary-700',
                useActivePath(item.href) && 'text-primary-700 font-semibold'
              )}
            >
              {item.name}
            </a>
          </li>
        )
      )}
    </ul>
  );
} 