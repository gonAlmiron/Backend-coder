import db from '../db.js'

export const lisProduct = (id={}) => {
    return db('product')
    .where(id)
    .select('*')
}

export const createProduct = (obj) => {
    return db('product').insert(obj)
}

export const updateProduct = (id, obj) => {
    return db('product')
    .where('id', id)
    .update(obj)
};

export const deleteProduct = (id) => {
    return db('product').where('id', id).del()
}