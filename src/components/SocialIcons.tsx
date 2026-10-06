import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/lib/site";

const icons = { Facebook: FaFacebookF, Instagram: FaInstagram, WhatsApp: FaWhatsapp };

export default function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={className}>
      {socialLinks.map(({ name, href }) => {
        const Icon = icons[name];
        return (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Go to ${name} page`}>
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
