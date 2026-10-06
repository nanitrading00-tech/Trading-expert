"use client";

import { useId, type ReactNode } from "react";
import { LuSend } from "react-icons/lu";
import { submitEnquiry } from "@/app/actions";
import { investmentRanges, tradingSegments } from "@/lib/site";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { useLocale } from "@/lib/useLocale";
import styles from "./EnquiryForm.module.css";

type Props = {
  className?: string;
  title?: string;
  subject?: string;
  packageName?: string;
};

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
        <span className={styles.required}>*</span>
      </span>
      {children}
    </label>
  );
}

export default function EnquiryForm({ className = "", title, subject, packageName }: Props) {
  const { status, error, onSubmit } = useFormSubmit(submitEnquiry);
  const { dict } = useLocale();
  const form = dict.form;
  const titleId = useId();

  return (
    <div className={`${styles.card} glass ${className}`}>
      <h2 id={titleId} className={styles.title}>
        {title ?? form.title}
      </h2>
      {packageName ? (
        <p className={styles.subtitle}>
          {form.packageLabel}: <strong>{packageName}</strong>
        </p>
      ) : (
        <p className={styles.subtitle}>{form.subtitle}</p>
      )}
      <form className={styles.form} onSubmit={onSubmit} aria-labelledby={titleId}>
        <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} autoComplete="off" aria-hidden="true" />
        {packageName && <input type="hidden" name="package" value={packageName} />}

        <Field label={form.name}>
          <input type="text" name="name" placeholder={form.namePlaceholder} autoComplete="name" required />
        </Field>
        <Field label={form.email}>
          <input type="email" name="email" placeholder={form.emailPlaceholder} autoComplete="email" required />
        </Field>
        <Field label={form.phone}>
          <input
            type="tel"
            name="phone"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder={form.phonePlaceholder}
            title={form.phoneTitle}
            autoComplete="tel-national"
            required
          />
        </Field>
        <Field label={form.subject}>
          <input
            type="text"
            name="subject"
            defaultValue={subject}
            maxLength={200}
            placeholder={form.subjectPlaceholder}
            required
          />
        </Field>
        <Field label={form.segment}>
          <select name="segment" defaultValue="" required>
            <option value="">{form.choose}</option>
            {tradingSegments.map((option) => (
              <option key={option} value={option}>
                {form.segmentLabels[option] ?? option}
              </option>
            ))}
          </select>
        </Field>
        <Field label={form.investment}>
          <select name="investment" defaultValue="" required>
            <option value="">{form.choose}</option>
            {investmentRanges.map((option) => (
              <option key={option} value={option}>
                {form.investmentLabels[option] ?? option}
              </option>
            ))}
          </select>
        </Field>

        <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={status === "sending"}>
          {status === "sending" ? form.sending : form.submit}
          <LuSend aria-hidden="true" />
        </button>

        {status === "success" && (
          <p role="status" className={styles.success}>
            {form.success}
          </p>
        )}
        {status === "error" && (
          <p role="alert" className={styles.error}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
