// CURRYING
// is a concept in javascript where in functions with multiple arguments are transformed into a sequence of functions, each taking lesser number of arguments


// EXAMPLE 1
// akshay sir's example 
// let multiply = function(x,y){
//     console.log(x*y);
// };
// let multipleBy2 = multiply.bind(this,2);
// console.log("multiplying by 2");
// multipleBy2(1);
// multipleBy2(2);
// multipleBy2(3);
// multipleBy2(4);
// console.log("multiplying by 3");
// let multipleBy3 = multiply.bind(this,3);
// multipleBy3(1);
// multipleBy3(2);
// multipleBy3(3);
// multipleBy3(4);
// console.log("multiplying by 4");
// let multipleBy4 = multiply.bind(this,4,2);
// multipleBy4(1); // 1 will be ignored
// multipleBy4(2); // 2 will be ignored
// multipleBy4(3); // 3 will be ignored
// multipleBy4(4); // 4 will be ignored
// console.log("multiplying by 5");
// let multipleBy5 = multiply.bind(this); // no problem if we don't pass other arguments
// multipleBy5(5,1); // completely fine
// multipleBy5(5,2); // completely fine
// multipleBy5(5,3); // completely fine
// multipleBy5(5,4); // completely fine

// EXAMPLE 2
// CHATGPT EXAMPLE
function multiply(a,b,c)
{
    return a*b*c;
};
function curriedMultiple(a)
{
    return function(b)
    {
        return function(c)
        {
            return a*b*c;
        };
    };
};
// console.log(curriedMultiple(2)(3)(4));

// PRACTICAL USE CASES

// USE CASE 1
// FOR CREATING REUSABLE FUNCTION COMPOSITION
// function add(x,y)
// {
//     return x+y;
// };
// function multiplyBy2(num)
// {
//     return num*2;
// };
// // we want to create a function which first adds three to the given number and then multiplies it by 2
// let add3ThenMultiplyBy2 = (x) => multiplyBy2(add(x,3));
// let MultiplyBy2Thenadd3 = (x) => add(multiplyBy2(x),3);
// console.log(add3ThenMultiplyBy2(4)); // (4+3)*2 = 14
// console.log(add3ThenMultiplyBy2(5)); // (5+3)*2 = 16
// console.log(MultiplyBy2Thenadd3(4)); // (4*2)+3 = 11
// console.log(MultiplyBy2Thenadd3(5)); // (5*2)+3 = 13

// USE CASE 2
// PARTICAL APPLICATION
// suppose we have a function that takes three arguments, but we oftenly use it with the first two arguments fixed, so we can create a function that can only takes the third argument, or only takes the second and the third argument
// function multiply(a,b,c)
// {
//     return a*b*c;
// };
// let partialMultiply = (a) => (b) => (c) => multiply(a,b,c);
// const multipleBy2By3 = partialMultiply(2)(3);
// console.log(multipleBy2By3(4));
// const multipleBy4= partialMultiply(4);
// console.log(multipleBy4(5)(6));

// USE CASE 3
// EVENT HANDLER FUNCTION
// let addEvent = (element) => (event) => (callback) => {
//     element.addEventListener(event,callback);
//     console.log(element);
//     console.log(`${callback.name} will be called when ${element.tagName} with ${`${element.id ? `id ${element.id}` : `class ${element.className}`}`} is ${event}ed`);
// };
let addEvent = function(element){
    return function(event)
    {
        return function(callback)
        {
            element.addEventListener(event,callback);
        };
    };
};
let targetElement1 = document.getElementById("runBtn1"); // if we target element with id
let targetElement2 = document.getElementById("runBtn2"); // if we target element with id
let targetElement3 = document.getElementById("runBtn3"); // if we target element with id
// let targetElement = document.getElementsByClassName("btns")[0]; // if we target element with className
// targetElement.removeAttribute('id');
// let eventName = "click";
let onClickCall = function(e){
    console.log('clicked');
};
let onMouseOverCall = function(e){
    console.log('mouseovered');
};
addEvent(targetElement1)('click')(onClickCall);
addEvent(targetElement2)('mouseover')(onMouseOverCall);