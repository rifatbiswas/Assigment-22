const Cart = require('../models/Cart'); // Replace 'Cart' with your actual Cart model

exports.create = async (req, res) => {
  try {
    const newCart = await Cart.create(req.body);
    res.status(201).json({ status: 'success', data: newCart });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create cart', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json({ status: 'success', data: cart });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch cart', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete cart', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedCart });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update cart', error: error.message });
  }
};
