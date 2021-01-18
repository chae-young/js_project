/*
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.
입출력 예
s	return

Zbcdefg	gfedcbZ
*/

function solution(s) {

	//var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].reverse();
    
	var st = [];
	for(var i = 0;i < s.length;i++){
		st.push(s.charAt(i))
	}
	st.sort().reverse()
    var answer = st.join('');
	return answer 
}
	solution('bdcsAE')