const Payment = require('../models/Payment'); // Replace 'Payment' with your actual Payment model

exports.create = async (req, res) => {
  try {
    const newPayment = await Payment.create(req.body);
    res.status(201).json({ status: 'success', data: newPayment });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create payment', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    res.status(200).json({ status: 'success', data: payment });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch payment', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete payment', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedPayment });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update payment', error: error.message });
  }
};
