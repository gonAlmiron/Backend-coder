import express from 'express';
import path from 'path'

const app = express();

// Middlewares
app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;


export default app