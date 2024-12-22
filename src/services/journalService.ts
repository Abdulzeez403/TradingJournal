import { Model } from "mongoose";
import { IJournal } from "../types/types";
import Journal from "../models/journalModel";
import { BadRequestException } from "../exceptions/error";

class JournalService {
  // Initializes and returns the Journal model
  initModel(): Model<IJournal> {
    return Journal;
  }

  // Creates a new journal entry
  async createJournal(journalData: Partial<IJournal>): Promise<IJournal> {
    try {
      const journal = new Journal(journalData);
      return await journal.save();
    } catch (error: any) {
      throw new Error(`Failed to create journal: ${error.message}`);
    }
  }

  // Fetches a journal entry by its ID
  async getJournal(journalId: string): Promise<IJournal | null> {
    try {
      const journal = await Journal.findById(journalId).exec();
      if (!journal) {
        throw new BadRequestException("Journal not found!");
      }
      return journal;
    } catch (error: any) {
      throw new Error(
        `Failed to fetch journal: ${journalId}: ${error.message}`
      );
    }
  }

  // Fetches all journal entries
  async getAllJournals(): Promise<IJournal[]> {
    try {
      return await Journal.find();
    } catch (error: any) {
      throw new Error(`Failed to fetch journals: ${error.message}`);
    }
  }

  // Updates an existing journal entry
  async updateJournal(
    journalId: string,
    journalData: Partial<IJournal>
  ): Promise<IJournal | null> {
    try {
      const journal = await Journal.findByIdAndUpdate(journalId, journalData, {
        new: true,
      }).exec();
      if (!journal) {
        throw new BadRequestException("Journal not found!");
      }
      return journal;
    } catch (error: any) {
      throw new Error(
        `Failed to update journal: ${journalId}: ${error.message}`
      );
    }
  }

  // Deletes a journal entry
  async deleteJournal(journalId: string): Promise<IJournal | null> {
    try {
      const journal = await Journal.findByIdAndDelete(journalId).exec();
      if (!journal) {
        throw new BadRequestException("Journal not found!");
      }
      return journal;
    } catch (error: any) {
      throw new Error(
        `Failed to delete journal: ${journalId}: ${error.message}`
      );
    }
  }
}

export default JournalService;
