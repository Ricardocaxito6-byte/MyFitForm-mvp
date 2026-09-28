const SUPABASE_URL = "https://svjwpenvlsxqfqeekkyy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_kGUBjtGquR2hw6D5IvKUVw_pwLu-vk9";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
