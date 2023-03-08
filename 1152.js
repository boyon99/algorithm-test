let inputData = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ')

console.log(inputData[0] === "" ? 0 : inputData.length)
