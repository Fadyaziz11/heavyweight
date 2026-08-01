import { clients } from '@/lib/site'

export function ClientMarquee() {
  const row = [...clients, ...clients]

  return (
    <section
      aria-label="Selected clients and partners"
      className="relative border-y border-white/8 bg-white/[0.015] py-10"
    >
      <p className="mb-8 text-center font-mono text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
        Trusted by labels, platforms & artists across MENA
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16 pr-16">
          {row.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="text-lg font-semibold tracking-[0.2em] whitespace-nowrap text-muted-foreground/70 transition-colors duration-300 select-none hover:text-gold sm:text-xl"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
