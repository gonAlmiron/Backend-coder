"use strict";

var _minimist = _interopRequireDefault(require("minimist"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log('BUUUUUUENAS');
var optionalArgsObject = {
  alias: {
    h: 'help',
    m: 'modo',
    p: 'port'
  },
  "default": {
    port: 6100,
    cluster: false,
    modo: 'prod'
  }
};
var args = (0, _minimist["default"])(process.argv.slice(2), optionalArgsObject);
console.log(args);