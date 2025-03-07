import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://ajgapbrvecjkezbuoago.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZ2FwYnJ2ZWNqa2V6YnVvYWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExOTM2ODUsImV4cCI6MjA1Njc2OTY4NX0.o2b1C-IsU1028_2_dH9LN-RtgfW7lKIIrSoXa_2CdSk')