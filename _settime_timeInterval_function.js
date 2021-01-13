// SetTime & SetTime-Interval in Javascript
/*
    SetTimeOut -> Allows us to run the function ,once after the interval of time
    ClearTimeOut -> Allows us to run the function repeatedly after the interval of time
*/

// Variable
var w = document.getElementById('wish-me');
var t = document.getElementById('time');
// Function
function Wish() {
    w.innerText = 'Hi User - Booom';
}

// Time Period Functions
// Set time function 
setTimeout(Wish,5000);
// time Out function
timeOut = setTimeout(Wish,5000);
clearTimeout(timeOut);

// Time Interval Function
// setInterval();

// Function
function showTime() {
    // Time Object
    time_c = new Date();
    t.innerHTML = 'Time :' + time_c;
}
setInterval(showTime,1000);

