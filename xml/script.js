// API
// is like a talking language between two systems (frontend or backend)

// OLD WAY OF MAKING REQUESTS
// using XMLHttpRequest

// READYSTATE PROPERTY
// 0 UNSENT client has been created, open() not yet called (request has not been sent)
// 1 OPENED open() has been called (request has been sent)
// 2 HEADERS_RECEIVED send() has been called and headers and status is available
// 3 LOADING downloading responseText holds partial data
// 4 DONE the operation is complete

// we use new XMLHttpRequest() means we are making a new object using the XMLHttpRequest class
// the first argument is the type of the request that we want to makes
// second argument is the URL
let requestURL = "https://api.github.com/users/257divyanshu"; // the URL
const xhr = new XMLHttpRequest(); // making an new object using the class
xhr.open('GET',requestURL); // this won't make the request
xhr.send(); // this will make the call
console.log(xhr.readyState); // gives 1
// the states of the requests keeps on changing
xhr.onreadystatechange = function(){ // used in subscriber models to track subscriptions
    console.log("ready state changed");
    if(xhr.readyState==4)
    {
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(data.location)
    }
};
// readystate changed gets logged three times
// okay we have got the responseText
// now accessing location gives us undefined, why?
// because type of data is string
// response from the URL comes in the form of string most of the time
// console.log() is a part of web apis (like document) (it isn't part of the core javascript)
// console.log() is a debuggging tool of the browser
// these features are provided by the JavaScript Runtime
