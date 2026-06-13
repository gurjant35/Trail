import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glass Railings | Toronto Premium Glass',
  description: 'Premium frameless glass railings for stairs, balconies and decks in Toronto. Modern safety with elegant design.',
};

const service = {
  title: 'Glass Railings',
  subtitle: 'Frameless Safety Elegance',
  heroImage: 'https://images.pexels.com/photos/6444248/pexels-photo-6444248.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
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
        { src: '/gallery/railing-stairs-black-hardware.jpg', title: 'Open-Riser Staircase – Matte Black Clamps', description: 'Frameless glass railing with point-fixed matte black hardware on open-riser oak stairs' },
        { src: '/gallery/railing-double-height-staircase.jpg', title: 'Double-Height Staircase Glass Railing', description: 'Full glass railing system spanning two residential floors with oak treads' },
        { src: '/gallery/railing-detail-black-hardware.jpg', title: 'Glass Railing – Close-Up Hardware Detail', description: 'Precision-fitted standoffs and matte black top rail on light-wood stairs' },
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
      images: [],
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
        { src: '/gallery/partition-staircase-black-frame.jpg', title: 'Glass Partition Wall – Matte Black Frame', description: 'Full-height frameless glass wall with matte black frame enclosing staircase area' },
      ],
    },
  ],
};

export default function GlassRailingsPage() {
  return <ServicePageTemplate service={service} />;
}
