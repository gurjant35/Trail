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
        { src: '/gallery/shower-frameless-matte-black.jpg', title: 'Frameless Shower – Matte Black Hardware', description: 'Custom frameless enclosure with 10mm glass and matte black fittings' },
        { src: '/gallery/shower-frameless-angle.jpg', title: 'Frameless Inline Shower – Side View', description: 'Clean lines with dark-tile floor and white vertical tile surround' },
        { src: '/gallery/shower-subway-tile-black.jpg', title: 'Subway Tile Shower – Matte Black', description: 'Frameless glass door with glossy subway tile walls and hex floor' },
        { src: '/gallery/shower-walkin-black-frame.jpg', title: 'Walk-In Shower – Black Frame Panel', description: 'Minimalist walk-in shower with black-frame glass panel' },
        { src: '/gallery/shower-walkin-panel.jpg', title: 'Walk-In Frameless Panel Shower', description: 'Single-panel walk-in shower with matte black top rail' },
        { src: '/gallery/shower-checkerboard-floor.jpg', title: 'Frameless Shower – Checkerboard Floor', description: 'Clean frameless enclosure above classic black-and-white marble floor' },
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
        { src: '/gallery/shower-double-marble.jpg', title: 'Double Shower – Calacatta Marble', description: 'Dual-head frameless shower with full marble surround and matte black hardware' },
        { src: '/gallery/shower-gold-hardware-marble.jpg', title: 'L-Shape Shower – Brushed Gold Hardware', description: 'Frameless L-shape enclosure with brushed gold fittings and marble surround' },
        { src: '/gallery/shower-lshape-marble-tub.jpg', title: 'L-Shape Shower – Marble & Freestanding Tub', description: 'Matte black hardware L-shape with marble walls and adjacent soaker tub' },
      ],
    },
    {
      id: 'neo-angle',
      title: 'Neo Angle & Corner Shower',
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
        { src: '/gallery/shower-corner-chrome.jpg', title: 'Corner Neo Angle Shower', description: 'Frameless corner shower with chrome hardware and light beige tile' },
        { src: '/gallery/shower-sliding-chrome-marble.jpg', title: 'Sliding Shower Door – Chrome & Marble', description: 'Sliding bypass shower door with chrome hardware and marble-look panels' },
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
        { src: '/gallery/shower-dark-marble-spa.jpg', title: 'Spa Shower – Dark Nero Marble', description: 'Frameless glass enclosure with dark marble surround and pebble floor' },
        { src: '/gallery/shower-large-pebble-floor.jpg', title: 'Large Walk-In Shower – Pebble Floor', description: 'Wide frameless walk-in enclosure with pebble mosaic floor' },
        { src: '/gallery/shower-gold-gray-tile.jpg', title: 'Shower – Gold Hardware & Gray Tile', description: 'Semi-frameless shower with champagne gold fittings in gray tile niche' },
        { src: '/gallery/shower-ribbed-glass-luxury.jpg', title: 'Ribbed Glass Shower Door – Luxury Bath', description: 'Fluted glass door panel in a luxury bathroom with freestanding tub' },
        { src: '/gallery/shower-sliding-sauna.jpg', title: 'Sliding Shower Door – Cedar Sauna Interior', description: 'Custom sliding glass door opening into cedar-lined steam room' },
      ],
    },
  ],
};

export default function ShowerGlassPage() {
  return <ServicePageTemplate service={showerGlassService} />;
}
