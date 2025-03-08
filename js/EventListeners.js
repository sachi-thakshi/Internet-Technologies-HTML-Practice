console.log("EventListeners.js is loaded ...");

const box = document.querySelector('.box');
function test(){

}

// ======= single click event ============
// box.addEventListener('click', function() {
//     console.log("Clicked the box.");
// })

box.addEventListener('dbclick', function () {
    console.log("Double clicked the box.");
})