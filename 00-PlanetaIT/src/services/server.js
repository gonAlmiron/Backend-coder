import express from 'express';
import cors from 'cors'



const app = express()

app.use(cors())

app.get('/api', (req, res) => {
    res.json({
        message: "Hola desde el servidor API"
    })
})

export default app