// POLYFILL
// is a piece of code that provides functionality of new browser features or APIs to older browsers that do not support them natively.

// POLYFILL FOR BIND METHOD
// from Akshay sir's video
// let name = {
//     firstName : "chinu",
//     lastName : "sahu",
// };
// let printName = function(state,country){
//     console.log(this.firstName + " " + this.lastName + " from " + state + ", " + country);
// };
// let printMyName = printName.bind(name);
// printMyName();
// Function.prototype.polyfillForBind = function(...args){
//     let func = this;
//     let args1 = args.slice(1);
//     return (...args2)=>{
//         func.call(args[0],...args1,...args2);
//     }
// };
// let printMyName = printName.polyfillForBind(name,'Chhattisgarh');
// printMyName('India');

// OPTIMIZED VERSION
// if(!Function.prototype.bind)
// {
//     Function.prototype.polyfillForBind = function(context, ...args){
//         let func = this;
//         return (...args2)=>{
//             func.call(context || window ,...args, ...args2);
//         };
//     };
// // }

// POLYFILL FOR CALL METHOD
// let name = {
//     firstName : "Chinu",
//     lastName : "Sahu",
// };
// let printName = function(state,country){
//     console.log(this.firstName + " " + this.lastName + " from " + state + ", " + country);
// };
// Function.prototype.polyfillForCall = function(context,...args)
// {
//     context = context || window;
//     let uniqueID = '00' + Math.random();
//     while(context.hasOwnProperty(uniqueID))
//     {
//         uniqueID = '00' + Math.random();
//     };
//     context[uniqueID] = this;
//     let result = context[uniqueID](...args);
//     delete context[uniqueID];
//     return result;
// };
// printName.polyfillForCall(name,'Chhattisgarh','India');

// POLYFILL FOR APPLY METHOD
// let name = {
//     firstName: "Chinu",
//     lastName: "Sahu",
// };
// let printName = function (state, country) {
//     console.log(this.firstName + " " + this.lastName + " from " + state + ", " + country);
// };
// if (!Function.prototype.apply) {
//     Function.prototype.polyfillForApply = function (context, arr) {
//         context = context || window;
//         if (!Array.isArray(arr) || arr.length === 0) {
//             return this.call(context);
//         };
//         let uniqueID = '00' + Math.random();
//         while (context.hasOwnProperty(uniqueID)) {
//             uniqueID = '00' + Math.random();
//         };
//         context[uniqueID] = this;
//         let result = context[uniqueID](...arr);
//         delete context[uniqueID];
//         return result;
//     };
// }
// printName.polyfillForApply(name, ['Chhattisgarh', 'India']);