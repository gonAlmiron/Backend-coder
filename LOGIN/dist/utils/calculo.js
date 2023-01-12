"use strict";

var random = function random() {
  var cantidad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10000000;
  var salida = [];
  for (var i = 0; i < 100000000; i++) {
    salida.push(Math.random());
  }
};
process.on('message', function (cantidad) {
  if (!cantidad) random();else random(cantidad);
});