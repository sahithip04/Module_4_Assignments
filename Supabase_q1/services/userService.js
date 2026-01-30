const supabase = require('../config/supabaseClient');

exports.createUser = async (user) => {
  const { data, error } = await supabase
    .from('users')
    .insert([user])
    .select();
  if (error) throw error;
  return data[0];
};

exports.getAllUsers = async () => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
};

exports.getUserById = async (id) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

exports.updateUser = async (id, body) => {
  const { data, error } = await supabase
    .from('users')
    .update(body)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data[0];
};

exports.deleteUser = async (id) => {
  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);
  if (error) throw error;
};
