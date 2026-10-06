"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { SubmitResult } from "@/app/actions";

type Status = "idle" | "sending" | "success" | "error";

export function useFormSubmit(action: (formData: FormData) => Promise<SubmitResult>) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const openedAt = useRef(0);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    // How long the visitor took to fill the form; instant submissions are treated as bots.
    formData.set("elapsed_ms", String(openedAt.current ? Date.now() - openedAt.current : 0));
    setStatus("sending");
    try {
      const result = await action(formData);
      if (!result.ok) {
        setError(result.error);
        setStatus("error");
        return;
      }
      form.reset();
      openedAt.current = Date.now();
      setStatus("success");
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return { status, error, onSubmit };
}
