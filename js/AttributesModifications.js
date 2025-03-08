console.log("AttributesModifications.js is loaded ...");

// 1. getAttribute - Gets the value of an attribute on the specific 
const link = document.querySelector("a");
// console.log(link);
console.log(link.getAttribute('href'));

// 2. setAttribute - Sets the value of an attribute on the specific
link.setAttribute('href', 'https://facebook.com');
console.log(link.getAttribute('href'));

link.setAttribute('target', 'blank');

// 3. removeAttribute - Removes the specific attributes from an 
link.removeAttribute('target');