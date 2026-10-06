import { dictionaries } from "@/lib/content";
import { shareImage } from "@/lib/og";

export { size, contentType } from "@/lib/og";

export default function Image() {
  const t = dictionaries.en.packages;
  return shareImage({ locale: "en", kicker: t.bannerEyebrow, title: t.metaTitle });
}
