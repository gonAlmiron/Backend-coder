"use strict";

var _server = _interopRequireDefault(require("./services/server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.PORT || 3001;
_server["default"].listen(PORT, function () {
  console.log("Servidor ON escuchando en puerto ".concat(PORT));
});