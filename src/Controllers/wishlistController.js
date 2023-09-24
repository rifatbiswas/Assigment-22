const Wishlist = require('../models/Wishlist'); // Replace 'Wishlist' with your actual Wishlist model

exports.create = async (req, res) => {
  try {
    const newWishlist = await Wishlist.create(req.body);
    res.status(201).json({ status: 'success', data: newWishlist });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create wishlist', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);
    res.status(200).json({ status: 'success', data: wishlist });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch wishlist', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete wishlist', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedWishlist = await Wishlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedWishlist });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update wishlist', error: error.message });
  }
};
