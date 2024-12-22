import { Request, Response } from "express";
import JournalService from "../services/journalService"; // Updated to use journalService

const journalService = new JournalService();

// Get all journals
export const getAllJournals = async (request: Request, response: Response) => {
  try {
    const journals = await journalService.getAllJournals();
    return response.status(200).json({ message: "Get All Journals", journals });
  } catch (error: any) {
    return response
      .status(500)
      .json({ message: "Failed to fetch journals", error: error.message });
  }
};

// Get a single journal
export const getJournal = async (request: Request, response: Response) => {
  try {
    const journalId = request.params.id;
    const journal = await journalService.getJournal(journalId);
    return response
      .status(200)
      .json({ message: "Get a Single Journal", journal });
  } catch (error: any) {
    return response
      .status(404)
      .json({ message: "Journal not found", error: error.message });
  }
};

// Create a new journal
export const createJournal = async (request: Request, response: Response) => {
  try {
    const journalData = request.body;
    // const image = await mapFiles(images);
    // const journalDatas = {
    //   ...journalData,
    //   images: image,
    // };
    const journal = await journalService.createJournal(journalData);
    return response
      .status(201)
      .json({ message: "Journal Created Successfully", journal });
  } catch (error: any) {
    return response
      .status(400)
      .json({ message: "Failed to create journal", error: error.message });
  }
};

// Update a journal
export const updateJournal = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const journalData = request.body;
    const updatedJournal = await journalService.updateJournal(id, journalData);
    return response
      .status(200)
      .json({ message: "Journal Updated Successfully", updatedJournal });
  } catch (error: any) {
    return response
      .status(400)
      .json({ message: "Failed to update journal", error: error.message });
  }
};

// Delete a journal
export const deleteJournal = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const deletedJournal = await journalService.deleteJournal(id);
    return response
      .status(200)
      .json({ message: "Journal Deleted Successfully", deletedJournal });
  } catch (error: any) {
    return response
      .status(404)
      .json({ message: "Failed to delete journal", error: error.message });
  }
};
