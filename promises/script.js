// the promise object represents the eventual completion of an asynchronous operation and its resulting value

// EXAMPLE
// fetch(url).then().catch().finally()
// this code is for consuming the promises

// promise is an object
// EXAMPLE 
// const prom1 = new Promise(function(resolve,reject){
//     // inside promises we do async task
//     // like db calls, cryptography
//     setTimeout(() => {
//         console.log("async task complelted");
//     }, 1000);
// });
// holding the promise in a varialbe is not necessary
// but it helps in consumption
// prom1.then(function(){
//     console.log("promise consumed");
// });
// then is connected to resolve

// EXAMPLE 
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task");
//         resolve();
//     },1000);
// })
// .then(function(){
//     console.log("async2 resolved")
// })
// the code inside the then function is executed when the async taks is accomplished

// EXAMPLE 
// const prom1 = new Promise(function(resolve,reject){
//     resolve({userName: "25divyanshu", age: 21}); // returning data (to be used by then)
// });
// prom1.then(function(user){
//     console.log(user)
// });

// EXAMPLE
// const prom1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false;
//         if(error)
//         {
//             reject('Error something went wrong') // this data will be returned if the async task failed
//         }
//         else
//         {
//             resolve({userName:"257divyanshu",age:21});
//         }
//     }, 1000);
// });
// prom1
// .then(function(val){
//     console.log(val)
//     return val.userName;
// })
// .then(function(val){
//     console.log(val);
// })
// .catch(function(val){
//     console.log(val);
// });

// EXAMPLE 
// const prom = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(error)
//         {
//             reject("something went wrong");
//         }
//         else
//         {
//             resolve("data came")
//         };
//     }, 5000);
// });
// async function consumeProm(){
//     try{
//         const response = await prom;
//         console.log(response);
//     }
//     catch(err)
//     {
//         console.log(err);
//     };
// };
// console.log("before func call");
// consumeProm();
// console.log("after func call");

// EXAMPLE
// async function consumeProm(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(err)
//     {
//         console.log(err);
//     };
// };
// console.log("before func call");
// consumeProm();
// console.log("after func call");

// EXAMPLE 
// console.log("before call");
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })
// console.log("after call");