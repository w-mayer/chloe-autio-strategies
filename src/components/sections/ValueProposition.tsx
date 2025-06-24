'use client';
import React, { useRef, useState, useEffect } from 'react';
import AuthorityHeading from '@/components/ui/AuthorityHeading';

interface CardProps {
  title: string;
  desc: string;
  index: number;
}

function Card({ title, desc, index }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Simple timeout-based animation trigger
    const timer = setTimeout(() => {
      setInView(true);
    }, 100 + (index * 150));
    
    return () => clearTimeout(timer);
  }, [index]);

  // Ripple effect on click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.className = 'service-card-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    
    cardRef.current.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  };

  return (
    <div
      ref={cardRef}
      className={`service-card ${inView ? 'service-card-entrance service-card-idle' : 'service-card-initial'}`}
      style={inView ? { animationDelay: `${index * 150}ms` } : {}}
      onClick={handleClick}
    >
      <div className="relative h-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-primary mb-2 service-card-icon">{title}</h3>
        <p className="text-neutral-700 dark:text-neutral-200 text-base body-text service-card-number">{desc}</p>
      </div>
    </div>
  );
}

export function ValueProposition() {
  const cards = [
    {
      title: 'AI Policy Expertise',
      desc: 'Decades of experience advising governments, Fortune 500s, and startups on responsible AI, data governance, and emerging tech policy.'
    },
    {
      title: 'Global Perspective',
      desc: 'Experience working with international organizations (OECD, NIST, DOD, Meta, DeepMind, Google Cloud, Cohere) to shape global standards and best practices.'
    },
    {
      title: 'Proven Results',
      desc: 'Trusted by leading organizations to deliver actionable insights, drive compliance, and enable responsible innovation in AI and technology.'
    }
  ];
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-12">
          <AuthorityHeading
            size="h2"
            className="text-2xl md:text-3xl font-bold text-primary"
            enableParallax={true}
            enableProgress={false}
            enableHighlight={true}
          >
            Why Choose Chloe Autio Strategies?
          </AuthorityHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {cards.map((card, i) => (
            <Card key={card.title} title={card.title} desc={card.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
} 