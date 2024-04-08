// () are parenthesis
// [] are brackets
// {} are braces

// ------
// ARRAYS
// ------

// WAYS TO CREATE ARRAYS
// using literals
// using the new keyword

// ARRAY TO STRING
// let arr = [1,2,3,4];
// console.log(arr);
// console.log(arr.toString());

// TYPEOF ARRAYS RETURNS OBJECTS

// ARRAY ELEMENTS CAN BE OBJECTS

// ARRAYS HAVE A LENGTH PROPERTY

// FOREACH function to loop over array elements
// let arr = [1,2,3,4];
// arr.forEach((elem)=>{console.log(elem)});

// ARRAYS WITH NAMED INDICES ARE CALLED ASSOCIATIVE ARRAYS
// JAVASCRIT DOES NOT SUPPORT ASSOCIATIVE ARRAYS

// ARRAYS v/s OBJECTS
// arrays are numbered indices
// objects are named indices
// use objects when the element names should be strings
// use arrays when the elements names should be numbers

// WHEN NEW KEYWORD CAUSES CONFUSION 
// let arr1 = [10]; // 1 item having value 10
// let arr2 = new Array(10); // 10 empty items
// console.log(arr1); 
// console.log(arr2);

// ARRAY.ISARRAY() method to check if an object is an array or not
// let arr1 = [1,2,3];
// console.log(Array.isArray(arr1));

// USING INSTANCEOF OPERATOR TO CHECK IF AN OBJECT IS AN ARRAY OR NOT
// const arr1 = [1,2,3];
// console.log(arr1 instanceof Array)

// ARRAY METHODS AND PROPERTIES
// arr.length property
// arr.toString() method
// arr.at() method for accessing the element at a particular index
// arr.join() method
// arr.pop() method
// arr.push() method
// arr.shift() method // to remove the first array element
// arr.unshift() method // to insert a new element at the end
// delete arr[n] // to delete elements from an array, don't use it because it leaves empty spaces
// concat() method to create a new array by merging two arrays, it doesn't change the original array, it can take any number of arguments, using the concat method we can concat a string element to an existing array
// copyWithin() method (copies array elemens to another position in an array)
// flat() method (Flattening an array is the process of reducing the dimensionality of an array. Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.)
// slice () method (slices out a part of an array) (takes two arguments) (the startposition and the endposition) (the startposition is included) (the endposition is not included) (if the second argument is omitted then rest of the array is sliced out) (the slice method creates a new array) (it does not remove any elements from the source array)
// splice() method (can be used to add new items to an array) (the first parameter defines the position where the new elements should be added) (the second parameter defines how many elements should be removed) (rest of the parameters define the new elements to be added) (the splice() method returns an array with the deleted elements)
// toSplice() method (is similar to the slice() method) (it creates a new array keeping the original arrays unchanged)
// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];
// console.log(arr1.join(''));
// console.log(arr1);
// delete arr1[0];
// console.log(arr1);
// const arr3 = arr1.concat(arr2);
// console.log(arr3);
// const arr4 = arr1.concat("string");
// console.log(arr4);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.copyWithin(2, 0); // the elements 0 will be copied to index 2
// console.log(fruits);
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits);
// fruits.copyWithin(2, 0, 2); // elements 0 and 1 will be copied to index 2 and 3
// console.log(fruits);
// const arr1 = [1,2,3,4];
// console.log(arr1);
// const arr2 = arr1.slice(0,2);
// const arr2 = arr1.slice(2);
// console.log(arr2);
// const arr1 = [1,2,3,4,5,6,7,8,9];
// console.log(arr1);
// // const arr2 = arr1.splice(0,2,'x','y'); // using splice to add new elements to the position from which elements will be deleted
// // const arr2 = arr1.splice(0,1,'x','y');
// // const arr2 = arr1.splice(0,1,'y');
// const arr2 = arr1.splice(0,3); // using splice to remove elements
// console.log(arr1);


// METHODS FOR SEARCHING IN ARRAYS
// indexOf() method (can take two arguments also) (first argument is the item we are searching for and the second argument will be the index from where we will be starting our search) (returns -1 if it's not found)
// lastIndexOf() method (returns the position of the last occurence of the specified element) (it can also take two arguments similar to the indexOf() method)
// includes() method 
// find() method (returns the value of the first array element that passes a test function) (the callback function of the find function takes three arguments: value, index and the array)
// findIndex() method (very similar to findIndex() method) (returns the index of the first array element that passes a test function) (it's callback function also takes three arguments)
// similarly we have findLast() and findLastIndex() method
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);
// console.log(first);
// function myFunction(value) {
//   return value > 18;
// };

// METHODS TO SORT AN ARRAY
// sort() method
// reverse() method
// toSorted() method (it creates a new array) s(doesn't change the original array)
// similarly we have the toSorted() method
// const arr1 = [2,4,3,1];
// // console.log(arr1);
// // arr1.sort();
// // console.log(arr1);
// console.log(arr1);
// arr1.reverse();
// console.log(arr1);

// USING MATH.MIN AND MATH.MAX methods
// const arr1 = [2,4,1,3];
// console.log(Math.min(...arr1));
// console.log(Math.min,apply(null,arr1));

// javascript arrays are resizeable
// javascript array can be heterogenous

// pushing an existing array into another array
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// arr1.push(arr2);
// console.log(arr1)

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
// const objArr = [
//     {
        
//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     }
// ]