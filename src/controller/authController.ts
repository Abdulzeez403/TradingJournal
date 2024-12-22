import { login, register } from "../logic/authLogic";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

export class AuthController {
  register = asyncHandler(async (request: Request, response: Response) => {
    const data = await register(request, response);
    response.status(200).json({ message: "Registered Successfully!", data });
  });

  login = asyncHandler(async (request: Request, response: Response) => {
    try {
      // Call login logic and return data
      const data = await login(request, response);

      // Send the response
      response.status(200).json({ message: "Login Successful!", data });
    } catch (error: any) {
      // Handle errors and send proper error response
      response.status(500).json({ message: error.message || "Login failed." });
    }
  });
}
