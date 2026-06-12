import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Shower Glass | Toronto Premium Glass',
  description: 'Frameless and semi-frameless custom shower glass installation in Toronto. Inline, L-Shape, Neo Angle & more. Request a free estimate today.',
};

const showerGlassService = {
  title: 'Shower Glass',
  subtitle: 'Custom Glass Enclosures',
  heroImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=85',
  description:
    'Transform your bathroom into a spa-like retreat with our precision-crafted shower glass enclosures. From sleek frameless designs to practical semi-frameless solutions, every installation is custom-fabricated to your exact specifications using premium tempered safety glass.',
  subcategories: [
    {
      id: 'inline',
      title: 'Inline Shower',
      description:
        'The clean, linear elegance of an inline shower enclosure creates a seamless barrier between your shower and the rest of the bathroom. Perfect for rectangular shower spaces.',
      benefits: [
        'Maximizes visual space',
        'Easy to clean frameless design',
        'Custom dimensions available',
        'Multiple glass types & finishes',
        '10mm or 12mm tempered glass',
        'Chrome, matte black or gold hardware',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
          title: 'Frameless Inline Shower',
          description: 'Floor-to-ceiling frameless glass panel',
        },
        {
          src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=801&q=80',
          title: 'Semi-Frameless Inline',
          description: 'Walk-in shower with minimal framing',
        },
        {
          src: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80',
          title: 'Walk-In Shower Panel',
          description: 'Open-concept wet room design',
        },
      ],
    },
    {
      id: 'l-shape',
      title: 'L-Shape Shower',
      description:
        'L-shaped shower enclosures offer maximum space efficiency while creating a distinct, premium aesthetic. Ideal for corner installations with two glass panels meeting at a right angle.',
      benefits: [
        'Efficient corner installation',
        'Excellent water containment',
        'Premium pivot door options',
        'Custom corner profiles',
        'Full-length glass panels',
        'Anti-limescale glass coating',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
          title: 'Corner L-Shape Enclosure',
          description: 'Premium pivot door L-shape design',
        },
        {
          src: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=800&q=80',
          title: 'L-Shape with Sliding Door',
          description: 'Space-saving sliding panel option',
        },
      ],
    },
    {
      id: 'neo-angle',
      title: 'Neo Angle Shower',
      description:
        'Neo angle showers feature angled panels that elegantly fit into corner spaces while maximizing floor area. A distinctive choice that combines form and function beautifully.',
      benefits: [
        'Maximizes corner space',
        'Distinctive geometric design',
        'Multiple entry configurations',
        'Standard & custom sizes',
        'Pivot or hinged door',
        '5-year hardware warranty',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=802&q=80',
          title: 'Neo Angle Enclosure',
          description: 'Classic neo angle corner shower',
        },
        {
          src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
          title: 'Custom Neo Angle',
          description: 'Extended panel neo angle design',
        },
      ],
    },
    {
      id: 'custom',
      title: 'Custom Designs',
      description:
        'When standard configurations won\'t do, our custom design service brings your unique vision to life. We work with architects, designers, and homeowners to create one-of-a-kind shower enclosures.',
      benefits: [
        'Fully custom sizing & shape',
        'Specialty glass available',
        'Designer hardware options',
        '3D design preview',
        'Collaboration with your designer',
        'Complex geometry welcome',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
          title: 'Designer Custom Shower',
          description: 'Bespoke floor-to-ceiling design',
        },
        {
          src: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=801&q=80',
          title: 'Wet Room Design',
          description: 'Seamless wet room concept',
        },
        {
          src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=803&q=80',
          title: 'Curved Glass Shower',
          description: 'Premium curved glass enclosure',
        },
      ],
    },
  ],
};

export default function ShowerGlassPage() {
  return <ServicePageTemplate service={showerGlassService} />;
}
