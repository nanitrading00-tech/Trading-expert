"use client";

import { submitMessage } from "@/app/actions";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { useLocale } from "@/lib/useLocale";
import styles from "./MessageForm.module.css";

export default function MessageForm() {
  const { status, error, onSubmit } = useFormSubmit(submitMessage);
  const form = useLocale().dict.form;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <label className={styles.field}>
        {form.name}
        <input type="text" name="name" placeholder={form.messageNamePlaceholder} autoComplete="given-name" />
      </label>
      <label className={styles.field}>
        {form.lastName}
        <input type="text" name="last_name" placeholder={form.lastNamePlaceholder} autoComplete="family-name" />
      </label>
      <label className={styles.field}>
        {form.yourEmail}*
        <input type="email" name="email" placeholder={form.yourEmailPlaceholder} autoComplete="email" required />
      </label>
      <label className={styles.field}>
        {form.message}*
        <textarea name="message" placeholder={form.messagePlaceholder} rows={3} required />
      </label>

      <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={status === "sending"}>
        {status === "sending" ? form.sending : form.submit}
      </button>

      {status === "success" && (
        <p role="status" className={styles.success}>
          {form.messageSuccess}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className={styles.error}>
          {error}
        </p>
      )}
    </form>
  );
}
