import { inspect } from "node:util";

console.log("Module 'object.js' instantiated");

export const freezedObject = {};
Object.freeze(freezedObject)

export function setName(name) {
  freezedObject.name = name;
}

export function setAge(age) {
  freezedObject.age = age;
}

export function printObject() {
  console.log(inspect(freezedObject, { depth: null }));
}
