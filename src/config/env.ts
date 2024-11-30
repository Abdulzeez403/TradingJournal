import dotenv from "dotenv";

dotenv.config();

interface Config {
  MONGODB_URI: string;
  JWT_SECRET: string;
  API_KEY: string;
  PORT: string;
}

const config: Config = {
  MONGODB_URI: process.env.MONGODB_URI || "your-default-mongodb-uri",
  JWT_SECRET: process.env.JWT_SECRET || "your-jwt-secret",
  API_KEY: process.env.API_KEY || "your-api-key",
  PORT: process.env.PORT || "5000",
};

export { config };
