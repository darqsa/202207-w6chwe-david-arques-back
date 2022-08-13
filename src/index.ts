import "./loadEnvironment";
import { app, startServer } from "./server/startServer";
import connectDB from "./database";
import robotsRouter from "./server/routers/robotsRouter";

const port = process.env.PORT ?? 6666;
const mongoUrl = process.env.DDBB;

(async () => {
  try {
    await connectDB(mongoUrl);
    await startServer(port as number);
  } catch {
    process.exit(1);
  }
})();

app.use("/robots", robotsRouter);
