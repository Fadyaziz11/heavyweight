import Image from 'next/image'
import type { Project } from '@/lib/site'
import { cn } from '@/lib/utils'

export function ProjectCard({
  project,
  priority = false,
  className,
}: {
  project: Project
  priority?: boolean
  className?: string
}) {
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_30px_80px_-40px_rgba(212,175,55,0.5)]',
        className,
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} campaign for ${project.artist}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <span className="rounded-full border border-white/15 bg-background/60 px-3 py-1 font-mono text-[0.62rem] tracking-[0.18em] uppercase backdrop-blur-md">
            {project.category}
          </span>
          <span className="font-mono text-[0.62rem] tracking-[0.18em] text-gold uppercase">
            {project.year}
          </span>
        </div>
      </div>

      <div className="relative -mt-10 flex flex-1 flex-col gap-5 p-7">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[0.66rem] tracking-[0.2em] text-gold uppercase">
            {project.artist}
          </span>
          <h3 className="text-2xl leading-tight font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {project.description}
        </p>

        <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-white/8 pt-5">
          {project.results.map((result) => (
            <div key={result.label} className="flex flex-col gap-1">
              <dt className="text-xl font-semibold tracking-tight tabular-nums text-gold">
                {result.value}
              </dt>
              <dd className="font-mono text-[0.58rem] leading-tight tracking-[0.12em] text-muted-foreground uppercase">
                {result.label}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="flex flex-wrap gap-2">
          {project.services.map((service) => (
            <li
              key={service}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[0.68rem] text-muted-foreground transition-colors group-hover:border-gold/25 group-hover:text-foreground"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
