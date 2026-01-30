const todoService = require('../services/todoService');

exports.addTodo = async (req, res) => {
  try {
    const todo = await todoService.addTodo({
      title: req.body.title,
      description: req.body.description || '',
      is_completed: false,
      user_id: req.body.userId,
      created_at: new Date()
    });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTodosByUser = async (req, res) => {
  try {
    const todos = await todoService.getTodosByUser(req.params.userId);
    if (!todos.length) return res.status(404).json({ error: 'No todos found or user does not exist' });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await todoService.updateTodo(req.params.todoId, req.body);
    res.json(todo);
  } catch {
    res.status(404).json({ error: 'Todo not found' });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.todoId);
    res.json({ message: 'Todo deleted' });
  } catch {
    res.status(404).json({ error: 'Todo not found' });
  }
};
