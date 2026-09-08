'use client';

import Link from 'next/link';
import { useActionState, useId, useState, type FocusEvent } from 'react';
import { useFormStatus } from 'react-dom';
import { requestConversation } from '@/app/actions';
import { IconArrow } from '@/components/ui/Icons';
import { site } from '@/content/site';
import { initialFormState, validateField, type FieldErrors, type FieldName } from '@/lib/form';

const gespraech = site.gespraech;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex min-h-[44px] items-center gap-3 rounded bg-petrol px-6 py-3 text-on-petrol transition-colors duration-200 hover:bg-petrol/90 disabled:opacity-70"
    >
      <span className="u-label">
        {pending ? gespraech.submitPendingLabel : gespraech.submitLabel}
      </span>
      <IconArrow className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </button>
  );
}

/**
 * Eigenständige, helle Karte (immer bg-surface/ink), unabhängig davon, ob die
 * umgebende Sektion Ground, Mist oder Petrol ist — so bleiben alle internen
 * Kontrastwerte gültig, ohne pro Umgebung neu gerechnet werden zu müssen.
 */
export function GespraechForm() {
  const [state, formAction] = useActionState(requestConversation, initialFormState);
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const uid = useId();

  const fieldId = (name: string) => `${uid}-${name}`;
  const errorId = (name: string) => `${uid}-${name}-error`;
  const hintId = (name: string) => `${uid}-${name}-hint`;

  function checkOnBlur(name: FieldName, form: HTMLFormElement | null) {
    if (!form) return;
    const data = new FormData(form);
    const error = validateField(name, {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
      consent: data.get('consent') === 'on',
    });
    setClientErrors((previous) => ({ ...previous, [name]: error ?? '' }));
  }

  const errorFor = (name: FieldName): string | undefined => {
    const clientError = clientErrors[name];
    if (clientError !== undefined) {
      return clientError === '' ? undefined : clientError;
    }
    return state.errors[name];
  };

  if (state.status === 'success') {
    return (
      <div role="status" aria-live="polite" className="card bg-surface p-8">
        <h3 className="t-h3">{gespraech.successTitle}</h3>
        <p className="copy mt-4 text-ink-2">{gespraech.successBody}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="card bg-surface p-6 sm:p-8">
      {/* Honeypot. Für Menschen unsichtbar, für Screenreader als solcher benannt. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={fieldId('company')}>Firma (bitte leer lassen)</label>
        <input
          id={fieldId('company')}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-8">
        {gespraech.fields.map((field) => {
          const name = field.name as FieldName;
          const error = errorFor(name);
          const describedBy =
            [field.hint ? hintId(field.name) : null, error ? errorId(field.name) : null]
              .filter(Boolean)
              .join(' ') || undefined;

          const shared = {
            id: fieldId(field.name),
            name: field.name,
            required: field.required,
            'aria-invalid': error ? true : undefined,
            'aria-describedby': describedBy,
            onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              checkOnBlur(name, event.currentTarget.form),
            className:
              'mt-3 w-full rounded border border-line bg-ground px-4 py-3 text-ink outline-none transition-colors duration-200 focus:border-brass',
          };

          return (
            <div key={field.name}>
              <label htmlFor={fieldId(field.name)} className="u-label-sm block text-ink-2">
                {field.label}
              </label>

              {field.hint ? (
                <p id={hintId(field.name)} className="mt-2 text-[0.9375rem] text-ink-2">
                  {field.hint}
                </p>
              ) : null}

              {field.type === 'textarea' ? (
                <textarea {...shared} rows={5} minLength={10} defaultValue={state.values.message} />
              ) : (
                <input
                  {...shared}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  defaultValue={field.name === 'name' ? state.values.name : state.values.email}
                  className={`${shared.className} min-h-[44px]`}
                />
              )}

              {error ? (
                <p id={errorId(field.name)} className="mt-2 text-[0.9375rem] text-ink">
                  <span aria-hidden="true" className="mr-2 text-brass">
                    —
                  </span>
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}

        <div>
          <div className="flex items-start gap-4">
            <input
              id={fieldId('consent')}
              name="consent"
              type="checkbox"
              required
              aria-invalid={errorFor('consent') ? true : undefined}
              aria-describedby={errorFor('consent') ? errorId('consent') : undefined}
              onBlur={(event) => checkOnBlur('consent', event.currentTarget.form)}
              className="mt-1 h-5 w-5 shrink-0 rounded-[2px] border border-line accent-[rgb(var(--petrol-rgb))]"
            />
            <label htmlFor={fieldId('consent')} className="copy text-[0.9375rem] text-ink-2">
              {gespraech.consent.before}
              <Link href={gespraech.consent.linkHref} className="text-link text-ink">
                {gespraech.consent.linkLabel}
              </Link>
              {gespraech.consent.after}
            </label>
          </div>

          {errorFor('consent') ? (
            <p id={errorId('consent')} className="mt-2 text-[0.9375rem] text-ink">
              <span aria-hidden="true" className="mr-2 text-brass">
                —
              </span>
              {errorFor('consent')}
            </p>
          ) : null}
        </div>

        {state.formError ? (
          <p role="alert" className="text-[0.9375rem] text-ink">
            {state.formError}
          </p>
        ) : null}

        <SubmitButton />
      </div>
    </form>
  );
}
