const process = require("process");
const comando = process.argv[2];
const moduloProductos = require("./modulos/productos")

let nombre;
let precio;
let oferta;

switch (comando) {
    case "listar": //if
        const productosArray = moduloProductos.leerJSON();

        for (let i = 0; i < productosArray.length; i++) {
            console.log(
                `${productosArray[i].id}.- ${productosArray[i].nombre} - $${productosArray[i].precio}`
            );
        }

        break;

    case "detalle": //else if
        const id = +process.argv[3];
        console.log(moduloProductos.verDetalle(id));
        break;

    case "agregar":
        nombre = process.argv[3];
        precio = process.argv[4];
        oferta = process.argv[5];
        console.log(moduloProductos.agregarProducto(nombre, precio, oferta));
        break;
    case "editar":
        id = +process.argv[3];
        precio =+process.argv[4];
        oferta =+process.argv[5];

            console.log(moduloProductos.editarProducto())
        break;

    case undefined: //else if
        console.log("Debes ingresar un comando!!!");
        break;

    default: //else
        console.log("Comando incorrecto");
        break;
}
