let count = 0;
const intervalId = setInterval(function () {
    count++;
    console.log("Number :", count);
    // if (count >= 10) {           // -------------------------------------> 1st way
    //     clearInterval(intervalId);
    // }
}, 1000);

setTimeout(function () {            // -------------------------------------> 2nd way
    clearInterval(intervalId);
}, 10500); 

