import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dfqbqmfpbwoalrvhxmqv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcWJxbWZwYndvYWxydmh4bXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzM4NjUsImV4cCI6MjAyNjM0OTg2NX0.rF4_nTrS8-NVa6Wt4-OZkthZZdza1ChY-DyclPd3iA8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
