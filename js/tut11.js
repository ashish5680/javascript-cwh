console.log('This is tut 11');

// Manupulating Websites Using JS Window Object

// DOM (Document Object Model)


console.log('\n');







// // Part 1

// let a = window;
// console.log(a);


// window.alert('Hello Ashish');


// alert('Hello Ashish');    // hum isse ase bhi likh skte hai mujhay window likhne ki jrut nahi hai kuki window object ek global object hota hai Client Side JS ke andr, too isiliye hum window ke saare ke saare method ko as it is likh kr bhi hum apne client side mai execute karva sakte hai






















// Part 2

let a = window.document;

console.log(a);

// 1.
// alert('hello harry');



// 2.
// a = prompt('This will destroy your computer. Type your name');   // it returns the prompt value which we type.





// 3.
// a = confirm('Are you sure you want to delete this page?');     // it returns true or false





// 4. 
// a = window.innerHeight;     // ye simply window ki height btayega apna browser window ko chota bada kar ke check kro




// 5. 
// a = innerWidth;     // ye simply window ki width btayega apna browser window ko chota bada kar ke check kro








// 6. 
// a = scrollX;    // ye btayega ki scrollX kitna hua hua hai






// 7.
// a = scrollY;      // ye btayega ki scrollY kitna hua hua hai








// 8.1 
a = location;    // ye location ka pura object return kar dega








// 8.2 (try this only in browser console)
// a = location.reload();   // ye location ke andr reload wala function hai is se page reload hoo jega








// 8.3
// a = location.href;      // ye pura URL de dega



// 8.4
// a = location.toString();  // ye iski location bta dega like : http://127.0.0.1:5500/










//////////////
// 8.5  ( Isko console mai likh ke try kro ye amazon.com pe chala jega page)
// location.href = '//amazon.com';
//////////////








// 9.
a = window.history;    // ye history ka object return kar dega






// 9.2    ( try this in browser console )
// history.go(-1);    // ye ek page previos le jaaega jagha phle the
// history.go(1);    // ye ek step aage le jaayega
// history.length;    // ye history ki length bta dega 






console.log(a);          












