import { Router } from "express";
import { JournalController } from "../controller/journalController";
import { authMiddleware } from "../middlewares/authMiddlewares";

const journalRouter: Router = Router(); // Renamed to journalRouter

const journalController = new JournalController();
// Apply authMiddleware to all routes that require authentication
// journalRouter.use(authMiddleware);

journalRouter.get("/", authMiddleware, journalController.getAllJournals);
journalRouter.get("/:id", journalController.getJournal);
journalRouter.post("/", journalController.createJournal);
journalRouter.put("/:id", journalController.updateJournal);
journalRouter.delete("/:id", journalController.deleteJournal);

export default journalRouter;
