// app/contacto/action/sendEmail.ts
'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const nombre = formData.get('nombre') as string;
  const empresa = formData.get('empresa') as string;
  const celular = formData.get('celular') as string;
  const correo = formData.get('correo') as string;
  const titulo = formData.get('titulo') as string;
  const mensaje = formData.get('mensaje') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Thedoor agency <contacto@thedooragency.com>',
      to: ['thedoor.agencyperu@gmail.com'],
      subject: titulo || 'Nuevo mensaje de contacto',
      react: EmailTemplate({ nombre, empresa, celular, correo, titulo, mensaje }),
    });

    if (error) return { success: false, error: String(error) };

    return { success: true, data };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}
