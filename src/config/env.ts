import dotenv from "dotenv";
import { Config } from "../types/types";

dotenv.config();

const config: Config = {
  MONGODB_URI: process.env.MONGODB_URI || "your-default-mongodb-uri",
  JWT_SECRET: process.env.JWT_SECRET || "your-jwt-secret",
  API_KEY: process.env.API_KEY || "your-api-key",
  PORT: process.env.PORT || "5000",
};

export { config };
