'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { submitInquiry, type ContactState } from '@/app/actions/contact'
import { CtaButton } from '@/components/ui/primitives'
import { services } from '@/lib/site'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all duration-300 outline-none backdrop-blur-md focus:border-gold/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-gold/20'

const labelClass =
  'font-mono text-[0.66rem] tracking-[0.18em] text-muted-foreground uppercase'

export function ContactForm() {
  const [state, formAction] = useActionState(submitInquiry, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-gold/30 bg-gold-soft p-10 backdrop-blur-xl">
        <CheckCircle2 className="size-10 text-gold" aria-hidden="true" />
        <h3 className="text-2xl font-semibold tracking-tight">Brief received</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 rounded-2xl border border-white/8 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          placeholder="Nour Halim"
          error={state.errors?.name}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@label.com"
          error={state.errors?.email}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className={labelClass}>
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={cn(fieldClass, 'appearance-none', 'custom-caret')}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Full campaign">Full campaign</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className={labelClass}>
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={cn(fieldClass, 'appearance-none', 'custom-caret')}
          >
            <option value="">Select a range</option>
            <option value="under-2k">Under $2,000</option>
            <option value="2-5k">$2,000 – $5,000</option>
            <option value="5-15k">$5,000 – $15,000</option>
            <option value="15k-plus">$15,000+</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Tell us about the release
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Artist name, genre, release date and what success looks like for you."
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          className={cn(
            fieldClass,
            'resize-none',
            state.errors?.message && 'border-destructive/60',
          )}
        />
        {state.errors?.message ? (
          <p id="message-error" className="text-xs text-destructive">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      {state.status === 'error' && state.message ? (
        <p role="alert" className="text-xs text-destructive">
          {state.message}
        </p>
      ) : null}

      <SubmitButton />

      <p className="text-xs leading-relaxed text-muted-foreground">
        By submitting you agree to be contacted about your enquiry. We never
        share your details.
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  error?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(fieldClass, error && 'border-destructive/60')}
      />
      {error ? (
        <p id={`${name}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <CtaButton type="submit" size="lg" disabled={pending} className="mt-1 w-full">
      {pending ? (
        <>
          <Loader2 className="animate-spin" aria-hidden="true" />
          Sending brief…
        </>
      ) : (
        <>
          Send your brief
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </CtaButton>
  )
}
