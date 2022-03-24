console.log('We are in tut7.js and lets discuss about arrays');
// Arrays and Objects in JS


console.log('\n');




let marks = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');

console.log(arr);
console.log(marks);
console.log(mixed);
console.log(fruits[1]);

console.log(arr.length);
console.log(Array.isArray('dfdf'));    // it return true or false



console.log('\n');
console.log('\n');





arr[0] = 'harry';
let arrelement = arr[0];
console.log('element :', arrelement);
console.log(arr);



let value = marks.indexOf(73);
console.log(value);





console.log('\n');
console.log('\n');


////////////////////////////////////////////////////////////////////////////////////////////



// Mutating or Modifying arrays

console.log(marks);

marks.push(3564);     // array ki end position pe push hoga
marks.unshift(1009);    // ye array ke front mai insert kar dega
marks.pop();        // array ki end position pe pop hoga
marks.shift()       // ye array ke front de delete kr dega

// marks.splice(2, 3);      // ye index 2 se start hoke 3 elements ko remove kar dega
// marks.reverse();


let marks2 = [1, 2, 3, 7];
marks = marks.concat(marks2);

console.log(marks);




//////////////////////////////////////////////////////////////////////////////////

console.log('\n');
console.log('\n');







// Objects  -->  object mai key value pair hoti hai joo value hoti hai usme hum strings, numbers, arrays kuch bhi daal sakte hai

let myobj = {
    'first name': 'harry', 
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj);
console.log(myobj['first name']);
console.log(myobj['channel']);
console.log(myobj.channel);
           
