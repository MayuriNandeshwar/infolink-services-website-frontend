INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'career-resumes',
  'career-resumes',
  false,
  5242880, -- 5 MB, matches RESUME_MAX_SIZE_BYTES in lib/validation/career-schema.ts
  ARRAY[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- No storage.objects policies are created for `career-resumes` on purpose:
-- all access (upload, signed URL generation) goes through the service-role
-- key in app/api/careers/route.ts, which bypasses storage RLS entirely.
-- If you later add a client-facing use case (e.g. letting an applicant
-- re-upload their own resume from the browser), add a narrowly-scoped
-- policy here rather than making the bucket public.
