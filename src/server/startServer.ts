import express from "express";
import Debug from "debug";
import chalk from "chalk";

const debug = Debug("robots:server:index");

export const app = express();

export const startServer = (port: number) =>
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
