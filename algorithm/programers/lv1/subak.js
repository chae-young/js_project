/*
길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

제한 조건
n은 길이 10,000이하인 자연수입니다.

n	return
3	수박수
4	수박수박

*/

function solution(n) {
    var answer = '';

    var su = '수';
    //var bak = '박'

    for(var i = 1;i<n;i++){
        
        if(i%2){
            su = su.concat('박')
        }else{
            su = su.concat('수')
        }
    }
    answer = su;
    return answer;
    //console.log(su,answer)
    
}

console.log(solution(3))
