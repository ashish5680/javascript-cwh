console.log("This is tutorial 57");
// JavaScript Maps   // it stores key value pairs
// ye Maps JavaScript mai ES6 se hi include kiya gaya tha

console.log("\n");





// Maps in JavaScript: We can use any type of key or value
const myMap = new Map();
console.log(myMap);

const key1 = 'myStr', key2 = {}, key3 = function () { };




// Setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');
console.log(myMap);


console.log("\n");


// Getting the values from a Map 
let value1 = myMap.get(key3);
console.log("key3 : " + value1);



// Get the size of the map
console.log("Size of Map : " , myMap.size);


console.log("\n");
console.log("\n");
console.log("\n");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Maps are iteratale so I can iterate maps with for of loop

console.log("LOOP of Map : ")
// You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}

console.log("\n");



// Get only keys
for (let key of myMap.keys()) {
    console.log('key is : ', key);
}


console.log("\n");



// Get only values
for (let value of myMap.values()) {
    console.log('value is : ', value);
}






console.log("\n");




// You can loop through a map using for each loop
myMap.forEach((value, key)=>{
    console.log('Key is : ', key);
    console.log('Value is : ', value);
})




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////





console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");




// Converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);





// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is ', myKeysArray);





// Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is ', myValuesArray);
