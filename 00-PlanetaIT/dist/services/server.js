"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
var _config = _interopRequireDefault(require("../config"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _routes = _interopRequireDefault(require("../routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ttlSeconds = 180;
var StoreOptions = {
  store: _connectMongo["default"].create({
    mongoUrl: _config["default"].MONGO_ATLAS_URL
    // crypto: {
    //   secret: 'squirrel',
    // },
  }),

  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000
  }
};
var app = (0, _express["default"])();
var mySecret = 'mySecret';
app.use((0, _expressSession["default"])(StoreOptions));
app.use((0, _cookieParser["default"])(mySecret));
app.use(_express["default"]["static"]('public'));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use('/api', _routes["default"]);
var _default = app;
exports["default"] = _default;