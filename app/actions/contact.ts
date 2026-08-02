"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  errors?: Partial<Record<'name' | 'email' | 'message', string>>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitInquiry(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const service = String(formData.get('service') ?? '').trim();
  const budget = String(formData.get('budget') ?? '').trim();

  const errors: ContactState['errors'] = {};
  if (name.length < 2) errors.name = 'Please enter your name.';
  if (!emailPattern.test(email)) errors.email = 'Please enter a valid email.';
  if (message.length < 12) errors.message = 'Tell us more about your project.';

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please check the highlighted fields.',
      errors,
    };
  }

  try {
    await resend.emails.send({
      from: "Heavy Weight <info@heavyweightmena.com>",
      to: "info@heavyweightmena.com",
      reply_to: email,
      subject: `New Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    return {
      status: 'success',
      message: `Thanks ${name.split(' ')[0]}, your brief is in!`,
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.',
    };
  }
}
