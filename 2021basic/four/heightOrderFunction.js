//고차함수

const func1 = () => console.log(1);
const func2 = () => {
    return () => {
        console.log(2);
    };
};

const innerFunc1 = func1;
//innerFunc1 = console.log(1)

const innerFunc2 = func1(); // console.log(1)
const innerFunc2 = func2(); //함수를 호출한 상태 return 값이 들어감.
/* 
1번에서 innerFunc2() 를 호출하면 에러! 
2번에서 innerFunc2() 호출해야 정상

1번같은경우엔 함수를 호출하는 건데 리턴값이 그냥 콘솔일뿐이고
2번에는 함수가 리턴되기 때문에 정상작동된다.

*/

innerFunc1();
innerFunc2();
