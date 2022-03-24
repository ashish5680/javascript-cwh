console.log("We are at tutorial 9");
// For , While and Do-While Loops

console.log('\n');

// console.log(1)
// console.log(2)
// console.log(3)








// let a =34;
// a +=1;
// a++;
// console.log(++a);
// console.log(a++);
// console.log(a);







// General Loops: for, while, do-while



// For Loop

// for(let i=0; i<100;i++){
//     console.log(i);
// }





// While Loop

// let j = 110;
// while (j < 10) {
//   console.log(j + 1);
//   j += 1;
// }





// do-while Loop

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);






//////////////////////////////////////////////////////////////////////////////





// Loops which help in iterate over array and objects


// Iterate over Arrays

let arr = [2,5,6,4,2,3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}


console.log('\n');



// For Each Loop
arr.forEach(function(element){
    console.log(element);
});


console.log('\n');


// For Each Loop
arr.forEach(function(element, index, array){
    console.log(element, index, array);
});








console.log('\n');
console.log('\n');
console.log('\n');









// Iterate over Objects

let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}





console.log('\n');


console.log('done');         
