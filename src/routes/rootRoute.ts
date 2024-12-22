import { Router } from "express";
import userRouter from "./userRoute";
import authRoute from "./authRoute";
import journalRouter from "./JournalRoute";
import { authMiddleware } from "../middlewares/authMiddlewares";

const rootRouter: Router = Router();
rootRouter.use("/auth", authRoute);
rootRouter.use("/user", userRouter);
rootRouter.use("/journal", journalRouter);

export default rootRouter;
