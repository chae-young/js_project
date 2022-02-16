//윤년

//내가푼거
let a = 1900;
if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    console.log(1);
} else {
    console.log(0);
}
//그외 답
console.log(a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0) ? 1 : 0);

//사분면
// condition1 ? value1
// : condition2 ? value2
// : condition3 ? value3
// : value4;

let [a, b] = [12, 5];
console.log(a > 0 && b > 0 ? 1 : a < 0 && b > 0 ? 2 : a < 0 && b < 0 ? 3 : 4);

//
let a = 10;
let b = 10;

if (b >= 45) {
    // 45분 이랑 같거나 크면 시간이 안깎임.
    console.log(a, b);
} else {
    // 시간 깎임.
    a = a === 0 ? 23 : a - 1;
    if (b === 0 || (b >= 45 && b <= 59)) {
        b = 60 - 45;
    } else {
        b = 60 + b - 45;
    }       
    console.log(a, b);
    // 23
}

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');
// input = input[0];
// input = input.split(' ').map((item) => +item);
// solution(input[0], input[1]);
// function solution(H, M) {
//     // Write your code
//     M -= 45; // -1
//     if (M < 0) {
//         M += 60;
//         H -= 1; // -1
//     }
//     if (H < 0) {
//         H = 23;
//     }
//     console.log(H, M);
// }
