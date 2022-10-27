const fs = require("fs");

const moduloProducto = {
  leerJSON: function () {
    const productosJSON = fs.readFileSync("./data/productos.json", "utf-8");
    const productoParseado = JSON.parse(productosJSON);
    return productoParseado;
  },
}


module.exports = moduloProducto;

