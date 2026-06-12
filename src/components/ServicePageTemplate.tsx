'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface Subcategory {
  id: string;
  title: string;
  description: string;
  images: { src: string; title?: string; description?: string }[];
  benefits: string[];
}

interface ServicePageProps {
  service: {
    title: string;
    subtitle: string;
    heroImage: string;
    description: string;
    subcategories: Subcategory[];
  };
}

export default function ServicePageTemplate({ service }: ServicePageProps) {
  const [activeTab, setActiveTab] = useState<string>(service.subcategories[0]?.id);
  const [expandedBenefits, setExpandedBenefits] = useState<Record<string, boolean>>({});

  const activeSub = service.subcategories.find((s) => s.id === activeTab);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-4 uppercase tracking-wide">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-white/70 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold-400">{service.title}</span>
            </nav>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-3 block">{service.subtitle}</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold text-white leading-tight">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-white/60 text-lg leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="pb-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab bar */}
          <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
            {service.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveTab(sub.id)}
                className={`px-5 py-2.5 rounded-sm text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeTab === sub.id
                    ? 'btn-gold'
                    : 'text-white/60 border border-white/10 hover:border-gold-500/30 hover:text-white'
                }`}
              >
                {sub.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeSub && (
              <motion.div
                key={activeSub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Sub header */}
                <div className="mb-10">
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">{activeSub.title}</h2>
                  <p className="text-white/50 max-w-2xl leading-relaxed">{activeSub.description}</p>
                </div>

                {/* Benefits */}
                <div className="mb-12">
                  <h3 className="text-xs font-medium tracking-[0.25em] uppercase text-gold-500 mb-5">Key Benefits</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {activeSub.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-charcoal-900/60 border border-white/5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                        <span className="text-sm text-white/70">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 className="text-xs font-medium tracking-[0.25em] uppercase text-gold-500 mb-6">
                    Gallery · {activeSub.images.length} Photos
                  </h3>
                  {activeSub.images.length > 0 ? (
                    <GalleryGrid images={activeSub.images} columns={3} />
                  ) : (
                    <div className="border border-dashed border-white/10 rounded-xl p-16 text-center">
                      <p className="text-white/30 text-sm">Images coming soon</p>
                      <p className="text-white/20 text-xs mt-2">Contact us to see examples of our work</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-900/50 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/50 mb-8">Get a free, no-obligation estimate for your {service.title.toLowerCase()} project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-gold px-8 py-4 rounded-sm text-sm flex items-center justify-center gap-2 group">
              Get Free Estimate
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-outline-gold px-8 py-4 rounded-sm text-sm flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
