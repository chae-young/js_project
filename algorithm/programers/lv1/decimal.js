/*


약수는 나누었을때 나머지가 0이 되는수를 약수라한다
나머지가 0이면 약수


1과 자기 자신외에 약수를 가지지 않는수 소수 ( 나머지가 0이 아니면 소수 )
약수가 없으면 소수..?

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.
입출력 예
n	result
10	4
5	3

입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

function solution(n) {
    var answer = 0;
    return answer;
}


*/

function solution(n){
    //약수
    let arr = [];
    const factor = function(k){
        let factorArr = [];
        for(let i = 1; i<=k; i++){
            if(k/i % 1 === 0){
                factorArr = [...factorArr,i] 
            }   
        }
        return factorArr.length
    }
    for(let i = 1;i<=n;i++){
        if(factor(i) === 2){
            arr = [...arr,i]
        }
    }
    return arr.length
}
console.log(solution(4))