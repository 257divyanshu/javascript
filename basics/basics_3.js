// ---------
// FUNCTIONS
// ---------

// EXAMPLE 1
// function sum1(num1,num2)
// {
//     console.log(num1+num2);
// };
// function sum2(num1,num2)
// {
//     return num1+num2;
//     console.log("I wont't get executed");
// };
// const result1 = sum1(2,3);
// const result2 = sum2(2,3);
// console.log("result1 is ",result1); // given us undefined because the function doesn't return anything
// console.log("result2 is ",result2); // given us undefined because the function doesn't return anything

// EXAMPLE 2
// function logInNotification(userName)
// {
//     if(!userName)
//     {
//         console.log("Please enter a userName");
//         return;
//     }
//     else
//     {
//         return `${userName} just logged In`;
//     };
// };
// console.log(logInNotification('chinu'));

// EXAMPLE 3
// using rest operator when number of arguments is not known
// function makeArray(...arr)
// {
//     return arr;
// };
// console.log(makeArray(10,20,30));

// EXAMPLE 4
// const user = {
//     name: "chinu",
//     age: 21,
// };
// function handleObject(obj)
// {
//     console.log(`I am ${obj.name}. I am ${obj.age} years old`);
// };
// handleObject(user);
// handleObject({name: "gudiya", age:19});

// -----
// SCOPE
// -----

// let a = 10;
// var b = 20;
// const c = 30;
// console.table([a,b,c]);

// EXAMPLE 1
// if(true)
// {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// };
// console.log(a);
// console.log(b);
// console.log(c);

// EXAMPLE 2
// var a = 10;
// if(true)
// {
//     a = 30;
// };
// console.log(a);

// EXAMPLE 3
// let a = 10;
// if(true)
// {
//     let a = 20;
//     console.log(a);
// };
// console.log(a);
// similar for const

// function one()
// {
//     let a = 10;
//     function two()
//     {
//         let b = 20;
//         console.log(a); // won't throw any error
//     };
//     // console.log(b); // will throw an error
//     two(); 
// };
// one();

// --------------------
// FUNCTION EXPRESSIONS AND HOISTING
// --------------------

// console.log(sum1(2,3));
// function sum1(a,b)
// {
//     console.log(a+b);
// };

// console.log(sum(2,3));
// const sum = function(a,b)
// {
//     console.log(a+b);
// };

// ------------
// THIS KEYWORD
// ------------

// const user = {
//     userName: "chinu",
//     price: "99",
//     welcomeMessage: function()
//     {
//         console.log(`welcome to website ${this.userName}!`)
//     },
// };
// user.welcomeMessage();
// user.userName = "gudiya";
// user.welcomeMessage();
// this is used to refer to current context (in case of object)

// console.log(this);
// this in global space in node refers to empty object
// this in global space in browser refers to window object

// earlier we didn't had standalone engine
// today we have standalone engines

// function one()
// {
//     console.log(this);
// };
// one();

// function one()
// {
//     let a = 10;
//     console.log(this.a); // undefined
// };
// one();

// ---------------
// ARROW FUNCTIONS
// ---------------

// const one = ()=>{
//     let a = 20;
//     console.log(this.a); // undefined
// }
// one();

// const sum = (a,b) => {
//     return a+b;
// };
// const sum = (a,b) => a+b;
// const sum = (a,b) => (a+b);
// console.log(sum(1,2));
// const mult = a => 2*a;
// console.log(mult(2));

// ----
// IIFE
// ----

// function iife()
// {
//     console.log("connection established");
// };
// this will pollute the global space

// (function iife()
// {
//     console.log("connection established");
// })();
// why do we need this
// for establishing database connection (this should happen when our application starts)

// iife is
// immediately invoked function expresssion
// which doesn't cause global scope pollution

// (function iife() // named iife
// {
//     console.log("connection established");
// })()
// ((a)=>{ // anonymous iife
//     console.log("connection established again", a)
// })('chinu');
// semicolon problem

// ---------
// CALLSTACK
// ---------

// GLOBAL EXECUTION CONTEXT
// when javascript code executino starts a global execution context is created
// different environments have different global object

// TYPES OF EXECUTION CONTEXT
// global exectution conext
// function execution context

// TWO PHASES
// memory creation phase (creation phase)
// code execution phase 

// IN MEMORY CREATION PHASE
// memory is allocated to varialbes

// IN CODE EXECUTION PHASE
// code is executed line by line

// EXAMPLE 1
// let val1 = 10;
// let val2 = 5;
// function read(val)
// {
//     return `this is ${val}`;
// };
// let result1 = read(val1);
// let result2 = read(val2);
// gec or global environment is created
// memory creation phase
// memory is assigned to val1, val2, read, result1, result2
// val1, val2, result1, result2 are assigned undefined
// read is assigned the function definition
// code execution phase
// val1 is assigned 10
// val2 is assigned 5
// function call!
// new function execution context is created
// memory creation phase starts
// val is allocated memory
// code execution phase starts
// val is assigned 10
// result is logged into the console
// function execution context is deleted
// control shifts back to the next line and to the gec
// similar function execution context creation, memory creation and code execution occurs for the second invokation

// ----------
// CALL STACK
// ----------

// manages the execution context 
// follows lifo

// ------------
// CONTROL FLOW
// ------------

// let balance = 1000000;
// if(balance > 500) console.log("buy it");

// is used in conditional rendering

// let price = 200;
// switch (price) {
//     case 100:
//         console.log("but 10")
//         // break;
//     case 200:
//         console.log("but 5")
//         // break;
//     case 300:
//         console.log("but 3")
//         // break;
//     case 400:
//         console.log("but 2")
//         // break;
//     case 500:
//         console.log("but 2")
//         // break;
//     default:
//         console.log("buy 1")
//         // break;
// };
// if we omit the break keyword then all the cases after the matched case will also be executed 

// let vari = [];
// if(vari)
// {
//     console.log("true")
// }
// else
// {
//     console.log("false");
// };

// FALSY VALUES
// false
// ""
// 0
// null
// undefined
// NaN

// TRUTHY VALUES
// "0"
// "false"
// " "
// []
// {}
// function(){}

// CHECKING IF ARRAY IS EMPTY OR NOT
// let arr = [];
// if(arr.length===0)
// {
//     console.log('it is empty')
// }
// else
// {
//     console.log("it is not empty")
// };

// CHECKING IF OBJECT IS EMPTY TO NOT
// let obj = {};
// if(Object.keys(obj).length === 0)
// {
//     console.log("object is empty");
// }
// else
// {
//     console.log("object is not empty");
// };

// NULLISH COLAESCING OPERATOR ?? : NULL and UNDEFINED
// let val1;
// val1 = 5 ?? 10; // gives 5
// val1 = null ?? 10; // gives 10
// val1 = undefined ?? 20; // gives 20
// val1 = null ?? 1 ?? 20; // gives 1
// console.log(val1);

// TERNARY OPERATOR
// let balance = 1;
// // console.log(balance>10 ? "greater than 10":"not greater than 10");
// balance>10? console.log("greater than 10") : console.log("not greater than 10");

// -----
// LOOPS
// -----

// FOR EACH LOOP
// const chars = ['a','b','c','d','e','f'];
// chars.forEach(function(value,index,array)
// {
//     console.log("value is ",value);
// })

// FOR OF LOOP ON ARRAYS
// const arr = [1,2,3,4,5];
// for(let a of arr)
// {
//     console.log(a);
// };

// FOR OF ON OBJECTS
// doesn't work
// const obj = {
//     name:"chinu",
//     hobby:"sleeping",
// };
// for(let a of obj)
// {
//     console.log(a);
// }

// FOR IN ON OBJECTS
// const obj = {
//     name:"chinu",
//     hobby:"sleeping",
// };
// for(let key in obj)
// {
//     console.log(`${key} is ${obj[key]}`);
// };

// FOR IN ON ARRAYS
// const arr = ['a','b','c','d'];
// for(let a in arr)
// {
//     console.log(a);
//     console.log(arr[a]);
// };
// in case of arrays keys are indices
// in case of arrays values are elements of the array

// ----
// MAPS
// ----
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// WAYS TO CREATE A MAP
// by passing an array to the new Map() method
// creating an map and then using the Map.set() method

// THE NEW MAP METHOD for creating a map and the SET() method for adding key-value pairs to a map
// the set method can also be used to override an existing key's value
// const fruits = new Map([
//     ["applies",500],
//     ["oranges",1000],
//     ["bananas",1500],
// ]);
// const fruits = new Map();
// fruits.set("applies",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// fruits.set("apples",800);
// console.log(fruits);

// GET() METHOD
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// console.log(fruits.get("apples"));

// SIZE() PROPERTY
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// console.log(fruits.size);

// DELETE() METHOD
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// console.log(fruits);
// fruits.delete("apples");
// console.log(fruits);

// HAS() METHOD
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// console.log(fruits.has("apples"));

// FOREACH() METHOD ON MAPS
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// fruits.forEach(function(value,key){ // value first and then key
//     console.log("number of",key,"is",value);
// });

// ENTRIES() METHOD
// returns the iterator object with the [key,value] in a map
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// for(const x of fruits.entries())
// {
//     console.log(x);
// }

// DIFFERENCES BETWEEN MAP AND OBJECTS
// Object is directly iterable while map is not
// Objects do not have a size property but maps do have
// Objects' keys must be string while maps' keys can be of any datatype
// Objects' keys are not well ordered while maps' keys are well ordered
// Objects' do not have default keys but maps do have

// USING FOR OF ON MAPS
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// for(const entry of fruits)
// {
//     console.log(entry);
// };

// USING FOR OF ON MAPS BUT WITH SOME TWIST
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// for(let [key,val] of fruits)
// {
//     console.log(key);
//     console.log(val);
// }

// FOR IN LOOPS ON MAPS
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("oranges",1000);
// fruits.set("bananas",1500);
// for(let a in fruits)
// {
//     console.log("Hi");
//     console.log(a);
// };
// maps are not iterable using the for in loop but they are iterable using the foreach loop

// SUMMARY OF WHICH LOOPS WORKS ON WHICH OBJECTS
// forEach works on arrays, for of works on arrays, for in works on arrays
// forEach works on sets, for of works on sets, for in does't work on sets
// for of works on maps, for in doesn't work on maps
// for in works on objects, for of doesn't work on objects

// ----------------------
// HIGHER ORDER FUNCTIONS
// ----------------------

// forEach() function is a higher order function because it takes another function as an argument

// ----------------
// FOREACH() METHOD
// ----------------

// const arr = ['a','b','c','d','e'];
// const val = arr.forEach(function(elem){
//     console.log(elem);
// });
// console.log(val); 
// forEeach() doesn't return anything

// -----------------
// MAP FILTER REDUCE
// -----------------

// FILTER
// const arr = ['a','b','c','d','e'];
// const filteredArr = arr.filter(elem => elem>'c');
// console.log(filteredArr);
// we can mimic it using forEach() method

// MAP 

// REDUCE
// const arr = [1,2,3,4,5];
// let init = 10;
// // const sum = arr.reduce((acc,curr)=>acc+=curr,init)
// const sum = arr.reduce(function(acc,curr){
//     return acc+=curr
// },init);
// console.log(sum);

// we can chain map fiter and reduce