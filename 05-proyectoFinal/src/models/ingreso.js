import { Schema, model } from 'mongoose';

const IngresoSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  email: { type: String},
  descripcion: { type: String, required: true },
  fecha: { type: String, required: true },
  numOrden: { type: String, required: true },
  contraseña: {type: String, }
});

export const IngresoModel = model('ingreso', IngresoSchema);