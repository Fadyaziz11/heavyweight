import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact-section'
import { IconBadge } from '@/components/service-icon'
import { Reveal } from '@/components/reveal'
import {
  CtaLink,
  GlassCard,
  Section,
  SectionHeading,
} from '@/components/ui/primitives'
import { process, services } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Music marketing, digital advertising, distribution, PR campaigns, playlist pitching, influencer marketing, YouTube promotion and TikTok marketing from Heavy Weight in Cairo, Egypt.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything a release needs,{' '}
            <span className="text-gold-gradient">under one roof.</span>
          </>
        }
        description="Eight specialist disciplines run by one team, so your strategy, media buying, press and distribution all point in the same direction."
      >
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {services.map((service) => (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-gold/40 hover:bg-gold-soft hover:text-gold"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <Section className="border-t border-white/8">
        <ul className="flex flex-col gap-6">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={(i % 3) * 80}>
              <GlassCard
                className="group scroll-mt-28"
                interactive
              >
                <div
                  id={service.slug}
                  className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-12"
                >
                  <div className="flex items-center gap-5">
                    <IconBadge name={service.icon} />
                    <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase lg:hidden">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                      {service.detail}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3 lg:w-72">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-white/8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="A four-step campaign engine"
            description="No mystery, no black box. You always know what stage we are in and what happens next."
          />
        </Reveal>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 100}>
              <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/30">
                <span className="font-mono text-4xl font-semibold text-gold/30 transition-colors duration-500 group-hover:text-gold">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={200} className="mt-12 flex justify-center">
          <CtaLink href="/contact" size="lg">
            Book a strategy call
          </CtaLink>
        </Reveal>
      </Section>

      <ContactSection eyebrow="Get started" heading="Tell us about your release." />
    </>
  )
}
