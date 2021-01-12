// Condition & Scope ,Statements in Javascript
//  var -> Global Scope Variable
//  let -> Block Scope Variable
//  const -> Constant Scope Variable

//  Variable
var age = 20;

//  if-else conditional
if (age > 18) {
    document.getElementById('age-if').innerHTML = "Your Junior";
}
else {
    document.getElementById('age-if').innerHTML = "Your Senior";
}

//  if-else ladder conditional

if (age > 18) {
    document.getElementById('age-else-if').innerHTML = "You can drink water!";
}
else if (age == 2) {
    document.getElementById('age-else-if').innerHTML = "age is two";
}
else if (age == 10) {
    document.getElementById('age-else-if').innerHTML = "age is ten";
}
else {
    document.getElementById('age-else-if').innerHTML = "You can also drink water";
}

// Switch Statement
const items = 20;
switch (items) {
    case 5:
        document.getElementById('item-switch').innerHTML = "5 is present";
        break;
    case 10:
        document.getElementById('item-switch').innerHTML = "10 is present";
        break;
    case 15:
        document.getElementById('item-switch').innerHTML = "15 is present";
        break;
    case 20:
        document.getElementById('item-switch').innerHTML = "20 is present";
        break;
    default:
        document.getElementById('item-switch').innerHTML = "None of These";
        break;
}
