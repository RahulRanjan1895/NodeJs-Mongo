import UserModel from "../config/userModel.js";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(200).json(user);
    console.log("Request body:", req.body);
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

// Delete all users
export const deleteAllUsers = async (req, res) => {
  try {
    const result = await UserModel.deleteMany({});
    res.status(200).json({ message: "All users deleted successfully", result });
    console.log("All users deleted");
  } catch (error) {
    console.error("Error deleting users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
    console.log("Fetched all users");
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findOne({ id: req.params.id }); // Query by custom field 'id'
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
    console.log(`Fetched user with ID: ${req.params.id}`);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

// Update user by ID
export const updateUser = async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { id: req.params.id }, // Query by custom field 'id'
      req.body,
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
    console.log(`Updated user with ID: ${req.params.id}`);
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error
      console.error("Duplicate key error:", error);
      res.status(400).json({
        error: "Duplicate key error",
        details: `A user with the same ${
          Object.keys(error.keyValue)[0]
        } already exists.`,
      });
    } else {
      console.error("Error updating user:", error);
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  }
};

// Partially update user by ID
export const partialUpdateUser = async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { id: req.params.id }, // Query by custom field 'id'
      { $set: req.body }, // Only update the fields provided in the request body
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
    console.log(`Partially updated user with ID: ${req.params.id}`);
  } catch (error) {
    if (error.code === 11000) {
      console.error("Duplicate key error:", error);
      res.status(400).json({
        error: "Duplicate key error",
        details: `A user with the same ${
          Object.keys(error.keyValue)[0]
        } already exists.`,
      });
    } else {
      console.error("Error partially updating user:", error);
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  }
};

// Delete user by ID
export const deleteUserById = async (req, res) => {
  try {
    const user = await UserModel.findOneAndDelete({ id: req.params.id }); // Query by custom field 'id'
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", user });
    console.log(`Deleted user with ID: ${req.params.id}`);
  } catch (error) {
    console.error("Error deleting user by ID:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};
