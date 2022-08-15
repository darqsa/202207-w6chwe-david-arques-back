import express from "express";
import cors from "cors";
import robotsRouter from "./routers/robotsRouter";
import { generalError, notFoundError } from "./middlewares/errors";

const app = express();

app.use(cors());

app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
