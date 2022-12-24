import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  cliente: { type: String, required: true, unique: true },
  producto: {type: String, required: true},
  numeroOrden: {type: Number, required: true},
  estado: {type: String, required: true},
  fechaIngreso: {type: Date, required: true}
  // TIMESTAMPS
});

export const UserModel = model('user', UserSchema);