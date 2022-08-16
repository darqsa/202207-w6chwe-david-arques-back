import { Request, Response } from "express";
import { createToken, JWTPayload } from "../../utils/auth";

const loginUser = (req: Request, res: Response) => {
  interface LoginData {
    userName: string;
    passWord: string;
  }

  const user = req.body as LoginData;

  const payload: JWTPayload = {
    id: "32748234824324",
    userName: user.userName,
  };

  const responseData = {
    user: { token: createToken(payload) },
  };

  res.status(200).json(responseData);
};
export default loginUser;
