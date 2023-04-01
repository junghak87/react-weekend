// 조건문
let age = 16;
if (age < 20) {
  console.log("미성년");
} else {
  console.log("성인");
}

// 삼항 연산자
// (조건식) ? (참인 경우 값) : (거짓인 경우 값)
let result = age < 20 ? "미성년" : "성인";
console.log(result);

let x = 10;

if (x > 0) {
  console.log("양수");
} else if (x < 0) {
  console.log("음수");
} else {
  console.log("0");
}

// switch-case문
let today = new Date();

console.log(today.getDay()); //

switch (today.getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 6:
    console.log("토요일");
    break;
  default:
    console.log("다른요일");
}

let num = "1";
switch (num) {
  case 0:
    console.log("step 0");
    break;
  case 1:
    console.log("step 1");
    break;
  default:
    console.log("unknown");
}

// 반복문
// for문
const arr = [1, 2, 10, 20];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for-in 문장
// 배열의 index를 순회(iteration) 한다.
for (let i in arr) {
  console.log(`Index = ${i} : Value  = ${arr[i]}`);
}

// for-of 문장
// 배열의 원소를 순회(iteration) 한다.
for (let el of arr) {
  console.log(el);
}

// foreach
arr.forEach((element) => {
  console.log(element);
});

// while 문
let i = 1;
while (i <= 5) {
  console.log(`i = ${i}`);
  i++;
}

// do-while 문
let j = 1;
do {
  console.log(`i = ${j}`);
  i++;
} while (j > 5);

// 반복문에서 break, continue 차이
for (let k = 0; k < 5; k++) {
  if (k === 3) break; // 가장 가까운 반복문을 종료
  console.log(k);
}

// continue
for (let k = 0; k < 5; k++) {
  if (k === 3) continue; // 가장 가까운 반복문을 종료
  console.log(k);
}
