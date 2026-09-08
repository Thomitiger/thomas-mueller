'use server';

import { isPlaceholder, site } from '@/content/site';
import { initialFormState, messages, validateAll, type FormState } from '@/lib/form';

function readString(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

/**
 * Server Action des Gesprächsformulars.
 *
 * Solange {{FORM_ENDPOINT}} in content/site.ts ein Platzhalter ist, wird
 * ausschliesslich validiert — es wird nichts versendet und nichts gespeichert.
 * Siehe TODO.md.
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

  const endpoint = site.gespraech.formEndpoint;

  if (isPlaceholder(endpoint)) {
    return { status: 'success', errors: {}, values: initialFormState.values };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(carried),
    });

    if (!response.ok) {
      return { status: 'error', errors: {}, values: carried, formError: messages.transport };
    }
  } catch {
    return { status: 'error', errors: {}, values: carried, formError: messages.transport };
  }

  return { status: 'success', errors: {}, values: initialFormState.values };
}
