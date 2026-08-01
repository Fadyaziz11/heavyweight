import Link from 'next/link'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { Instagram } from '@/components/brand-icons'
import {
  instagramLink,
  navLinks,
  services,
  site,
  whatsappLink,
} from '@/lib/site'
import { Wordmark } from '@/components/wordmark'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[min(90rem,120%)] -translate-x-1/2 rounded-full bg-gold/8 blur-[120px]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Wordmark />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A music marketing agency and record label building campaigns that
              turn records into movements — from Cairo to the world.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
              >
                <Instagram className="size-4" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
              >
                <Mail className="size-4" aria-hidden="true" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <FooterColumn title="Navigate">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                WhatsApp {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold/70" aria-hidden="true" />
              {site.location}
            </li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            © {new Date().getFullYear()} Heavy Weight. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            Marketing · Distribution · Label
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="font-mono text-[0.7rem] tracking-[0.22em] text-foreground uppercase">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  )
}
