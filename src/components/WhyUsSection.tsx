'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Clock, Wrench, Layers, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified & Insured',
    desc: 'Fully licensed, bonded and insured for your complete peace of mind.',
  },
  {
    icon: Award,
    title: 'Premium Materials',
    desc: 'Only certified tempered safety glass and Grade A hardware on every project.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'We respect your schedule. Projects delivered on time, every time.',
  },
  {
    icon: Wrench,
    title: 'Expert Installation',
    desc: 'Our installers have 12+ years of experience with precision glass work.',
  },
  {
    icon: Layers,
    title: 'Custom Designs',
    desc: 'Every project is tailored to your exact specifications and vision.',
  },
  {
    icon: Headphones,
    title: '2-Year Warranty',
    desc: 'Full workmanship and material warranty on all our installations.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/0 via-charcoal-900/80 to-charcoal-900/0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-6">
            The Toronto Premium Glass Difference
          </h2>
          <div className="section-underline" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-7 rounded-xl bg-charcoal-900/60 border border-white/8 hover:border-gold-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                <f.icon size={22} className="text-gold-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
