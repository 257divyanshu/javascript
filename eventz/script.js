// FIRST APPROACH
// using onEvent as HTML attributes is problematic

// SECOND APPROACH
// document.getElementById('py').onclick = function(){
//     console.log('py');
// };
// using this won't give us much features 
// we need to use addEventListeners

// THIRD APPROACH
// document.getElementById('cpp').addEventListener('click',func,false);
// function func()
// {
//     console.log("hi");
// };

// TO STUDY
// type
// timeStamp
// defaultPrevented
// target
// toElement
// srcElement
// currentTarget
// clientX
// clientY
// screenX
// screenY
// altkey
// ctrlkey
// shiftkey
// keycode

// EVENT PROPAGATION
// two types: event bubbling (default) and event capturing
// document.getElementById('list').addEventListener('click',function(){console.log("parent")},false);
// document.getElementsByClassName('days')[0].addEventListener('click',function(){console.log("child")},false);
// if set to false (default value) (event bubbling) (bubbling up) from inside to outside
// document.getElementById('list').addEventListener('click',function(){console.log("parent")},true);
// document.getElementsByClassName('days')[0].addEventListener('click',function(){console.log("child")},true);
// if set to true (event capturing) from outside to inside

// PREVENTING EVENT PROPAGATION
// document.getElementById('list').addEventListener('click',function(){console.log("parent")},false);
// document.getElementsByClassName('days')[0].addEventListener('click',function(e){console.log("child"); e.stopPropagation();},false);
// event won't bubble up (sometimes we need this)

// PREVENTDEFAULT
// document.getElementById('linkElem').addEventListener('click',function(e){e.preventDefault();});
// now this link won't take us to the specified URL

// MINI PROJECT (remove the element that is clicked)
document.getElementById('list').addEventListener('click',func);
// function func(e)
// {
//     // console.log(e.target);
//     // console.log(e.target.parentElement);
//     e.target.parentElement.removeChild(e.target);
// };
// this will work
// but this will remove the parent container if the parent container is clicked
function func(e)
{ 
    if(e.target.className=="days"){
        e.target.parentElement.removeChild(e.target);
    };
};