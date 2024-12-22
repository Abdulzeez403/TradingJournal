import { Router } from "express";
import { UserController } from "../controller/userController";

const userRouter: Router = Router();
const userController = new UserController();
userRouter.get("/", userController.getMultipleUsers);
userRouter.get("/:id", userController.getUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
