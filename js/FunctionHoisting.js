console.log("FunctionHoisting.js loaded...");

// ======== function keyword ========
// greet();
// function greet(){
//     console.log("Hello, World!");
// }

// --------------------------------------------------------------
// ======== function expression - var keyword ========
// greet(); // greet is not a function but  var is initializing as undefined . but it is not a function
// var greet = function(){
//     console.log("Hello, World!");
// }

// --------------------------------------------------------------

// ======== function expression - let keyword ========
greet();  // Cannot access 'greet' before initialization because let is not initializing the variable
let greet = function(){
    console.log("Hello, World!");
}


