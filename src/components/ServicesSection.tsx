'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Shower Glass',
    description: 'Frameless & semi-frameless custom shower enclosures. Inline, L-shape, Neo Angle & more.',
    href: '/services/shower-glass',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    badge: 'Most Popular',
  },
  {
    title: 'Glass Railings',
    description: 'Sleek frameless glass railings for stairs, balconies & decks. Modern safety meets elegance.',
    href: '/services/glass-railings',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&q=80',
  },
  {
    title: 'Closet Doors',
    description: 'Custom sliding & hinged glass closet doors. Mirrored or clear glass to maximize your space.',
    href: '/services/closet-doors',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    title: 'Vanity Mirrors',
    description: 'Bespoke bathroom vanity mirrors. Custom shapes, frameless edges & backlit options.',
    href: '/services/vanity-mirrors',
    image: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=600&q=80',
  },
  {
    title: 'Barn Doors',
    description: 'Glass barn doors that blend industrial style with open, light-filled interior design.',
    href: '/services/barn-doors',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'Office Partitions',
    description: 'Floor-to-ceiling glass office partitions. Create professional, open-concept workspaces.',
    href: '/services/office-partitions',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">What We Offer</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Our Services
          </h2>
          <div className="section-underline mb-6" />
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            From custom shower enclosures to office partitions, we deliver precision-crafted glass solutions with uncompromising quality.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={itemVariants}>
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full bg-charcoal-900 rounded-xl overflow-hidden premium-card gold-border cursor-pointer">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
                    {service.badge && (
                      <span className="absolute top-3 left-3 text-xs font-medium tracking-wide px-3 py-1 rounded-full bg-gold-500/90 text-charcoal-950">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-xl font-semibold text-white group-hover:text-gold-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-300">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gold-500 tracking-wide uppercase">
                      <span>View Details</span>
                      <span className="w-8 h-px bg-gold-500/50 group-hover:w-16 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
