import {
  Globe2,
  ListMusic,
  Megaphone,
  Music2,
  Newspaper,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import { TikTok, Youtube } from '@/components/brand-icons'
import { cn } from '@/lib/utils'

const icons = {
  Megaphone,
  Target,
  Globe2,
  Newspaper,
  ListMusic,
  Users,
  Youtube,
  Music2,
  TikTok,
} as const

export function ServiceIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = icons[name as keyof typeof icons] ?? Sparkles
  return <Icon className={cn('size-5', className)} aria-hidden="true" />
}

export function IconBadge({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex size-12 items-center justify-center rounded-xl border border-gold/20 bg-gold-soft text-gold transition-all duration-500 group-hover:border-gold/50 group-hover:bg-gold group-hover:text-[oklch(0.14_0_0)]',
        className,
      )}
    >
      <ServiceIcon name={name} />
    </span>
  )
}
