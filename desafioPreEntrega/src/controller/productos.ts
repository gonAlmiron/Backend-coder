// const {v4: uuidv4} = require('uuid');

// const createError = require('http-errors')

// const createError = require('http-errors')

// class ProductosAPI {
//     constructor() {
       
//         exists Number(id) {
        
//         const indice = this.productos.findIndex(aProduct => aProduct.id == id)
//         console.log(indice);
//         return indice >= 0;
//     }

//         validateBody(data: string) {
//             if(!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw createError(400, 'Datos invalidos')
//         }

//         getAll() {
//             return this.productos
//         }
    
//         getById(id) {
//             const exist = this.exists(id);

//             if (!exist) throw createError(404, 'El producto no existe');
            
//             const indice = this.productos.findIndex(aProduct => aProduct.id == id)

//             return this.productos(indice);

//         }

//         save(data) {
//             this.validateBody(data)

//             const nuevoProducto = {
//                 title: data.title,
//                 price: data.price,
//                 id: uuidv4(),
//             }

//             this.productos.push(nuevoProducto);
//             return nuevoProducto;
//         }

//         findByIdAndUpdate(id, datanueva) {
            
//             const exist = this.exists(id);
            
//             if (!exist) throw createError(404, 'El producto no existe');

//             this.validateBody();

//             const indice = this.productos.findIndex(aProduct => aProduct.id == id)

//             const oldProduct = this.productos[indice];

//             const nuevoProducto = {
//                 id: oldProduct.id,
//                 title: datanueva.title,
//                 price: datanueva.price
//             }

//             this.productos.splice(indice, 1, nuevoProducto)

//             return nuevoProducto;
//         }

//         findByIdAndDelete(id) {
        
//         const exist = this.exists(id);
//             if(!exist) return;

//             const indice = this.productos.findIndex(aProduct => aProduct.id == id)

//             this.productos.splice(indice, 1);

//         }
//     }


// const instanciaProductosApi = new ProductosAPI();

// module.exports = {
//     ProductosController : instanciaProductosApi
// }