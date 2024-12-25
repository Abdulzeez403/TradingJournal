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
exports.deleteJournal = exports.updateJournal = exports.createJournal = exports.getJournal = exports.getAllJournals = void 0;
const journalService_1 = __importDefault(require("../services/journalService")); // Updated to use journalService
const journalService = new journalService_1.default();
// Get all journals
const getAllJournals = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const journals = yield journalService.getAllJournals();
        return response.status(200).json({ message: "Get All Journals", journals });
    }
    catch (error) {
        return response
            .status(500)
            .json({ message: "Failed to fetch journals", error: error.message });
    }
});
exports.getAllJournals = getAllJournals;
// Get a single journal
const getJournal = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const journalId = request.params.id;
        const journal = yield journalService.getJournal(journalId);
        return response
            .status(200)
            .json({ message: "Get a Single Journal", journal });
    }
    catch (error) {
        return response
            .status(404)
            .json({ message: "Journal not found", error: error.message });
    }
});
exports.getJournal = getJournal;
// Create a new journal
const createJournal = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const journalData = request.body;
        // const image = await mapFiles(images);
        // const journalDatas = {
        //   ...journalData,
        //   images: image,
        // };
        const journal = yield journalService.createJournal(journalData);
        return response
            .status(201)
            .json({ message: "Journal Created Successfully", journal });
    }
    catch (error) {
        return response
            .status(400)
            .json({ message: "Failed to create journal", error: error.message });
    }
});
exports.createJournal = createJournal;
// Update a journal
const updateJournal = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const journalData = request.body;
        const updatedJournal = yield journalService.updateJournal(id, journalData);
        return response
            .status(200)
            .json({ message: "Journal Updated Successfully", updatedJournal });
    }
    catch (error) {
        return response
            .status(400)
            .json({ message: "Failed to update journal", error: error.message });
    }
});
exports.updateJournal = updateJournal;
// Delete a journal
const deleteJournal = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const deletedJournal = yield journalService.deleteJournal(id);
        return response
            .status(200)
            .json({ message: "Journal Deleted Successfully", deletedJournal });
    }
    catch (error) {
        return response
            .status(404)
            .json({ message: "Failed to delete journal", error: error.message });
    }
});
exports.deleteJournal = deleteJournal;
