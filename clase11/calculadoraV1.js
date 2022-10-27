const process = require("process");

let resultado;
let operacion = process.argv[2];
let numeroA = +process.argv[3];
let numeroB = +process.argv[4];

function sumar(a,b) {
    return a + b;
}

function restar(num1, num2){
    return num1 - num2;
}

function multiplicar(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}


if (operacion === "sumar"){
    console.log(sumar(numeroA,numeroB));
}

else if (operacion === "restar"){
    console.log(restar(numeroA,numeroB));
}

else if (operacion === "multiplicar"){
    console.log(multiplicar(numeroA,numeroB));
}

else if (operacion === "division"){
    console.log(division(numeroA,numeroB));
} 
else{
    console.log("Operacion no encontrada...");
}
