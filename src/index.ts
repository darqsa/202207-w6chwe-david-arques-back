import "./loadEnvironment";
import cors from "cors";
import { app, startServer } from "./server/startServer";
import connectDB from "./database";
import robotsRouter from "./server/routers/robotsRouter";
import { generalError, notFoundError } from "./server/middlewares/errors";

const port = process.env.PORT ?? 4444;
const mongoUrl = process.env.DDBB;

app.use(cors());

app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);

(async () => {
  try {
    await connectDB(mongoUrl);
    await startServer(port as number);
  } catch {
    process.exit(1);
  }
})();
