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
exports.JournalController = void 0;
const journalLogic_1 = require("../logic/journalLogic");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
class JournalController {
    constructor() {
        this.getAllJournals = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, journalLogic_1.getAllJournals)(request, response);
            response.status(200).json({ message: "Get Journals Successfully", data });
        }));
        this.getJournal = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, journalLogic_1.getJournal)(request, response);
            response.status(200).json({ message: "Get Journal Successfully", data });
        }));
        this.createJournal = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, journalLogic_1.createJournal)(request, response);
            response.status(201).json({ message: "Create Journal Successfully", data });
        }));
        this.updateJournal = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, journalLogic_1.updateJournal)(request, response);
            response.status(200).json({ message: "Update Journal Successfully", data });
        }));
        this.deleteJournal = (0, express_async_handler_1.default)((request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, journalLogic_1.deleteJournal)(request, response);
            response.status(200).json({ message: "Delete Journal Successfully", data });
        }));
    }
}
exports.JournalController = JournalController;
