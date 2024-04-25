// HOW JAVASCRIPT CODE IS EXECUTED
// first phase memory creation phase
// second phase code execution phase

var n = 2;
function square(num)
{
    var ans = num*num;
    return ans;
};
var square2 = square(n);
var square3 = square(4);

// memory creation phase
// variables are allocated memory and assigned undefined
// function are allocated memory and assigned the function definition
// memory creation phase completed

// code execution phase
// first line : n is assigned 2
// second line : nothing to be done
// third line : function call!
// a new execution context is created
// memory creation phase starts
// num is allocated space and assigned undefined
// ans is allocated space and assigned undefined
// code execution phase starts
// num is assigned 2
// num*num is calculated and result is assigned to ans
// return statement encountered!
// current execution stack is deleted
// control is returned to the line number 3
// value 4 is assigned to square 2
// similar execution of fourth line
// code done!
// global execution context is deleted

// CALLSTACK
// manages the order of execution of execution contexts
// at the bottom exists the global execution context
// new execution context is created and pushed into the callstack when a function is invoked
// when a function execution compleres, it's execution context is popped off from the callstack
// also called
// - execution stack
// - program stack
// - control stack
// - runtime stack
// - machine stack