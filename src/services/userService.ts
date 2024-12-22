import { Model } from "mongoose";
import { IUser } from "../types/types";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import { BadRequestException } from "../exceptions/error";

class UserService {
  initModel(): Model<IUser> {
    return User;
  }

  async create(userData: Partial<IUser>): Promise<IUser> {
    try {
      const existingUser = await User.findOne({
        email: userData.email,
      });

      if (existingUser) {
        throw new BadRequestException("Email already exist!");
      }

      const user = new User(userData);
      return await user.save();
    } catch (error: any) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
  }

  async getUser(userId: string): Promise<any | null> {
    try {
      const user = await User.findById({ userId }).select("-password").exec();
      if (!user) {
        throw new BadRequestException("No User Found!");
      }
    } catch (error: any) {
      throw new Error(`Failed to create user: ${userId} : ${error.message}`);
    }
  }

  async getMultipleUsers(): Promise<IUser[] | null> {
    try {
      return await User.find();
    } catch (error: any) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
  }

  async updateUser(
    id: string,
    userData: Partial<IUser>
  ): Promise<IUser | null> {
    try {
      const user = await User.findByIdAndUpdate(id, userData, {
        new: true,
      }).exec();
      return user;
    } catch (error: any) {
      throw new Error(`Failed to create user: ${id} : ${error.message}`);
    }
  }

  async deleteUser(userId: string) {
    try {
      const user = await User.findByIdAndDelete(userId).exec();
      return user;
    } catch (error: any) {
      throw new Error(`Failed to create user: ${userId}: ${error.message}`);
    }
  }

  async validatePassword(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
      throw new Error(`Failed to validate password:`);
    }
  }
}

export default UserService;
