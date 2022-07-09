console.log("Module 'a.js' instantiated");

let myName = "";

export function setName(newName) {
  myName = newName;
}

export function printName() {
  console.log(myName);
}
