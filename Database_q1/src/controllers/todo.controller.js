import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from "../models/todo.model.js";

export const fetchTodos = (req, res) => {
  try {
    const todos = getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchTodo = (req, res) => {
  try {
    const todo = getTodoById(req.params.todoId);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addTodo = (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const todo = createTodo(req.body.title);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editTodo = (req, res) => {
  try {
    const updatedTodo = updateTodo(req.params.todoId, req.body);

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeTodo = (req, res) => {
  try {
    const deletedTodo = deleteTodo(req.params.todoId);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
