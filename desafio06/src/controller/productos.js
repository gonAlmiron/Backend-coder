const { uuid } = require('uuidv4');

class Productos {
	constructor() {
		this.productos = [{
			id: uuidv4(),
			nombre: "Mouse Logitech G-203",
			img: "",
			precio: 4500
		}];
	}
	getAll() {
		return this.productos;
	}

	save(data) {
		const nuevoProducto = {
			id: uuid(),
			nombre: data.nombre,
			img: data.img,
			precio: data.precio
		};
		this.productos.push(nuevoProducto)
		return nuevoProducto
	}
}

const productosController = new Productos();


module.exports = productosController;