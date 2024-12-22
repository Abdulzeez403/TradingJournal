import mongoose, { Schema } from "mongoose";
import { IJournal } from "../types/types";

const JournalSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    symbol: { type: String, required: true },
    asset: { type: String, required: true },
    entryPrice: { type: Number, required: true },
    exitPrice: { type: Number },
    notes: { type: String },
    images: { type: String },
    stopLoss: { type: Number },
    takeProfit: { type: Number },
    tradeDirection: { type: String, enum: ["long", "short"], required: true },
    status: { type: String, enum: ["win", "loss"], required: true },
    pnl: { type: Number },
    fees: { type: Number },
    strategy: { type: String },
    tradeDate: { type: Date, required: true },
    closingDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<IJournal>("Joural", JournalSchema);
