/*

수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]

핵심!!!!
*************점수가 높은사람을 출력***********
*********만약 점수가 같을경우 오름차순으로 정렬*********

*/
function solution(answers) {

    var answer = [];

    //수포자들의 배열
    var person1 = [1,2,3,4,5];
    var person2 = [2,1,2,3,2,4,2,5];
    var person3 = [3,3,1,1,2,2,4,4,5,5];

    //맞춘답 변수
    var result = [];
    var a = 0, b = 0, c = 0;
    
    //정답길이에 따른 수포자답 카운팅.
    for(var i = 0;i < answers.length;i++){
		if(person1[i%person1.length] === answers[i]){
            a += 1
        }
		if(person2[i%person2.length] === answers[i]){
            b += 1
        }
		if(person3[i%person3.length] === answers[i]){
            c += 1
        }        
    }

    //정답배열에서 가장큰값의 인덱스를 뽑아!
    result.push(a,b,c)   
    var max = Math.max(result[0],result[1],result[2])
   
    
   // answer.push( result.indexOf(max)+1 )
    //var rest = result.splice( result.indexOf(max),1)

    if(max === result[0]){
        answer.push(1)
    }
    if(max === result[1]){
        answer.push(2)
    }
    if(max === result[2]){
        answer.push(3)
    }        
    //나머지값 비교
    /*
    result.forEach(function(el,i){
        if(max==el){//나머지값과 같다..
            //console.log(i)
            answer.push(i+1)
        }else{
            //console.log(i)
        }
    })*/

    return answer 

}

console.log(solution([0]))


/*슈발 */