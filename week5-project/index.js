const helperFunctions = require('helper.js');

helperFunctions.add(1, 3);
helperFunctions.subtract(1, 3);
helperFunctions.multiply(1, 3);
helperFunctions.divide(1, 3);
helperFunctions.writeToFile("./text.txt", "I a writing this text");
console.log(helperFunctions.readFile("./text.txt"));
