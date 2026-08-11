"use client"

import Image from "next/image"
import { cn } from '@/lib/utils'

export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <div className={cn('animated-logo relative h-10 w-10', className)}>
      <Image
        src="/logo-icon.png"
        alt="Heavy Weight"
        fill
        className="object-contain"
      />

      <Image
        src="/logo-icon.png"
        alt=""
        fill
        className="glitch-layer object-contain"
      />
    </div>
  )
}
