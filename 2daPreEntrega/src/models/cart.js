import mongoose from 'mongoose';

export const cartCollectionName = 'cart';

const cartSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
},
{timestamps: true, versionKey: false}
   

);

export const CartModel = mongoose.model(cartCollectionName, cartSchema)