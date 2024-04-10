// JAVASCRIPT
// is single threaded
// is synchronous

// EXECUTION CONTEXT
// one line of code is executed at a time
// each operation waits for the last one to complete before executing

// BLOCKING CODE
// blocks the execution of program
// READ FILE SYNC

// NON BLOCKING CODE
// DOES NOT BLOCK THE EXECUTION
// READ FILE ASYNC

// JS ENGINE
// consists of call stack and memory heap

// WEB API or NODE (ENVIRONMENT)
// is in the browser

// TASK QUEUE

// HIGH PRIORITY QUEUE
// promises come and sit here

// MECHANISM
// when code execution starts
// GEC enters the call stack
// when we write async code
// then this async code's callbacks is sent to web apis section
// a timer is attached to it
// when the timer expires the callback is registered to the callback queue or the task queue

// FETCH API
// it's callback enters the high priority queue

// SETTIMEOUT
// is not a part of core javascript
// it is a part of web apis
// function sayHello(){
//     // console.log("say hello");
//     document.getElementById('root').innerHTML = "Mission Placement";
// }
// let setOut1 = setTimeout(sayHello, 3000);

// USING CLEARTIMEOUT
// clearTimeout(setOut1);

// CLEARING A TIME OUT WHEN AN EVENT OCCURS
// document.getElementById('btn').addEventListener('click',function(){
//     clearTimeout(setOut1);
// });

// SETINTERVAL
// let count = 1;
// function sayCount()
// {
//     console.log(count);
//     count++;
// };
// let a;
// document.getElementById('start').addEventListener('click',function(){
//     a = setInterval(sayCount, 1000);
// });
// document.getElementById('end').addEventListener('click',function(){
//     clearInterval(a);
// });

// PROJECT DISCO
// let count = 1;
// let a;
// function changeColor()
// {
//     let min = 0;
//     let max = 255;
//     let arr = [];
//     for(let i = 1; i<=3; i++)
//     {
//         let rand = min + Math.floor((max-min+1)*Math.random());
//         arr.push(rand);   
//     };
//     // console.log(arr);
//     document.body.style.backgroundColor = `rgb(${arr.join(',')})`;
//     // console.log("changed",count);
//     count++;
// };
// document.getElementById('start').addEventListener('click',function(){
//     if(!a)
//     {
//         a = setInterval(changeColor, 1000);
//     }
// });
// document.getElementById('end').addEventListener('click',function(){
//     clearInterval(a);
//     a = null; // optimizations
// });

// KEY DISPLAYER
document.body.addEventListener('keydown',function(e){
    document.getElementById('key').innerHTML = `${e.key}`;
})