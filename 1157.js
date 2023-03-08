let inputData = require("fs").readFileSync("/dev/stdin").toString().trim().toUpperCase()

let data = inputData.split('').sort()

let num = new Array(data.length).fill(0)
data.map((i, a, b) => {
  if (b[a] === b[a + 1]) {
    num[a] += 1;
    num[a + 1] += num[a] + 1;
  }
  return i
})

let result = Math.max(...num)
if (num.indexOf(result) === num.lastIndexOf(result)) {
  console.log(data[num.indexOf(result)])
} else {
  console.log("?")
}
