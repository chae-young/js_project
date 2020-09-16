/*
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
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
n	 lost	   reserve	    return
5	 [2, 4]	   [1, 3, 5]	5
5	 [2, 4]	   [3]	        4
3	 [3]	   [1]	        2

입출력 예 설명
예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.

출처
※ 공지 - 2019년 2월 18일 지문이 리뉴얼되었습니다.
※ 공지 - 2019년 2월 27일, 28일 테스트케이스가 추가되었습니다.

>>>

체육수업을 들을 수 있는 학생의 최댓값?

lost의 앞번호,뒷번호 배열 만들기.
겹치는 번호 제거.



입출력 예
n	 lost	   reserve	    return
5	 [2, 4]	   [1, 3, 5]	5
5	 [2, 4]	   [3]	        4
3	 [3]	   [1]	        2

move lost의 길이를 더한값에 맞는값을
전체수에서 못듣는애 값을 빼야함.
빌려줄수 있는애 > move에서 reserve 속하면 체크.

못듣는애 
3-3 0
3-1 1
move   reserve           빌려줄수있는애 
[1,3,5] [1,3,5] = >       3                 
[1,3,5] [3] =>            1                 
[2,4] [1] = >             0


5 2 3  /  2-3 = -1
5 2 1  /  2-1 = 1
3 1 0  /  1-0=1

lost에서 빌려줄수있는애 값을 뺀다.
음수면 전체 수 반환
양수면 전체수에서 못듣느애값 빼기,,?

여벌을 가져온 학생이 도난당했을경우.
못빌려줌.
도난당할경우 lost로 이동하니까

reserve애들이 lost에 있는지 체크..

>>>
*/



function solution(n, lost, reserve) {
    var answer = 0;
	var sequence = [];
	var ing = false;
	
	for(var i = 0;i < reserve.length;i++){
		if(lost.includes(reserve[i])){

			lost.splice(lost.indexOf( reserve[i] ),1)
			reserve.splice( reserve.indexOf( reserve[i] ),1 )
			
		}
	}

	//function check(){
		lost.forEach(function(el){
		  sequence.push( el+1,el-1 )
		})

		var move = [];
		sequence.forEach(function(el){
			if(move.indexOf(el) == -1){
				move.push(el)
			}
		})


		var num = 0;

		move.forEach(function(el){
			if(reserve.includes(el)){
				++num
			}
		})

		if( Math.sign( lost.length - num ) == -1 ){
			answer = n;
		}else{
			answer = n- (lost.length - num);
		}
	//}

	console.log(answer)
	return answer
   /*lost.filter(function(el){
		if( reserve.indexOf(el-1) != -1 ){
			reserve.splice( reserve.indexOf(el-1),1 )
			if(dress.indexOf(el) == -1){
				dress.push(el)
			}
		}
		if( reserve.indexOf(el+1) != -1 ){
			reserve.splice( reserve.indexOf(el+1),1 )
			if(dress.indexOf(el) == -1){
				dress.push(el)
			}
		}
	})

	answer = n - (lost.length - dress.length)

	return answer
	*/

}
console.log(solution(5,[2,3,5],[2,4]))