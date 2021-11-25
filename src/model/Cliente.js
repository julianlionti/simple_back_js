import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  numero: { type: String, required: true },
});

export const ClienteModel = mongoose.model("cliente", clienteSchema);
