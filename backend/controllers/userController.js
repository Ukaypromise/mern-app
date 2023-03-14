const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "User registered" });
});

// @desc    Authenticate  user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Logged in" });
});

// @desc    Get user info
// @route   POST /api/users/me
// @access  Public
const getUser = asyncHandler(async (req, res) => {
  res.json({ message: "User info" });
});

module.exports = { registerUser, loginUser, getUser };
