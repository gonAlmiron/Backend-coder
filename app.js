const fs = require('fs');
const path = require('path');

const nombreArchivo = 'productos.json';

const obtenerProductos = () => {
    const dato = fs.readFileSync(nombreArchivo, 'utf-8');
    return JSON.parse(dato);
}

const getAll = () => {
    const productos = obtenerProductos();
    return productos
}

const getById = (idBuscado) => {
    const productos = obtenerProductos();

    const indice = productos.findIndex((unProducto) => unProducto.id === idBuscado);

    if (indice < 0) {
        throw new Error ("El producto no existe")
    }

    return productos(indice);
}

const resultado = getById(2);

console.log(resultado)