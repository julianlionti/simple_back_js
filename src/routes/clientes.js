import { Router } from "express";
import { ClienteModel } from "../model/Cliente";

export const clientesRouter = () => {
  const router = Router();

  router.get("/", async (req, res) => {
    const clientes = await ClienteModel.find();
    res.json(clientes);
  });

  router.post("/", async (req, res) => {
    const { body } = req;

    const { nombre, apellido, numero } = body;

    const check = await ClienteModel.findOne({ nombre, apellido });
    if (!check) {
      const nuevoCliente = await ClienteModel.create({
        nombre,
        apellido,
        numero,
      });
    }

    res.json(nuevoCliente);
  });

  return router;
};
