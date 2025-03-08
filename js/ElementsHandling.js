console.log("ElementsHandling.js is loaded ...");

// 1. createElement() = Creates a new element  
const newDiv = document.createElement("div");
console.log(newDiv);

newDiv.id = 'alert-success';
newDiv.className = 'alert alert-success';
newDiv.textContent = 'Successfully Created';
newDiv.style.backgroundColor = 'green';
newDiv.style.color = 'white';
newDiv.style.borderRadius = '12px';
newDiv.style.padding = '20px';
newDiv.style.marginTop = '10px';
newDiv.style.fontSize = '20px';


console.log(newDiv);

// 2. append()
const card = document.querySelector('.card');
card.append(newDiv);


const newDiv2 = document.createElement('div');
console.log(newDiv2);

newDiv2.id = 'alert-danger';
newDiv2.className = 'alert  alert-danger';
newDiv2.textContent = 'Error Occured';
newDiv2.style.backgroundColor = 'red';
newDiv2.style.color = 'white';
newDiv2.style.borderRadius = '12px';
newDiv2.style.padding = '20px';
newDiv2.style.marginTop = '10px';
newDiv.style.fontSize = '20px';

console.log(newDiv2);
const card2 = document.querySelector('.card');
card2.append(newDiv2);

// clone the element(clone = copy)
const clonedDiv = newDiv2.cloneNode(true);
card.append(clonedDiv);


console.log(card.hasChildNodes());

// remove element
// card.remove();
