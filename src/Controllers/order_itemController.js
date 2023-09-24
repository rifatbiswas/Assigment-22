const OrderItem = require('../models/OrderItem'); // Replace 'OrderItem' with your actual OrderItem model

exports.create = async (req, res) => {
  try {
    const newOrderItem = await OrderItem.create(req.body);
    res.status(201).json({ status: 'success', data: newOrderItem });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create order item', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const orderItem = await OrderItem.findById(req.params.id);
    res.status(200).json({ status: 'success', data: orderItem });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch order item', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await OrderItem.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete order item', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedOrderItem = await OrderItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedOrderItem });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update order item', error: error.message });
  }
};
