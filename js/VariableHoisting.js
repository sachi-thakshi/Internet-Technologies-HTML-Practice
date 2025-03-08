console.log("VariableHoisting.js loaded...");

// ============= var =============
// console.log(x); // undefined
// var x = 10;
// console.log(x); // 10 

// ----------------------------------

// ============= let =============
// console.log(y); //ReferenceError: Cannot access 'y' before initialization
// let y = 20;

// ----------------------------------

// ============= const =============
console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 30;

