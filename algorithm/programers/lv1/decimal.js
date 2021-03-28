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


소수 => 1과 약수가 아닌애들
에라토스테네스의 체
*/

function solution(n){
    const nArr = Array(n).fill().map((el,i)=>i+=1);
    nArr.shift();

    nArr.forEach((el,i)=>{//2,3,4,5,6,7,8,9,10
        for(let i = 0;i<nArr.length;i++){
            if(nArr[i]!==el && nArr[i]%el==0){//자기자신을 제외한 2의 배수를 제거
                nArr.splice(nArr.indexOf(nArr[i]),1)
            }
        }
    })
   return nArr.length
}
console.log(solution(5))