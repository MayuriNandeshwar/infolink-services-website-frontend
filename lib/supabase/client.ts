import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Browser Supabase client, authenticated with the PUBLIC anon key only.
 *
 * IMPORTANT: This client is intentionally NOT used to write to
 * `contact_inquiries`. Lead submissions go through `POST /api/contact`
 * (see `app/api/contact/route.ts`), which re-validates on the server and
 * writes using the service-role client. This file exists for any future
 * client-side reads that are safe under RLS (e.g. a public status lookup),
 * and to keep the anon key initialization in one auditable place.
 *
 * There are NO hardcoded fallback URLs or keys here on purpose — if the
 * environment variables are missing, this throws a clear error immediately
 * instead of silently connecting to an unknown/stale Supabase project.
 */

let cachedClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient(): SupabaseClient {
  if (cachedClient) return cachedClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !url.startsWith('http')) {
    throw new Error(
      'Missing/invalid NEXT_PUBLIC_SUPABASE_URL. Check your .env.local (see .env.example).'
    );
  }
  if (!anonKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_ANON_KEY. Check your .env.local (see .env.example).'
    );
  }

  cachedClient = createClient(url, anonKey);
  return cachedClient;
}
