import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact-section'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to Heavy Weight about your next release. Email, WhatsApp or Instagram — we reply within one business day from Cairo, Egypt.',
  alternates: { canonical: '/contact' },
}

const faqs = [
  {
    q: 'What size of artist do you work with?',
    a: 'From debut independent releases to established regional acts and label catalogues. What matters is that the record is finished and the goal is realistic.',
  },
  {
    q: 'How quickly can a campaign start?',
    a: 'Strategy is delivered within three days of the brief. Media, creators and PR can be live within a week — though four to six weeks before release date is ideal.',
  },
  {
    q: 'Do you guarantee playlist placements?',
    a: 'No agency honestly can. We guarantee the pitch, the relationships and the data work — and we never buy fake streams or bot placements.',
  },
  {
    q: 'Do you sign artists to the label?',
    a: 'Yes. Our label arm signs a small number of acts each year with transparent splits and artist-friendly terms. Send music through the form and mention “label”.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Send the record.
            <br />
            <span className="text-gold-gradient">We’ll send the plan.</span>
          </>
        }
        description="One business day turnaround on every brief. Reach us however you prefer — email, WhatsApp or Instagram."
      />

      <ContactSection eyebrow="Start here" heading="Tell us what you’re releasing." />

      <Section className="border-t border-white/8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Questions we get every week"
          />
        </Reveal>
        <ul className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal as="li" key={faq.q} delay={(i % 2) * 100}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-7 backdrop-blur-xl transition-colors duration-500 hover:border-gold/25">
                <h3 className="text-base font-semibold tracking-tight text-balance">
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  )
}
