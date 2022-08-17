import jwt from "jsonwebtoken";
import "../loadEnvironment";
import bcrypt from "bcryptjs";

export interface JWTPayload {
  id: string;
  userName: string;
}

export const createToken = (payload: JWTPayload) =>
  jwt.sign(payload, process.env.SECRET);

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.SECRET);

export const createHash = (text: string) => {
  const salt = 10;
  return bcrypt.hash(text, salt);
};

export const compareHash = (text: string, hash: string) =>
  bcrypt.compare(text, hash);
