import type { SVGProps } from 'react'

type BrandIconProps = SVGProps<SVGSVGElement>

/**
 * lucide-react v1 removed all brand logos from the core icon set, so the
 * social/platform marks the site needs are defined here as small, consistent
 * components. They accept the same props as lucide icons (className, size via
 * width/height, currentColor stroke/fill) so they drop into the same slots.
 */

const base = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  'aria-hidden': true,
  focusable: false,
} as const

export function Instagram({ className, ...props }: BrandIconProps) {
  return (
    <svg
      {...base}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Youtube({ className, ...props }: BrandIconProps) {
  return (
    <svg
      {...base}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9C22 15.1 22 12 22 12s0-3.1-.4-4.8Z" />
      <path d="m10 15.2 5-3.2-5-3.2Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTok({ className, ...props }: BrandIconProps) {
  return (
    <svg {...base} fill="currentColor" className={className} {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.84-2.48V9.8a5.68 5.68 0 1 0 4.93 5.63V8.87a7.35 7.35 0 0 0 4.3 1.38V7.16a4.29 4.29 0 0 1-3.24-1.34Z" />
    </svg>
  )
}

export function Spotify({ className, ...props }: BrandIconProps) {
  return (
    <svg {...base} fill="currentColor" className={className} {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.42a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.56-1.15a.75.75 0 1 1-.33-1.46c4.55-1.04 8.47-.59 11.63 1.34a.75.75 0 0 1 .29 1.02Zm1.22-2.94a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 1 1-.55-1.8c4.36-1.32 9.78-.67 13.49 1.6a.94.94 0 0 1 .32 1.29Zm.11-3.06c-3.87-2.3-10.26-2.51-13.96-1.39a1.12 1.12 0 1 1-.65-2.15c4.24-1.29 11.3-1.04 15.75 1.6a1.13 1.13 0 0 1-1.15 1.94Z" />
    </svg>
  )
}
