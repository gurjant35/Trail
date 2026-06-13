import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glass Closet Doors | Toronto Premium Glass',
  description: 'Custom sliding and hinged glass closet doors in Toronto. Mirrored, clear, or frosted glass to elevate your bedroom or walk-in closet.',
};

const service = {
  title: 'Closet Doors',
  subtitle: 'Elegant Space Solutions',
  heroImage: 'https://images.pexels.com/photos/18285949/pexels-photo-18285949.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  description:
    'Our custom glass closet doors transform ordinary storage into a design statement. From mirrored panels that expand your space visually to frosted glass that conceals with style, every door is crafted to your exact measurements.',
  subcategories: [
    {
      id: 'sliding',
      title: 'Sliding Closet Doors',
      description:
        'Space-efficient sliding glass closet doors glide smoothly on premium hardware systems. Ideal for any size closet or wardrobe opening.',
      benefits: [
        'Soft-close roller system',
        'Top-hung or bottom-track options',
        'No floor space needed',
        'Mirrored or clear glass',
        'Bypass or multi-panel',
        'Custom panel sizes',
      ],
      images: [
        { src: '/gallery/closet-ribbed-glass-sliding.jpg', title: 'Ribbed Glass Sliding Closet Doors', description: 'Reeded/fluted glass panels in champagne aluminum frames against marble-look wall' },
        { src: '/gallery/closet-three-panel-frosted-mirror.jpg', title: 'Three-Panel Closet – Frosted & Mirror', description: 'Black-frame three-panel sliding closet with frosted glass and centre mirror' },
        { src: '/gallery/closet-frosted-white-frame.jpg', title: 'Frosted Glass Sliding Closet Doors', description: 'Two-panel frosted glass closet doors with clean white frame' },
      ],
    },
    {
      id: 'hinged',
      title: 'Hinged Closet Doors',
      description:
        'Classic hinged glass closet doors offer a traditional look with a modern glass twist. Available in single, double, and French door configurations.',
      benefits: [
        'Full-access door swing',
        'Soft-close hinges',
        'Elegant pivot options',
        'Floor-to-ceiling heights',
        'Double door configurations',
        'Custom handle selection',
      ],
      images: [],
    },
    {
      id: 'mirrored',
      title: 'Mirrored Doors',
      description:
        'Premium mirrored closet doors that create the illusion of more space while serving a functional purpose. Available in full-length or custom sizes.',
      benefits: [
        'Makes rooms appear larger',
        'Full-length reflection',
        'Safety-backed mirror glass',
        'Multiple mirror tints',
        'Anti-fog coatings available',
        'Custom etching & designs',
      ],
      images: [],
    },
  ],
};

export default function ClosetDoorsPage() {
  return <ServicePageTemplate service={service} />;
}
