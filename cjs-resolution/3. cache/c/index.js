const { hello } = require("../a");
console.log(`resolved path of "../a" from "c/index.js": \n${require.resolve("../a")}\n`);

function Lorem() {
  console.log("Ipsum!");
}

module.exports = {
  Lorem,
};
