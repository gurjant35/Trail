'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, North York',
    text: 'Toronto Premium Glass transformed our master bathroom with the most stunning frameless shower. The quality of the glass and the precision of the install exceeded our expectations. Worth every penny.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Interior Designer',
    text: 'I\'ve worked with many glass companies over the years, but TPG is in a different league. Their custom glass railings for our Yorkville project were absolutely flawless. My clients were blown away.',
    rating: 5,
  },
  {
    name: 'Marcus & Lauren Webb',
    role: 'Homeowners, Etobicoke',
    text: 'From the initial consultation to final installation, the entire process was seamless. Our glass closet doors are a showpiece. Professional, punctual, and pristine results.',
    rating: 5,
  },
  {
    name: 'Priya Kapoor',
    role: 'Office Manager, Downtown Toronto',
    text: 'We had our entire office redesigned with glass partitions. The transformation is incredible — open yet private. The team was incredibly professional and finished on schedule.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">Client Stories</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-6">What Our Clients Say</h2>
          <div className="section-underline" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-charcoal-900 border border-white/8 rounded-xl p-8 hover:border-gold-500/20 transition-colors duration-300"
            >
              <Quote size={28} className="text-gold-500/30 mb-4" />
              <p className="text-white/70 leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
