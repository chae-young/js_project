/*
테스트 케이스 작성할 때 아래의 경우를 꼭 생각해 보면 좋을 것 같아요.

체육복을 잃어 버린 학생과 여벌을 가져온 학생이 같은 경우 solution(3, new int[] {2}, new int[] {2})
체육복을 잃어 버린 학생, 여벌을 가져온 학생이 같고, 앞사람이 그 학생에게 빌려 줄 수 있을 때 solution(5, new int[] {3}, new int[] {2,3})
체육복을 잃어 버린 학생, 여벌을 가져온 학생이 같고, 뒷 사람이 그 학생에게 빌려 줄 수 있을 때 solution(5, new int[] {3}, new int[] {3,4})
체육복 여벌을 가져온 학생의 배열이 정렬되지 않았을 경우
채점할 때 조금 난의도 있는 테스트 케이스는 저정도 일 것 같습니다.


체육복 여벌이 있어도 본인이 잃어버린 사람은 빌려줄 수 없습니다.
때문에 누구에게 빌릴 수 있을지 확인 하는 순서가 중요합니다.


점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.


제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 
이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 
남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

입출력 예
n	 lost	      reserve	     return
5	 [2, 4]	      [1, 3, 5]	     5
5	 [2, 4]	      [3]	         4
3	 [3]	      [1]	         2
5    [1,2,3,4,5]  [1,2,3,4,5]    5
5	 [4, 5]	      [3, 4]	     4

입출력 예 설명
예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 
3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 
체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.

출처
※ 공지 - 2019년 2월 18일 지문이 리뉴얼되었습니다.
※ 공지 - 2019년 2월 27일, 28일 테스트케이스가 추가되었습니다.

--------------------------------------------------------------------------------------------------------
일부학생 체육복 도난 ->
여벌학생들이 빌려줌 ->
바로 앞번호나 뒷번호 애들에게만 빌려줄수있음 ->
근데 여벌있는 학생이 도난 당할수 있음(여벌 하나만) ->
그럼 못빌러줌


5명에게 체육복을 나눠주고,
여벌있는애들은 하나 더주고,
잃어버린애들은 하나뺌.

여벌학생들이 도난당하지 않았을경우
1개씩 나눠주고
도난당했을경우
못나눠줌.


내가 2이고 다음번호나 전번호가 0 이면 1 빌려주고
내꺼에서 1 빼기.



function solution(n, lost, reserve) {
    var answer = 0;
    return answer;
}
[2,0,2,0,2]

*/
function solution(n, lost, reserve) {

	var num = new Array(n).fill(1);

	num.forEach(function(el,i){
		i += 1;
		if(reserve.includes(i)){
			num[i-1] += 1
		}
		if(lost.includes(i)){
			num[i-1] -= 1
		}
	})

	num.forEach(function(el,i,arr){
		if(el === 2){
			if(arr[i-1] === 0){
				arr[i-1]++
				arr[i]--
			}else if(arr[i+1] === 0){
				arr[i+1]++
				arr[i]--
			}
		}	
	})

	num = num.filter(function(el){
		return el > 0
	})

	return num.length
}
console.log( solution(5, [1,2,3,4,5], [1,2,3,4,5]) )