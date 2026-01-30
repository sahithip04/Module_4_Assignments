// userService.js
const supabase = require('../config/supabaseClient');

exports.createUser = async (user) => {
  const { data, error } = await supabase.from('users_todo').insert([user]).select();
  if (error) throw error;
  return data[0];
};

exports.deleteUser = async (id) => {
  const { error } = await supabase.from('users_todo').delete().eq('id', id);
  if (error) throw error;
};
