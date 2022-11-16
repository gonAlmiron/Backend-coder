import  {listAutos, createAuto, updateAuto, deleteAuto} from '../services/services.cars.js';

export const list = async (req, res) => {
    try {
        const getAll = await listAutos()
        res.json(getAll)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const single = async(req, res) => {
    try {
        const car = await listAutos({id: req.params.id})
        res.json(car)
    } catch (err) {
        res.status(400).json(err.message)
    }
    
}

export const created = async(req, res) => {
    try {
        await createAuto(req.body)
        res.status(200).send('Vehiculo guardado con exito');
    } catch (err) {
        res.status(400).json(err.message)
    }
    
}

export const updated = async(req, res) => {
    try {
        const {body} = req;
        const {id} = req.params;
        const carUpdate = await updateAuto(id, body)
        res.json(carUpdate)
    } catch (err) {
        res.status(400).json(err.message)
    }
    
}

export const deleted = async(req, res) => {
    try {
        const {id} = req.params;
        await deleteAuto(id)
        res.send(`Vehiculo con id ${id} eliminado con exito`)
    } catch (err) {
        res.status(400).json(err.message)
    }
    
}