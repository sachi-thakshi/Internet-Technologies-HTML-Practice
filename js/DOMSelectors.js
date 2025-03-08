console.log("DOMSelector is loaded ....");

console.log(document);

// 1. Select  using element ID
const heading = document.getElementById("heading");
console.log(heading);

// 2. Select elements by class name - returns an HTMLCollection
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

// 3.Select elements by tag name - returns an HTMLCollection
const tags = document.getElementsByTagName("p");
console.log(tags);

// 4.Select the first element that matches a specific CSS selector(s)
const querySelectors = document.querySelector(".paragraph");
console.log(querySelectors);

// 5.Select all elements that matches a specific CSS selector(s) - returns CSS selectors
const querySelectorAll = document.querySelectorAll(".box h2");
console.log(querySelectorAll);