const express = require('express');
const MainRouter = require('../routes/index')


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use('/api', MainRouter);

app.get('/', (req, res) => {
    res.json({
        msj: "ok"
    });
})

module.exports = app