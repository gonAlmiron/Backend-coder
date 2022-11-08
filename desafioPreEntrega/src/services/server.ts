import express  from 'express';
import MainRouter from '../routes/index';

const app = express()


app.use('/api', MainRouter);

app.use((req, res) => {
    res.status (404).json({
        msg: "Ruta no encontrada"
    });
});

export default app;