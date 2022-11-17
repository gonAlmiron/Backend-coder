"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllersCars = require("../controllers/controllers.cars.js");
var _isAdmin = _interopRequireDefault(require("../middlewares/isAdmin.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post('/', _isAdmin["default"], _controllersCars.created);
router.get('/', _controllersCars.list);
router.get('/:id', _isAdmin["default"], _controllersCars.single);
router.put('/:id', _isAdmin["default"], _controllersCars.updated);
router["delete"]('/:id', _isAdmin["default"], _controllersCars.deleted);
var _default = router;
exports["default"] = _default;