'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Calendar, Send } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success('Message sent! We\'ll be in touch shortly.');
    setForm({ name: '', phone: '', message: '' });
    setSending(false);
    setOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full btn-gold flex items-center justify-center shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact us"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-80 floating-panel rounded-xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-gold-600/20 to-gold-500/10 border-b border-gold-500/20">
              <h3 className="font-display font-semibold text-white text-lg">Get in Touch</h3>
              <p className="text-xs text-white/50 mt-0.5">We typically respond within 2 hours</p>
            </div>

            <div className="p-5 space-y-4">
              {/* Quick contact info */}
              <div className="space-y-3">
                <a
                  href="tel:+16473255635"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wide">Call us</p>
                    <p className="text-sm text-white group-hover:text-gold-400 transition-colors">+1 (647) 325-5635</p>
                  </div>
                </a>
                <a
                  href="tel:+16476424080"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wide">Call us</p>
                    <p className="text-sm text-white group-hover:text-gold-400 transition-colors">+1 (647) 642-4080</p>
                  </div>
                </a>
                <a
                  href="mailto:info@torontopremiumglass.ca"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wide">Email</p>
                    <p className="text-sm text-white group-hover:text-gold-400 transition-colors truncate">info@torontopremiumglass.ca</p>
                  </div>
                </a>
              </div>

              {/* Book appointment */}
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg border border-gold-500/30 hover:border-gold-500/60 hover:bg-gold-500/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                  <Calendar size={14} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-sm text-gold-400 font-medium">Book Measurement Appointment</p>
                  <p className="text-xs text-white/40">$10 deposit · Secure booking</p>
                </div>
              </Link>

              {/* Quick form */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-white/40 uppercase tracking-wide mb-3">Quick Message</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="premium-input w-full px-3 py-2.5 rounded-lg text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="premium-input w-full px-3 py-2.5 rounded-lg text-sm"
                  />
                  <textarea
                    placeholder="How can we help?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={3}
                    className="premium-input w-full px-3 py-2.5 rounded-lg text-sm resize-none"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-gold w-full py-2.5 rounded-lg text-sm flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <span className="w-4 h-4 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
