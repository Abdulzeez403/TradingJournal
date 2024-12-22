import {
  getAllJournals,
  getJournal,
  createJournal,
  updateJournal,
  deleteJournal,
} from "../logic/journalLogic";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

export class JournalController {
  getAllJournals = asyncHandler(
    async (request: Request, response: Response) => {
      const data = await getAllJournals(request, response);
      response.status(200).json({ message: "Get Journals Successfully", data });
    }
  );

  getJournal = asyncHandler(async (request: Request, response: Response) => {
    const data = await getJournal(request, response);
    response.status(200).json({ message: "Get Journal Successfully", data });
  });

  createJournal = asyncHandler(async (request: Request, response: Response) => {
    const data = await createJournal(request, response);
    response.status(201).json({ message: "Create Journal Successfully", data });
  });

  updateJournal = asyncHandler(async (request: Request, response: Response) => {
    const data = await updateJournal(request, response);
    response.status(200).json({ message: "Update Journal Successfully", data });
  });

  deleteJournal = asyncHandler(async (request: Request, response: Response) => {
    const data = await deleteJournal(request, response);
    response.status(200).json({ message: "Delete Journal Successfully", data });
  });
}
