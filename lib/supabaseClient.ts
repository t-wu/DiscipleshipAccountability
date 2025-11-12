import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kctreqviklpmzjlxhexm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdHJlcXZpa2xwbXpqbHhoZXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MDg4NjYsImV4cCI6MjA3ODQ4NDg2Nn0.1fpiHfc4MYpQlRqX0YC330p2D0Xz0mmOt7M6qHFUcyY'
export const supabase = createClient(supabaseUrl, supabaseKey)
