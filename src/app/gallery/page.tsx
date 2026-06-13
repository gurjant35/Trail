'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryGrid from '@/components/GalleryGrid';

const categories = ['All', 'Shower Glass', 'Glass Railings', 'Closet Doors', 'Vanity Mirrors', 'Barn Doors', 'Office Partitions'];

const allImages = [
  // Shower Glass
  { src: '/gallery/shower-frameless-matte-black.jpg', title: 'Frameless Shower – Matte Black Hardware', description: 'Custom frameless enclosure with 10mm glass and matte black fittings', category: 'Shower Glass' },
  { src: '/gallery/shower-frameless-angle.jpg', title: 'Frameless Inline Shower – Side View', description: 'Clean lines with dark-tile floor and white vertical tile surround', category: 'Shower Glass' },
  { src: '/gallery/shower-double-marble.jpg', title: 'Double Shower – Calacatta Marble', description: 'Dual-head frameless shower with full marble surround and matte black hardware', category: 'Shower Glass' },
  { src: '/gallery/shower-dark-marble-spa.jpg', title: 'Spa Shower – Dark Nero Marble', description: 'Frameless glass enclosure with dark marble surround and pebble floor', category: 'Shower Glass' },
  { src: '/gallery/shower-large-pebble-floor.jpg', title: 'Large Walk-In Shower – Pebble Floor', description: 'Wide frameless walk-in enclosure with pebble mosaic floor and matte black hardware', category: 'Shower Glass' },
  { src: '/gallery/shower-subway-tile-black.jpg', title: 'Subway Tile Shower – Matte Black', description: 'Frameless glass door with glossy subway tile walls and hex mosaic floor', category: 'Shower Glass' },
  { src: '/gallery/shower-sliding-chrome-marble.jpg', title: 'Sliding Shower Door – Chrome & Marble', description: 'Sliding bypass shower door with chrome hardware and marble-look panels', category: 'Shower Glass' },
  { src: '/gallery/shower-gold-hardware-marble.jpg', title: 'L-Shape Shower – Brushed Gold Hardware', description: 'Frameless L-shape enclosure with brushed gold/brass fittings and marble surround', category: 'Shower Glass' },
  { src: '/gallery/shower-corner-chrome.jpg', title: 'Corner Neo Angle Shower', description: 'Frameless corner shower with chrome hardware and light beige tile', category: 'Shower Glass' },
  { src: '/gallery/shower-walkin-black-frame.jpg', title: 'Walk-In Shower – Black Frame Panel', description: 'Minimalist walk-in shower with black-frame glass panel and matte black fixtures', category: 'Shower Glass' },
  { src: '/gallery/shower-walkin-panel.jpg', title: 'Walk-In Frameless Panel Shower', description: 'Single-panel walk-in shower with matte black top rail and white tile', category: 'Shower Glass' },
  { src: '/gallery/shower-ribbed-glass-luxury.jpg', title: 'Ribbed Glass Shower Door – Luxury Bath', description: 'Fluted/reeded glass door panel in a luxury bathroom with freestanding tub', category: 'Shower Glass' },
  { src: '/gallery/shower-gold-gray-tile.jpg', title: 'Shower – Gold Hardware & Gray Tile', description: 'Semi-frameless shower with champagne gold fittings set in gray tile niche', category: 'Shower Glass' },
  { src: '/gallery/shower-checkerboard-floor.jpg', title: 'Frameless Shower – Checkerboard Floor', description: 'Clean frameless enclosure above a classic black-and-white marble floor', category: 'Shower Glass' },
  { src: '/gallery/shower-lshape-marble-tub.jpg', title: 'L-Shape Shower – Marble & Freestanding Tub', description: 'Matte black hardware L-shape enclosure with marble walls and adjacent soaker tub', category: 'Shower Glass' },
  { src: '/gallery/shower-sliding-sauna.jpg', title: 'Sliding Shower Door – Cedar Sauna Interior', description: 'Custom sliding glass door opening into cedar-lined steam room', category: 'Shower Glass' },
  // Glass Railings
  { src: '/gallery/railing-stairs-black-hardware.jpg', title: 'Open-Riser Staircase – Matte Black Clamps', description: 'Frameless glass railing with point-fixed matte black hardware on open-riser oak stairs', category: 'Glass Railings' },
  { src: '/gallery/railing-double-height-staircase.jpg', title: 'Double-Height Staircase Glass Railing', description: 'Full glass railing system spanning two floors with oak treads', category: 'Glass Railings' },
  { src: '/gallery/railing-detail-black-hardware.jpg', title: 'Glass Railing – Close-Up Hardware Detail', description: 'Precision-fitted standoffs and matte black top rail on light-wood stairs', category: 'Glass Railings' },
  // Closet Doors
  { src: '/gallery/closet-ribbed-glass-sliding.jpg', title: 'Ribbed Glass Sliding Closet Doors', description: 'Reeded/fluted glass panels in champagne aluminum frames against marble-look wall', category: 'Closet Doors' },
  { src: '/gallery/closet-three-panel-frosted-mirror.jpg', title: 'Three-Panel Closet – Frosted & Mirror', description: 'Black-frame three-panel sliding closet with frosted glass and centre mirror', category: 'Closet Doors' },
  { src: '/gallery/closet-frosted-white-frame.jpg', title: 'Frosted Glass Sliding Closet Doors', description: 'Two-panel frosted glass closet doors with clean white frame', category: 'Closet Doors' },
  // Vanity Mirrors
  { src: '/gallery/mirror-bathroom-sconces.jpg', title: 'Custom Bathroom Mirror with Sconces', description: 'Precision-cut vanity mirror flanked by contemporary wall sconces', category: 'Vanity Mirrors' },
  { src: '/gallery/mirror-gym-wall.jpg', title: 'Commercial Gym Mirror Wall', description: 'Large-format mirror wall installation in commercial fitness studio', category: 'Vanity Mirrors' },
  { src: '/gallery/mirror-gym-column.jpg', title: 'Gym Column Mirror Installation', description: 'Custom framed mirror panel on gym column with full-room reflection', category: 'Vanity Mirrors' },
  // Barn Doors
  { src: '/gallery/barn-door-frosted-glass.jpg', title: 'Frosted Glass Door Panel', description: 'Full-height frosted glass panel with satin chrome hardware', category: 'Barn Doors' },
  { src: '/gallery/barn-door-frosted-sliding.jpg', title: 'Frosted Sliding Glass Partition', description: 'Double frosted glass panels as room divider between kitchen and hallway', category: 'Barn Doors' },
  { src: '/gallery/barn-door-steel-frame-open.jpg', title: 'Steel-Frame Glass Barn Door – Open', description: 'Black steel-frame frosted glass barn door in open position', category: 'Barn Doors' },
  { src: '/gallery/barn-door-steel-frame-closed.jpg', title: 'Steel-Frame Glass Barn Door – Closed', description: 'Floor-to-ceiling black steel-frame frosted glass door panel', category: 'Barn Doors' },
  // Office Partitions
  { src: '/gallery/partition-staircase-black-frame.jpg', title: 'Glass Partition Wall – Matte Black Frame', description: 'Full-height frameless glass wall with matte black frame enclosing staircase area', category: 'Office Partitions' },
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
