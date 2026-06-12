'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryGrid from '@/components/GalleryGrid';

const categories = ['All', 'Shower Glass', 'Glass Railings', 'Closet Doors', 'Vanity Mirrors', 'Barn Doors', 'Office Partitions'];

const allImages = [
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', title: 'Frameless Shower Enclosure', description: 'Custom inline frameless shower', category: 'Shower Glass' },
  { src: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80', title: 'Walk-In Shower', description: 'Minimalist walk-in shower design', category: 'Shower Glass' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', title: 'L-Shape Shower', description: 'Corner L-shape installation', category: 'Shower Glass' },
  { src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80', title: 'Staircase Railing', description: 'Interior glass staircase railing', category: 'Glass Railings' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', title: 'Balcony Railing', description: 'Exterior balcony glass panels', category: 'Glass Railings' },
  { src: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80', title: 'Deck Glass Railing', description: 'Outdoor deck glass system', category: 'Glass Railings' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Mirrored Sliding Doors', description: 'Full-length mirror closet doors', category: 'Closet Doors' },
  { src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80', title: 'Clear Glass Closet', description: 'Frameless clear sliding doors', category: 'Closet Doors' },
  { src: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=800&q=80', title: 'Vanity Mirror', description: 'Custom frameless bathroom mirror', category: 'Vanity Mirrors' },
  { src: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=801&q=80', title: 'LED Backlit Mirror', description: 'Warm LED vanity mirror', category: 'Vanity Mirrors' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', title: 'Glass Barn Door', description: 'Black hardware barn door installation', category: 'Barn Doors' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=803&q=80', title: 'Frosted Barn Door', description: 'Privacy frosted glass barn door', category: 'Barn Doors' },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', title: 'Office Partition', description: 'Open-plan office glass dividers', category: 'Office Partitions' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', title: 'Executive Office', description: 'Private executive glass wall', category: 'Office Partitions' },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=802&q=80', title: 'Neo Angle Shower', description: 'Neo angle corner enclosure', category: 'Shower Glass' },
  { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', title: 'Glass Meeting Room', description: 'Corporate meeting room glass', category: 'Office Partitions' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">Our Portfolio</span>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-white mb-6">Project Gallery</h1>
            <div className="section-underline mb-8" />
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Browse our completed projects and get inspired for your own premium glass installation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-charcoal-950 sticky top-20 z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'btn-gold'
                    : 'text-white/50 border border-white/10 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm text-white/30 mb-8">
                Showing {filtered.length} projects
              </div>
              <GalleryGrid images={filtered} columns={3} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
