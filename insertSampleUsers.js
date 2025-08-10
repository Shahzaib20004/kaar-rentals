import { supabase } from './src/supabaseClient.js'

async function insertSampleUsers() {
  const { data, error } = await supabase
    .from('users')
    .insert([
      { username: 'Shahzaib Ahmed', email: 'shahzaib@test.com' },
      { username: 'Ali Khan', email: 'ali.khan@test.com' },
      { username: 'Ayesha Fatima', email: 'ayesha@test.com' },
      { username: 'Hamza Iqbal', email: 'hamza@test.com' },
      { username: 'Sara Malik', email: 'sara@test.com' }
    ])

  if (error) console.error('Insert Error:', error)
  else console.log('Inserted Users:', data)
}

insertSampleUsers()
