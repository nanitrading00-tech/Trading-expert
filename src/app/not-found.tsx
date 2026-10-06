import type { Metadata } from "next";
import NotFoundContent from "@/components/pages/NotFoundContent";
import { dictionaries } from "@/lib/content";

export const metadata: Metadata = {
  title: dictionaries.en.notFound.metaTitle,
};

export default function NotFound() {
  return <NotFoundContent />;
}
