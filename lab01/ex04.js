// ESNext - ECMAScript 2015 이후

// 전개 연산자 (spread operator)

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const combinedArray = [...arr1, ...arr2]; //

console.log(combinedArray);

const [arrOne, arrTwo, ...arrOthers] = combinedArray; // 구조분해 할당, 객체나 배열의 원소를 분해해서 변수로 바로 할당 가능

console.log(`one = ${arrOne}`);
console.log(`two = ${arrTwo}`);
console.log(`others = ${arrOthers}`);

function f1(...args) {
  const [first, ...others] = args;
  console.log(`first = ${first}`);
  console.log(`others = ${others}`);
}

f1(1, 2, 3);
f1(1, 2, 3, 4, 5);

// 객체 전개 연산자
const obj1 = {
  num1: 0,
  one: 1,
  two: 2,
};

const obj2 = {
  num1: -1,
  three: 3,
  four: 4,
};

const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);

const combinedObject2 = { ...obj2, ...obj1 };
console.log(combinedObject2);

//객체 구조 분해 (Key 값을 사용해서 구조 분해)
const { one, two, ...others } = combinedObject;
console.log(`obj1 = ${one}`);
console.log(`obj2 = ${two}`);
console.log(`Other Objs = ${others}`);

const employee = {
  empId: 100,
  empName: "홍길동",
  salary: 300,
};

function displayEmployee(e) {
  console.log(`사번 : ${e.empId}, 이름 : ${e.empName}, 급여 : ${e.salary}`);
  console.log();
}

//구조분해 할당을 이용한 함수 argment 선연
function displayEmployee2({ empId, empName, salary }) {
  console.log(`ID : ${empId}, Name : ${empName}, Salary : ${salary}`);
}

displayEmployee(employee);

displayEmployee2(employee);
