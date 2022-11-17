import express from 'express';
import morgan from 'morgan';

const PORT = 8080;

const app = express()

import productos from './routes/routes.productos.js';

app.use(morgan('dev'));
app.use(express.json());

app.use('/productos', productos)

app.listen(PORT, () => {
    console.log(`Servidor ON escuchando en el puerto ${PORT}`)
})

