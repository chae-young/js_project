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
