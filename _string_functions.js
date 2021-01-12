// String Functions in Javascript

// Variable
var str = "Waleed-Sarwar";

// print to web page and h3-heading will be asign an ID here 
document.getElementById('heading-3').innerHTML = "Name : "+str;
// String Functions

var position = str.indexOf("ee"); // <- First Occurence of a substring
document.getElementById('index-of-var').innerHTML = "First Occurence of a substring : " + position;

position = str.lastIndexOf("d"); // <- Last Occurence of a substring
document.getElementById('last-index-of-var').innerHTML = "Last Occurence of a substring : " + position;

// var substr = str.slice(1,2); // <- Substring from a string, this will be take negative value
var substr = str.substring(1,2); // <- Substring from a string
document.getElementById('slice-of-var').innerHTML = "Substring from a string : " + substr;

var replace_name = str.replace('Sarwar','Ali'); // <- Replace the String
document.getElementById('replace-of-var').innerHTML = "Replace Name : " + replace_name;

// To Captial Letters
var _Captial_w = str.toUpperCase();
document.getElementById('upper-of-var').innerHTML = "Captical Letter Name : " +_Captial_w;

// To Small Letters
var _Small_w = str.toLowerCase();
document.getElementById('small-of-var').innerHTML = "Small Letter Name : " +_Small_w;

// Concatenate Letters
var _Concatenate_w = str.concat('-Javascript');
document.getElementById('concatenate-of-var').innerHTML = "Concatenate Letter Name : " +_Concatenate_w;

// Trim the space of Start & End
var _str_white_spaces = '   Javascript    Programming-Language    ';
console.log(_str_white_spaces.trim());

// This will return the code of UTF-16
console.log('return the code of UTF ' + _str_white_spaces.charCodeAt());
// This wil return the character
var e= 'the';
console.log('return the character ' + e.charAt(2));

