function solution(num) {
    let count = 0;
    if(num === 1) return 0
    for(let i = 0;i < 500; i++){
        count++
        if(num%2){//홀수
            num = num*3+1
        }else{//짝수
            num = num/2
        }
        if(num === 1) break;        
    }
    if(num !== 1) {
        count = -1
    }    
    return count
}


console.log(solution(1))