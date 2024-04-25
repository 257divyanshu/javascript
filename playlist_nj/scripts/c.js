// HOISTING

// example 1
console.log(x); // gives undefinedc
sayHi(); // works
console.log(sayHi);
var x = 7;
function sayHi(){
    console.log("Hi");
};
console.log(x); // gives 7
sayHi(); // works
console.log(sayHi);

// if we remove the var x = 7;
// we get referenceError : x is not defined

// undefined and not defined are different things

// hoisting is a phenomena in javascripot whereby we can access variables and function before intializing them

// before the code execution phase
// in the memory execution phase
// x was assigned undefined
// sayHi was assigned it's function definition

// not defined means the x is not present in the memory
// undefined mwans x is present in the memory but it is not assigned any value

// if we had the sayHi function as an arrow function then we would gave undefined on logging the sayHi and typeerror saying sayhi is not a function because sayhi is now being treated as a variable, so it was assigned undefined, we can log undefined but we cannot call undefined