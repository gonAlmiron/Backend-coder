const {Router} = require('express');
const app = require('../services/server');
const ProductosRouter = require('./productos')


const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: "router ok"
    })
})

router.use('/productos', ProductosRouter)

module.exports = router