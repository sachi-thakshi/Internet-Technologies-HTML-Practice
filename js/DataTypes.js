console.log("DataTypes.js is loaded ...");

console.log("==========================="); 

// ---------------------------------------------------------------------------------------------------------------------

// =========================== Primitive Data Types  ===========================

// 1. Number - Represent both integer & floating-point numbers. 
let num1 = 10;
let num2 = 10.5;
console.log(typeof num1); // typeof -> find variable type
console.log(typeof num2); 

console.log("================="); 

// 2. String - Represent a Sequence of characters. 
let name = "Sachini";
console.log(typeof name);

console.log("================="); 

// 3. Boolean - Represent a logical entity & can have .
let isLogged = true;
console.log(typeof isLogged);

console.log("================="); 

// 4. Undefined - Represent an unassigned value.
let x;
console.log(x); //undefined -> value
console.log(typeof x); //undefined -> type

console.log("================="); 

// 5. Null - Represent an intentional absence of any object value.
let y = null;
console.log(y); 
console.log(typeof y); 

console.log("================="); 

// 6. BigInt - Represent whole numbers larger than 2^53-1.
let BigIntValue = 123456789n;
let Number = 123456789;
console.log(typeof BigIntValue);
console.log(typeof Number); // without last "n"

console.log("=================");

// ---------------------------------------------------------------------------------------------------------------------

// =========================== Non-Primitive Data Types (Reference Data Types)  ===========================


// 7. Object - Represents a collection of key-value pairs.
let person = {
    firstName : "Sachini",
    lastName : "Imbulagoda",
    age : 21
}
console.log(person);
console.log(typeof person);

console.log("=================");

// 8. Array - Represents a list of elements.
let colors =["Red", "Blue", "Yellow"];
console.log(colors);
console.log(typeof colors);

console.log("=================");

// 9. Function - Represents a function.
function greet (){
console.log("Hello World ...!");  
}
greet();
console.log(typeof greet);

console.log("=================");

// 10. Date - Represents a date & time.
let today = new Date();
console.log(today);
console.log(typeof today);















