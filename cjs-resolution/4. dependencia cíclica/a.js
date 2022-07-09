const mensaje = require("./main.js")


console.log("instanciado el módulo 'a.js'");
console.log("el mensaje de main es ... ", mensaje)

let variable;

variable = "1200";

module.exports = { variable };

console.log("el mensaje de main es ... ", mensaje)
