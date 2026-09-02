CREATE TABLE IF NOT EXISTS career_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  experience text NOT NULL,
  position text NOT NULL,
  resume_url text NOT NULL,
  CONSTRAINT career_applications_phone_format_check
    CHECK (phone ~ '^[6-9][0-9]{9}$'),
  CONSTRAINT career_applications_email_format_check
    CHECK (email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$')
);

COMMENT ON TABLE career_applications IS 'Resume applications submitted through the /careers page. Written exclusively by the service role via app/api/careers/route.ts.';
COMMENT ON COLUMN career_applications.phone IS '10-digit Indian mobile number, starting with 6-9. Validated in the app (Zod) and again here.';
COMMENT ON COLUMN career_applications.resume_url IS 'Long-lived signed URL into the career-resumes storage bucket. Regenerate via Supabase Storage if it ever expires.';

-- Indexes for common admin/review query patterns.
CREATE INDEX IF NOT EXISTS idx_career_applications_created_at
  ON career_applications (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_career_applications_position
  ON career_applications (position);

CREATE INDEX IF NOT EXISTS idx_career_applications_email
  ON career_applications (email);

-- Row Level Security -------------------------------------------------------

ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- No INSERT policy for anon/authenticated: all writes go through
-- app/api/careers/route.ts using the service-role key, which bypasses RLS.
-- This is deliberate — see note 2 above.

-- Only authenticated (staff) users may read applications. No policy is
-- created for anon SELECT, so anonymous read access is denied by default.
DROP POLICY IF EXISTS "authenticated_select_career_applications" ON career_applications;
CREATE POLICY "authenticated_select_career_applications"
  ON career_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- No UPDATE/DELETE policy for anon or authenticated — only the service
-- role (server-side, deliberate action) can modify or remove a record.
