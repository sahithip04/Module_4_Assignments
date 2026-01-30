const bcrypt = require('bcrypt');
const userService = require('../services/userService');

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await userService.createUser({
      ...req.body,
      password: hashedPassword,
      created_at: new Date()
    });
    res.status(201).json(user);
  } catch (err) {
    if (err.message.includes('duplicate')) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: 'User deleted (todos cascade automatically)' });
  } catch {
    res.status(404).json({ error: 'User not found' });
  }
};
