'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const serviceOptions = [
  'Shower Glass',
  'Glass Railings',
  'Closet Doors',
  'Vanity Mirrors',
  'Barn Doors',
  'Office Partitions',
  'Other / Multiple Services',
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export default function QuoteSection() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast.success('Estimate request received! We\'ll contact you within 24 hours.');
    reset();
    setSubmitting(false);
  };

  return (
    <section id="quote" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-900" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,148,58,0.4) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">Free Consultation</span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-6 leading-tight">
              Request Your
              <br />
              <span className="gold-gradient-text italic">Free Estimate</span>
            </h2>
            <div className="w-12 h-px bg-gold-500 mb-8" />
            <p className="text-white/50 leading-relaxed mb-10 text-lg">
              Tell us about your project and we'll provide a detailed, no-obligation quote within 24 hours.
            </p>

            {/* Why choose us */}
            <div className="space-y-5">
              {[
                { title: 'Fast Response', desc: 'Quote within 24 hours, guaranteed.' },
                { title: 'Premium Materials', desc: 'Only top-grade tempered safety glass.' },
                { title: 'Expert Installation', desc: 'Certified installers with 12+ years experience.' },
                { title: 'Full Warranty', desc: '2-year workmanship & material warranty.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight size={12} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-charcoal-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="John Smith"
                      className={`premium-input w-full px-4 py-3.5 rounded-lg text-sm ${errors.name ? 'border-red-500/50' : ''}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">
                      Phone *
                    </label>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      type="tel"
                      placeholder="(416) 000-0000"
                      className={`premium-input w-full px-4 py-3.5 rounded-lg text-sm ${errors.phone ? 'border-red-500/50' : ''}`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
                    })}
                    type="email"
                    placeholder="john@example.com"
                    className={`premium-input w-full px-4 py-3.5 rounded-lg text-sm ${errors.email ? 'border-red-500/50' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">
                    Service Type *
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className={`premium-input w-full px-4 py-3.5 rounded-lg text-sm bg-charcoal-900 ${errors.service ? 'border-red-500/50' : ''}`}
                  >
                    <option value="" className="bg-charcoal-900">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-charcoal-900">{opt}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-wide mb-2">
                    Project Details
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Describe your project, dimensions, preferences..."
                    className="premium-input w-full px-4 py-3.5 rounded-lg text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full py-4 rounded-lg text-sm flex items-center justify-center gap-2 mt-2"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Request Estimate
                    </>
                  )}
                </button>
                <p className="text-xs text-white/30 text-center">
                  No obligation. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
