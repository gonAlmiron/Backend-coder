const {v4: uuidv4} = require('uuid');

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

        getAll() {
            return this.productos
        }
    
    }


const instanciaProductosApi = new ProductosAPI();

module.exports = {
    ProductosController : instanciaProductosApi
}