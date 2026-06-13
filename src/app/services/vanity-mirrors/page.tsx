import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vanity Mirrors | Toronto Premium Glass',
  description: 'Custom bespoke bathroom vanity mirrors in Toronto. Frameless, backlit, and shaped mirrors for luxury bathrooms.',
};

const service = {
  title: 'Vanity Mirrors',
  subtitle: 'Bespoke Bathroom Reflections',
  heroImage: 'https://images.pexels.com/photos/3875522/pexels-photo-3875522.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  description:
    'A stunning vanity mirror is the centerpiece of any premium bathroom. Our custom mirrors are precision-cut, edge-polished, and available in any size or shape. From simple frameless panels to LED-backlit statement pieces, we craft mirrors that elevate your space.',
  subcategories: [
    {
      id: 'frameless',
      title: 'Frameless Mirrors',
      description:
        'Clean and contemporary frameless vanity mirrors with polished beveled edges. Custom cut to any dimension to perfectly fit your bathroom vanity.',
      benefits: [
        'Custom cut to any size',
        'Polished beveled edges',
        'Anti-fog coating available',
        '6mm premium mirror glass',
        'Safety-backed',
        'Same-week installation',
      ],
      images: [
        { src: '/gallery/mirror-bathroom-sconces.jpg', title: 'Custom Bathroom Mirror with Sconces', description: 'Precision-cut vanity mirror flanked by contemporary wall sconces' },
      ],
    },
    {
      id: 'commercial',
      title: 'Commercial & Gym Mirrors',
      description:
        'Large-format mirror installations for fitness studios, dance halls, retail fitting rooms, and commercial spaces. We supply and install full wall mirror systems for any commercial application.',
      benefits: [
        'Wall-to-wall mirror systems',
        'Safety-backed mirror glass',
        'Frameless or framed options',
        'Fast commercial installation',
        'Any size panel available',
        'Gym & studio specialists',
      ],
      images: [
        { src: '/gallery/mirror-gym-wall.jpg', title: 'Commercial Gym Mirror Wall', description: 'Large-format mirror wall installation in commercial fitness studio' },
        { src: '/gallery/mirror-gym-column.jpg', title: 'Gym Column Mirror Installation', description: 'Custom framed mirror panel on gym column with full-room reflection' },
      ],
    },
    {
      id: 'shaped',
      title: 'Custom Shaped Mirrors',
      description:
        'Round, arched, hexagonal, or any custom shape — our precision cutting and edge polishing equipment creates mirrors in virtually any form your design requires.',
      benefits: [
        'Any shape available',
        'CNC precision cutting',
        'Smooth polished edges',
        'Arch & round specialty',
        'Designer statement pieces',
        'Coordination with fixtures',
      ],
      images: [],
    },
  ],
};

export default function VanityMirrorsPage() {
  return <ServicePageTemplate service={service} />;
}
