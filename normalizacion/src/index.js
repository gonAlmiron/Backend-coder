import express from 'express';
import mainRouter from '../routes/index'
import http from 'http'

const app = express()

app.use(express.json());

app.use('/api', mainRouter)

const httpServer = http.Server(app)

export default httpServer