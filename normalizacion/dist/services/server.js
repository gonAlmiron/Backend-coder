"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("../routes/index"));
var _http = _interopRequireDefault(require("http"));
var _expressHandlebars = require("express-handlebars");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use(_express["default"]["static"]('public'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
var viewsFolderPath = path.resolve(__dirname, '../../views');
var layoutsFolderPath = "".concat(viewsFolderPath, "/layouts");
var partialsFolderPath = "".concat(viewsFolderPath, "/partials");
var defaultLayoutPath = "".concat(layoutsFolderPath, "/index.hbs");
app.set('view engine', 'hbs');
app.set('views', viewsFolderPath);
app.engine('hbs', (0, _expressHandlebars.engine)({
  layoutsDir: layoutsFolderPath,
  extname: 'hbs',
  defaultLayout: defaultLayoutPath,
  partialsDir: partialsFolderPath
}));
app.use('/api', _index["default"]);
app.use(function (err, req, res, next) {
  return res.status('500').json({
    msg: 'There was an unexpected error',
    error: err.message
  });
});
var httpServer = _http["default"].Server(app);
var _default = httpServer;
exports["default"] = _default;