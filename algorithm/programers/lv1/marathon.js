/*

1. 문제 이해하기
participant(참가자) 배열과 completion(완주자) 배열의 비교 해서 
남는 배열 요소를 출력하면 될 것 같다. 
하지만 참여한 선수의 수가 100,000명 이하로 
주어진 것을 보아 시간 복잡도를 고려해야 할 것 같다. 
2중으로 for 문을 돌리면 시간초과에 걸린다.


2. 해결 방법
participant(참가자) 배열과 completion(완주자) 배열 모두 sort()를 이용해서 정렬시키자. 
그리고 인덱스 0부터 두 배열을 비교하면 for문 한 번으로 문제를 해결할 수 있다. 
participant(참가자) 배열과 completion(완주자) 배열을 0번 부터 비교하다보면 
participant(참가자) 배열에 비완주자(정답)가 나올 경우 
두 배열 비교 연산은 불일치가 나올 것이고 
그 때 participant(참가자) 배열의 요소를 출력하면 된다.


function solution(participant, completion) {
    var answer = '';
	participant.sort();
	completion.sort();

	for(var i = 0; i < participant.length ;i++){
		participant[i] !== completion[i]
	}
    return answer;
}

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.


***입출력 예

마라톤 참여한 선수                                   완주한 선수                                  완주하지 못한선수
participant	                                         completion	                                  return

[leo, kiki, eden]	                                 [eden, kiki]	                              leo
[marina, josipa, nikola, vinko, filipa]	             [josipa, filipa, marina, nikola]	          vinko
[mislav, stanko, mislav, ana]	                     [stanko, ana, mislav]	                      mislav



입출력 예 설명

예제 #1
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.


function solution(participant, completion) {
    var answer = '';
    return answer;
}

*/


function solution(participant, completion) {
    var answer = '';

	participant.sort();
	completion.sort();
	//console.log(  participant , completion )
	for(var i = 0; i < participant.length ;i++){
		if(participant[i] !== completion[i]) return participant[i]
	}
	
	//return participant[0]
}


console.log( solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']) )
console.log( solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']) )