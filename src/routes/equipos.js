import { Router } from "express";

export const equiposRouter = () => {
  const router = Router();

  router.get("/", (req, res) => {
    res.json([{ name: "Racing" }, { name: "San Lorenzo" }]);
  });

  return router;
};
