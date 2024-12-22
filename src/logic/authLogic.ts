import { Request, Response } from "express";
import { BadRequestException } from "../exceptions/error";
import UserService from "../services/userService";
import User from "../models/userModel";
import jwt from "jsonwebtoken";

const userService = new UserService();

export const register = async (request: Request, response: Response) => {
  try {
    const values = request.body;
    const user = await userService.create(values);

    return response.status(201).json({
      message: "Registration successful!",
      data: user,
    });
  } catch (error: any) {
    return response.status(400).json({
      message: error.message || "Registration failed",
    });
  }
};

export const login = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new BadRequestException("Invalid email or password");
    }

    const isPasswordValid = await userService.validatePassword(
      password,
      user.password
    );
    if (!isPasswordValid) {
      throw new BadRequestException("Invalid email or password");
    }

    const token = jwt.sign({ _id: user.id, email: user.email }, "12345675342", {
      expiresIn: "1h",
    });

    return response.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error: any) {
    return response.status(400).json({
      message: error.message || "Login failed",
    });
  }
};
