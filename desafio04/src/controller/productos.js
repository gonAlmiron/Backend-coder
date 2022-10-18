const {v4: uuidv4} = require('uuid');
const createError = require('http-errors')

class ProductosAPI {
    constructor() {
        this.productos = [
            {
                id: uuidv4(),
                title: "Mouse Logitech",
                price: 2500,
                thumbnail: ''
            }
        ];
    }

        exists(id) {
        
        const indice = this.productos.findIndex(aProduct => aProduct.id == id)
        
        // if (indice > 0) {
        //     return false
        // } else {
        //     return true
        // }
        console.log(indice);
        return indice >= 0;
    }

        getAll() {
            return this.productos
        }
    
        getById(id) {
            const exist = this.exists(id);

            if (!exist) throw createError(404, 'El producto no existe');
            
            const indice = this.productos.findIndex(aProduct => aProduct.id == id)

            return this.productos(indice);

        }

        save() {
            
        }

        findByIdAndUpdate() {
            
        }

        findByIdAndDelete() {
        
        }
    }


const instanciaProductosApi = new ProductosAPI();

module.exports = {
    ProductosController : instanciaProductosApi
}