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

//커링함수
var curry = function (func) {
    return function (a) {
        return function (b) {
            return func(a, b);
        };
    };
};

var getMaxWith10 = curry(Math.max)(10);
console.log(getMaxWith10(8)); // 10
console.log(getMaxWith10(25)); // 25

var getMinWith10 = curry(Math.min)(10);
console.log(getMinWith10(8)); // 8
console.log(getMinWith10(25)); // 10

const sum = (x) => {
    return (y) => {
        return (c) => {
            return x + y + c;
        };
    };
};

const a = sum(10);
const b = a(5);
b(5);
