import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();    
const app = express();
const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}` );

    console.log("Connected to MongoDB");

    app.on("error", (err) => {
      console.error("Error in connecting to database:", err);
      throw err;
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Some error occurred:", err);
    process.exit(1);
  }
})();
