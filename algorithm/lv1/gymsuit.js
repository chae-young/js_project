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
5            1,2,3,4,5 1,2,3,4,5    5
5	[4, 5]	[3, 4]	4


입출력 예 설명
예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.

출처
※ 공지 - 2019년 2월 18일 지문이 리뉴얼되었습니다.
※ 공지 - 2019년 2월 27일, 28일 테스트케이스가 추가되었습니다.

>>>
전체학생     잃어버린애     빌려줄수있는애(2벌(도난당할경우 1벌))     수업들을수 있는 학생수.


수업 못듣는애
빌려줄수있는 애들이 못빌려주는 애들.
1.빌려줄수있는 애들 중에 속하지않음

전체학생 - 수업 못듣는애


입출력 예
n	 lost	   reserve	    return
5	 [2, 4]	   [1, 3, 5]	5
5	 [2, 4]	   [3]	        4
3	 [3]	   [1]	        2



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


>>>
*/

function solution(n, lost, reserve){
<<<<<<< HEAD:algorithm/lv1/체육복.js
	lost=[2,4,3]
=======
	//lost = [2,4,3]
>>>>>>> 6c07c83832733d8d2705ffe63f2045c28f513a66:algorithm/lv1/gymsuit.js
    var answer = 0;

	var clothes = []

	for(var i = 0;i < n;i++){ //하나씩 체육복넣기
		clothes.push(1)
	}
	for(var h = 0;h < lost.length;h++){//잃어버린애들이 여유있는애들에 포함되있지 않으면 0
		if(!reserve.includes( lost[h] )){
			clothes[lost[h]-1] = clothes[lost[h]-1] - 1
		}
	}
	for(var j = 0;j < reserve.length;j++){//여유있는애들이 잃어버리지 않는다면 1추가.
		if(!lost.includes( reserve[j] )){
			clothes[reserve[j]-1] = clothes[reserve[j]-1] + 1
		}
	}
	

	var num = 0,mynum = 0;
	var resultarr = clothes.slice();

	lost.forEach(function(el,i){
		//console.log(clothes[el]  == 2)
		if( clothes[el-2]  !== 2 || clothes[el]  !== 2 ){ //lost 에서 빌릴수 있는 애들
			++num
		}
		if( clothes[el]  == 2 || clothes[el]  == 2 ){
			--num
		}
	})

	console.log(clothes,num,mynum)// 빌릴수있는애들,자기자신이 체육복 갖고있음
	answer = n - (Math.abs(reserve.length - (num + mynum))); //(전체수 - 못빌리는애)+자기자신

	return answer;

}

<<<<<<< HEAD:algorithm/lv1/체육복.js
//console.log(solution(10,[1,2,3,4,5,6,7],[1,2,3,4,5,6]))
//console.log(solution(5,[1,2,3,4,5],[1,2,3,4,5]))
//console.log(solution(3,[3],[1]))
console.log(solution(5,[2,4],[1,3,5]))
//console.log(solution(5,[2,4],[3]))
=======
console.log(solution(5,[2,4],[1,3,5])) //5
console.log(solution(5,[2,4],[3])) //4
console.log(solution(3,[3],[1])) //2
console.log(solution(5,[1,2,3,4,5],[1,2,3,4,5])) //5
console.log(solution(5,[4,5],[3,4])) //4
>>>>>>> 6c07c83832733d8d2705ffe63f2045c28f513a66:algorithm/lv1/gymsuit.js


