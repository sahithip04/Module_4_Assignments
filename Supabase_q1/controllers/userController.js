const bcrypt = require('bcrypt');
const service = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);

    const user = await service.createUser({
      ...req.body,
      password: hashed
    });

    res.status(201).json(user);
  } catch (err) {
    if (err.message.includes('duplicate')) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await service.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await service.getUserById(req.params.id);
    res.json(user);
  } catch {
    res.status(404).json({ error: 'User not found' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await service.updateUser(req.params.id, req.body);
    res.json(user);
  } catch {
    res.status(404).json({ error: 'User not found' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await service.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
  } catch {
    res.status(404).json({ error: 'User not found' });
  }
};
