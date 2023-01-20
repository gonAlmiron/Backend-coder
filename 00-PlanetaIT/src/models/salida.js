import { Schema, model } from 'mongoose';

const SalidaSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  tecnico: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha: { type: String, required: true },
  numOrden: { type: String, required: true },
  precio: {type: Number, required: true}
});

export const SalidaModel = model('salida', SalidaSchema);