"use server";
import { Resend } from "resend";

// ده المحرك اللي بيشغل الإرسال وبيستخدم المفتاح السري اللي هنحطه في Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: any) {
  try {
    await resend.emails.send({
      from: "Heavy Weight Web <onboarding@resend.dev>", // سيب دي "onboarding@resend.dev" لحد ما نفعل الدومين في Resend
      to: "info@heavyweightmena.com",                  // إيميل الشركة اللي هيستلم الطلبات
      subject: `New Inquiry: ${formData.name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2>New Message from Heavy Weight Website</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Artist/Band Name:</strong> ${formData.artistName || "Not provided"}</p>
          <p><strong>Estimated Budget:</strong> ${formData.budget}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; pading: 15px; border-radius: 5px;">${formData.message}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { error: "Failed to send email" };
  }
}
