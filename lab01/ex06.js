// 객체(object) , 클래스(class)
const x = 1;
const y = 2;
const obj = {
  x: x,
  y: y,
  // 메서드 (method) : 객체가 가지고 있는 함수
  log: function () {
    console.log(`x=${x}, y=${y}`);
  },
};

console.log(obj);
// { x: 1, y: 2 }

obj.log();

//ES6(ECMAScript2015) 부터 바뀐 내용
const obj2 = {
  x, // 기존에 선언된 변수 x: x를 간단히 처리 (x: 1)
  y, // y: y를 간단히 처리 (y:2)
  // function 키워드 없이 method 선언이 가능
  log() {
    console.log(`x=${x}, y=${y}`);
  },
};

obj2.log();

// 생성자 함수를 이용한 객체 생성 - class 키워드가 도입되기전 (ES6 이전)
function Book(title, author, publisher, price) {
  //객체의 속성값 (properties)
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.price = price;

  //객체의 method
  this.discount = function (ratio) {
    return this.price * (1 - ratio);
  };
}

const book1 = new Book("Recat 다루는 기술", "김민준", "길벗", 42_000);

console.log(book1);

// ES6에서 Class  키워드를 사용하여 객체의 모양을 정의
// 클래스에서 속성 값을 선언할때 var, const, let 같은 키워드를 사용하지 않음.
// 클래스에서 메서드를 선언할때 function 키워드를 사용하지 않음.
// 인스턴스 변수 - 객체가 생성된 후 사용할 수 있는 속성들
class MyBook {
  // 생성자 함수를 정의
  constructor(title, author, publisher, price) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.price = price;
  }

  //메소드
  discount(ratio) {
    return this.price * (1 - ratio);
  }
}

const book2 = new MyBook("Recat 다루는 기술", "김민준", "길벗", 42_000);

console.log(book2);

// 상속, override
class Shape {
  constructor(x, y) {
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  area() {
    return 0;
  }
}

// 상속 : 원, 사각형은 도형이다.
// 도형 (Shape) : 부모(상위 타입, Super), 원(Circle) : 자식(하위 타입, sub)
// Shape : Parent , Rectangel : Child
class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y); // 부모 클래스의 생성자 호출
    this.radius = radius;
  }

  // override : 부모의 메서드를 재정의 하는것
  area() {
    return 3.14 * this.radius * this.radius;
  }
}

const circle = new Circle(0, 0, 10);

console.log(circle);
circle.move(1, 2); // 부모로 부터 상속받은 메소드를 사용
console.log(circle);
console.log(circle.area());
