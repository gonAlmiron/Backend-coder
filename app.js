const fs = require('fs');
const path = require('path');



class Producto {
    constructor (nombre, id, precio) {
        this.nombre = nombre,
        this.id = id,
        this.precio = precio

    }
}

const productoUno = new Producto ("Mouse logitech", 1, 2000)
const productoDos = new Producto ("Mouse Genius", 2, 1500)
const productoTres = new Producto ("Teclado Logitech", 3, 3400)
const productoCuatro = new Producto ("Mouse Pad Corsair", 4, 7500)
