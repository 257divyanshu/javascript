// JAVASCRIPT 
// is used to program the behavior of web pages.

// SCRIPT TAG
// js code is written inside this tag
// they can be placed in head or in the body
// Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.
// scripts can also be placed in external files
// one scenario when we use an external script is when we have a same script for many different web pages
// external scripts behave like as it they are located exactly where the script tag is located

// ADVANTAGES OF USING EXTERNAL JAVASCRIPT
// it separates HTML and code
// it makes HTML and javascript easier to read and maintain
// cached javascript files can speed up page loads

// REFERENCING AN EXTERNAL SCRIPT
// with a full URL
// with a file path
// without any path

// WAYS TO OUTPUT
// using innerHTML
// using document.write()
// using window.alert()
// using console.log()
// NOTE : using document.write() after the document is loaded will delete all existing HTML
// the document.write() methd should only be used for testing

// JAVASCRIPT PRINT
// javascript doesn't have print methods or print objects
// we cannot access javascript devices using javascript
// we can call the window.print() method in the browser to print the content of the current window

// STATEMENTS
// A computer program is a list of instructions to be executed by a computer.
// In a programming language, these programming instructions are called statements.
// JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.

// SEMICOLONS
// Semicolons separate JavaScript statements.
// Add a semicolon at the end of each executable statement:

// KEYWORDS
// are reserved words

// VALUES
// two types of values : fixed values and variable values
// fixed values are called literals
// variable values are called variables

// EXPRESSIONS
// An expression is a combination of values, variables, and operators, which computes to a value.

// COMMENTS
// // for single line comments
// /* */ for multi line comments

// IDENTIFIERS
// are names of variables and functions

// NAMING RULES
// names can contain digits, alphabets, dollar sign and underscore
// names cannot start with a digit

// CHARACTER SET
// JavaScript uses Unicode character set.

// OPERATORS and OPERANDS
// numbers in an arithmetic operation are called operands
// the operation to be performed between two operands is defined by an operator

// OPERATOR PRECEDENCE
// describes the order in which operations are performed in an arithmetic expression

// ASSIGNMENT OPERATORS
// = /= *= -= += **= %=
// shift assignment operators : >>= <<= >>>=
// bitwise assignment operators : &= ^= |=
// nullish coalescing operator : ??=

// LOCAL VARIABLES
// variables declared inside a function become local to the function
// they can be accessed from inside the function only

// OBJECTS
// objects are variables too but objects can contain many values
// the name:value pairs in javascript objects are called properties
// methods are actions that can be performed on objects
// methods is a function stored inside a property

// BIGINT
// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
// let x = BigInt(9);
// let y = 9n;
// console.log(typeof(x));
// console.log(typeof(y));
// BigInt is a second numeric datatype in javascript after number
// Operators that can be used on a JavaScript Number can also be used on a BigInt.
// A BigInt can not have decimals.
// Arithmetic between a BigInt and a Number is not allowed 
// let x = 5n;
// let y = 2;
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(x/y); // cannot mix bigint and other datatype, use explicit conversion
// BigInt can also be written in hexadecimal, octal, or binary notation:
// Number.isSafeInteger() method
// Number.isInteger() method
// Safe integers are all integers from -(2^53 - 1) to + (2^53 - 1).

// ITERABLES 
// are iterable objects
// can be iterated over with for of loop
// iterating means looping over a sequence of elements
// we can iterate over a string using for of loop
// we can iterate over an array using for of loop
// we can iterate over a set using for of loop
// we can iterate over a map using of of loop

// BITWISE OPERATORS
// & for and
// | for or
// ^ for xor
// ~ for not
// << for zero fill left shift
// >> for right shift
// console.log(3<<1);
// console.log(7>>1);
// console.log(~5);
// 00000000000000000000000000000101 (5)
// 11111111111111111111111111111010 (~5 = -6)
// JavaScript stores numbers as 64 bits floating point numbers,
// all bitwise operations are performed on 32 bits binary numbers.
// Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.
// After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

// CONVERTING DECIMAL TO BINARY
// function dec2bin(dec){
//     return (dec >>> 0).toString(2); // DOUBT why did we use the >>>
// };
// console.log(dec2bin(3));

// CONVERTING BINARY TO DECIMAL
// function bin2dec(bin){
//     return parseInt(bin, 2).toString(10); // DOUBT how does this code work
// }
// console.log(bin2dec(11));

// PRECEDENCE
// Operator precedence describes the order in which operations are performed in an arithmetic expression.
// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

// TRY CATCH 
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// syntax
// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }
//   finally {
//     Block of code to be executed regardless of the try / catch result
// }
// The finally statement lets you execute code, after try and catch, regardless of the result:

// THROW STATEMENT
// The throw statement allows you to create a custom error.
// The exception can be a JavaScript String, a Number, a Boolean or an Object:
// throw "123";

// ERROR OBJECT
// JavaScript has a built in error object that provides error information when an error occurs.
// The error object provides two useful properties: name and message.

// TYPES OF ERRORS
// EvalError	An error has occurred in the eval() function
// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred
// URIError	An error in encodeURI() has occurred

// STRICT MODE
// "use strict"; Defines that JavaScript code should be executed in "strict mode".
// It is not a statement, but a literal expression
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// It helps you to write cleaner code, like preventing you from using undeclared variables.
// If Declared at the beginning of a script, it has global scope 
// If Declared inside a function, it has local scope

// WHY STRICT MODE
// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors
// - Using a variable, without declaring it, is not allowed:
// - Using an object, without declaring it, is not allowed:
// - Deleting a variable (or object) is not allowed.
// - Deleting a function is not allowed.
// - Duplicating a parameter name is not allowed:
// - Octal numeric literals are not allowed:
// - Octal escape characters are not allowed:
// - Writing to a read-only property is not allowed:
// const obj = {};
// console.log(obj.x);
// Object.defineProperty(obj, "x", {value:0, writable:false});
// console.log(obj.x);
// - Writing to a get-only property is not allowed:
// - Deleting an undeletable property is not allowed:
// delete Object.prototype
// - The word eval cannot be used as a variable:
// - The word arguments cannot be used as a variable:
// - The with statement is not allowed:
// - For security reasons, eval() is not allowed to create variables in the scope from which it was called.
// The "use strict" directive is only recognized at the beginning of a script or a function.