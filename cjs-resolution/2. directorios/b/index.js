const { hello } = require("../a");

console.log("Hello from module 'b'");

function goodbye() {
  hello();
  console.log("Goodbye!");
}

module.exports = { goodbye };
