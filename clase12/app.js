const calculadora = require("./calculadora")

const process = require('process');
const operacion = process.argv[2];
const numA = +process.argv[3];
const numB = +process.argv[4];
let resultado;

if(operacion === "sumar"){
    resultado = calculadora.sumar(numA, numB)
}

else if(operacion === "restar"){
    resultado = calculadora.restar(numA, numB)
}

else if(operacion === "multiplicar"){
    resultado = calculadora.multiplicar(numA, numB)
}

else if(operacion === "dividir"){
    resultado = calculadora.dividir(numA, numB)
}

else {
    resultado = "ERROR: operación no válida"
}

console.log(resultado);