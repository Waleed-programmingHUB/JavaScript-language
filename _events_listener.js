// Events & listeners in Javascript

/*
    1. Click Event
    2. ContextMenu Event
    3. MouseOver / MosueOut Event
    4. MouseUp / MosueDown Event
    5. MosueMove Event
    6. Submit Event
    7. DOM Content Loaded Event
    8. Transtition Event
*/

// Function 
function toggle() {
    let sec = document.getElementById('j-section');
    // If-Else Conditional
    if (sec.style.display != 'none') {
        // using CSS properties
        sec.style.display = 'none';
    } else {
        sec.style.display = 'block';
    }
}

let section = document.getElementById('j-section');
// Listener
section.addEventListener('mouseover', function run() {
    let mi = document.getElementById('msg');
    // Text
    mi.innerHTML = "Mouse Inside";
    // CSS Style
    mi.style.color = 'red';
});
// Listener
section.addEventListener('mouseout',() => {
    let mo = document.getElementById('msg');
    // Text
    mo.innerHTML = "Mouse now went outside";
    // CSS Style
    mo.style.color = '#252727';
    mo.style.fontWeight = 'bolder';
});