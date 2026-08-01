'use client'

import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/primitives'
import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/site'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = testimonials.length

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total],
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 7000)
    return () => clearInterval(id)
  }, [go, paused])

  const active = testimonials[index]

  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_65%)] blur-3xl"
      />

      <Reveal className="relative">
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title="What artists and labels say"
        />
      </Reveal>

      <Reveal
        delay={120}
        className="relative mx-auto mt-14 max-w-4xl"
      >
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-14"
        >
          <Quote
            className="size-9 text-gold/40"
            aria-hidden="true"
            strokeWidth={1.5}
          />
          <div
            aria-live="polite"
            className="mt-6 min-h-40 sm:min-h-36"
          >
            <blockquote
              key={index}
              className="animate-in fade-in slide-in-from-bottom-3 text-xl leading-snug font-medium tracking-tight text-balance duration-700 sm:text-3xl"
            >
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <footer className="mt-7 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-full border border-gold/30 bg-gold-soft font-mono text-sm text-gold"
              >
                {active.name
                  .split(' ')
                  .map((w) => w[0])
                  .join('')
                  .slice(0, 2)}
              </span>
              <div className="flex flex-col">
                <cite className="text-sm font-medium not-italic">
                  {active.name}
                </cite>
                <span className="text-xs text-muted-foreground">
                  {active.role}
                </span>
              </div>
            </footer>
          </div>

          <div className="mt-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-current={i === index}
                  className={cn(
                    'h-1 rounded-full transition-all duration-500',
                    i === index
                      ? 'w-8 bg-gold'
                      : 'w-4 bg-white/20 hover:bg-white/40',
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <CarouselButton label="Previous testimonial" onClick={() => go(-1)}>
                <ArrowLeft className="size-4" aria-hidden="true" />
              </CarouselButton>
              <CarouselButton label="Next testimonial" onClick={() => go(1)}>
                <ArrowRight className="size-4" aria-hidden="true" />
              </CarouselButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function CarouselButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
    >
      <span className="sr-only">{label}</span>
      {children}
    </button>
  )
}
