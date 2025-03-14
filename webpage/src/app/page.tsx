import { Hero1 } from "@/components/ui/hero-with-text-and-two-button"
import { FeaturedVideosSection } from "@/components/sections/featured-videos"
import { CallToActionSection } from "@/components/sections/cta"
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { ImageResponse } from '@vercel/og';

export const metadata: Metadata = {
  title: 'Yazılım Eğitimleri | Profesyonel Gelişim Platformu',
  description: 'Yazılım dünyasında kendinizi geliştirin. Profesyonel eğitmenlerden canlı dersler, kapsamlı video içerikleri ve pratik projelerle yazılım öğrenin.',
  keywords: 'yazılım eğitimi, programlama dersleri, web geliştirme, mobil uygulama geliştirme, online eğitim',
  openGraph: {
    title: 'Yazılım Eğitimleri | Profesyonel Gelişim Platformu',
    description: 'Yazılım dünyasında kendinizi geliştirin. Profesyonel eğitmenlerden canlı dersler, kapsamlı video içerikleri ve pratik projelerle yazılım öğrenin.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Yazılım Eğitimleri',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Yazılım Eğitimleri Ana Sayfa',
        type: 'image/jpeg',
      },
      {
        url: '/og-home-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Yazılım Eğitimleri Ana Sayfa Kare Görsel',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yazılım Eğitimleri | Profesyonel Gelişim Platformu',
    description: 'Yazılım dünyasında kendinizi geliştirin. Profesyonel eğitmenlerden canlı dersler ve pratik projeler.',
    creator: '@yourtwitterhandle',
    images: [
      {
        url: '/twitter-home.jpg',
        width: 1200,
        height: 675,
        alt: 'Yazılım Eğitimleri Twitter Paylaşım Görseli',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const PricingSection = dynamic(() => import('@/components/sections/pricing'), {
  loading: () => <div className="h-48 animate-pulse bg-gray-200" />
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero1 />
      <FeaturedVideosSection />
      <PricingSection />
      <CallToActionSection />
    </div>
  )
}

export async function GET(request: Request) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#fff',
        }}
      >
        <h1>Dinamik Oluşturulan Görsel</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
} 