"use strict";

var _server = _interopRequireDefault(require("./services/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 8080;

_server["default"].listen(PORT, function () {
  console.log("servidor ON escuchando en puerto ".concat(PORT));
});