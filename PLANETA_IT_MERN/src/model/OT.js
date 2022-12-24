import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  cliente: { type: String, required: true, unique: true },
  tecnico: { type: Number, required: true },
  descripcion: { type: String, required: true},
  fechaFinalizacion: { type: String, required: true },
  totalPresupuestado: { type: Number, required: true },
  estado: {type: String, required: true}
  // TIMESTAMPS
  
});

export const UserModel = model('user', UserSchema);