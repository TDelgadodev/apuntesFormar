const fs = require("fs");
const path = require("path");

const moduloProductos = {
  leerJSON: function () {
    const productosJSON = fs.readFileSync(
      path.join(__dirname, "..", "data", "productos.json"),
      "utf-8"
    );
    const productosParseado = JSON.parse(productosJSON);

    return productosParseado;
  },
  detalle: function (id) {
    if (isNaN(id)) {
      return "Debes un ingresar un codigo valido";
    }
    const productos = this.leerJSON();
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id === id) {
        return productos[i];
      }
    }
    return "No hay productos con el ID: " + id;
  },
  agregar: function (nombre, precio, oferta) {
    let productos = this.leerJSON();
    let lastId = productos[productos.length - 1].id;

    let nuevoProducto = {
      id: lastId - 1,
      nombre: nombre.trim(),
      precio: +precio,
      oferta: oferta,
    };

    productos.push(nuevoProducto);
    return productos;
  },
};

module.exports = moduloProductos;
