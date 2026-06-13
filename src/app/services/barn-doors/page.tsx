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
        { src: '/gallery/barn-door-frosted-glass.jpg', title: 'Frosted Glass Door Panel', description: 'Full-height frosted glass panel with satin chrome hardware for privacy and light diffusion' },
        { src: '/gallery/barn-door-frosted-sliding.jpg', title: 'Frosted Sliding Glass Partition', description: 'Double frosted glass panels as room divider between kitchen and hallway' },
        { src: '/gallery/barn-door-steel-frame-open.jpg', title: 'Steel-Frame Glass Barn Door – Open', description: 'Black steel-frame frosted glass barn door in open position' },
        { src: '/gallery/barn-door-steel-frame-closed.jpg', title: 'Steel-Frame Glass Barn Door – Closed', description: 'Floor-to-ceiling black steel-frame frosted glass door panel' },
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
      images: [],
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
      images: [],
    },
  ],
};

export default function BarnDoorsPage() {
  return <ServicePageTemplate service={service} />;
}
