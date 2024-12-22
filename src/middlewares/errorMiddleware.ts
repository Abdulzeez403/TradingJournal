import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack); // Log the error stack (for debugging)
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    error: {
      message: err.message || "Internal Server Error",
      status: statusCode,
    },
  });
};
