/**
 * Validierungsregeln für das Gesprächsformular.
 * Dieselbe Datei wird clientseitig (sofortige Rückmeldung) und serverseitig
 * (in der Server Action) verwendet, damit die Regeln nicht auseinanderlaufen.
 */

export type FieldName = 'name' | 'email' | 'message' | 'consent';

export interface FormValues {
  name: string;
  email: string;
  message: string;
  consent: boolean;
}

export type FieldErrors = Partial<Record<FieldName, string>>;

export interface FormState {
  status: 'idle' | 'error' | 'success';
  errors: FieldErrors;
  values: { name: string; email: string; message: string };
  /** Fehler, der nicht zu einem einzelnen Feld gehört. */
  formError?: string;
}

export const initialFormState: FormState = {
  status: 'idle',
  errors: {},
  values: { name: '', email: '', message: '' },
};

/** Bewusst einfach gehalten. Genauer geht es nur mit einer Zustellprüfung. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const messages = {
  name: 'Bitte trag deinen Namen ein.',
  email: 'Diese E-Mail-Adresse stimmt so nicht. Bitte prüf sie noch einmal.',
  message: 'Schreib bitte zwei, drei Sätze, damit ich weiss, worum es geht.',
  consent: 'Ohne dieses Häkchen kann ich deine Anfrage nicht bearbeiten.',
  transport: 'Das hat gerade nicht geklappt. Versuch es bitte noch einmal.',
} as const;

export function validateField(name: FieldName, values: FormValues): string | undefined {
  switch (name) {
    case 'name':
      return values.name.trim().length < 2 ? messages.name : undefined;
    case 'email':
      return EMAIL_PATTERN.test(values.email.trim()) ? undefined : messages.email;
    case 'message':
      return values.message.trim().length < 10 ? messages.message : undefined;
    case 'consent':
      return values.consent ? undefined : messages.consent;
  }
}

export function validateAll(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  for (const field of ['name', 'email', 'message', 'consent'] as const) {
    const error = validateField(field, values);
    if (error) {
      errors[field] = error;
    }
  }
  return errors;
}
