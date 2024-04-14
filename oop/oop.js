// OOPs
// javascript is a prototype based language
// it's classes are just syntactic sugar over existing prototype based inheritance mechanisms

// OBJECTS
// is a collection of properties and methods

// 4 PILLARS OF OOP
// ABSTRACTION
// ENCAPSULATION
// INHERITANCE
// POLYMORPHISM

// ABSTRACTION

// THIS KEYWORD
// when used inside an object's method refers to that object
// when used inside the global space gives the global object (which is window object for the browse environment and empty object for the node environment)

// NEW KEYWORD
// is used to make a new instance (or an object) of the same type (using a constructor)

// CONSTRUCTOR FUNCTION
// function user(naam,umar)
// {
//     this.name = naam;
//     this.age = umar;
//     return this;
// };
// const user1 = user('chinu',21);
// const user2 = user('divyanshu',22);
// console.log(user1); // overided !
// so we need to use the new keyword
// const user1 = new user('chinu',21);
// const user2 = new user('divyanshu',22);
// console.log(user1);
// console.log(user1);
// console.log(user2);
// accessing the constructor function
// const user1 = new user('chinu',21);
// console.log(user1.constructor); // gives us the constructor
// using the instanceof operator
// const user1 = new user('chinu',21);
// console.log(user1 instanceof user); 

// PROTOTYPAL BEHAVIOUR OF JAVASCRIPT
// when javascript doesn't find the value which it is searching for then it goes to the prototype of the current object, then to the prototype of the current object, and continues on like this until it reaches prototype = null

// FUNCTIONS ARE ALSO OBJECTS
// function double(num)
// {
//     return num*2;
// }
// console.log(double(5));
// double.factor = 2;
// console.log(double.factor);

// PROTOTYPE IN CONSTRUCTOR FUNCTIONS
// function double(num)
// {
//     this.factor = 2;
//     return num*2;
// }
// console.log(double(2));
// console.log(double.prototype); // DOUBT why does this not give me the factor property

// ADDING NEW PROPERTIES OR METHODS TO THE PROTOTYPE OF AN OBJECT
// function sum(a,b)
// {
//     return a+b;
// }
// function difference(a,b)
// {
//     return a-b;
// }
// function quotient(a,b)
// {
//     return a/b;
// }
// function product(a,b)
// {
//     return a*b;
// }
// Function.prototype.sayName = function(){
//     console.log(this.toString().slice(9,(this.toString().indexOf('('))));
// };
// sum.sayName();
// difference.sayName();
// quotient.sayName();
// product.sayName();

// BTS OF USING NEW
// a new object is created (the new keyword initiates the creation of a new javascript object)
// a prototype is linked (the newly created object gets linked to the prototype property of the constructor function. this means that it has to the properties and methods defined inside the constructor function)
// the constructor function is called (the constructor function is called with the specified arguments and this is bound to the newly created object. if not explicit return value if specified from the constructor, javascript assumes this, the newly created object, to be intended return value)
// the new object is returned (after the constructor function has been called, if it doesn't return any non-primitive value the newly object created is returned)

// EXAMPLE FOR UNDERSTANDING PROTOTYPES
// making a truelength printer function
// let myName = "chinu   ";
// console.log(`length is ${myName.length}`)
// String.prototype.trueLength = function (){
//     return `ture length is ${this.toString().trim().length}`;
// };
// console.log(myName.trueLength());

// INHERITING PROTOTYPES
// let animal = {
//     living : "yes",
// };
// let human = {
//     species : "homo-sapiens",
// };
// // human.__proto__ = animal; // way 1
// // Object.setPrototypeOf(human,animal); way 2
// console.log(human.species);
// console.log(human.living);