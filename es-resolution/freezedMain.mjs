import { setName, printName } from "./name.mjs";
import {
  freezedObject,
  printObject,
  setAge,
  setName as setObjectName,
} from "./freezedObject.mjs";

console.log();
console.log("testing 'name.mjs'");
printName();
setName("Jerónimo");
printName();

console.log("testing 'object.mjs'");
// all this should throw
printObject();
setAge(12);
setObjectName("Jorge");
printObject();
freezedObject.nationality = "Mongol";
printObject();
