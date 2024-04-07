// () are parenthesis
// [] are brackets
// {} are braces

// ------
// ARRAYS
// ------

// const arr1 = [1,true,'str',undefined,null,{}];
// console.log(arr1);
// const arr2 = new Array(1,2,3,4);
// console.log(arr2);
// javascript arrays are resizeable
// javascript array can be heterogenous

// ARRAY METHODS
// push method to insert elements at the end
// pop method to delete elements from the end
// includes() method
// indexof() method
// join() method
// slice() method
// splice() method (returns the deleted elements)
// const arr = [1,2,3,4];
// arr.push(5);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// console.log(arr);
// console.log(arr.includes(1));
// console.log(arr.indexOf(2));
// console.log(arr.join(' '));
// const arr1 = arr.slice(1,3);
// const arr1 = arr.splice(1,2,'a','b');
// console.log(arr1);
// console.log(arr);

// pushing an existing array into another array
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// arr1.push(arr2);
// console.log(arr1)

// concat() method
// retuns a new array which is the union of the two arrays
// so it doesn't change the original array
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// spread operator
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);

// flat method
// needs an argument which specifies the depth
// const arr1 = [1,[2,3,[4,5,6,[7,8,9,10]]]];
// const arr2 = arr1.flat(3);
// console.log(arr2);

// isArray() method
// const arr1 = [1,2,3,4,5];
// const arr2 = true;
// console.log(Array.isArray(arr1));
// console.log(Array.isArray(arr2));

// Array.from() method
// const str = "chinu";
// const newArr = Array.from(str);
// console.log(newArr);

// Array.of() method
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3));

// -------
// OBJECTS
// -------

// USING LITERALS
// const user1 = {
//     name: "chinu",
//     age: 21,
//     location: 'goa',
//     "few hobbies": ['drawing','working out'],
// };
// console.log(user1.name);
// console.log(user1['name']);
// console.log(user1['few hobbies']);

// USING SYMBOLS INSIDE OBJECTS
// const sym1 = Symbol('key1');
// const user1 = {
//     [sym1]: "sym1value",
//     name: "chinu",
//     age: 21,
//     location: 'goa',
//     "few hobbies": ['drawing','working out'],
// };
// console.log(user1[sym1]);

// FREEZING AN OBJECT
// const user1 = {
//     name: "chinu",
//     age: 21,
//     location: 'goa',
//     "few hobbies": ['drawing','working out'],
// };
// console.log(user1);
// user1.name = "divyanshu";
// console.log(user1);
// Object.freeze(user1);
// user1.name = "chinu";
// console.log(user1);

// METHODS
// const user1 = {
//     name: "chinu",
//     age: 21,
//     location: 'goa',
//     "few hobbies": ['drawing', 'working out'],
// };
// user1.intro = function() {
//     console.log(`My name is ${this.name}, I am ${this.age} years old, I live in ${this.location}`);
// };
// user1.intro();

// ?
// const user1 = {
//     obj1: {
//         obj2:{
//             obj3:{
//                 key: "value",
//             }
//         }
//     }
// };
// console.log(user1.obj1.obj2.obj3.key);
// // console.log(user1.obj4.obj2.obj3.key); // gives error
// console.log(user1.obj4?.obj2.obj3.key); // gives undefined
// ? is used when data is coming from api

// MERGING OBJECTS
// using spread operator
// using the assign method
// const obj1 = {
//     1: "one",
//     2: "two",
//     3: "three",
// };
// const obj2 = {
//     a: "first",
//     b: "second",
//     c: "third",
// };
// const obj3 = {...obj1,...obj2};
// console.log(obj3);
// const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);

// OBJECT.KEYS()
// const obj1 = {
//     name1: "chinu",
//     name2: "divyanshu",
// }
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));


// hasOwnProperty() method
// const obj1 = {
//     name1: "chinu",
//     name2: "divyanshu",
// };
// console.log(obj1.hasOwnProperty('name1'));
// console.log(obj1.hasOwnProperty('name3'));

// ---------------------
// DESTRUCTURING OBJECTS
// ---------------------

// const course = {
//     name: "JS in hinid",
//     price: 999,
//     instructor: "Chinu",
// };
// // one way
// const {instructor : courseInstructor} = course;
// console.log(courseInstructor);
// // another way
// // const {name,price,instructor} = {...course};
// // console.log(name);
// // console.log(price);
// // console.log(instructor);


// --------
// JSON API
// --------

// earlier response from the backend used to come in XML, nowadays it comes in JSON structure

// JSON looks like
const objArr = [
    {
        
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    }
]