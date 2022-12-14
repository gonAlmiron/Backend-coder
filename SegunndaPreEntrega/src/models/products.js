import mongoose from 'mongoose';

export const productCollectionName = 'product';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
},
{timestamps: true, versionKey: false}
);

export const ProductModel = mongoose.model(productCollectionName, productSchema)