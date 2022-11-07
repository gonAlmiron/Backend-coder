import express from 'express'
import MainRouter from './routes/index';

const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server UP en el puerto ${PORT}`));

app.use('7api', MainRouter);

app.use((req, res) => {
    res.status(404).json({
        msg: "Ruta no encontrada"
    });
});