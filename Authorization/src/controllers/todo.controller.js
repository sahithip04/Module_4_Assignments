const supabase = require('../config/supabase');

exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    const { data, error } = await supabase
      .from('todos')
      .insert([{ title, userId: req.user }])
      .select();

    if (error) throw error;

    res.status(201).json(data[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTodos = async (req, res) => {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', req.user);

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const { data, error } = await supabase
    .from('todos')
    .update({ title, completed })
    .eq('id', id)
    .eq('userId', req.user)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  if (data.length === 0) return res.status(403).json({ message: 'Forbidden' });

  res.json(data[0]);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)
    .eq('userId', req.user)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  if (data.length === 0) return res.status(403).json({ message: 'Forbidden' });

  res.json({ message: 'Deleted successfully' });
};
