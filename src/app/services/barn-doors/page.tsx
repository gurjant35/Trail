import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glass Barn Doors | Toronto Premium Glass',
  description: 'Custom glass barn doors in Toronto. Industrial-modern sliding barn doors with premium hardware for homes and offices.',
};

const service = {
  title: 'Barn Doors',
  subtitle: 'Industrial Meets Elegant',
  heroImage: 'https://images.pexels.com/photos/7027723/pexels-photo-7027723.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
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
          src: 'https://images.pexels.com/photos/7027723/pexels-photo-7027723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Interior Glass Barn Door',
          description: 'Glass panel room door on premium hardware',
        },
        {
          src: 'https://images.pexels.com/photos/5997977/pexels-photo-5997977.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Glass Partition Barn Door',
          description: 'Modern apartment glass panel sliding door',
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
          src: 'https://images.pexels.com/photos/3801167/pexels-photo-3801167.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Office Glass Barn Door',
          description: 'Modern office glass sliding partition door',
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
          src: 'https://images.pexels.com/photos/7027723/pexels-photo-7027723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Premium Barn Door Hardware',
          description: 'High-quality matte black track and hardware system',
        },
      ],
    },
  ],
};

export default function BarnDoorsPage() {
  return <ServicePageTemplate service={service} />;
}
