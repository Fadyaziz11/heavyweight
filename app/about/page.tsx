import type { Metadata } from 'next'
import Image from 'next/image'
import { BarChart3, Handshake, ShieldCheck, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact-section'
import { ClientMarquee } from '@/components/client-marquee'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/ui/primitives'
import { stats } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Heavy Weight is a music marketing agency and record label based in Cairo, Egypt — built by marketers, A&Rs and creators who grew up in the region’s music scene.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    icon: BarChart3,
    title: 'Data over vibes',
    body: 'Every decision traces back to a number: save rate, skip rate, cost per listener, watch time. If it does not move, we cut it.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero fake growth',
    body: 'No bots, no purchased streams, no engagement farms. Only campaigns that survive platform scrutiny and build real fanbases.',
  },
  {
    icon: Handshake,
    title: 'Artist-first terms',
    body: 'Transparent splits, clear reporting and contracts you can actually read. Your masters stay yours unless you choose otherwise.',
  },
  {
    icon: Sparkles,
    title: 'Regional fluency',
    body: 'We are from here. We know which sounds travel from Cairo to the Gulf, and which creators actually move a track.',
  },
]

const timeline = [
  {
    year: '2019',
    title: 'It all started with rap.',
    body: 'Two friends, countless playlists, and a group of friends making music. We started by helping independent rappers promote their releases—simply because we believed in them.',
  },
  {
    year: '2020',
    title: 'Learning by doing',
    body: 'Every release became a lesson. We explored music marketing, social media, paid advertising, and audience growth, building our experience one campaign at a time.',
  },
  {
    year: '2021',
    title: 'Heavy Weight was born',
    body: 'What started as helping friends officially became Heavy Weight—a music marketing company built by music fans, for artists.',
  },
  {
    year: 'Today',
    title: 'Growing with every release',
    body: 'From independent artists to labels, distributors, and entertainment brands, we continue helping music reach the right audience through strategy, creativity, and genuine passion.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Built in Cairo.
            <br />
            <span className="text-gold-gradient">Built for artists.</span>
          </>
        }
        description="Heavy Weight started because talented artists in Egypt kept losing to worse records with better marketing. We exist to close that gap."
      />

      <Section className="border-t border-white/8 pt-0 lg:pt-0">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/8">
          <Image
            src="/about-studio.png"
            alt="The Heavy Weight team working late in their Cairo studio office"
            width={1600}
            height={900}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="h-[38vh] w-full object-cover sm:h-[52vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
            <p className="max-w-xl text-lg leading-snug font-medium text-balance sm:text-2xl">
              Eighteen people. One floor in New Cairo. Every discipline a release
              needs, sitting in the same room.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title="We were fans before we were marketers."
            />
            <div className="mt-7 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground text-pretty">
              <p>
                Heavy Weight started with two friends who simply loved rap.
              </p>

              <p>
                We weren't a company, marketers, or industry professionals—we were just
                fans. Most of our closest friends were making music, so naturally, we
                started helping them share their songs and reach more people. No
                contracts, no plans—just a group of friends supporting each other.
              </p>

              <p>
                As we saw the impact of what we were doing, curiosity turned into
                passion. We spent the next year learning everything we could about
                music marketing, experimenting, learning, and growing with every
                release.
              </p>

              <p>
                That's when Heavy Weight was born.
              </p>

              <p>
                Even today, that feeling hasn't changed. Every artist we work with
                becomes part of our journey, not just another client. We celebrate
                the wins together, face the challenges together, and grow together.
              </p>

              <p>
                Heavy Weight isn't just a company—it's a family built around music.
              </p>
            </div>
          </Reveal>

          <ol className="flex flex-col">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.year} delay={i * 90}>
                <div className="group relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="mt-1 size-2.5 shrink-0 rounded-full bg-gold shadow-[0_0_0_4px_var(--gold-soft)]" />
                    {i < timeline.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-2 w-px flex-1 bg-gradient-to-b from-gold/40 to-transparent"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-2 pb-2">
                    <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-t border-white/8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="Four rules we don’t break"
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal as="li" key={value.title} delay={(i % 2) * 100}>
              <div className="group flex h-full gap-5 rounded-2xl border border-white/8 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/30">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold-soft text-gold transition-all duration-500 group-hover:border-gold/50 group-hover:bg-gold group-hover:text-[oklch(0.14_0_0)]">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {value.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-white/8 pt-12 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="flex flex-col gap-1">
              <dt className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
                <span className="text-gold-gradient">{stat.value}</span>
              </dt>
              <dd className="font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <ClientMarquee />

      <ContactSection eyebrow="Work with us" heading="Let’s put your record to work." />
    </>
  )
}
