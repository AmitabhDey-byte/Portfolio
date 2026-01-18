import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "../routes/user.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.local.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);

(async () => {
  try {
    await mongoose.connect(process.env.local.MONGO_URI);

    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
})();
