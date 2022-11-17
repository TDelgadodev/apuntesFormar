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
        const nombre = process.argv[3];
        const precio = process.argv[4];
        const oferta = process.argv[5];
        console.log(moduloProductos.agregar(nombre,precio,oferta));
        break;

    case undefined:
        console.log("Debes ingresar un comando!!!");
        break;

    default:
        console.log("Comando incorrecto");
        break;
}
