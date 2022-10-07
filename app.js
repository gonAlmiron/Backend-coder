const fs = require('fs');
const path = require('path');

const nombreArchivo = 'productos.json';

const obtenerProductos = async () => {
    const dato = await fs.promises.readFileSync(nombreArchivo, 'utf-8')
    return JSON.parse(dato);

}

const guardarProductos = async (productos) => {
    const data = JSON.stringify(productos, null, '\t')
    await fs.promises.writeFileSync(nombreArchivo, data)
};
  


class Producto {
    constructor (nombre, id, precio) {
        this.nombre = nombre,
        this.id = id,
        this.precio = precio

    }
}

const productoUno = new Producto ("Mouse logitech", 1, 2000)


// FUNCION SAVE:

const save = async (data) => {

    const productos = await obtenerProductos();

    const nuevoProducto = {
        title: data.title,
        price: data.price,
        id: productos.length === 0 ? 1 : productos[productos.lenth -1].id +1
    }

    productos.push(nuevoProducto);

    await guardarProductos(productos)

}

save({
    title: "Memoria RAM DDR4 8GB Corsair",
    price: 13200
})

// FUNCION GET ALL:

const getAll = async () => {
    const productos = await obtenerProductos();
    return productos

}

getAll().then((data) => {
    console.log(data)
})


// FUNCION GET BY ID:

const getById = async (id) => {
    const arrayFinal = await obtenerProductos();

    const indice = arrayFinal.findIndex((product) => product.id === id);

    if (indice < 0) {
        throw new Error('El producto no existe')
    }
    return arrayFinal(indice)
}

// FUNCION DELETE ALL

const deleteAll = async () => {
    await guardarProductos([]);
}

// FUNCION DELETE BY ID

const deleteById = async (id) => {
    const productos = await obtenerProductos();

    const indice = productos.findIndex((product) => product.id === id)

    if(indice < 0){
        return;
    }

    productos.splice(indice, 1);

    await guardarProductos(productos)
 }