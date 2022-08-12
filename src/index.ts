import "./loadEnvironment";
import connectDB from "./database";

const mongoUrl = process.env.DDBB;

(async () => {
  try {
    await connectDB(mongoUrl);
  } catch {
    process.exit(1);
  }
})();
