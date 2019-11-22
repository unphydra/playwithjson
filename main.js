const fs = require("fs");

const main = function() {
  const text = fs.readFileSync("./respositories", "utf-8");
  const respositories = JSON(text);
  const table = getTable(respositories);
  console.log(table);
};

main();
