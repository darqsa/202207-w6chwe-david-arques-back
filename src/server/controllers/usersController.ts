import { debug } from "console";
import { NextFunction, Request, Response } from "express";
import User from "../../database/models/User";
import {
  compareHash,
  createHash,
  createToken,
  JWTPayload,
} from "../../utils/auth";
import createCustomError from "../../utils/errors";

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body as LoginData;
  interface UserData {
    userName: string;
    passWord: string;
    id: string;
  }
  let findUser: UserData[];
  const userError = createCustomError(403, "Incorrect user or password");
  const catchedError = createCustomError(403, "Invalid user or password");
  try {
    findUser = await User.find({ userName: user.userName });
    if (findUser.length === 0) {
      next(userError);
      return;
    }
  } catch (error) {
    next(catchedError);
    return;
  }

  try {
    const isPassWordvalid = await compareHash(
      user.passWord,
      findUser[0].passWord
    );
    if (!isPassWordvalid) {
      userError.message = "Password Invalid";
      next(userError);
      return;
    }
  } catch (error) {
    next(catchedError);
    return;
  }

  interface LoginData {
    userName: string;
    passWord: string;
  }

  const payload: JWTPayload = {
    userName: findUser[0].userName,
    id: findUser[0].id,
  };

  const responseData = {
    user: { token: createToken(payload) },
  };

  res.status(200).json(responseData);
};

interface UserRegister {
  userName: string;
  passWord: string;
}

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: UserRegister = req.body;

  user.passWord = await createHash(user.passWord);
  try {
    const newUser = await User.create(user);
    res.status(201).json({ user: newUser });
  } catch (error) {
    const customError = createCustomError(400, "Error creating user");
    next(customError);
  }
};
