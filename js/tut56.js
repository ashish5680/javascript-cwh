console.log("This is tutorial 56 on for-in and for-of loops");

console.log("\n");



let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];





// Traditional for loop:
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);   
}


console.log("\n");





// **********For in loop*******        // Hum for in tab use krte hai agar hum kisi object ki keys ko le ke iterate karna chahate hai too aut hum ye string se sath bhi kar sakte hai




// 1. ITERATING AN OBJECT
let obj = {                          /// humara object kabhi bhi iterable nahi hota
    name: "Harry",
    language: "JavaScript",
    hobbies: "Android app development"
}


// console.log(obj);

// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }



// 1.2 Iterating an object using for-in loop:
for (let key in obj){
    console.log(obj[key]);
}





console.log("\n");



// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";

for (let char in myString){
    console.log(myString[char]);
}





console.log("\n");



// Quiz: Use traditional for loop to iterate through the same string
// for(let i = 0; i<myString.length; i++){
//     console.log(myString.charAt(i));
// }




console.log("\n");
console.log("\n");








//  **********For of loop***********      // we use for of loop if there is array or string because those are iterable
console.log("*****************For of loop starts here**************");
console.log("\n");



people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];


for(let name in people){   // yaha pe for in loop se array ki indexes mil jegi
    console.log(name);
}



for(let name of people){        // yaha pe array mai for of se array ki values mil jegi
    console.log(name);
}

console.log("\n");



for(let name of myString){
    console.log(name);
}
