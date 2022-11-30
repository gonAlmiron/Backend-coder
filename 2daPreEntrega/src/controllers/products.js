import {ProductModel} from '../models/products'

export const getAllProducts = async (req, res) => {

    try{
        console.log(this)
        const products = await ProductModel.find();

        res.json({
            data: products
        })

    } catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack
        })
    }
}

export const getProductById = async (req, res) => {

try{ 

    const {id} = req.params;
    
    const item = await ProductModel.findById(id);
    
    if (!item)
        return res.status(404).json({
            msg: 'Product not found'
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

export const createProduct = async (req, res) => {

try {

    const {name, description} = req.body;

    if (!name || !description)
        return res.status(400).json({
            msg: 'Datos invalidos en el Body'
        })

    const newProduct = await ProductModel.create({
        name,
        description
    })

    res.json({
        data: newProduct
    })

} catch(err) {
    res.status(500).json({
        error: err.message,
        stack: err.stack
    })
}

}

export const updateProduct = async (req, res) => {

try {
    const {id} = req.params;
    const {name, description} = req.body;

    if (!name || !description)
    return res.status(400).json({
        msg: 'Datos invalidos en el Body'
    })

    const productUpdated = await ProductModel.findByIdAndUpdate(
        id,
        {name, description},
        {new: true}
    );

    res.json({
        msg: 'Product updated',
        product: productUpdated
    })

    
} catch(err) {
    res.status(500).json({
        error: err.message,
        stack: err.stack
    })
}
}

export const deleteProduct = async (req, res) => {

try {

const {id} = req.params

await ProductModel.findByIdAndDelete(id)

res.json({
    msg: 'Product deleted'
})
    
} catch(err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack
        })
    }
}

