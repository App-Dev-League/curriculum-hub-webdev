const axios = require("axios");

const add = async (a, b) => {
  return await axios.post('http://localhost:3001/add', { a: a, b: b});
};

const subtract = (a, b) => {
  return await axios.post('http://localhost:3001/subtract', { a: a, b: b});
};

const multiply = (a, b) => {
  return await axios.post('http://localhost:3001/multiply', { a: a, b: b});
};

const divide = (a, b) => {
  return await axios.post('http://localhost:3001/divide', { a: a, b: b});
};


module.exports = {
    add,
    subtract,
    multiply,
    divide,
};
