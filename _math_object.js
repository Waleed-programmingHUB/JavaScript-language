// Math Object in Javascript

let _math = Math;
/*
    E: 2.718281828459045
    LN2: 0.6931471805599453
    LN10: 2.302585092994046
    LOG2E: 1.4426950408889634
    LOG10E: 0.4342944819032518
    PI: 3.141592653589793
    SQRT1_2: 0.7071067811865476
    SQRT2: 1.4142135623730951

*/
// print the functions from Math object
let u = 12.222;
let q = 5;
console.log('The Value of u and q is', u, q);
// Using Math Functions
console.log('The round of u and q is', Math.round(u), Math.round(q));
console.log('The power of u is', Math.pow(u, 2));
console.log('The Square Root of u', Math.sqrt(u));
// Ceil to floor
console.log('u round up to nearest integer is', Math.ceil(u));
console.log('u round down to nearest integer is', Math.floor(u));
// Absolute value
console.log('Absolute value of q ', Math.abs(q));
console.log('Absolute value of -q ', Math.abs(-12.222));
// Trigonomentric function
console.log('The Value of Sin(PI) is', Math.sin(Math.PI));
console.log('The Value of Sin Q is', Math.sin(q));
console.log('The Value of Cos Q is', Math.cos(q));
console.log('The Value of Tan Q is', Math.tan(q));
// Min & Max function
console.log('The Minimum number of q & u is', Math.min(q, u));
console.log('The Maximum number of q & u is', Math.max(q, u));
let rand_fun = () => {
    let heading_random = document.getElementById('random-num');
    // Generate Random number
    let ab = 1;
    let ba = 100;
    // Random Formula 
    let rand = ab + (ba - ab) * Math.random();
    let round_random = Math.round(rand);
    // Round the number
    heading_random.innerHTML = 'Random no. '+ round_random;
};
// Random Refresh number interval
setInterval(rand_fun, 2000);