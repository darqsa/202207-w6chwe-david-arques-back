import { NextFunction, Request, Response } from "express";

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({ error: "Endpoint not Found." });
  next();
};

export const generalError = (
  error: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  res.status(505).json({ error: "General pete" });
};
