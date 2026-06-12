'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Link from 'next/link';

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  { icon: Phone, label: 'Phone 1', value: '+1 (647) 325-5635', href: 'tel:+16473255635' },
  { icon: Phone, label: 'Phone 2', value: '+1 (647) 642-4080', href: 'tel:+16476424080' },
  { icon: Mail, label: 'Email', value: 'info@torontopremiumglass.ca', href: 'mailto:info@torontopremiumglass.ca' },
  { icon: MapPin, label: 'Service Area', value: 'Toronto & Greater Toronto Area', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8am–6pm · Sat: 9am–4pm', href: null },
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    reset();
    setSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">Reach Out</span>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-white mb-4">Contact Us</h1>
            <div className="w-12 h-px bg-gold-500 mb-6" />
            <p className="text-white/50 max-w-xl leading-relaxed">
              Have a question or ready to start your project? We'd love to hear from you. Expect a response within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl font-semibold text-white mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wide mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white hover:text-gold-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick actions */}
              <div className="space-y-3">
                <Link
                  href="/booking"
                  className="btn-gold flex items-center justify-between px-6 py-4 rounded-lg group"
                >
                  <span>Book a Measurement Appointment</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+16473255635"
                  className="btn-outline-gold flex items-center justify-between px-6 py-4 rounded-lg group"
                >
                  <span>Call Us Now</span>
                  <Phone size={16} />
                </a>
              </div>

              {/* Google Maps */}
              <div className="mt-10 rounded-xl overflow-hidden border border-white/10 h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57442494123!2d-79.54286730000001!3d43.7184921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Toronto service area map"
                />
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="bg-charcoal-900/80 border border-white/10 rounded-2xl p-8">
                <h3 className="font-display text-2xl font-semibold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">Name *</label>
                      <input
                        {...register('name', { required: 'Required' })}
                        placeholder="Your name"
                        className={`premium-input w-full px-4 py-3.5 rounded-lg text-sm ${errors.name ? 'border-red-500/50' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">Phone</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="(416) 000-0000"
                        className="premium-input w-full px-4 py-3.5 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">Email *</label>
                    <input
                      {...register('email', {
                        required: 'Required',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                      })}
                      type="email"
                      placeholder="you@example.com"
                      className={`premium-input w-full px-4 py-3.5 rounded-lg text-sm ${errors.email ? 'border-red-500/50' : ''}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">Subject</label>
                    <input
                      {...register('subject')}
                      placeholder="How can we help?"
                      className="premium-input w-full px-4 py-3.5 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">Message *</label>
                    <textarea
                      {...register('message', { required: 'Required' })}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className={`premium-input w-full px-4 py-3.5 rounded-lg text-sm resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full py-4 rounded-lg text-sm flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span className="w-4 h-4 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin" />
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
