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
        {
          src: '/gallery/railing-stairs-black-hardware.jpg',
          title: 'Open-Riser Staircase – Matte Black Hardware',
          description: 'Frameless glass railing with point-fixed matte black clamps on open-riser oak stairs',
        },
        {
          src: '/gallery/railing-double-height-staircase.jpg',
          title: 'Double-Height Staircase Glass Railing',
          description: 'Full glass railing system spanning two residential floors with oak treads',
        },
        {
          src: '/gallery/railing-detail-black-hardware.jpg',
          title: 'Glass Railing – Close-Up Detail',
          description: 'Precision-fitted standoffs and matte black top rail on light-wood stairs',
        },
        {
          src: 'https://images.pexels.com/photos/6444248/pexels-photo-6444248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Interior Glass Staircase Railing',
          description: 'Modern building staircase with frameless glass railing',
        },
        {
          src: 'https://images.pexels.com/photos/10135334/pexels-photo-10135334.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Concrete Staircase with Glass Railings',
          description: 'Contemporary concrete stairs with full glass panel railing',
        },
        {
          src: 'https://images.pexels.com/photos/8134804/pexels-photo-8134804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Wooden Staircase Glass Railing',
          description: 'Premium wood and glass railing combination',
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
          src: 'https://images.pexels.com/photos/18803873/pexels-photo-18803873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Open Riser Staircase Glass Railing',
          description: 'Shopping mall open riser staircase with glass railings',
        },
        {
          src: 'https://images.pexels.com/photos/5997977/pexels-photo-5997977.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Modern Apartment Glass Railing',
          description: 'Staircase with glass wall in contemporary apartment',
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
          src: 'https://images.pexels.com/photos/6444248/pexels-photo-6444248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Commercial Glass Railing System',
          description: 'Multi-story commercial building glass railing',
        },
        {
          src: 'https://images.pexels.com/photos/10135334/pexels-photo-10135334.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Premium Frameless Commercial Railing',
          description: 'High-load frameless glass railing for commercial spaces',
        },
      ],
    },
  ],
};

export default function GlassRailingsPage() {
  return <ServicePageTemplate service={service} />;
}
