// Arrays & Object in Javascript

// Variable
let _myNum = 34;
let _myStr = "Javascript";
let _myTrue = true;
let _myFalse = false;
let _myUndefined = undefined;

// Object
let student = {
    name : "Waleed",
    roll_number : 2123,
    session :2021,
    subjects :"Eng,urdu,Computer",
    class_name : 'Intermediate'
}
console.log(student);
// print the object
document.getElementById('object-array').innerHTML = "Object " + student;

// Array
let x = ["Array",1,2,3,"Waleed",true];
let y = new Array("Array-object",1,2,3,"Waleed",true);
// array functions
console.log('The Array length ' + x.length);
console.log('The Sorts an Array ' + x.sort());
console.log('The Push an Array ' + x.push("good-push"));
// print to console
console.log(x);
console.log(x[2]);
console.log(y);
// Notations Array
console.log(student.name);
console.log(student['name']);


