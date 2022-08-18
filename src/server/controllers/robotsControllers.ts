import { NextFunction, Request, Response } from "express";
import Robot from "../../database/models/Robot";
import User from "../../database/models/User";
import createCustomError from "../../utils/errors";
import { CustomRequest } from "../middlewares/authentication";

export const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find().populate("owner", {
    userName: 1,
  });

  res.status(200).json({ robots });
};

export const createRobot = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const robot = req.body;

  robot.owner = robot.payload.id;

  try {
    const newRobot = await Robot.create(robot);

    const user = await User.findById(req.payload.id);
    user.robots.push(newRobot.id);
    await user.save();

    res.status(200).json({ newRobot });

    next();
  } catch (error) {
    const customError = createCustomError(400, "Error creating robot");
    next(customError);
  }
};
