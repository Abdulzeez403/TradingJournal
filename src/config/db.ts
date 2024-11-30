import mongoose from "mongoose";
import { config } from "./env";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Database connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;