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
exports.AuthController = void 0;
const authLogic_1 = require("../logic/authLogic");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
class AuthController {
    constructor() {
        this.register = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, authLogic_1.register)(request, response);
            response.status(200).json({ message: "Registered Successfully!", data });
        }));
        this.login = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, authLogic_1.login)(request, response);
            response.status(200).json({ message: "Login Successfully!", data });
        }));
    }
}
exports.AuthController = AuthController;
