// Function in Javascript
var name = 'Ali Sarwar';
// Take one paramenter function
function Hi(name) {
    console.log('Hi! '+name);
}
// Take multi-parameter function
function sumN(num1 = 0,num2 = 0) {
    console.log('Sum Function ' + (num1 + num2));
}
// Take Default value 
function sumN_2(num1 = 0,num2 = 0) {
    console.log('Sum Function ' + (num1 + num2));
}
// Take Return value 
function subtract(num1 = 0,num2 = 0) {
    let sub = num1 - num2;
    return sub;
}

// Arrow Function
let g = ()=>{
    console.log('Arrow Function');
};

g();
// function call
Hi(name);
sumN(5,5);
sumN_2();
console.log('Return Subtract ' + subtract(5,4)); 