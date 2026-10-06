# Nifty Experts website

Bilingual (English + Hindi) marketing site for Nifty Experts, built with Next.js 16, TypeScript and CSS Modules.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. English pages live at the root, Hindi pages under `/hi`.

Other commands: `npm run build` (production build), `npm run lint`, `npx tsc --noEmit`.

## Where to change things

| What | File |
| --- | --- |
| Business name, phone, WhatsApp, email, address, social links, free-trial length, SEBI number, policy date, Google Analytics ID | `site` in `src/lib/site.ts` |
| Package prices and Razorpay "Pay now" links | `packages` in `src/lib/site.ts` |
| Home page "Track record" numbers | `trackRecord` in `src/lib/site.ts` |
| All page wording (including package names and features), in English and Hindi | `src/lib/content.ts` |
| Blog articles | `src/content/blog/en/*.md` and `src/content/blog/hi/*.md` |
| Colours, fonts and shared styles | `src/app/globals.css` |
| Images | `public/images/` |

Pages are thin files under `src/app/` that render shared components in `src/components/pages/`.

## Forms

Both forms are validated on the server (`src/app/actions.ts`) and saved to a Google Sheet.
Protection: a hidden honeypot field, a minimum fill time and a per-IP rate limit.

Setup:

1. Create a Google Sheet, open **Extensions → Apps Script** and paste in `google-apps-script/Code.gs`.
2. Set `SECRET` in that script (and `NOTIFY_EMAIL` if you want an alert email).
3. **Deploy → New deployment → Web app**, execute as *Me*, access *Anyone*. Copy the `/exec` URL.
4. Copy `.env.example` to `.env.local` and fill in both values, then restart the dev server.

## Live market data

NIFTY, Bank NIFTY and other index prices come from a free, unofficial Yahoo Finance endpoint
(`src/lib/market.ts`), cached for 60 seconds by `/api/market`. Replace it with a licensed feed
before a commercial launch.

## Hosting

The site needs a Node.js host (Netlify, Vercel or similar) because the forms run server-side.
Add `GOOGLE_SHEETS_WEBHOOK_URL` and `GOOGLE_SHEETS_SECRET` as environment variables there.

## Before going live

- Replace the placeholder phone and WhatsApp numbers in `src/lib/site.ts`.
- Add the SEBI registration number and replace the summarised Terms and Privacy text with the
  legally reviewed versions in `src/lib/content.ts`, then update `policyUpdated` in `src/lib/site.ts`.
- Check the Facebook and Instagram links.
