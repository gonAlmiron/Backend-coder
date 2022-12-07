"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productCollectionName = exports.ProductModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var productCollectionName = 'product';
exports.productCollectionName = productCollectionName;
var productSchema = new _mongoose["default"].Schema({
  author: {
    id: 'mail del usuario',
    nombre: 'nombre del usuario',
    apellido: 'apellido del usuario',
    edad: 'edad del usuario',
    alias: 'alias del usuario',
    avatar: 'url avatar (foto) del usuario'
  },
  text: 'mensaje del usuario'
}, {
  timestamps: true,
  versionKey: false
});
var ProductModel = _mongoose["default"].model(productCollectionName, productSchema);
exports.ProductModel = ProductModel;