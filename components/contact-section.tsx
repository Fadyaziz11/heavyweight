import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { Instagram } from '@/components/brand-icons'
import { Section, SectionHeading } from '@/components/ui/primitives'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { instagramLink, site, whatsappLink } from '@/lib/site'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: site.phone,
    href: whatsappLink,
    external: true,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: 'heavy_weight_eg',
    href: instagramLink,
    external: true,
  },
]

export function ContactSection({
  heading = 'Let’s build your next campaign.',
  eyebrow = 'Contact',
}: {
  heading?: string
  eyebrow?: string
}) {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_65%)] blur-3xl"
      />
      <div className="relative grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow={eyebrow}
              title={heading}
              description="Send us the release, the date and the goal. We reply with a first-pass strategy within one business day — no pitch decks, no jargon."
            />
          </Reveal>

          <Reveal delay={120}>
            <ul className="flex flex-col divide-y divide-white/8 border-y border-white/8">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-5 py-5 transition-colors"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 group-hover:border-gold/50 group-hover:bg-gold-soft group-hover:text-gold">
                      {channel.external ? (
                        <img src="/icons/logo-icon.png" className="size-4 object-contain" aria-hidden="true" alt="" />
                      ) : (
                        <channel.icon className="size-4" aria-hidden="true" />
                      )}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-mono text-[0.64rem] tracking-[0.2em] text-muted-foreground uppercase">
                        {channel.label}
                      </span>
                      <span className="text-base font-medium transition-colors group-hover:text-gold">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold/70" aria-hidden="true" />
              <span>
                {site.location}
                <br />
                Sunday – Thursday, 10:00 – 19:00 EET
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
