const {v4: uuidv4} = require('uuid')
const createError = require('http-errors')

class ProductosAPI {
    constructor() {
        this.productos = [
            {
                title: "remera",
                price: 1500,
                id: uuidv4()
               
            }
        ];
    }

    exists(id) {
        const indice = this.productos.findIndex((unProducto) => unProducto.id == id)
        
        return indice >= 0;
    }

    getAll() {
        return this.productos
    }

    getById(id) {

    
       const exist = this.exists(id);

       if(!exist) throw createError(404, 'El producto no existe')
        
       const indice = this.productos.findIndex((unProducto) => unProducto.id == id)
       
       return this.productos[indice];
    }
    save(id) {
        return 'save product'
    }
    getByIdAndUpdate(id) {
        return 'get by id and update'
    }
    getByIdAndDelete(id) {
        return 'get by id and delete'
    }

}

const instanciaProductosAPI = new ProductosAPI();

module.exports = {
    ProductosController: instanciaProductosAPI
}