const User = require('../models/User'); // Import  User model

exports.create = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ status: 'success', data: newUser });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create user', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ status: 'success', data: user });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch user', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete user', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedUser });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update user', error: error.message });
  }
};
