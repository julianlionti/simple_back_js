import { Router } from "express";
import { equiposRouter } from "./equipos";
import { jugadoresRouter } from "./jugadores";

export const configureRouter = () => {
  const router = Router();
  router.use("/equipos", equiposRouter());
  router.use("/jugadores", jugadoresRouter());
  return router;
};
