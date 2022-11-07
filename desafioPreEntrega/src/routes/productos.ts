import {Router, Request, Response, request} from 'express';

const router = Router();

router.get('/productos', (req: request, res: Respoonse) => {

    res.json({
        mvasg:"Llego la peticion",
    })
})

