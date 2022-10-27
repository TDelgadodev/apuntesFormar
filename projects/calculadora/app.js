const calculadora = require("./calculadora/calculadora")
const process = require("process");
const operacion = process.argv[2];
const numero1 = +process.argv[3];
const numero2 = +process.argv[4];
let resultado;


if(operacion === "sumar") {
    resultado = calculadora.sumar(numero1,numero2)
    return console.log(`"La operacion ${operacion} da como resultado ${resultado}"`);
}

else if(operacion === "restar") {
    resultado = calculadora.restar(numero1,numero2)
    return console.log(`"La operacion ${operacion} da como resultado ${resultado}"`);
}

else if(operacion === "multiplicacion") {
    resultado = calculadora.multiplicar(numero1,numero2)
    if (resultado === 0){
        return console.log(0);
    }
    else{
        return console.log(`"La operacion ${operacion} da como resultado: ${resultado}"`);
    }

}

else if(operacion === "dividir") {
    resultado = calculadora.dividir(numero1,numero2);
    if (resultado === 0){
        return console.log(0);
    }
    else{
          return console.log(`"La operacion ${operacion} da como resultado: ${resultado}"`);
    }
  
}


else{
    return console.log("ERROR: calculo no encontrado");
}
