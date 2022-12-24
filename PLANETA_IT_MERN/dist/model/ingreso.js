"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;
var _mongoose = require("mongoose");
var UserSchema = new _mongoose.Schema({
  cliente: {
    type: String,
    required: true,
    unique: true
  },
  telefono: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  producto: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  },
  numeroOrden: numeroOrden
  // TIMESTAMPS
});

var UserModel = (0, _mongoose.model)('user', UserSchema);
exports.UserModel = UserModel;