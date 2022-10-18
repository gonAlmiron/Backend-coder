const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
res.json({
    msj: 'get all products'
})
});

router.get('/:id', (req, res) => {
    res.json({
        msj: 'get product by id'
    })
});

router.post('/', (req, res) => {
    res.json({
        msj: 'post new product'
    })
});

router.put('/', (req, res) => {
    res.json({
        msj: 'update product'
    })
})

router.delete('/:id', (req, res) => {
    res.json({
        msj: 'delete by id'
    })
})

module.exports = router;