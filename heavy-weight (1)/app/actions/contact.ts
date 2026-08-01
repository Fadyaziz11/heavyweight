'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'message', string>>
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function submitInquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const budget = String(formData.get('budget') ?? '').trim()

  const errors: ContactState['errors'] = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!emailPattern.test(email)) errors.email = 'Please enter a valid email.'
  if (message.length < 12)
    errors.message = 'Tell us a little more about your project.'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please check the highlighted fields.',
      errors,
    }
  }

  // Inquiry payload is ready to be forwarded to email, CRM or a database.
  console.log('[v0] New Heavy Weight inquiry:', {
    name,
    email,
    service,
    budget,
    message,
  })

  return {
    status: 'success',
    message: `Thanks ${name.split(' ')[0]} — your brief is in. We reply within one business day.`,
  }
}
