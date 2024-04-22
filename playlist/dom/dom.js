// console.log(document);
// everything inside the DOM is a node

// WINDOW 
// DOCUMENT 
// HTML
// HEAD & BODY

// HEAD
// TITLE & META

// TITLE
// TEXT NODE & ATTRIBUTE

// META
// ATTRIBUTE

// BODY
// DIV
// ATTRIBUTE & TEXT NODE

// ACCESSING ELEMENTS 
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByName();
// document.getElementsByTagName();
// document.getElementsByTagNameNS();
// document.getRootNode();
// document.getSelection();

// ACCESSING PROPERTIES OF ELEMENTS
// console.log(document.getElementById().id);
// console.log(document.getElementById().className);
// console.log(document.getElementById('div1').getAttribute('id'));
// console.log(document.getElementById('div1').getAttribute('class'));

// ACCESSING ELEMENT AND THEN SETTING ATTRIBUTES
// document.getElementById('div1').setAttribute('class','newClass');
// console.log(document.getElementById('div1').getAttribute('class'));

// ACCESSING STYLE OF AN ELEMENT
// document.getElementById('div1').style.color = "red";
// console.log(document.getElementById('div1').style);

// OTHER PROPERTIES
// console.log(document.getElementById('div1').textContent);
// console.log(document.getElementById('div1').innerText);
// console.log(document.getElementById('div1').innerHTML);

// TEXTCONTENT v/s INNERTEXT
// textcontent gives us the full content (including the invisible content)
// innerText gives us the visible content only

// INNERHTML 
// gives us the content (if it contains HTML then it will also be returned)

// GETELEMENTBYCLASSNAME()
// gives an HTMLCollection 

// QUERY SELECTOR
// console.log(document.querySelector('#div1')); // for id
// console.log(document.querySelector('.elems')); // for class
// console.log(document.querySelector("input[type='password']")); // this complicated query selector also works 
// gives first element that matches the css selector specified

// USING QUERY SELECTOR TO IT'S DEPTH
// we can store the result of a query selector and then use more query selectors on it

// QUERYSELECTORALL
// gives a NodeList of all the matching elements

// NODELIST
// is similar to array
// forEach() can be used on NodeList
// higher order functions like map, filter and reduce cannot be used on nodelists

// HTMLCollection
// is a similar to array
// forEach() cannot be used on HTMLCollections
// if we want to iterate through an HTMLCollction then we need to first convert it into an array

// CHILDREN PROPERTY AND CHILDNODES property
// let list = document.getElementById('days');
// console.log(list.children);
// console.log(list.childNodes);

// LOOPING THROUGHT THE CHILDREN OF AN ELEMENT
// let list = document.getElementById('days');
// for(let i = 0; i<list.children.length; i++)
// {
//     console.log(list.children[i]);
// };

// OTHER PROEPRTIES FOR ACCESSING CHILDREN AND CHILDELEMENTS
// let list = document.getElementById('days');
// console.log(list.firstElementChild);
// console.log(list.firstChild);
// console.log(list.lastElementChild);
// console.log(list.lastChild);

// USING QUERYSELECTOR OR ACCESSING ELEMENTS IS A COSTLY OPERATION
// so methods like firstElementChild, lastElementChild, firstChild, lastChild and parent are handy

// PARENT SELECTOR
// let list = document.getElementById('days');
// console.log(list.parentElement);
// console.log(list.parentNode);

// LINE BREAKS ARE ALSO COUNTED AS NODE ELEMENTS BY THE DOM 
// one line break is counted but the line breaks after the first line break are not rendered by the browser so they are not counted as node elements by the dom
// const list = document.getElementById('days');
// console.log(list.childNodes);

// ACCESSING SIBLING ELEMENTS
// const day3 = document.getElementById('day3');
// console.log(day3.previousElementSibling);
// console.log(day3.previousSibling);
// console.log(day3.nextElementSibling);
// console.log(day3.nextSibling);

// CREATING ELEMENT AND APPENDING IT INTO THE DOM
// const newElem = document.createElement('div');
// newElem.setAttribute('id','newDiv');
// newElem.setAttribute('class','newElems');
// const textNode = document.createTextNode('I am the new div element');
// newElem.append(textNode);
// console.log(newElem);
// document.body.appendChild(newElem);
// newElem.setAttribute('id','newId') is better than newElem.id, because newElem.id first brings the value of newElem.id but the newElem.setAttribute('id','newID') doesn't bring the value ofthe newElem's id, it just sets, this makes newElem.id little bit expensive in comparison to the newElem.setAttribute('id','newID');  

// ADDING TEXT TO A NEWLY CREATED ELEMENT
// newElem.setAttribute('innerHTML','I am the new div');
// this doesn't work
// first create a text node and then append it inside the new element

// DESIGNIN A FUNCTION THAT HELPS US TO ADD ELEMENT TO OUR DOM
// function addLanuage(langName,langID)
// {
//     let listElem = document.createElement('li');
//     listElem.setAttribute('id',langID);
//     listElem.setAttribute('class','langs');
//     listElem.append(document.createTextNode(langName));
//     document.getElementById('div1').appendChild(listElem);
// };
// addLanuage('JavaScript','js');
// addLanuage('C++','cpp');
// addLanuage('Python','py');

// EDITING AN EXISTING ELEMENT USING THE REPLACE METHOD
// const languages = document.getElementById('languages');
// const newLanguage = document.createElement('li');
// newLanguage.appendChild(document.createTextNode("RubyOnRails"));
// const firstElem = document.querySelector("li:nth-child(1)");
// firstElem.replaceWith(newLanguage);

// EIDTING AN EXISTING ELEMENT USING THE OUTERHTML OR INNERHTML PROPERTY
// const languages = document.getElementById('languages');
// const firstLanguage = document.querySelector('li:nth-child(1)');
// firstLanguage.outerHTML =  '<li>NextJS</li>';

// REMOVING ELEMENTS USING THE REMOVE METHOD
// const languages = document.getElementById('languages');
// const firstLanguage = document.querySelector('li:nth-child(1)');
// firstLanguage.remove();