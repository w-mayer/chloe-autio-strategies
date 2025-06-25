'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Autio Strategies helped us transform our business and achieve record growth. Their insights are invaluable.',
    name: 'Alex Johnson',
    role: 'CEO, Acme Corp',
  },
  {
    quote: 'The leadership workshops were a game changer for our team. Highly recommended!',
    name: 'Maria Lee',
    role: 'Head of People, InnovateX',
  },
  {
    quote: 'Their data analytics expertise unlocked new opportunities for us. Professional and results-driven.',
    name: 'Sam Patel',
    role: 'COO, FinEdge',
  },
];

function useInViewAnimation() {
  const ref = React.useRef<HTMLQuoteElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

interface TestimonialCardProps {
  testimonial: typeof testimonials[number];
  delay: number;
}

function TestimonialCard({ testimonial, delay }: TestimonialCardProps) {
  const [ref, inView] = useInViewAnimation();
  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className="rounded-lg bg-eggshell border border-ashGray p-8 shadow-soft flex flex-col items-center text-center transition-all duration-200"
    >
      <p className="text-lg text-neutral-800 dark:text-neutral-100 mb-4 font-medium body-text">“{testimonial.quote}”</p>
      <footer className="mt-4">
        <span className="block font-semibold text-primary-700 dark:text-primary-400">{testimonial.name}</span>
        <span className="block text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}</span>
      </footer>
    </motion.blockquote>
  );
}

export function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary-50 dark:bg-neutral-900 border-t border-ashGray dark:border-paynesGray">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
} 