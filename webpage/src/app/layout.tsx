import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/common/navbar'
import { Footer } from '@/components/common/footer'
import { DarkModeProvider } from '@/hooks/useDarkMode'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Yazılım Eğitimleri',
    template: '%s | Yazılım Eğitimleri'
  },
  description: 'Profesyonel yazılım eğitimleri ile kariyerinizi geliştirin',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  themeColor: '#10B981',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Yazılım Eğitimleri',
    locale: 'tr_TR',
    images: [{
      url: '/og-default.jpg',
      width: 1200,
      height: 630,
      alt: 'Yazılım Eğitimleri Platform Görseli',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
    images: {
      url: '/twitter-card.jpg',
      alt: 'Yazılım Eğitimleri Twitter Paylaşım Görseli',
    },
  },
  other: {
    'facebook-domain-verification': 'your-facebook-domain-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased  dark:bg-dark-bg text-secondary-900 dark:text-dark-text`}>
        <DarkModeProvider>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  )
} 