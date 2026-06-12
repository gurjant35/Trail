'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryGrid from '@/components/GalleryGrid';

const categories = ['All', 'Shower Glass', 'Glass Railings', 'Closet Doors', 'Vanity Mirrors', 'Barn Doors', 'Office Partitions'];

const allImages = [
  // Shower Glass
  { src: 'https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Frameless Glass Shower Room', description: 'Crystal-clear frameless shower enclosure', category: 'Shower Glass' },
  { src: 'https://images.pexels.com/photos/7168077/pexels-photo-7168077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Modern Shower with Glass Door', description: 'Sleek glass shower door with matte black hardware', category: 'Shower Glass' },
  { src: 'https://images.pexels.com/photos/6436770/pexels-photo-6436770.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Walk-In Shower Cabin', description: 'Open-concept walk-in glass shower', category: 'Shower Glass' },
  { src: 'https://images.pexels.com/photos/19227243/pexels-photo-19227243.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Luxury Bathroom Shower', description: 'High-end bathroom with glass shower enclosure', category: 'Shower Glass' },
  { src: 'https://images.pexels.com/photos/6523301/pexels-photo-6523301.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Shower Cabin Interior', description: 'Premium glass shower cabin with tiling', category: 'Shower Glass' },
  // Glass Railings
  { src: 'https://images.pexels.com/photos/6444248/pexels-photo-6444248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Modern Staircase Glass Railing', description: 'Interior building staircase with frameless glass railing', category: 'Glass Railings' },
  { src: 'https://images.pexels.com/photos/10135334/pexels-photo-10135334.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Concrete Staircase Glass Railing', description: 'Full glass panel railing on concrete stairs', category: 'Glass Railings' },
  { src: 'https://images.pexels.com/photos/8134804/pexels-photo-8134804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Wooden Staircase Glass Railing', description: 'Premium wood treads with glass railing system', category: 'Glass Railings' },
  { src: 'https://images.pexels.com/photos/18803873/pexels-photo-18803873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Open Riser Glass Railing', description: 'Commercial open-riser staircase with glass railings', category: 'Glass Railings' },
  // Closet Doors
  { src: 'https://images.pexels.com/photos/7027723/pexels-photo-7027723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Glass Panel Closet Door', description: 'Sliding glass panel room door', category: 'Closet Doors' },
  { src: 'https://images.pexels.com/photos/18285949/pexels-photo-18285949.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Luxury Bedroom Closet', description: 'Premium wardrobe in luxurious bedroom', category: 'Closet Doors' },
  // Vanity Mirrors
  { src: 'https://images.pexels.com/photos/3875522/pexels-photo-3875522.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Custom Vanity Mirrors', description: 'Premium frameless bathroom vanity mirrors', category: 'Vanity Mirrors' },
  { src: 'https://images.pexels.com/photos/16501294/pexels-photo-16501294.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Mirror Over Bathroom Sink', description: 'Frameless vanity mirror over modern sink', category: 'Vanity Mirrors' },
  { src: 'https://images.pexels.com/photos/19966751/pexels-photo-19966751.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'LED Mirror Reflection', description: 'Backlit bathroom mirror with warm LED glow', category: 'Vanity Mirrors' },
  // Barn Doors
  { src: 'https://images.pexels.com/photos/7027723/pexels-photo-7027723.jpeg?auto=compress&cs=tinysrgb&w=800&h=601', title: 'Interior Glass Barn Door', description: 'Modern glass panel sliding barn door', category: 'Barn Doors' },
  { src: 'https://images.pexels.com/photos/5997977/pexels-photo-5997977.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Glass Barn Door Partition', description: 'Contemporary apartment glass sliding partition', category: 'Barn Doors' },
  // Office Partitions
  { src: 'https://images.pexels.com/photos/3801167/pexels-photo-3801167.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Modern Office Glass Walls', description: 'Stylish office with full glass wall partitions', category: 'Office Partitions' },
  { src: 'https://images.pexels.com/photos/6794926/pexels-photo-6794926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Glass Conference Room', description: 'Corridor with glass-walled conference room', category: 'Office Partitions' },
  { src: 'https://images.pexels.com/photos/6794929/pexels-photo-6794929.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Office Center Glass Partition', description: 'Modern office with interior glass corridor walls', category: 'Office Partitions' },
  { src: 'https://images.pexels.com/photos/6044814/pexels-photo-6044814.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', title: 'Private Office Glass Wall', description: 'Executive workspace with glass wall partition', category: 'Office Partitions' },
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
