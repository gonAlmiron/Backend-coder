"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cookieParser["default"])());
app.use(_express["default"].json());
app.get('/cookie', function (req, res) {
  res.cookie('Nombre', 'Gonzalo').send('Nombre creado');
});
var _default = app;
exports["default"] = _default;