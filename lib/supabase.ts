import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  created_at: string;
};

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};
