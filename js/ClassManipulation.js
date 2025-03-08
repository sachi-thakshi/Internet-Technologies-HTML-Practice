console.log("ClassManipulation.js is loaded ...");

const heading = document.getElementById('heading');
console.log(heading.classList);

// 1. classList.add() - Adds one or more classes to an element
heading.classList.add('new-class', 'highlight', 'rounded');
console.log(heading.classList);

// 2. classList.add() - Remove one or more classes from an element
heading.classList.remove('new-class', 'highlight', 'rounded');

// 3. classList.toggle() - Toggles the "active" class on the element
heading.classList.toggle("active");
console.log(heading.classList);

heading.classList.toggle("active");
console.log(heading.classList);