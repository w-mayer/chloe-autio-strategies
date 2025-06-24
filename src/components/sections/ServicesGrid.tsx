'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Briefcase, Users, BarChart2, Shield, Globe, BookOpen } from 'lucide-react';

const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionArticle = dynamic(() => import('framer-motion').then(mod => mod.motion.article), { ssr: false });

const services = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary-600" />,
    title: 'Strategy Consulting',
    desc: 'Tailored strategies to drive business growth and transformation.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary-600" />,
    title: 'Leadership Workshops',
    desc: 'Empowering teams with leadership and change management skills.',
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary-600" />,
    title: 'Data Analytics',
    desc: 'Unlocking insights with advanced analytics and reporting.',
  },
  {
    icon: <Shield className="w-8 h-8 text-primary-600" />,
    title: 'Risk Advisory',
    desc: 'Identifying and mitigating organizational risks effectively.',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary-600" />,
    title: 'Global Expansion',
    desc: 'Guidance for entering and thriving in new markets.',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary-600" />,
    title: 'Policy & Compliance',
    desc: 'Ensuring regulatory compliance and policy excellence.',
  },
];

export function ServicesGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-primary-700 mb-10 text-center"
        >
          Our Services
        </MotionH2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <MotionArticle
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-primary-50 dark:bg-neutral-900 p-8 shadow-soft flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">{service.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-200 text-base">{service.desc}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
} 