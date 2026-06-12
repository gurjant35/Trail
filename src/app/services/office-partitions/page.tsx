import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Glass Partitions | Toronto Premium Glass',
  description: 'Premium floor-to-ceiling office glass partitions in Toronto. Create open, professional workspaces with our custom glass wall systems.',
};

const service = {
  title: 'Office Partitions',
  subtitle: 'Workspace Transformation',
  heroImage: 'https://images.pexels.com/photos/6794926/pexels-photo-6794926.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  description:
    'Modern workplaces demand transparency, flexibility, and design excellence. Our office glass partition systems create beautiful, functional spaces that inspire productivity while maintaining the open-concept feel that defines today\'s premium work environments.',
  subcategories: [
    {
      id: 'frameless',
      title: 'Frameless Partitions',
      description:
        'Ultra-modern frameless glass partition walls that create distinct zones while maintaining visual connectivity. Minimal hardware, maximum impact.',
      benefits: [
        'Minimal visual footprint',
        'Floor-to-ceiling heights',
        'No center posts needed',
        'Demountable & repositionable',
        'Acoustic laminated glass',
        'Film & frosting options',
      ],
      images: [
        {
          src: 'https://images.pexels.com/photos/3801167/pexels-photo-3801167.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Modern Office Glass Walls',
          description: 'Stylish open-plan office with full glass wall partitions',
        },
        {
          src: 'https://images.pexels.com/photos/6044814/pexels-photo-6044814.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Private Office Glass Partition',
          description: 'Executive seating area with glass wall partition',
        },
      ],
    },
    {
      id: 'framed',
      title: 'Framed Systems',
      description:
        'Aluminum-framed glass partition systems offer a more structured look while still delivering the transparency and light transmission of glass. Modular and easily reconfigured.',
      benefits: [
        'Modular & reconfigurable',
        'Integrated blinds available',
        'Multiple frame finishes',
        'Wiring integration',
        'Snap-fit panel system',
        'Fast installation',
      ],
      images: [
        {
          src: 'https://images.pexels.com/photos/6794927/pexels-photo-6794927.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Office Center Glass Walls',
          description: 'Modern office hall with aluminum-framed glass walls',
        },
        {
          src: 'https://images.pexels.com/photos/6794929/pexels-photo-6794929.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Office Corridor Glass Partition',
          description: 'Contemporary office corridor with glass partition system',
        },
      ],
    },
    {
      id: 'meeting-rooms',
      title: 'Meeting Room Enclosures',
      description:
        'Complete glass meeting room and boardroom enclosures with integrated sliding or hinged doors. Create professional private spaces within open-plan offices.',
      benefits: [
        'Complete room enclosures',
        'Integrated glass doors',
        'Acoustic performance',
        'Privacy frosting',
        'Custom branding',
        'Ceiling track system',
      ],
      images: [
        {
          src: 'https://images.pexels.com/photos/6794926/pexels-photo-6794926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Glass Conference Room',
          description: 'Modern corridor with glass-walled conference room',
        },
        {
          src: 'https://images.pexels.com/photos/3801167/pexels-photo-3801167.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
          title: 'Glass Meeting Room Partition',
          description: 'Premium glass boardroom with natural light',
        },
      ],
    },
  ],
};

export default function OfficePartitionsPage() {
  return <ServicePageTemplate service={service} />;
}
