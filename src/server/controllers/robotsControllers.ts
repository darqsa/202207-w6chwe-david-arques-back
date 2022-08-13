import { Request, Response } from "express";
import Robot from "../../database/models/Robot";

const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find();

  res.status(200).json({ robots });
};

export default getRobots;
