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
const journalModel_1 = __importDefault(require("../models/journalModel"));
const error_1 = require("../exceptions/error");
class JournalService {
    // Initializes and returns the Journal model
    initModel() {
        return journalModel_1.default;
    }
    // Creates a new journal entry
    createJournal(journalData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const journal = new journalModel_1.default(journalData);
                return yield journal.save();
            }
            catch (error) {
                throw new Error(`Failed to create journal: ${error.message}`);
            }
        });
    }
    // Fetches a journal entry by its ID
    getJournal(journalId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const journal = yield journalModel_1.default.findById(journalId).exec();
                if (!journal) {
                    throw new error_1.BadRequestException("Journal not found!");
                }
                return journal;
            }
            catch (error) {
                throw new Error(`Failed to fetch journal: ${journalId}: ${error.message}`);
            }
        });
    }
    // Fetches all journal entries
    getAllJournals() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield journalModel_1.default.find();
            }
            catch (error) {
                throw new Error(`Failed to fetch journals: ${error.message}`);
            }
        });
    }
    // Updates an existing journal entry
    updateJournal(journalId, journalData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const journal = yield journalModel_1.default.findByIdAndUpdate(journalId, journalData, {
                    new: true,
                }).exec();
                if (!journal) {
                    throw new error_1.BadRequestException("Journal not found!");
                }
                return journal;
            }
            catch (error) {
                throw new Error(`Failed to update journal: ${journalId}: ${error.message}`);
            }
        });
    }
    // Deletes a journal entry
    deleteJournal(journalId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const journal = yield journalModel_1.default.findByIdAndDelete(journalId).exec();
                if (!journal) {
                    throw new error_1.BadRequestException("Journal not found!");
                }
                return journal;
            }
            catch (error) {
                throw new Error(`Failed to delete journal: ${journalId}: ${error.message}`);
            }
        });
    }
}
exports.default = JournalService;
