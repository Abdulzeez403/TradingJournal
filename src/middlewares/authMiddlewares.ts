import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

interface UserPayload {
  _id: string;
  email: string;
}

interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

const extractToken = (authorizationHeader?: string): string | null => {
  if (authorizationHeader && authorizationHeader.startsWith("Bearer")) {
    return authorizationHeader.split(" ")[1];
  }
  return null;
};

export const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = extractToken(req.headers.authorization);

    if (!token) {
      res.status(401).json({ message: "Access denied. No token provided." });
      return;
    }

    const decoded = jwt.verify(token, "12345675342") as UserPayload;

    try {
      const user = await User.findById(decoded._id).select("-password");
      if (!user) {
        res.status(401).json({ message: "User not found." });
        return;
      }
      req.user = user;
      next();
    } catch (dbError) {
      console.error("Database error:", dbError);
      res.status(500).json({ message: "Internal server error." });
    }
  } catch (err) {
    console.error("Authentication error:", err);
    if (err instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: "Token has expired." });
    } else {
      res.status(401).json({ message: "Invalid token.", error: err });
    }
  }
};
