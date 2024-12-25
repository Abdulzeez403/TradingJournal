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
exports.UserController = void 0;
const userLogic_1 = require("../logic/userLogic");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
class UserController {
    constructor() {
        this.getMultipleUsers = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, userLogic_1.getMultipleUsers)(request, response);
            response.status(200).json({ message: "Get Users Successfully", data });
        }));
        this.getUser = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, userLogic_1.getUser)(request, response);
            response.status(200).json({ message: "Get User Successfully", data });
        }));
        this.updateUser = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, userLogic_1.updateUser)(request, response);
            response.status(200).json({ message: "Update User Successfully", data });
        }));
        this.deleteUser = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, userLogic_1.deleteUser)(request, response);
            response.status(200).json({ message: "Delete User Successfully", data });
        }));
    }
}
exports.UserController = UserController;
