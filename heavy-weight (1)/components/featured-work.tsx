import { ArrowRight } from 'lucide-react'
import { CtaLink, Section, SectionHeading } from '@/components/ui/primitives'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/site'

export function FeaturedWork() {
  return (
    <Section id="work" className="relative border-y border-white/8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="Featured work"
            title={
              <>
                Artists we took
                <br />
                <span className="text-gold-gradient">from local to global.</span>
              </>
            }
            description="A selection of releases, tours and catalogues we have taken to market over the last two years."
          />
        </Reveal>
        <Reveal delay={120}>
          <CtaLink href="/portfolio" variant="outline">
            Full portfolio
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </CtaLink>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project, i) => (
          <Reveal key={project.slug} delay={i * 110}>
            <ProjectCard project={project} priority={i === 0} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
