import Link from 'next/link'
import { cn } from '@/lib/utils'

/* ---------------------------------- CTA ---------------------------------- */

const ctaBase =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-medium tracking-tight transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0'

const ctaVariants = {
  gold: 'bg-gold text-[oklch(0.14_0_0)] hover:brightness-110 hover:shadow-[0_10px_40px_-12px_var(--gold)]',
  outline:
    'border border-border text-foreground hover:border-gold/50 hover:bg-gold-soft hover:text-gold',
  ghost: 'text-muted-foreground hover:text-foreground',
} as const

const ctaSizes = {
  sm: 'h-9 px-4',
  md: 'h-11 px-6',
  lg: 'h-13 px-8 text-[0.95rem]',
} as const

type CtaProps = {
  variant?: keyof typeof ctaVariants
  size?: keyof typeof ctaSizes
  className?: string
  children: React.ReactNode
}

export function CtaLink({
  href,
  variant = 'gold',
  size = 'md',
  className,
  children,
  external,
  ...rest
}: CtaProps & {
  href: string
  external?: boolean
} & Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>) {
  const classes = cn(ctaBase, ctaVariants[variant], ctaSizes[size], className)
  const inner = (
    <>
      {variant === 'gold' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)] transition-transform duration-700 group-hover:translate-x-[220%]"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  )
}

export function CtaButton({
  variant = 'gold',
  size = 'md',
  className,
  children,
  ...rest
}: CtaProps & Omit<React.ComponentPropsWithoutRef<'button'>, 'className' | 'children'>) {
  return (
    <button
      className={cn(ctaBase, ctaVariants[variant], ctaSizes[size], className)}
      {...rest}
    >
      {variant === 'gold' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)] transition-transform duration-700 group-hover:translate-x-[220%]"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  )
}

/* -------------------------------- Sections ------------------------------- */

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-gold/50" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl leading-[1.08] font-semibold text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function Section({
  children,
  className,
  id,
  as: Tag = 'section',
}: {
  children: React.ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div'
}) {
  return (
    <Tag
      id={id}
      className={cn('scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28', className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </Tag>
  )
}

/* -------------------------------- Surfaces ------------------------------- */

export function GlassCard({
  children,
  className,
  interactive = true,
}: {
  children: React.ReactNode
  className?: string
  interactive?: boolean
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl',
        interactive &&
          'transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.055] hover:shadow-[0_24px_70px_-30px_rgba(212,175,55,0.45)]',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]"
      />
      {children}
    </div>
  )
}
