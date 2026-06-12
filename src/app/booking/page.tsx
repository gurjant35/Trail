'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, Home, CreditCard, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const serviceTypes = [
  'Shower Glass',
  'Glass Railings',
  'Closet Doors',
  'Vanity Mirrors',
  'Barn Doors',
  'Office Partitions',
  'Multiple / Other',
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

const generateDates = () => {
  const dates: { date: Date; label: string; day: string }[] = [];
  const today = new Date();
  for (let i = 1; i <= 21; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) {
      dates.push({
        date: d,
        label: d.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' }),
        day: d.toLocaleDateString('en-CA', { weekday: 'short' }),
      });
    }
  }
  return dates.slice(0, 14);
};

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', service: '', notes: '',
  });
  const [processing, setProcessing] = useState(false);
  const [booked, setBooked] = useState(false);

  const dates = generateDates();

  const handlePayment = async () => {
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 2500));
    setProcessing(false);
    setBooked(true);
    toast.success('Appointment confirmed!');
  };

  const canProceedStep1 = selectedDate && selectedTime;
  const canProceedStep2 = formData.name && formData.phone && formData.email && formData.service;

  if (booked) {
    return (
      <div className="min-h-screen bg-charcoal-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-gold-400" />
          </div>
          <h2 className="font-display text-3xl font-semibold text-white mb-4">Appointment Confirmed!</h2>
          <p className="text-white/60 mb-2">
            Your measurement appointment has been booked for:
          </p>
          <div className="bg-charcoal-900 border border-gold-500/20 rounded-xl p-5 mb-6 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Date</span>
              <span className="text-white">{selectedDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Time</span>
              <span className="text-white">{selectedTime}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Service</span>
              <span className="text-white">{formData.service}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Deposit Paid</span>
              <span className="text-gold-400 font-medium">$10.00 ✓</span>
            </div>
          </div>
          <p className="text-white/50 text-sm mb-8">
            A confirmation email has been sent to <strong className="text-white">{formData.email}</strong>. Our team will contact you 24 hours before your appointment.
          </p>
          <a href="/" className="btn-gold px-8 py-3 rounded-sm text-sm inline-block">
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">Schedule</span>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-white mb-4">
              Book Your Appointment
            </h1>
            <div className="section-underline mb-6" />
            <p className="text-white/50 leading-relaxed">
              Schedule a free measurement visit. A $10 deposit secures your time slot — fully applied to your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step indicator */}
      <section className="py-8 bg-charcoal-950">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center gap-0">
            {[
              { num: 1, label: 'Pick a Time' },
              { num: 2, label: 'Your Details' },
              { num: 3, label: 'Payment' },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      step >= s.num
                        ? 'border-gold-500 bg-gold-500/20 text-gold-400'
                        : 'border-white/20 text-white/30'
                    }`}
                  >
                    {step > s.num ? <CheckCircle size={18} className="text-gold-400" /> : s.num}
                  </div>
                  <span className={`text-xs mt-1.5 hidden sm:block ${step >= s.num ? 'text-gold-400' : 'text-white/30'}`}>
                    {s.label}
                  </span>
                </div>
                {i < 2 && (
                  <div className={`w-24 sm:w-32 h-px mx-2 mb-5 transition-colors duration-300 ${step > s.num ? 'bg-gold-500/60' : 'bg-white/10'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-24 bg-charcoal-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <div className="bg-charcoal-900 border border-white/10 rounded-2xl p-8">
                  <h2 className="font-display text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <Calendar size={24} className="text-gold-500" />
                    Select Date & Time
                  </h2>

                  {/* Date picker */}
                  <div className="mb-8">
                    <p className="text-xs text-white/50 uppercase tracking-wide mb-4">Available Dates</p>
                    <div className="grid grid-cols-7 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.label}
                          onClick={() => setSelectedDate(d.label)}
                          className={`flex flex-col items-center p-2 rounded-lg text-xs transition-all duration-200 ${
                            selectedDate === d.label
                              ? 'bg-gold-500/20 border border-gold-500/60 text-gold-400'
                              : 'border border-white/10 text-white/60 hover:border-gold-500/30 hover:text-white'
                          }`}
                        >
                          <span className="font-medium">{d.day}</span>
                          <span className="text-xs mt-0.5 text-current opacity-70">{d.label.split(' ')[1]}</span>
                          <span className="text-[10px] opacity-60">{d.label.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time picker */}
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wide mb-4">Available Times</p>
                    <div className="grid grid-cols-5 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 rounded-lg text-sm transition-all duration-200 ${
                            selectedTime === time
                              ? 'bg-gold-500/20 border border-gold-500/60 text-gold-400'
                              : 'border border-white/10 text-white/60 hover:border-gold-500/30 hover:text-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                    className={`mt-8 w-full py-4 rounded-lg text-sm flex items-center justify-center gap-2 ${
                      canProceedStep1 ? 'btn-gold' : 'bg-white/5 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    Continue
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <div className="bg-charcoal-900 border border-white/10 rounded-2xl p-8">
                  <h2 className="font-display text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <User size={24} className="text-gold-500" />
                    Your Details
                  </h2>

                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">Full Name *</label>
                        <div className="relative">
                          <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                          <input
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Smith"
                            className="premium-input w-full pl-9 pr-4 py-3.5 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">Phone *</label>
                        <div className="relative">
                          <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(416) 000-0000"
                            className="premium-input w-full pl-9 pr-4 py-3.5 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">Email *</label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="premium-input w-full pl-9 pr-4 py-3.5 rounded-lg text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">Property Address</label>
                      <div className="relative">
                        <Home size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="123 Main St, Toronto, ON"
                          className="premium-input w-full pl-9 pr-4 py-3.5 rounded-lg text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">Service Type *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="premium-input w-full px-4 py-3.5 rounded-lg text-sm bg-charcoal-900"
                      >
                        <option value="" className="bg-charcoal-900">Select a service...</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s} className="bg-charcoal-900">{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">Additional Notes</label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={3}
                        placeholder="Any specific requirements or questions..."
                        className="premium-input w-full px-4 py-3.5 rounded-lg text-sm resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={() => setStep(1)}
                      className="btn-outline-gold px-6 py-4 rounded-lg text-sm flex items-center gap-2"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!canProceedStep2}
                      className={`flex-1 py-4 rounded-lg text-sm flex items-center justify-center gap-2 ${
                        canProceedStep2 ? 'btn-gold' : 'bg-white/5 text-white/30 cursor-not-allowed'
                      }`}
                    >
                      Continue to Payment
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <div className="bg-charcoal-900 border border-white/10 rounded-2xl p-8">
                  <h2 className="font-display text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <CreditCard size={24} className="text-gold-500" />
                    Confirm & Pay Deposit
                  </h2>

                  {/* Booking summary */}
                  <div className="bg-charcoal-950 rounded-xl p-6 mb-6 space-y-3">
                    <h3 className="text-sm font-medium text-white/50 uppercase tracking-wide mb-4">Booking Summary</h3>
                    {[
                      { label: 'Date', value: selectedDate },
                      { label: 'Time', value: selectedTime },
                      { label: 'Service', value: formData.service },
                      { label: 'Name', value: formData.name },
                      { label: 'Email', value: formData.email },
                      { label: 'Phone', value: formData.phone },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between text-sm">
                        <span className="text-white/40">{item.label}</span>
                        <span className="text-white">{item.value}</span>
                      </div>
                    ))}
                    <div className="border-t border-white/10 pt-3 flex justify-between text-sm font-semibold">
                      <span className="text-white">Deposit Due Today</span>
                      <span className="text-gold-400">$10.00 CAD</span>
                    </div>
                  </div>

                  {/* Stripe placeholder */}
                  <div className="bg-charcoal-950 border border-white/10 rounded-xl p-6 mb-6">
                    <p className="text-xs text-white/40 uppercase tracking-wide mb-4">Payment Details</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-white/50 mb-2">Card Number</label>
                        <input
                          placeholder="4242 4242 4242 4242"
                          className="premium-input w-full px-4 py-3.5 rounded-lg text-sm font-mono"
                          maxLength={19}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-white/50 mb-2">Expiry</label>
                          <input
                            placeholder="MM / YY"
                            className="premium-input w-full px-4 py-3.5 rounded-lg text-sm font-mono"
                            maxLength={7}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-white/50 mb-2">CVC</label>
                          <input
                            placeholder="123"
                            className="premium-input w-full px-4 py-3.5 rounded-lg text-sm font-mono"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-white/30 mt-4 flex items-center gap-1.5">
                      <span className="text-green-400">🔒</span>
                      Secured by Stripe. Your card details are encrypted.
                    </p>
                  </div>

                  <p className="text-xs text-white/30 mb-6 text-center">
                    The $10 deposit is fully credited towards your project cost. Cancel 24+ hours ahead for a full refund.
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="btn-outline-gold px-6 py-4 rounded-lg text-sm flex items-center gap-2"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button
                      onClick={handlePayment}
                      disabled={processing}
                      className="flex-1 btn-gold py-4 rounded-lg text-sm flex items-center justify-center gap-2"
                    >
                      {processing ? (
                        <>
                          <span className="w-4 h-4 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard size={16} />
                          Pay $10 & Confirm Booking
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
