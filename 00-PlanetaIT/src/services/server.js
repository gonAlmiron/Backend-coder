import express from 'express';

const app = express()

app.get('/api', (req, res) => {
    res.json({
        message: "Hola desde el servidor API"
    })
})

export default app