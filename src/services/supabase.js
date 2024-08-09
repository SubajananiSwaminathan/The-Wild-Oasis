import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fnmfygmzbhszunznpesv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubWZ5Z216YmhzenVuem5wZXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMDU2ODIsImV4cCI6MjAzODY4MTY4Mn0.XrpXf1fYHDY5-kMRK3AouvyqDiKbkAq9kw-97HQT12c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
