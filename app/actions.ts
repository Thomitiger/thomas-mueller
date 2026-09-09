'use server';

import { site } from '@/content/site';
import { initialFormState, messages, validateAll, type FormState } from '@/lib/form';

function readString(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

/** Muss auf der bei Resend verifizierten Domain liegen, keine echte Mailbox nötig. */
const RESEND_FROM = 'Website-Formular <formular@tmueller.ch>';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function sendViaResend(values: { name: string; email: string; message: string }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: site.gespraech.mailtoFallback.email,
      reply_to: values.email,
      subject: `Neue Anfrage von ${values.name}`,
      text: `Name: ${values.name}\nE-Mail: ${values.email}\n\n${values.message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(values.name)}</p><p><strong>E-Mail:</strong> ${escapeHtml(values.email)}</p><p>${escapeHtml(values.message).replace(/\n/g, '<br>')}</p>`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend antwortete mit ${response.status}`);
  }
}

/**
 * Server Action des Gesprächsformulars.
 *
 * Ohne die Umgebungsvariable RESEND_API_KEY wird ausschliesslich validiert —
 * es wird nichts versendet. Siehe TODO.md.
 */
export async function requestConversation(
  _previous: FormState,
  data: FormData,
): Promise<FormState> {
  const values = {
    name: readString(data, 'name'),
    email: readString(data, 'email'),
    message: readString(data, 'message'),
    consent: data.get('consent') === 'on',
  };
  const carried = { name: values.name, email: values.email, message: values.message };

  const errors = validateAll(values);

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors, values: carried };
  }

  // Honeypot: von Menschen nie ausgefüllt, von einfachen Bots oft.
  if (readString(data, 'company') !== '') {
    return { status: 'success', errors: {}, values: initialFormState.values };
  }

  if (!process.env.RESEND_API_KEY) {
    return { status: 'success', errors: {}, values: initialFormState.values };
  }

  try {
    await sendViaResend(carried);
  } catch {
    return { status: 'error', errors: {}, values: carried, formError: messages.transport };
  }

  return { status: 'success', errors: {}, values: initialFormState.values };
}
