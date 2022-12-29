"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _passport = _interopRequireDefault(require("passport"));
var _express = require("express");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
var passportOptions = {
  badRequestMessage: 'Falta username / password'
};
var isLoggedIn = function isLoggedIn(req, res, next) {
  console.log('Is Authenticated');
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated()) return res.status(401).json({
    msg: 'Unathorized'
  });
  next();
};
router.post('/signup', function (req, res, next) {
  _passport["default"].authenticate('signup', passportOptions, function (err, user, info) {
    console.log('Info SIGNUP');
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);
    res.json({
      msg: 'signup OK'
    });
  })(req, res, next);
});
router.post('/login', _passport["default"].authenticate('login', passportOptions), function (req, res) {
  res.render('datos');
});
router.get('/login', function (req, res) {
  res.render('login');
});
router.get('/signup', function (req, res) {
  res.render('signup');
});
router.get('/datos', function (req, res) {
  var userData = req.user;
  res.render('datos', {
    nombre: userData.username
  });
});
router.get('/info', function (req, res) {});
var _default = router;
exports["default"] = _default;