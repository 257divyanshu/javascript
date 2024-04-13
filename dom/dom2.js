// DOM
// When a web page is loaded, the browser creates a Document Object Model of the page.
// The HTML DOM model is constructed as a tree of Objects : The HTML DOM model is constructed as a tree of Objects:
// The HTML DOM is a standard object model and programming interface for HTML.
// All the HTML elements as objects
// The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
// The HTML DOM can be accessed with JavaScript (and with other programming languages).
// In the DOM, all HTML elements are defined as objects.
// A property is a value that you can get or set.
// A method is an action you can do
// The HTML DOM document object is the owner of all other objects in your web page.

// METHODS FOR FINDING HTML ELEMENTS
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// PROPERTIES OF HTML ELEMENTS
// element.innerHTML
// element.attribute
// element.style.property

// METHODS OF HTML ELEMENTS
// element.setAttribute(attributeName, value)

// ADDING AND DELETING ELEMENTS
// document.createElement(elementName)
// parentElement.removeChild(element)
// parentElement.appendChild(element)
// parentElement.replaceChild(new,old)
// document.write(text)

// EVENT HANDLERS
// document.getElementById('id').onclick = function(){};

// FINDING HTML OBJECTS
// reference : https://www.w3schools.com/js/js_htmldom_document.asp

// CHANGING HTML CONTENT
// using innerHTML property

// CHANGING VALUE OF AN ATTRIBUTE
// targetElement.attribute = new value

// DOCUMENT.WRITE()
// used to directly write to the HTML output stream
// using DOCUMENT.WRITE() after document is loaded will overwrite the document

// DOM NODES
// everything in an HTML document is a node
// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// Every HTML attribute is an attribute node (deprecated)
// All comments are comment nodes

// NODE PROPERTIES FOR NAVIGATION
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// ELEMENT NODE DOESN'T CONTAIN TEXT
// an element node contains a text node with a value
// value of textNode can be accessed by the innerHTML property
// accessing the innerHTML property is the same as accessing the nodeValue of the first child
// console.log(document.getElementById('lang1').firstChild.nodeValue);
// console.log(document.getElementById('lang1').innerHTML);

// SPECIAL PROPERTIES
// document.body : the body of the document
// document.documentElement : the full document

// NODENAME PROPERTY
// specifies the name of the node
// nodeName is read-only
// nodeName of an element node is the same as the tag name
// nodeName of an attribute node is the attribute name
// nodeName of a text node is always #text
// nodeName of the document node is always #document
// nodeName always contains the uppercase tag name of an HTML element.

// THE NODEVALUE PROPERTY
// specifies the value of the node
// nodeValue for element nodes is null
// nodeValue for text nodes is the text itself
// nodeValue for attribute nodes is the attribute value

// THE NODETYPE PROPERTY
// it is read only
// returns the type of the node
// element node 1
// attribute node 2 (deprecated)
// text node 3
// comment node 8 
// document node 9 <html>
// document type node 10 <!DOCTYPE html>

// HTML COLLECTION OBJECT
// The getElementsByTagName() method returns an HTMLCollection object.
// is array like list of HTML elements
// it has a length property
// but it is not an array
// we can loop through the list
// but we cannot use array methods like valueOf(), pop(), push(), or join()
// console.log(document.getElementsByTagName('li'));

// NODELISTS
// is an list of nodes extracted from a document
// nodelists are returned for the childNodes property
// it also has a length property
// nodelist looks like an array
// but it is not
// we can loop through the nodlist
// and refer to its nodes by index
// but we cannot use array methods like push(), pop(), join() method
// console.log(document.getElementById('languages').childNodes);

// NODELISTS v/s HTML COLLECTION
// an HTML collection is a collection of document elements
// a nodelist collection is a collection of document nodes
// HTML collection items can be accessed by their name, id or index number
// nodelist items can only be accessed by their index number
// an HTML collection is always a live collection
// a nodeList collection is often a static collection