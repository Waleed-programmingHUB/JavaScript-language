// Loops in Javascript

// For Loop Javascript
for (let x = 1; x < 10; x++) {
    // print the number
    console.log('For Loop', x);
}

// Array
let lang = [
    'Php',
    'C/C++',
    'C#',
    'SQL',
    'Java',
    'Javascript',
    'Python',
    'ASP.NET'
];
// For Loop
for (let index = 0; index < lang.length; index++) {
    const element = 'Programming Language \t' + lang[index];
    console.log(element);
}
// For Each Loop -> working like a for loop
lang.forEach(function l(el) {
    console.log('Using ForEach Loop', el);
});

// For Of Loop
// This Loop to iterate over 'Array' in Javascript
for (list of lang) {
    console.log('Using For Of Loop', list);
}

// Object
var person = {
    name: "Ali",
    religion: "Islam",
};

// This Loop to iterate over 'Object' in Javascript
for (ob in person) {
    console.log(`The ${ob} : ${person[ob]}`);
}

// While Loop
let k = 0;
while (k < 10) {
    console.log(`Using While Loop : ${k} is less than 10`);
    k++;
}

// Do While Loop
let h = 10;
do {
    console.log(`Using Do While Loop ${h} is less than 10`);
    h++;
} while (h < 10); 