function sayHello() {
   console.log("Hello, World!");
}
//nothing

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);
//returns 10

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');

//BobBob

let num = 42;

function isEven (num) {
   return num % 2 === 0;
}

console.log(isEven(43));