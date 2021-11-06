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

// a+B-7
const [n3,...arr3] = ['5',
'1 1',
'2 3',
'3 4',
'9 8',
'5 2']
//Case #1: 1 + 1 = 2
for(let i = 0; i < n3; i++){
    const [a2,b2] = arr3[i].split(' ')
    console.log(`Case #${i+1}: ${a2} + ${b2} = ${a2 + b2}`)
}

//별
const a3 = 5;
for(let i = 1;i <= +a3; i++){
    console.log('*'.repeat(i))
}
//별 오른쪽
const a4 = 5;

for(let i = a4; i >= 1; i--){
    let str = ' '.repeat(i-1) //4 3
    let star = '*'.repeat(a4 - str.length) //1 1
    console.log(str+star)
}
// 다른풀이
// for(i=1;i<=c;i++)console.log(' '.repeat(c-i)+'*'.repeat(i))



//x보자 작은수
const [num,arr4] = ['10 5',
'1 10 4 9 2 3 8 5 7 6']

const [t,x] = num.split(' ')
const arrA = arr4.split(' ')
let result = ''
for(let i = 0; i < +t; i++){
    if(arrA[+i] < +x){
        result += arrA[+i] + ' '
    }
}
console.log(result)

// 필터함수를 쓸생각을 왜 안했지 .. ㅂㅂ