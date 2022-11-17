const comandosTareas = require("./modules/funcionesDeTareas");
const path = require("path");
const fs = require("fs");
const dataJson = fs.readFileSync(path.join(__dirname,"appTareas","archivoTareas.json"), {encoding : "utf-8"});
const comando = process.argv[2];

let priority;
let name;
let status;


switch (comando) {
    case "listar":
        const tareasArray = comandosTareas.leerJson();
        tareasArray.forEach((tarea) => {
            console.log( `${tarea.priority}-. ${tarea.name} - ${tarea.status}`);
        });

        break;  

   case "agregar": 
        priority = +process.argv[3];
        name = process.argv[4];
        status = process.argv[5]; 
            console.log(comandosTareas.guardarTarea(priority,name,status));
        break; 
    case "filtrar":
        status = process.argv[3]
        console.log(comandosTareas.filtrarPorEstado(status));
        break;
    case undefined:
            console.log("ATENCION- Tienes que pasar una accion");
            console.log("Tus comandos disponibles son: "   + comandosDisponibles().join(", "));
        break;

    default:
        console.log("No entiendo lo que queres");
        console.log("Tus comandos disponibles son: " + comandosDisponibles().join(", "));
        break;
}

function comandosDisponibles() {
    return ["listar","agregar Tarea","Filtrar Tarea"];
}