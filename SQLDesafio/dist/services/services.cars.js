"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAuto = exports.listAutos = exports.deleteAuto = exports.createAuto = void 0;
var _db = _interopRequireDefault(require("../db.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var listAutos = function listAutos() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _db["default"])('cars').where(id).select('*');
};
exports.listAutos = listAutos;
var createAuto = function createAuto(obj) {
  return (0, _db["default"])('cars').insert(obj);
};
exports.createAuto = createAuto;
var updateAuto = function updateAuto(id, obj) {
  return (0, _db["default"])('cars').where('id', id).update(obj);
};
exports.updateAuto = updateAuto;
var deleteAuto = function deleteAuto(id) {
  return (0, _db["default"])('cars').where('id', id).del();
};
exports.deleteAuto = deleteAuto;