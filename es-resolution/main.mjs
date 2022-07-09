import { setName, printName } from "./name.mjs";
import { customObject, printObject, setAge, setName as setObjectName } from "./object.mjs";

console.log()
console.log("testing 'name.mjs'");
printName()
setName("Jerónimo");
printName()

console.log("testing 'object.mjs'");
printObject()
setAge(12)
setObjectName("Jorge")
printObject()
customObject.nationality = "Mongol"
printObject()