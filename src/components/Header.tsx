'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { label: 'Shower Glass', href: '/services/shower-glass' },
  { label: 'Glass Railings', href: '/services/glass-railings' },
  { label: 'Closet Doors', href: '/services/closet-doors' },
  { label: 'Vanity Mirrors', href: '/services/vanity-mirrors' },
  { label: 'Barn Doors', href: '/services/barn-doors' },
  { label: 'Office Partitions', href: '/services/office-partitions' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', hasDropdown: true },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full border border-gold-500/50 flex items-center justify-center group-hover:border-gold-400 transition-colors duration-300">
                <div className="w-5 h-5 border-2 border-gold-500 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <span className="block text-lg font-display font-semibold tracking-wide text-white leading-tight">
                Toronto
              </span>
              <span className="block text-xs font-sans font-light tracking-[0.25em] text-gold-500 uppercase leading-tight">
                Premium Glass
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white tracking-wide transition-colors duration-200">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-charcoal-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden"
                      >
                        {services.map((s, i) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-gold-500/10 hover:pl-7 transition-all duration-200 border-b border-white/5 last:border-0"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    pathname === link.href ? 'text-gold-400' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/booking"
              className="btn-gold px-6 py-2.5 text-sm rounded-sm transition-all duration-300"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-charcoal-950/98 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              <Link href="/" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Home
              </Link>
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-1 space-y-1 overflow-hidden"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2.5 text-sm text-white/60 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/gallery" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Contact
              </Link>
              <div className="pt-4">
                <Link href="/booking" className="btn-gold block text-center px-6 py-3 text-sm rounded-sm">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
