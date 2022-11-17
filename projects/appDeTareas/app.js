const comandosTareas = require("./modules/comandos");
const path = require("path");
const fs = require("fs");
const dataJson = fs.readFileSync(path.join(__dirname,"appTareas","archivoTareas.json"), {encoding : "utf-8"});
const comando = process.argv[2];


switch (comando) {
    case "listar":
        const tareasArray = comandosTareas.leerJson();
        tareasArray.forEach((tarea,titulo,estado) => {
            console.log( `${tarea.prioridad}-. ${tarea.titulo}- ${tarea.estado}}`);
        });

        break;
    case undefined  :
            console.log("ATENCION- Tienes que pasar una accion");
            console.log("Tus comandos disponibles son: "   + comandosDisponibles().join(", "));
        break;
    default:
        console.log("No entiendo lo que queres");
        break;
}

function comandosDisponibles() {
    return ["listar"];
}