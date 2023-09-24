const Category = require('../models/Category'); // Replace 'Category' with your actual Category model

exports.create = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({ status: 'success', data: newCategory });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create category', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({ status: 'success', data: category });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch category', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete category', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedCategory });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update category', error: error.message });
  }
};
