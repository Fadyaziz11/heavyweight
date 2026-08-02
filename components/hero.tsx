import { ArrowRight, Play } from 'lucide-react'
import { CtaLink } from '@/components/ui/primitives'
import { Reveal } from '@/components/reveal'

export function AnimatedBackdrop({
  className = '',
}: {
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Gold aurora blooms */}
<div className="animate-drift absolute -top-1/3 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,255,70,0.22),transparent_65%)] blur-3xl" />      <div className="animate-float absolute top-1/4 -left-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14),transparent_65%)] blur-3xl" />
      <div className="animate-drift absolute -right-32 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07),transparent_65%)] blur-3xl [animation-duration:28s]" />

      {/* Fine grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_50%_35%,black,transparent_72%)]" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.16] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.5%22/></svg>')]" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

function Equalizer() {
  const bars = [0.4, 0.75, 0.55, 1, 0.65, 0.85, 0.5, 0.7, 0.35, 0.9, 0.6, 0.8]
  return (
    <div
      aria-hidden="true"
      className="flex h-16 items-end gap-1.5 opacity-70"
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-gold/20 to-gold"
          style={{
            height: `${h * 100}%`,
            transformOrigin: 'bottom',
            animation: `hw-eq ${0.9 + (i % 5) * 0.24}s ease-in-out ${i * 0.08}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden px-6 pt-28 pb-20 sm:px-8 lg:min-h-svh lg:pt-32">
      <AnimatedBackdrop />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold-soft px-4 py-1.5 font-mono text-[0.68rem] tracking-[0.2em] text-gold uppercase">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
              </span>
              Music marketing agency · Cairo, Egypt
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 text-[clamp(2.75rem,8.5vw,7rem)] leading-[0.94] font-semibold tracking-[-0.04em] text-balance">
              We make records
              <br />
              <span className="text-gold-gradient">impossible</span> to ignore.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Heavy Weight is a full-service music marketing agency and record
              label. We build data-driven campaigns across streaming, social and
              press that turn releases into cultural moments.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaLink href="/contact" size="lg">
                Start a campaign
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </CtaLink>
              <CtaLink href="/portfolio" variant="outline" size="lg">
                <Play className="fill-current" />
                View our work
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-16 flex flex-wrap items-end gap-x-12 gap-y-8">
              <div className="hidden sm:block">
                <Equalizer />
              </div>
              {[
                ['480M+', 'Streams generated'],
                ['1,200+', 'Campaigns delivered'],
                ['38', 'Countries reached'],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col gap-1">
                  <dt className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {value}
                  </dt>
                  <dd className="font-mono text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
