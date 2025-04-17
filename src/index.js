import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(errorHandling);
//Routes
app.use("/api/users", userRoutes);

// app.post("/api/users", async (req, res) => {
//   try {
//     const user = await UserModel.create(req.body);
//     res.status(200).json(user);
//     console.log("Request body:", req.body);
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res
//       .status(500)
//       .json({ error: "Internal server error", details: error.message });
//   }
// });

// //delete all users
// app.delete("/api/users", async (req, res) => {
//   try {
//     const result = await UserModel.deleteMany({});
//     res.status(200).json({ message: "All users deleted successfully", result });
//     console.log("All users deleted");
//   } catch (error) {
//     console.error("Error deleting users:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// //get all users
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await UserModel.find({});
//     res.status(200).json(users);
//     console.log("Fetched all users");
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res
//       .status(500)
//       .json({ error: "Internal server error", details: error.message });
//   }
// });

// //get user by id
// app.get("/api/users/:id", async (req, res) => {
//   try {
//     const user = await UserModel.findOne({ id: req.params.id }); // Query by custom field 'id'
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json(user);
//     console.log(`Fetched user with ID: ${req.params.id}`);
//   } catch (error) {
//     console.error("Error fetching user by ID:", error);
//     res
//       .status(500)
//       .json({ error: "Internal server error", details: error.message });
//   }
// });

// //update user by id needs entire body to update
// app.put("/api/users/:id", async (req, res) => {
//   try {
//     const user = await UserModel.findOneAndUpdate(
//       { id: req.params.id }, // Query by custom field 'id'
//       req.body,
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json(user);
//     console.log(`Updated user with ID: ${req.params.id}`);
//   } catch (error) {
//     if (error.code === 11000) {
//       // Handle duplicate key error
//       console.error("Duplicate key error:", error);
//       res.status(400).json({
//         error: "Duplicate key error",
//         details: `A user with the same ${Object.keys(error.keyValue)[0]} already exists.`,
//       });
//     } else {
//       // Handle other errors
//       console.error("Error updating user:", error);
//       res
//         .status(500)
//         .json({ error: "Internal server error", details: error.message });
//     }
//   }
// });

// //partial update user by id
// app.patch("/api/users/:id", async (req, res) => {
//   try {
//     const user = await UserModel.findOneAndUpdate(
//       { id: req.params.id }, // Query by custom field 'id'
//       { $set: req.body }, // Only update the fields provided in the request body
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json(user);
//     console.log(`Partially updated user with ID: ${req.params.id}`);
//   } catch (error) {
//     if (error.code === 11000) {
//       // Handle duplicate key error
//       console.error("Duplicate key error:", error);
//       res.status(400).json({
//         error: "Duplicate key error",
//         details: `A user with the same ${Object.keys(error.keyValue)[0]} already exists.`,
//       });
//     } else {
//       // Handle other errors
//       console.error("Error partially updating user:", error);
//       res
//         .status(500)
//         .json({ error: "Internal server error", details: error.message });
//     }
//   }
// });

// //delete user by id
// app.delete("/api/users/:id", async (req, res) => {
//   try {
//     const user = await UserModel.findOneAndDelete({ id: req.params.id }); // Query by custom field 'id'
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json({ message: "User deleted successfully", user });
//     console.log(`Deleted user with ID: ${req.params.id}`);
//   } catch (error) {
//     console.error("Error deleting user by ID:", error);
//     res
//       .status(500)
//       .json({ error: "Internal server error", details: error.message });
//   }
// });
// Server running

app.listen(port, () => {
  console.log(`Server is running on http:localhost:${port}`);
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@rajcluster.twcoi6w.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=rajCluster"
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
