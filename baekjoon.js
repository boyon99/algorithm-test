// fs.readFileSync(0)
// let inputData = require("fs").readFileSync('/dev/stdin').toString().trim()
let inputData = require("fs").readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split("\n")

let num = Number(inputData[0])
inputData.shift()

for (let i = 0; i < num; i++) {
  let word = inputData[i]
  for (let j = 0; j < word.length; j++) {
    console.log(word[j])
  }
}

console.log(num)


// 1. 입력값이 한 개일 때(한 줄)
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();

// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");


// // 3. 입력값이 여러 줄일 때
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const fs = require('fs');
// const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const inputArr = input.trim().split(" ")

// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
// const fs = require('fs');
// const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
