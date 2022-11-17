const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");


const comandosTareas = {
    leerJson : function(){
        const tareasJSON = fs.readFileSync(path.join(__dirname, "..", "appTareas","archivoTareas.json"), {encoding : "utf-8"});
        const tareasParseadas = JSON.parse(tareasJSON);
        return tareasParseadas
    },
    escribirJSON: function(tareasArray){
        fs.writeFileSync(path.join(__dirname,"..","appTareas","archivoTareas.json"),JSON.stringify(tareasArray,null,3),"utf-8")
    },
    guardarTarea: function(priority,name,status){
        let error = [];

        !priority && error.push("Debes ingresar la prioridad de la tarea!")
        !name && error.push("Debes ingresar el nombre de la tarea!");
    
        if(error.length){
            return error;
        }

        let tareasArray = this.leerJson()
        let ultimaTarea = tareasArray[tareasArray.length - 1].priority
        let nuevaTarea = {
            priority: ultimaTarea + 1,
            name: name.trim(),
            status: "Pendiente"
        }

            tareasArray.push(nuevaTarea)
            this.escribirJSON(tareasArray)
            return "Tarea creada con exito"
    },
    filtrarPorEstado: function(status) {
        let tareasArray = this.leerJson()
        let tareasFiltradas;
        tareasFiltradas = tareasArray.filter(function(tarea) {
            return tarea.status === status
        })

        return tareasFiltradas.length ? tareasFiltradas : "No hay tarea con ese filtro"
    }
    

}
module.exports = comandosTareas;