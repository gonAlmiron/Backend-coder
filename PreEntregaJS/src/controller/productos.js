const { uuid } = require('uuidv4');
const createError = require('http-errors')

class ProductosAPI {
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
            const nuevoProducto = {
                title: data.title,
                price: data.price,
                id: 4
            }

            this.productos.push(nuevoProducto);
            return nuevoProducto;
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


const instanciaProductosApi = new ProductosAPI();

module.exports = {
    ProductosController : instanciaProductosApi
}