# N개의 최소 공배수

### 문제

<img src="./img/스크린샷 2023-12-27 오후 11.32.51.png" width="500">

### 정답

다음은 유클리드 호제법을 사용하여 풀이해야 하는 문제이다.

```js
function gcd(a, b) {
while (b) {
temp = b
b = a % b
a = temp
}
return a
}
function lcm(a, b) {
return (a \* b) / gcd(a, b)
}

const solution = (arr) => {
let answer = 1;
for (let i = 0; i < arr.length; i++) {
answer = lcm(answer, arr[i]);
}

return answer;
};
```

배열의 길이가 N일 때 시간복잡도는 O(N)이 된다.
