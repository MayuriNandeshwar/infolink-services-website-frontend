import { createClient } from '@supabase/supabase-js';

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseUrl = rawUrl && rawUrl.startsWith('http') ? rawUrl : 'https://tvzjrwucfknqghosklii.supabase.co';
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2empyd3VjZmtucWdob3NrbGlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwNzQwNzUsImV4cCI6MjEwMDY1MDA3NX0.NUJXv2ReupNUqEpfydbFkgUhHiqRqgV5Xktywh6M50E';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Lead {
  id?: string;
  full_name: string;
  mobile: string;
  email?: string;
  city?: string;
  property_type?: string;
  monthly_bill?: string;
  message?: string;
  created_at?: string;
}

export async function submitLead(lead: Omit<Lead, 'id' | 'created_at'>) {
  const { data, error } = await supabase.from('leads').insert([lead]);
  if (error) throw error;
  return data;
}