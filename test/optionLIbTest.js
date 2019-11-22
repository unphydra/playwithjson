const assert = require("assert");
const fs = require("fs");
const optionLib = require("../src/optionLib.js");
const getTable = optionLib.getTable;

describe("getTable", () => {
  it("should return a table of elemments", () => {
    const actual = getTable(
      JSON.parse(fs.readFileSync("./repositories.json", "utf-8"))
    );
    const expected = JSON.parse(
      fs.readFileSync("./repositories.json", "utf-8")
    );
    assert.deepStrictEqual(actual, expected);
  });
});
