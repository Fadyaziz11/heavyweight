"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  // 1. التحقق من صحة البيانات
  const errors: ContactState['errors'] = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!emailPattern.test(email)) errors.email = 'Please enter a valid email.'
  if (message.length < 12) errors.message = 'Tell us a little more about your project.'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please check the highlighted fields.',
      errors,
    }
  }

  try {
    // 2. إرسال الإيميل
    await resend.emails.send({
      // العنوان الرسمي (بعد ما اتفعل الدومين الأساسي)
      from: "Heavy Weight <info@heavyweightmena.com>", 
      
      // إيميلك اللي هيستلم الرسالة (Zoho)
      to: "info@heavyweightmena.com", 
      
      // لما تدوس "رد" في إيميلك، هيروح أوتوماتيك لإيميل العميل
      reply_to: email, 
      
      subject: `New Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 40px; color: #111; background-color: #fafafa;">
          <div style="max-width: 600px; margin: 0 a
