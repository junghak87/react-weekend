// 함수
// function 함수명(params..){...}

function add(x, y) {
  console.log(`x = ${x} y = ${y}`);
  return x + y;
}

let result = add(1, 2);
console.log(result);

//javaScript 는 argument 타입을 검사하지 않음
result = add("abc", 1);
console.log(result);

//javaScript 는 argument의 개수를 검사하지 않음
result = add(1);
console.log(result);

// function default argument
function add2(x = 0, y = 0) {
  return x + y;
}

console.log(add2());

// Function 을 변수에 받아서 사용 가능
const myFunction = add2;
console.log(myFunction);
console.log(myFunction(10, 20));

// Function 내부에서 Function을 생성할수도 있음
function plusN(n) {
  // 이름이 없는 익명 함수
  let f = function (x) {
    return x + n;
  };

  return f;
}

let plusOne = plusN(1);
console.log(plusOne);
console.log(plusOne(10));

let plusTen = plusN(10);
console.log(plusTen);
console.log(plusTen(10));

//화살표 함수 (arrow function expression)

//let multiply = function(x,y) {return x * y};
let multiply = (x, y) => x * y;
console.log(multiply(2, 3));

let hello = () => "안녕하세요";
console.log(hello());

// 함수를 이용한 배열 필터링
function myFilter(arr, func) {
  const result = []; // 빈 배열
  for (let x of arr) {
    if (func(x)) {
      result.push(x);
    }
  }

  return result;
}

const numbers = [1, -2, -3, 4, 5, -6];
// 익명 함수를 이용한 경우
// result = myFilter(numbers, function (x) {
//   return x > 0;
// });

// 화살표 함수를 이용한 경우
result = myFilter(numbers, (x) => x < 0);

console.log(result);
