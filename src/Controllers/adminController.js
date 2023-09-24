// Import any necessary models or modules
const Admin = require("../models/Admin");

exports.create = async (req, res) => {
  try {
    const newAdmin = await Admin.create(req.body);

    res.status(201).json({ status: "success", data: newAdmin });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "error",
        message: "Failed to create admin",
        error: error.message,
      });
  }
};

exports.read = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);

    res.status(200).json({ status: "success", data: admin });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "error",
        message: "Failed to fetch admin",
        error: error.message,
      });
  }
};

exports.delete = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);

    res.status(204).json();
  } catch (error) {
    res
      .status(500)
      .json({
        status: "error",
        message: "Failed to delete admin",
        error: error.message,
      });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({ status: "success", data: updatedAdmin });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "error",
        message: "Failed to update admin",
        error: error.message,
      });
  }
};
