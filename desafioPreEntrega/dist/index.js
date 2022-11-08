"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = ;
{
    Request, Response;
}
from;
'express';
const index_1 = __importDefault(require("./routes/index"));
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server UP en el puerto ${PORT}`));
app.use('7api', index_1.default);
app.use((req, res) => {
    res.status(404).json({
        msg: "Ruta no encontrada"
    });
});
