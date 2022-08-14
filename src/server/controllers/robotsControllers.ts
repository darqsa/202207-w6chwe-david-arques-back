import { Request, Response } from "express";
import Robot from "../../database/models/Robot";
import { RobotDBResponse } from "../../types/interfaces";
import parseRobotDB from "../../utils/parseRobotDB";

const getRobots = async (req: Request, res: Response) => {
  const robotsDB = await Robot.find();

  const robots = robotsDB.map((robot) =>
    parseRobotDB(robot as RobotDBResponse)
  );

  res.status(200).json({ robots });
};

export default getRobots;
