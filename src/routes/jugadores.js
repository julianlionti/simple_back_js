import { Router } from "express";

export const jugadoresRouter = () => {
  const router = Router();

  router.get("/", (req, res) => {
    res.json([{ name: "Diego Milito" }, { name: "Lisandro Lopez" }]);
  });

  return router;
};
