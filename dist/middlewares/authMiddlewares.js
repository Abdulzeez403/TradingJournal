"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const userModel_1 = __importDefault(require("../models/userModel"));
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = (req.cookies && req.cookies.token) ||
            (req.headers.authorization && req.headers.authorization.split(" ")[1]);
        if (!token) {
            return res
                .status(401)
                .json({ message: "Access denied. No token provided." });
        }
        const decoded = jsonwebtoken_1.default.verify(token, env_1.config.JWT_SECRET);
        // Ensure the user exists
        const user = yield userModel_1.default.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ message: "User not found." });
        }
        // Attach the user to the request object (excluding password)
        req.user = user;
        next(); // Continue to the next middleware/handler
    }
    catch (err) {
        if (err instanceof jsonwebtoken_1.default.TokenExpiredError) {
            return res.status(401).json({ message: "Token has expired." });
        }
        return res.status(401).json({ message: "Invalid token." });
    }
});
exports.authMiddleware = authMiddleware;
