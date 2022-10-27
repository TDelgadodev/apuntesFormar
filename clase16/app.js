const process = require("process");
const moduloProductos = require("./modules/productos");
const comando = process.argv[2];

switch (comando) {
  case "listar":
    const productosArray = moduloProductos.leerJSON();
    for (let i = 0; i < productosArray.length; i++) {
      console.log(
        `${productosArray[i].id}.- ${productosArray[i].nombre} - $${productosArray[i].precio}`
      );
    }
    break;

  case "detalle":
    console.log(moduloProductos.detalle(+process.argv[3]));
    break;

  case "agregar":
    console.log(moduloProductos.agregar());
    break;

  case undefined:
    console.log("Debes ingresar un comando!!!");
    break;

  default:
    console.log("Comando incorrecto");
    break;
}
