"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute_1 = __importDefault(require("./userRoute"));
const authRoute_1 = __importDefault(require("./authRoute"));
const JournalRoute_1 = __importDefault(require("./JournalRoute"));
const rootRouter = (0, express_1.Router)();
rootRouter.use("/auth", authRoute_1.default);
rootRouter.use("/user", userRoute_1.default);
rootRouter.use("/journal", JournalRoute_1.default);
exports.default = rootRouter;
