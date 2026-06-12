'use client';

import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Free Consultation', desc: 'We discuss your project, vision, and budget. No commitment required.' },
  { num: '02', title: 'Measurement Visit', desc: 'Our team visits your space for precise measurements and assessment.' },
  { num: '03', title: 'Custom Fabrication', desc: 'Your glass is precision-cut and tempered in our professional facility.' },
  { num: '04', title: 'Expert Installation', desc: 'Our certified installers complete your project cleanly and on schedule.' },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-charcoal-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">How It Works</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-6">Our Simple Process</h2>
          <div className="section-underline" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold-500/40 to-transparent -z-0" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-gold-500/40 flex items-center justify-center mx-auto mb-6 bg-charcoal-900">
                  <span className="font-display text-xl font-semibold text-gold-400">{step.num}</span>
                </div>
                <h3 className="text-white font-semibold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
