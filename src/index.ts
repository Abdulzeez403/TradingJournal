import express, { Request, Response } from "express";
import logger from "./config/logger";
import { config } from "./config/env";
import connectDB from "./config/db";

const app = express();

app.use(express.json());

app.get("*", (req: Request, res: Response) => {
  res.send("Hello, TradeReport!");
});

// connectDB();

app.listen(config.PORT, () => {
  logger.info(`Server is running on http://localhost:${config.PORT}`);
});
