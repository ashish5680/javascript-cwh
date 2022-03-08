console.log('Welcome to tutorial 14');

// HTML(DOM) elements selectors in JS


console.log('\n');



/*
element selectors:
1. Single element selector
2. Multi element selector
*/




// 1. Single element selector


let element = document.getElementById('myfirst');
console.log(element);


// element = element.className;         // it return class name of element
// element = element.childNodes;        // iske child ke saari NodeList Print ho jegi
// element = element.parentNode;        // ye parent node print kar dega

element.style.color = 'red';     // it changes color to red


console.log(element);


element.innerText = 'Harry is a good boy';           // it changes innerText to this
element.innerHTML = '<b>Harry is a good boy</b>';       // it changes innerHTML to this
console.log(element.innerText);






console.log('\n');






// Query Selector   ->  is se first element milta hai
// These are single element DOM selector

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
// sel = document.querySelector('b');           // is se b tag wala first element mil jega
// sel = document.querySelector('h1');           // is se h1 tag ka first element mil jega
sel = document.querySelector('div');            // first wala div milega
sel.style.color = 'green';
console.log(sel)







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');











// 2. Multi element selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);
console.log(elems[0]);
console.log(elems[2]);
console.log(elems[0].getElementsByClassName('child'));





console.log('\n\n\n\n');





// We can use any of these loops

// Simple loop
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
   element.style.color = 'blue'; 
}


// // or

// For earh loop agar HTML Collections pe lagana hoo too ase likhege
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue'; 
// });







// console.log(elems[0].getElementsByClassName('child'));
