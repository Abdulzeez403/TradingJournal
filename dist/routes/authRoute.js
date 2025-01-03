"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controller/authController");
const authController = new authController_1.AuthController();
const authRoute = (0, express_1.Router)();
authRoute.post("/login", authController.login);
authRoute.post("/register", authController.register);
// authRoute.post("/logout", authController.logout);
exports.default = authRoute;
