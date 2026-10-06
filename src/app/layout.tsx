import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";
import { EnquiryProvider } from "@/components/EnquiryDialog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import SkipLink from "@/components/SkipLink";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: `${site.name} — stock market advisory for NIFTY, Bank NIFTY, equity, F&O and commodity traders.`,
  openGraph: { siteName: site.name, locale: "en_IN", type: "website" },
  verification: { google: site.googleSiteVerification },
};

// Business details for Google search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  telephone: site.phone,
  email: site.email,
  address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "IN" },
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <EnquiryProvider>
          <SkipLink />
          <MarketTicker />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </EnquiryProvider>
        <WhatsAppButton />
        <CookieBanner />
        {site.googleAnalyticsId && <Analytics id={site.googleAnalyticsId} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
