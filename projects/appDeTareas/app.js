const comandosTareas = require("./modules/comandos");
const dataJson = fs.readFileSync("./appTareas/archivoTareas.json", "utf-8");
const data = require("./modules/comandos");
const comando = process.argv[2];

 if (comando === "mostrar") {
    const tareasArray = comandosTareas.leerJson();
    console.log(comandosTareas.leerJson());
} 


