/*

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.
입출력 예
n	return
12345	[5,4,3,2,1]


function solution(n) {
    var answer = [];
    return answer;
}
console.log(solution(12345))
*/


















function solution(n) {
    var answer = [];
	n = n.toString()
	for(var i = 0;i<n.length;i++){
		answer.push(Number(n.charAt(i)))
	}
	answer.reverse()
	console.log(answer)
    //return answer;
}
console.log(solution(1234510))