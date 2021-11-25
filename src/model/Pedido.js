import { Schema } from "mongoose";

const pedidoSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  telefono: { type: String, required: true },
});
