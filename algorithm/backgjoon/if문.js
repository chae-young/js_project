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
