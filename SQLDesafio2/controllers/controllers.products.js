import  {listProducts, createProduct, updateProduct, deleteProduct} from '../services/services.products.js';

export const list = async (req, res) => {
    try {
        const getAll = await listProducts()
        res.json(getAll)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const single = async(req, res) => {
    try {
        const car = await listProducts({id: req.params.id})
        res.json(car)
    } catch (err) {
        res.status(400).json(err.message)
    }
    
}

export const created = async(req, res) => {
    try {
        await createProduct(req.body)
        res.status(200).send('Vehiculo guardado con exito');
    } catch (err) {
        res.status(400).json(err.message)
    }
    
}

export const updated = async(req, res) => {
    try {
        const {body} = req;
        const {id} = req.params;
        const carUpdate = await updateProduct(id, body)
        res.json(carUpdate)
    } catch (err) {
        res.status(400).json(err.message)
    }
    
}

export const deleted = async(req, res) => {
    try {
        const {id} = req.params;
        await deleteProduct(id)
        res.send(`Vehiculo con id ${id} eliminado con exito`)
    } catch (err) {
        res.status(400).json(err.message)
    }
    
}