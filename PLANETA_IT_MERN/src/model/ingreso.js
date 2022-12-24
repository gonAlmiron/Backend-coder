import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  cliente: { type: String, required: true, unique: true },
  telefono: { type: Number, required: true },
  descripcion: { type: String, required: true},
  producto: { type: String, required: true },
  contraseña: { type: String, required: true },
  numeroOrden
  // TIMESTAMPS
});

export const UserModel = model('user', UserSchema);