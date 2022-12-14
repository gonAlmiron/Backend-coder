import express  from 'express';
import MainRouter from '../routes/index';

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', MainRouter);

app.use((req, res) => {
    res.status (404).json({
        msg: "Ruta no encontrada"
    });
});

module.exports = app;