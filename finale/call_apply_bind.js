// ABOUT CALL METHOD
// used to write a method that an be used in different objects
// it is used to call a method with an owner object as an argument
// with call() an object can use a method belonging to another object
// call() method can accept arguments also

// EXAMPLE 1
// chai aur code example
// function first(naam,umar)
// {
//     this.name = naam;
//     this.age = umar;
//     console.log("function first called");
// }
// function second(naam,umar)
// {

//     // the following two lines do the work
//     // this.name = naam;
//     // this.age = umar;

//     // but the following lines don't
//     // first(naam,umar) // doing this will not set name and age for function second, it will set name and age for function first

//     // this too doesn't work
//     // first.call(naam,umar); // this too doesn't work because we haven't supplied the reference

//     // this works
//     // first.call(this,naam,umar); // because now we have supplied the reference
//     // first.call(second,naam,umar); // this too doesn't work, don't know why?

//     console.log("function first called");
// }
// let user2 = new second('gudiya',19);
// console.log(user2);

// EXAMPLE 2
// const person = {
//     fullName: function (country) {
//         return this.firstName + " " + this.lastName + " from " + country;
//     }
// }
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// let str = person.fullName.call(person1,'India');
// console.log(str);

// ABOUT APPLY
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// ABOUT BIND
// with the bind() method an object can borrow a method from another object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function (state,country) {
//         return this.firstName + " " + this.lastName + " from " + state + " " + country;
//     }
// }
// const member = {
//     firstName: "Hege",
//     lastName: "Nilsen",
// }
// let fullName = person.fullName.bind(member,'Chhattisgarh');
// console.log(fullName('India'));

// sometimes the bind() method is used to prevent losing this
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     display: function (country) {
//         let x = document.getElementById("demo");
//         x.innerHTML = this.firstName + " " + this.lastName + " from " + country;
//     }
// }
// let newFunc = person.display.bind(person,"America");
// setTimeout(newFunc, 3000);
// this displays undefined undefined
// because when a function is used as a callback, this is lost
// but bind() method can solve this problem
// we can use bind() method to bind person.display to person
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     display: function () {
//         let x = document.getElementById("demo");
//         x.innerHTML = this.firstName + " " + this.lastName;
//     }
// }
// setTimeout(person.display.bind(person), 3000);

// INTERVIEW PREP

// call method
// is a built in method that is used to invoke a function with a specified this context and arguments provided inividually 
// used for borrowing functions from one object to another
// used for invoking functions with a specific context
// passing arguments dynamically

// apply method works similar to call method
// the only difference is that the apply method takes an array of arguments instead of taking those arguments one by one

// bind() method
// the bind() method is also an in-built function that creates a new function with a specified this context. It is like locking the context for a function so the whenever the function is called it uses that particular context only. In addition to this we can also set initial arguments for the function if needed.