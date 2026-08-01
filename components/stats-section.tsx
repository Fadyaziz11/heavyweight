import { Section, SectionHeading } from '@/components/ui/primitives'
import { Reveal } from '@/components/reveal'
import { stats } from '@/lib/site'

export function StatsSection() {
  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_70%)]"
      />
      <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="By the numbers"
            title={
              <>
                Results we can <span className="text-gold-gradient">prove</span>
                , not promise.
              </>
            }
            description="Every campaign is measured against streams, saves, watch time and revenue — reported weekly, in plain language."
          />
        </Reveal>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04]">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className="group relative bg-background/60 p-8 backdrop-blur-xl transition-colors duration-500 hover:bg-gold-soft sm:p-10"
            >
              <dt className="text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
                <span className="text-gold-gradient">{stat.value}</span>
              </dt>
              <dd className="mt-3 font-mono text-[0.66rem] tracking-[0.18em] text-muted-foreground uppercase">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  )
}
