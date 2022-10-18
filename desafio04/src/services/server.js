const express = require('express');
const routerPrincipal = require('../routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routerPrincipal);

// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || 'Internal Server Error';

//     res.status(status).json({
//         message,
//     })
// })

app.get('/', (req, res) => {
    res.json({
        msj: 'app ok'
    })
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Internal Server Error'

    res.status(status).json({
        message
    })
});

module.exports = app;