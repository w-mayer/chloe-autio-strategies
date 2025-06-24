'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

const logos = [
  { name: 'Client A', svg: <svg width="80" height="32" viewBox="0 0 80 32" fill="none"><rect width="80" height="32" rx="8" fill="#2563eb"/><text x="40" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">A</text></svg> },
  { name: 'Client B', svg: <svg width="80" height="32" viewBox="0 0 80 32" fill="none"><rect width="80" height="32" rx="8" fill="#1e40af"/><text x="40" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">B</text></svg> },
  { name: 'Client C', svg: <svg width="80" height="32" viewBox="0 0 80 32" fill="none"><rect width="80" height="32" rx="8" fill="#3b82f6"/><text x="40" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">C</text></svg> },
  { name: 'Client D', svg: <svg width="80" height="32" viewBox="0 0 80 32" fill="none"><rect width="80" height="32" rx="8" fill="#60a5fa"/><text x="40" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">D</text></svg> },
  { name: 'Client E', svg: <svg width="80" height="32" viewBox="0 0 80 32" fill="none"><rect width="80" height="32" rx="8" fill="#dbeafe"/><text x="40" y="21" textAnchor="middle" fill="#2563eb" fontSize="16" fontWeight="bold">E</text></svg> },
  { name: 'Client F', svg: <svg width="80" height="32" viewBox="0 0 80 32" fill="none"><rect width="80" height="32" rx="8" fill="#f3f4f6"/><text x="40" y="21" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="bold">F</text></svg> },
];

export function ClientLogos() {
  return (
    <section className="w-full py-12 md:py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-bold text-primary-700 mb-8 text-center"
        >
          Trusted by Leading Organizations
        </MotionH2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {logos.map((logo, i) => (
            <MotionDiv
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              className="flex items-center justify-center h-16"
              aria-label={logo.name}
            >
              {logo.svg}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
} 