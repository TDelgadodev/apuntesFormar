const process = require("process");
const moduloProductos = require("./modules/productos");

const comando = process.argv[2];

let id;
let nombre;
let precio;
let oferta;

switch (comando) {
    case "listar": //if
        const productosArray = moduloProductos.leerJSON();

      /*   for (let i = 0; i < productosArray.length; i++) {
            console.log(
                `${productosArray[i].id}.- ${productosArray[i].nombre} - $${productosArray[i].precio}`
            );
        } */

        productosArray.forEach((producto,index) => {
                console.log(
                    `${producto.id}.- ${producto.nombre} - $${producto.precio}`
                );
            });

        break;

    case "detalle": //else if
        id = +process.argv[3];
        console.log(moduloProductos.verDetalle(id));
        break;

    case "agregar":
        nombre = process.argv[3];
        precio = process.argv[4];
        oferta = process.argv[5];
        console.log(moduloProductos.agregarProducto(nombre, precio, oferta));
        break;
    
    case "editar" :
        id = +process.argv[3];
        precio = +process.argv[4];
        oferta = process.argv[5];

        console.log(moduloProductos.editarProducto(id,precio,oferta));
    
    break

    case "eliminar" :
        id =+process.argv[3];
        console.log(modulosProductos.eliminarProducto(id));
    break;

    case "buscar" : 
            keyword = process.argv[3];
            console.log(moduloProductos.buscarProducto(keyword));
    break;

    case undefined: //else if
        console.log("Debes ingresar un comando!!!");
        break;

    default: //else
        console.log("Comando incorrecto");
        break;
}
