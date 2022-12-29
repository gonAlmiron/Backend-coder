import {CartModel} from '../models/cart'

export const getAllCarts = async (req, res) => {

    try{
        console.log(this)
        const carts = await CartModel.find();

        res.json({
            data: carts
        })

    } catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack
        })
    }
}

export const getCartById = async (req, res) => {

try{ 

    const {id} = req.params;
    
    const item = await CartModel.findById(id);
    
    if (!item)
        return res.status(404).json({
            msg: 'Cart not found'
        })
    
    res.json({
        data: item
    })
} catch(err) {
    res.status(500).json({
        error: err.message,
        stack: err.stack
    })
}


}

export const createCart = async (req, res) => {

try {

    const {name, description} = req.body;

    if (!name || !description)
        return res.status(400).json({
            msg: 'Datos invalidos en el Body'
        })

    const newCart = await CartModel.create({
        name,
        description
    })

    res.json({
        data: newCart
    })

} catch(err) {
    res.status(500).json({
        error: err.message,
        stack: err.stack
    })
}

}

export const updateCart = async (req, res) => {

try {
    const {id} = req.params;
    const {name, description} = req.body;

    if (!name || !description)
    return res.status(400).json({
        msg: 'Datos invalidos en el Body'
    })

    const cartUpdated = await CartModel.findByIdAndUpdate(
        id,
        {name, description},
        {new: true}
    );

    res.json({
        msg: 'Cart updated',
        cart: cartUpdated
    })

    
} catch(err) {
    res.status(500).json({
        error: err.message,
        stack: err.stack
    })
}
}

export const deleteCart = async (req, res) => {

try {

const {id} = req.params

await CartModel.findByIdAndDelete(id)

res.json({
    msg: 'Cart deleted'
})
    
} catch(err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack
        })
    }
}

