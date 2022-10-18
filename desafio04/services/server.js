const express = require('express');
const RouterPrincipal = require('../routes/index');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', RouterPrincipal)

module.exports = app;