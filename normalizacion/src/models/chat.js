import mongoose from 'mongoose';

export const msgCollectionName = 'msg';

const msgSchema = new mongoose.Schema({
    author: {
        id: 'mail del usuario',
        nombre: 'nombre del usuario',
        apellido: 'apellido del usuario',
        edad: 'edad del usuario',
        alias: 'alias del usuario',
        avatar: 'url avatar (foto) del usuario'
    },
    text: 'mensaje del usuario'
},
{timestamps: true, versionKey: false}
);

export const msgModel = mongoose.model(msgCollectionName, msgSchema)    

