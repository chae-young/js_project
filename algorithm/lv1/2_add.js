/*

정수 배열 numbers가 주어집니다. 
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 
만들 수 있는 모든 수를 배열에 오름차순으로 담아 
return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

--------------------
입출력 예

numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]
입출력 예 설명
입출력 예 #1

2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
3 = 2 + 1 입니다.
4 = 1 + 3 입니다.
5 = 1 + 4 = 2 + 3 입니다.
6 = 2 + 4 입니다.
7 = 3 + 4 입니다.
따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
입출력 예 #2

2 = 0 + 2 입니다.
5 = 5 + 0 입니다.
7 = 0 + 7 = 5 + 2 입니다.
9 = 2 + 7 입니다.
12 = 5 + 7 입니다.
따라서 [2,5,7,9,12] 를 return 해야 합니다.


--->>자신의 index를 제외하고 loop ?

2+1 = 3
2+3 = 5
2+4 = 6
2+1 = 3
1+2 = 3
1+3 = 4
1+4 = 5
1+1 = 2
3+2 = 5
3+1 = 4
3+4 = 7
3+1 = 4
4+2 = 6
4+1 = 5
4+3 = 7
4+1 = 5







*/

function solution(numbers) {
	var answer = [];
	var flag = false;
	var num = 0;
	var numidx;

	while(numbers[num] < numbers.length){
		console.log(numbers[num])
		numbers.forEach(function(el,i){
			if(numbers[num] !== i){ //inedx가 서로 같지않으면
				answer.push(numbers[num] + numbers[i])
			}
		})
		/*
		for(var i = 0;i < numbers.length;i++){
			console.log(numbers[num])
			if(numbers[num] !== i){
				answer.push(numbers[num] + numbers[i])
			}
		}*/

		num += 1;
	}
	var filteredArray = answer.filter(function(item, pos){
	  return answer.indexOf(item) == pos; 
	});
	filteredArray.sort()

	console.log(filteredArray)
}

console.log( solution([2,1,3,4,1]) )