// function solution(a, b) {
//     let arr = [];
//     for(let i = 0;i < a.length;i++){
//         arr.push(a[i] * b[i])
//     }
//     arr = arr.reduce((acc,curr)=>acc+curr)
// }
function solution(a, b) {
    return a.reduce((acc,curr,i)=>acc += a[i] * b[i],0)
}
//console.log(solution([1,2,3,4],[-3,-1,0,2]))


