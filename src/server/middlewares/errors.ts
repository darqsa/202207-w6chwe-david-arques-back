import chalk from "chalk";
import { debug } from "console";
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../types/errors";

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({ error: "Endpoint not Found." });
  next();
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const errorStatus = error.statusCode ?? 500;
  const publicErrorMessage = error.publicMessage ?? "General pete";
  const privateErrorMessage = error.privateMessage;

  debug(chalk.red(privateErrorMessage));

  res.status(errorStatus).json({ error: publicErrorMessage });
};
