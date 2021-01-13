// Dates in Javascript

// full time print with standard
let dt = new Date ();
console.log(dt);

// reference time print with standard
let dt_2 = new Date (1000);
console.log(dt_2);

// let newdate = new Date (year , month , date , hours , minutes , seconds , milliseconds);
let newdate = new Date (3000 , 5 ,10 , 12 , 4,40,55);
let year = dt.getFullYear();
let date = dt.getDate();
let month = dt.getMonth();
let hours = dt.getHours();

let setD = document.getElementById('time-ob');
setD.innerHTML = date +'/'+month+'/'+year;
console.log(newdate);

