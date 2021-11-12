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
    answer += +n1 + +n2
    if(v===0) console.log(answer)
}