import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const services = [
  { label: 'Shower Glass', href: '/services/shower-glass' },
  { label: 'Glass Railings', href: '/services/glass-railings' },
  { label: 'Closet Doors', href: '/services/closet-doors' },
  { label: 'Vanity Mirrors', href: '/services/vanity-mirrors' },
  { label: 'Barn Doors', href: '/services/barn-doors' },
  { label: 'Office Partitions', href: '/services/office-partitions' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-white/5">
      {/* Top strip */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full border border-gold-500/50 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-gold-500 rotate-45" />
              </div>
              <div>
                <span className="block text-base font-display font-semibold text-white leading-tight">Toronto</span>
                <span className="block text-xs font-light tracking-[0.25em] text-gold-500 uppercase">Premium Glass</span>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Toronto's premier custom glass specialists. Crafting transparent elegance for homes and businesses across the GTA.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-500/50 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/50 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-gold-500/50 group-hover:w-5 transition-all duration-300" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Get a Quote', href: '/booking' },
                { label: 'Contact', href: '/contact' },
                { label: 'Book Appointment', href: '/booking' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-gold-500/50 group-hover:w-5 transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+14165550123" className="flex items-start gap-3 group">
                  <Phone size={16} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/50 group-hover:text-white transition-colors">+1 (416) 555-0123</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@torontopremiumglass.ca" className="flex items-start gap-3 group">
                  <Mail size={16} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/50 group-hover:text-white transition-colors">info@torontopremiumglass.ca</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">Toronto, ON & Surrounding GTA</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-xs text-white/30 mb-1">Mon – Fri: 8am – 6pm</p>
              <p className="text-xs text-white/30">Sat: 9am – 4pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Toronto Premium Glass. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a key={t} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
