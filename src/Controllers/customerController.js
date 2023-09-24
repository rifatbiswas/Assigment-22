const Customer = require('../models/Customer'); // Replace 'Customer' with your actual Customer model

exports.create = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    res.status(201).json({ status: 'success', data: newCustomer });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create customer', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json({ status: 'success', data: customer });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch customer', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete customer', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedCustomer });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update customer', error: error.message });
  }
};
