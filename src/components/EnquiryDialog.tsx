"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import { LuX } from "react-icons/lu";
import EnquiryForm from "./EnquiryForm";
import styles from "./EnquiryDialog.module.css";

type EnquiryOptions = { title?: string; subject?: string; packageName?: string };

const EnquiryContext = createContext<(options?: EnquiryOptions) => void>(() => {});

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [options, setOptions] = useState<EnquiryOptions>({});
  const [formKey, setFormKey] = useState(0);

  function open(next: EnquiryOptions = {}) {
    setOptions(next);
    setFormKey((key) => key + 1);
    dialog.current?.showModal();
  }

  return (
    <EnquiryContext value={open}>
      {children}
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label={options.title ?? "Enquiry form"}
        onClick={(event) => {
          // A click on the dialog element itself means the dimmed backdrop was clicked.
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.body}>
          <button type="button" className={styles.close} aria-label="Close" onClick={() => dialog.current?.close()}>
            <LuX aria-hidden="true" />
          </button>
          <EnquiryForm key={formKey} className={styles.form} {...options} />
        </div>
      </dialog>
    </EnquiryContext>
  );
}

type EnquireButtonProps = EnquiryOptions & { className?: string; children: ReactNode };

export function EnquireButton({ className, children, ...options }: EnquireButtonProps) {
  const open = useContext(EnquiryContext);
  return (
    <button type="button" className={className} onClick={() => open(options)}>
      {children}
    </button>
  );
}
