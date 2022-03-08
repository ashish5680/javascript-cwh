

// see its Html in website.html


console.log('Welcome to tut 12.js');
//Undersatng DOM

console.log('\n');




// it is a object
let a = document; // ye pura ka pura DOM(Document Object Model) return kar dega which is a structural representation of HTML Document
// console.log(a);


// 1.
//a = document.all;        // ye saare ke saare HTML tags deta hai (Html Collection deta hai)



// 2.
// a = document.body;         // ye document ka joo body tag hai voo dedega



// 3.
// document.forms ek HTML Collection Hai
//a = document.forms[0];     // joo sabse first wala form hai voo aa jega







// 4.
// a = document.all;

// // Array.from(a), matlab a ki help se bna loo ek array, ek array bna leta hai Html Collection ki help se
// Array.from(a).forEach(function(element){     // ye saare ke saare elements ko print kar dega
//     console.log(element);
// });








// 5.
a = document.links[0];      // ye sabse first wala link fetch kar ke le aayega




// 6.
a = document.links[0].href;     // ye first link ka href de dega









console.log('\n');
console.log('\n');




// quiz
// use document.images and document.scripts and print the list of images and scripts on an html page
a = document.images;
Array.from(a).forEach(function(element){
    console.log(element);
});

a = document.scripts;
Array.from(a).forEach(function(element){
    console.log(element)
});
console.log('\n');   
// or we can use this 
for(let item of a){
    console.log(item);
};




console.log('\n');  
console.log('\n');  



console.log(a);
