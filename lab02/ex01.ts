// TS 는 변수를 선언할 때 타입 주석(type annotation)을 사용
let num1: number = 1;
console.log(`x = ${num1}`);

// x = "hello"; // 다른 type을 할당할수 없음.

let msg = "hello"; // type script 는 타입 추론 기능이 있어서 type annotation이 설정하지 않아도 할당 값을 보고 변수의 타입을 결정.
console.log(msg);

// msg = 1; // 다른 type 할당 불가

// TS 정의할때 파라미터 타입은 추론이 안됨. 리턴 타입은 추론이 가능.
const plusOne = (x: number) => x + 1;
console.log(plusOne(10));

const user = {
  id: 1,
  name: "guest",
};

// 객체가 갖는 속성(properties)들의 타입을 선언 - 객체의 모양을 선언
interface User {
  id: number;
  name: string;
}

function showUser(user: User) {
  console.log(`id = ${user.id}, name = ${user.name}`);
}

showUser(user);

// Union (합집합) 기능을 사용해서, 간단한 타입들을 조합한 새로운 타입을 선언.
type LockState = "locked" | "unlocked";
let isLocked: LockState = "locked";

// Union 기능을 함수 파라미터 타입 주석에서도 활용.
// 문자열 또는 문자 배열을 허용
function getLength(x: string | string[]) {
  return x.length;
}

console.log(getLength("hello"));
console.log(getLength(["a", "b", "c"]));

// 변수의 type을 알아내려고 할 때 typeof 를 사용
// e.g. typeof x === 'string' , 'number', 'undefined'  타입의 이름을 문자열로 비교

// 배열인 경우 Array.isArray(x) 함수

function warp(x: string | string[]) {
  if (typeof x === "string") {
    return [x];
  }

  return x;
}
