// 6단계
let [a, b] = require("fs").readFileSync("./dev/stdin").toString().split("\n");
for (let i = 2; i >= 0; i--) {
    console.log(+a * b[i]);
}
console.log(+a * +b);
