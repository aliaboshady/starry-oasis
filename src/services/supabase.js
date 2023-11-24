import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://mtiovwudoukplhgegvfc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10aW92d3Vkb3VrcGxoZ2VndmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2ODQ0MzksImV4cCI6MjAxMzI2MDQzOX0.eUtWU5HlNrZfT9o0qXK4aeo52AZB9P2BP8f8s9eP-uI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
