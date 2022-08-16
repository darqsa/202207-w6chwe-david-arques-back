import express from "express";
import { createRobot, getRobots } from "../controllers/robotsControllers";
import authentication from "../middlewares/authentication";

const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.post("/create", authentication, createRobot);

export default robotsRouter;
