import express from "express";
import { configureRouter } from "../routes/api";

export const configureServer = () => {
  const app = express();

  app.listen(5000, () => {
    console.log("App running on port 5000");
  });

  app.use("/api", configureRouter());

  return app;
};
