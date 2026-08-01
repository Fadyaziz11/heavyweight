"use client"

import Image from "next/image"

export function AnimatedLogo() {
  return (
    <div className="animated-logo relative h-10 w-10">
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
