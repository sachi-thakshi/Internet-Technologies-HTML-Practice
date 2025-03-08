console.log("Functions.js loaded...");

// 1.Function
function greet(firstName){
    // if (firstName == undefined) {
    //     console.log("Hello World");
    // } else {
    //     console.log("Hello Sachini");    
    // }

    if ( typeof firstName == "undefined") { // best way
        console.log("Hello World");
    } else {
        // console.log("Hello " + firstName); //1  
        // console.log("Hello " , firstName); //2 
        console.log(`Hello ${firstName}!`); //3 -> Template literals 
    }
}
greet("Sachini");
// greet();

console.log("========================");


// 2.Function Expression
let greet2 = function(firstName){
    console.log(`Hello ${firstName}!`);
}
greet("Tharusha");

console.log("========================");


// 3.Arrow Function 
let greet3 = (firstName) =>{
    console.log(`Hello ${firstName}!`);
}

let greet4 = () =>{console.log(`Hello ${firstName}!`);} // no parameters
greet("Thakshila");

console.log("========================");


// 4.Default Function 
let greet5 = (firstName = "John") =>{
    console.log(`Hello ${firstName}!`);
}
greet5(); //  if parameter not set in the function it gives undifiend
greet5("Sam");

console.log("========================");

// 5.Rest Parameters 
let sum = (...numbers) =>{
    numbers.forEach(number => console.log(number));
}
sum();  // ReferenceError: number is not defined
// sum(1,2,3,4,5);









