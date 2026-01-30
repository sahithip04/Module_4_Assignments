const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const validateTodo = require('../validations/todoValidation');

router.post('/add-todo', validateTodo, todoController.addTodo);
router.get('/get-my-todo/:userId', todoController.getTodosByUser);
router.put('/update-todo/:todoId', todoController.updateTodo);
router.delete('/delete-todo/:todoId', todoController.deleteTodo);

module.exports = router;
