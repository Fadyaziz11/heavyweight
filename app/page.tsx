import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { ClientMarquee } from '@/components/client-marquee'
import { StatsSection } from '@/components/stats-section'
import { FeaturedWork } from '@/components/featured-work'
import { ServicesPreview } from '@/components/services-preview'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Heavy Weight — Music Marketing Agency & Record Label in Egypt',
  description:
    'Heavy Weight is a premium music marketing agency and record label in Cairo, Egypt. Streaming campaigns, distribution, PR, playlist pitching, TikTok and YouTube growth.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const SHOW_TESTIMONIALS = false // toggle to true to re-enable testimonials

  return (
    <>
      <Hero />
      <ClientMarquee />
      <StatsSection />
      <FeaturedWork />
      <ServicesPreview />
      {SHOW_TESTIMONIALS && <TestimonialsSection />}
      <ContactSection />
    </>
  )
}
