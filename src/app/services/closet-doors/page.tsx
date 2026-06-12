import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glass Closet Doors | Toronto Premium Glass',
  description: 'Custom sliding and hinged glass closet doors in Toronto. Mirrored, clear, or frosted glass to elevate your bedroom or walk-in closet.',
};

const service = {
  title: 'Closet Doors',
  subtitle: 'Elegant Space Solutions',
  heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85',
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
        {
          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
          title: 'Mirror Sliding Doors',
          description: 'Full-length mirrored sliding closet panels',
        },
        {
          src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
          title: 'Clear Glass Sliding',
          description: 'Frameless clear glass bypass doors',
        },
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
      images: [
        {
          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=801&q=80',
          title: 'Hinged Glass Door Pair',
          description: 'French-style glass closet doors',
        },
      ],
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
      images: [
        {
          src: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=800&q=80',
          title: 'Full-Length Mirror Closet',
          description: 'Floor-to-ceiling mirrored wardrobe doors',
        },
        {
          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=802&q=80',
          title: 'Frameless Mirror Panels',
          description: 'Seamless edge-to-edge mirror installation',
        },
      ],
    },
  ],
};

export default function ClosetDoorsPage() {
  return <ServicePageTemplate service={service} />;
}
