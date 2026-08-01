import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'
import './globals.css'

const _geistSans = Geist({ subsets: ['latin'], display: 'swap' })
const _geistMono = Geist_Mono({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline} in Egypt`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: 'v0.app',
  keywords: [
    'music marketing Egypt',
    'record label Cairo',
    'music distribution MENA',
    'playlist pitching',
    'TikTok music marketing',
    'YouTube promotion',
    'PR campaigns music',
    'influencer marketing music',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline} in Egypt`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline} in Egypt`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:text-[oklch(0.14_0_0)]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: site.name,
              description: site.description,
              url: site.url,
              email: site.email,
              telephone: site.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Cairo',
                addressCountry: 'EG',
              },
              sameAs: [`https://instagram.com/${site.instagram}`],
            }),
          }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
