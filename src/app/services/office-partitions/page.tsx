import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Glass Partitions | Toronto Premium Glass',
  description: 'Premium floor-to-ceiling office glass partitions in Toronto. Create open, professional workspaces with our custom glass wall systems.',
};

const service = {
  title: 'Office Partitions',
  subtitle: 'Workspace Transformation',
  heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85',
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
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
          title: 'Frameless Office Partition',
          description: 'Open-plan office with glass dividers',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
          title: 'Executive Office Glass Wall',
          description: 'Private executive office partition',
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
          src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
          title: 'Framed Partition System',
          description: 'Aluminum frame grid partition wall',
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
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=801&q=80',
          title: 'Glass Meeting Room',
          description: 'Complete glass boardroom enclosure',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=801&q=80',
          title: 'Conference Room Glass',
          description: 'Premium conference room glass walls',
        },
      ],
    },
  ],
};

export default function OfficePartitionsPage() {
  return <ServicePageTemplate service={service} />;
}
