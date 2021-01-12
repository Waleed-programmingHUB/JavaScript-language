// Strings in JavaScript
var string_double_code = "Javascript String Double Code";
var string_single_code = 'Javascript String Single Code';
// Single & Double Strings using backticks -> ``
var whole_string = `${string_single_code} and ${string_double_code}`;
// print to browser developer console
console.log(whole_string);
// String Methods in JavaScript
var _length = whole_string.length;
console.log('String of Lenght is', _length);
// String Object Constructor
var s = new String("My String");
console.log(s);
// print to Div Id:content
document.getElementById('content').innerHTML = "<h1>From ES</h1>";
