const express = require("express");
const fs = require("fs");
const path = require("path");

const rateLimiter = require("../middleware/rateLimiter.middleware");
const validateTodo = require("../middleware/validateTodo.middleware");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

// Helper functions
const readDB = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// CREATE TODO
router.post("/add", validateTodo, (req, res) => {
  const db = readDB();

  const newTodo = {
    id: Date.now().toString(),
    title: req.body.title,
  };

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json(newTodo);
});

// GET ALL TODOS (RATE LIMITED)
router.get("/", rateLimiter, (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

// GET SINGLE TODO
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(t => t.id === req.params.todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

// UPDATE TODO
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(t => t.id === req.params.todoId);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);

  res.json(db.todos[index]);
});

// DELETE TODO
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const initialLength = db.todos.length;

  db.todos = db.todos.filter(t => t.id !== req.params.todoId);

  if (db.todos.length === initialLength) {
    return res.status(404).json({ error: "Todo not found" });
  }

  writeDB(db);
  res.json({ message: "Todo deleted successfully" });
});

module.exports = router;
