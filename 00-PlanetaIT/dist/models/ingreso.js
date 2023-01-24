"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IngresoModel = void 0;
var _mongoose = require("mongoose");
var IngresoSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  telefono: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  descripcion: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  numOrden: {
    type: String,
    required: true
  },
  contraseña: {
    type: String
  }
});
var IngresoModel = (0, _mongoose.model)('ingreso', IngresoSchema);
exports.IngresoModel = IngresoModel;