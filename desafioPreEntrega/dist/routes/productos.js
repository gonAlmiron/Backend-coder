"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { ProductosController } = require('../controller/productos');
const productosRouter = (0, express_1.Router)();
const AsyncHandler = require('express-async-handler');
productosRouter.get('/', (req, res) => {
    res.json({
        msg: ProductosController.getAll()
    });
});
productosRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const product = ProductosController.getById(id);
    res.json({
        msg: product
    });
});
//metodo sin asyncHandler:
productosRouter.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const data = yield ProductosController.save(body);
        res.json({
            msg: data
        });
    }
    catch (err) {
        next(err);
    }
}));
//metodo con asyncHandler sin try/catch y sin next 
// SE ENGLOBA LA FUNCION DEL ROUTER.PUT EN PARENTESIS Y SE PONE AsyncHandler:
productosRouter.put('/:id', AsyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { body } = req;
    const data = yield ProductosController.findByIdAndUpdate(id, body);
    res.json({
        msg: data
    });
})));
productosRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        msg: ProductosController.findByIdAndDelete(id)
    });
});
exports.default = productosRouter;
