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

function solution(n) {
    const nArr = new Array(n).fill(1)
    //console.log(nArr)
    nArr[0] = 0;
    for(let i = 2; i*i <= n; i++){ //제곱근까지 순회
        console.log('i',i)

        for(let j = i*i; j <= n; j+=i){
            nArr[j-1]=0;
        }
    }
    console.log(nArr)
    return nArr.filter((el)=>el==1).length
}
console.log(solution(5))