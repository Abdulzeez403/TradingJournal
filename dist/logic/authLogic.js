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
exports.login = exports.register = void 0;
const error_1 = require("../exceptions/error");
const userService_1 = __importDefault(require("../services/userService"));
const userModel_1 = __importDefault(require("../models/userModel")); // Assuming you have a User model
const userService = new userService_1.default();
const register = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const values = request.body;
    const user = yield userService.create(values); // Assuming create() method creates a user
    return user;
});
exports.register = register;
const login = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request.body;
        const user = yield userModel_1.default.findOne({ email });
        if (!user) {
            throw new error_1.BadRequestException("Invalid Email or Password");
        }
        // Assuming validatePassword is a method in UserService
        const isPasswordValid = yield userService.validatePassword(password, user.password);
        if (!isPasswordValid) {
            throw new error_1.BadRequestException("Invalid Email or Password");
        }
        return response.status(200).json({
            message: "Login successful",
            user,
            userId: user === null || user === void 0 ? void 0 : user.id,
        });
    }
    catch (error) {
        return response.status(400).json({
            message: error.message || "Login failed",
            error: error.message,
        });
    }
});
exports.login = login;
