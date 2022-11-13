const {v4: uuidv4} = require('uuid')
const createError = require('http-errors')
const fs = require('fs/promises');
const path = require('path')

const filePath = path.resolve(__dirname, '../../productos.json')
console.log(filePath)

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

   
    async exists(id) {
        const indice = await this.productos.findIndex((unProducto) => unProducto.id == id)
        
        return indice >= 0;
    }
    validateBody(data) {
		if(!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw createError(400,'Datos invalidos');
    }

    getAll() {

        return this.productos
    }


    getById (id) {

        const exist = this.exists(id);

       if(!exist) throw createError(404, 'El producto no existe')
        
       const indice = this.productos.findIndex(unProducto => unProducto.id == id)



    }

    // getById(id) {

    
    //    const exist = this.exists(id);

    //    if(!exist) throw createError(404, 'El producto no existe')
        
    //    const indice = this.productos.findIndex(unProducto => unProducto.id == id)
       
    //    return this.productos[indice];
    // }
    save(data) {
        this.validateBody(data);
        const nuevoProducto = {
			title: data.title,
			price: data.price,
			id: uuidv4(),
		}

		this.productos.push(nuevoProducto);
		return nuevoProducto;
    }
    getByIdAndUpdate(id, dataNueva) {
       
       const exist = this.exists(id);
       if(!exist) throw createError(404, 'El producto no existe')
       this.validateBody(dataNueva);

       const indice = this.productos.findIndex(unProducto => unProducto.id == id)
       
       const productoAntes = this.productos[indice];
       const nuevoProducto = {
        title: dataNueva.title, 
        price: dataNueva.price,
        id: productoAntes.id
    }
    this.productos.splice(indice, 1, nuevoProducto)

    return nuevoProducto

    }
    getByIdAndDelete(id) {
        const exist = this.exists(id);
        if(!exist) return;

        const indice = this.productos.findIndex(unProducto => unProducto.id == id)
        this.productos.splice(indice, 1)



    }

}

const instanciaProductosAPI = new ProductosAPI();

module.exports = {
    ProductosController: instanciaProductosAPI
}