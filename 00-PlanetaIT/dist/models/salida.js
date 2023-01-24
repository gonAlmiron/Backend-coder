"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SalidaModel = void 0;
var _mongoose = require("mongoose");
var SalidaSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  tecnico: {
    type: String,
    required: true
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
  precio: {
    type: Number,
    required: true
  }
});
var SalidaModel = (0, _mongoose.model)('salida', SalidaSchema);
exports.SalidaModel = SalidaModel;