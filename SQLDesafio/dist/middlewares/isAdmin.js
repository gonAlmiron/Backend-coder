"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var admin = true;
var isAdmin = function isAdmin(req, res, next) {
  if (admin) next();else res.status(401).json({
    msg: 'No autorizado'
  });
};
var _default = isAdmin;
exports["default"] = _default;