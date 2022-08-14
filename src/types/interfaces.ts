import { Types } from "mongoose";

export interface CustomError extends Error {
  statusCode: number;
  publicMessage?: string;
  privateMessage?: string;
}

export interface RobotDBResponse {
  _id: Types.ObjectId;
  image: string;
  name: string;
  stats: {
    strength: number;
    speed: number;
    creationDate: Date;
  };
}
