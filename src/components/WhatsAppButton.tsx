import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
