import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Server-only Supabase client, authenticated with the SERVICE ROLE key.
 *
 * The `server-only` import above makes it a build-time error to accidentally
 * import this module from a Client Component (`'use client'`) — Next.js will
 * fail the build rather than leak the service role key into the browser
 * bundle. This client must only ever be used inside:
 *   - Route Handlers (`app/api/**\/route.ts`)
 *   - Server Components / Server Actions
 *
 * NEVER import this from `components/LeadForm.tsx` or any client component.
 */

let cachedClient: SupabaseClient | null = null;

function getServerSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url || !url.startsWith('http')) {
    throw new Error(
      'Missing/invalid NEXT_PUBLIC_SUPABASE_URL. Set it in your environment (e.g. https://<project-ref>.supabase.co).'
    );
  }
  return url;
}

function getServiceRoleKey(): string {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) {
    throw new Error(
      'Missing SUPABASE_SERVICE_ROLE_KEY. This must be set as a server-only environment variable ' +
        '(never prefixed with NEXT_PUBLIC_) in your hosting provider dashboard.'
    );
  }
  return key;
}

/**
 * Lazily creates (and caches) the server-side Supabase admin client.
 * Lazy so that a missing env var only throws when actually used at request
 * time, not at module-import/build time.
 */
export function getSupabaseAdminClient(): SupabaseClient {
  if (cachedClient) return cachedClient;

  cachedClient = createClient(getServerSupabaseUrl(), getServiceRoleKey(), {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return cachedClient;
}
