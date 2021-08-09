const fs = require("fs");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const writeToFile = (path, text) => fs.writeFileSync(path, text);
const readFile = (path) => fs.readFileSync(path).toString();

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    writeToFile,
    readFile,
};
