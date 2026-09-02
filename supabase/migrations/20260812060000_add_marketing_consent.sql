ALTER TABLE contact_inquiries
  ADD COLUMN IF NOT EXISTS marketing_consent boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN contact_inquiries.marketing_consent IS 'Optional marketing/promotional communication consent, separate from mandatory privacy consent.';