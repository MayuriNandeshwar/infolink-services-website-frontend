# Infolink Services — Deployment Guide

This document covers everything needed to take this build live on Vercel (recommended) or Netlify.

---

## 1. Prerequisites

- Node.js 18.17+ (Next.js 13.5 requirement)
- A Supabase project (already provisioned — see `supabase/migrations/`)
- Access to point the `infolinkservices.com` DNS at your chosen host

## 2. Environment Variables

Copy `.env.example` to `.env.local` locally, or set these directly in your hosting provider's dashboard (**required** for production — there is no committed `.env` file in this repo, and the app intentionally has no hardcoded fallback values, so it will not run without these being set):

| Variable | Exposed to browser? | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Your Supabase project URL, e.g. `https://<project-ref>.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Your Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | **No — server only** | Used exclusively by `app/api/contact/route.ts` to insert into `contact_inquiries`. Never prefix this with `NEXT_PUBLIC_`, never reference it from a Client Component, and never commit it to source control. |

⚠️ There is no `.env` file committed to this repo — only `.env.example`. Every environment (local, Vercel, Netlify) must have these three variables set explicitly. A missing or malformed `NEXT_PUBLIC_SUPABASE_URL` is the most common cause of a `TypeError: Failed to fetch` on submit — see the root cause analysis provided alongside this update. Rotate all three values immediately if they are ever committed to a public repository.

## 3. Deploying to Vercel (recommended)

Vercel is the native deployment target for Next.js and requires no configuration beyond environment variables.

1. Push this codebase to a GitHub/GitLab/Bitbucket repository.
2. In the Vercel dashboard: **Add New Project → Import** your repository.
3. Framework preset: Vercel will auto-detect **Next.js** — no changes needed.
4. Add the two environment variables from Section 2 under **Project Settings → Environment Variables** (apply to Production, Preview, and Development).
5. Deploy. Vercel will run `next build` automatically and serve the app with:
   - Native image optimization (already enabled in `next.config.js` — Pexels remote images are whitelisted via `remotePatterns`)
   - Edge caching for `/sitemap.xml`, `/robots.txt`, and the web manifest (all generated natively by Next.js — no static files to maintain)
6. Once deployed, point your domain (`infolinkservices.com`) at Vercel via **Project Settings → Domains**, and update the DNS records at your registrar as instructed there.
7. **Important:** the domain used in `app/sitemap.ts`, `app/robots.ts`, and `lib/structured-data.ts` is hardcoded as `https://infolinkservices.com`. If the production domain differs, update the `BASE_URL` / `SITE_URL` constant in those three files before deploying.

## 4. Deploying to Netlify (alternative)

This repo also ships a `netlify.toml` with the `@netlify/plugin-nextjs` plugin pre-configured, so it will deploy to Netlify without changes if you prefer that host.

1. In the Netlify dashboard: **Add new site → Import an existing project**, connect your repository.
2. Netlify will read `netlify.toml` automatically (build command `npx next build`, publish directory `.next`).
3. Add the three environment variables from Section 2 under **Site configuration → Environment variables** — mark `SUPABASE_SERVICE_ROLE_KEY` as a server-only/sensitive variable if your Netlify plan supports that distinction.
4. Deploy. `@netlify/plugin-nextjs` converts `app/api/contact/route.ts` into a Netlify Function automatically — no extra configuration is required.

Both platforms support the Next.js App Router's native `sitemap.ts`, `robots.ts`, and `manifest.ts` — no extra plugins are required for those.

## 5. Post-Deploy Checklist

- [ ] Confirm `https://<your-domain>/sitemap.xml` returns valid XML listing all 4 routes
- [ ] Confirm `https://<your-domain>/robots.txt` returns the expected rules and sitemap reference
- [ ] Submit the sitemap URL in Google Search Console and Bing Webmaster Tools
- [ ] Verify the favicon and browser tab icon render correctly
- [ ] Test the contact form end-to-end and confirm a new row appears in the Supabase `contact_inquiries` table with `status = 'new'` and `source = 'website'`
- [ ] Confirm `SUPABASE_SERVICE_ROLE_KEY` is set on the server environment and is **not** visible in the browser bundle (check page source / Network tab for the string `service_role`)
- [ ] Run the deployed URL through [PageSpeed Insights](https://pagespeed.web.dev) and [Google Rich Results Test](https://search.google.com/test/rich-results) (to confirm the Organization/LocalBusiness/FAQ/Service JSON-LD validates)
- [ ] Confirm WhatsApp and Call buttons open correctly on an actual mobile device
- [ ] Re-run `npm run lint` and `npm run typecheck` in CI on every future PR (both are now clean and should stay that way — see Section 6)

## 6. Ongoing Quality Gates

Two npm scripts exist specifically to prevent regressions:

```bash
npm run typecheck   # tsc --noEmit — must report zero errors
npm run lint         # next lint — must report zero errors/warnings
```

Both are now clean and both run automatically as part of `next build` (`eslint.ignoreDuringBuilds` is now `false`), meaning a build will fail on Vercel/Netlify if either check fails. Do not re-enable `ignoreDuringBuilds: true` — it was disabled specifically so that Vercel/Netlify becomes a real quality gate, not just a compiler pass.

## 7. Known Limitation of This Development Sandbox (not a production issue)

Production builds run in this review environment show a `next/font` error fetching Inter and Plus Jakarta Sans from `fonts.googleapis.com`. This is caused by the sandbox's restricted network allowlist, not a code defect — it was verified by temporarily stubbing the font import, which produced a fully clean build (see Change Log). Any real deployment host (Vercel, Netlify, or a local machine with normal internet access) will fetch these fonts without issue.
