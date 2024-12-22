import { Mongoose, Document } from "mongoose";
export interface Config {
  MONGODB_URI: string;
  JWT_SECRET: string;
  API_KEY: string;
  PORT: string;
}

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  // comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IJournal extends Document {
  user: string; // MongoDB ObjectId as a string
  symbol: string;
  asset: string;
  entryPrice: number;
  exitPrice?: number;
  notes?: string;
  image?: string;
  stopLoss?: number;
  takeProfit?: number;
  tradeDirection: "long" | "short";
  pnl?: number;
  fees?: number;
  strategy?: string;
  status: "win" | "loss";
  tradeDate: Date;
  closingDate?: Date;
  createdAt?: Date; // Added by default with timestamps
  updatedAt?: Date; // Added by default with timestamps
}
