import { Router } from "express";
import { clientesRouter } from "./clientes";
import { jugadoresRouter } from "./jugadores";

export const configureRouter = () => {
  const router = Router();
  router.use("/clientes", clientesRouter());
  router.use("/jugadores", jugadoresRouter());
  return router;
};
