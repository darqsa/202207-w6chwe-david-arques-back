import "./loadEnvironment";
import startServer, { app } from "./server/startServer";
import connectDB from "./database";
import { generalError, notFoundError } from "./server/middlewares/errors";

const port = process.env.PORT ?? 6666;
const mongoUrl = process.env.DDBB;

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
