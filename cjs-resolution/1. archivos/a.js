// should print only one time, after that the entire file is cached
console.log("Hello from module 'a'");

function hello() {
  console.log("hello function!");
}

module.exports = { hello };
