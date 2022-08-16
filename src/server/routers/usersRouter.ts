import express from "express";
import loginUser from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/login", loginUser);

export default usersRouter;
