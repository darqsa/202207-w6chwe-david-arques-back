import jwt from "jsonwebtoken";
import "../loadEnvironment";

export interface JWTPayload {
  id: string;
  userName: string;
}

export const createToken = (payload: JWTPayload) =>
  jwt.sign(payload, process.env.SECRET);

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.SECRET);
