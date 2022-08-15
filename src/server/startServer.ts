import Debug from "debug";
import chalk from "chalk";
import app from ".";

const debug = Debug("robots:server:index");

const startServer = (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.blue(`Server listening on http://localhost:${port}`));
      resolve(true);
    });

    server.on("error", (error) => {
      debug(`Error conecting to database: ${error}`);
      reject(error);
    });
  });

export default startServer;
