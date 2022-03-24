console.log('this is tut 10');
// Functions and Scope in JavaScript

console.log('\n');






// One

function greet(name, thank){
    console.log(`Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`);
}

let name = 'Ashish';
greet(name, 'Thanks a lot');







console.log('\n');








// Two

function greet2(name2, thank){
    console.log(`Happy Birthday ${name2} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`);

    return 4;
}


let name2 = 'Rohan';

let val = greet2(name2, 'Thanks a lot');
console.log(val);















console.log('\n');










// Three

// yaha hum tank ki default value bhi daal sakte hai ki agar user ne nahi pas kiya ye thank wala too undefined na de ye default value de de
 function greet3(name3, thank = 'Thank You !!!'){
    console.log(`Happy Birthday ${name3} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`);
}


let name3 = 'Khushi';

let val2 = greet3(name3);
console.log(val2);                   













console.log('\n');









// Four

// Hum ase ek function ko variable ke andr bhi daal skte h
const mygreet = function(name4, thank='Thank You'){
    let msg = `Happy Birthday ${name4} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;

}


let name4 = 'Bhuvan';

let val3 = mygreet(name4, 'Thanks a lot');
console.log(val3);





















console.log('\n');
console.log('\n');









const myobj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game());
console.log(myobj.name);






console.log('\n');






arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});      







console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////








// Scope of Variables


console.log("Scope of Variable")
console.log('\n');



// Part 1
var i = 234;
console.log(i);


function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry") , i);














console.log('\n\n');












//Part 2
let j = 234;
console.log(j);


function uj(name)
{
    let j = 9;
    console.log(j);
    return `This is a ${name} uj`;
}

console.log(uj("ashish"), j);









console.log('\n\n');













// Part 3

if(1){
    var p =234;         // agr isko var bana du too iska scope global rahata hai , var ka block level scope nahi hota, but if I make this let then let ka scope block level scope hota hai.
    console.log(p);
}

console.log(p);


function uk(name){
    let p = 9;
    console.log(p);
    return `This is a ${name} uk`
}

console.log(uk('Khushi') , p);













console.log('\n\n');












// JavaScript Hoisting

// hoisting is a JS behaviour in which a variable declare with var keyword is taken to the top of the scope in which the declare in.

m = 344;

console.log("Hoisting before: " + m);

var m;

console.log("Hoisting after: " + m);
