const Shipment = require('../models/Shipment'); // Replace 'Shipment' with your actual Shipment model

exports.create = async (req, res) => {
  try {
    const newShipment = await Shipment.create(req.body);
    res.status(201).json({ status: 'success', data: newShipment });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create shipment', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    res.status(200).json({ status: 'success', data: shipment });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch shipment', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Shipment.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete shipment', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedShipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedShipment });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update shipment', error: error.message });
  }
};
