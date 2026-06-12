'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/373584/pexels-photo-373584.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Toronto skyline buildings looking up with blue sky"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Gold accent lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-px h-40 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/4 right-8 w-px h-40 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] uppercase text-gold-400 border border-gold-500/30 rounded-full px-5 py-2">
            <span className="w-1 h-1 rounded-full bg-gold-400 animate-pulse" />
            Toronto's Premier Glass Specialists
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-semibold text-white mb-6 leading-[1.05] tracking-tight"
        >
          Crafting Glass
          <br />
          <span className="gold-gradient-text italic">Masterpieces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Custom shower glass, railings, closet doors & more. Premium craftsmanship delivered across Toronto and the GTA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/booking"
            className="btn-gold px-8 py-4 rounded-sm text-sm flex items-center gap-2 group"
          >
            Get a Free Estimate
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={scrollToServices}
            className="btn-outline-gold px-8 py-4 rounded-sm text-sm"
          >
            Explore Services
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '12+', label: 'Years Experience' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-semibold text-gold-400">{stat.value}</div>
              <div className="text-xs text-white/40 mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
