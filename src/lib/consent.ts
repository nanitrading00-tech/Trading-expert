const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";

export type Consent = "accepted" | "declined";

export function subscribeConsent(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export const getConsent = () => localStorage.getItem(STORAGE_KEY);

export function setConsent(value: Consent) {
  localStorage.setItem(STORAGE_KEY, value);
  // "storage" events only reach other tabs, so notify this tab ourselves.
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
