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
