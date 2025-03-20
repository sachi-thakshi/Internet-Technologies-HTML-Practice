console.log("EventListeners.js is loaded ...");

// ==================================== mouse events ====================================

// const box = document.querySelector('.box');
// function test(){

// }

// ======= single click event ============
// box.addEventListener('click', function() {
//     console.log("Clicked the box.");
// })

// ======= double click event ============
// box.addEventListener('dblclick', function () {
//     console.log("Double clicked the box.");
// })

// ======= mouse-down event ============
// box.addEventListener('mousedown', function () {
//     console.log("Mouse Pressed on the box.");
// })

// ======= mouse-up event ============
// box.addEventListener('mouseup', function () {
//     console.log("Mouse Released.");
// })

// ======= mouse-move event ============
// box.addEventListener('mousemove', function () {
//     console.log("Mouse Moved.");
// })

// ======= mouse-over event ============
// box.addEventListener('mouseover', function () {
//     console.log("Mouse Over.");
// })

// ======= mouse-out event ============
// box.addEventListener('mouseout', function () {
//     console.log("Mouse Out.");
// })


// ==================================== keybord events ====================================

let input = document.getElementById('input');

// ============ keydown event ============
// input.addEventListener('keydown', function (event) {   // event or e
//     console.log(event.key); // prints the key  -> .key

//     if (event.key === 'Enter') {
//         alert("Enter key pressed.");
//     }
// });

// ============ keyup event ============
// input.addEventListener('keyup', function (event) {
//     console.log(event.key); 
// });

// ------- example ------->
input.addEventListener('keydown', function (event) {
    // console.log(event.keyCode); // prints the key code  -> .keyCode
    let keyCode = event.keyCode;

    if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105) {  //keyCode >= 96 && keyCode <= 105 for numpad  0-9
        console.log("Number key pressed.");
        return;
    }
    event.preventDefault(); // stops the default behavior of the key
});

