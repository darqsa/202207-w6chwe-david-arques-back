import { Request, Response } from "express";

const getRobots = (req: Request, res: Response) => {
  res.status(200).json({ getRobots: "this is getRobots" });
};

export default getRobots;
