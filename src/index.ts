import express, { Express, Request, Response } from "express";
import logger from "./config/logger";
import { config } from "./config/env";
import connectDB from "./config/db";
import rootRoute from "./routes/rootRoute";
import mongoose from "mongoose";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { authMiddleware } from "./middlewares/authMiddlewares";

const app: Express = express();
// Define and apply middleware
const setupMiddleware = (app: Express) => {
  app.use(express.json());
  app.use(cors());
};

// Define routes
const setupRoutes = (app: Express) => {
  app.use("/api/v1", rootRoute);

  // Default route for unmatched paths
  app.use("*", (req: Request, res: Response) => {
    res.json({ message: "TradingJournal" });
  });
};

connectDB();
const portNumber = parseInt(config.PORT);
const startServer = (port = portNumber) => {
  app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
};

mongoose.connection.once("open", () => {
  setupMiddleware(app);
  setupRoutes(app);
  app.use(errorMiddleware);
  app.use(authMiddleware);
  startServer();
});
