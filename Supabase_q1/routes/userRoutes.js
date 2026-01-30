const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const validate = require('../validations/userValidation');

router.post('/', validate, controller.createUser);
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
