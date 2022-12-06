import express from 'express';
import cookieParser from 'cookie-parser'

const app = express();
app.use(cookieParser())

app.use(express.json())

app.get('/cookie', (req, res) => {
    res.cookie('Nombre', 'Gonzalo').send('Nombre creado')
})

app.post('/signed-cookie', (req, res) => {
    let {key, value, signed} = req.body

    try {

        res.cookie(key, value, {signed: true}).send('Cookie firmada creada')
    } catch(err) {
        res.status(400).json({msg: err})
    }
})


app.get('/leer-cookies', (req, res) => {
    res.json({
        cookies: req.cookies,
        signedCookies: req.signedCookies
    })
})



export default app