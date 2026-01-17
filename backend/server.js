import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();    
const app = express();
const PORT = process.env.PORT || 4000;

(async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME || 'portfolio'}`);
      console.log("Connected to MongoDB");
    } else {
      console.warn("MONGO_URI not configured, running without database");
    }
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    console.warn("Starting server without database connection");
  }

  app.on("error", (err) => {
    console.error("Server error:", err);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
