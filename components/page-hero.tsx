import { AnimatedBackdrop } from '@/components/hero'
import { Eyebrow } from '@/components/ui/primitives'
import { Reveal } from '@/components/reveal'

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-36 pb-16 sm:px-8 lg:pt-44 lg:pb-24">
      <AnimatedBackdrop />
      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6.5vw,5rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-balance">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={240}>{children}</Reveal> : null}
      </div>
    </section>
  )
}
