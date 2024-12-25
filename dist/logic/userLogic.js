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
exports.deleteUser = exports.updateUser = exports.getUser = exports.getMultipleUsers = void 0;
const userService_1 = __importDefault(require("../services/userService"));
const userService = new userService_1.default();
const getMultipleUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const user = userService.getMultipleUsers();
    return response.status(404).json({ message: "Get All Users", user });
});
exports.getMultipleUsers = getMultipleUsers;
const getUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = request.params.id;
    const data = userService.getUser(userId);
    return response.status(200).json({ message: "Get a Single User!", data });
});
exports.getUser = getUser;
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { userData } = request.body;
    const data = userService.updateUser(id, userData);
    return response.status(200).json({ message: "Update a Single User!", data });
});
exports.updateUser = updateUser;
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = request.params;
    const data = userService.deleteUser(userId);
    return response.status(200).json({ message: "Delete a Single User!", data });
});
exports.deleteUser = deleteUser;
