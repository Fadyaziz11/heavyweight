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

  // 1. التأكد من صحة البيانات (Validation)
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
    // 2. إرسال الإيميل الحقيقي باستخدام الدومين الموثق
    await resend.emails.send({
      from: "Heavy Weight <info@send.heavyweightmena.com>", // العنوان الرسمي للإرسال
      to: "info@heavyweightmena.com",                  // إيميلك اللي هيستلم الطلب
      reply_to: email,                                 // لما تدوس Reply هيرد على إيميل العميل فوراً
      subject: `New Brief: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #D4AF37;">New Inquiry Received</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p style="margin-top: 20px;"><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</div>
          <br />
          <small style="color: #888;">Sent from Heavy Weight Official Website</small>
        </div>
      `,
    });

    return {
      status: 'success',
      message: `Thanks ${name.split(' ')[0]} — your brief is in. We reply within one business day.`,
    }

  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.',
    }
  }
}
