function hello(name) {
   if (name === undefined)
       name = "World";

   return "Hello, " + name + "!";
}

module.exports = hello;

const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);

