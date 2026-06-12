import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vanity Mirrors | Toronto Premium Glass',
  description: 'Custom bespoke bathroom vanity mirrors in Toronto. Frameless, backlit, and shaped mirrors for luxury bathrooms.',
};

const service = {
  title: 'Vanity Mirrors',
  subtitle: 'Bespoke Bathroom Reflections',
  heroImage: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=1920&q=85',
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
        {
          src: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=800&q=80',
          title: 'Frameless Vanity Mirror',
          description: 'Custom cut frameless bathroom mirror',
        },
        {
          src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=804&q=80',
          title: 'Double Vanity Mirror',
          description: 'Wide span double sink mirror',
        },
      ],
    },
    {
      id: 'backlit',
      title: 'LED Backlit Mirrors',
      description:
        'Transform your bathroom with premium LED backlit mirrors that provide even, flattering light. Available with dimmer controls, anti-fog, and colour temperature adjustment.',
      benefits: [
        'Warm & cool light modes',
        'Dimmer switch included',
        'Anti-fog technology',
        'Energy-efficient LED',
        'Touch or rocker switch',
        'IP44 waterproof rated',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=801&q=80',
          title: 'LED Backlit Mirror',
          description: 'Warm backlit glow vanity mirror',
        },
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
      images: [
        {
          src: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=802&q=80',
          title: 'Arch Vanity Mirror',
          description: 'Arched frameless bathroom mirror',
        },
        {
          src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=801&q=80',
          title: 'Round Mirror Cluster',
          description: 'Multiple round mirror arrangement',
        },
      ],
    },
  ],
};

export default function VanityMirrorsPage() {
  return <ServicePageTemplate service={service} />;
}
