const Post = require('../models/Post'); // Replace 'Post' with your actual Post model

exports.create = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({ status: 'success', data: newPost });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create post', error: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({ status: 'success', data: post });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch post', error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete post', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: updatedPost });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update post', error: error.message });
  }
};
