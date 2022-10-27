const { type } = require("os");
const process = require("process");
const moduloProducto = require("./modules/productos");
const comando = process.argv[2];
console.log(moduloProducto);

if(comando === "listar"){
    console.log(moduloProducto.leerJSON());
}

else if(typeof comando === "undefined"){
    console.log("debe ingresar un comando");
}

else{
    console.log("comando incorrecto");
}

