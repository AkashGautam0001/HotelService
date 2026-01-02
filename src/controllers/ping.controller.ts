import { NextFunction, Request, Response } from "express";
import { AppError, InternalServerError } from "../utils/errors/app.error.js";

export const pingHandler = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.status(200).json({ message: "pong" });
  } catch (error) {
    throw new InternalServerError("Something went wrong");
  }
};

// Builder desgin pattern
// https://refactoring.guru/design-patterns/builder

// happy path
