import express from "express";
import {
  createUser,
  deleteAllUsers,
  deleteUserById,
  getAllUsers,
  getUserById,
  partialUpdateUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);

//delete all users
router.delete("/", deleteAllUsers);

//get all users
router.get("/", getAllUsers);

//get user by id
router.get("/:id", getUserById);

//update user by id needs entire body to update
router.put("/:id", updateUser);

//partial update user by id
router.patch("/:id", partialUpdateUser);

//delete user by id
router.delete("/:id", deleteUserById);

export default router;
