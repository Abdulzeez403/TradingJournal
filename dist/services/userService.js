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
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const error_1 = require("../exceptions/error");
class UserService {
    initModel() {
        return userModel_1.default;
    }
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingUser = yield userModel_1.default.findOne({
                    email: userData.email,
                });
                if (existingUser) {
                    throw new error_1.BadRequestException("Email already exist!");
                }
                const user = new userModel_1.default(userData);
                return yield user.save();
            }
            catch (error) {
                throw new Error(`Failed to create user: ${error.message}`);
            }
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.findById({ userId }).select("-password").exec();
                if (!user) {
                    throw new error_1.BadRequestException("No User Found!");
                }
            }
            catch (error) {
                throw new Error(`Failed to create user: ${userId} : ${error.message}`);
            }
        });
    }
    getMultipleUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield userModel_1.default.find();
            }
            catch (error) {
                throw new Error(`Failed to create user: ${error.message}`);
            }
        });
    }
    updateUser(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.findByIdAndUpdate(id, userData, {
                    new: true,
                }).exec();
                return user;
            }
            catch (error) {
                throw new Error(`Failed to create user: ${id} : ${error.message}`);
            }
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.findByIdAndDelete(userId).exec();
                return user;
            }
            catch (error) {
                throw new Error(`Failed to create user: ${userId}: ${error.message}`);
            }
        });
    }
    validatePassword(plainPassword, hashedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield bcrypt_1.default.compare(plainPassword, hashedPassword);
            }
            catch (error) {
                throw new Error(`Failed to validate password:`);
            }
        });
    }
}
exports.default = UserService;
