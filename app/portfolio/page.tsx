import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact-section'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/ui/primitives'
import { projects, stats } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Campaign case studies from Heavy Weight — album rollouts, single launches, sold-out tours, catalogue relaunches, TikTok trends and YouTube growth across Egypt and MENA.',
  alternates: { canonical: '/portfolio' },
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Campaigns with{' '}
            <span className="text-gold-gradient">receipts.</span>
          </>
        }
        description="Six recent projects, the strategy behind them and the numbers they produced. Every figure below comes from platform analytics, not estimates."
      >
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">
                <span className="text-gold-gradient">{stat.value}</span>
              </dt>
              <dd className="font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section className="border-t border-white/8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 110}>
              <ProjectCard
                project={project}
                priority={i < 3}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactSection
        eyebrow="Your turn"
        heading="Want a case study like these?"
      />
    </>
  )
}
