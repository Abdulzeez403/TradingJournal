import {
  getMultipleUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../logic/userLogic";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

export class UserController {
  getMultipleUsers = asyncHandler(
    async (request: Request, response: Response) => {
      const data = await getMultipleUsers(request, response);
      response.status(200).json({ message: "Get Users Successfully", data });
    }
  );

  getUser = asyncHandler(async (request: Request, response: Response) => {
    const data = await getUser(request, response);
    response.status(200).json({ message: "Get User Successfully", data });
  });

  updateUser = asyncHandler(async (request: Request, response: Response) => {
    const data = await updateUser(request, response);
    response.status(200).json({ message: "Update User Successfully", data });
  });

  deleteUser = asyncHandler(async (request: Request, response: Response) => {
    const data = await deleteUser(request, response);
    response.status(200).json({ message: "Delete User Successfully", data });
  });
}
