const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(
    `<br/>
    <h2>
    "Hola! podés ver los productos ingresando a /productos. Para ver un producto aleatorio ingresa a /productoRandom"
    </h2>
    <hr/>
  `
  );
});
app.get("/productos", (req, res) => {
  const allProducts = productos.getAll().then((product) => {
    res.json(product);
  });
});
app.get("/productoRandom", (req, res) => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const productRandom = productos.getAll().then((product) => {
    res.json(product[random(0, product.length - 1)]);
  });
});
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = `./${nombreArchivo}.json`;
  }
  async obtenerJson() {
    const data = await fs.promises.readFile(this.nombreArchivo, "utf-8");
    return JSON.parse(data);
  }
  async getAll() {
    const data = await this.obtenerJson();
    return data;
  }
  async save(data) {
    if (
      !data.title ||
      !data.price ||
      typeof data.title !== "string" ||
      typeof data.price !== "number"
    )
      throw new Error("Datos invalidos");
    let id = 1;
    const productos = await this.obtenerJson();
    if (productos.length) {
      id = productos[productos.length - 1].id + 1;
    }
    const nuevoProducto = {
      title: data.title,
      price: data.price,
      id: id,
    };
    productos.push(nuevoProducto);
    console.log(`se agrego ${nuevoProducto.title} a ${this.nombreArchivo}`);
    return await this.actualizarArchivo(productos);
  }

  async getById(id) {
    const productos = await this.obtenerJson();
    const busqueda = productos.find((dato) => dato.id === id);
    console.log(`El producto con id ${id} es:`);
    console.log(busqueda);
    return busqueda;
  }
  async deleteById(id) {
    const productos = await this.obtenerJson();
    productos.splice(id - 1, 1);
    console.log(`Se removio el producto con id:${id} de sus productos`);
    return await this.actualizarArchivo(productos);
  }
  async deleteAll() {
    const productos = await this.obtenerJson();
    productos.splice(0);
    console.log("Se borraron todos los productos de su lista");
    return await this.actualizarArchivo(productos);
  }
}
const productos = new Contenedor("productos");
