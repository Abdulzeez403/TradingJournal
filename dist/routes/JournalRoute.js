"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const journalController_1 = require("../controller/journalController");
const journalRouter = (0, express_1.Router)(); // Renamed to journalRouter
const journalController = new journalController_1.JournalController();
// Apply authMiddleware to all routes that require authentication
// journalRouter.use(authMiddleware);
journalRouter.get("/", journalController.getAllJournals);
journalRouter.get("/:id", journalController.getJournal);
journalRouter.post("/", journalController.createJournal);
journalRouter.put("/:id", journalController.updateJournal);
journalRouter.delete("/:id", journalController.deleteJournal);
exports.default = journalRouter;
