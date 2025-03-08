console.log("Variables.js is loaded ...");

// ----------------------------------------------------------------------------------------------------------------------

// ==== 1. var - functional scoped =====
// var x = 10;
// console.log(x);

// function testVar(){
    // console.log(x);
    // x = 20; // re-assign the 20 for x
    // console.log(x);
    // var y = 30;
    // console.log(y);
// }
// testVar(); // must call fuction 
// console.log(x); // 20
// console.log(y); // y is not defined -> functional scoped, beacuase used "var"

// ----------------------------------------------------------------------------------------------------------------------

// ==== 2. let - block scoped =====
// let x = 10;
// console.log(x);

// function testLet (){
//     console.log(x);
//     let y = 20;
//     console.log(y);

//     if (true) {
//         console.log(x);
//         console.log(y);
//         let z = 30;
//         console.log(z);
//         var a = 40;    
//     }
    // console.log(y);
    // console.log(z); // ReferanceError -> z is not defined
    // console.log(a);
// }
// testLet();

// ----------------------------------------------------------------------------------------------------------------------

// ==== 3. const - block scoped =====
const x = 10;
console.log(x);

x = 20; // TypeError: Assignment to constant variable.
