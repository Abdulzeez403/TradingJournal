import { Router } from "express";
import { AuthController } from "../controller/authController";
const authController = new AuthController();

const authRoute: Router = Router();
authRoute.post("/login", authController.login);
authRoute.post("/register", authController.register);
// authRoute.post("/logout", authController.logout);

export default authRoute;
