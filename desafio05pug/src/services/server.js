const express = require('express')
const path = require('path')

const app = express()

viewsFolderPath = path.resolve(__dirname, '/src/views')


app.get('/eje1', () => {
    ('/ejemplo1', viewsFolderPath)
}

)




module.exports = app