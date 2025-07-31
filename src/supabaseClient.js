import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cmdnaaclpkgxxportnuc.supabase.co'  // Local API URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtZG5hYWNscGtneHhwb3J0bnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3NzQyNzcsImV4cCI6MjA2OTM1MDI3N30.hFh9dR4oo-ZG_LKaLMYyBK-qQKreEBTJqFBxFLqKRig'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
