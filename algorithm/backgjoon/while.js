const input = ['1 1',
'12 34',
'5 500',
'40 60',
'90 60',
'0 0']

let i = 0
let v = +input[i].split(' ')[i] // 1
let answer = ""
while(v>0){ // 1>0
    const [n1,n2] = input[i].split(' ') // '1 1'
    i++
    v = +n1
    if(v===0) {
        console.log(answer) 
        break
    };
    answer += +n1 + +n2 + '\n'
}


// 다른방법
input.map(v=>v.split(' ')).forEach(v=>
    +v[0] ? console.log(+v[0]+ +v[1]) : 0)