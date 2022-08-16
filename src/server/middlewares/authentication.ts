import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import createCustomError from "../../utils/errors";
import { verifyToken } from "../../utils/auth";

interface CustomRequest extends Request {
  payload: JwtPayload;
}

const authentication = (
  req: CustomRequest,
  _res: Response,
  next: NextFunction
) => {
  const dataAuthentication = req.get("Authorization");
  const error = createCustomError(400, "Authentication error");

  if (!dataAuthentication || !dataAuthentication.startsWith("Bearer")) {
    next(error);
    return;
  }
  const token = dataAuthentication.slice(7);
  const tokenData = verifyToken(token);

  if (typeof tokenData === "string") {
    next(error);
    return;
  }
  req.payload = tokenData as JwtPayload;
  next();
};
export default authentication;
