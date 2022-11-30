import express from 'express';
import http from 'http';
import mainRouter from '../routes/index'

const app = express()

app.use(express.json())

app.use('/api', mainRouter)


const httpServer = http.Server(app)

export default httpServer