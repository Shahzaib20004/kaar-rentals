import { supabase } from './src/supabaseClient.js'

async function test() {
  const { data, error } = await supabase.from('users').select('*')
  console.log('Data:', data)
  console.log('Error:', error)
}

test()
