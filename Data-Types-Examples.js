// 1) String:

var name = "Ehsan" 								// Declaring and Initializing a variable. you can initialize a string with a single or double quote both are similar.
console.log(name) 			// Result: Ehsan	// Console.log is use to check the code in any browser developer tool.
console.log(typeof(name))	// Result: string	// typeof is a function we use to check any variable data type.

// 2) Number:

var digit = 20; 								// Declaring and Initializing a variable.
console.log(digit) 			// Result: 20		// Console.log is use to check the code in any browser developer tool.
console.log(typeof(digit))	// Result: number	// typeof is a function we use to check any variable data type.

// 3) Boolean:

var boolean1 = true; 								// Declaring and Initializing a variable. Boolean data type just have two values true and false.
var boolean2 = false; 								// Declaring and Initializing a variable. Boolean data type just have two values true and false.
console.log(boolean1) 			// Result: true		// Console.log is use to check the code in any browser developer tool.
console.log(boolean2) 			// Result: false	// Console.log is use to check the code in any browser developer tool.
console.log(typeof(boolean1))	// Result: boolean	// typeof is a function we use to check any variable data type.
console.log(typeof(boolean2))	// Result: boolean	// typeof is a function we use to check any variable data type.

// 4) BigInt:

var number = 1234567890123456789012345678901234567890n;										// Declaring and Initializing a variable. "n" is a word convert this number is "BigInt".
console.log(number) 			// Result: 1234567890123456789012345678901234567890n		// Console.log is use to check the code in any browser developer tool.
console.log(typeof(number))		// Result: bigint											// typeof is a function we use to check any variable data type.

// we use this because there is a limit in JavaScript for integers numbers if you use this.
// number without "n" it will give you answer in exponential form and some time we need need.
// answer in the form of number so that's why this is introduced and it is useful for cryptography.

// 5) Undefined:

var firstName;					// If a variable is declared but value is not assigned into it so there value will be "undefined".
console.log(firstName)			// Result: undefined

// 6) Null:

var age = null;					// If a variable is declared and the value is "Null" its mean it does not contain anything means “nothing” or “empty”.
console.log(age)				// Result: null

// 7) Symbol:

// Every symbol has its own identity and if the symbols have same value in it they are not same
// because symbols always have unique identity.

// There are two ways to create "Symbol" first one "Local Symbols" which are always unique and second one is "Global Symbol"

// Local Symbol:

var symbol1 = Symbol('Age')				//Through "Symbol" keyword we create a local symbol. This is symbol one.
var symbol2 = Symbol('Age')				//This is symbol two.

console.log(typeof(symbol1))			//Result: Symbol
console.log(typeof(symbol1))			//Result: Symbol

console.log(symbol1)					//Result: Symbol(Age)
console.log(symbol2)					//Result: Symbol(Age)

console.log(symbol1.description)		//Result: Age
console.log(symbol2.description)		//Result: Age

console.log(symbol1 === symbol2)		//Result: false 	  //(Value of symbol1 and symbol2 are same but symbol always have unique identity that's why it returns false)

console.log(Symbol.keyFor(symbol1))		//Result: undefined	  //Through this "Symbol.keyFor" keyword we find global symbol and they are local so that's why it return "undefined"
console.log(Symbol.keyFor(symbol2))		//Result: undefined   //Through this "Symbol.keyFor" keyword we find global symbol and they are local so that's why it return "undefined"

// Global Symbol:

var age = Symbol.for("age");			//Through "Symbol.for" keyword we create or find a global symbol. what does find mean here it means if a symbol is already 
										//created it just find that global symbol and does not create a new one if it does not find then it will a new one.
var age1 = Symbol.for("age");

console.log(typeof(age))				//Result: Symbol
console.log(typeof(age1))				//Result: Symbol

console.log(age)						//Result: Symbol(age)
console.log(age1)						//Result: Symbol(age)

console.log(age.description)			//Result: age
console.log(age1.description)			//Result: age

console.log(age === age1)				//Result = true

console.log(Symbol.keyFor(age))			//Result: age	  //Through this "Symbol.keyFor" keyword we find global symbol and they are global so that's why it return "age"
console.log(Symbol.keyFor(age1))		//Result: age	  //Through this "Symbol.keyFor" keyword we find global symbol and they are global so that's why it return "age"


// Object:

// Objects data type is use to contain lots of data at ones 
// this type we cover it in details each will be explain in 
// details and in seperate topic. These includes Functions, 
// Objects and Array.