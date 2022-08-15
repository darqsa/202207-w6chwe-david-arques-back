import { NextFunction, Request, Response } from "express";
import Robot from "../../database/models/Robot";
import { RobotDBResponse } from "../../types/interfaces";
import createCustomError from "../../utils/errors";
import parseRobotDB from "../../utils/parseRobotDB";

export const getRobots = async (req: Request, res: Response) => {
  const robotsDB = await Robot.find();

  const robots = robotsDB.map((robot) =>
    parseRobotDB(robot as RobotDBResponse)
  );

  res.status(200).json({ robots });
};

export const createRobot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const robot = req.body;

  try {
    const newRobot = await Robot.create(robot);

    res.status(201).json({ robot: newRobot });
  } catch (error) {
    const customError = createCustomError(400, "Error creating robot");
    next(customError);
  }
};
