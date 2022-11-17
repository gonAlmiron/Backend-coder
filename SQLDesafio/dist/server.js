"use strict";

var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _routesCars = _interopRequireDefault(require("./routes/routes.cars.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 8080;
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use('/cars', _routesCars["default"]);
app.listen(PORT, function () {
  console.log("Servidor ON escuchando en el puerto ".concat(PORT));
});