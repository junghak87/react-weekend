// 배열
// mutable (원본 배열이 변경)  vs immutable (원본 배열은 유지, 새로운 배열 리턴) 메서드

const arr1 = [];
const newLength = arr1.push(100); // 원본 배열을 변경하는 mutable method
// 원본 배열 arr1에 새로운 원소를 추가하고, 새로운 배열의 길이를 리턴한다.

console.log(arr1);
console.log(`length = ${newLength}`);

const arr2 = [];
const newArray = arr2.concat(100).concat(200);

console.log(arr2);
console.log(newArray);
// 원본 배열에 새로운 원소를 추가하지 않고, 원소를 추가한 새로운 배열을 리턴한다.

const arr3 = [1, 2, 3, 4, 5];
const popResult = arr3.pop();
// 원본 배열에 마지막 원소를 삭제하고, 배열에서 삭제된 값을 리턴하거나 빈 배열인 경우 undefined를 리턴.

console.log(arr3);
console.log(`Pop Result = ${popResult}`);

const arr4 = [1, 2, 3, 4, 5];
const sliced = arr4.slice(0, arr4.length - 1);
// 원본 배열에 원소를 삭제하지 않고, 잘라낸 배열의 복사본을 리턴.

console.log(arr4);
console.log(sliced);

//ES6 에서 새롭게 추가된 Array 함수
//forEach , filter, map, reduce
//forEach (callback) , filter(callback), map(callback)
// forEach , filter, map 의 argument 로 전달되는 callback argument 들:
// - value : 배열의 값
// - index : 배열의 순서
// - array : 배열 자체
// collback을 작성할때는 필요한 argument만 선언해도 됨.

// forEach : 순서대로 반복하면서 수행할 작업
const front = ["HTML", "CSS", "JavaScript", "TypeScript"];

front.forEach((value, idx) => console.log(`[${idx}] ${value}`));

// arrow function 미사용할 경우 예시
front.forEach(function (value, idx) {
  console.log(`[${idx}] ${value}`);
});

// filter : 순서대로 반복하면서 조건에 맞는 원소를 찾음
var filtered = front.filter((value) => value.length > 5);
var scriptFiltered = front.filter((value) => value.includes("Java"));

console.log(filtered);
console.log(scriptFiltered);

// map  : 순서대로 반복하면서 원소를 다른 값으로 변환.
var mapped = front.map((value) => value.toLowerCase());
console.log(mapped);

// 배열 front 에서 5글자 이상인 문자열들을 대문자로 변환후 출력
front
  .filter((value) => value.length >= 5)
  .map((value) => value.toUpperCase())
  .forEach((value) => console.log(value));

// reduce (collback, initalValue) : 배열의 모든 원소를 순회해서 값 1개를 리턴함.
// reduce collback 함수의 argument 들
// - previous value : collback 함수에서 이전에 리턴된 값
// - current value : 반복하고 있는 현재 배열의 값
// - current index : 반복하고 있는 현재 배열의 인덱스
// - array : 반복하고 있는 배열 자체

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, current) => (total += current), 0);
console.log(`sum = ${sum}`);

const factorial = numbers.reduce((total, current) => (total *= current), 1);
console.log(`factorial = ${factorial}`);

//쿼리 스트링을 분석해서 객체로 변환하는 함수
const queryString = "apple=10&banana=20&order=ok";

function parse(qs) {
  let result = {};
  const chunks = qs.split("&");
  for (let x of chunks) {
    // const part = x.split("=");
    // const key = part[0];
    // const value = part[1];

    //전개 연산자를 이용한 처리
    const [key, value] = x.split("=");
    result[key] = value;
  }

  return result;
}

console.log(parse(queryString));

// forEach 를 이용한 객체 생성
function parse2(qs) {
  let result = {};

  qs.split("&").forEach((value) => {
    const [k, v] = value.split("=");
    result[k] = v;
  });

  return result;
}

console.log(parse2(queryString));

// map
function parse3(qs) {
  return qs.split("&").map((value) => {
    const [k, v] = value.split("=");
    return { k, v };
  });
}

console.log(parse3(queryString));

// reduce
function parse4(qs) {
  return qs
    .split("&") // ['apple=10', 'banana=20' ...]
    .map((value) => {
      const [k, v] = value.split("="); // [k, v] = ['apple', '10'] ..
      return { k, v }; // { k: 'apple', v : '10'} ..
    }) // 반환이 모두 완료된 결과  [{ k: 'apple', v: '10' }, { k: 'banana', v: '20' }, ...]
    .reduce((prev, curr) => {
      prev[curr.k] = curr.v; // {apple: 10}
      return prev;
    }, {});
}

console.log(parse4(queryString));
