import "./loadEnvironment";
import startServer from "./server/startServer";
import connectDB from "./database";

const port = process.env.PORT ?? 4444;
const mongoUrl = process.env.DDBB;

(async () => {
  try {
    await connectDB(mongoUrl);
    await startServer(port as number);
  } catch {
    process.exit(1);
  }
})();
