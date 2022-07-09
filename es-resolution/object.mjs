import { inspect } from "node:util";

console.log("Module 'object.js' instantiated");

export const customObject = {};

export function setName(name) {
  customObject.name = name;
}

export function setAge(age) {
  customObject.age = age;
}

export function printObject() {
  console.log(inspect(customObject, { depth: null }));
}
