console.log("EventListeners.js is loaded ...");

const box = document.querySelector('.box');
function test(){

}

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
box.addEventListener('mouseout', function () {
    console.log("Mouse Out.");
})