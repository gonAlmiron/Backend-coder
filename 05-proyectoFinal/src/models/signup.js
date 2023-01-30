import { Schema, model } from 'mongoose';

const SignupSchema = new Schema({
  usuario: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true}
}
);


export const SignupModel = model('signup', SignupSchema);