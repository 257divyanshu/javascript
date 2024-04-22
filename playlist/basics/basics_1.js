// -------------------------
// 🟩 VAR V/S LET V/S CONST
// -------------------------

// The let and const keywords were added to JavaScript in 2015.
// The var keyword should only be used in code written for older browsers.

// variables declared with var can be re-declared and updated
// variables declared with let cannot be re-declared but can be updated
// variables declared with const can neither be re-declared nor be updated

// let and const are block scoped

// const variables must be assigned a value when they are declared:

// we can change the elements of a const array but we cannot reassign the array
// we can change the properties of a const object but we cannot reassign the object

// before 2015 javascript didn't have block scope
// it had global scope and function scope

// avoid var
// use const for values that won't change
// if the values can change use let

// NOT USING VAR LET OR CONST
// a = 2;
// console.log(a);
// won't throw any error
// but it's a bad practice

// -----------------
// 🟩 CONSOLE.TABLE
// -----------------

// The table() method writes a table to the console.

// can be used with arrays
// let a = 2;
// let b = 3;
// let c = 4;
// console.table([a,b,c]);

// can be used with objects
// console.table({firstname:"John", lastname:"Doe"});

// if we pass a single object to the console.table then the keys of the object will become the index of the table and the values of the object will become the values of the table

// example 
// const car1 = {name:"Audi", model:"A4", country:"america"}
// const car2 = {name:"Volvo", model:"XC90"}
// const car3 = {name:"Ford", model:"Fusion"}
// console.table([car1, car2, car3]);
// console.table([car1, car2, car3], ["name"]);
// console.table([car1, car2, car3], ["model"]);

// if we pass an array of objects to the console.table then the index of objects in the array will be the index of the table and the key names of those object will become the name of columns 

// ----------------------------
// 🟩 UNINITIZALIZED VARIABLES
// ----------------------------

// The undefined keyword indicates that a variable has not been assigned a value

// let a;
// console.log(a);
// a is assigned undfined

// -------------
// 🟩 DATATYPES
// -------------

// "use strict"; // treat all JS code as newer version

// alert("Hello");
// alert is not defined in nodejs environment

// code should be readable also

// PRIMITIVES
// null (standalone value)
// number
// string
// symbol (used for uniqueness)
// bigInt
// boolean
// undefined

// NON PRIMITIVES
// object, array, date

// DYNAMICALLY TYPED LANGUAGE
// JavaScript has dynamic types. This means that the same variable can be used to hold different data types

// NUMBERS
// All JavaScript numbers are stored as decimal numbers (floating point).
// Javascript numbers are always one type: double (64-bit floating point).

// BIGINT
// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

// console.log(typeof undefined); // gives undefined
// console.log(typeof null); // gives object

// -----------------------
// 🟩 DATATYPE CONVERSION
// -----------------------

// STRINGS TO NUMBERS
// Number() method for converting a value to a number
// parseFloat()
// parseInt()
// + (unary operator)
// console.log(Number(""));
// console.log(Number(" "));
// console.log(Number("1.1234"));
// console.log(parseFloat("1.1234"));
// console.log(parseInt("1.1234"));
// console.log("1.234");
// console.log(+"1.234");

// NaN() method
// if a varialbe could't be converted to a number it will be converted to NaN

// NUMBERS TO STRINGS
// String() method 
// toString() method
// toExponential() method
// toFixed() method
// toPrecision() method
// console.log(String(1.1234));
// console.log(1.1234.toString());
// console.log(1.1234.toExponential());
// console.log(1.1234.toFixed(2));
// console.log(1.1234.toPrecision(2));

// DATES TO NUMBERS
// Number() method
// getTime() method
// const date = new Date();
// console.log(date);
// console.log(Number(date));
// console.log(date.getTime());

// DATES TO STRINGS
// String() method
// toString() method
// getDate()
// getDay()
// getFullYear()
// getHours()
// getMilliseconds()
// getMinutes()
// getMonth()
// getSeconds()
// getTime() 
// let date = new Date();
// console.log(date);
// console.log(String(date));
// console.log(date.toString());

// BOOLEANS TO NUMBERS
// Number() method
// let bool1 = true;
// let bool2 = false;
// console.log(Number(bool1));
// console.log(Number(bool2));

// BOOLEANS TO STRINGS
// String() method
// toString() method
// let bool1 = true;
// let bool2 = false;
// console.log(bool1);
// console.log(bool1.toString());
// console.log(String(bool1));

// AUTOMATIC TYPE CONVERSION
// 5 + null    // returns 5         because null is converted to 0
// "5" + null  // returns "5null"   because null is converted to "null"
// "5" + 2     // returns "52"      because 2 is converted to "2"
// "5" - 2     // returns 3         because "5" is converted to 5
// "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
// console.log(typeof("5"*"2"));

// TO NOTE DOWN
// console.log(Boolean("0")) // true
// console.log(Boolean("00")) // true
// console.log(Boolean(""));
// console.log(Number(""));
// console.log(Number(null));

// let a = "33";
// let c = "33abc";
// let b = Number(c);
// console.log(b); // is NaN
// console.log(typeof a);
// console.log(typeof b);

// Number(null) is 0
// Number(undefined) is NaN
// Number(true) is 1
// Number(false) is 0
// Number(non-numeric-string) is NaN
// Number(numeric-string) to number
// console.log(Number(undefined));

// Boolean function
// console.table([ Boolean(1),
//                 Boolean(0),
//                 Boolean('str'),
//                 Boolean(undefined),
//                 Boolean(null),
//                 Boolean(NaN),
//                 Boolean("")]
//             );

// -------------
// 🟩 OPERATORS
// -------------

// TYPES OF OPERATORS
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

// arithmetic operators
// + - * / % ** ++ --

// assignment operators
// = += -= *= /= %= **=

// comparision operators
// == !== != === > < >= <= ?

// ternary operator
// condition ? trueExpression : falseExpression
// let age = 18;
// console.log(age>18 ? "allowed":"now allowed");

// strings are compared alphabetically
// let text1 = "20";
// let text2 = "5";
// let result = text1 < text2;
// console.log(result); // gives true

// logical operators
// && || !

// type finding operators
// typeof instanceof

// typeof operator
// typeof "John"                 // Returns "string"
// typeof 3.14                   // Returns "number"
// typeof NaN                    // Returns "number"
// typeof false                  // Returns "boolean"
// typeof [1,2,3,4]              // Returns "object"
// typeof {name:'John', age:34}  // Returns "object"
// typeof new Date()             // Returns "object"
// typeof function () {}         // Returns "function"
// typeof myCar                  // Returns "undefined" *
// typeof null                   // Returns "object"

// TO NOTE (about typeof operators)
// The data type of NaN is number
// The data type of an array is object
// The data type of a date is object
// The data type of null is object
// The data type of an undefined variable is undefined *
// The data type of a variable that has not been assigned a value is also undefined *
// the typeof operator always returns a string

// bitwise operators
// & | >> << ^ ~

// string concatenation
// let a = "chinu";
// let b = "codes";
// console.log(a+b);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(2 + 2 + "1");

// console.log(+true);
// console.log(+"");

// ------------------------
// 🟩 COMPARISON OPERATORS
// ------------------------

// console.log("2">1);
// console.log("02">1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// avoid these comparisons

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);
// avoid these comparisons

// === is strict comparison (compares datatype also)

// -------------
// 🟩 DATATYPES
// -------------

// null
// number
// string
// symbol
// boolean
// bigInt
// undefined
// are passed by values

// null is empty
// undefined (variable delared, memory assigned but value not assigned)

// symbol are used for making something unique

// bitInt for larger values

// non-primitive datatypes of reference datatypes
// are passed by reference
// ex: object arrays functions

// javascript is dynamically typed language

// const id1 = Symbol('1234');
// const id2 = Symbol('1234');
// console.log(id1==id2);
// console.log(id1===id2);

// const bigNumber = 34n;
// console.log(bigNumber);

// 1) Primitive Datatypes
// Number => number
// String => string
// Boolean => boolean
// null  => object
// undefined => undefined
// Symbol => symbol
// BigInt => bigint

// 2) Non - primitive Datatypes
// Arrays => object
// Function => function
// Object  => object

// undefined and null are equal in value but differnt in type

// --------------
// STACK AND HEAP
// --------------

// earler memory allocation was manual (low level language) not it's automatic (high level language)

// stack (used for primitive datatypes)
// heap (used for not primitive datatypes)

// let a = 10;
// let b = a;
// b = 9;
// console.log(a);
// console.log(b);
// a was passed by value

// let obj1 = {
//     name: "divyanshu",
// };
// let obj2 = obj1;
// obj2.name = "chinu";
// console.log(obj1);
// console.log(obj2);
// obj1 is passed by reference

// -----------
// 🟩 STRINGS
// -----------

// STRING INTERPOLATION USING TEMPLATE LITERALS
// let name = "chinu";
// let package = "12LPA";
// console.log(`${name} got placed at ${package} package`);

// ESCAPE CHARACTERS
// The backslash escape character (\) turns special characters into string characters
// console.log("Hi \' chinu")
// console.log("Hi \" chinu")
// console.log("Hi \\ chinu")

// STRING METHODS for extracting string characters
// let text = "chinu";
// console.log(text.charCodeAt(1));
// console.log(text.charAt(1));
// console.log(text.charAt(-1)); // negative index isn't allowed
// console.log(text.at(1));
// console.log(text.at(-1)); // negative index is allowed

// SLICE v/s SUBSTRING v/s SUBSTR (for extracting string parts)

// slice extracts a part of a string and returns the extracted part in a new string.
// takes two parameters start position and end position
// If you omit the second parameter, the method will slice out the rest of the string:
// If a parameter is negative, the position is counted from the end of the string:
// let text = "abcdefghijklmnopqrstuvwxyz";
// let part = text.slice(7, 13);
// part = text.slice(2);
// part = text.slice(-2);
// part = text.slice(-20,-4);
// console.log(part);

// substring() is similar to slice(). 
// The difference is that start and end values less than 0 are treated as 0 in substring().
// If you omit the second parameter, substring() will slice out the rest of the string.
// let text = "abcdefghijklmnopqrstuvwxyz";
// // let part = text.substr(1,3);
// // part = text.substr(1,-3);
// // part = text.substr(-3);
// // part = text.substr(3);
// part = text.substr(-3,1);
// part = text.substr(-3,-1);
// console.log(part);

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// If you omit the second parameter, substr() will slice out the rest of the string.
// If the first parameter is negative, the position counts from the end of the string.
// let text = "abcdefghijklmnopqrstuvwxyz";
// let part = text.substr(1,4);
// part = text.substr(1);
// part = text.substr(-4,1);
// console.log(part);

// toUpperCase() and toLowerCase() method

// concat() method

// trim() trimStart() trimEnd() method

// padStart() and padEnd() method
// the padStart() method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length.
// let text = "5";
// let padded1 = text.padStart(4,"x");
// let padded2 = text.padStart(4,"xy");
// let padded3 = text.padEnd(4,"x");
// let padded4 = text.padEnd(4,"xy");
// console.log(padded1)
// console.log(padded2)
// console.log(padded3)
// console.log(padded4)
// The padStart() and padEnd() methods are string methods.
// To pad a number, convert the number to a string first.

// repeat() method
// The repeat() method returns a string with a number of copies of a string.
// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result);

// replace method
// doesn't change the original string
// it return a new string
// it replaces only the first match
// const urlname = "https://chinuBlogs.com";
// console.log(urlname);
// const newUrlName = urlname.replace("h","x");
// console.log(newUrlName);

// split method
// converting string to array
// let name = "chinu-sahu";
// let arr = name.split('');
// arr = name.split('-');
// console.log(arr);

// includes() method
// startsWith() method
// endsWith() method

// indexOf() method
// lastIndexOf() method
// search() method (The search() method searches a string for a string (or a regular expression) and returns the position of the match:)

// search() v/s indexOf()
// search() method cannot take second start position argument
// indexOf() method cannot take powerful search values

// match() method
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));

// ----------
// 🟩 NUMBER
// ----------

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
// The maximum number of decimals is 17.

// NUMERIC STRINGS
// console.log(typeof("120"+"20")) // 1220
// console.log(typeof("120"-"20")) // 100
// console.log(typeof("120"/"20")) // 6
// console.log(typeof("120"*"20")) // 2400

// NaN
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
// use isNaN() function to find out if a value is not a number
// If you use NaN in a mathematical operation, the result will also be NaN:

// BASE CONVERSION
// let a = 32;
// console.log(a.toString());
// console.log(a.toString(2));
// console.log(a.toString(4));
// console.log(a.toString(8));
// console.log(a.toString(16));
// console.log(a.toString(32));

// NUMBER PROPERTIES
// EPSILON	The difference between 1 and the smallest number > 1.
// MAX_VALUE	The largest number possible in JavaScript
// MIN_VALUE	The smallest number possible in JavaScript
// MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
// MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
// POSITIVE_INFINITY	Infinity (returned on overflow)
// NEGATIVE_INFINITY	Negative infinity (returned on overflow)
// NaN	A "Not-a-Number" value

// NUMBER METHODS
// toString() toExponential() toFixed() toPrecision() valueOf() 

// GLOBAL METHODS FOR CONVERTING VARIABLES TO NUMBERS
// Number() parseFloat() parseInt() 
// TO NOTE
// console.log(parseFloat("10 years"));
// console.log(parseFloat("years 10"));
// console.log(parseFloat("30 20 10"));

// NUMBER OBJECT METHODS
// Number.isInteger() Number.isSafeInteger() Number.parseFloat() Number.parseInt()

// toLocaleString() method
// const salary = 1000000;
// console.log(salary.toLocaleString());
// console.log(salary.toLocaleString('en-IN'));

// ---------------
// 🟩 MATH OBJECT
// ---------------

// Unlike other objects, the Math object has no constructor.
// The Math object is static.
// All methods and properties can be used without creating a Math object first.
// console.log(Math);

// PROPERTIES
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// METHODS TO ROUND A DECIMAL TO INTEGER
// Math.round(x) // Math.ceil(x) // Math.floor(x) // Math.trunc(x) 

// Math.sign() method
// Math.pow(x,y) method
// Math.sqrt(x,y) method
// Math.abs(x) method
// Math.sin(x) method
// Math.cos(x) method
// Math.tan(x) method
// Math.min(x,y,z) method
// Math.max(x,y,z) method
// Math.log(x) method
// Math.log2(x) method
// Math.log10(x) method

// random() method
// console.log(Math.floor(10*Math.random())); // min 0 max 9
// console.log(Math.ceil(10*Math.random())); // min 1 max 10

// finding a random number from a range (including the min and the max)
// let min = 10;
// let max = 20;
// let newSet = new Set([]);
// for(let i = 0; i<1000; i++)
// {
//     newSet.add(min+Math.floor(((max+1)-min)*Math.random()));
// };
// let arr = Array.from(newSet);
// arr.sort();
// console.log(arr);

// ---------------
// 🟩 DATE OBJECT
// ---------------

// Date objects are static. The "clock" is not "running".
// The computer clock is ticking, date objects are not.

// WAYS TO DECLARE A DATE
// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)
// If you supply only one parameter it will be treated as milliseconds.
// JavaScript counts months from 0 to 11:
// One and two digit years will be interpreted as 19xx:

// JavaScript stores dates as number of milliseconds since January 01, 1970.
// Zero time is January 01, 1970 00:00:00 UTC.

// string formats for dates
// const today = new Date();
// console.log(today);
// console.log(today.toString()); // the best
// console.log(today.toDateString()); 
// console.log(today.toISOString());
// console.log(today.toLocaleDateString()); 
// console.log(today.toLocaleString()); 
// console.log(today.toLocaleTimeString());
// console.log(today.toTimeString());
// console.log(today.toUTCString());

// DATE FORMATS
// ISO Date	"2015-03-25" (The International Standard)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"

// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

// PARSING A DATE STRING
// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// Date.parse() returns the number of milliseconds between the date and January 1, 1970:
// let msec = Date.parse("1970-01-01T05:30:00Z");
// let msec = Date.parse("1970-01-01T05:30:00+05:30");
// console.log(msec);

// typeof date is object
// console.log(typeof(today));

// DATE GET METHODS
// getFullYear() getMonth() getDate() getDay() getHours() getMinutes() getSeconds() getMilliseconds() getTime() 
// similarly we have getUTC methods

// OTHER GET METHODS
// The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:

// SET METHODS
// setDate() setFullYear() setHours() setMilliseconds() setMinutes() setMonth() setSeconds() setTime() 

// DATE.NOW() METHOD
// Date.now() returns the number of milliseconds since January 1, 1970.

// NOTE
// If adding days shifts the month or year, the changes are handled automatically by the Date object.

// declaring specific date
// const date1 = new Date(2023,0,23,5,30,59);
// const date1 = new Date("2024-04-06");
// const date1 = new Date("04-06-2024");
// console.log(date1.toString());

// conversion to seconds
// let date = new Date();
// console.log(date);
// console.log(date.getTime());
// console.log(date.getTime()/1000);

// REMAINING
// STACK AND HEAP