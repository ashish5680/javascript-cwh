console.log('This is tutorial 58');
// JavaScript Sets


console.log('\n');



// Set stores unique values
const mySet = new Set();  // Initialize an empty set

console.log('The set looks like :' , mySet);




// Adding values to this set
mySet.add('this');               // 1
mySet.add('My name');            // 2
mySet.add('this');               // 1
mySet.add('that');               // 3
mySet.add(34);                   // 4
mySet.add(true);                 // 5
mySet.add(false);                // 6
mySet.add('that2');              // 7


console.log('The set looks like this now:' , mySet);


console.log('\n');



// Use a constructor to initialize the set
let mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']);
console.log('New set:' , mySet2);




console.log('\n');



// Get the size of the set
console.log("Size of mtSet : "  , mySet.size); 


// Check whether set has 346 or not
console.log("Has mySet 346 ? : " ,  mySet.has(346)); 



console.log('\n');



console.log('Before removal -> mySet has "that2" ? : ', mySet.has('that2'));
mySet.delete('that2'); // Remove an element from the set
console.log('After removal -> mySet has "that2" ? : ', mySet.has('that2'));








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('\n');
console.log('\n');
console.log('\n');



// Iterating a set with for of loop
// for(let item of mySet){
//     console.log('Item is  : ', item );
// }




// Iterating a set with forEach loop
mySet.forEach((item)=>{
    console.log('Item is  : ', item );
})








// Quiz: Can you use Array.from(mySet) to convert set into an array?
// Yes.