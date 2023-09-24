const Order = require('../models/Order'); // Replace 'Order' with your actual Order model

exports.create = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({ status: 'success', data: newOrder });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create order', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json({ status: 'success', data: order });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch order', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete order', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedOrder });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update order', error: error.message });
  }
};
