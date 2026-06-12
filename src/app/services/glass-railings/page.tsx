import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glass Railings | Toronto Premium Glass',
  description: 'Premium frameless glass railings for stairs, balconies and decks in Toronto. Modern safety with elegant design.',
};

const service = {
  title: 'Glass Railings',
  subtitle: 'Frameless Safety Elegance',
  heroImage: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&q=85',
  description:
    'Our glass railing systems combine unobstructed views with code-compliant safety. Whether for interior staircases, outdoor balconies, or commercial mezzanines, our tempered glass panels deliver a sleek, modern aesthetic that stands the test of time.',
  subcategories: [
    {
      id: 'staircase',
      title: 'Staircase Railings',
      description:
        'Frameless glass staircase railings create an open, airy feel while maintaining the safety standards required by Ontario building code. Perfect for modern and contemporary homes.',
      benefits: [
        'Ontario Building Code compliant',
        'Tempered & laminated glass',
        'Stainless steel standoffs',
        'Top-mounted or side-mounted',
        'Interior and exterior grade',
        'Custom height available',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80',
          title: 'Interior Glass Staircase',
          description: 'Frameless glass panel staircase railing',
        },
        {
          src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
          title: 'Open Staircase Design',
          description: 'Side-mounted glass railing system',
        },
      ],
    },
    {
      id: 'balcony',
      title: 'Balcony & Deck Railings',
      description:
        'Preserve your outdoor views while meeting safety requirements with our weatherproof glass balcony and deck railing systems. Engineered to withstand Toronto\'s climate extremes.',
      benefits: [
        'Marine-grade hardware',
        'UV-resistant glass',
        'Wind load engineered',
        'Aluminum or stainless base',
        'Frost & corrosion resistant',
        'P.Eng certified systems',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80',
          title: 'Balcony Glass Railing',
          description: 'Weatherproof deck railing system',
        },
        {
          src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=801&q=80',
          title: 'Deck View Railing',
          description: 'Post-mounted exterior glass panels',
        },
      ],
    },
    {
      id: 'commercial',
      title: 'Commercial Railings',
      description:
        'Large-scale commercial glass railing installations for office buildings, hotels, and retail spaces. We handle projects of any scope with precision engineering.',
      benefits: [
        'High-load engineering',
        'Large-format glass panels',
        'Custom design drawings',
        'Fast-track installation',
        'Structural engineering support',
        'Bulk project pricing',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
          title: 'Commercial Glass Railing',
          description: 'Multi-level atrium glass railing system',
        },
      ],
    },
  ],
};

export default function GlassRailingsPage() {
  return <ServicePageTemplate service={service} />;
}
