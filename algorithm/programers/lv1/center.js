/*

단어 s의 가운데 글자를 반환하는 함수, 
solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.


재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.

입출력 예
s	return
abcde	c

*/

function solution(s) {
    var answer = '';
	var stringL = s.length;
	var start = Math.floor(stringL / 2);

	if(stringL % 2 == 0){
		answer = s.substring(start-1,start+1);

	}else{
		answer = s.substring(start,start+1);
	}
    return answer;
}

console.log( solution('abcdef') )