// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sfosahftoxqpbxvidvqd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmb3NhaGZ0b3hxcGJ4dmlkdnFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNzIzNTAsImV4cCI6MjA0OTc0ODM1MH0.amFlbNwQxdGzXOUXVv_ALo0yyFIs0RaIiyhEGjUsGtA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);