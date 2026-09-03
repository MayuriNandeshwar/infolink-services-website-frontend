CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),

  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,

  company_name text,
  project_type text,
  budget text,

  message text,

  CONSTRAINT contact_inquiries_phone_format_check
    CHECK (phone ~ '^[6-9][0-9]{9}$')
);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at
  ON contact_inquiries (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_phone
  ON contact_inquiries (phone);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_inquiries"
ON contact_inquiries;

CREATE POLICY "anon_insert_contact_inquiries"
ON contact_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);