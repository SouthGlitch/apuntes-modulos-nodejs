const { hello } = require("./a");

console.log(
  `resolved path of "../a" from "b.js": \n${require.resolve("./a")}\n`
);

function goodbye() {
  hello();
  console.log("Goodbye!");
}

module.exports = { goodbye };
