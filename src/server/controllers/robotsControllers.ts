import { NextFunction, Request, Response } from "express";
import Robot from "../../database/models/Robot";
import createCustomError from "../../utils/errors";

export const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find();

  res.status(200).json({ robots });
};

export const createRobot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newRobot = new Robot(req.body);

    await newRobot.save();
    res.status(200).json({ newRobot });

    next();
  } catch (error) {
    const customError = createCustomError(400, "Error creating robot");
    next(customError);
  }
};
