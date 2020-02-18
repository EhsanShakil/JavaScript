// Addition:

var number1 = 10;
var number2 = 10;
var total = number1 + number2;
console.log(total)					//Result: 20

// Subtraction:

var number1 = 100;
var number2 = 50;
var total = number1 - number2;
console.log(total)					//Result: 50

// Multiplication:

var number1 = 10;
var number2 = 10;
var total = number1 * number2;
console.log(total)					//Result: 100

// Devide:

var number1 = 10;
var number2 = 2;
var total = number1 / number2;
console.log(total)					//Result: 5

// Remainder:

// Remainder is something which works little diferrent in any programming languages
// it works in a way if first number is totally divisible by second number like example one
// it will return 0.
// and if first number is not totally divisible by second number it will go to the nearest divisible 
// place like in example two and return the remaining value in this example two it returns 1. 
// and if first number have least value than second number it will simply return first number like
// in third example.

// Example One:
var number1 = 10;
var number2 = 2;
var total = number1 % number2;
console.log(total)					//Result: 0

// Example Two:
var number1 = 10;
var number2 = 3;
var total = number1 % number2;
console.log(total)					//Result: 1

// Example Three:
var number1 = 2;
var number2 = 10;
var total = number1 % number2;
console.log(total)					//Result: 2

// Power

var number = 2**5					//Double asterisk sign (**) provide power functionality
console.log(number)					//Result: 32

// BODMAS

var number = ((2+2) + 2 + (7+3) -2 +(2)**2)
console.log(number)					//Result: 18