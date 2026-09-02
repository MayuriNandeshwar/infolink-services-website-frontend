CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  city text,
  property_type text NOT NULL,
  monthly_bill text NOT NULL,
  message text,
  consent_given boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'website',
  status text NOT NULL DEFAULT 'new',
  CONSTRAINT contact_inquiries_phone_format_check
    CHECK (phone ~ '^[6-9][0-9]{9}$'),
  CONSTRAINT contact_inquiries_status_check
    CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'closed')),
  CONSTRAINT contact_inquiries_consent_required_check
    CHECK (consent_given = true)
);

COMMENT ON TABLE contact_inquiries IS 'Public contact/lead inquiries submitted through the website contact form.';
COMMENT ON COLUMN contact_inquiries.phone IS '10-digit Indian mobile number, starting with 6-9. Validated in the app (Zod) and again here.';
COMMENT ON COLUMN contact_inquiries.source IS 'Always set server-side by app/api/contact/route.ts. Never trust a client-supplied value.';
COMMENT ON COLUMN contact_inquiries.status IS 'Lead lifecycle status, managed by staff only.';

-- Indexes for common admin/dashboard query patterns.
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at
  ON contact_inquiries (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status
  ON contact_inquiries (status);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_phone
  ON contact_inquiries (phone);

-- Row Level Security -------------------------------------------------------

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public (anon) and authenticated INSERTs, but only rows that still
-- carry the server-default status/source. In normal operation this is
-- redundant with the API route's server-side override — it exists as a
-- second line of defense at the database layer.
DROP POLICY IF EXISTS "anon_insert_contact_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_contact_inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    status = 'new'
    AND source = 'website'
    AND consent_given = true
  );

-- Only authenticated (staff) users may read inquiries. No policy is created
-- for anon SELECT, so anonymous read access is denied by default under RLS.
DROP POLICY IF EXISTS "authenticated_select_contact_inquiries" ON contact_inquiries;
CREATE POLICY "authenticated_select_contact_inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated (staff) users may update lead status, etc. Adjust this
-- to a specific role/claim check if you introduce granular staff roles.
DROP POLICY IF EXISTS "authenticated_update_contact_inquiries" ON contact_inquiries;
CREATE POLICY "authenticated_update_contact_inquiries"
  ON contact_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- No DELETE policy is created for anon or authenticated — deletion is only
-- possible via the service role key (i.e. a deliberate server-side/admin
-- action), never through the public API.
