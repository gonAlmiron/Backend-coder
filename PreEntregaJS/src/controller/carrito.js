const {v4: uuidv4} = require('uuid');
const createError = require('http-errors')

class CarritoAPI {
    constructor() {
        this.productos = [
            {
                title: "Mouse Logitech M203",
                price: 7500,
                id: 1
            },
            {
                title: "Teclado Corsair K65",
                price: 21000,
                id: 2
            }
        ];
    }

        exists(id) {
        
        const indice = this.productos.findIndex(aProduct => aProduct.id == id)
        console.log(indice);
        return indice >= 0;
    }

        getAll() {
            return this.productos
        }
    
        getById(id) {
            const exist = this.exists(id);

            if (!exist) throw createError(404, 'El producto no existe');
            
			const products = this.getAll()
            const indice = products.findIndex((aProduct) => aProduct.id === id)

			
			
            return JSON.parse(indice);

        }

        save(data) {
            const nuevoCarrito = {
                title: data.title,
                price: data.price,
                id: uuidv4(),
            }

            this.productos.push(nuevoCarrito);
            return nuevoCarrito;
        }

        findByIdAndUpdate(id, datanueva) {
            
            const exist = this.exists(id);
            
            if (!exist) throw createError(404, 'El producto no existe');


            const indice = this.productos.findIndex(aProduct => aProduct.id == id)

            const oldProduct = this.productos[indice];

            const nuevoProducto = {
                id: oldProduct.id,
                title: datanueva.title,
                price: datanueva.price
            }

            this.productos.splice(indice, 1, nuevoProducto)

            return nuevoProducto;
        }

        findByIdAndDelete(id) {
        
        const exist = this.exists(id);
            if(!exist) return;

            const indice = this.productos.findIndex(aProduct => aProduct.id == id)

            this.productos.splice(indice, 1);

        }
    }


const instanciaCarritoApi = new CarritoAPI();

module.exports = {
    CarritoController : instanciaCarritoApi
}