const SubAdmin = require('../models/SubAdmin');

exports.create = async (req, res) => {
  try {
    const newSubAdmin = await SubAdmin.create(req.body);
    res.status(201).json({ status: 'success', data: newSubAdmin });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create sub-admin', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const subAdmin = await SubAdmin.findById(req.params.id);
    res.status(200).json({ status: 'success', data: subAdmin });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch sub-admin', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await SubAdmin.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete sub-admin', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedSubAdmin = await SubAdmin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedSubAdmin });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update sub-admin', error: error.message });
  }
};
