"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.get('/api', function (req, res) {
  res.json({
    msg: "Hola desde el servidor API"
  });
});
var _default = app;
exports["default"] = _default;