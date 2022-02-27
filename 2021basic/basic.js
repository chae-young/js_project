// 자료형

// 숫자
parseInt(3.14); //정수
parseFloat(3.14); //소수

/**
 둘의 차이는 parseInt는 문자열이 섞여있어도 숫자를 최대한 출력해주고 Number는 아예 출력하지 않는다
*/
parseInt("3월"); //3
Number("3월"); //Nan

/*
boolean을 형변환 하는경우
참이면 거짓->거짓에서 참 
두번 형변환한다. -> 결국엔 내 본래형태를 알게됨
*/
console.log(!!"a");

/*
거짓인값
false,0,NaN,undefined,null,""
*/

//반복문
/* while 은 false가 될때까지..
for문
if문 순서 -> 동작문 -> 조건문 -> 증가 (변수는 첫번째에만 실행)

while문은 조건식이 흩어져 있고 for문이 더 보기편함.
break 걸려있으면 while문은 끝!
continue 걸려있으면 다음 실행은 건너뛰어라!

무한반복할때 while문 쓴다 
무한반복문이라도 break를 사용하면 멈추기때문에 무한반복이 아님..
언제끝날지 모르는 반복문은 while을 쓴다!

*/

//구구단 출력, 짝수가 안나오도록 confinue사용

for (let i = 2; i < 10; i++) {
    if (i % 2 === 0) continue;
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//let 에 0을 고정한채로 별을 반대로 찍기
//내풀이
let j = 5;
for (let i = 0; i <= 5; i++) {
    console.log("*".repeat(j));
    j -= 1;
}

//정답
for (let i = 0; i < 5; i++) {
    console.log("*".repeat(5 - i));
}
/*
5 0
4 1
3 2
2 3
1 4

둘이 합하면 5..
*/

//배열
//마지막 추가방법
const target = [1, 2, 3];
target[target.length] = 4;

/* const는 상수지만 객체 내부는 바꿀수 있디. 통째로는 안된다! */

//라를 제거하세여 indexof 와 splice 사용
const arr = ["가", "나", "라", "라", "마", "라"];
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf("라", i) === i) {
        arr.splice(i, i);
    }
}
console.log(arr);
/**
 * 여러개,모두면 반복을 생각하라
 * 찾을때까지 니까 while문 사용
 */
while (arr.indexOf("라") > -1) {
    arr.splice(arr.indexOf("라"), 1);
}
