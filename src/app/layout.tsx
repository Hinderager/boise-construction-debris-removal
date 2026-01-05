import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-construction-debris-removal.com'),
  title: {
    default: 'Boise Construction Debris Removal | Same-Day Service | Top Shelf',
    template: '%s | Boise Debris Removal',
  },
  description: 'Professional construction debris removal in Boise, Idaho. Job site cleanup, renovation debris, and recycling services. Same-day service available. Call (208) 943-5231 for a free quote.',
  keywords: [
    'construction debris removal Boise',
    'job site cleanup Idaho',
    'renovation debris removal',
    'construction waste disposal',
    'demolition debris hauling',
    'contractor cleanup services',
    'building material recycling',
    'drywall removal',
    'concrete debris removal',
    'Treasure Valley construction cleanup',
  ],
  authors: [{ name: 'Boise Construction Debris Removal' }],
  creator: 'Boise Construction Debris Removal',
  publisher: 'Boise Construction Debris Removal',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://boise-construction-debris-removal.com',
    siteName: 'Top Shelf Construction Debris Removal',
    title: 'Construction Debris Removal Boise | Fast Job Site Cleanup',
    description: 'Professional construction debris removal and job site cleanup in Boise and the Treasure Valley. Same-day service available. Licensed and insured.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Construction Debris Pros - Boise Idaho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Debris Removal Boise | Fast Job Site Cleanup',
    description: 'Professional construction debris removal and job site cleanup in Boise and the Treasure Valley. Same-day service available.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com',
  },
  verification: {
    google: 'verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
            
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '533217938868618');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=533217938868618&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <QuoteFormProvider>
          <Header />
          <VisibleBreadcrumb />
          <main>{children}</main>
          <Footer />
        </QuoteFormProvider>
        <StructuredData />
        <BreadcrumbSchema siteName="Top Shelf Construction Debris Removal" siteUrl="https://boise-construction-debris-removal.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </body>
    </html>
  )
}
