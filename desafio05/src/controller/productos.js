const { v4: uuidv4 } = require('uuid');

class Productos {
	constructor() {
		this.productos = [{
			id: uuidv4(),
			nombre: "Mouse Logitech G203",
			img: "",
			precio: 4500
		}];
	}
	getAll() {
		return this.productos;
	}

	save(data) {
		const nuevoProducto = {
			id: uuidv4(),
			nombre: data.nombre,
			img: data.img,
			precio: data.precio
		};
		this.productos.push(nuevoProducto)
	}
}

const productosController = new Productos();


module.exports = productosController;