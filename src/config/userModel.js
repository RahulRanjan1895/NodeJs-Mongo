import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "ID is required"],
    unique: [true, "ID must be unique"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;

 