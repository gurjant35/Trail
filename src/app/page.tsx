import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import QuoteSection from '@/components/QuoteSection';
import Testimonials from '@/components/Testimonials';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import WhyUsSection from '@/components/WhyUsSection';
import ProcessSection from '@/components/ProcessSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUsSection />

      {/* Before & After showcase */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">
              Transformations
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-6">
              See the Difference
            </h2>
            <div className="section-underline mb-6" />
            <p className="text-white/50 max-w-xl mx-auto">
              Drag the slider to see how we transform ordinary spaces into premium glass showcases.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="https://images.pexels.com/photos/7018822/pexels-photo-7018822.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
              afterImage="https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
              beforeLabel="Before"
              afterLabel="After"
              alt="Shower glass transformation"
            />
            <BeforeAfterSlider
              beforeImage="https://images.pexels.com/photos/5184791/pexels-photo-5184791.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
              afterImage="https://images.pexels.com/photos/6444248/pexels-photo-6444248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
              beforeLabel="Before"
              afterLabel="After"
              alt="Glass railing transformation"
            />
          </div>
        </div>
      </section>

      <ProcessSection />
      <Testimonials />
      <QuoteSection />

      {/* Service area map */}
      <section className="py-24 bg-charcoal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4 block">
              Where We Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
              Serving Toronto & The GTA
            </h2>
            <p className="text-white/50 max-w-lg mx-auto text-sm">
              Toronto · Mississauga · Brampton · Vaughan · Markham · Richmond Hill · Oakville · Burlington
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57442494123!2d-79.54286730000001!3d43.7184921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Toronto Premium Glass service area"
            />
          </div>
        </div>
      </section>
    </>
  );
}
