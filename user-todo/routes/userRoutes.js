const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../validations/userValidation');

router.post('/signup', validateUser, userController.signup);
router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router;
