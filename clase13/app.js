const fs =  require("fs");
const dataPersona = require("./objetoLiteral");
const dataPersonaJson = fs.readFileSync("./personaJson.json","utf-8");
const dataJsonParse = JSON.parse(dataPersonaJson);

// console.log(typeof dataPersona);
console.log(dataJsonParse);
console.log(dataPersonaJson);
