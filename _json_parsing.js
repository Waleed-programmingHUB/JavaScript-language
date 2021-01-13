// Json in Javascript 

// Object
let Ob_json = {
    name : 'Waleed',
    lang : 'urdu'
};
console.log(Ob_json);

let _json_ob = JSON.stringify(Ob_json);
console.log(_json_ob);
// Replace json value string
_json_ob_1 = _json_ob.replace('ali','Wa');
console.log(_json_ob_1);
new_json_ob = JSON.parse(_json_ob);
console.log(new_json_ob);   
