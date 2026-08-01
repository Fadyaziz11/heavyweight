import { cn } from '@/lib/utils'

/** Monogram + wordmark lockup for Heavy Weight. */
export function Wordmark({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <span
        aria-hidden="true"
        className="relative flex size-9 items-center justify-center rounded-[10px] border border-gold/35 bg-gold-soft transition-colors duration-300 group-hover:border-gold/70"
      >
        <span className="flex items-end gap-[2px]" aria-hidden="true">
          {[0.5, 0.9, 0.65, 1].map((h, i) => (
            <span
              key={i}
              className="w-[2px] rounded-full bg-gold"
              style={{
                height: `${h * 16}px`,
                animation: `hw-eq ${1.1 + i * 0.22}s ease-in-out ${i * 0.12}s infinite`,
              }}
            />
          ))}
        </span>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[0.95rem] font-semibold tracking-[0.18em] uppercase">
            Heavy Weight
          </span>
          <span className="mt-1 font-mono text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
            Cairo · Egypt
          </span>
        </span>
      )}
    </span>
  )
}
