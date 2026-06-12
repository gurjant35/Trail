import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glass Barn Doors | Toronto Premium Glass',
  description: 'Custom glass barn doors in Toronto. Industrial-modern sliding barn doors with premium hardware for homes and offices.',
};

const service = {
  title: 'Barn Doors',
  subtitle: 'Industrial Meets Elegant',
  heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85',
  description:
    'Glass barn doors bring a perfect blend of rustic-industrial character and modern openness to any space. Gliding effortlessly on exposed hardware, they\'re as functional as they are beautiful — creating visual separation without sacrificing natural light.',
  subcategories: [
    {
      id: 'interior',
      title: 'Interior Barn Doors',
      description:
        'Perfect for bedrooms, bathrooms, home offices, and living spaces. Our interior glass barn doors slide on premium matte black or stainless hardware for a refined industrial aesthetic.',
      benefits: [
        'No floor space needed',
        'Matte black or stainless hardware',
        'Clear, frosted, or tinted glass',
        'Single or double panel',
        'Soft-stop end buffers',
        'Various width & height options',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
          title: 'Interior Glass Barn Door',
          description: 'Frameless glass panel on black barn hardware',
        },
        {
          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=803&q=80',
          title: 'Frosted Barn Door',
          description: 'Privacy frosted glass barn door',
        },
      ],
    },
    {
      id: 'office',
      title: 'Office Barn Doors',
      description:
        'Create flexible, open-concept office spaces with glass barn doors that can be opened for collaboration or closed for privacy. Popular for home offices and commercial workspaces.',
      benefits: [
        'Acoustic glass options',
        'Commercial-grade hardware',
        'Large panel sizes available',
        'Branding & etching options',
        'Floor guide included',
        'Multiple lock options',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=801&q=80',
          title: 'Office Glass Barn Door',
          description: 'Commercial space glass divider',
        },
      ],
    },
    {
      id: 'custom',
      title: 'Custom Hardware',
      description:
        'Choose from our curated collection of premium barn door hardware or work with us to specify custom track systems. Multiple finishes and architectural styles available.',
      benefits: [
        'Matte black or brushed steel',
        'Flat or curved track profiles',
        'Soft-close mechanisms',
        'Floor anchor options',
        'Commercial load capacity',
        'Custom lengths available',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=801&q=80',
          title: 'Black Hardware Detail',
          description: 'Premium matte black track system',
        },
      ],
    },
  ],
};

export default function BarnDoorsPage() {
  return <ServicePageTemplate service={service} />;
}
