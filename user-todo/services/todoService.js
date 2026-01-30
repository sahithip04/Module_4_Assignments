// todoService.js
const supabase = require('../config/supabaseClient');

exports.addTodo = async (todo) => {
  const { data, error } = await supabase.from('todos_todo').insert([todo]).select();
  if (error) throw error;
  return data[0];
};

exports.getTodosByUser = async (userId) => {
  const { data, error } = await supabase.from('todos_todo').select('*').eq('user_id', userId);
  if (error) throw error;
  return data;
};
