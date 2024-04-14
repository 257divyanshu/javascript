// LEXICAL SCOPING
// function outer()
// {
//     let num1 = 1;
//     function innerone(){
//         let num2 = 2;
//         console.log(num1); // no error (it can access num1)
//     }
//     function innertwo(){
//         console.log(num1); // no error (it can access num1)
//         console.log(num2); //  error (it cannot access num2)
//     }
//     innerone();
//     innertwo();
// }
// outer();