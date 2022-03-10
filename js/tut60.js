console.log('This is tutorial 60');
// Destructuring in JavaScript

console.log("\n");




let a, b;
[a, b] = [34, 564];
console.log(a, b);





[a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];      // a mai 1 aa jega , b mai 2 , c mai 3 , baaki jitne bhi bache hai d mai aa jega three dots ki waje se
console.log(a)
console.log(b)
console.log(c)
console.log(d)




console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// Object Destructuring
({a, b, c, ...d} = {a: 34, b:345, c:67, d:45, e:34, f:21})
console.log(a, b, c, d);



console.log("\n");



// Array Destructuring
const fruits = ['Apple', 'Bananas', 'Mangoes'];
[a, b, c] = fruits;
console.log(a, b, c);




console.log("\n");




// Object Destructuring
const laptop ={
    model: "HP Pavilion",
    age: "23 days",
    gender: "Male",
    net: 1233,
    start: function (){console.log('started the start function');}
}


const {model, age, gender, net, start} = laptop;
console.log(model, age, gender, net, start);


console.log("\n");




start();    // calling the start function
laptop.start();