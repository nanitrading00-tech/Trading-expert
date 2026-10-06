import { dictionaries } from "@/lib/content";
import { shareImage } from "@/lib/og";

export { size, contentType } from "@/lib/og";

export default function Image() {
  const t = dictionaries.hi.home;
  return shareImage({ locale: "hi", kicker: t.eyebrow, title: t.metaTitle });
}
