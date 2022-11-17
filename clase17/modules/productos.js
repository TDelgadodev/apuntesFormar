const fs = require("fs");
const path = require("path");

const moduloProductos = {
  archivo: "productos.json",
  leerJSON: function () {
    const productosJSON = fs.readFileSync(
      path.join(__dirname, "..", "data", this.archivo),
      "utf-8"
    );
    const productosParseado = JSON.parse(productosJSON);

    return productosParseado;
  },
  detalle: function (id) {
    if (isNaN(id)) {
      return "Debes ingresar un ID válido";
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
    
    let errores = [];

    !nombre ? errores.push("Debes ingresar el nombre del producto!"): null
    !precio ? errores.push("Debes ingresar el precio del producto!"): null;
    !oferta ? errores.push("Debes ingresar la oferta del producto!"): null;

    if(errores.length){
        return errores;
    }

    let productos = this.leerJSON();

    let lastId = productos[productos.length - 1].id;

    let nuevoProducto = {
      id: lastId + 1,
      nombre: nombre.trim(),
      precio: +precio,
      oferta: oferta,
    };

    productos.push(nuevoProducto);

    return productos;
    },
};

module.exports = moduloProductos;
