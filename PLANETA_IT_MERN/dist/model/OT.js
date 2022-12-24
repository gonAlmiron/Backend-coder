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
  tecnico: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fechaFinalizacion: {
    type: String,
    required: true
  },
  totalPresupuestado: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    required: true
  }
  // TIMESTAMPS
});

var UserModel = (0, _mongoose.model)('user', UserSchema);
exports.UserModel = UserModel;