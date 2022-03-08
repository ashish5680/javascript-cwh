console.log('tut3');

// Variables in js
// var, let, const


// var use in old times
// var ka global scope hota hai

var name = 'harry';
var channel;
var marks = 3454;
marks = 0;
// channel = 'CodeWithHarry'
console.log(name, channel, marks);


console.log('\n');





// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/



var city = 'Delhi';
console.log(city);


console.log('\n');




// const and let used in Modern JS, they are introduced in ES6



const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this because we use const (error)
console.log(ownersName);
const fruit = 'Orange';





console.log('\n');



// let ka block level scope hota hai (let se basically local level ban jata hai scope ka)
{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);




console.log('\n');





var game = 'Pokemon';
{
    var game = 'PubG';   
    console.log(game);
}
   console.log(game);












console.log('\n');






const arr1 = [12,23,12,53, 3];
arr1.push(45);
console.log(arr1)







/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 

*/
