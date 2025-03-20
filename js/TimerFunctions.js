console.log("TimerFunctions.js is loaded ...");


// ==================================== Timer functions ====================================

//  ===== setTimeout(function, delay) - executes a function after a specified delay (in milliseconds) ===== 
// const timeoutId = setTimeout(function () {
//     console.log("Hello World !");
// }, 5000); // 5000ms = 5s
// clearTimeout(timeoutId); // to stop the setTimeout() function  

//  ===== setInterval(function, delay) - executes a function repeatedly, with a fixed time delay between each call to that function =====
const intervalId = setInterval(function () {
    console.log("Hello World !");
}, 2000); // 2000ms = 2s
// clearInterval(intervalId); // to stop the setInterval() function