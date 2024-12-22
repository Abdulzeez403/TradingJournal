import jwt from "jsonwebtoken";
import { config } from "../config/env";

const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET || "refresh_secret";
const ACCESS_TOKEN_EXPIRY = "15m"; // Set token expiry time
const REFRESH_TOKEN_EXPIRY = "7d"; // Set refresh token expiry time

export class TokenGenerator {
  // Generate access token
  static generateAccessToken(payload: object): string {
    return jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: "1h",
    });
  }

  // Generate refresh token
  static generateRefreshToken(payload: object): string {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
      expiresIn: REFRESH_TOKEN_EXPIRY,
    });
  }

  // Verify access token
  // static verifyAccessToken(token: string): object | null {
  //   try {
  //     return jwt.verify(token, ACCESS_TOKEN_SECRET);
  //   } catch (error) {
  //     return null; // Token is invalid or expired
  //   }
  // }

  //   // Verify refresh token
  //   static verifyRefreshToken(token: string): object | null {
  //     try {
  //       return jwt.verify(token, REFRESH_TOKEN_SECRET);
  //     } catch (error) {
  //       return null; // Token is invalid or expired
  //     }
  //   }
}
