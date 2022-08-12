import "./loadEnvironment";
import startServer from "./server/startServer";

const port = process.env.PORT ?? 6666;

(async () => {
  await startServer(port as number);
})();
