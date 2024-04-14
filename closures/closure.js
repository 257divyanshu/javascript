// INTRODUCTION
// a closure is a function bundled together with references to it's surrounding state (the lexical environment)
// a closure gives us the access to an outer function scope from the inner function
// a closure is created everytime a function is created

// PRACTICAL IMPLEMENTATION OF CLOSURES
function clickHandler(color)
{
    return function(){
        document.body.style.backgroundColor = color;
    };
}
document.getElementById("green").onclick = clickHandler('red');
document.getElementById("red").onclick = clickHandler('green');