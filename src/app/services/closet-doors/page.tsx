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
        {
          src: '/gallery/closet-ribbed-glass-sliding.jpg',
          title: 'Ribbed Glass Sliding Closet Doors',
          description: 'Reeded/fluted glass panels in champagne aluminum frames against marble-look wall',
        },
        {
          src: 'https://images.pexels.com/photos/7027723/pexels-photo-7027723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Glass Panel Sliding Door',
          description: 'Premium room divider with glass panel sliding doors',
        },
        {
          src: 'https://images.pexels.com/photos/18285949/pexels-photo-18285949.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Luxurious Bedroom Closet',
          description: 'Luxury bedroom with elegant wardrobe doors',
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
          src: 'https://images.pexels.com/photos/18285949/pexels-photo-18285949.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Premium Hinged Closet Door',
          description: 'Floor-to-ceiling hinged glass closet door',
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
          src: 'https://images.pexels.com/photos/3875522/pexels-photo-3875522.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Full-Length Vanity Mirrors',
          description: 'Premium floor-to-ceiling mirrored wardrobe panels',
        },
        {
          src: 'https://images.pexels.com/photos/16501294/pexels-photo-16501294.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Mirror Closet Reflection',
          description: 'Seamless mirrored door with frameless edge',
        },
      ],
    },
  ],
};

export default function ClosetDoorsPage() {
  return <ServicePageTemplate service={service} />;
}
