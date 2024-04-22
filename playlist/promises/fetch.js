// INTERVIEW QUESTION
// if making a network call gives a 404 error code 
// then we will be getting this in resolve or in reject
// we will be getting it in a reponse
// a fetch() promise (which is used to make a network call) rejects when a network error is encountered (which is usually when there's a permission issue or similar). A fetch() promise does not reject an HTTP error. Instead a then() handler must check Response.ok and/or Response.status properties.

// JS ENGINE 
// generally contains a memory heap and a call stack

// THE FETCH'S PRIORITY
// the fetch's callback is given priority
// a special high priority queue called microtask queue is created especially for the fetch's callbacks

// TWO PARTS OF FETCH'S BTS
// first part (web browser or native node) which goes to make network request
// second part (we can call it data part) which reserves space in the memory
// onFulfilled and onRejection are arrays (but they are private, we cannot access them directly)
// to make a network request we either need the browser or the native node environment
// if network call is successfull and repsonse arrives then it goes to the onFulfilled array
// if network call failed then data goes to onRejection array
// there are functions inside the onFulfilled and onRejected array that fill the data from the memory to the data holder and then this reponse contained in the data holder is sent (the reponse) into the variable that is holding the fetch result