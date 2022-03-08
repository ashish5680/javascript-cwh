console.log('This is tut 20');


console.log('\n');
console.log('\n');



// // Local Storage


let impArray = ['adrak', 'pyaz', 'bhindi'];

// window mai ek localStorage ka function bhi hota hai
// window.localStorage
// localStorage object ki form mai store hota hai


// Add a key-value pair inside local Storage
localStorage.setItem('Name', 'Harry');
localStorage.setItem('Name2', 'Rohan');
localStorage.setItem('Sabzi', JSON.stringify(impArray));
                              // array ko store karne ke liye ase karna padega


console.log('\n');






// Retrieve an item from the local Storage
// let naam = localStorage.getItem('Sabzi');
// console.log(naam);
// let bekar = localStorage.getItem('tbrtgbrtg');    // bekar mai null value chali jaigi
// console.log(bekar);    



// Clears the entire local storage
// localStorage.clear();






// Clear a particular key-value pair
// localStorage.removeItem('Name2');





console.log('\n');




// Retrieve an item from the local Storage
// let name1 = localStorage.getItem('Name');
// name2 = JSON.parse(localStorage.getItem('Sabzi'));          // JSOM.parse se array ki form mai show hoo jega
// console.log(name1);
// console.log(name2);














//////////////////////////////////////////////////////////////////////////////////////////



// // Session Storage


// browser band karke agar dubara browser mai aayege too session storage khali hoo jayegi, but local storage nahi hogi

// Store in Session
// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));








// Clears the entire session storage
// sessionStorage.clear();