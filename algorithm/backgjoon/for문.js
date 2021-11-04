//구구단
let a = 2;
// 2 * 1 = 2
for(let i = 1; i < 10; i++){
    console.log(`${a} * ${i} = ${a*i}`)
}

//a+b
//줄마다 
const [n,...arr] = [
    '5',
    '1 1',
    '2 3',
    '3 4',
    '9 8',
    '5 2'
]
for(let i = 0; i < +n;i++){
    let [a,b] = arr[i].split(' ')
    console.log(+a + +b)
}
// n개합
let b = 3;
let c = 0;
for(let i = 1 ;i<=b;i++){
    c += i
}
console.log(c)
/**
   삼각형의 넓이 공식을 활용.
   n x (n + 1) / 2
 */


 // a+b
 const [n2,...arr2] = ['5',
    '1 1',
    '12 34',
    '5 500',
    '40 60',
    '1000 1000']
// for(let i = 0;i < n2;i++){
//     const arrSplit = arr2[i].split(' ')
//     console.log(arrSplit[0] + arrSplit[1])
// }


//n
let v = 5
let sum = ''
for(let i = 5; i >= 1; i--){
    sum += i + '\n'
}
console.log(sum)
