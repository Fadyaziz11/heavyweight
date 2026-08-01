import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import {
  CtaLink,
  GlassCard,
  Section,
  SectionHeading,
} from '@/components/ui/primitives'
import { IconBadge } from '@/components/service-icon'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/site'

export function ServicesPreview() {
  return (
    <Section id="services">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Eight disciplines.
                <br />
                One coordinated rollout.
              </>
            }
            description="We run the entire release machine in-house, so strategy, media, press and distribution never contradict each other."
          />
        </Reveal>
        <Reveal delay={120}>
          <CtaLink href="/services" variant="outline">
            All services
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </CtaLink>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal as="li" key={service.slug} delay={(i % 4) * 90}>
            <GlassCard className="group h-full">
              <Link
                href={`/services#${service.slug}`}
                className="flex h-full flex-col gap-5 p-7 outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <div className="flex items-start justify-between">
                  <IconBadge name={service.icon} />
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold group-hover:opacity-100" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {service.summary}
                  </p>
                </div>
              </Link>
            </GlassCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
