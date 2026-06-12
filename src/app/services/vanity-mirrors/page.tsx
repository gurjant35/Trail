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
        {
          src: 'https://images.pexels.com/photos/3875522/pexels-photo-3875522.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Premium Vanity Mirrors',
          description: 'Custom frameless bathroom vanity mirrors',
        },
        {
          src: 'https://images.pexels.com/photos/16501294/pexels-photo-16501294.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Mirror Over Sink',
          description: 'Elegant frameless mirror above modern bathroom sink',
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
          src: 'https://images.pexels.com/photos/19966751/pexels-photo-19966751.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'LED Mirror Lights Reflection',
          description: 'Premium LED backlit bathroom mirror glow effect',
        },
        {
          src: 'https://images.pexels.com/photos/3875522/pexels-photo-3875522.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Backlit Vanity Mirror',
          description: 'Warm LED-edge lit vanity mirror installation',
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
          src: 'https://images.pexels.com/photos/16501294/pexels-photo-16501294.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Custom Shape Mirror',
          description: 'Precision-cut shaped bathroom mirror',
        },
        {
          src: 'https://images.pexels.com/photos/19966751/pexels-photo-19966751.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Round Arch Mirror',
          description: 'Signature arched frameless bathroom mirror',
        },
      ],
    },
  ],
};

export default function VanityMirrorsPage() {
  return <ServicePageTemplate service={service} />;
}
