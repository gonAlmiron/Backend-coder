import express from 'express';
import path from 'path';

const app = express()

app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;


export default app

