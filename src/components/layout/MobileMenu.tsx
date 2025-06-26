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
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 z-50 bg-black/60 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        className="mobile-menu-panel fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl md:hidden"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header */}
        <div className="mobile-menu-header flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
          <span className="font-bold text-xl text-gray-900">{site.name}</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mobile-menu-nav flex-1 bg-white px-6 py-6">
          <ul className="space-y-2">
            {navigation.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  onClick={onClose}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mobile-menu-footer border-t border-gray-200 bg-white px-6 py-4">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .mobile-menu-enter {
          animation: slide-in-left 0.3s ease-out;
        }
      `}</style>
    </>
  );
} 