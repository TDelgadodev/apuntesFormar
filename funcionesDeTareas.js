const fs = require("fs");
const path = require("path");


const comandosTareas = {
    leerJson : function(){
        const tareasJSON = fs.readFileSync(path.join(__dirname, "..", "appTareas","archivoTareas.json"), {encoding : "utf-8"});
        const tareasParseadas = JSON.parse(tareasJSON);
        return tareasParseadas
    },
}
module.exports = comandosTareas;
