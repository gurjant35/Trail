import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Toronto Premium Glass | Custom Glass Solutions',
  description:
    'Premium custom glass installation in Toronto. Shower glass, glass railings, closet doors, vanity mirrors, barn doors & office partitions. Request your free estimate today.',
  keywords:
    'Toronto glass, custom shower glass, glass railings, closet doors, vanity mirrors, barn doors, office partitions, premium glass installation Toronto',
  openGraph: {
    title: 'Toronto Premium Glass | Custom Glass Solutions',
    description: 'Luxury custom glass installation serving Toronto and surrounding areas.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-charcoal-950 text-white antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid rgba(201,148,58,0.3)',
            },
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
