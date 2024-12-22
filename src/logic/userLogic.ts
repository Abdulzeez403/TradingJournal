import { Request, Response } from "express";
import UserService from "../services/userService";

const userService = new UserService();

export const getMultipleUsers = async (
  request: Request,
  response: Response
) => {
  const user = userService.getMultipleUsers();
  return response.status(404).json({ message: "Get All Users", user });
};

export const getUser = async (request: Request, response: Response) => {
  const userId = request.params.id;
  const data = userService.getUser(userId);
  return response.status(200).json({ message: "Get a Single User!", data });
};

export const updateUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { userData } = request.body;
  const data = userService.updateUser(id, userData);
  return response.status(200).json({ message: "Update a Single User!", data });
};

export const deleteUser = async (request: Request, response: Response) => {
  const { userId } = request.params;
  const data = userService.deleteUser(userId);
  return response.status(200).json({ message: "Delete a Single User!", data });
};
