import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Shower Glass | Toronto Premium Glass',
  description: 'Frameless and semi-frameless custom shower glass installation in Toronto. Inline, L-Shape, Neo Angle & more. Request a free estimate today.',
};

const showerGlassService = {
  title: 'Shower Glass',
  subtitle: 'Custom Glass Enclosures',
  heroImage: 'https://images.pexels.com/photos/19227243/pexels-photo-19227243.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
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
          src: '/gallery/shower-frameless-matte-black.jpg',
          title: 'Frameless Shower – Matte Black Hardware',
          description: 'Custom frameless enclosure with 10mm glass and matte black fittings',
        },
        {
          src: '/gallery/shower-frameless-angle.jpg',
          title: 'Frameless Inline Shower – Side View',
          description: 'Clean lines, dark-tile floor and white vertical tile surround',
        },
        {
          src: 'https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Frameless Inline Shower',
          description: 'Crystal-clear frameless glass shower enclosure',
        },
        {
          src: 'https://images.pexels.com/photos/7168077/pexels-photo-7168077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Modern Shower Room with Glass Door',
          description: 'Sleek glass door shower with matte black hardware',
        },
        {
          src: 'https://images.pexels.com/photos/6436770/pexels-photo-6436770.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Walk-In Shower Cabin',
          description: 'Open-concept walk-in shower with tile surround',
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
          src: '/gallery/shower-double-marble.jpg',
          title: 'Double Shower – Full Marble Surround',
          description: 'Dual-head frameless shower with Calacatta marble walls and matte black hardware',
        },
        {
          src: 'https://images.pexels.com/photos/6523301/pexels-photo-6523301.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'L-Shape Shower Cabin',
          description: 'Premium corner shower enclosure with glass panels',
        },
        {
          src: 'https://images.pexels.com/photos/19227243/pexels-photo-19227243.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Luxury L-Shape Bathroom',
          description: 'High-end L-shape shower with gold accents',
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
          src: 'https://images.pexels.com/photos/7018822/pexels-photo-7018822.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Contemporary Shower Enclosure',
          description: 'Neo angle glass enclosure with clean tiling',
        },
        {
          src: 'https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Clear Glass Shower Room',
          description: 'Crystal-clear neo angle corner shower',
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
          src: '/gallery/shower-dark-marble-spa.jpg',
          title: 'Spa-Style Shower – Dark Marble',
          description: 'Frameless glass enclosure with dark Nero marble surround and pebble floor',
        },
        {
          src: 'https://images.pexels.com/photos/19227243/pexels-photo-19227243.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Luxury Custom Shower',
          description: 'Bespoke designer bathroom with premium glass',
        },
        {
          src: 'https://images.pexels.com/photos/7168077/pexels-photo-7168077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Designer Glass Shower',
          description: 'Custom frameless shower with black hardware',
        },
        {
          src: 'https://images.pexels.com/photos/6523301/pexels-photo-6523301.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Open Plan Wet Room',
          description: 'Seamless wet room glass enclosure',
        },
      ],
    },
  ],
};

export default function ShowerGlassPage() {
  return <ServicePageTemplate service={showerGlassService} />;
}
